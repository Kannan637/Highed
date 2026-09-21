"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Country } from "@/types/country";

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
  return (
    <section className="w-full bg-[#f6f6fa]">
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
          py-16
          sm:px-10
          sm:py-20
          lg:grid-cols-[500px_minmax(0,1fr)]
          lg:gap-[110px]
          lg:px-[80px]
          lg:py-[80px]
        "
      >
        {/* ───────────────── LEFT IMAGE ───────────────── */}
        <div className="flex items-center justify-center lg:justify-start">
          <DestinationImage />
        </div>

        {/* ───────────────── RIGHT CONTENT ───────────────── */}
        <div className="w-full max-w-[645px]">
          {/* Badge */}
          <div className="mb-5 flex justify-center lg:justify-start">
            <div
              className="
                inline-flex
                h-[31px]
                items-center
                gap-[9px]
                rounded-full
                bg-[#ef3d61]
                px-[14px]
              "
            >
              <span
                className="
                  h-[7px]
                  w-[7px]
                  shrink-0
                  rounded-full
                  bg-white
                "
              />

              <span
                className="
                  font-dm-sans
                  text-[13px]
                  font-semibold
                  leading-none
                  tracking-[-0.01em]
                  text-white
                "
              >
                Why Choose This Destination
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2
            className="
              mx-auto
              max-w-[620px]
              text-center
              font-dm-sans
              text-[40px]
              font-medium
              leading-[1.08]
              tracking-[-0.045em]
              text-[#202b3c]
              sm:text-[46px]
              lg:mx-0
              lg:text-[48px]
              xl:text-[50px]
            "
          >
            Why choose the UK for
            <br />
            your studies?
          </h2>

          {/* Cards */}
          <div className="mt-[38px] flex flex-col gap-[24px]">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="
                  flex
                  min-h-[120px]
                  w-full
                  items-center
                  gap-[24px]
                  rounded-[24px]
                  bg-white
                  px-[24px]
                  py-[24px]
                  transition-all
                  duration-300
                  hover:-translate-y-[2px]
                  hover:shadow-[0_12px_35px_rgba(32,43,60,0.07)]
                  sm:px-[24px]
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-[48px]
                    w-[48px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#ef3d61]
                  "
                >
                  <Star
                    aria-hidden="true"
                    className="h-[23px] w-[23px] text-white"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Card content */}
                <div className="min-w-0 flex-1">
                  <h3
                    className="
                      font-dm-sans
                      text-[18px]
                      font-semibold
                      leading-[1.3]
                      tracking-[-0.025em]
                      text-[#202b3c]
                      sm:text-[19px]
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                      mt-[5px]
                      max-w-[540px]
                      font-dm-sans
                      text-[14px]
                      font-normal
                      leading-[1.5]
                      tracking-[-0.005em]
                      text-[#697386]
                    "
                  >
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