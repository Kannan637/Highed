'use client';

import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { MobileSidebar } from './MobileSidebar';
import { Breadcrumbs } from './Breadcrumbs';

export function AdminShell({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F5F9] text-slate-900 flex flex-col font-body">
      {/* Astrix Full-Width Header */}
      <Header onOpenMobileMenu={() => setMobileMenuOpen(true)} />

      <div className="flex-1 flex min-w-0">
        {/* Astrix Left Sidebar */}
        <Sidebar />

        {/* Astrix Mobile Drawer */}
        <MobileSidebar
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />

        {/* Astrix Main Workspace Container */}
        <main className="flex-1 p-5 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto min-w-0 overflow-y-auto">
          <Breadcrumbs />
          {children}
        </main>
      </div>
    </div>
  );
}
