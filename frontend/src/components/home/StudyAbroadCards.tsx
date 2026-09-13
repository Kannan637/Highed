import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
  return (
    <section className="relative z-30 w-full">
      <div
        className="
          mx-auto
          -translate-y-8
          -mb-8
          grid
          w-[calc(100%-32px)]
          grid-cols-1
          gap-3
          rounded-[20px]
          border-[7px]
          border-white
          bg-white

          sm:w-[calc(100%-48px)]
          sm:-translate-y-10
          sm:-mb-10

          md:h-[200px]
          md:w-[calc(100%-64px)]
          md:max-w-[1000px]
          md:grid-cols-12
          md:gap-3
          md:-translate-y-1/2
          md:-mb-[100px]
        "
      >
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="
              group
              flex
              min-h-[76px]
              w-full
              overflow-hidden
              rounded-[13px]
              bg-[#FAFAFA]
              no-underline

              md:col-span-3
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
              <span
                className="
                  font-['DM_Sans']
                  text-[16px]
                  font-medium
                  leading-[20px]
                  text-[#111111]
                "
              >
                {card.title}
              </span>

              <ArrowRight
                size={20}
                strokeWidth={2}
                className="
                  shrink-0
                  text-[#111111]
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:translate-x-1
                "
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default StudyAbroadCards;
