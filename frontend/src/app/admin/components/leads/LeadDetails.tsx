import React from 'react';
import { Lead } from '../../types/lead';
import { LeadStatusBadge } from './LeadStatusBadge';
import { formatDate } from '../../lib/utils';
import { User, Mail, Phone, MapPin, Globe, BookOpen, Calendar, Clock } from 'lucide-react';

interface LeadDetailsProps {
  lead: Lead;
}

export function LeadDetails({ lead }: LeadDetailsProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-slate-100 gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-900">{lead.fullName}</h2>
            <LeadStatusBadge status={lead.status} />
          </div>
          <p className="text-xs text-slate-500 mt-1">Lead ID: {lead.id}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Contact Information
          </h3>

          <div className="flex items-center gap-3 text-sm sm:text-base text-slate-700">
            <Mail className="h-5 w-5 text-slate-400 shrink-0" />
            <a href={`mailto:${lead.email}`} className="hover:underline">
              {lead.email}
            </a>
          </div>

          <div className="flex items-center gap-3 text-sm sm:text-base text-slate-700">
            <Phone className="h-5 w-5 text-slate-400 shrink-0" />
            <a href={`tel:${lead.phone}`} className="hover:underline">
              {lead.phone}
            </a>
          </div>

          <div className="flex items-center gap-3 text-sm sm:text-base text-slate-700">
            <MapPin className="h-5 w-5 text-slate-400 shrink-0" />
            <span>{lead.city || 'Tamil Nadu, India'}</span>
          </div>
        </div>

        {/* Study Preferences */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Study Abroad Preferences
          </h3>

          <div className="flex items-center gap-3 text-sm sm:text-base text-slate-700">
            <Globe className="h-5 w-5 text-slate-400 shrink-0" />
            <span>
              Target Countries:{' '}
              <strong className="text-slate-900">{lead.countryPreference?.join(', ') || 'Flexible'}</strong>
            </span>
          </div>

          <div className="flex items-center gap-3 text-sm sm:text-base text-slate-700">
            <BookOpen className="h-5 w-5 text-slate-400 shrink-0" />
            <span>
              Desired Course: <strong className="text-slate-900">{lead.coursePreference || 'Under Evaluation'}</strong>
            </span>
          </div>

          <div className="flex items-center gap-3 text-sm sm:text-base text-slate-700">
            <Calendar className="h-5 w-5 text-slate-400 shrink-0" />
            <span>
              Target Intake: <strong className="text-slate-900">{lead.intakePreference || 'Fall 2026'}</strong>
            </span>
          </div>
        </div>
      </div>

      {lead.notes && (
        <div className="mt-8 pt-6 border-t border-slate-100">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
            Counselor Notes
          </h4>
          <p className="text-sm sm:text-base text-slate-700 bg-slate-50 p-5 rounded-xl border border-slate-100">
            {lead.notes}
          </p>
        </div>
      )}
    </div>
  );
}
