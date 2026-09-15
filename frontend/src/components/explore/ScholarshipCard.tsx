import React from "react";
import { Award, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { Scholarship } from "@/types/explore";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

interface ScholarshipCardProps {
  scholarship: Scholarship;
  countryName?: string;
}

export const ScholarshipCard: React.FC<ScholarshipCardProps> = ({
  scholarship,
  countryName,
}) => {
  return (
    <div className="group flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:border-[#253A7B]/40 hover:shadow-xl hover:-translate-y-0.5">
      <div>
        {/* Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200/70 px-3 py-1 text-xs font-bold text-amber-800">
            <Award size={13} className="text-amber-600 shrink-0" />
            <span>{scholarship.amount}</span>
          </div>

          <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600">
            {scholarship.type}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl font-bold leading-snug text-neutral-900 group-hover:text-[#253A7B] transition-colors">
          {scholarship.name}
        </h3>

        {countryName && (
          <p className="mt-1 text-xs text-neutral-400">
            Available in {countryName}
          </p>
        )}

        {/* Details list */}
        <div className="mt-5 space-y-3">
          <div className="flex items-start gap-2 text-xs sm:text-sm text-neutral-600">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-600" />
            <div>
              <strong className="font-semibold text-neutral-900">Eligibility: </strong>
              <span>{scholarship.eligibility}</span>
            </div>
          </div>

          <div className="flex items-start gap-2 text-xs sm:text-sm text-neutral-600">
            <ShieldCheck size={16} className="mt-0.5 shrink-0 text-[#253A7B]" />
            <div>
              <strong className="font-semibold text-neutral-900">Coverage: </strong>
              <span>{scholarship.coverage}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-6 pt-4 border-t border-neutral-100">
        <LeadCTAButton
          source={`explore_scholarship_${scholarship.id}`}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#253A7B] py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-[#1c2c5c] transition-all cursor-pointer active:scale-95"
        >
          <Award size={16} />
          <span>Check Scholarship Eligibility</span>
          <ArrowRight size={14} />
        </LeadCTAButton>
      </div>
    </div>
  );
};

export default ScholarshipCard;
