import Link from "next/link";
import { Home, Search } from "lucide-react";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAFAFC] font-body">
      <Container size="sm" className="text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#EEF1FA]">
          <Search size={36} className="text-[#253A7B]" />
        </div>

        <h1 className="font-heading text-4xl font-bold text-[#121314] sm:text-5xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-base text-gray-500 sm:text-lg">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex h-12 items-center gap-2.5 rounded-full bg-[#253A7B] px-7 text-[15px] font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#1b2b5d] active:scale-95"
          >
            <Home size={18} />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/study-in"
            className="inline-flex h-12 items-center rounded-full border-2 border-[#253A7B] px-7 text-[15px] font-semibold text-[#253A7B] transition-all duration-300 hover:bg-[#253A7B] hover:text-white active:scale-95"
          >
            Explore Countries
          </Link>
        </div>

        <p className="mt-12 text-xs text-gray-400">
          Error 404 · HighEd Study Abroad Advisory
        </p>
      </Container>
    </div>
  );
}
