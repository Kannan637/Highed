import { z } from "zod";
import { leadSubmissionSchema, leadPopupSchema } from "./schema";

export type LeadSubmissionInput = z.input<typeof leadSubmissionSchema>;
export type LeadSubmissionData = z.output<typeof leadSubmissionSchema>;

export type LeadPopupInput = z.input<typeof leadPopupSchema>;
export type LeadPopupData = z.output<typeof leadPopupSchema>;

export interface LeadMetadata {
  ip: string;
  userAgent?: string;
  referer?: string;
  country?: string;
  city?: string;
}

export interface LeadAuditRecord {
  timestamp: string;
  action: "captured" | "persisted" | "crm_dispatched" | "crm_failed" | "honeypot_dropped";
  details?: Record<string, unknown>;
}

export interface LeadEntity {
  id: string;
  type: "full_counselling" | "popup_quick";
  createdAt: string;
  status: "persisted" | "synced_crm" | "crm_failed" | "honeypot_blocked";
  data: LeadSubmissionData | LeadPopupData;
  metadata: LeadMetadata;
  auditTrail: LeadAuditRecord[];
}

export interface LeadSubmissionResponse {
  success: boolean;
  message: string;
  leadId?: string;
  errors?: { field: string; message: string }[];
}
