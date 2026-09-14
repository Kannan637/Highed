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
      pillBg: "bg-indigo-50 text-[#253A7B] border-indigo-200",
      cta: "Explore Universities",
    },
    {
      title: "Scholarships & Aid",
      description: `Find government stipends, university fee waivers, and merit scholarships for international applicants.`,
      count: country.scholarshipsList?.length ? `${country.scholarshipsList.length}+ Scholarships` : "15+ Scholarships",
      icon: Award,
      href: `/study-in/${country.slug}/explore?type=scholarships`,
      accent: "from-[#E93F61] to-[#BE185D]",
      pillBg: "bg-rose-50 text-[#E93F61] border-rose-200",
      cta: "View Scholarships",
    },
  ];

  return (
    <section className="relative -mt-8 z-10">
      <Container size="lg">
        <div className="grid grid-cols-4 gap-5 lg:grid-cols-12 lg:gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link
                key={idx}
                href={card.href}
                className="col-span-4 sm:col-span-2 lg:col-span-4 group relative flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-lg shadow-neutral-200/40 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#253A7B]/40 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.accent} text-white shadow-md transition-transform duration-300 group-hover:scale-105`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${card.pillBg}`}>
                      {card.count}
                    </span>
                  </div>

                  <h3 className="font-hedvig text-xl font-bold text-neutral-900 group-hover:text-[#253A7B] transition-colors">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#253A7B] group-hover:text-[#E93F61] transition-colors">
                  <span>{card.cta}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
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
