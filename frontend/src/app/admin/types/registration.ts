export type RegistrationStatus = 'confirmed' | 'waitlist' | 'attended' | 'cancelled';

export interface EventRegistration {
  id: string;
  eventId: string;
  fullName: string;
  email: string;
  phone: string;
  city?: string;
  qualification?: string;
  preferredCountry?: string;
  status: RegistrationStatus;
  attendedAt?: string;
  registeredAt: string;
}
