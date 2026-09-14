"use client";

import React, { useState } from "react";
import { Play, Star, Quote, CheckCircle, GraduationCap, X } from "lucide-react";
import { Country } from "@/types/country";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

interface CountryTestimonialsProps {
  country: Country;
}

export const CountryTestimonials: React.FC<CountryTestimonialsProps> = ({ country }) => {
  const testimonial = country.testimonial || {
    studentName: "Aditya Patel",
    university: `Top University in ${country.name}`,
    course: "Master's Degree Program",
    country: country.name,
    rating: 5,
    quote: `Applying to study in ${country.name} through HighEd was an absolute game changer. The counselors guided me through university shortlisting, statement of purpose refinement, and secured a 30% scholarship.`,
  };

  return (
    <section className="bg-neutral-50/70 py-20 border-t border-neutral-200/60">
      <Container size="lg">
        <SectionHeading
          badge="Student Stories"
          title={`Hear From Students in ${country.name}`}
          subtitle={`Real journeys, verified admits, and genuine experiences from students who took flight with HighEd.`}
        />

        <div className="mt-12 grid grid-cols-4 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Experience Highlight Card */}
          <div className="col-span-4 lg:col-span-5 relative flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200 bg-[#16234B] text-white p-7 shadow-lg min-h-[360px]">
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#E93F61]/20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />

            {/* Top pill */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-md">
                Student Journey Highlights
              </span>
            </div>

            {/* Center Content Highlight */}
            <div className="relative z-10 my-auto flex flex-col justify-center py-8">
              <h4 className="text-2xl font-hedvig font-bold text-white mb-4 leading-tight">
                Life as an International Student in {country.name}
              </h4>
              <ul className="space-y-3">
                {[
                  "World-class campus experiences",
                  "Vibrant multicultural community",
                  "Excellent post-study opportunities",
                  "Supported by HighEd mentors"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-white/80">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-[#E93F61] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom info */}
            <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#E93F61]" />
                HighEd Alumni Network
              </span>
              <span>100% Authentic</span>
            </div>
          </div>

          {/* Right Column: Student Testimonial Card */}
          <div className="col-span-4 lg:col-span-7 flex flex-col justify-between rounded-3xl border border-neutral-200/90 bg-white p-8 md:p-10 shadow-sm">
            <div>
              {/* Header with stars and quote icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote size={32} className="text-neutral-200" />
              </div>

              {/* Quote text */}
              <blockquote className="font-dmsans text-base md:text-lg text-neutral-700 leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
            </div>

            {/* Student metadata */}
            <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                {/* Student Avatar */}
                <div className="flex h-13 w-13 items-center justify-center rounded-full bg-gradient-to-tr from-[#253A7B] to-[#E93F61] text-white font-bold text-lg shadow-sm">
                  {testimonial.studentName.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-hedvig text-base md:text-lg font-bold text-neutral-900">
                    <span>{testimonial.studentName}</span>
                    <CheckCircle size={15} className="text-emerald-600 shrink-0" />
                  </div>
                  <div className="text-xs text-neutral-500">
                    {testimonial.course} • {testimonial.university}
                  </div>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200/60">
                Verified Admit
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CountryTestimonials;
