import { NextRequest, NextResponse } from "next/server";
import {
  validateLeadSubmission,
  validateLeadPopup,
  sanitizeString,
  ValidationError,
} from "@/lib/validations";
import { LeadSubmission, LeadPopupData } from "@/types/lead";
import { CRMService } from "@/services/crm.service";

// Simple in-memory rate limiting map: IP -> { count, resetTime }
interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // Clean expired keys if map grows large
  if (rateLimitMap.size > 10000) {
    for (const [key, val] of rateLimitMap.entries()) {
      if (now > val.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW_MS,
    });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  record.count += 1;
  return true;
}

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  return "127.0.0.1";
}

export async function POST(req: NextRequest) {
  try {
    // 1. Content-Type validation (ISS-034)
    const contentType = req.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      return NextResponse.json(
        { success: false, message: "Invalid content type." },
        { status: 415 }
      );
    }

    // 2. Origin validation (ISS-002)
    const origin = req.headers.get("origin") || req.headers.get("referer") || "";
    const allowedOrigins = [
      "https://highed.org",
      "https://www.highed.org",
      "http://localhost:3000",
      "http://localhost",
    ];
    const isValidOrigin = allowedOrigins.some((allowed) =>
      origin.startsWith(allowed)
    );
    if (!isValidOrigin && origin !== "") {
      return NextResponse.json(
        { success: false, message: "Unauthorized request origin." },
        { status: 403 }
      );
    }

    // 3. Rate Limiting
    // NOTE: This in-memory rate limiter is a best-effort fallback.
    // In serverless/multi-instance environments (e.g., Vercel), replace with
    // Upstash Redis (@upstash/ratelimit) or Cloudflare rate limiting.
    const clientIp = getClientIp(req);
    const isAllowed = checkRateLimit(clientIp);

    if (!isAllowed) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please wait a minute before submitting again.",
        },
        { status: 429 }
      );
    }

    // 4. Parse payload
    const rawBody = await req.json().catch(() => null);
    if (!rawBody || typeof rawBody !== "object") {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request payload.",
        },
        { status: 400 }
      );
    }

    // 5. Honeypot — reject if hidden 'company' field is filled (ISS-002)
    if (rawBody.company && typeof rawBody.company === "string" && rawBody.company.trim() !== "") {
      // Silently succeed to not reveal bot detection to attacker
      return NextResponse.json(
        {
          success: true,
          message: "Your request has been received! Our counsellor will call you shortly.",
          leadId: `lead_${Date.now()}_rejected`,
        },
        { status: 200 }
      );
    }

    // 3. Determine submission type & validate
    let errors: ValidationError[] = [];
    const leadId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

    // Quick popup form submission (phone-only)
    if ("countryCode" in rawBody && !("fullName" in rawBody) && !("email" in rawBody)) {
      const popupData: LeadPopupData = {
        countryCode: sanitizeString(rawBody.countryCode) || "+91",
        phone: sanitizeString(rawBody.phone),
        source: sanitizeString(rawBody.source) || "popup",
        page: sanitizeString(rawBody.page) || "/",
      };

      errors = validateLeadPopup(popupData);
      if (errors.length > 0) {
        return NextResponse.json(
          {
            success: false,
            message: errors[0].message,
            errors,
          },
          { status: 400 }
        );
      }

      // Persist lead
      const saved = await CRMService.submitPopupLead(leadId, popupData);
      
      if (!saved) {
        return NextResponse.json(
          {
            success: false,
            message: "Failed to save your request. Please try again.",
          },
          { status: 500 }
        );
      }

      return NextResponse.json(
        {
          success: true,
          message: "Your request has been received! Our counsellor will call you shortly.",
          leadId,
        },
        { status: 200 }
      );
    }

    // Full counselling form submission
    const fullData: LeadSubmission = {
      fullName: sanitizeString(rawBody.fullName),
      email: sanitizeString(rawBody.email).toLowerCase(),
      phone: sanitizeString(rawBody.phone),
      destinationCountry: sanitizeString(rawBody.destinationCountry),
      preferredCourse: sanitizeString(rawBody.preferredCourse),
      studyLevel: sanitizeString(rawBody.studyLevel),
      message: sanitizeString(rawBody.message),
    };

    errors = validateLeadSubmission(fullData);
    if (errors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: errors[0].message,
          errors,
        },
        { status: 400 }
      );
    }

    // Persist full lead
    const saved = await CRMService.submitFullLead(leadId, fullData);

    if (!saved) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to save your counselling request. Please try again later.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your counselling request has been received! An expert advisor will contact you within 24 hours.",
        leadId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error. Please try again later.",
      },
      { status: 500 }
    );
  }
}
