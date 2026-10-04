'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';
import { DropdownMenu } from '../ui/dropdown-menu';
import { Avatar } from '../ui/avatar';
import { Input } from '../ui/input';
import {
  Menu,
  Bell,
  Search,
  User as UserIcon,
  LogOut,
  ExternalLink,
  ChevronDown,
  GraduationCap,
} from 'lucide-react';

interface HeaderProps {
  onOpenMobileMenu: () => void;
}

export function Header({ onOpenMobileMenu }: HeaderProps) {
  const { user, logout } = useAuth();
  const [search, setSearch] = useState('');

  const userMenuItems = [
    {
      label: 'Admin Settings',
      icon: UserIcon,
      onClick: () => {
        window.location.href = '/admin/settings';
      },
    },
    {
      label: 'Sign Out',
      icon: LogOut,
      destructive: true,
      onClick: () => {
        logout();
      },
    },
  ];

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-slate-200/90 bg-white px-4 sm:px-6">
      {/* Left: Brand & Mobile Toggle */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="btn-motion rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden cursor-pointer"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link href="/admin" className="flex items-center gap-2.5 font-bold text-slate-900 text-base tracking-tight">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white shadow-2xs">
            <GraduationCap className="h-4.5 w-4.5" />
          </div>
          <span>HighEd Admin</span>
        </Link>
      </div>

      {/* Right: Search, Website Link, Notification, User Dropdown */}
      <div className="flex items-center gap-3">
        {/* Global Search */}
        <div className="relative hidden md:block w-64 lg:w-80">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search leads, events, blogs..."
            className="h-9.5 w-full rounded-lg border border-slate-200 bg-slate-50/70 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-950 focus:bg-white transition-colors"
          />
        </div>

        <Link
          href="/"
          target="_blank"
          className="hidden xl:inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-2.5 py-1.5 rounded-md hover:bg-slate-100"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          <span>Live Site</span>
        </Link>

        {/* Notifications */}
        <button className="btn-motion relative rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 cursor-pointer">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-slate-900 ring-2 ring-white"></span>
        </button>

        <div className="h-5 w-px bg-slate-200" />

        {/* Profile Dropdown */}
        <DropdownMenu
          align="right"
          trigger={
            <button className="btn-motion flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 cursor-pointer">
              <Avatar
                size="sm"
                fallback={user?.name ? user.name.slice(0, 2).toUpperCase() : 'AD'}
                className="h-8 w-8 text-xs font-semibold"
              />
              <span className="hidden sm:inline font-semibold text-slate-900 text-sm">
                {user?.name || 'Admin'}
              </span>
              <ChevronDown className="h-4 w-4 text-slate-400" />
            </button>
          }
          items={userMenuItems}
        />
      </div>
    </header>
  );
}
