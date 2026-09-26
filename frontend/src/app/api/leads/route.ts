import { NextRequest, NextResponse } from "next/server";
import { domainLeadService, ValidationError, PersistenceError } from "@/domain/leads";
import { rateLimiter, extractClientIp } from "@/domain/security/rate-limiter";

const ALLOWED_ORIGINS = [
  "https://highed.in",
  "https://www.highed.in",
  "https://highed.org",
  "https://www.highed.org",
  "https://highed-rho.vercel.app",
  "http://localhost:3000",
  "http://localhost",
];

export async function POST(req: NextRequest) {
  try {
    // 1. Content-Type verification
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { success: false, message: "Invalid Content-Type. Expected application/json." },
        { status: 415 }
      );
    }

    // 2. Origin / Referer validation
    const origin = req.headers.get("origin") || req.headers.get("referer") || "";
    if (origin) {
      const isValidOrigin =
        ALLOWED_ORIGINS.some((allowed) => origin.startsWith(allowed)) ||
        /^https:\/\/[a-zA-Z0-9_.-]+\.vercel\.app/.test(origin);
      if (!isValidOrigin) {
        return NextResponse.json(
          { success: false, message: "Unauthorized request origin." },
          { status: 403 }
        );
      }
    }

    // 3. Distributed / Memory-safe Rate Limiting
    const clientIp = extractClientIp(req.headers);
    const rateLimit = await rateLimiter.consume(clientIp, 5, 60 * 1000);

    const headers = {
      "X-RateLimit-Limit": rateLimit.limit.toString(),
      "X-RateLimit-Remaining": rateLimit.remaining.toString(),
      "X-RateLimit-Reset": rateLimit.resetTime.toString(),
    };

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many submissions. Please wait a minute before trying again.",
          retryAfter: rateLimit.retryAfterSeconds,
        },
        {
          status: 429,
          headers: {
            ...headers,
            "Retry-After": rateLimit.retryAfterSeconds.toString(),
          },
        }
      );
    }

    // 4. Parse JSON payload safely
    const rawBody = await req.json().catch(() => null);
    if (!rawBody || typeof rawBody !== "object") {
      return NextResponse.json(
        { success: false, message: "Malformed or empty request payload." },
        { status: 400, headers }
      );
    }

    const metadata = {
      ip: clientIp,
      userAgent: req.headers.get("user-agent") || undefined,
      referer: origin || undefined,
    };

    // 5. Route to proper domain handler
    const isPopupSubmission =
      "phone" in rawBody &&
      !("fullName" in rawBody) &&
      !("email" in rawBody);

    const result = isPopupSubmission
      ? await domainLeadService.processPopupLead(rawBody, metadata)
      : await domainLeadService.processFullLead(rawBody, metadata);

    return NextResponse.json(result, { status: 200, headers });
  } catch (error: unknown) {
    if (error instanceof ValidationError) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    if (error instanceof PersistenceError) {
      return NextResponse.json(
        {
          success: false,
          message: "Could not securely save your request. Please try again shortly.",
        },
        { status: 500 }
      );
    }

    console.error("Unhandled error in /api/leads:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
