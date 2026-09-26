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
    <section className="bg-white py-16 sm:py-20 md:py-24 tracking-tight-5 [letter-spacing:var(--tracking-tight-5)] [&_*]:[letter-spacing:var(--tracking-tight-5)]">
      <Container size="lg">
        <SectionHeading
          badge="Destination Profile"
          title={`Why Choose ${country.name} for Your Higher Studies?`}
          subtitle={`Discover why over 70,000 international students choose ${country.name} every year for recognized global qualifications.`}
        />

        <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 lg:items-center">
          {/* Main Description */}
          <div className="col-span-1 lg:col-span-7">
            <div className="rounded-[24px] border border-border-default bg-surface-neutral p-8 shadow-sm sm:p-10 md:p-12 transition-shadow hover:shadow-md">
              <h3 className="card-title text-content-primary">
                An International Education Hub Built for the Future
              </h3>
              <p className="mt-5 text-content-secondary">
                {country.description}
              </p>

              <div className="mt-10 border-t border-border-default pt-8">
                <h4 className="text-caption font-medium uppercase tracking-widest text-content-secondary">
                  Medium of Instruction & Daily Life
                </h4>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {country.language.map((lang) => (
                    <span
                      key={lang}
                      className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-body-small font-medium text-content-primary shadow-sm ring-1 ring-inset ring-border"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Checklist */}
          <div className="col-span-1 space-y-4 lg:col-span-5">
            <div className="group rounded-[20px] border border-border-default bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-start gap-4 sm:gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F0FDF4] text-[#16A34A] shadow-sm">
                  <Check className="h-[22px] w-[22px]" strokeWidth={2.5} aria-hidden="true" />
                </span>
                <div>
                  <h4 className="card-title text-content-primary">
                    Official Degrees
                  </h4>
                  <p className="mt-1.5 text-body-small text-content-secondary">
                    Dual accredited degrees recognized in UK, US, Australia & globally.
                  </p>
                </div>
              </div>
            </div>

            <div className="group rounded-[20px] border border-border-default bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-start gap-4 sm:gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#3B82F6] shadow-sm">
                  <Sparkles className="h-[22px] w-[22px]" strokeWidth={2} aria-hidden="true" />
                </span>
                <div>
                  <h4 className="card-title text-content-primary">
                    Affordable Tuition
                  </h4>
                  <p className="mt-1.5 text-body-small text-content-secondary">
                    Save up to 40% compared to Western home campus tuition fees.
                  </p>
                </div>
              </div>
            </div>

            <div className="group rounded-[20px] border border-border-default bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-start gap-4 sm:gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FEF2F2] text-[#EF4444] shadow-sm">
                  <Briefcase className="h-[22px] w-[22px]" strokeWidth={2} aria-hidden="true" />
                </span>
                <div>
                  <h4 className="card-title text-content-primary">
                    High Employability
                  </h4>
                  <p className="mt-1.5 text-body-small text-content-secondary">
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
