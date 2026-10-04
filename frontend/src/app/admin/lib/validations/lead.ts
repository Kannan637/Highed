import { z } from 'zod';

export const leadStatusSchema = z.enum([
  'new',
  'contacted',
  'in_progress',
  'counseling_scheduled',
  'applied',
  'offer_received',
  'visa_approved',
  'enrolled',
  'lost',
  'junk',
]);

export const leadSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone must be at least 10 digits'),
  city: z.string().optional(),
  countryPreference: z.array(z.string()).default([]),
  coursePreference: z.string().optional(),
  intakePreference: z.string().optional(),
  status: leadStatusSchema.default('new'),
  assignedToId: z.string().optional(),
  notes: z.string().optional(),
});

export type LeadFormData = z.infer<typeof leadSchema>;
