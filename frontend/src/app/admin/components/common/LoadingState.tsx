import React from 'react';
import { Loader2 } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';

export function LoadingState({
  message = 'Loading data...',
  rows = 3,
}: {
  message?: string;
  rows?: number;
}) {
  return (
    <div className="py-6 px-4 space-y-4">
      <div className="flex items-center justify-center gap-2.5 text-slate-500 pb-2">
        <Loader2 className="h-5 w-5 animate-spin text-[#25347B]" />
        <span className="text-xs sm:text-sm font-medium">{message}</span>
      </div>
      <div className="space-y-2.5">
        {Array.from({ length: rows }).map((_, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <Skeleton className="h-9 w-1/4 rounded-lg" />
            <Skeleton className="h-9 w-1/3 rounded-lg" />
            <Skeleton className="h-9 w-1/6 rounded-lg" />
            <Skeleton className="h-9 w-1/4 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}
