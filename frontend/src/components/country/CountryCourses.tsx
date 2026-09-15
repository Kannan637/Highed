"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Briefcase, BookOpen, Compass } from "lucide-react";
import { Country } from "@/types/country";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Carousel from "@/components/ui/Carousel";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

interface CountryCoursesProps {
  country: Country;
}

type FilterLevel = "all" | "Undergraduate" | "Postgraduate";

export const CountryCourses: React.FC<CountryCoursesProps> = ({ country }) => {
  const [activeLevel, setActiveLevel] = useState<FilterLevel>("all");

  const filteredCourses = useMemo(() => {
    if (activeLevel === "all") return country.coursesList;
    return country.coursesList.filter(
      (c) => c.level.toLowerCase() === activeLevel.toLowerCase()
    );
  }, [country.coursesList, activeLevel]);

  return (
    <section id="courses" className="bg-neutral-50/60 py-20 border-t border-neutral-200/60">
      <Container size="lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <SectionHeading
              badge="High-Demand Degrees"
              title={`Popular Courses to Study in ${country.name}`}
              subtitle={`Explore cutting-edge undergraduate & master's degrees tailored for global career mobility.`}
              className="text-left mb-0"
            />
          </div>

          {/* Level filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-neutral-200/80 rounded-full shadow-xs self-start md:self-end">
            {(["all", "Undergraduate", "Postgraduate"] as FilterLevel[]).map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => setActiveLevel(level)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  activeLevel === level
                    ? "bg-[#253A7B] text-white shadow-xs"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {level === "all" ? "All Levels" : level}
              </button>
            ))}
          </div>
        </div>

        <Carousel
          ariaLabel={`Popular courses in ${country.name}`}
          className="px-1"
          controlsPosition="top"
        >
          {filteredCourses.map((course, idx) => (
            <div
              key={course.name + idx}
              className="snap-start shrink-0 w-[300px] sm:w-[340px] md:w-[370px] flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#253A7B]/40 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="rounded-full bg-[#EEF1FA] px-3 py-1 text-xs font-semibold text-[#253A7B]">
                    {course.level}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-medium text-neutral-500">
                    <Clock size={13} />
                    {course.duration}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-neutral-900 line-clamp-2 mt-2">
                  {course.name}
                </h3>

                {/* Tuition Range */}
                <div className="mt-4 rounded-xl bg-neutral-50 border border-neutral-200/70 p-3">
                  <div className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
                    Average Annual Fee
                  </div>
                  <div className="mt-0.5 text-sm font-bold text-[#253A7B]">
                    {course.averageFee}
                  </div>
                </div>

                {/* Career Prospects */}
                {course.careerProspects && course.careerProspects.length > 0 && (
                  <div className="mt-4">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                      <Briefcase size={12} />
                      Career Opportunities
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {course.careerProspects.slice(0, 3).map((career) => (
                        <span
                          key={career}
                          className="rounded-md border border-neutral-200 bg-neutral-50/70 px-2 py-0.5 text-[11px] font-medium text-neutral-700"
                        >
                          {career}
                        </span>
                      ))}
                      {course.careerProspects.length > 3 && (
                        <span className="rounded-md bg-neutral-200/60 px-1.5 py-0.5 text-[10px] font-semibold text-neutral-600">
                          +{course.careerProspects.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <LeadCTAButton
                  source={`country_course_${country.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#253A7B] hover:text-[#E93F61] transition-colors cursor-pointer py-1"
                >
                  <BookOpen size={15} />
                  <span>Check Eligibility</span>
                  <ArrowRight size={13} />
                </LeadCTAButton>
              </div>
            </div>
          ))}
        </Carousel>

        {/* Explore All Link */}
        <div className="mt-8 flex justify-center">
          <Link
            href={`/study-in/${country.slug}/explore?type=courses${
              activeLevel !== "all" ? `&level=${activeLevel.toLowerCase()}` : ""
            }`}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-[#253A7B] shadow-xs hover:border-[#253A7B] hover:bg-[#EEF1FA]/50 transition-all active:scale-95"
          >
            <Compass className="w-4 h-4 text-[#E93F61]" />
            <span>
              Explore All Courses {activeLevel !== "all" ? `in ${activeLevel}` : ""}
            </span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CountryCourses;
