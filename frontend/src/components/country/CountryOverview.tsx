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
          accentText={country.name}
          subtitle={`Discover why over 70,000 international students choose ${country.name} every year for recognized global qualifications.`}
        />

        <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 lg:items-center">
          {/* Main Description */}
          <div className="col-span-1 lg:col-span-7">
            <div className="rounded-3xl border border-black/[0.06] bg-white p-8 sm:p-10 md:p-12 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
              <h3 className="card-title text-content-primary">
                An International Education Hub Built for the Future
              </h3>
              <p className="mt-5 text-content-secondary leading-relaxed">
                {country.description}
              </p>

              <div className="mt-10 border-t border-border-light pt-8">
                <h4 className="text-caption font-semibold uppercase tracking-wider text-content-secondary">
                  Medium of Instruction & Daily Life
                </h4>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {country.language.map((lang) => (
                    <span
                      key={lang}
                      className="inline-flex items-center rounded-full bg-neutral-50 px-4 py-1.5 text-body-small font-medium text-content-primary border border-black/[0.06] shadow-2xs"
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
            <div className="group rounded-3xl border border-black/[0.06] bg-white p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-black/[0.12] hover:shadow-[0_16px_32px_rgba(0,0,0,0.07)]">
              <div className="flex items-start gap-4 sm:gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-icon-bg-success text-feedback-success shadow-2xs">
                  <Check className="h-[22px] w-[22px]" strokeWidth={2.5} aria-hidden="true" />
                </span>
                <div>
                  <h4 className="card-title text-content-primary">
                    Official Degrees
                  </h4>
                  <p className="mt-1.5 text-body-small text-content-secondary leading-relaxed">
                    Dual accredited degrees recognized in UK, US, Australia & globally.
                  </p>
                </div>
              </div>
            </div>

            <div className="group rounded-3xl border border-black/[0.06] bg-white p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-black/[0.12] hover:shadow-[0_16px_32px_rgba(0,0,0,0.07)]">
              <div className="flex items-start gap-4 sm:gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-icon-bg-primary text-brand-primary shadow-2xs">
                  <Sparkles className="h-[22px] w-[22px]" strokeWidth={2} aria-hidden="true" />
                </span>
                <div>
                  <h4 className="card-title text-content-primary">
                    Affordable Tuition
                  </h4>
                  <p className="mt-1.5 text-body-small text-content-secondary leading-relaxed">
                    Save up to 40% compared to Western home campus tuition fees.
                  </p>
                </div>
              </div>
            </div>

            <div className="group rounded-3xl border border-black/[0.06] bg-white p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-black/[0.12] hover:shadow-[0_16px_32px_rgba(0,0,0,0.07)]">
              <div className="flex items-start gap-4 sm:gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-icon-bg-accent text-brand-accent shadow-2xs">
                  <Briefcase className="h-[22px] w-[22px]" strokeWidth={2} aria-hidden="true" />
                </span>
                <div>
                  <h4 className="card-title text-content-primary">
                    High Employability
                  </h4>
                  <p className="mt-1.5 text-body-small text-content-secondary leading-relaxed">
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
