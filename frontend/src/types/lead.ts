export interface LeadSubmission {
  fullName: string;
  email: string;
  phone: string;
  countryCode?: string;
  destinationCountry?: string;
  preferredCourse?: string;
  studyLevel?: string;
  message?: string;
  source?: string;
  page?: string;
}

export interface LeadPopupData {
  countryCode: string;
  phone: string;
  source?: string;
  page?: string;
}

export interface LeadResponse {
  success: boolean;
  message: string;
  leadId?: string;
}
