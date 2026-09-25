import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, Award } from "lucide-react";
import { Country } from "@/types/country";
import Container from "@/components/ui/Container";

interface CountryFeatureCardsProps {
  country: Country;
}

export const CountryFeatureCards: React.FC<CountryFeatureCardsProps> = ({ country }) => {
  const cards = [
    {
      title: "Explore Courses",
      description: `Browse top undergraduate and postgraduate degree programs available across ${country.name}.`,
      count: country.coursesList?.length ? `${country.coursesList.length}+ Programs` : "50+ Programs",
      icon: BookOpen,
      href: `/study-in/${country.slug}/explore?type=courses`,
      accent: "from-blue-500 to-indigo-600",
      pillBg: "bg-blue-50 text-blue-700 border-blue-200",
      cta: "Find Courses",
    },
    {
      title: "Top Universities",
      description: `Discover globally ranked institutions, QS standings, campus locations, and tuition fees.`,
      count: country.universitiesList?.length ? `${country.universitiesList.length}+ Universities` : "20+ Universities",
      icon: GraduationCap,
      href: `/study-in/${country.slug}/explore?type=universities`,
      accent: "from-[#253A7B] to-[#12204C]",
      pillBg: "bg-indigo-50 text-brand-primary border-indigo-200",
      cta: "Explore Universities",
    },
    {
      title: "Scholarships & Aid",
      description: `Find government stipends, university fee waivers, and merit scholarships for international applicants.`,
      count: country.scholarshipsList?.length ? `${country.scholarshipsList.length}+ Scholarships` : "15+ Scholarships",
      icon: Award,
      href: `/study-in/${country.slug}/explore?type=scholarships`,
      accent: "from-[#E93F61] to-[#BE185D]",
      pillBg: "bg-rose-50 text-brand-accent border-rose-200",
      cta: "View Scholarships",
    },
  ];

  return (
    <section className="relative z-30 w-full mt-3 sm:-translate-y-8 sm:-mb-8 md:-translate-y-10 md:-mb-10 lg:-translate-y-1/2 lg:-mb-[110px]">
      <Container size="lg">
        <div className="grid grid-cols-1 gap-3 rounded-[24px] border-[3px] sm:border-[8px] border-white bg-white p-1 sm:p-1.5 shadow-xl md:grid-cols-3 lg:gap-4">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link
                key={idx}
                href={card.href}
                className="group flex flex-col justify-between overflow-hidden rounded-[14px] bg-[#FAFAFA] p-5 sm:p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.accent} text-white shadow-md transition-transform duration-300 group-hover:scale-105`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className={`inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full text-caption font-medium border ${card.pillBg}`}>
                      {card.count}
                    </span>
                  </div>

                  <h3 className="card-title text-content-primary">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-body-small text-content-secondary leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 flex items-center justify-between text-body-small font-medium text-content-primary">
                  <span className="transition-colors duration-200 group-hover:text-brand-accent">{card.cta}</span>
                  <ArrowRight className="w-4 h-4 sm:w-[18px] sm:h-[18px] transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-brand-accent" />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default CountryFeatureCards;
