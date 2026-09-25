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
              className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-md"
            >
              <div>
                <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-primary/10 text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white">
                  <BookOpen size={18} />
                </div>
                <h3 className="card-title text-foreground group-hover:text-brand-primary transition-colors">
                  {course}
                </h3>
              </div>

              <div className="mt-5 pt-3 border-t border-border flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  <Sparkles size={11} />
                  <span>High Demand</span>
                </span>

                <LeadCTAButton
                  source={`city_course_${city.slug}_${idx}`}
                  contextTitle={`Check Eligibility for ${course}`}
                  contextCTA="Check Eligibility"
                  className="min-h-[44px] inline-flex items-center text-xs sm:text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors cursor-pointer"
                >
                  Eligibility →
                </LeadCTAButton>
              </div>
            </div>
          ))}
        </div>

        {/* Course finder CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Have a different course or interdisciplinary specialization in mind?
          </p>
          <div className="mt-4 flex justify-center">
            <LeadCTAButton
              source={`city_custom_course_${city.slug}`}
              contextTitle={`Custom Course Search for ${city.name}`}
              contextCTA="Find My Course"
              variant="outline"
              size="lg"
              className="h-12 px-6 rounded-full font-semibold text-foreground border border-black/10 hover:border-brand-primary hover:text-brand-primary transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Get Free Personalized Course Shortlist</span>
              <ArrowRight size={16} />
            </LeadCTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CityCourses;
