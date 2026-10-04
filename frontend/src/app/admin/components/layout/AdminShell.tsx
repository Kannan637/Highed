'use client';

import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { MobileSidebar } from './MobileSidebar';
import { Breadcrumbs } from './Breadcrumbs';

export function AdminShell({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50/60 text-slate-900 flex flex-col font-body">
      {/* Full width Nova Top Header */}
      <Header onOpenMobileMenu={() => setMobileMenuOpen(true)} />

      <div className="flex-1 flex min-w-0">
        {/* Desktop Sidebar */}
        <Sidebar />

        {/* Mobile Drawer */}
        <MobileSidebar
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />

        {/* Main Content Area */}
        <main className="flex-1 p-5 sm:p-7 lg:p-8 max-w-7xl w-full mx-auto min-w-0 overflow-y-auto">
          <Breadcrumbs />
          {children}
        </main>
      </div>
    </div>
  );
}
