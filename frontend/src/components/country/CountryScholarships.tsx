"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Award, CheckCircle2, Compass, ShieldCheck } from "lucide-react";
import { Country } from "@/types/country";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Carousel from "@/components/ui/Carousel";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

interface CountryScholarshipsProps {
  country: Country;
}

export const CountryScholarships: React.FC<CountryScholarshipsProps> = ({ country }) => {
  return (
    <section id="scholarships" className="bg-neutral-50/60 py-20 border-t border-neutral-200/60">
      <Container size="lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <SectionHeading
              badge="Financial Support"
              title={`Scholarships & Grants in ${country.name}`}
              subtitle={`Offset your tuition with merit-based awards, government stipends, and university waivers.`}
              className="text-left mb-0"
            />
          </div>
          <Link
            href={`/study-in/${country.slug}/explore?type=scholarships`}
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-[#253A7B] hover:text-[#E93F61] transition-colors pb-2 shrink-0"
          >
            <span>View All ({country.scholarshipsList.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <Carousel
          ariaLabel={`Scholarships in ${country.name}`}
          className="px-1"
          controlsPosition="top"
        >
          {country.scholarshipsList.map((scholarship, idx) => (
            <div
              key={scholarship.name + idx}
              className="snap-start shrink-0 w-[300px] sm:w-[360px] md:w-[400px] flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-white p-6 md:p-7 shadow-sm transition-all duration-300 hover:border-[#253A7B]/40 hover:shadow-xl"
            >
              <div>
                {/* Scholarship Amount Badge */}
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200/70 px-3.5 py-1 text-xs font-bold text-amber-800">
                  <Award size={14} className="text-amber-600" />
                  <span>{scholarship.amount}</span>
                </div>

                <h3 className="font-hedvig text-xl font-bold text-neutral-900 leading-snug">
                  {scholarship.name}
                </h3>

                <div className="mt-5 space-y-3">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-600" />
                    <div>
                      <strong className="font-semibold text-neutral-900">Eligibility: </strong>
                      <span>{scholarship.eligibility}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600">
                    <ShieldCheck size={16} className="mt-0.5 shrink-0 text-[#253A7B]" />
                    <div>
                      <strong className="font-semibold text-neutral-900">Coverage: </strong>
                      <span>{scholarship.coverage}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-neutral-100 flex items-center justify-between">
                <LeadCTAButton
                  source={`country_scholarship_${country.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#253A7B] hover:text-[#E93F61] transition-colors cursor-pointer"
                >
                  <span>Check Qualification</span>
                  <ArrowRight size={14} />
                </LeadCTAButton>
              </div>
            </div>
          ))}
        </Carousel>

        {/* Directory Explore Link */}
        <div className="mt-8 flex justify-center">
          <Link
            href={`/study-in/${country.slug}/explore?type=scholarships`}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-[#253A7B] shadow-xs hover:border-[#253A7B] hover:bg-[#EEF1FA]/50 transition-all active:scale-95"
          >
            <Compass className="w-4 h-4 text-[#E93F61]" />
            <span>Explore All Scholarships & Application Deadlines</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CountryScholarships;
