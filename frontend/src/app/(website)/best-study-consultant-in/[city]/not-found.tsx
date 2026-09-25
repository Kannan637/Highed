import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function CityNotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-[#FAFAFC] py-20">
      <Container size="sm" className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF1FA] text-[#253A7B]">
          <MapPin size={32} />
        </div>
        <h1 className="mt-6 text-content-primary">
          City Location Not Found
        </h1>
        <p className="mt-3 font-body text-base text-gray-600">
          We couldn&apos;t find information for this city location yet. Please explore our featured cities or contact us directly for free overseas education guidance.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "primary" }), "gap-2")}
          >
            <ArrowLeft size={16} />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/best-study-consultant-in/chennai"
            className={buttonVariants({ variant: "outline" })}
          >
            Explore Chennai
          </Link>
        </div>
      </Container>
    </div>
  );
}
