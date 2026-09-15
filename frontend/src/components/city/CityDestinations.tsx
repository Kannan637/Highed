import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, Globe } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { CityData } from "@/types/city";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

interface CityDestinationsProps {
  city: CityData;
}

export const CityDestinations: React.FC<CityDestinationsProps> = ({ city }) => {
  return (
    <section id="destinations" className="bg-neutral-50/70 py-20 border-t border-neutral-200/60">
      <Container size="lg">
        <SectionHeading
          badge="Global Pathways"
          title={`Top Study Abroad Destinations from ${city.name}`}
          subtitle={`Discover why thousands of students from ${city.name} choose these world-class study destinations for their bachelor's, master's, and MBA degrees.`}
          align="center"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {city.destinations.map((dest, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200/80 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#253A7B]/40 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl" role="img" aria-label={dest.name}>
                    {dest.flag}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#EEF1FA] px-3 py-1 font-body text-xs font-semibold text-[#253A7B]">
                    <span>Popular from {city.name}</span>
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-bold text-neutral-900 group-hover:text-[#253A7B] transition-colors">
                  Study in {dest.name}
                </h3>

                <p className="mt-3 font-body text-sm leading-relaxed text-neutral-600">
                  {dest.tagline}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-neutral-100 flex items-center justify-between">
                <Link
                  href={dest.href}
                  className="inline-flex items-center gap-2 font-body text-sm font-bold text-[#253A7B] transition-colors hover:text-[#E93F61]"
                >
                  <span>Explore {dest.name}</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>

                <LeadCTAButton
                  source={`city_dest_${city.slug}_${dest.name.toLowerCase().replace(/\s+/g, "_")}`}
                  contextTitle={`Apply for ${dest.name} from ${city.name}`}
                  contextCTA="Get Free Advice"
                  className="rounded-full bg-neutral-100 px-3.5 py-1.5 font-body text-xs font-medium text-neutral-700 hover:bg-[#E93F61] hover:text-white transition-colors cursor-pointer"
                >
                  Apply Now
                </LeadCTAButton>
              </div>
            </div>
          ))}
        </div>

        {/* Explore all countries banner */}
        <div className="mt-12 rounded-3xl bg-[linear-gradient(135deg,#16234B_0%,#253A7B_100%)] p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white border border-white/20">
              <Globe size={24} />
            </div>
            <div>
              <h4 className="font-heading text-xl font-bold">Unsure which destination fits your profile & budget?</h4>
              <p className="font-body text-sm text-white/80 mt-1">Our counsellors in {city.name} will compare tuition costs, post-study work visas, and admission chances for you.</p>
            </div>
          </div>

          <LeadCTAButton
            source={`city_dest_compare_${city.slug}`}
            contextTitle={`Country Comparison for ${city.name} Student`}
            contextCTA="Compare Countries"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#E93F61] px-6 py-3 font-body text-sm font-bold text-white shadow-md hover:bg-[#d93657] transition-all cursor-pointer"
          >
            <span>Compare My Options Free</span>
            <ArrowRight size={16} />
          </LeadCTAButton>
        </div>
      </Container>
    </section>
  );
};

export default CityDestinations;
