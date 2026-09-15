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
              className="relative flex flex-col justify-between rounded-3xl border border-neutral-200/80 bg-neutral-50/40 p-8 shadow-xs transition-all duration-300 hover:border-[#253A7B]/40 hover:bg-white hover:shadow-xl"
            >
              <div>
                {/* 5-Star Rating & Quote icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF1FA] text-[#253A7B]">
                    <Quote size={14} />
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="font-body text-sm leading-relaxed text-neutral-700 italic">
                  &quot;{item.quote}&quot;
                </p>
              </div>

              {/* Student info */}
              <div className="mt-8 pt-5 border-t border-neutral-200/60">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#253A7B] font-heading text-base font-bold text-white shadow-xs">
                    {item.studentName.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-heading text-base font-bold text-neutral-900 truncate">
                      {item.studentName}
                    </h4>
                    <div className="flex items-center gap-1 font-body text-xs text-neutral-500 truncate">
                      <MapPin size={11} className="text-[#E93F61]" />
                      <span className="truncate">{item.city}</span>
                    </div>
                  </div>
                </div>

                {/* University Admit Badge */}
                <div className="mt-4 rounded-xl bg-white border border-neutral-200/80 p-3">
                  <div className="flex items-center gap-2 font-body text-xs font-bold text-[#253A7B]">
                    <GraduationCap size={14} className="text-[#E93F61]" />
                    <span className="truncate">{item.destination}</span>
                  </div>
                  <p className="font-body text-[11px] text-neutral-500 mt-0.5 truncate">
                    {item.course}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join our success stories CTA */}
        <div className="mt-12 text-center">
          <p className="font-body text-sm text-neutral-600">
            Want to be our next success story from {city.name}?
          </p>
          <div className="mt-3">
            <LeadCTAButton
              source={`city_stories_cta_${city.slug}`}
              contextTitle={`Be the Next Success Story from ${city.name}`}
              contextCTA="Start My Application"
              className="inline-flex items-center gap-2 rounded-full bg-[#E93F61] px-7 py-3 font-body text-sm font-semibold text-white shadow-md hover:bg-[#d93657] transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              <span>Begin Your Journey Today</span>
              <span>→</span>
            </LeadCTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CityTestimonials;
