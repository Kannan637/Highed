import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";

export default function CityNotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-[#FAFAFC] py-20">
      <Container size="sm" className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF1FA] text-[#253A7B]">
          <MapPin size={32} />
        </div>
        <h1 className="mt-6 font-heading text-3xl font-bold text-[#121314] sm:text-4xl">
          City Location Not Found
        </h1>
        <p className="mt-3 font-body text-base text-gray-600">
          We couldn&apos;t find information for this city location yet. Please explore our featured cities or contact us directly for free overseas education guidance.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#253A7B] px-6 font-body text-sm font-semibold text-white transition-colors hover:bg-[#1b2b5d]"
          >
            <ArrowLeft size={16} />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/best-study-consultant-in/chennai"
            className="inline-flex h-11 items-center rounded-full border border-gray-300 bg-white px-6 font-body text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
          >
            Explore Chennai
          </Link>
        </div>
      </Container>
    </div>
  );
}
