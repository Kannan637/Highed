"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { RefreshCw, Home } from "lucide-react";

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
    <div className="flex min-h-[65vh] flex-col items-center justify-center px-5 py-14 text-center font-body">
      {/* =========================
          ERROR ILLUSTRATION
      ========================== */}
      <div className="relative mx-auto flex w-full max-w-[440px] items-center justify-center sm:max-w-[540px] md:max-w-[620px]">
        <Image
          src="/images/Error/Error Page.webp"
          alt="Something Went Wrong!"
          width={842}
          height={267}
          priority
          className="h-auto w-full select-none object-contain drop-shadow-xs pointer-events-none"
        />
      </div>

      <h1 className="sr-only">Something Went Wrong</h1>

      <p className="mt-6 max-w-md text-base leading-relaxed text-content-secondary">
        We encountered an unexpected error while processing your request. Please
        try again or return to the homepage.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={reset}
          className="btn-motion inline-flex h-12 cursor-pointer items-center gap-2.5 rounded-full bg-brand-accent px-7 text-[15px] font-semibold text-white shadow-sm hover:bg-brand-accent-hover hover:shadow-md"
        >
          <RefreshCw size={18} />
          <span>Try Again</span>
        </button>
        <Link
          href="/"
          className="btn-motion inline-flex h-12 items-center gap-2.5 rounded-full border-2 border-brand-primary px-7 text-[15px] font-semibold text-brand-primary hover:bg-brand-primary hover:text-white"
        >
          <Home size={18} />
          <span>Go Home</span>
        </Link>
      </div>
    </div>
  );
}
