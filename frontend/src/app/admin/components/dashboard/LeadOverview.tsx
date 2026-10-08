import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';

const stages = [
  { name: 'New Inquiries', count: 124, pct: 45, color: 'bg-[#25347B]' },
  { name: 'Counseling Scheduled', count: 58, pct: 24, color: 'bg-[#3B4E99]' },
  { name: 'Applications Sent', count: 38, pct: 16, color: 'bg-[#6A7BB8]' },
  { name: 'Visa Approved', count: 28, pct: 15, color: 'bg-emerald-600' },
];

export function LeadOverview() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <CardTitle>Conversion Pipeline</CardTitle>
            <CardDescription>Funnel progression from website enquiry to university visa approval</CardDescription>
          </div>
          <span className="inline-flex items-center text-xs font-bold text-[#25347B] bg-[#25347B]/10 border border-[#25347B]/20 px-2.5 py-1 rounded-lg self-start sm:self-auto">
            248 Total Active
          </span>
        </div>
      </CardHeader>
      <CardContent>
        {/* Multi-segment Progress Bar */}
        <div className="flex h-3 w-full overflow-hidden rounded-full bg-slate-100 mb-5">
          {stages.map((stg, idx) => (
            <div
              key={idx}
              className={`${stg.color} transition-all duration-300`}
              style={{ width: `${stg.pct}%` }}
              title={`${stg.name}: ${stg.count} (${stg.pct}%)`}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
          {stages.map((stg, idx) => (
            <div key={idx} className="flex items-center gap-2.5">
              <span className={`h-2.5 w-2.5 rounded-full ${stg.color} shrink-0`} />
              <div className="min-w-0">
                <span className="text-xs text-slate-500 block truncate font-medium">{stg.name}</span>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="text-lg font-bold text-slate-900 leading-none">{stg.count}</span>
                  <span className="text-[11px] text-slate-400 font-medium">({stg.pct}%)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
