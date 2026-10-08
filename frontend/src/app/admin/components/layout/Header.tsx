'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';
import { DropdownMenu } from '../ui/dropdown-menu';
import { Avatar } from '../ui/avatar';
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
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-slate-200/80 bg-white/95 backdrop-blur-md px-4 sm:px-6">
      {/* Left: Brand & Mobile Menu Trigger */}
      <div className="flex items-center gap-3.5">
        <button
          onClick={onOpenMobileMenu}
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden cursor-pointer transition-colors"
          aria-label="Open mobile menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link href="/admin" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#25347B] text-white shadow-xs transition-transform group-hover:scale-105">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#25347B] text-base tracking-tight leading-none">HighEd</span>
              <span className="rounded-md bg-[#25347B]/10 px-1.5 py-0.5 text-[10px] font-bold text-[#25347B] uppercase tracking-wider">
                Admin
              </span>
            </div>
            <span className="text-[11px] font-medium text-slate-400 block mt-0.5 leading-none">
              Admissions Portal
            </span>
          </div>
        </Link>
      </div>

      {/* Right: Search, Live Site link, Notifications, User menu */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        {/* Astrix Global Command Search */}
        <div className="relative hidden md:block w-64 lg:w-80">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search leads, events, blogs..."
            className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50/80 pl-9 pr-12 text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:bg-white focus:outline-none focus:border-[#25347B] focus:ring-2 focus:ring-[#25347B]/15"
          />
          <kbd className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-semibold text-slate-400">
            ⌘K
          </kbd>
        </div>

        {/* Live Site Link */}
        <Link
          href="/"
          target="_blank"
          className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#25347B] transition-colors px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-100"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          <span>Live Site</span>
        </Link>

        {/* Notifications */}
        <button
          className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
          aria-label="View notifications"
        >
          <Bell className="h-4.5 w-4.5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#E93F61] ring-2 ring-white" />
        </button>

        <div className="h-5 w-px bg-slate-200/80" />

        {/* User Profile Pill */}
        <DropdownMenu
          align="right"
          trigger={
            <button className="flex items-center gap-2.5 rounded-lg p-1 sm:px-2.5 sm:py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer">
              <Avatar
                size="sm"
                fallback={user?.name ? user.name.slice(0, 2).toUpperCase() : 'AD'}
                className="h-8 w-8 text-xs font-bold bg-[#25347B]/10 text-[#25347B] border border-[#25347B]/20"
              />
              <div className="hidden sm:block text-left leading-tight">
                <span className="font-semibold text-slate-900 text-xs block">
                  {user?.name || 'Administrator'}
                </span>
                <span className="text-[11px] text-slate-400 capitalize block">
                  {user?.role?.replace('_', ' ') || 'Staff'}
                </span>
              </div>
              <ChevronDown className="h-3.5 w-3.5 text-slate-400 hidden sm:block" />
            </button>
          }
          items={userMenuItems}
        />
      </div>
    </header>
  );
}
