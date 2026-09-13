import React from "react";
import { Country } from "@/types/country";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Globe } from "lucide-react";

interface ExploreHeroProps {
  country?: Country;
}

export const ExploreHero: React.FC<ExploreHeroProps> = ({ country }) => {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#16234B_0%,#253A7B_60%,#1B2958_100%)] py-12 md:py-16 text-white border-b border-white/10">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -left-20 top-0 h-[300px] w-[300px] rounded-full bg-blue-400/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[300px] w-[300px] rounded-full bg-[#E93F61]/15 blur-[100px]" />

      <Container size="lg">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumb
            items={
              country
                ? [
                    { label: "Home", href: "/" },
                    { label: "Study Abroad", href: "/study-in" },
                    { label: country.name, href: `/study-in/${country.slug}` },
                    { label: "Explore Directory" },
                  ]
                : [
                    { label: "Home", href: "/" },
                    { label: "Explore Directory" },
                  ]
            }
            className="[&_span]:text-white/70 [&_a]:text-white/70 [&_a:hover]:text-white [&_svg]:text-white/40 [&_span[aria-current]]:text-white"
          />
        </div>

        {/* Header content */}
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold backdrop-blur-md">
            {country ? (
              <>
                <span>{country.flag}</span>
                <span>{country.name} Unified Directory</span>
              </>
            ) : (
              <>
                <Globe size={13} className="text-white/80" />
                <span>Global Unified Directory</span>
              </>
            )}
          </div>

          <h1 className="font-hedvig text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {country
              ? `Explore Study Opportunities in ${country.name}`
              : "Explore Universities, Courses & Scholarships Worldwide"}
          </h1>

          <p className="mt-3 text-sm md:text-base text-white/80 leading-relaxed font-dmsans">
            {country
              ? `Browse verified academic programs, QS-ranked partner universities, tuition ranges, and available international scholarship grants in ${country.name}.`
              : "Search top-tier partner universities, degree programs, tuition ranges, and scholarship awards across USA, UK, Canada, Australia, Dubai, and Germany."}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ExploreHero;

