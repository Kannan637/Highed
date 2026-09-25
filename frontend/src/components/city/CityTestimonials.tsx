import React from "react";
import { Star, Quote, GraduationCap, MapPin, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { CityData } from "@/types/city";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

interface CityTestimonialsProps {
  city: CityData;
}

export const CityTestimonials: React.FC<CityTestimonialsProps> = ({ city }) => {
  return (
    <section className="bg-white py-20">
      <Container size="lg">
        <SectionHeading
          badge="Real Success Stories"
          title={`Success Stories from ${city.name}`}
          subtitle={`Discover how ambitious graduates and students from ${city.name} secured admits to top world-ranked universities with HighEd.`}
          align="center"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {city.testimonials.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-3xl border border-neutral-200/80 bg-neutral-50/40 p-8 shadow-xs transition-all duration-300 hover:border-brand-primary/40 hover:bg-white hover:shadow-xl"
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
              <div className="mt-8 pt-5 border-t border-neutral-200/60">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-primary font-heading font-normal text-h5 text-white shadow-xs">
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
          <div className="mt-3">
            <LeadCTAButton
              source={`city_stories_cta_${city.slug}`}
              contextTitle={`Be the Next Success Story from ${city.name}`}
              contextCTA="Start My Application"
              variant="accent"
              size="default"
            >
              <span>Begin Your Journey Today</span>
              <ArrowRight size={16} />
            </LeadCTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CityTestimonials;
