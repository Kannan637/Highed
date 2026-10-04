import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Users2, Calendar, FileText, UserCog, TrendingUp } from 'lucide-react';

interface StatMetric {
  label: string;
  value: string;
  badge: string;
  icon: any;
}

const metrics: StatMetric[] = [
  {
    label: 'Total Leads',
    value: '248',
    badge: '+18% this month',
    icon: Users2,
  },
  {
    label: 'Active Events',
    value: '12',
    badge: '2 fairs upcoming',
    icon: Calendar,
  },
  {
    label: 'Published Blogs',
    value: '86',
    badge: '+6 new guides',
    icon: FileText,
  },
  {
    label: 'Team Users',
    value: '24',
    badge: 'Active staff',
    icon: UserCog,
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
      {metrics.map((item, idx) => {
        const Icon = item.icon;
        return (
          <Card key={idx} className="hover:border-slate-300 transition-colors">
            <CardContent className="p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500">{item.label}</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                  {item.value}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {item.badge}
                </span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
