import fs from 'fs';
import path from 'path';
import { LeadSubmission, LeadPopupData } from '@/types/lead';

// Abstracted CRM Service
// In production, replace `saveToLocalJson` with a real CRM integration like Salesforce, HubSpot, or a dedicated database.

export class CRMService {
  private static readonly DEV_DATA_DIR = path.join(process.cwd(), 'data');
  private static readonly LEADS_FILE_PATH = path.join(this.DEV_DATA_DIR, 'leads.json');

  private static ensureDataDirExists() {
    if (!fs.existsSync(this.DEV_DATA_DIR)) {
      fs.mkdirSync(this.DEV_DATA_DIR, { recursive: true });
    }
  }

  private static async saveToLocalJson(data: any): Promise<boolean> {
    try {
      this.ensureDataDirExists();
      
      let existingLeads = [];
      if (fs.existsSync(this.LEADS_FILE_PATH)) {
        const fileContent = await fs.promises.readFile(this.LEADS_FILE_PATH, 'utf-8');
        existingLeads = fileContent ? JSON.parse(fileContent) : [];
      }

      existingLeads.push({
        ...data,
        createdAt: new Date().toISOString()
      });

      await fs.promises.writeFile(this.LEADS_FILE_PATH, JSON.stringify(existingLeads, null, 2));
      return true;
    } catch (error) {
      console.error('[CRMService] Failed to save lead locally:', error);
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
