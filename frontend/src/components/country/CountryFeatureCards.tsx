"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  GraduationCap,
  Award,
} from "lucide-react";

import { Country } from "@/types/country";
import Container from "@/components/ui/Container";

interface CountryFeatureCardsProps {
  country: Country;
}

export const CountryFeatureCards: React.FC<CountryFeatureCardsProps> = ({
  country,
}) => {
  const cards = [
    {
      title: "Explore Courses",
      count: country.coursesList?.length
        ? `${country.coursesList.length}+ Programs`
        : "50+ Programs",
      icon: Search,
      href: `/study-in/${country.slug}/explore?type=courses`,

      // Pastel blue
      cardBg: "#EEF2FF",
      iconBg: "#253A7B",
      countBg: "#F8F9FF",
      countText: "#253A7B",
    },
    {
      title: "Top Universities",
      count: country.universitiesList?.length
        ? `${country.universitiesList.length}+ Universities`
        : "20+ Universities",
      icon: GraduationCap,
      href: `/study-in/${country.slug}/explore?type=universities`,

      // Pastel lavender
      cardBg: "#F3F0FF",
      iconBg: "#253A7B",
      countBg: "#FAF8FF",
      countText: "#253A7B",
    },
    {
      title: "Scholarships & Aid",
      count: country.scholarshipsList?.length
        ? `${country.scholarshipsList.length}+ Scholarships`
        : "15+ Scholarships",
      icon: Award,
      href: `/study-in/${country.slug}/explore?type=scholarships`,

      // Pastel pink
      cardBg: "#FFF1F4",
      iconBg: "#E93F61",
      countBg: "#FFF8F9",
      countText: "#E93F61",
    },
  ];

  return (
    <section
      className="
        relative z-30 w-full
        mt-3
        sm:-translate-y-8 sm:-mb-8
        md:-translate-y-10 md:-mb-10
        lg:-translate-y-1/2 lg:-mb-[110px]
      "
    >
      <Container size="lg">
        <div
          className="
            grid grid-cols-1 md:grid-cols-3
            gap-2.5 sm:gap-3 lg:gap-4
            rounded-[24px] sm:rounded-[32px]
            border-[3px] sm:border-[6px]
            border-white
            bg-white
            p-1.5 sm:p-2.5
            shadow-[0_14px_40px_rgba(0,0,0,0.08)]
          "
        >
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <Link
                key={index}
                href={card.href}
                className="
                  group
                  relative
                  flex
                  min-h-[188px]
                  flex-col
                  overflow-hidden
                  rounded-[17px]
                  border
                  border-black/[0.035]
                  p-3.5

                  sm:min-h-[222px]
                  sm:p-5

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#E93F61]
                  focus-visible:ring-offset-2
                "
                style={{
                  backgroundColor: card.cardBg,
                }}
              >
                {/* Top Row */}
                <div className="flex items-start justify-between">
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-[12px]
                      text-white
                    "
                    style={{
                      backgroundColor: card.iconBg,
                    }}
                  >
                    <Icon
                      className="h-[19px] w-[19px]"
                      strokeWidth={2}
                    />
                  </div>

                  {/* Count */}
                  <span
                    className="
                      mt-1
                      rounded-full
                      border
                      px-2.5
                      py-1.5
                      text-[9px]
                      font-medium
                      leading-none

                      sm:text-[10px]
                    "
                    style={{
                      backgroundColor: card.countBg,
                      color: card.countText,
                      borderColor: `${card.countText}18`,
                    }}
                  >
                    {card.count}
                  </span>
                </div>

                {/* Title */}
                <div className="mt-2.5 flex-1 sm:mt-2">
                  <h3
                    className="
                      truncate
                      text-[24px]
                      font-medium
                      leading-[1.05]
                      tracking-[-0.055em]
                      text-[#050505]

                      sm:text-[29px]
                      lg:text-[30px]
                    "
                  >
                    {card.title}
                  </h3>
                </div>

                {/* CTA */}
                <div
                  className="
                    relative
                    mt-3
                    flex
                    h-[48px]
                    w-full
                    items-center
                    justify-between
                    overflow-hidden
                    rounded-full
                    bg-[#253A7B]
                    pl-4
                    pr-1

                    sm:mt-4
                    sm:h-[52px]
                  "
                >
                  {/* CTA Text */}
                  <span
                    className="
                      relative z-10
                      text-[13px]
                      font-medium
                      tracking-[-0.02em]
                      text-white

                      sm:text-[14px]
                    "
                  >
                    {card.title === "Explore Courses"
                      ? "Find Courses"
                      : card.title === "Top Universities"
                        ? "Explore Universities"
                        : "View Scholarships"}
                  </span>

                  {/* Pink Arrow Button */}
                  <span
                    className="
                      relative z-10
                      flex
                      h-[42px]
                      w-[42px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#E93F61]
                      text-white

                      transition-transform
                      duration-200
                      ease-out

                      group-hover:scale-105
                      group-hover:rotate-[-8deg]
                      group-active:scale-[0.97]

                      sm:h-[44px]
                      sm:w-[44px]
                    "
                  >
                    <ArrowRight
                      className="
                        h-[18px]
                        w-[18px]
                        transition-transform
                        duration-300
                        ease-out
                        group-hover:translate-x-0.5
                      "
                      strokeWidth={2}
                    />
                  </span>

                  {/* Shine */}
                  <span
                    className="
                      pointer-events-none
                      absolute
                      -left-[70%]
                      top-0
                      h-full
                      w-[35%]
                      rotate-[18deg]
                      bg-white/10
                      opacity-0
                      transition-all
                      duration-500
                      ease-out
                      group-hover:left-[120%]
                      group-hover:opacity-100
                    "
                  />
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