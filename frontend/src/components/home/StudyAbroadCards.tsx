"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  Globe,
  BookOpen,
  Award,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface StudyAbroadCard {
  title: string;
  targetId: string;
  href: string;
  image: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
}

const cards: StudyAbroadCard[] = [
  {
    title: "Top Country",
    targetId: "top-countries",
    href: "#top-countries",
    image: "/images/HeroBottomCard/Top Country.webp",
    icon: Globe,
    bgColor: "#E9EEF8",
    iconColor: "#253A7B",
  },
  {
    title: "Top Courses & University",
    targetId: "courses",
    href: "#courses",
    image: "/images/HeroBottomCard/corses & Unviersity.webp",
    icon: BookOpen,
    bgColor: "#E8F4ED",
    iconColor: "#1E7B47",
  },
  {
    title: "Scholarship",
    targetId: "scholarships",
    href: "#scholarships",
    image: "/images/HeroBottomCard/Scholarship.webp",
    icon: Award,
    bgColor: "#F5F0E3",
    iconColor: "#B38728",
  },
  {
    title: "Student Service",
    targetId: "services",
    href: "#services",
    image: "/images/HeroBottomCard/Student Serivce.webp",
    icon: HeartHandshake,
    bgColor: "#F2E7ED",
    iconColor: "#D8284D",
  },
];

const ID_ALIASES: Record<string, string[]> = {
  "top-countries": ["top-countries", "destinations", "countries"],
  courses: ["courses", "top-courses"],
  scholarships: ["scholarships", "scholarship"],
  services: ["services", "student-services"],
};

export const StudyAbroadCards = () => {
  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (e.metaKey || e.ctrlKey) return;

    const candidateIds = ID_ALIASES[targetId] || [targetId];
    let element: HTMLElement | null = null;
    for (const id of candidateIds) {
      const el = document.getElementById(id);
      if (el) {
        element = el;
        break;
      }
    }

    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      if (typeof window !== "undefined" && window.history.pushState) {
        window.history.pushState(null, "", `#${element.id || targetId}`);
      }
    }
  };

  return (
    <section
      className={cn(
        "relative z-30 w-full -translate-y-8 -mb-8 sm:-translate-y-10 sm:-mb-10 md:-translate-y-1/2 md:-mb-[90px]",
        "tracking-tight-5 [letter-spacing:var(--tracking-tight-5)] [&_*]:[letter-spacing:var(--tracking-tight-5)]"
      )}
    >
      <Container size="lg">
        <div
          className={cn(
            "grid grid-cols-4 gap-3 rounded-2xl border-[6px] border-white bg-white p-2  sm:border-8 lg:grid-cols-12 lg:gap-4"
          )}
        >
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <a
                key={card.title}
                href={card.href}
                aria-label={`Scroll to ${card.title} section`}
                onClick={(e) => handleScrollToSection(e, card.targetId)}
                className={cn(
                  "group col-span-4 flex min-h-19 w-full cursor-pointer overflow-hidden rounded-xl bg-surface-neutral text-left no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:col-span-2 lg:col-span-3 md:h-46 md:min-h-0 md:flex-col"
                )}
              >
                {/* Image Area */}
                <div
                  className="relative h-19 w-22.5 shrink-0 overflow-hidden md:h-35 md:w-full"
                  style={{
                    backgroundColor: card.bgColor,
                  }}
                >
                  {card.image ? (
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 639px) 90px, (max-width: 767px) 25vw, (max-width: 1023px) 25vw, 25vw"
                      className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <Icon
                        size={36}
                        style={{
                          color: card.iconColor,
                        }}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="flex min-w-0 flex-1 items-center justify-between gap-3 px-4 md:h-12 md:w-full md:flex-none">
                  <span className="min-w-0 text-body font-medium leading-tight text-content-primary">
                    {card.title}
                  </span>

                  <ArrowRight
                    size={20}
                    strokeWidth={2}
                    className="shrink-0 text-content-primary transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                  />
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default StudyAbroadCards;