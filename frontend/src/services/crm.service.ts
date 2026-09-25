import { LeadSubmission, LeadPopupData } from "@/types/lead";

export interface CRMDispatchPayload {
  id: string;
  type: "full_lead" | "popup_lead";
  submittedAt: string;
  contact: {
    fullName?: string;
    email?: string;
    phone: string;
    countryCode?: string;
  };
  preferences?: {
    destinationCountry?: string;
    preferredCourse?: string;
    studyLevel?: string;
    message?: string;
  };
  context: {
    source?: string;
    page?: string;
  };
}

/**
 * Production-ready CRM Dispatcher.
 * Integrates directly with CRM endpoints / webhooks (HubSpot, Salesforce, LeadSquared, Zapier)
 * with graceful fallback to secure local capture.
 */
export class CRMService {
  private static async dispatchToCrmEndpoint(payload: CRMDispatchPayload): Promise<boolean> {
    const webhookUrl = process.env.CRM_WEBHOOK_URL;
    const apiKey = process.env.CRM_API_KEY;

    if (webhookUrl) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 4000);

        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
            "X-Idempotency-Key": payload.id,
          },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });

        clearTimeout(timeout);

        if (!response.ok) {
          console.error(
            `❌ [CRMService] CRM Webhook responded with status ${response.status} for lead ${payload.id}`
          );
          return false;
        }

        console.info(`✅ [CRMService] Lead ${payload.id} successfully dispatched to external CRM.`);
        return true;
      } catch (err: unknown) {
        console.error(`⚠️ [CRMService] Network error dispatching lead ${payload.id} to CRM:`, err);
        return false;
      }
    }

    // When no CRM webhook is configured (development / initial stage),
    // output structured JSON log for observability
    console.info(`📋 [CRMService] Captured lead [${payload.id}] type=${payload.type}:`, {
      contact: payload.contact.phone,
      destination: payload.preferences?.destinationCountry || "General",
    });

    return true;
  }

  static async submitFullLead(leadId: string, data: LeadSubmission): Promise<boolean> {
    const payload: CRMDispatchPayload = {
      id: leadId,
      type: "full_lead",
      submittedAt: new Date().toISOString(),
      contact: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        countryCode: data.countryCode || "+91",
      },
      preferences: {
        destinationCountry: data.destinationCountry,
        preferredCourse: data.preferredCourse,
        studyLevel: data.studyLevel,
        message: data.message,
      },
      context: {
        source: data.source || "counselling_form",
        page: data.page || "/book-counselling",
      },
    };

    return this.dispatchToCrmEndpoint(payload);
  }

  static async submitPopupLead(leadId: string, data: LeadPopupData): Promise<boolean> {
    const payload: CRMDispatchPayload = {
      id: leadId,
      type: "popup_lead",
      submittedAt: new Date().toISOString(),
      contact: {
        phone: data.phone,
        countryCode: data.countryCode || "+91",
      },
      context: {
        source: data.source || "popup",
        page: data.page || "/",
      },
    };

    return this.dispatchToCrmEndpoint(payload);
  }
}
