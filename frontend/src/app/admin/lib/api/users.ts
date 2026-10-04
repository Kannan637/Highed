import { apiClient } from './client';
import { ApiResponse, PaginatedResponse, QueryParams } from '../../types/api';
import { User, CreateUserInput } from '../../types/user';

export async function apiGetUsers(
  params: QueryParams = {}
): Promise<ApiResponse<PaginatedResponse<User>>> {
  return apiClient<PaginatedResponse<User>>('/users', { params });
}

export async function apiGetUserById(id: string): Promise<ApiResponse<User>> {
  return apiClient<User>(`/users/${id}`);
}

export async function apiCreateUser(data: CreateUserInput): Promise<ApiResponse<User>> {
  return apiClient<User>('/users', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function apiUpdateUser(id: string, data: Partial<CreateUserInput>): Promise<ApiResponse<User>> {
  return apiClient<User>(`/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

export async function apiDeleteUser(id: string): Promise<ApiResponse<{ deleted: boolean }>> {
  return apiClient<{ deleted: boolean }>(`/users/${id}`, {
    method: 'DELETE',
  });
}
