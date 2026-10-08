import React from 'react';
import { Card, CardContent } from '../ui/card';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface DashboardMetricCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  badge?: string;
  badgeType?: 'positive' | 'negative' | 'neutral' | 'info';
  trendText?: string;
  className?: string;
}

export function DashboardMetricCard({
  label,
  value,
  icon: Icon,
  badge,
  badgeType = 'neutral',
  trendText,
  className,
}: DashboardMetricCardProps) {
  return (
    <Card className={cn('hover:border-slate-300 hover:shadow-xs transition-all duration-150', className)}>
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            {label}
          </span>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#25347B]/10 text-[#25347B]">
            <Icon className="h-4.5 w-4.5" />
          </div>
        </div>

        <div className="mt-3">
          <div className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            {value}
          </div>
          {(badge || trendText) && (
            <div className="mt-2.5 flex items-center gap-2">
              {badge && (
                <span
                  className={cn(
                    'inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] font-bold tracking-tight border',
                    badgeType === 'positive' && 'bg-emerald-50 text-emerald-700 border-emerald-200/70',
                    badgeType === 'negative' && 'bg-rose-50 text-rose-700 border-rose-200/70',
                    badgeType === 'info' && 'bg-[#25347B]/10 text-[#25347B] border-[#25347B]/20',
                    badgeType === 'neutral' && 'bg-slate-100 text-slate-700 border-slate-200'
                  )}
                >
                  {badgeType === 'positive' && <TrendingUp className="h-3 w-3" />}
                  {badgeType === 'negative' && <TrendingDown className="h-3 w-3" />}
                  {badge}
                </span>
              )}
              {trendText && (
                <span className="text-xs text-slate-400 font-medium truncate">
                  {trendText}
                </span>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
