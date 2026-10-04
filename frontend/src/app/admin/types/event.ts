export type EventStatus = 'draft' | 'published' | 'ongoing' | 'completed' | 'cancelled';
export type EventMode = 'online' | 'offline' | 'hybrid';

export interface AdminEvent {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverImage?: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  city?: string;
  mode: EventMode;
  status: EventStatus;
  capacity?: number;
  registeredCount: number;
  speakers?: Array<{
    name: string;
    role: string;
    institution: string;
    avatarUrl?: string;
  }>;
  createdAt: string;
  updatedAt: string;
}

export interface CreateEventInput {
  title: string;
  slug: string;
  description: string;
  coverImage?: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  city?: string;
  mode: EventMode;
  status: EventStatus;
  capacity?: number;
}
