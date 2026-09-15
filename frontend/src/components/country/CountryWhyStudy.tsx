import React from "react";
import { Country } from "@/types/country";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Building2, Coins, Shield, Award, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";

interface CountryWhyStudyProps {
  country: Country;
}

export const CountryWhyStudy: React.FC<CountryWhyStudyProps> = ({ country }) => {
  const getIcon = (icon?: string) => {
    switch (icon) {
      case "building":
        return <Building2 className="text-[#253A7B]" size={24} />;
      case "tax":
        return <Coins className="text-[#E93F61]" size={24} />;
      case "shield":
        return <Shield className="text-[#1E7B47]" size={24} />;
      case "star":
        return <Award className="text-[#A67C00]" size={24} />;
      case "growth":
        return <TrendingUp className="text-[#253A7B]" size={24} />;
      default:
        return <Sparkles className="text-[#E93F61]" size={24} />;
    }
  };

  return (
    <section className="bg-neutral-50/70 py-20 border-y border-neutral-200/60">
      <Container size="lg">
        <SectionHeading
          badge="Why Choose This Destination"
          title={`Top Reasons to Study in ${country.name}`}
          subtitle={`Engineered for ambition, global recognition, and high-impact career outcomes.`}
        />

        <div className="grid grid-cols-4 gap-6 lg:grid-cols-12 lg:gap-8">
          {country.whyStudy.map((point, index) => (
            <div
              key={point.title}
              className="col-span-4 sm:col-span-2 lg:col-span-4 group relative flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-white p-7 transition-all duration-300 hover:border-[#253A7B]/30 hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100/90 shadow-xs transition-transform duration-300 group-hover:scale-110">
                    {getIcon(point.icon)}
                  </div>
                  <span className="font-heading text-2xl font-bold text-neutral-200 group-hover:text-[#253A7B]/20 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-body text-[17px] sm:text-[18px] font-medium leading-snug text-[#111111] transition-colors group-hover:text-[#253A7B]">
                  {point.title}
                </h3>

                <p className="mt-3 font-body text-[14px] leading-relaxed text-[#555555]">
                  {point.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-medium text-neutral-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified student benefit</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CountryWhyStudy;
