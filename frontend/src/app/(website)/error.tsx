"use client";

import { useEffect } from "react";
import { RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center font-body">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#FDF0F3]">
        <span className="text-3xl">⚠️</span>
      </div>

      <h2 className="text-content-primary">
        Something Went Wrong
      </h2>

      <p className="mt-4 max-w-md text-base text-content-secondary">
        We encountered an unexpected error. Please try again or return to the homepage.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={reset}
          className="inline-flex h-12 items-center gap-2.5 rounded-full bg-brand-accent px-7 text-[15px] font-semibold text-white shadow-sm transition-all duration-300 hover:bg-brand-accent-hover active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
        >
          <RefreshCw size={18} />
          <span>Try Again</span>
        </button>
        <Link
          href="/"
          className="inline-flex h-12 items-center gap-2.5 rounded-full border-2 border-brand-primary px-7 text-[15px] font-semibold text-brand-primary transition-all duration-300 hover:bg-brand-primary hover:text-white active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
        >
          <Home size={18} />
          <span>Go Home</span>
        </Link>
      </div>
    </div>
  );
}
