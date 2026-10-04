'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../../lib/utils';
import {
  LayoutDashboard,
  Users2,
  FileText,
  Calendar,
  MessageSquareQuote,
  UserCog,
  Settings,
} from 'lucide-react';

interface SidebarItem {
  title: string;
  href: string;
  icon: any;
  badge?: string;
}

interface SidebarGroup {
  label?: string;
  items: SidebarItem[];
}

const SIDEBAR_GROUPS: SidebarGroup[] = [
  {
    items: [
      { title: 'Dashboard', href: '/admin', icon: LayoutDashboard },
      { title: 'Leads', href: '/admin/leads', icon: Users2 },
    ],
  },
  {
    label: 'Content',
    items: [
      { title: 'Blogs', href: '/admin/blogs', icon: FileText },
      { title: 'Events', href: '/admin/events', icon: Calendar },
      { title: 'Testimonials', href: '/admin/testimonials', icon: MessageSquareQuote },
    ],
  },
  {
    label: 'Administration',
    items: [
      { title: 'Users', href: '/admin/users', icon: UserCog },
      { title: 'Settings', href: '/admin/settings', icon: Settings },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex w-64 flex-col border-r border-slate-200/90 bg-white min-h-[calc(100vh-4rem)] select-none shrink-0">
      <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-6">
        {SIDEBAR_GROUPS.map((group, groupIdx) => (
          <div key={groupIdx}>
            {group.label && (
              <p className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                {group.label}
              </p>
            )}
            <nav className="space-y-1">
              {group.items.map((item, itemIdx) => {
                const Icon = item.icon;
                const isActive =
                  item.href === '/admin'
                    ? pathname === '/admin'
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={itemIdx}
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors cursor-pointer',
                      isActive
                        ? 'bg-slate-100 text-slate-900 font-semibold shadow-2xs'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    )}
                  >
                    <Icon
                      className={cn(
                        'h-4.5 w-4.5 shrink-0',
                        isActive ? 'text-slate-900' : 'text-slate-400'
                      )}
                    />
                    <span>{item.title}</span>
                    {item.badge && (
                      <span className="ml-auto rounded-md bg-slate-200/80 px-2 py-0.5 text-xs font-semibold text-slate-700">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-100 p-4 text-xs text-slate-400 flex items-center justify-between">
        <span>HighEd Portal</span>
        <span className="inline-flex items-center gap-1.5 text-slate-500 font-medium">
          <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
          Live
        </span>
      </div>
    </aside>
  );
}
