import React from "react";
import { BookOpen, ArrowRight, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { CityData } from "@/types/city";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

interface CityCoursesProps {
  city: CityData;
}

export const CityCourses: React.FC<CityCoursesProps> = ({ city }) => {
  return (
    <section className="bg-white py-20">
      <Container size="lg">
        <SectionHeading
          badge="High-Growth Disciplines"
          title={`Popular Courses Chosen by Students in ${city.name}`}
          subtitle={`From AI and cutting-edge engineering to global business and healthcare, discover the programs commanding highest starting packages and international visa eligibility.`}
          align="center"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {city.popularCourses.map((course, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-neutral-50/50 p-5 transition-all duration-300 hover:border-brand-primary/40 hover:bg-white hover:shadow-md"
            >
              <div>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-icon-bg-primary text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white">
                  <BookOpen size={18} />
                </div>
                <h3 className="font-heading font-normal text-h5 text-content-primary group-hover:text-brand-primary transition-colors">
                  {course}
                </h3>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-200/60 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-caption font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  <Sparkles size={11} />
                  <span>High Demand</span>
                </span>

                <LeadCTAButton
                  source={`city_course_${city.slug}_${idx}`}
                  contextTitle={`Check Eligibility for ${course}`}
                  contextCTA="Check Eligibility"
                  className="text-body-small font-medium text-brand-primary hover:text-brand-accent transition-colors cursor-pointer"
                >
                  Check Eligibility →
                </LeadCTAButton>
              </div>
            </div>
          ))}
        </div>

        {/* Course finder CTA */}
        <div className="mt-10 text-center">
          <p className="text-body-small text-content-secondary">
            Have a different course or interdisciplinary specialization in mind?
          </p>
          <div className="mt-3">
            <LeadCTAButton
              source={`city_custom_course_${city.slug}`}
              contextTitle={`Custom Course Search for ${city.name}`}
              contextCTA="Find My Course"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-2.5 text-btn font-medium text-neutral-800 shadow-xs hover:border-brand-primary hover:text-brand-primary transition-all cursor-pointer"
            >
              <span>Get Free Personalized Course Shortlist</span>
              <ArrowRight size={15} />
            </LeadCTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CityCourses;
