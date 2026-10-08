import React from 'react';
import { Users2, Calendar, FileText, UserCog, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

interface StatMetric {
  label: string;
  value: string;
  badge: string;
  badgeType: 'positive' | 'neutral' | 'info';
  icon: any;
  trendText?: string;
}

const metrics: StatMetric[] = [
  {
    label: 'Total Student Leads',
    value: '248',
    badge: '+18.4%',
    badgeType: 'positive',
    icon: Users2,
    trendText: 'vs last month',
  },
  {
    label: 'Active Events & Fairs',
    value: '12',
    badge: '2 Upcoming',
    badgeType: 'info',
    icon: Calendar,
    trendText: 'Chennai & Webinars',
  },
  {
    label: 'Published Study Guides',
    value: '86',
    badge: '+6 New',
    badgeType: 'neutral',
    icon: FileText,
    trendText: 'Country & Visa guides',
  },
  {
    label: 'Admissions Staff',
    value: '24',
    badge: '100% Active',
    badgeType: 'positive',
    icon: UserCog,
    trendText: 'Counselors & Admins',
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
      {metrics.map((item, idx) => {
        const Icon = item.icon;
        return (
          <Card key={idx} className="hover:border-slate-300 hover:shadow-xs transition-all duration-150">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {item.label}
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#25347B]/10 text-[#25347B]">
                  <Icon className="h-4.5 w-4.5" />
                </div>
              </div>

              <div className="mt-3">
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                  {item.value}
                </div>
                <div className="mt-2.5 flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] font-bold tracking-tight ${item.badgeType === 'positive'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/70'
                        : item.badgeType === 'info'
                          ? 'bg-[#25347B]/10 text-[#25347B] border border-[#25347B]/20'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                  >
                    {item.badgeType === 'positive' && <TrendingUp className="h-3 w-3" />}
                    {item.badge}
                  </span>
                  {item.trendText && (
                    <span className="text-xs text-slate-400 font-medium truncate">
                      {item.trendText}
                    </span>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
