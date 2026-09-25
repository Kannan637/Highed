import { LeadSubmission, LeadPopupData } from "@/types/lead";
import {
  leadSubmissionSchema,
  leadPopupSchema,
  sanitizeText,
} from "@/domain/leads/schema";

export interface ValidationError {
  field: keyof LeadSubmission | keyof LeadPopupData;
  message: string;
}

export const sanitizeString = sanitizeText;

/**
 * Validates full lead submission using the domain Zod schema (Single Source of Truth).
 */
export function validateLeadSubmission(data: LeadSubmission): ValidationError[] {
  const result = leadSubmissionSchema.safeParse(data);
  if (result.success) return [];

  return result.error.issues.map((issue) => ({
    field: (issue.path[0] as keyof LeadSubmission) || "fullName",
    message: issue.message,
  }));
}

/**
 * Validates quick popup submission using the domain Zod schema.
 */
export function validateLeadPopup(data: LeadPopupData): ValidationError[] {
  const result = leadPopupSchema.safeParse(data);
  if (result.success) return [];

  return result.error.issues.map((issue) => ({
    field: (issue.path[0] as keyof LeadPopupData) || "phone",
    message: issue.message,
  }));
}
