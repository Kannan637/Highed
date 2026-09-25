"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Globe, BookOpen, Award, HeartHandshake, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import { useLeadPopup } from "@/hooks/useLeadPopup";

interface StudyAbroadCard {
  title: string;
  href: string;
  image?: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
}

const cards: StudyAbroadCard[] = [
  {
    title: "Country & University",
    href: "/study-in",
    icon: Globe,
    bgColor: "#E4ECF2",
    iconColor: "#253A7B",
  },
  {
    title: "Courses",
    href: "/courses",
    icon: BookOpen,
    bgColor: "#DEEDE0",
    iconColor: "#1E7B47",
  },
  {
    title: "Scholarship",
    href: "/scholarships",
    icon: Award,
    bgColor: "#F2EBE1",
    iconColor: "#B38728",
  },
  {
    title: "Student Support",
    href: "/services",
    icon: HeartHandshake,
    bgColor: "#F2E6EC",
    iconColor: "#D8284D",
  },
];

export const StudyAbroadCards = () => {
  const { openLeadPopup } = useLeadPopup();

  return (
    <section className="relative z-30 w-full -translate-y-8 -mb-8 sm:-translate-y-10 sm:-mb-10 md:-translate-y-1/2 md:-mb-[90px] tracking-[-0.04em] [letter-spacing:-0.04em] [&_*]:[letter-spacing:-0.04em]">
      <Container size="lg">
        <div className="grid grid-cols-4 gap-3 rounded-2xl border-[6px] sm:border-8 border-white bg-white p-2 shadow-xl lg:grid-cols-12 lg:gap-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <button
                key={card.title}
                type="button"
                onClick={() => openLeadPopup({ source: `card_${card.title.toLowerCase().replace(/ /g, "_")}` })}
                className="
                  group
                  col-span-4
                  sm:col-span-2
                  lg:col-span-3
                  flex
                  min-h-19
                  w-full
                  cursor-pointer
                  overflow-hidden
                  rounded-xl
                  bg-surface-neutral
                  text-left
                  no-underline
                  transition-all
                  duration-200
                  hover:shadow-md
                  hover:-translate-y-0.5
                  md:h-46
                  md:min-h-0
                  md:flex-col
                "
              >
                {/* Visual / Icon Area */}
                <div
                  className="
                    flex
                    h-19
                    w-22.5
                    shrink-0
                    items-center
                    justify-center
                    transition-colors
                    md:h-35
                    md:w-full
                  "
                  style={{
                    backgroundColor: card.bgColor,
                  }}
                >
                  {card.image ? (
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={140}
                      height={140}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <Icon
                      size={36}
                      style={{ color: card.iconColor }}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  )}
                </div>

                {/* Content Area */}
                <div
                  className="
                    flex
                    min-w-0
                    flex-1
                    items-center
                    justify-between
                    gap-3
                    px-4
                    md:h-12
                    md:flex-none
                    md:w-full
                  "
                >
                  <span className="text-body font-medium text-content-primary">
                    {card.title}
                  </span>

                  <ArrowRight
                    size={20}
                    strokeWidth={2}
                    className="
                      shrink-0
                      text-content-primary
                      transition-transform
                      duration-300
                      ease-out
                      group-hover:translate-x-1.5
                    "
                  />
                </div>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default StudyAbroadCards;
