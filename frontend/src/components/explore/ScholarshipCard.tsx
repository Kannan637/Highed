import React from "react";
import Image from "next/image";
import {
  Award,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
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
    <div
      className="
        group flex h-full flex-col overflow-hidden
        rounded-2xl
        border border-border
        bg-card
        shadow-xs
        transition-all duration-300
        hover:border-primary/40
        hover:shadow-lg
      "
    >
      {/* ================= IMAGE ================= */}
      <div className="relative p-2.5">
        <div className="relative h-[190px] overflow-hidden rounded-xl bg-neutral-100">
          <Image
            src={scholarship.image || "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"}
            alt={scholarship.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="
              object-cover
              transition-transform duration-500
              group-hover:scale-[1.03]
            "
          />

          {/* Scholarship Amount */}
          <div
            className="
              absolute left-3 top-3
              inline-flex items-center gap-1.5
              rounded-full
              bg-white/95
              px-3 py-1.5
              text-[11px]
              font-bold
              text-brand-primary
              shadow-xs
              backdrop-blur-sm
            "
          >
            <Award
              size={13}
              className="shrink-0"
            />
            <span>{scholarship.amount}</span>
          </div>

          {/* Scholarship Type */}
          <span
            className="
              absolute right-3 top-3
              rounded-full
              bg-white/95
              px-3 py-1.5
              text-[11px]
              font-medium
              text-neutral-700
              shadow-xs
              backdrop-blur-sm
            "
          >
            {scholarship.type}
          </span>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex flex-1 flex-col px-5 pb-5">
        {/* Scholarship Name */}
        <div className="mt-1">
          <h3 className="card-title text-foreground line-clamp-2 transition-colors group-hover:text-brand-primary">
            {scholarship.name}
          </h3>

          {/* Country */}
          {countryName && (
            <p
              className="
                mt-2
                text-[13px]
                font-medium
                text-muted-foreground
              "
            >
              Available in {countryName}
            </p>
          )}
        </div>

        {/* ================= DETAILS ================= */}
        <div
          className="
            mt-4
            rounded-xl
            border border-border/80
            bg-neutral-50/70
            p-3.5
          "
        >
          {/* Eligibility */}
          <div className="flex items-start gap-2.5">
            <CheckCircle2
              size={16}
              className="
                mt-0.5
                shrink-0
                text-emerald-600
              "
            />

            <div className="min-w-0">
              <div
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-muted-foreground
                "
              >
                Eligibility
              </div>

              <p className="mt-0.5 text-caption font-medium text-content-primary line-clamp-2">
                {scholarship.eligibility}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-2.5 border-t border-border" />

          {/* Coverage */}
          <div className="flex items-start gap-2.5">
            <ShieldCheck
              size={16}
              className="
                mt-0.5
                shrink-0
                text-brand-primary
              "
            />

            <div className="min-w-0">
              <div className="text-caption font-medium uppercase tracking-wider text-content-secondary">
                Coverage
              </div>

              <p className="mt-0.5 text-caption font-medium text-content-primary line-clamp-2">
                {scholarship.coverage}
              </p>
            </div>
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="mt-auto pt-5">
          <div className="border-t border-border pt-4">
            <LeadCTAButton
              source={`explore_scholarship_${scholarship.id}`}
              variant="outline"
              size="default"
              className="
                flex w-full items-center justify-between
                h-12 px-4
                rounded-full
                text-sm
                font-semibold
                text-brand-primary
                border border-black/10
                hover:border-brand-primary
                hover:bg-brand-primary/5
                transition-colors
              "
            >
              <span className="flex items-center gap-2">
                <Award size={16} />
                Check Scholarship Eligibility
              </span>

              <ArrowRight size={15} />
            </LeadCTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCard;