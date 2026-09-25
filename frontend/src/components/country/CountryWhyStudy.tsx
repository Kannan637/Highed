"use client";

import { Star } from "lucide-react";
import { Country } from "@/types/country";
import EyebrowBadge from "@/components/ui/EyebrowBadge";

const features = [
  {
    title: "United Kingdom Go8 Universities",
    description:
      "Eight leading research universities, including Melbourne, ANU, Sydney, UNSW, Monash, and Queensland.",
  },
  {
    title: "2–4 Year Post-Study Work Visa",
    description:
      "Graduate in Australia and gain 2–4 years of post-study work rights with the Temporary Graduate Visa (subclass 485).",
  },
  {
    title: "High Quality of Life",
    description:
      "Live and study in Australia's highly liveable cities, with quality healthcare, safety, and public transport.",
  },
];

function DestinationImage() {
  return (
    <div className="relative mx-auto w-full max-w-[500px]">
      {/* Decorative dot */}
      <span
        aria-hidden="true"
        className="
          absolute
          -right-[68px]
          top-0
          hidden
          h-[8px]
          w-[8px]
          rounded-full
          bg-white
          lg:block
        "
      />

      {/* SVG shape */}
      <svg
        viewBox="0 0 500 600"
        className="block h-auto w-full"
        role="img"
        aria-label="Student studying abroad"
      >
        <defs>
          <clipPath id="destination-image-shape">
            <path
              d="
                M 132 0
                C 58 0 0 58 0 132
                C 0 184 29 224 70 247
                C 29 270 0 310 0 363
                C 0 494 58 600 190 600
                L 310 600
                C 442 600 500 494 500 363
                C 500 310 471 270 430 247
                C 471 224 500 184 500 132
                C 500 58 442 0 368 0
                Z
              "
            />
          </clipPath>
        </defs>

        <image
          href="/images/country/uk-why-choose.png"
          width="500"
          height="600"
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

export default function WhyChooseCountry({ country }: CountryWhyStudyProps = {}) {
  const displayFeatures =
    country?.whyStudy && country.whyStudy.length > 0
      ? country.whyStudy
      : features;

  const countryName = country?.name || "the UK";

  return (
    <section className="w-full bg-neutral-50/60 py-16 sm:py-20 lg:py-24">
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
        {/* ───────────────── LEFT IMAGE ───────────────── */}
        <div className="flex items-center justify-center lg:justify-start">
          <DestinationImage />
        </div>

        {/* ───────────────── RIGHT CONTENT ───────────────── */}
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
            "
          >
            Why choose {countryName} for your studies?
          </h2>

          {/* Cards */}
          <div className="mt-8 flex flex-col gap-4">
            {displayFeatures.map((feature) => (
              <article
                key={feature.title}
                className="
                  flex
                  min-h-[110px]
                  w-full
                  items-center
                  gap-5
                  rounded-2xl
                  border border-border
                  bg-card
                  p-6
                  shadow-xs
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-md
                  hover:border-primary/30
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    size-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-brand-accent/10
                    text-brand-accent
                  "
                >
                  <Star
                    aria-hidden="true"
                    className="size-5 fill-brand-accent text-brand-accent"
                  />
                </div>

                {/* Card content */}
                <div className="min-w-0 flex-1">
                  <h3 className="card-title text-foreground">
                    {feature.title}
                  </h3>

                  <p className="mt-1.5 max-w-[540px] text-content-secondary">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}