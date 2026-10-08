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
  HelpCircle,
  ShieldCheck,
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
    label: 'Overview',
    items: [
      { title: 'Dashboard', href: '/admin', icon: LayoutDashboard },
      { title: 'Leads & Enquiries', href: '/admin/leads', icon: Users2, badge: '248' },
    ],
  },
  {
    label: 'Content Management',
    items: [
      { title: 'Blogs & Guides', href: '/admin/blogs', icon: FileText },
      { title: 'Events & Fairs', href: '/admin/events', icon: Calendar },
      { title: 'Testimonials', href: '/admin/testimonials', icon: MessageSquareQuote },
    ],
  },
  {
    label: 'Administration',
    items: [
      { title: 'Team Users', href: '/admin/users', icon: UserCog },
      { title: 'System Settings', href: '/admin/settings', icon: Settings },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex w-64 flex-col border-r border-slate-200/80 bg-white min-h-[calc(100vh-4rem)] select-none shrink-0">
      <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-6">
        {SIDEBAR_GROUPS.map((group, groupIdx) => (
          <div key={groupIdx}>
            {group.label && (
              <p className="px-3 mb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
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
                      'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-150 cursor-pointer',
                      isActive
                        ? 'bg-[#25347B] text-white font-semibold shadow-xs'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    )}
                  >
                    <Icon
                      className={cn(
                        'h-4.5 w-4.5 shrink-0 transition-colors',
                        isActive ? 'text-white' : 'text-slate-400'
                      )}
                    />
                    <span className="truncate">{item.title}</span>
                    {item.badge && (
                      <span
                        className={cn(
                          'ml-auto rounded-md px-1.5 py-0.5 text-[11px] font-bold tracking-tight',
                          isActive
                            ? 'bg-white/20 text-white'
                            : 'bg-slate-100 text-slate-600'
                        )}
                      >
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

      {/* Sidebar Footer Widget */}
      <div className="border-t border-slate-100 p-3.5 space-y-2.5">
        <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 text-xs">
          <div className="flex items-center justify-between mb-1">
            <span className="font-semibold text-slate-800">HighEd Advisory</span>
            <span className="inline-flex items-center gap-1 font-semibold text-emerald-600 text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live
            </span>
          </div>
          <p className="text-slate-500 text-[11px] leading-relaxed">
            Overseas admissions & counselor CRM v2.0
          </p>
        </div>
      </div>
    </aside>
  );
}
