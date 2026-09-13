import { LeadSubmission, LeadPopupData } from '@/types/lead';

// Abstracted CRM Service
// In production, replace `saveToLocalJson` with a real CRM integration like Salesforce, HubSpot, or a dedicated database.

export class CRMService {
  private static async saveToLocalJson(data: any): Promise<boolean> {
    try {
      // In development, you would normally use 'fs' to write to a local file.
      // However, to ensure compatibility with Cloudflare Pages (Edge runtime),
      // we must mock this completely as Cloudflare does not support the 'fs' module.
      
      console.log('✅ [CRMService] Lead securely captured:', data);
      
      // Add a slight delay to simulate network request
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return true;
    } catch (error) {
      console.error('[CRMService] Failed to save lead:', error);
      return false;
    }
  }

  static async submitFullLead(leadId: string, data: LeadSubmission): Promise<boolean> {
    // 1. Production CRM Logic goes here
    // Example: await fetch('https://api.hubapi.com/crm/v3/objects/contacts', { ... })

    // 2. Development / Fallback Logic
    return await this.saveToLocalJson({
      id: leadId,
      type: 'full_lead',
      name: data.fullName,
      email: data.email,
      phone: `${data.countryCode || ''} ${data.phone}`.trim(),
      destination: data.destinationCountry,
      studyLevel: data.studyLevel,
      course: data.preferredCourse,
      message: data.message
    });
  }

  static async submitPopupLead(leadId: string, data: LeadPopupData): Promise<boolean> {
    // 1. Production CRM Logic goes here
    
    // 2. Development / Fallback Logic
    return await this.saveToLocalJson({
      id: leadId,
      type: 'popup_lead',
      phone: `${data.countryCode || ''} ${data.phone}`.trim(),
      source: data.source,
      page: data.page
    });
  }
}
