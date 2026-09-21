"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Award, CheckCircle2, Compass, ShieldCheck } from "lucide-react";
import { Country } from "@/types/country";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Carousel from "@/components/ui/Carousel";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import { Card } from "@/components/ui/Card";

interface CountryScholarshipsProps {
  country: Country;
}

export const CountryScholarships: React.FC<CountryScholarshipsProps> = ({ country }) => {
  return (
    <section id="scholarships" className="bg-neutral-50/60 py-12 sm:py-16 md:py-20 border-t border-neutral-200/60">
      <Container size="lg">
        <div className="flex flex-col items-center justify-center text-center mb-10 gap-6">
          <div className="w-full flex justify-center">
            <SectionHeading
              badge="Financial Support"
              title={`Scholarships & Grants in ${country.name}`}
              subtitle={`Offset your tuition with merit-based awards, government stipends, and university waivers.`}
              className="text-center mb-0 max-w-2xl"
            />
          </div>
        </div>

        <Carousel
          ariaLabel={`Scholarships in ${country.name}`}
          className="px-1"
          controlsPosition="top"
        >
          {country.scholarshipsList.map((scholarship, idx) => (
            <Card
              key={scholarship.name + idx}
              className="snap-start shrink-0 w-[84vw] max-w-[340px] sm:w-[360px] md:w-[400px] flex flex-col justify-between"
            >
              <div>
                {/* Scholarship Amount Badge */}
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200/70 px-3.5 py-1 text-caption font-medium text-amber-800">
                  <Award size={14} className="text-amber-600" />
                  <span>{scholarship.amount}</span>
                </div>

                <h3 className="font-heading font-normal text-h4 text-content-primary leading-snug">
                  {scholarship.name}
                </h3>

                <div className="mt-5 space-y-3">
                  <div className="flex items-start gap-2.5 text-body-small text-neutral-600">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-600" />
                    <div>
                      <strong className="font-medium text-neutral-900">Eligibility: </strong>
                      <span>{scholarship.eligibility}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-body-small text-neutral-600">
                    <ShieldCheck size={16} className="mt-0.5 shrink-0 text-brand-primary" />
                    <div>
                      <strong className="font-medium text-neutral-900">Coverage: </strong>
                      <span>{scholarship.coverage}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-neutral-100 flex items-center justify-between">
                <LeadCTAButton
                  source={`country_scholarship_${country.slug}`}
                  variant="ghost"
                  size="sm"
                  className="inline-flex items-center gap-1.5 text-btn font-medium text-brand-primary hover:text-brand-accent !px-0"
                >
                  <span>Check Qualification</span>
                  <ArrowRight size={14} />
                </LeadCTAButton>
              </div>
            </Card>
          ))}
        </Carousel>

        {/* Directory Explore Link */}
        <div className="mt-8 flex justify-center px-4">
          <Link
            href={`/study-in/${country.slug}/explore?type=scholarships`}
            className="inline-flex items-center justify-center font-medium rounded-[var(--radius-btn)] transition-all duration-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-content-inverse min-h-[44px] h-auto py-2.5 px-6 text-btn gap-2 max-w-full text-center"
          >
            <Compass className="w-4 h-4 shrink-0" />
            <span>Explore All Scholarships & Application Deadlines</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CountryScholarships;
