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
    <section className="bg-neutral-50/70 py-20 border-t border-neutral-200/60">
      <Container size="lg">
        <SectionHeading
          badge="360° Student Support"
          title={`Comprehensive Study Abroad Services in ${city.name}`}
          subtitle={`From your initial counseling session to university acceptance, education loan disbursal, and airport departure—we handle every milestone.`}
          align="center"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {city.services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Compass;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white">
                      <Icon size={24} />
                    </div>
                    <span className="font-heading font-bold text-2xl text-muted-foreground/40 group-hover:text-brand-primary/40 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-600">
                    ✓ 100% Free Guidance
                  </span>

                  <LeadCTAButton
                    source={`city_service_${city.slug}_${idx}`}
                    contextTitle={`Service Inquiry: ${service.title} (${city.name})`}
                    contextCTA="Get Guidance"
                    aria-label={`Learn more about ${service.title} in ${city.name}`}
                    className="min-h-[44px] inline-flex items-center text-xs sm:text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors cursor-pointer"
                  >
                    Learn More →
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
            className="h-14 px-8 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer inline-flex items-center gap-2.5"
          >
            <span>Book Your Free 1-on-1 Session in {city.name}</span>
            <ArrowRight size={18} />
          </LeadCTAButton>
        </div>
      </Container>
    </section>
  );
};

export default CityServices;
