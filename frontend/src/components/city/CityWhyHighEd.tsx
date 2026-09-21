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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {city.whyHighEd.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || GraduationCap;

            return (
              <div
                key={idx}
                className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200/80 bg-linear-to-b from-white to-neutral-50/50 p-8 shadow-xs transition-all duration-300 hover:border-brand-primary/40 hover:shadow-lg"
              >
                <div>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-icon-bg-primary text-brand-primary shadow-xs">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="font-heading font-normal text-h4 text-content-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-body text-content-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 pt-4 border-t border-neutral-100 text-caption font-medium text-brand-primary">
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
