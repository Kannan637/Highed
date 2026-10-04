'use client';

import React, { use, useEffect, useState } from 'react';
import { PageHeader } from '../../../components/common/PageHeader';
import { EventDetails } from '../../../components/events/EventDetails';
import { apiGetEventById } from '../../../lib/api/events';
import { AdminEvent } from '../../../types/event';
import { LoadingState } from '../../../components/common/LoadingState';
import { Button } from '../../../components/ui/button';
import { ArrowLeft, Users } from 'lucide-react';
import Link from 'next/link';

export default function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const [event, setEvent] = useState<AdminEvent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      const res = await apiGetEventById(id);
      if (res.success && res.data) {
        setEvent(res.data);
      } else {
        setEvent({
          id,
          title: 'Global Education Fair 2026 - Chennai',
          slug: 'global-education-fair-2026-chennai',
          description:
            'Meet top university representatives from UK, Ireland, USA, Canada, and Germany. Free spot assessments, scholarship evaluations, and on-spot offers.',
          date: '2026-11-15',
          startTime: '10:00 AM',
          endTime: '05:00 PM',
          location: 'ITC Grand Chola, Guindy, Chennai',
          city: 'Chennai',
          mode: 'offline',
          status: 'published',
          capacity: 500,
          registeredCount: 142,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      }
      setIsLoading(false);
    }
    load();
  }, [id]);

  if (isLoading || !event) {
    return <LoadingState message="Loading event details..." />;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <Link href="/admin/events">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Events
          </Button>
        </Link>
      </div>

      <PageHeader
        title={event.title}
        description={`Event ID: ${event.id}`}
        actions={
          <Link href={`/admin/events/${event.id}/registrations`}>
            <Button size="sm">
              <Users className="h-4 w-4 mr-1.5" /> View Registrations
            </Button>
          </Link>
        }
      />

      <EventDetails event={event} />
    </div>
  );
}
