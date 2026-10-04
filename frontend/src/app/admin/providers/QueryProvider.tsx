'use client';

import React from 'react';

/**
 * QueryProvider wraps the admin application.
 * If TanStack Query is installed, QueryClientProvider can be plugged in here.
 * For now, this acts as a lightweight context container.
 */
export function QueryProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
