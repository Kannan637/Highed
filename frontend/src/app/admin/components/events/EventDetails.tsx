import React from 'react';
import { AdminEvent } from '../../types/event';
import { formatDate } from '../../lib/utils';
import { Badge } from '../ui/badge';
import { Calendar, Clock, MapPin, Users, Globe } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

interface EventDetailsProps {
  event: AdminEvent;
}

export function EventDetails({ event }: EventDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-slate-100 gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-slate-900">{event.title}</h2>
              <Badge variant={event.status === 'published' ? 'success' : 'secondary'}>
                {event.status}
              </Badge>
            </div>
            <p className="text-xs text-slate-500 mt-1">Slug: /events/{event.slug}</p>
          </div>

          <div className="flex items-center gap-3">
            <Link href={`/admin/events/${event.id}/registrations`}>
              <Button variant="outline">
                <Users className="h-4 w-4 mr-2" /> Registrations ({event.registeredCount || 0})
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="flex items-start gap-3.5">
            <Calendar className="h-5 w-5 text-indigo-600 mt-0.5 shrink-0" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Date</span>
              <span className="text-base font-semibold text-slate-900">
                {formatDate(event.date)}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <Clock className="h-5 w-5 text-indigo-600 mt-0.5 shrink-0" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Timing</span>
              <span className="text-base font-semibold text-slate-900">
                {event.startTime} - {event.endTime}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <MapPin className="h-5 w-5 text-indigo-600 mt-0.5 shrink-0" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Location</span>
              <span className="text-base font-semibold text-slate-900">
                {event.location}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
            Description
          </h4>
          <p className="text-base text-slate-700 leading-relaxed bg-slate-50 p-5 rounded-xl border border-slate-100">
            {event.description}
          </p>
        </div>
      </div>
    </div>
  );
}
