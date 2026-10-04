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
  X,
} from 'lucide-react';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_ITEMS = [
  { title: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { title: 'Leads', href: '/admin/leads', icon: Users2 },
  { title: 'Blogs', href: '/admin/blogs', icon: FileText },
  { title: 'Events', href: '/admin/events', icon: Calendar },
  { title: 'Testimonials', href: '/admin/testimonials', icon: MessageSquareQuote },
  { title: 'Team Users', href: '/admin/users', icon: UserCog },
  { title: 'Settings', href: '/admin/settings', icon: Settings },
];

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs" onClick={onClose} />

      <div className="fixed inset-y-0 left-0 w-72 bg-white p-5 shadow-2xl flex flex-col">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <span className="font-semibold text-xs uppercase tracking-wider text-slate-500">
            Navigation Menu
          </span>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 space-y-1">
          {NAV_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            const isActive =
              item.href === '/admin' ? pathname === '/admin' : pathname.startsWith(item.href);

            return (
              <Link
                key={idx}
                href={item.href}
                onClick={onClose}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-slate-100 text-slate-900 font-semibold shadow-2xs'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                )}
              >
                <Icon
                  className={cn(
                    'h-5 w-5',
                    isActive ? 'text-slate-900' : 'text-slate-400'
                  )}
                />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
