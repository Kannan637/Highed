"use client";

import CountryCTA from "@/components/ui/CTA";
import { Country } from "@/types/country";

interface CountryCTASectionProps {
  country?: Country | string;
}

export default function CountryCTASection({
  country = "Dubai",
}: CountryCTASectionProps) {
  const countryName = typeof country === "string" ? country : country?.name || "Dubai";
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1440px]
          grid-cols-12
          items-center
          px-6
          sm:px-10
          lg:px-[80px]
        "
      >
        <div className="col-span-12 w-full">
          <CountryCTA
            title={`Have Questions About ${countryName} Admissions?`}
          />
        </div>
      </div>
    </section>
  );
}