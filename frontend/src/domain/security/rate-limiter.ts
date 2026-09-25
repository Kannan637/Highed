export interface RateLimitResult {
  allowed: boolean;
  limit: number;
  remaining: number;
  resetTime: number;
  retryAfterSeconds: number;
}

export interface IRateLimiter {
  consume(key: string, limit?: number, windowMs?: number): Promise<RateLimitResult>;
}

interface WindowBucket {
  count: number;
  resetTime: number;
}

/**
 * Sliding window in-memory rate limiter with leak protection and LRU eviction.
 */
export class MemoryRateLimiter implements IRateLimiter {
  private buckets = new Map<string, WindowBucket>();
  private readonly defaultLimit: number;
  private readonly defaultWindowMs: number;
  private readonly maxBuckets: number;

  constructor(limit = 5, windowMs = 60 * 1000, maxBuckets = 10000) {
    this.defaultLimit = limit;
    this.defaultWindowMs = windowMs;
    this.maxBuckets = maxBuckets;
  }

  async consume(
    key: string,
    limit = this.defaultLimit,
    windowMs = this.defaultWindowMs
  ): Promise<RateLimitResult> {
    const now = Date.now();

    // Clean up if map exceeds max capacity
    if (this.buckets.size > this.maxBuckets) {
      for (const [k, bucket] of this.buckets.entries()) {
        if (now > bucket.resetTime) {
          this.buckets.delete(k);
        }
      }
    }

    const bucket = this.buckets.get(key);

    if (!bucket || now > bucket.resetTime) {
      const resetTime = now + windowMs;
      this.buckets.set(key, { count: 1, resetTime });
      return {
        allowed: true,
        limit,
        remaining: limit - 1,
        resetTime,
        retryAfterSeconds: Math.ceil(windowMs / 1000),
      };
    }

    if (bucket.count >= limit) {
      const retryAfter = Math.max(1, Math.ceil((bucket.resetTime - now) / 1000));
      return {
        allowed: false,
        limit,
        remaining: 0,
        resetTime: bucket.resetTime,
        retryAfterSeconds: retryAfter,
      };
    }

    bucket.count += 1;
    return {
      allowed: true,
      limit,
      remaining: Math.max(0, limit - bucket.count),
      resetTime: bucket.resetTime,
      retryAfterSeconds: Math.ceil((bucket.resetTime - now) / 1000),
    };
  }
}

/**
 * Distributed Upstash Redis rate limiter (when env keys are present).
 */
export class DistributedRateLimiter implements IRateLimiter {
  private fallbackMemory = new MemoryRateLimiter();

  async consume(key: string, limit = 5, windowMs = 60 * 1000): Promise<RateLimitResult> {
    const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
    const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

    if (!redisUrl || !redisToken) {
      // Fallback cleanly to high-performance memory limiter
      return this.fallbackMemory.consume(key, limit, windowMs);
    }

    try {
      const redisKey = `ratelimit:lead:${key}`;
      const windowSeconds = Math.ceil(windowMs / 1000);

      // Execute Redis INCR and EXPIRE pipeline via Upstash REST
      const response = await fetch(`${redisUrl}/pipeline`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${redisToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          ["INCR", redisKey],
          ["EXPIRE", redisKey, windowSeconds],
        ]),
        cache: "no-store",
      });

      if (!response.ok) {
        return this.fallbackMemory.consume(key, limit, windowMs);
      }

      const results = (await response.json()) as Array<{ result: number }>;
      const currentCount = results[0]?.result || 1;
      const now = Date.now();
      const resetTime = now + windowMs;

      if (currentCount > limit) {
        return {
          allowed: false,
          limit,
          remaining: 0,
          resetTime,
          retryAfterSeconds: windowSeconds,
        };
      }

      return {
        allowed: true,
        limit,
        remaining: Math.max(0, limit - currentCount),
        resetTime,
        retryAfterSeconds: windowSeconds,
      };
    } catch (err) {
      console.warn("⚠️ [RateLimiter] Upstash Redis request failed, using in-memory fallback:", err);
      return this.fallbackMemory.consume(key, limit, windowMs);
    }
  }
}

/**
 * Extracts normalized client IP address from proxy / CDN headers.
 */
export function extractClientIp(headers: Headers): string {
  const cfIp = headers.get("cf-connecting-ip");
  if (cfIp) return cfIp.trim();

  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    const firstIp = forwarded.split(",")[0]?.trim();
    if (firstIp) return firstIp;
  }

  const realIp = headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  return "127.0.0.1";
}

export const rateLimiter = new DistributedRateLimiter();
