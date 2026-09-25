import { z } from "zod";

/**
 * Strips HTML tags and normalizes strings to prevent XSS.
 */
export function sanitizeText(val: unknown): string {
  if (typeof val !== "string") return "";
  return val.replace(/<[^>]*>?/gm, "").trim();
}

/**
 * Validates phone numbers by country code.
 * Indian (+91) numbers require a valid 10-digit mobile number starting with 6-9.
 * International numbers require 7 to 15 digits.
 */
export function validatePhoneNumber(countryCode: string, phone: string): string | null {
  const clean = sanitizeText(phone).replace(/\D/g, "");
  if (!clean) {
    return "Please enter your mobile number.";
  }

  const normalizedCode = countryCode.trim().startsWith("+")
    ? countryCode.trim()
    : `+${countryCode.trim()}`;

  if (normalizedCode === "+91") {
    if (!/^[6-9]\d{9}$/.test(clean)) {
      return "Please enter a valid 10-digit Indian mobile number.";
    }
  } else {
    if (clean.length < 7 || clean.length > 15) {
      return "Please enter a valid phone number (7-15 digits).";
    }
  }

  return null;
}

/**
 * Comprehensive Lead Submission Schema (Single source of truth).
 */
export const leadSubmissionSchema = z
  .object({
    fullName: z
      .string()
      .min(1, "Full name is required.")
      .transform(sanitizeText)
      .refine((val) => val.length >= 2, {
        message: "Full name must be at least 2 characters long.",
      })
      .refine((val) => val.length <= 100, {
        message: "Full name cannot exceed 100 characters.",
      }),

    email: z
      .string()
      .min(1, "Email is required.")
      .transform((val) => sanitizeText(val).toLowerCase())
      .refine(
        (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        { message: "Please enter a valid email address." }
      )
      .refine((val) => val.length <= 255, {
        message: "Email address cannot exceed 255 characters.",
      }),

    phone: z
      .string()
      .min(1, "Mobile number is required.")
      .transform((val) => sanitizeText(val).replace(/\D/g, "")),

    countryCode: z
      .string()
      .optional()
      .default("+91")
      .transform((val) => sanitizeText(val) || "+91"),

    destinationCountry: z
      .string()
      .optional()
      .default("Dubai")
      .transform((val) => sanitizeText(val) || "Dubai"),

    preferredCourse: z
      .string()
      .optional()
      .default("")
      .transform(sanitizeText),

    studyLevel: z
      .string()
      .optional()
      .default("Master's Degree")
      .transform((val) => sanitizeText(val) || "Master's Degree"),

    message: z
      .string()
      .optional()
      .default("")
      .transform(sanitizeText)
      .refine((val) => val.length <= 2000, {
        message: "Message cannot exceed 2000 characters.",
      }),

    // Honeypot field: Must remain empty. If filled, bot submission is flagged.
    company: z
      .string()
      .optional()
      .default(""),

    source: z
      .string()
      .optional()
      .default("website")
      .transform((val) => sanitizeText(val) || "website"),

    page: z
      .string()
      .optional()
      .default("/")
      .transform((val) => sanitizeText(val) || "/"),
  })
  .superRefine((data, ctx) => {
    const phoneError = validatePhoneNumber(data.countryCode, data.phone);
    if (phoneError) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["phone"],
        message: phoneError,
      });
    }
  });

/**
 * Quick Lead Popup Schema (Phone-only capture).
 */
export const leadPopupSchema = z
  .object({
    countryCode: z
      .string()
      .optional()
      .default("+91")
      .transform((val) => sanitizeText(val) || "+91"),

    phone: z
      .string()
      .min(1, "Mobile number is required.")
      .transform((val) => sanitizeText(val).replace(/\D/g, "")),

    // Honeypot field
    company: z
      .string()
      .optional()
      .default(""),

    source: z
      .string()
      .optional()
      .default("popup")
      .transform((val) => sanitizeText(val) || "popup"),

    page: z
      .string()
      .optional()
      .default("/")
      .transform((val) => sanitizeText(val) || "/"),
  })
  .superRefine((data, ctx) => {
    const phoneError = validatePhoneNumber(data.countryCode, data.phone);
    if (phoneError) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["phone"],
        message: phoneError,
      });
    }
  });
