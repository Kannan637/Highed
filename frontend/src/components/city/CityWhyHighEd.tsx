import React from "react";
import {
  GraduationCap,
  Building2,
  Sparkles,
  Wallet,
  ShieldCheck,
  CheckCircle2,
  Compass,
  FileText,
  Award,
  Users,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { CityData } from "@/types/city";

interface CityWhyHighEdProps {
  city: CityData;
}

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  "graduation-cap": GraduationCap,
  "building-2": Building2,
  sparkles: Sparkles,
  wallet: Wallet,
  "shield-check": ShieldCheck,
  "check-circle": CheckCircle2,
  compass: Compass,
  "file-text": FileText,
  award: Award,
  users: Users,
};

export const CityWhyHighEd: React.FC<CityWhyHighEdProps> = ({ city }) => {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 tracking-tight-5 [letter-spacing:var(--tracking-tight-5)] [&_*]:[letter-spacing:var(--tracking-tight-5)]">
      <Container size="lg">
        <SectionHeading
          badge={`Local Expertise in ${city.name}`}
          title={`Why Students in ${city.name} Choose HighEd`}
          accentText="HighEd"
          subtitle={`We understand the local colleges, grading systems, and student aspirations in ${city.name} to deliver unmatched international admissions success.`}
          align="center"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {city.whyHighEd.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || GraduationCap;

            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-7 sm:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-black/[0.12] hover:shadow-[0_16px_32px_rgba(0,0,0,0.07)]"
              >
                <div>
                  <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-icon-bg-primary text-brand-primary shadow-2xs transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-white">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="card-title text-content-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-content-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 pt-5 border-t border-border-light text-xs font-semibold text-brand-primary">
                  <CheckCircle2 size={16} className="text-brand-accent" />
                  <span>Proven success for {city.name} aspirants</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default CityWhyHighEd;
