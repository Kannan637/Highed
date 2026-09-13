import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { allCountries } from "@/data/countries";
import { constructMetadata } from "@/seo/metadata";

export const metadata = constructMetadata({
  title: "Study Abroad Destinations",
  description:
    "Explore top overseas study destinations including Dubai, USA, UK, Canada, Australia, and Germany. Discover universities, courses, and visas.",
  path: "/study-in",
  keywords: ["study abroad destinations", "overseas education countries", "best countries to study abroad"],
});

export default function StudyInPage() {
  return (
    <div className="bg-[#FAFAFC] py-16 sm:py-24">
      <Container size="lg">
        <SectionHeading
          badge="Global Destinations"
          title="Explore Study Abroad Countries"
          subtitle="Select your preferred destination to explore accredited universities, living costs, post-study work visas, and scholarships."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allCountries.map((country) => (
            <Link
              key={country.slug}
              href={`/study-in/${country.slug}`}
              className="group flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-8 shadow-xs transition-all duration-300 hover:border-[#253A7B]/20 hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-[#F8F9FE] shadow-2xs">
                    <ReactCountryFlag
                      countryCode={country.code}
                      svg
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  </span>
                  <span className="rounded-full bg-[#EBF5EE] px-3 py-1 font-dmsans text-xs font-bold text-[#1E7B47]">
                    Popular
                  </span>
                </div>

                <h3 className="mt-6 font-hedvig text-2xl font-bold text-[#121314] transition-colors group-hover:text-[#253A7B]">
                  Study in {country.name}
                </h3>

                <p className="mt-3 font-dmsans text-sm leading-relaxed text-gray-600 line-clamp-3">
                  {country.tagline}
                </p>

                <div className="mt-6 space-y-2 border-t border-gray-100 pt-4 font-dmsans text-xs text-gray-500">
                  <div>
                    <span className="font-semibold text-gray-700">Currency:</span>{" "}
                    {country.currency.split("(")[0]}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Visa Processing:</span>{" "}
                    {country.visaDetails.processingTime}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between font-dmsans text-sm font-semibold text-[#253A7B] transition-colors group-hover:text-[#E93F61]">
                <span>Explore {country.name} Guide</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
