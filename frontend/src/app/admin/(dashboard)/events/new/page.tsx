'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '../../../components/common/PageHeader';
import { EventForm } from '../../../components/events/EventForm';
import { useEvents } from '../../../hooks/useEvents';
import { CreateEventInput } from '../../../types/event';
import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function NewEventPage() {
  const router = useRouter();
  const { createEvent } = useEvents();
  const [isLoading, setIsLoading] = useState(false);

  const handleCreate = async (data: CreateEventInput) => {
    setIsLoading(true);
    try {
      await createEvent(data);
      router.push('/admin/events');
    } finally {
      setIsLoading(false);
    }
  };

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
        title="Create New Event"
        description="Schedule a new university admission fair or informational webinar."
      />

      <EventForm onSubmit={handleCreate} isLoading={isLoading} />
    </div>
  );
}
