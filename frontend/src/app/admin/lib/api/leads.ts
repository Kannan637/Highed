import { apiClient } from './client';
import { ApiResponse, PaginatedResponse } from '../../types/api';
import { Lead, LeadFilterParams } from '../../types/lead';

export async function apiGetLeads(params: LeadFilterParams = {}): Promise<ApiResponse<PaginatedResponse<Lead>>> {
  return apiClient<PaginatedResponse<Lead>>('/leads', { params });
}

export async function apiGetLeadById(id: string): Promise<ApiResponse<Lead>> {
  return apiClient<Lead>(`/leads/${id}`);
}

export async function apiUpdateLead(id: string, updates: Partial<Lead>): Promise<ApiResponse<Lead>> {
  return apiClient<Lead>(`/leads/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(updates),
  });
}

export async function apiAddLeadNote(id: string, note: string): Promise<ApiResponse<Lead>> {
  return apiClient<Lead>(`/leads/${id}/notes`, {
    method: 'POST',
    body: JSON.stringify({ note }),
  });
}

export async function apiDeleteLead(id: string): Promise<ApiResponse<{ deleted: boolean }>> {
  return apiClient<{ deleted: boolean }>(`/leads/${id}`, {
    method: 'DELETE',
  });
}
