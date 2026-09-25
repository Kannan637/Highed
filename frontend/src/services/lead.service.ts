import { LeadSubmission, LeadResponse } from "@/types/lead";

export class LeadService {
  static async submitLead(payload: LeadSubmission): Promise<LeadResponse> {
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to submit counseling request.");
      }

      return await response.json();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred.";
      return {
        success: false,
        message,
      };
    }
  }

  static async submitPopupLead(payload: {
    countryCode: string;
    phone: string;
    source?: string;
    page?: string;
  }): Promise<LeadResponse> {
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to submit request.");
      }

      return await response.json();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred.";
      return {
        success: false,
        message,
      };
    }
  }
}

export default LeadService;
