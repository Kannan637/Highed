import React from "react";
import { Country } from "@/types/country";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { GraduationCap, Wallet, Home, Utensils, Sparkles, Clock } from "lucide-react";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

interface CountryCostProps {
  country: Country;
}

export const CountryCost: React.FC<CountryCostProps> = ({ country }) => {
  const { costDetails, visaDetails } = country;

  return (
    <section className="bg-white py-20">
      <Container size="lg">
        <SectionHeading
          badge="Financial Planning"
          title={`Cost of Studying & Living in ${country.name}`}
          subtitle={`Transparent, verified estimates to help you budget your international journey with zero surprises.`}
        />

        <div className="grid grid-cols-4 lg:grid-cols-12 gap-8">
          {/* Left Block: Academic Investment (Tuition) */}
          <div className="col-span-4 lg:col-span-6 flex flex-col justify-between rounded-3xl border border-neutral-200/90 bg-gradient-to-b from-[#253A7B]/[0.03] to-white p-7 md:p-9 shadow-sm">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF1FA] text-[#253A7B]">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-neutral-900">
                    Annual Tuition Fees
                  </h3>
                  <p className="text-xs text-neutral-500">Degree & program ranges</p>
                </div>
              </div>

              {/* Big Fee Display */}
              <div className="rounded-2xl bg-white border border-neutral-200/80 p-6 shadow-xs">
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Estimated Range
                </div>
                <div className="mt-2 font-heading text-3xl md:text-4xl font-bold text-[#253A7B]">
                  {costDetails.tuitionMin}
                  <span className="text-lg md:text-xl font-normal text-neutral-500">
                    {" "}to {costDetails.tuitionMax}
                  </span>
                </div>
                <div className="mt-1 text-xs text-neutral-500">
                  Per academic year (varies by university, tier, and discipline)
                </div>
              </div>

              {/* Tuition Offsets Note */}
              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 p-4">
                <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs md:text-sm text-emerald-900 leading-relaxed">
                  <span className="font-semibold">Scholarships Available: </span>
                  International applicants can offset tuition by 20% to 100% through merit awards, early-bird fee discounts, and departmental grants.
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
              <a
                href="#scholarships"
                className="text-xs sm:text-sm font-semibold text-[#253A7B] hover:text-[#E93F61] transition-colors"
              >
                View Eligible Scholarships →
              </a>
              <LeadCTAButton
                source={`country_cost_calc_${country.slug}`}
                className="text-xs sm:text-sm font-semibold text-[#E93F61] hover:underline cursor-pointer"
              >
                Calculate My Budget
              </LeadCTAButton>
            </div>
          </div>

          {/* Right Block: Cost of Living Breakdown */}
          <div className="col-span-4 lg:col-span-6 flex flex-col justify-between rounded-3xl border border-neutral-200/90 bg-gradient-to-b from-rose-50/30 to-white p-7 md:p-9 shadow-sm">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FDF0F3] text-[#E93F61]">
                  <Wallet size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-neutral-900">
                    Living & Lifestyle Costs
                  </h3>
                  <p className="text-xs text-neutral-500">Estimated monthly expenses</p>
                </div>
              </div>

              {/* Monthly Overview Card */}
              <div className="rounded-2xl bg-white border border-neutral-200/80 p-6 shadow-xs mb-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Total Monthly Average
                </div>
                <div className="mt-2 font-heading text-3xl md:text-4xl font-bold text-neutral-900">
                  {costDetails.livingCostMonthly}
                  <span className="text-sm md:text-base font-normal text-neutral-500"> / month</span>
                </div>
                <div className="mt-1 text-xs text-neutral-500">
                  Covers single-student accommodation, groceries, local commute, and utilities
                </div>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="rounded-xl border border-neutral-200/70 bg-white p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-neutral-600 mb-1">
                    <Home className="w-4 h-4 text-indigo-600" />
                    <span>Accommodation</span>
                  </div>
                  <div className="font-heading text-lg font-bold text-neutral-900">
                    {costDetails.accommodationMonthly}
                  </div>
                  <div className="text-[11px] text-neutral-400">Dorms or shared flat</div>
                </div>

                <div className="rounded-xl border border-neutral-200/70 bg-white p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-neutral-600 mb-1">
                    <Utensils className="w-4 h-4 text-amber-600" />
                    <span>Food & Commute</span>
                  </div>
                  <div className="font-heading text-lg font-bold text-neutral-900">
                    {costDetails.foodAndTransportMonthly}
                  </div>
                  <div className="text-[11px] text-neutral-400">Groceries & student passes</div>
                </div>
              </div>

              {/* Work permit callout */}
              {visaDetails?.workPermitHours && (
                <div className="mt-4 flex items-center gap-2.5 rounded-xl bg-neutral-100/80 p-3 text-xs text-neutral-600">
                  <Clock className="w-4 h-4 text-[#253A7B] shrink-0" />
                  <span>
                    <strong className="text-neutral-900">Part-Time Work: </strong>
                    {visaDetails.workPermitHours}
                  </span>
                </div>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs text-neutral-500">
                Official figures indexed for 2026 intake
              </span>
              <LeadCTAButton
                source={`country_cost_counsel_${country.slug}`}
                className="text-xs sm:text-sm font-semibold text-[#253A7B] hover:text-[#E93F61] transition-colors cursor-pointer"
              >
                Plan Living Budget →
              </LeadCTAButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CountryCost;
