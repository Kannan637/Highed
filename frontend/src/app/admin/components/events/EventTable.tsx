'use client';

import React from 'react';
import Link from 'next/link';
import { AdminEvent } from '../../types/event';
import { DataTable, Column } from '../common/DataTable';
import { formatDate } from '../../lib/utils';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Edit2, Users, ArrowUpRight } from 'lucide-react';

interface EventTableProps {
  events: AdminEvent[];
  isLoading: boolean;
}

export function EventTable({ events, isLoading }: EventTableProps) {
  const columns: Column<AdminEvent>[] = [
    {
      header: 'Event Title & Venue',
      cell: (event) => (
        <div>
          <Link
            href={`/admin/events/${event.id}`}
            className="font-bold text-sm text-slate-900 hover:text-[#25347B] transition-colors inline-flex items-center gap-1"
          >
            {event.title}
            <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{event.location}</p>
        </div>
      ),
    },
    {
      header: 'Date & Schedule',
      cell: (event) => (
        <div>
          <span className="text-xs font-semibold text-slate-700 block">
            {formatDate(event.date)}
          </span>
          <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">
            {event.startTime} - {event.endTime}
          </span>
        </div>
      ),
    },
    {
      header: 'Mode',
      cell: (event) => (
        <Badge
          variant={event.mode === 'online' ? 'secondary' : 'default'}
          className="text-[10px] uppercase font-bold tracking-wider"
        >
          {event.mode}
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
          dot
        >
          <span className="capitalize">{event.status}</span>
        </Badge>
      ),
    },
    {
      header: 'Registrations',
      cell: (event) => (
        <Link
          href={`/admin/events/${event.id}/registrations`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25347B] hover:underline"
        >
          <Users className="h-3.5 w-3.5" />
          {event.registeredCount || 0} Students
        </Link>
      ),
    },
    {
      header: 'Actions',
      cell: (event) => (
        <div className="flex items-center gap-2">
          <Link href={`/admin/events/${event.id}`}>
            <Button variant="outline" size="sm" className="h-7.5 px-2.5 text-xs font-semibold text-slate-700 hover:text-[#25347B] hover:border-[#25347B]">
              <Edit2 className="h-3.5 w-3.5 mr-1" />
              Manage
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
      emptyTitle="No education fairs scheduled"
      emptyDescription="Create upcoming webinars or city physical education fairs."
    />
  );
}
