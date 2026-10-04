import { apiClient } from './client';
import { ApiResponse, PaginatedResponse, QueryParams } from '../../types/api';
import { AdminTestimonial, CreateTestimonialInput } from '../../types/testimonial';

export async function apiGetTestimonials(
  params: QueryParams = {}
): Promise<ApiResponse<PaginatedResponse<AdminTestimonial>>> {
  return apiClient<PaginatedResponse<AdminTestimonial>>('/testimonials', { params });
}

export async function apiGetTestimonialById(id: string): Promise<ApiResponse<AdminTestimonial>> {
  return apiClient<AdminTestimonial>(`/testimonials/${id}`);
}

export async function apiCreateTestimonial(data: CreateTestimonialInput): Promise<ApiResponse<AdminTestimonial>> {
  return apiClient<AdminTestimonial>('/testimonials', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function apiUpdateTestimonial(
  id: string,
  data: Partial<CreateTestimonialInput>
): Promise<ApiResponse<AdminTestimonial>> {
  return apiClient<AdminTestimonial>(`/testimonials/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

export async function apiDeleteTestimonial(id: string): Promise<ApiResponse<{ deleted: boolean }>> {
  return apiClient<{ deleted: boolean }>(`/testimonials/${id}`, {
    method: 'DELETE',
  });
}
