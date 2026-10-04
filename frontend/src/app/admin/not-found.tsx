import React from 'react';
import Link from 'next/link';
import { Button } from './components/ui/button';
import { Home } from 'lucide-react';

export default function AdminNotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center p-6 text-center">
      <div className="rounded-full bg-slate-100 p-4 text-slate-500 mb-4">
        <span className="text-3xl font-extrabold">404</span>
      </div>
      <h2 className="text-xl font-bold text-slate-900">Admin Page Not Found</h2>
      <p className="mt-2 text-sm text-slate-500 max-w-sm mb-6">
        The admin resource or route you requested does not exist or may have been moved.
      </p>
      <Link href="/admin">
        <Button>
          <Home className="h-4 w-4 mr-2" /> Return to Dashboard
        </Button>
      </Link>
    </div>
  );
}
