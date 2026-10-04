import { z } from 'zod';

export const userRoleSchema = z.enum([
  'super_admin',
  'admin',
  'counselor',
  'editor',
  'viewer',
]);

export const userStatusSchema = z.enum(['active', 'inactive', 'suspended']);

export const userSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  role: userRoleSchema.default('counselor'),
  status: userStatusSchema.default('active'),
  password: z.string().min(8, 'Password must be at least 8 characters').optional(),
});

export type UserFormData = z.infer<typeof userSchema>;
