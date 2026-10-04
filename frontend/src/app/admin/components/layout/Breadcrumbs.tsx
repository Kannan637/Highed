'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length <= 1) return null;

  const crumbs = segments.map((seg, idx) => {
    const href = '/' + segments.slice(0, idx + 1).join('/');
    const title = seg.charAt(0).toUpperCase() + seg.slice(1).replace(/-/g, ' ');
    return { title, href, isLast: idx === segments.length - 1 };
  });

  return (
    <nav className="flex items-center text-xs sm:text-sm text-slate-500 mb-5 select-none">
      <Link
        href="/admin"
        className="hover:text-slate-900 transition-colors"
      >
        Admin
      </Link>
      {crumbs.slice(1).map((crumb, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight className="h-3.5 w-3.5 mx-1.5 text-slate-400" />
          {crumb.isLast ? (
            <span className="font-medium text-slate-800">{crumb.title}</span>
          ) : (
            <Link
              href={crumb.href}
              className="hover:text-slate-900 transition-colors"
            >
              {crumb.title}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
