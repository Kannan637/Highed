import React from "react";
import { Star, Quote, GraduationCap, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { CityData } from "@/types/city";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

interface CityTestimonialsProps {
  city: CityData;
}

export const CityTestimonials: React.FC<CityTestimonialsProps> = ({ city }) => {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 tracking-tight-5 [letter-spacing:var(--tracking-tight-5)] [&_*]:[letter-spacing:var(--tracking-tight-5)]">
      <Container size="lg">
        <SectionHeading
          badge="Real Success Stories"
          title={`Success Stories from ${city.name}`}
          accentText="Success Stories"
          subtitle={`Discover how ambitious graduates and students from ${city.name} secured admits to top world-ranked universities with HighEd.`}
          align="center"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {city.testimonials.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-3xl border border-black/[0.06] bg-white p-7 sm:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-black/[0.12] hover:shadow-[0_16px_32px_rgba(0,0,0,0.07)]"
            >
              <div>
                {/* 5-Star Rating & Quote icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-icon-bg-primary text-brand-primary">
                    <Quote size={14} />
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-body-small font-medium leading-relaxed text-content-primary italic">
                  &quot;{item.quote}&quot;
                </p>
              </div>

              {/* Student info */}
              <div className="mt-8 pt-5 border-t border-border-light">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-primary to-indigo-900 text-white font-semibold text-sm shadow-xs">
                    {item.studentName.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <h4 className="card-title text-content-primary truncate">
                      {item.studentName}
                    </h4>
                    <div className="flex items-center gap-1 text-caption font-medium text-neutral-500 truncate">
                      <MapPin size={11} className="text-brand-accent" />
                      <span className="truncate">{item.city}</span>
                    </div>
                  </div>
                </div>

                {/* University Admit Badge */}
                <div className="mt-4 rounded-xl bg-white border border-neutral-200/80 p-3">
                  <div className="flex items-center gap-2 text-body-small font-medium text-brand-primary">
                    <GraduationCap size={14} className="text-brand-accent" />
                    <span className="truncate">{item.destination}</span>
                  </div>
                  <p className="text-caption font-medium text-neutral-500 mt-0.5 truncate">
                    {item.course}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join our success stories CTA */}
        <div className="mt-12 text-center">
          <p className="text-body-small text-content-secondary">
            Want to be our next success story from {city.name}?
          </p>
          <div className="mt-3 flex justify-center">
            <LeadCTAButton
              source={`city_stories_cta_${city.slug}`}
              contextTitle={`Be the Next Success Story from ${city.name}`}
              contextCTA="Start My Application"
              variant="accent"
              size="default"
              className="w-fit max-w-[280px] sm:w-auto sm:max-w-none"
            >
              Begin Your Journey Today
            </LeadCTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CityTestimonials;
