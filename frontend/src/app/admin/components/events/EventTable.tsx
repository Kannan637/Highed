'use client';

import React from 'react';
import Link from 'next/link';
import { AdminEvent } from '../../types/event';
import { DataTable, Column } from '../common/DataTable';
import { formatDate } from '../../lib/utils';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Eye, Edit2, Users } from 'lucide-react';

interface EventTableProps {
  events: AdminEvent[];
  isLoading: boolean;
}

export function EventTable({ events, isLoading }: EventTableProps) {
  const columns: Column<AdminEvent>[] = [
    {
      header: 'Event Title',
      cell: (event) => (
        <div>
          <Link
            href={`/admin/events/${event.id}`}
            className="font-semibold text-sm text-slate-900 hover:text-indigo-600"
          >
            {event.title}
          </Link>
          <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{event.location}</p>
        </div>
      ),
    },
    {
      header: 'Date & Time',
      cell: (event) => (
        <div className="text-sm">
          <span className="font-medium text-slate-700">
            {formatDate(event.date)}
          </span>
          <p className="text-xs text-slate-500 mt-0.5">{event.startTime} - {event.endTime}</p>
        </div>
      ),
    },
    {
      header: 'Mode',
      cell: (event) => (
        <Badge variant={event.mode === 'online' ? 'secondary' : 'default'}>
          {event.mode.toUpperCase()}
        </Badge>
      ),
    },
    {
      header: 'Status',
      cell: (event) => (
        <Badge
          variant={
            event.status === 'published'
              ? 'success'
              : event.status === 'completed'
              ? 'secondary'
              : 'warning'
          }
        >
          {event.status}
        </Badge>
      ),
    },
    {
      header: 'Registrations',
      cell: (event) => (
        <Link
          href={`/admin/events/${event.id}/registrations`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
        >
          <Users className="h-4 w-4" />
          {event.registeredCount || 0} attendees
        </Link>
      ),
    },
    {
      header: 'Actions',
      cell: (event) => (
        <div className="flex items-center gap-2">
          <Link href={`/admin/events/${event.id}`}>
            <Button variant="ghost" size="sm">
              <Eye className="h-4 w-4 mr-1" /> View
            </Button>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={events}
      isLoading={isLoading}
      emptyTitle="No events created yet"
      emptyDescription="Create your first study abroad education fair or webinar."
    />
  );
}
