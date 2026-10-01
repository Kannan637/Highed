import React from "react";
import Image from "next/image";
import { GraduationCap, MapPin, Trophy, ArrowRight } from "lucide-react";
import { University } from "@/types/explore";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

interface UniversityCardProps {
  university: University;
  countryName?: string;
}

export const UniversityCard: React.FC<UniversityCardProps> = ({
  university,
  countryName,
}) => {
  return (
    <div
      className="
        group flex h-full flex-col overflow-hidden
        rounded-3xl
        border border-black/[0.06]
        bg-white
        shadow-[0_2px_8px_rgba(0,0,0,0.03)]
        transition-all duration-300 ease-out
        hover:-translate-y-1.5
        hover:border-black/[0.12]
        hover:shadow-[0_16px_32px_rgba(0,0,0,0.07)]
      "
    >
      {/* ================= IMAGE ================= */}
      <div className="relative p-3">
        <div className="relative h-[200px] overflow-hidden rounded-2xl bg-neutral-100">
          <Image
            src={university.image || "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop"}
            alt={university.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="
              object-cover
              transition-transform duration-500
              group-hover:scale-[1.03]
            "
          />

          {/* Ranking - Inside Image */}
          {university.ranking && (
            <div
              className="
                absolute left-3 top-3
                inline-flex items-center gap-1.5
                rounded-full
                bg-white/95
                px-3 py-1.5
                text-[11px]
                font-medium
                text-brand-primary
                shadow-xs
                backdrop-blur-sm
              "
            >
              <Trophy size={13} className="shrink-0" />
              <span>{university.ranking}</span>
            </div>
          )}
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex flex-1 flex-col px-5 pb-5">
        {/* University Name */}
        <div className="mt-1">
          <h3 className="card-title text-foreground line-clamp-2 transition-colors group-hover:text-brand-primary">
            {university.name}
          </h3>

          {/* Location */}
          <div
            className="
              mt-2
              flex items-center gap-1.5
              text-[13px]
              font-medium
              text-muted-foreground
            "
          >
            <MapPin
              size={14}
              className="shrink-0 text-brand-accent"
            />

            <span className="truncate">
              {university.location}
              {countryName ? `, ${countryName}` : ""}
            </span>
          </div>
        </div>

        {/* ================= FEE ================= */}
        <div className="mt-4">
          <div
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-wider
              text-muted-foreground
            "
          >
            Tuition Range
          </div>

          <div
            className="
              mt-0.5
              text-[15px]
              font-bold
              text-brand-primary
            "
          >
            {university.tuitionRange}
          </div>
        </div>

        {/* ================= COURSES ================= */}
        {university.popularPrograms &&
          university.popularPrograms.length > 0 && (
            <div className="mt-4">
              <div
                className="
                  mb-2
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-muted-foreground
                "
              >
                Popular Programs
              </div>

              <div className="flex flex-wrap gap-1.5">
                {university.popularPrograms.slice(0, 3).map((program) => (
                  <span
                    key={program}
                    className="
                      rounded-full
                      border border-black/[0.06]
                      bg-neutral-50
                      px-3 py-1
                      text-caption
                      font-medium
                      text-content-secondary
                    "
                  >
                    {program}
                  </span>
                ))}

                {university.popularPrograms.length > 3 && (
                  <span
                    className="
                      rounded-full
                      bg-neutral-100
                      px-2.5 py-1
                      text-caption
                      font-medium
                      text-content-secondary
                    "
                  >
                    +{university.popularPrograms.length - 3}
                  </span>
                )}
              </div>
            </div>
          )}

        {/* ================= CTA ================= */}
        <div className="mt-auto pt-5">
          <div className="border-t border-border-light pt-4">
            <LeadCTAButton
              source={`explore_uni_${university.id}`}
              variant="outline"
              size="default"
              className="
                flex w-full items-center justify-between
                h-12 px-5
                rounded-full
                text-sm
                font-semibold
                text-brand-primary
                border border-black/10
                hover:border-brand-accent
                hover:text-brand-accent
                hover:bg-brand-primary/5
                transition-all duration-200
              "
            >
              <span className="flex items-center gap-2">
                <GraduationCap size={16} />
                Apply With Guidance
              </span>

              <ArrowRight size={15} />
            </LeadCTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityCard;