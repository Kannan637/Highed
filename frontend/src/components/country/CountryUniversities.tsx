"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, GraduationCap, MapPin, Trophy, Compass } from "lucide-react";
import { Country } from "@/types/country";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Carousel from "@/components/ui/Carousel";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

interface CountryUniversitiesProps {
  country: Country;
}

export const CountryUniversities: React.FC<CountryUniversitiesProps> = ({ country }) => {
  return (
    <section id="universities" className="bg-white py-20">
      <Container size="lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <SectionHeading
              badge="Top Institutions"
              title={`Top Universities in ${country.name}`}
              subtitle={`Study at internationally accredited universities and branch campuses in ${country.name}.`}
              className="text-left mb-0"
            />
          </div>
          <Link
            href={`/study-in/${country.slug}/explore?type=universities`}
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-[#253A7B] hover:text-[#E93F61] transition-colors pb-2 shrink-0"
          >
            <span>View All ({country.universitiesList.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <Carousel
          ariaLabel={`Top universities in ${country.name}`}
          className="px-1"
          controlsPosition="top"
        >
          {country.universitiesList.map((uni, idx) => (
            <div
              key={uni.name + idx}
              className="snap-start shrink-0 w-[300px] sm:w-[350px] md:w-[380px] flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-neutral-50/50 p-6 shadow-sm transition-all duration-300 hover:border-[#253A7B]/40 hover:bg-white hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  {uni.ranking ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EEF1FA] px-3 py-1 text-xs font-semibold text-[#253A7B]">
                      <Trophy size={13} className="shrink-0" />
                      <span className="truncate">{uni.ranking}</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      Accredited Campus
                    </span>
                  )}
                  <span className="text-xs font-semibold text-neutral-400">
                    #{idx + 1}
                  </span>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-bold leading-snug text-neutral-900 mt-2 line-clamp-2">
                  {uni.name}
                </h3>

                <div className="mt-2 flex items-center gap-1.5 text-xs text-neutral-500">
                  <MapPin size={14} className="text-[#E93F61] shrink-0" />
                  <span className="truncate">{uni.location}</span>
                </div>

                {/* Tuition box */}
                <div className="mt-4 rounded-xl bg-white border border-neutral-200/70 p-3">
                  <div className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
                    Tuition Range
                  </div>
                  <div className="mt-0.5 text-sm font-bold text-[#253A7B]">
                    {uni.tuitionRange}
                  </div>
                </div>

                {/* Popular Programs */}
                {uni.popularPrograms && uni.popularPrograms.length > 0 && (
                  <div className="mt-4">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                      Programs Offered
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {uni.popularPrograms.slice(0, 3).map((prog) => (
                        <span
                          key={prog}
                          className="rounded-md border border-neutral-200 bg-white px-2 py-0.5 text-[11px] font-medium text-neutral-700"
                        >
                          {prog}
                        </span>
                      ))}
                      {uni.popularPrograms.length > 3 && (
                        <span className="rounded-md bg-neutral-200/70 px-1.5 py-0.5 text-[10px] font-semibold text-neutral-600">
                          +{uni.popularPrograms.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-neutral-200/80">
                <LeadCTAButton
                  source={`country_uni_${country.slug}`}
                  className="flex w-full items-center justify-between text-xs sm:text-sm font-semibold text-[#253A7B] hover:text-[#E93F61] transition-colors cursor-pointer py-1"
                >
                  <span className="flex items-center gap-1.5">
                    <GraduationCap size={16} />
                    Apply With Guidance
                  </span>
                  <ArrowRight size={15} />
                </LeadCTAButton>
              </div>
            </div>
          ))}
        </Carousel>

        {/* Mobile View All & Explore All Button */}
        <div className="mt-8 flex justify-center">
          <Link
            href={`/study-in/${country.slug}/explore?type=universities`}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-[#253A7B] shadow-xs hover:border-[#253A7B] hover:bg-[#EEF1FA]/50 transition-all active:scale-95"
          >
            <Compass className="w-4 h-4 text-[#E93F61]" />
            <span>Explore All Universities & Filters</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CountryUniversities;
