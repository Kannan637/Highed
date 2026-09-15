import React from "react";
import { 
  CheckCircle2, 
  Sparkles, 
  GraduationCap, 
  Award, 
  FileCheck2, 
  Headphones, 
  BadgePercent, 
  Compass 
} from "lucide-react";
import { Country } from "@/types/country";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

interface CountryWhyHighEdProps {
  country: Country;
}

export const CountryWhyHighEd: React.FC<CountryWhyHighEdProps> = ({ country }) => {
  const pillars = [
    {
      icon: BadgePercent,
      title: "100% Free Counseling",
      description: `Zero service fees or hidden consulting charges for admissions into authorized ${country.name} universities.`,
      badge: "Zero Cost",
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      icon: Compass,
      title: "AI-Powered University Shortlisting",
      description: `Data-driven selection based on your GPA, test scores, budget, and long-term career aspirations.`,
      badge: "Precision",
      color: "text-blue-600 bg-blue-50",
    },
    {
      icon: Award,
      title: "Maximum Scholarship Guarantee",
      description: `Dedicated profiling to unlock institutional waivers, early-decision grants, and government funding.`,
      badge: "Up to 100%",
      color: "text-amber-600 bg-amber-50",
    },
    {
      icon: FileCheck2,
      title: "SOP & Essay Refinement",
      description: `1-on-1 editorial review for statements of purpose and letters of recommendation tailored for ${country.name}.`,
      badge: "High Impact",
      color: "text-purple-600 bg-purple-50",
    },
    {
      icon: GraduationCap,
      title: "99.4% Visa Success Rate",
      description: `Mock visa interview drills, financial documentation checks, and complete embassy filing assistance.`,
      badge: "Proven Record",
      color: "text-rose-600 bg-rose-50",
    },
    {
      icon: Headphones,
      title: "Post-Arrival Support",
      description: `Guidance on finding student accommodation, opening bank accounts, and SIM card activations.`,
      badge: "End-to-End",
      color: "text-indigo-600 bg-indigo-50",
    },
  ];

  return (
    <section className="bg-white py-20">
      <Container size="lg">
        <SectionHeading
          badge="Why HighEd"
          title={`Your Trusted Partner for Studying in ${country.name}`}
          subtitle={`From your first exploratory search to your first day on campus, we eliminate complexity at every single stage.`}
        />

        <div className="grid grid-cols-4 gap-6 mt-12 lg:grid-cols-12 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="col-span-4 sm:col-span-2 lg:col-span-4 group relative flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-neutral-50/40 p-7 transition-all duration-300 hover:border-[#253A7B]/40 hover:bg-white hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${pillar.color} shadow-xs transition-transform duration-300 group-hover:scale-105`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-600">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-neutral-900 group-hover:text-[#253A7B] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-body">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-medium text-neutral-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified HighEd Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <LeadCTAButton
            source={`country_why_highed_${country.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-[#253A7B] px-8 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-[#1c2c5c] transition-all duration-200 cursor-pointer active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-[#E93F61]" />
            <span>Connect with a {country.name} Specialist Today</span>
          </LeadCTAButton>
        </div>
      </Container>
    </section>
  );
};

export default CountryWhyHighEd;
