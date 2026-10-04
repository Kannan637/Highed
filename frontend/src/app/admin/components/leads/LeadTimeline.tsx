import React from 'react';
import { LeadTimelineEvent } from '../../types/lead';
import { formatDateTime } from '../../lib/utils';
import { Clock } from 'lucide-react';

interface LeadTimelineProps {
  timeline: LeadTimelineEvent[];
}

export function LeadTimeline({ timeline }: LeadTimelineProps) {
  if (!timeline || timeline.length === 0) {
    return (
      <div className="text-center py-8 text-sm text-slate-400">
        No timeline events recorded yet.
      </div>
    );
  }

  return (
    <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
      {timeline.map((event) => (
        <div key={event.id} className="relative">
          <div className="absolute -left-6.5 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white border-2 border-indigo-600 text-indigo-600">
            <Clock className="h-3.5 w-3.5" />
          </div>
          <div>
            <h4 className="text-base font-semibold text-slate-900">{event.title}</h4>
            {event.description && (
              <p className="mt-1 text-sm text-slate-600">{event.description}</p>
            )}
            <span className="text-xs text-slate-400 mt-1 block">
              {formatDateTime(event.createdAt)} by {event.actor?.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
