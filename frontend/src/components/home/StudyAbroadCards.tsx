"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { useLeadPopup } from "@/hooks/useLeadPopup";

interface StudyAbroadCard {
  title: string;
  href: string;
  image: string;
  bgColor: string;
}

const cards: StudyAbroadCard[] = [
  {
    title: "Country & University",
    href: "/study-in",
    image: "",
    bgColor: "#E4ECF2",
  },
  {
    title: "Courses",
    href: "/courses",
    image: "",
    bgColor: "#DEEDE0",
  },
  {
    title: "Scholarship",
    href: "/scholarships",
    image: "",
    bgColor: "#F2EBE1",
  },
  {
    title: "Student Support",
    href: "/services",
    image: "",
    bgColor: "#F2E6EC",
  },
];

export const StudyAbroadCards = () => {
  const { openLeadPopup } = useLeadPopup();

  return (
    <section className="relative z-30 w-full -translate-y-8 -mb-8 sm:-translate-y-10 sm:-mb-10 md:-translate-y-1/2 md:-mb-[90px]">
      <Container size="lg">
        <div className="grid grid-cols-4 gap-3 rounded-[24px] border-[6px] sm:border-[8px] border-white bg-white p-1.5 shadow-xl lg:grid-cols-12 lg:gap-4">
          {cards.map((card) => (
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
                min-h-[76px]
                w-full
                overflow-hidden
                rounded-[14px]
                bg-surface-neutral
                no-underline
                transition-all
                duration-200
                hover:shadow-md
                hover:-translate-y-0.5
                md:h-[186px]
                md:min-h-0
                md:flex-col
              "
            >
              {/* Image */}
              <div
                className="
                flex
                h-[76px]
                w-[90px]
                shrink-0
                items-center
                justify-center

                md:h-[140px]
                md:w-full
              "
                style={{
                  backgroundColor: card.bgColor,
                }}
              >
                {card.image && (
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={140}
                    height={140}
                    className="
                    h-full
                    w-full
                    object-contain
                  "
                  />
                )}
              </div>

              {/* Content */}
              <div
                className="
                flex
                min-w-0
                flex-1
                items-center
                justify-between
                gap-3
                px-3

                md:h-[46px]
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
                  group-hover:translate-x-1
                "
                />
              </div>
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StudyAbroadCards;
