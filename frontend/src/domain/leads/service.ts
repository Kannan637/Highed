import {
  leadSubmissionSchema,
  leadPopupSchema,
} from "./schema";
import {
  LeadEntity,
  LeadMetadata,
  LeadSubmissionResponse,
} from "./types";
import { ILeadRepository, defaultLeadRepository } from "./repository";
import { ValidationError, PersistenceError } from "./errors";
import { CRMService } from "@/services/crm.service";

export class DomainLeadService {
  constructor(private readonly repository: ILeadRepository = defaultLeadRepository) {}

  /**
   * Process a full counselling application.
   */
  async processFullLead(
    rawInput: unknown,
    metadata: LeadMetadata
  ): Promise<LeadSubmissionResponse> {
    // 1. Schema Validation (Single Source of Truth)
    const parseResult = leadSubmissionSchema.safeParse(rawInput);
    if (!parseResult.success) {
      const formattedErrors = parseResult.error.issues.map((issue) => ({
        field: issue.path.join(".") || "form",
        message: issue.message,
      }));
      throw new ValidationError(
        formattedErrors[0]?.message || "Invalid lead submission data.",
        formattedErrors
      );
    }

    const data = parseResult.data;

    // 2. Honeypot check (bot trap)
    if (data.company && data.company.trim() !== "") {
      console.warn("🛡️ [LeadService] Bot honeypot triggered by IP:", metadata.ip);
      return {
        success: true,
        message: "Your counselling request has been received! An expert advisor will contact you within 24 hours.",
        leadId: `lead_${Date.now()}_rejected`,
      };
    }

    // 3. Create persistent lead entity
    const leadId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
    const nowIso = new Date().toISOString();

    const leadEntity: LeadEntity = {
      id: leadId,
      type: "full_counselling",
      createdAt: nowIso,
      status: "persisted",
      data,
      metadata,
      auditTrail: [
        {
          timestamp: nowIso,
          action: "captured",
          details: { source: data.source, page: data.page },
        },
      ],
    };

    // 4. Persistence First - "No lead should be considered successful until persistence succeeds."
    try {
      await this.repository.save(leadEntity);
    } catch (saveError) {
      console.error("❌ [LeadService] Persistence failed:", saveError);
      throw new PersistenceError("Failed to securely store lead record. Please try again later.");
    }

    // 5. CRM Dispatch (resilient - CRM failure does not lose the lead)
    try {
      const crmSuccess = await CRMService.submitFullLead(leadId, {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        countryCode: data.countryCode,
        destinationCountry: data.destinationCountry,
        studyLevel: data.studyLevel,
        preferredCourse: data.preferredCourse,
        message: data.message,
      });

      if (crmSuccess) {
        leadEntity.status = "synced_crm";
        leadEntity.auditTrail.push({
          timestamp: new Date().toISOString(),
          action: "crm_dispatched",
        });
      } else {
        leadEntity.status = "crm_failed";
        leadEntity.auditTrail.push({
          timestamp: new Date().toISOString(),
          action: "crm_failed",
          details: { reason: "CRMService returned false" },
        });
      }
    } catch (crmError) {
      console.error("⚠️ [LeadService] CRM sync failed, lead safely preserved in repository:", crmError);
      leadEntity.status = "crm_failed";
    }

    return {
      success: true,
      message: "Your counselling request has been received! An expert advisor will contact you within 24 hours.",
      leadId,
    };
  }

  /**
   * Process a quick popup lead (phone-only).
   */
  async processPopupLead(
    rawInput: unknown,
    metadata: LeadMetadata
  ): Promise<LeadSubmissionResponse> {
    const parseResult = leadPopupSchema.safeParse(rawInput);
    if (!parseResult.success) {
      const formattedErrors = parseResult.error.issues.map((issue) => ({
        field: issue.path.join(".") || "form",
        message: issue.message,
      }));
      throw new ValidationError(
        formattedErrors[0]?.message || "Invalid mobile number.",
        formattedErrors
      );
    }

    const data = parseResult.data;

    // Honeypot check
    if (data.company && data.company.trim() !== "") {
      console.warn("🛡️ [LeadService] Bot honeypot triggered by IP:", metadata.ip);
      return {
        success: true,
        message: "Your request has been received! Our counsellor will call you shortly.",
        leadId: `lead_${Date.now()}_rejected`,
      };
    }

    const leadId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
    const nowIso = new Date().toISOString();

    const leadEntity: LeadEntity = {
      id: leadId,
      type: "popup_quick",
      createdAt: nowIso,
      status: "persisted",
      data,
      metadata,
      auditTrail: [
        {
          timestamp: nowIso,
          action: "captured",
          details: { source: data.source, page: data.page },
        },
      ],
    };

    // Persistence First
    try {
      await this.repository.save(leadEntity);
    } catch (saveError) {
      console.error("❌ [LeadService] Persistence failed:", saveError);
      throw new PersistenceError("Failed to securely store request. Please try again later.");
    }

    // CRM Dispatch
    try {
      const crmSuccess = await CRMService.submitPopupLead(leadId, {
        phone: data.phone,
        countryCode: data.countryCode,
        source: data.source,
        page: data.page,
      });

      if (crmSuccess) {
        leadEntity.status = "synced_crm";
        leadEntity.auditTrail.push({
          timestamp: new Date().toISOString(),
          action: "crm_dispatched",
        });
      } else {
        leadEntity.status = "crm_failed";
      }
    } catch (crmError) {
      console.error("⚠️ [LeadService] CRM sync error:", crmError);
      leadEntity.status = "crm_failed";
    }

    return {
      success: true,
      message: "Your request has been received! Our counsellor will call you shortly.",
      leadId,
    };
  }
}

export const domainLeadService = new DomainLeadService();
