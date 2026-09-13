import Link from "next/link";
import { ArrowLeft, Globe } from "lucide-react";
import Container from "@/components/ui/Container";

export default function CountryNotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-[#FAFAFC] py-20">
      <Container size="sm" className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF1FA] text-[#253A7B]">
          <Globe size={32} />
        </div>
        <h1 className="mt-6 font-hedvig text-3xl font-bold text-[#121314] sm:text-4xl">
          Country Destination Not Found
        </h1>
        <p className="mt-3 font-dmsans text-base text-gray-600">
          We couldn&apos;t find information for this study abroad destination yet. Please check back soon or explore our featured countries.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#253A7B] px-6 font-dmsans text-sm font-semibold text-white transition-colors hover:bg-[#1b2b5d]"
          >
            <ArrowLeft size={16} />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/study-in/dubai"
            className="inline-flex h-11 items-center rounded-full border border-gray-300 bg-white px-6 font-dmsans text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
          >
            Explore Dubai
          </Link>
        </div>
      </Container>
    </div>
  );
}
