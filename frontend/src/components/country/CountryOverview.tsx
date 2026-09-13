import React from "react";
import { Check, Sparkles, Briefcase } from "lucide-react";
import { Country } from "@/types/country";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

interface CountryOverviewProps {
  country: Country;
}

export const CountryOverview: React.FC<CountryOverviewProps> = ({ country }) => {
  return (
    <section className="bg-[#FAFAFC] py-20">
      <Container size="lg">
        <SectionHeading
          badge="Destination Profile"
          title={`Why Choose ${country.name} for Your Higher Studies?`}
          subtitle={`Discover why over 70,000 international students choose ${country.name} every year for recognized global qualifications.`}
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          {/* Main Description */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xs sm:p-10">
              <h3 className="font-hedvig text-2xl font-bold text-[#121314] sm:text-3xl">
                An International Education Hub Built for the Future
              </h3>
              <p className="mt-4 font-dmsans text-base leading-relaxed text-gray-600 sm:text-lg">
                {country.description}
              </p>

              <div className="mt-8 border-t border-gray-100 pt-6">
                <h4 className="font-dmsans text-sm font-semibold uppercase tracking-wider text-[#253A7B]">
                  Medium of Instruction & Daily Life
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {country.language.map((lang) => (
                    <span
                      key={lang}
                      className="rounded-xl bg-[#EEF1FA] px-3.5 py-1.5 font-dmsans text-sm font-medium text-[#253A7B]"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Checklist */}
          <div className="space-y-4 lg:col-span-5">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xs">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EBF5EE] text-[#1E7B47]">
                  <Check className="h-6 w-6" strokeWidth={2.5} aria-hidden="true" />
                </span>
                <div>
                  <h4 className="font-dmsans text-lg font-bold text-[#121314]">
                    Official Degrees
                  </h4>
                  <p className="font-dmsans text-sm text-gray-500">
                    Dual accredited degrees recognized in UK, US, Australia & globally.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xs">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EEF1FA] text-[#253A7B]">
                  <Sparkles className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h4 className="font-dmsans text-lg font-bold text-[#121314]">
                    Affordable Tuition
                  </h4>
                  <p className="font-dmsans text-sm text-gray-500">
                    Save up to 40% compared to Western home campus tuition fees.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xs">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FDF0F3] text-[#E93F61]">
                  <Briefcase className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h4 className="font-dmsans text-lg font-bold text-[#121314]">
                    High Employability
                  </h4>
                  <p className="font-dmsans text-sm text-gray-500">
                    Access regional HQs of Fortune 500 tech, finance & logistics giants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CountryOverview;
