import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Calendar, MapPin, ArrowRight, Users } from 'lucide-react';
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
          <CardDescription>Scheduled student recruitment events across Tamil Nadu</CardDescription>
        </div>
        <Link
          href="/admin/events"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#25347B] hover:text-[#1b265b] transition-colors"
        >
          Manage <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </CardHeader>

      <CardContent className="space-y-3">
        {events.map((evt) => (
          <div
            key={evt.id}
            className="flex items-start justify-between p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 transition-all duration-150"
          >
            <div className="min-w-0 pr-3">
              <div className="flex items-center gap-2 mb-1.5">
                <Badge variant={evt.mode === 'online' ? 'secondary' : 'default'} className="text-[10px] uppercase font-bold tracking-wider">
                  {evt.mode}
                </Badge>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600">
                  <Users className="h-3 w-3 text-slate-400" />
                  {evt.registrations} Attending
                </span>
              </div>
              <Link
                href={`/admin/events/${evt.id}`}
                className="font-bold text-sm text-slate-900 hover:text-[#25347B] transition-colors line-clamp-1"
              >
                {evt.title}
              </Link>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-slate-400" />
                  {formatDate(evt.date)}
                </span>
                <span className="flex items-center gap-1 truncate max-w-[200px]">
                  <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  {evt.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
