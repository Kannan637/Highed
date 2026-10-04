import { z } from 'zod';

export const testimonialSchema = z.object({
  studentName: z.string().min(2, 'Student name is required'),
  avatarUrl: z.string().url().optional().or(z.literal('')),
  course: z.string().min(2, 'Course is required'),
  university: z.string().min(2, 'University is required'),
  country: z.string().min(2, 'Country is required'),
  rating: z.number().min(1).max(5).default(5),
  review: z.string().min(10, 'Review must be at least 10 characters'),
  videoUrl: z.string().url().optional().or(z.literal('')),
  status: z.enum(['draft', 'published', 'hidden']).default('published'),
  featured: z.boolean().default(false),
  intakeYear: z.string().optional(),
});

export type TestimonialFormData = z.infer<typeof testimonialSchema>;
