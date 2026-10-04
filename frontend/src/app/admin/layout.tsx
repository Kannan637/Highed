import type { Metadata } from 'next';
import { AuthProvider } from './providers/AuthProvider';
import { QueryProvider } from './providers/QueryProvider';
import './admin.css';

export const metadata: Metadata = {
  title: 'HighEd Admin Portal',
  description: 'Study abroad consultancy admin panel, lead tracking, events, and CMS.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <AuthProvider>
        <div className="admin-root min-h-screen bg-slate-50/60 text-slate-900 font-body antialiased selection:bg-slate-200 selection:text-slate-900">
          {children}
        </div>
      </AuthProvider>
    </QueryProvider>
  );
}
