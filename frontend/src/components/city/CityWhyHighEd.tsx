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
    <section className="bg-white py-20">
      <Container size="lg">
        <SectionHeading
          badge={`Local Expertise in ${city.name}`}
          title={`Why Students in ${city.name} Choose HighEd`}
          subtitle={`We understand the local colleges, grading systems, and student aspirations in ${city.name} to deliver unmatched international admissions success.`}
          align="center"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {city.whyHighEd.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || GraduationCap;

            return (
              <div
                key={idx}
                className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
              >
                <div>
                  <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-brand-primary shadow-xs">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="card-title text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-content-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 pt-4 border-t border-border text-xs font-semibold text-brand-primary">
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
