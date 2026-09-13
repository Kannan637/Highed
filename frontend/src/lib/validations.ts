import { LeadSubmission, LeadPopupData } from "@/types/lead";

export interface ValidationError {
  field: keyof LeadSubmission | keyof LeadPopupData;
  message: string;
}

export function sanitizeString(val: unknown): string {
  if (typeof val !== "string") return "";
  return val.replace(/<[^>]*>?/gm, "").trim();
}

export function validateLeadSubmission(data: LeadSubmission): ValidationError[] {
  const errors: ValidationError[] = [];

  const fullName = sanitizeString(data.fullName);
  if (!fullName || fullName.length < 2) {
    errors.push({
      field: "fullName",
      message: "Full name must be at least 2 characters long.",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.push({
      field: "email",
      message: "Please enter a valid email address.",
    });
  }

  const cleanPhone = sanitizeString(data.phone).replace(/\s/g, "");
  const countryCode = data.countryCode || "+91";

  if (!cleanPhone) {
    errors.push({
      field: "phone",
      message: "Please enter your mobile number.",
    });
  } else if (countryCode === "+91" && !/^[6-9]\d{9}$/.test(cleanPhone)) {
    errors.push({
      field: "phone",
      message: "Please enter a valid 10-digit Indian mobile number.",
    });
  } else if (cleanPhone.length < 7 || cleanPhone.length > 15 || !/^\d+$/.test(cleanPhone)) {
    errors.push({
      field: "phone",
      message: "Please enter a valid phone number (7-15 digits).",
    });
  }

  return errors;
}

export function validateLeadPopup(data: LeadPopupData): ValidationError[] {
  const errors: ValidationError[] = [];
  const cleanPhone = sanitizeString(data.phone).replace(/\s/g, "");

  if (!cleanPhone) {
    errors.push({
      field: "phone",
      message: "Please enter your mobile number.",
    });
  } else if (data.countryCode === "+91" && !/^[6-9]\d{9}$/.test(cleanPhone)) {
    errors.push({
      field: "phone",
      message: "Please enter a valid 10-digit Indian mobile number.",
    });
  } else if (cleanPhone.length < 7 || cleanPhone.length > 15 || !/^\d+$/.test(cleanPhone)) {
    errors.push({
      field: "phone",
      message: "Please enter a valid phone number (7-15 digits).",
    });
  }

  return errors;
}
