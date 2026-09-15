import React from "react";
import { ShieldCheck, CheckCircle2, Award, Users, Globe2, Building2 } from "lucide-react";
import Container from "@/components/ui/Container";
import { CityData } from "@/types/city";

interface CityTrustProps {
  city: CityData;
}

export const CityTrust: React.FC<CityTrustProps> = ({ city }) => {
  const trustPoints = [
    {
      icon: ShieldCheck,
      title: "100% Free Transparent Process",
      description: "Direct university funding means students in " + city.name + " pay ₹0 for counselling, application reviews, and visa mock preparation.",
    },
    {
      icon: Building2,
      title: "850+ Direct Global University Partners",
      description: "Direct ties with top universities in USA, UK, Canada, Australia, Germany, and Dubai for priority admits and application fee waivers.",
    },
    {
      icon: Award,
      title: "High-Caliber Mentorship",
      description: "Get guided by alumni from elite global institutions who understand transcript conversion and international admission rubrics.",
    },
    {
      icon: Globe2,
      title: "98.8% Proven Visa Approval Record",
      description: "Rigorous document verification, financial profile structuring, and comprehensive 1-on-1 mock interviews before your appointment.",
    },
  ];

  return (
    <section className="bg-neutral-50/80 py-16 border-b border-neutral-200/70">
      <Container size="lg">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#253A7B]/30 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF1FA] text-[#253A7B] transition-colors duration-300 group-hover:bg-[#253A7B] group-hover:text-white">
                  <Icon size={24} />
                </div>
                <h3 className="font-heading text-lg font-bold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default CityTrust;
