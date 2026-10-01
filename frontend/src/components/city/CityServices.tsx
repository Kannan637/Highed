import React from "react";
import {
  Compass,
  FileText,
  Award,
  CheckCircle,
  Users,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { CityData } from "@/types/city";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

interface CityServicesProps {
  city: CityData;
}

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  compass: Compass,
  "file-text": FileText,
  award: Award,
  "check-circle": CheckCircle,
  "shield-check": ShieldCheck,
  users: Users,
};

export const CityServices: React.FC<CityServicesProps> = ({ city }) => {
  return (
    <section className="bg-[#F5F5F9]/60 py-12 sm:py-16 md:py-20 border-t border-border-light tracking-tight-5 [letter-spacing:var(--tracking-tight-5)] [&_*]:[letter-spacing:var(--tracking-tight-5)]">
      <Container size="lg">
        <SectionHeading
          badge="360° Student Support"
          title={`Comprehensive Study Abroad Services in ${city.name}`}
          accentText="Study Abroad"
          subtitle={`From your initial counseling session to university acceptance, education loan disbursal, and airport departure—we handle every milestone.`}
          align="center"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {city.services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Compass;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-3xl border border-black/[0.06] bg-white p-7 sm:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-black/[0.12] hover:shadow-[0_16px_32px_rgba(0,0,0,0.07)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-icon-bg-primary text-brand-primary transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-white">
                      <Icon size={24} />
                    </div>
                    <span className="font-heading font-bold text-2xl text-muted-foreground/30 group-hover:text-brand-primary/40 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="card-title text-foreground group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-content-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-border-light flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-600">
                    ✓ 100% Free Guidance
                  </span>

                  <LeadCTAButton
                    source={`city_service_${city.slug}_${idx}`}
                    contextTitle={`Service Inquiry: ${service.title} (${city.name})`}
                    contextCTA="Get Guidance"
                    variant="link"
                    size="sm"
                    aria-label={`Learn more about ${service.title} in ${city.name}`}
                    className="h-9 px-0 text-xs sm:text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors cursor-pointer inline-flex items-center gap-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={14} />
                  </LeadCTAButton>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Banner */}
        <div className="mt-12 text-center">
          <LeadCTAButton
            source={`city_services_cta_${city.slug}`}
            contextTitle={`Book 1-on-1 Consultation in ${city.name}`}
            contextCTA="Schedule Free Call"
            size="lg"
            className="w-fit max-w-[340px] sm:w-auto sm:max-w-none h-12 sm:h-14 px-6 sm:px-8 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            Book Your Free 1-on-1 Session in {city.name}
          </LeadCTAButton>
        </div>
      </Container>
    </section>
  );
};

export default CityServices;
