"use client";

import {
  Building2,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";
import { useState } from "react";
import { Country } from "@/types/country";
import EyebrowBadge from "@/components/ui/EyebrowBadge";

const features = [
  {
    pill: "Study & Universities",
    title: "Global Branch Campuses",
    description:
      "Earn prestigious degrees from top UK, Australian, and US institutions such as the University of Birmingham, Wollongong, and Curtin right in Dubai at significantly lower costs.",
    icon: Building2,
  },
  {
    pill: "Work & Earnings",
    title: "Tax-Free Earnings",
    description:
      "Work part-time during your studies and transition to high-paying jobs upon graduation without any personal income tax deductions.",
    icon: BriefcaseBusiness,
  },
  {
    pill: "Visa & Residency",
    title: "Fast Visa & Golden Visa",
    description:
      "Student visas are sponsored directly by the university, with typical turnaround times of 2 to 4 weeks. Outstanding university graduates with top GPAs can qualify for the prestigious 10-year UAE Golden Visa.",
    icon: GraduationCap,
  },
];

function DestinationImage({ country }: { country?: Country }) {
  const imageSrc = country?.heroImage || "/images/countries/UK.webp";

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px]">
      <span
        aria-hidden="true"
        className="
          absolute
          -right-6
          top-2
          hidden
          size-2
          rounded-full
          bg-white
          lg:block
        "
      />

      <svg
        viewBox="0 0 256 256"
        className="block h-auto w-full drop-shadow-sm"
        role="img"
        aria-label={`Why choose ${country?.name || "destination"} for studies`}
      >
        <defs>
          <clipPath id="destination-image-shape">
            <path
              d="
                M 64 0
                C 99.346 0 128 28.654 128 64
                L 128 192
                C 128 227.346 99.346 256 64 256
                C 28.654 256 0 227.346 0 192
                C 0 156.654 28.654 128 64 128
                C 28.654 128 0 99.346 0 64
                C 0 28.654 28.654 0 64 0
                Z

                M 192 128
                C 156.654 128 128 99.346 128 64
                C 128 28.654 156.654 0 192 0
                C 227.346 0 256 28.654 256 64
                L 256 192
                C 256 227.346 227.346 256 192 256
                C 156.654 256 128 227.346 128 192
                C 128 156.654 156.654 128 192 128
                Z
              "
            />
          </clipPath>
        </defs>

        <image
          href={imageSrc}
          x="0"
          y="0"
          width="256"
          height="256"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#destination-image-shape)"
        />
      </svg>
    </div>
  );
}

interface CountryWhyStudyProps {
  country?: Country;
}

export default function WhyChooseCountry({
  country,
}: CountryWhyStudyProps = {}) {
  const countryName = country?.name || "Dubai";
  const [activeFeature, setActiveFeature] = useState(0);

  const activeItem = features[activeFeature];
  const ActiveIcon = activeItem.icon;

  return (
    <section
      className="
        w-full
        bg-surface-neutral/60
        py-16
        sm:py-20
        lg:py-24
        tracking-tight-5
        [letter-spacing:var(--tracking-tight-5)]
        [&_*]:[letter-spacing:var(--tracking-tight-5)]
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1440px]
          grid-cols-1
          items-center
          gap-12
          px-6
          sm:px-10
          lg:grid-cols-[500px_minmax(0,1fr)]
          lg:gap-[80px]
          xl:gap-[110px]
          lg:px-[80px]
        "
      >
        {/* LEFT IMAGE */}
        <div className="flex items-center justify-center lg:justify-start">
          <DestinationImage country={country} />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full max-w-[645px]">
          {/* Badge */}
          <div className="flex justify-center lg:justify-start">
            <EyebrowBadge>Why Choose This Destination</EyebrowBadge>
          </div>

          {/* Heading */}
          <h2
            className="
              mx-auto
              max-w-[620px]
              text-center
              text-foreground
              lg:mx-0
              lg:text-left
            "
          >
            Why choose {countryName} for your studies?
          </h2>

          {/* CATEGORY PILLS — FAQ STYLE */}
          <div className="mt-6 w-full">
            <div
              className="
                mx-auto
                flex
                w-fit
                max-w-full
                items-center
                gap-1.5
                overflow-x-auto
                rounded-full
                border
                border-border/80
                bg-muted/40
                p-1.5
                shadow-2xs
                scrollbar-none
                lg:mx-0
              "
            >
              {features.map((feature, index) => {
                const isActive = activeFeature === index;

                return (
                  <button
                    key={feature.pill}
                    type="button"
                    onClick={() => setActiveFeature(index)}
                    aria-pressed={isActive}
                    className={`
                      inline-flex
                      min-h-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      px-4
                      py-2
                      text-xs
                      font-medium
                      whitespace-nowrap
                      cursor-pointer
                      transition-all
                      duration-200
                      sm:text-sm
                      ${isActive
                        ? "bg-[#E93F61] text-white shadow-sm"
                        : "text-content-secondary hover:bg-[#E93F61]/10 hover:text-[#E93F61]"
                      }
                    `}
                  >
                    {feature.pill}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ACTIVE ARTICLE — DIRECTLY BELOW PILLS */}
          <article
            className="
              mt-4
              w-full
              rounded-2xl
              border
              border-border/80
              bg-card
              p-5
              shadow-2xs
              transition-all
              duration-200
              sm:p-6
            "
          >
            <div className="flex items-start gap-4">
              {/* Filled Lucide icon */}
              <div
                className="
                  flex
                  size-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#E93F61]/10
                  text-[#E93F61]
                  sm:size-12
                "
              >
                <ActiveIcon
                  aria-hidden="true"
                  className="size-5 fill-current"
                  strokeWidth={2}
                />
              </div>

              {/* Important data only */}
              <div className="min-w-0 flex-1">
                <h3
                  className="
                    text-base
                    font-semibold
                    leading-snug
                    text-foreground
                    sm:text-lg
                  "
                >
                  {activeItem.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-relaxed
                    text-content-secondary
                    sm:text-base
                  "
                >
                  {activeItem.description}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}