import { apiClient } from './client';
import { ApiResponse, PaginatedResponse, QueryParams } from '../../types/api';
import { AdminEvent, CreateEventInput } from '../../types/event';
import { EventRegistration } from '../../types/registration';

export async function apiGetEvents(params: QueryParams = {}): Promise<ApiResponse<PaginatedResponse<AdminEvent>>> {
  return apiClient<PaginatedResponse<AdminEvent>>('/events', { params });
}

export async function apiGetEventById(id: string): Promise<ApiResponse<AdminEvent>> {
  return apiClient<AdminEvent>(`/events/${id}`);
}

export async function apiCreateEvent(data: CreateEventInput): Promise<ApiResponse<AdminEvent>> {
  return apiClient<AdminEvent>('/events', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function apiUpdateEvent(id: string, data: Partial<CreateEventInput>): Promise<ApiResponse<AdminEvent>> {
  return apiClient<AdminEvent>(`/events/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

export async function apiDeleteEvent(id: string): Promise<ApiResponse<{ deleted: boolean }>> {
  return apiClient<{ deleted: boolean }>(`/events/${id}`, {
    method: 'DELETE',
  });
}

export async function apiGetEventRegistrations(
  eventId: string,
  params: QueryParams = {}
): Promise<ApiResponse<PaginatedResponse<EventRegistration>>> {
  return apiClient<PaginatedResponse<EventRegistration>>(`/events/${eventId}/registrations`, { params });
}
