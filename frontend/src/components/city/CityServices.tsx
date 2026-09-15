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
                className="group relative flex flex-col justify-between rounded-3xl border border-neutral-200/80 bg-white p-7 shadow-xs transition-all duration-300 hover:border-[#253A7B]/40 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF1FA] text-[#253A7B] transition-colors group-hover:bg-[#253A7B] group-hover:text-white">
                      <Icon size={24} />
                    </div>
                    <span className="font-heading text-2xl font-bold text-neutral-300 group-hover:text-[#253A7B]/30 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-neutral-900 group-hover:text-[#253A7B] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 font-body text-sm leading-relaxed text-neutral-600">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="font-body text-xs font-semibold text-emerald-600">
                    ✓ 100% Free Guidance
                  </span>

                  <LeadCTAButton
                    source={`city_service_${city.slug}_${idx}`}
                    contextTitle={`Service Inquiry: ${service.title} (${city.name})`}
                    contextCTA="Get Guidance"
                    className="font-body text-xs font-bold text-[#253A7B] hover:text-[#E93F61] transition-colors cursor-pointer"
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
            className="inline-flex items-center gap-2.5 rounded-full bg-[#253A7B] px-8 py-3.5 font-body text-sm font-bold text-white shadow-lg hover:bg-[#1b2b5c] transition-all cursor-pointer hover:scale-105 active:scale-95"
          >
            <span>Book Your Free 1-on-1 Session in {city.name}</span>
            <ArrowRight size={16} />
          </LeadCTAButton>
        </div>
      </Container>
    </section>
  );
};

export default CityServices;
