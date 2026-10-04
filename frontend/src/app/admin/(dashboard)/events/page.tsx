'use client';

import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { EventTable } from '../../components/events/EventTable';
import { useEvents } from '../../hooks/useEvents';
import { Button } from '../../components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function EventsPage() {
  const { events, isLoading } = useEvents();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Events & Education Fairs"
        description="Schedule physical education fairs in Chennai, Coimbatore, and virtual webinars."
        actions={
          <Link href="/admin/events/new">
            <Button>
              <Plus className="h-4 w-4 mr-2" /> Add New Event
            </Button>
          </Link>
        }
      />

      <EventTable events={events} isLoading={isLoading} />
    </div>
  );
}
