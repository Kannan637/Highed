import React from "react";
import { ShieldCheck, Award, Globe2, Building2 } from "lucide-react";
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
                className="group relative rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-icon-bg-primary text-brand-primary transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-white">
                  <Icon size={24} />
                </div>
                <h3 className="card-title text-content-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-body-small leading-relaxed text-content-secondary">
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
