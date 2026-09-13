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
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center font-dmsans">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#FDF0F3]">
        <span className="text-3xl">⚠️</span>
      </div>

      <h2 className="font-hedvig text-3xl font-bold text-[#121314] sm:text-4xl">
        Something Went Wrong
      </h2>

      <p className="mt-4 max-w-md text-base text-gray-500">
        We encountered an unexpected error. Please try again or return to the homepage.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={reset}
          className="inline-flex h-12 items-center gap-2.5 rounded-full bg-[#E93F61] px-7 text-[15px] font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#d93657] active:scale-95"
        >
          <RefreshCw size={18} />
          <span>Try Again</span>
        </button>
        <Link
          href="/"
          className="inline-flex h-12 items-center gap-2.5 rounded-full border-2 border-[#253A7B] px-7 text-[15px] font-semibold text-[#253A7B] transition-all duration-300 hover:bg-[#253A7B] hover:text-white active:scale-95"
        >
          <Home size={18} />
          <span>Go Home</span>
        </Link>
      </div>
    </div>
  );
}
