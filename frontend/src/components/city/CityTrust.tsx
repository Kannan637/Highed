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
    <section className="bg-[#F5F5F9]/60 py-12 sm:py-16 md:py-20 border-b border-border-light tracking-tight-5 [letter-spacing:var(--tracking-tight-5)] [&_*]:[letter-spacing:var(--tracking-tight-5)]">
      <Container size="lg">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl border border-black/[0.06] bg-white p-7 shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-black/[0.12] hover:shadow-[0_16px_32px_rgba(0,0,0,0.07)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-icon-bg-primary text-brand-primary transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-white">
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
