import { z } from 'zod';

export const eventSchema = z.object({
  title: z.string().min(3, 'Title is required'),
  slug: z.string().min(3, 'Slug is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  coverImage: z.string().url().optional().or(z.literal('')),
  date: z.string().min(1, 'Date is required'),
  startTime: z.string().min(1, 'Start time is required'),
  endTime: z.string().min(1, 'End time is required'),
  location: z.string().min(2, 'Location is required'),
  city: z.string().optional(),
  mode: z.enum(['online', 'offline', 'hybrid']).default('offline'),
  status: z.enum(['draft', 'published', 'ongoing', 'completed', 'cancelled']).default('draft'),
  capacity: z.number().int().positive().optional(),
});

export type EventFormData = z.infer<typeof eventSchema>;
