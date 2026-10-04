export type TestimonialStatus = 'draft' | 'published' | 'hidden';

export interface AdminTestimonial {
  id: string;
  studentName: string;
  avatarUrl?: string;
  course: string;
  university: string;
  country: string;
  rating: number;
  review: string;
  videoUrl?: string;
  status: TestimonialStatus;
  featured: boolean;
  intakeYear?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTestimonialInput {
  studentName: string;
  avatarUrl?: string;
  course: string;
  university: string;
  country: string;
  rating: number;
  review: string;
  videoUrl?: string;
  status: TestimonialStatus;
  featured: boolean;
  intakeYear?: string;
}
