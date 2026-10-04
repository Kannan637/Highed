export type LeadStatus =
  | 'new'
  | 'contacted'
  | 'in_progress'
  | 'counseling_scheduled'
  | 'applied'
  | 'offer_received'
  | 'visa_approved'
  | 'enrolled'
  | 'lost'
  | 'junk';

export type LeadSource =
  | 'website_form'
  | 'whatsapp'
  | 'event'
  | 'referral'
  | 'google_ads'
  | 'meta_ads'
  | 'direct';

export interface LeadTimelineEvent {
  id: string;
  leadId: string;
  type: 'status_change' | 'note' | 'call' | 'email' | 'meeting' | 'document_uploaded';
  title: string;
  description?: string;
  actor: {
    id: string;
    name: string;
    role: string;
  };
  createdAt: string;
}

export interface Lead {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  city?: string;
  countryPreference: string[];
  coursePreference?: string;
  intakePreference?: string;
  status: LeadStatus;
  source: LeadSource;
  assignedTo?: {
    id: string;
    name: string;
    email: string;
  };
  notes?: string;
  timeline: LeadTimelineEvent[];
  createdAt: string;
  updatedAt: string;
}

export interface LeadFilterParams {
  status?: LeadStatus | 'all';
  source?: LeadSource | 'all';
  search?: string;
  assignedTo?: string;
  dateRange?: {
    from?: string;
    to?: string;
  };
  page?: number;
  pageSize?: number;
}
