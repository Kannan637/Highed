import React from 'react';
import Link from 'next/link';
import { Button } from './components/ui/button';
import { LayoutDashboard } from 'lucide-react';

export default function AdminNotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center p-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#25347B]/10 text-[#25347B] mb-4">
        <span className="text-2xl font-black">404</span>
      </div>
      <h2 className="text-xl font-bold text-slate-900 tracking-tight">Admin Resource Not Found</h2>
      <p className="mt-1.5 text-xs sm:text-sm text-slate-500 max-w-sm mb-6 leading-relaxed">
        The administration page or record you requested does not exist or may have been relocated.
      </p>
      <Link href="/admin">
        <Button>
          <LayoutDashboard className="h-4 w-4 mr-2" /> Return to Dashboard
        </Button>
      </Link>
    </div>
  );
}
