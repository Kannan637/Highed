import React from "react";
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
    <div className="group flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:border-[#253A7B]/40 hover:shadow-xl hover:-translate-y-0.5">
      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          {university.ranking ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EEF1FA] px-3 py-1 text-xs font-semibold text-[#253A7B]">
              <Trophy size={13} className="shrink-0" />
              <span>{university.ranking}</span>
            </span>
          ) : (
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              Accredited
            </span>
          )}

          <span className="inline-flex items-center text-[11px] font-medium text-neutral-400">
            University
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl font-bold leading-snug text-neutral-900 group-hover:text-[#253A7B] transition-colors">
          {university.name}
        </h3>

        {/* Location */}
        <div className="mt-2 flex items-center gap-1.5 text-xs text-neutral-500">
          <MapPin size={14} className="text-[#E93F61] shrink-0" />
          <span>{university.location}{countryName ? `, ${countryName}` : ""}</span>
        </div>

        {/* Tuition Info */}
        <div className="mt-4 rounded-xl bg-neutral-50 border border-neutral-200/70 p-3">
          <div className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
            Tuition Range
          </div>
          <div className="mt-0.5 text-sm font-bold text-[#253A7B]">
            {university.tuitionRange}
          </div>
        </div>

        {/* Popular Programs */}
        {university.popularPrograms && university.popularPrograms.length > 0 && (
          <div className="mt-4">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
              Popular Programs
            </div>
            <div className="flex flex-wrap gap-1.5">
              {university.popularPrograms.map((prog) => (
                <span
                  key={prog}
                  className="rounded-md border border-neutral-200 bg-white px-2 py-0.5 text-[11px] font-medium text-neutral-700"
                >
                  {prog}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="mt-6 pt-4 border-t border-neutral-100">
        <LeadCTAButton
          source={`explore_uni_${university.id}`}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#253A7B] py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-[#1c2c5c] transition-all cursor-pointer active:scale-95"
        >
          <GraduationCap size={16} />
          <span>Check Admission Eligibility</span>
          <ArrowRight size={14} />
        </LeadCTAButton>
      </div>
    </div>
  );
};

export default UniversityCard;
