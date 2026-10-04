import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { formatDate } from '../../lib/utils';

export function UpcomingEvents() {
  const events = [
    {
      id: 'evt-1',
      title: 'Global Education Fair 2026 - Chennai',
      date: '2026-11-15',
      location: 'ITC Grand Chola, Guindy',
      registrations: 142,
      mode: 'offline',
    },
    {
      id: 'evt-2',
      title: 'UK University Application & Visa Masterclass',
      date: '2026-11-20',
      location: 'Online Webinar (Zoom)',
      registrations: 88,
      mode: 'online',
    },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <div>
          <CardTitle>Upcoming Fairs & Webinars</CardTitle>
          <CardDescription>Scheduled student recruitment events</CardDescription>
        </div>
        <Link
          href="/admin/events"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-slate-600 transition-colors"
        >
          Manage <ArrowRight className="h-4 w-4" />
        </Link>
      </CardHeader>

      <CardContent className="space-y-3.5">
        {events.map((evt) => (
          <div
            key={evt.id}
            className="flex items-start justify-between p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-slate-50 transition-colors"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <Badge variant={evt.mode === 'online' ? 'secondary' : 'default'}>
                  {evt.mode.toUpperCase()}
                </Badge>
                <span className="text-xs font-semibold text-slate-700">
                  {evt.registrations} Attending
                </span>
              </div>
              <Link
                href={`/admin/events/${evt.id}`}
                className="font-semibold text-sm text-slate-900 hover:underline line-clamp-1"
              >
                {evt.title}
              </Link>
              <div className="flex items-center gap-4 mt-1.5 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-slate-400" /> {formatDate(evt.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-slate-400" /> {evt.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
