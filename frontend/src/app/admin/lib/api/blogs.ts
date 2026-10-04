import { apiClient } from './client';
import { ApiResponse, PaginatedResponse, QueryParams } from '../../types/api';
import { AdminBlog, CreateBlogInput } from '../../types/blog';

export async function apiGetBlogs(params: QueryParams = {}): Promise<ApiResponse<PaginatedResponse<AdminBlog>>> {
  return apiClient<PaginatedResponse<AdminBlog>>('/blogs', { params });
}

export async function apiGetBlogById(id: string): Promise<ApiResponse<AdminBlog>> {
  return apiClient<AdminBlog>(`/blogs/${id}`);
}

export async function apiCreateBlog(data: CreateBlogInput): Promise<ApiResponse<AdminBlog>> {
  return apiClient<AdminBlog>('/blogs', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function apiUpdateBlog(id: string, data: Partial<CreateBlogInput>): Promise<ApiResponse<AdminBlog>> {
  return apiClient<AdminBlog>(`/blogs/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

export async function apiDeleteBlog(id: string): Promise<ApiResponse<{ deleted: boolean }>> {
  return apiClient<{ deleted: boolean }>(`/blogs/${id}`, {
    method: 'DELETE',
  });
}
