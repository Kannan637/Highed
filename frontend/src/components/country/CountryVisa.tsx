import React from "react";
import { CheckCircle2, Clock, Briefcase, FileText } from "lucide-react";
import { Country } from "@/types/country";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

interface CountryVisaProps {
  country: Country;
}

export const CountryVisa: React.FC<CountryVisaProps> = ({ country }) => {
  const { visaDetails } = country;

  return (
    <section className="bg-[#F8F9FE] py-12 sm:py-16 md:py-20">
      <Container size="lg">
        <SectionHeading
          badge="Immigration & Visas"
          title={`Student Visa Guide for ${country.name}`}
          subtitle={`A streamlined, university-sponsored process with high approval rates and rapid processing.`}
        />

        {/* Visa Highlights */}
        <div className="grid grid-cols-4 gap-4 sm:gap-5 lg:grid-cols-12 lg:gap-6 mb-8 sm:mb-12">
          <div className="col-span-4 sm:col-span-2 lg:col-span-4 rounded-2xl border border-border-default bg-white p-4 sm:p-6 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-icon-bg-primary text-brand-primary">
                <Clock size={20} />
              </div>
              <div>
                <div className="text-caption font-medium text-content-secondary">Processing Time</div>
                <div className="text-body font-medium text-content-primary">
                  {visaDetails.processingTime}
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4 sm:col-span-2 lg:col-span-4 rounded-2xl border border-border-default bg-white p-4 sm:p-6 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-icon-bg-success text-[#1E7B47]">
                <Briefcase size={20} />
              </div>
              <div>
                <div className="text-caption font-medium text-content-secondary">Part-Time Work</div>
                <div className="text-body font-medium text-content-primary">
                  {visaDetails.workPermitHours.split(";")[0]}
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4 sm:col-span-4 lg:col-span-4 rounded-2xl border border-border-default bg-white p-4 sm:p-6 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-icon-bg-accent text-brand-accent">
                <FileText size={20} />
              </div>
              <div>
                <div className="text-caption font-medium text-content-secondary">Post-Study Visa</div>
                <div className="text-body font-medium text-content-primary">
                  Green Visa / Job Seeker
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="rounded-2xl sm:rounded-3xl border border-border-default bg-white p-5 sm:p-8 md:p-10 shadow-xs">
          <h3 className="font-heading font-normal text-h4 text-content-primary mb-8">
            5 Simple Steps to Secure Your {country.name} Student Visa
          </h3>

          <div className="space-y-6">
            {visaDetails.steps.map((step) => (
              <div key={step.stepNumber} className="flex gap-4 sm:gap-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-primary text-body-small font-medium text-white">
                  {step.stepNumber}
                </div>
                <div className="pt-1">
                  <h4 className="font-heading font-normal text-h5 text-content-primary">
                    {step.title}
                  </h4>
                  <p className="mt-1 text-body-small leading-relaxed text-content-secondary">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-icon-bg-primary p-5">
            <div className="flex items-center gap-2.5 text-body-small font-medium text-brand-primary">
              <CheckCircle2 size={18} />
              <span>HighEd 100% Visa Filing Assistance Included</span>
            </div>
            <p className="mt-1 text-caption font-medium text-content-secondary">
              Our specialized immigration counselors review your financial documentation, medical scheduling, and university submissions with zero service fees.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CountryVisa;
