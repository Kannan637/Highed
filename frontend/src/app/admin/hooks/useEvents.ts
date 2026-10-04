'use client';

import { useState, useEffect, useCallback } from 'react';
import { AdminEvent, CreateEventInput } from '../types/event';
import { apiGetEvents, apiCreateEvent, apiUpdateEvent, apiDeleteEvent } from '../lib/api/events';

export function useEvents() {
  const [events, setEvents] = useState<AdminEvent[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await apiGetEvents();
      if (res.success && res.data) {
        setEvents(res.data.items || []);
        setTotal(res.data.total || 0);
      } else {
        const mockEvents: AdminEvent[] = [
          {
            id: 'evt-1',
            title: 'Global Education Fair 2026 - Chennai',
            slug: 'global-education-fair-2026-chennai',
            description: 'Meet 50+ university delegates from UK, USA, Canada and Australia.',
            date: '2026-11-15',
            startTime: '10:00 AM',
            endTime: '05:00 PM',
            location: 'ITC Grand Chola, Guindy',
            city: 'Chennai',
            mode: 'offline',
            status: 'published',
            capacity: 500,
            registeredCount: 142,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
          {
            id: 'evt-2',
            title: 'UK University Application & Visa Masterclass',
            slug: 'uk-visa-masterclass',
            description: 'Step-by-step guidance on CAS, financial proof, and visa interviews.',
            date: '2026-11-20',
            startTime: '04:00 PM',
            endTime: '06:00 PM',
            location: 'Online Webinar (Zoom)',
            mode: 'online',
            status: 'published',
            capacity: 200,
            registeredCount: 88,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
        ];
        setEvents(mockEvents);
        setTotal(mockEvents.length);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to load events');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const createEvent = async (data: CreateEventInput) => {
    const res = await apiCreateEvent(data);
    await fetchEvents();
    return res;
  };

  const updateEvent = async (id: string, data: Partial<CreateEventInput>) => {
    const res = await apiUpdateEvent(id, data);
    await fetchEvents();
    return res;
  };

  const removeEvent = async (id: string) => {
    await apiDeleteEvent(id);
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  return {
    events,
    total,
    isLoading,
    error,
    refresh: fetchEvents,
    createEvent,
    updateEvent,
    removeEvent,
  };
}
