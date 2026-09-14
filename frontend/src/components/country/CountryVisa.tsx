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
    <section className="bg-[#F8F9FE] py-20">
      <Container size="lg">
        <SectionHeading
          badge="Immigration & Visas"
          title={`Student Visa Guide for ${country.name}`}
          subtitle={`A streamlined, university-sponsored process with high approval rates and rapid processing.`}
        />

        {/* Visa Highlights */}
        <div className="grid grid-cols-4 gap-5 lg:grid-cols-12 lg:gap-6 mb-12">
          <div className="col-span-4 sm:col-span-2 lg:col-span-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF1FA] text-[#253A7B]">
                <Clock size={20} />
              </div>
              <div>
                <div className="font-dmsans text-xs text-gray-500">Processing Time</div>
                <div className="font-dmsans text-base font-bold text-[#121314]">
                  {visaDetails.processingTime}
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4 sm:col-span-2 lg:col-span-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EBF5EE] text-[#1E7B47]">
                <Briefcase size={20} />
              </div>
              <div>
                <div className="font-dmsans text-xs text-gray-500">Part-Time Work</div>
                <div className="font-dmsans text-base font-bold text-[#121314]">
                  {visaDetails.workPermitHours.split(";")[0]}
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4 sm:col-span-4 lg:col-span-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FDF0F3] text-[#E93F61]">
                <FileText size={20} />
              </div>
              <div>
                <div className="font-dmsans text-xs text-gray-500">Post-Study Visa</div>
                <div className="font-dmsans text-base font-bold text-[#121314]">
                  Green Visa / Job Seeker
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xs sm:p-10">
          <h3 className="font-dmsans text-xl font-bold text-[#121314] mb-8">
            5 Simple Steps to Secure Your {country.name} Student Visa
          </h3>

          <div className="space-y-6">
            {visaDetails.steps.map((step) => (
              <div key={step.stepNumber} className="flex gap-4 sm:gap-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#253A7B] font-dmsans text-sm font-bold text-white">
                  {step.stepNumber}
                </div>
                <div className="pt-1">
                  <h4 className="font-dmsans text-lg font-bold text-[#121314]">
                    {step.title}
                  </h4>
                  <p className="mt-1 font-dmsans text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-[#EEF1FA] p-5">
            <div className="flex items-center gap-2.5 text-sm font-semibold text-[#253A7B]">
              <CheckCircle2 size={18} />
              <span>HighEd 100% Visa Filing Assistance Included</span>
            </div>
            <p className="mt-1 text-xs text-gray-600">
              Our specialized immigration counselors review your financial documentation, medical scheduling, and university submissions with zero service fees.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CountryVisa;
