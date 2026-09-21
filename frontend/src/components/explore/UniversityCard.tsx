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
        rounded-[24px]
        border border-neutral-200/90
        bg-white
        shadow-sm
        transition-all duration-300
        hover:border-brand-primary/30
        hover:shadow-xl
      "
    >
      {/* ================= IMAGE ================= */}
      <div className="relative p-2.5">
        <div className="relative h-[190px] overflow-hidden rounded-[18px] bg-neutral-100">
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
                shadow-sm
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
          <h3
            className="
              font-['DM_Sans']
              text-[18px]
              font-bold
              leading-[1.25]
              tracking-[-0.02em]
              text-content-primary
              line-clamp-2
              transition-colors
              group-hover:text-brand-primary
            "
          >
            {university.name}
          </h3>

          {/* Location */}
          <div
            className="
              mt-2
              flex items-center gap-1.5
              font-['DM_Sans']
              text-[12px]
              font-medium
              text-neutral-500
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
              font-['DM_Sans']
              text-[10px]
              font-medium
              uppercase
              tracking-[0.08em]
              text-neutral-400
            "
          >
            Tuition Range
          </div>

          <div
            className="
              mt-0.5
              font-['DM_Sans']
              text-[15px]
              font-semibold
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
                  font-['DM_Sans']
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.08em]
                  text-neutral-400
                "
              >
                Courses
              </div>

              <div className="flex flex-wrap gap-1.5">
                {university.popularPrograms.slice(0, 3).map((program) => (
                  <span
                    key={program}
                    className="
                      rounded-[7px]
                      border border-neutral-200
                      bg-neutral-50
                      px-2.5 py-1
                      font-['DM_Sans']
                      text-[11px]
                      font-medium
                      leading-none
                      text-neutral-700
                    "
                  >
                    {program}
                  </span>
                ))}

                {university.popularPrograms.length > 3 && (
                  <span
                    className="
                      rounded-[7px]
                      bg-neutral-100
                      px-2 py-1
                      font-['DM_Sans']
                      text-[11px]
                      font-medium
                      leading-none
                      text-neutral-600
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
          <div className="border-t border-neutral-200/80 pt-4">
            <LeadCTAButton
              source={`explore_uni_${university.id}`}
              variant="ghost"
              size="sm"
              className="
                flex w-full items-center justify-between
                rounded-[10px]
                !px-0
                font-['DM_Sans']
                text-[13px]
                font-semibold
                text-brand-primary
                transition-colors
                hover:text-brand-accent
              "
            >
              <span className="flex items-center gap-1.5">
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