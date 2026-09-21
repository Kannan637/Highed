import React from "react";
import { ArrowRight, Calendar, AlertCircle, Clock, CheckCircle } from "lucide-react";
import { Country } from "@/types/country";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

interface CountryIntakesProps {
  country: Country;
}

export const CountryIntakes: React.FC<CountryIntakesProps> = ({ country }) => {
  return (
    <section id="intakes" className="bg-white py-12 sm:py-16 md:py-20">
      <Container size="lg">
        <SectionHeading
          badge="Admission Calendar"
          title={`Upcoming Intakes in ${country.name}`}
          subtitle={`Plan your application timeline systematically to maximize scholarship funding and university housing.`}
        />

        {/* Timeline Grid */}
        <div className="relative mt-8 sm:mt-12">
          <div className="grid grid-cols-4 gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-8">
            {country.intakes.map((intake, idx) => {
              const isMajor = intake.type === "Major";
              return (
                <div
                  key={intake.season + idx}
                  className={`col-span-4 sm:col-span-2 lg:col-span-4 relative flex flex-col justify-between rounded-2xl border p-5 sm:p-7 transition-all duration-300 ${isMajor
                      ? "border-brand-primary bg-gradient-to-b from-[#253A7B]/[0.04] to-white shadow-lg ring-1 ring-[#253A7B]/10"
                      : "border-neutral-200/90 bg-neutral-50/50 hover:bg-white hover:shadow-md"
                    }`}
                >
                  {/* Step indicator header */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-caption font-medium ${isMajor
                            ? "bg-brand-primary text-white"
                            : "bg-neutral-200 text-neutral-700"
                          }`}
                      >
                        {isMajor && <CheckCircle size={12} />}
                        {intake.type} Intake
                      </span>
                      <div className="flex items-center gap-1 text-caption font-medium text-neutral-400">
                        <Calendar size={14} className="text-brand-primary" />
                        <span>Phase {idx + 1}</span>
                      </div>
                    </div>

                    <h3 className="font-heading font-normal text-h4 text-content-primary mt-2">
                      {intake.season}
                    </h3>

                    <div className="mt-5 space-y-3 rounded-xl bg-white/80 border border-neutral-200/60 p-4 text-body-small">
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-500 flex items-center gap-1.5">
                          <Clock size={13} />
                          Classes Start:
                        </span>
                        <strong className="text-neutral-900 font-medium">{intake.months}</strong>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
                        <span className="text-neutral-500">Apply Before:</span>
                        <strong className="text-brand-accent font-medium">{intake.deadline}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-neutral-100">
                    <LeadCTAButton
                      source={`country_intake_${country.slug}_${intake.season.replace(/\s+/g, "_")}`}
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-body-small font-medium transition-all cursor-pointer ${isMajor
                          ? "bg-brand-primary text-white hover:bg-[#1b2b5c] shadow-xs"
                          : "border border-neutral-300 text-neutral-800 hover:border-brand-primary hover:text-brand-primary bg-white"
                        }`}
                    >
                      <span>Apply for {intake.season.split(" ")[0]}</span>
                      <ArrowRight size={14} />
                    </LeadCTAButton>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pro Tip Banner */}
        <div className="mt-8 flex items-start gap-3 rounded-2xl bg-amber-50/80 border border-amber-200/80 p-5 text-body-small text-amber-900 shadow-xs">
          <AlertCircle size={20} className="text-amber-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="font-medium text-amber-950">HighEd Application Strategy: </strong>
            We recommend initiating university shortlisting at least 3 to 5 months prior to the intake. This secures optimal early-bird scholarship evaluations and gives ample cushion for CAS / I-20 / study permit visa processing.
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CountryIntakes;
