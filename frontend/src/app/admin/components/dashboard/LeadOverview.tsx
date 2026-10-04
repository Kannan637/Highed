import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';

const stages = [
  { name: 'New Inquiries', count: 124, pct: 45, color: 'bg-slate-900' },
  { name: 'Counseling Scheduled', count: 58, pct: 24, color: 'bg-slate-700' },
  { name: 'Applications Sent', count: 38, pct: 16, color: 'bg-slate-500' },
  { name: 'Visa Approved', count: 28, pct: 15, color: 'bg-emerald-600' },
];

export function LeadOverview() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Conversion Pipeline</CardTitle>
            <CardDescription>Funnel progression from website lead to university enrollment</CardDescription>
          </div>
          <span className="text-sm font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-md">
            248 Total Active
          </span>
        </div>
      </CardHeader>
      <CardContent>
        {/* Multi-segment Progress Bar */}
        <div className="flex h-3.5 w-full overflow-hidden rounded-full bg-slate-100 mb-5">
          {stages.map((stg, idx) => (
            <div
              key={idx}
              className={`${stg.color}`}
              style={{ width: `${stg.pct}%` }}
              title={`${stg.name}: ${stg.count}`}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
          {stages.map((stg, idx) => (
            <div key={idx} className="flex items-center gap-2.5">
              <span className={`h-3 w-3 rounded-full ${stg.color}`} />
              <div className="min-w-0">
                <span className="text-sm text-slate-500 block truncate">{stg.name}</span>
                <span className="text-lg font-bold text-slate-900">{stg.count}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
