"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import { ArrowRight, Star } from "lucide-react";

import { Country } from "@/types/country";
import Container from "@/components/ui/Container";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import EyebrowBadge from "@/components/ui/EyebrowBadge";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface CountryHeroProps {
  country: Country;
}

const reviewAvatars = [
  "/images/stories/story-1.webp",
  "/images/stories/story-2.webp",
  "/images/stories/story-3.webp",
  "/images/stories/story-4.webp",
];

const countryBgMap: Record<string, string> = {
  usa: "/images/Study In/USA Bg.webp",
  uk: "/images/Study In/United Kingdom Bg.webp",
  canada: "/images/Study In/Canada Bg.webp",
  australia: "/images/Study In/Australia map.webp",
  germany: "/images/Study In/Germany Bg.webp",
  ireland: "/images/Study In/Ireland Bg.webp",
  dubai: "/images/Study In/United Arab Emirates bg.webp",
  uae: "/images/Study In/United Arab Emirates bg.webp",
  "new-zealand": "/images/Study In/New Zealand Bg.webp",
  newzealand: "/images/Study In/New Zealand Bg.webp",
};

function getCountryBg(country: Country): string {
  const slug = country.slug?.toLowerCase();
  if (slug && countryBgMap[slug]) return countryBgMap[slug];

  const name = country.name?.toLowerCase() || "";
  if (name.includes("usa") || name.includes("united states") || name.includes("america")) {
    return "/images/Study In/USA Bg.webp";
  }
  if (name.includes("uk") || name.includes("kingdom") || name.includes("britain")) {
    return "/images/Study In/United Kingdom Bg.webp";
  }
  if (name.includes("canada")) return "/images/Study In/Canada Bg.webp";
  if (name.includes("australia")) return "/images/Study In/Australia map.webp";
  if (name.includes("germany")) return "/images/Study In/Germany Bg.webp";
  if (name.includes("ireland")) return "/images/Study In/Ireland Bg.webp";
  if (name.includes("emirates") || name.includes("dubai") || name.includes("uae")) {
    return "/images/Study In/United Arab Emirates bg.webp";
  }
  if (name.includes("zealand")) return "/images/Study In/New Zealand Bg.webp";

  return country.heroImage || "/images/hero/pngwing.com (9).webp";
}

const countries = [
  { code: "GB", name: "United Kingdom" },
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  { code: "DE", name: "Germany" },
  { code: "IE", name: "Ireland" },
];

function CountryFlags() {
  return (
    <div
      className="
        flex
        h-8
        items-center
        justify-center
        rounded-full
        bg-white
        px-2.5
        text-[11px]
        font-medium
        leading-none
        text-[#253A7B]
      "
    >
      <div className="flex items-center">
        {countries.map((country, index) => (
          <ReactCountryFlag
            key={country.code}
            countryCode={country.code}
            svg
            title={country.name}
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              objectFit: "cover",
              marginLeft: index === 0 ? "0px" : "-8px",
              position: "relative",
              zIndex: countries.length - index,
            }}
          />
        ))}
      </div>

      <span className="ml-1.5 whitespace-nowrap">7 Destinations</span>
    </div>
  );
}

export const CountryHero: React.FC<CountryHeroProps> = ({ country }) => {
  const bgImage = getCountryBg(country);

  return (
    <section
      className="
        relative
        flex
        min-h-[680px]
        w-full
        overflow-hidden
        bg-[#253A7B]
        [letter-spacing:var(--tracking-tight-5)]
        [&_*]:[letter-spacing:var(--tracking-tight-5)]
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          overflow-hidden
        "
        aria-hidden="true"
      >
        {/* Base gradient */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(180deg,#253A7B_0%,#20356F_48%,#12204C_100%)]
          "
        />

        {/* Country background map illustration */}
        {bgImage && (
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[460px]
              w-[1050px]
              -translate-x-1/2
              -translate-y-1/2

              sm:h-[540px]
              sm:w-[1250px]

              md:h-[600px]
              md:w-[1400px]

              lg:h-[650px]
              lg:w-[1550px]

              xl:h-[700px]
              xl:w-[1700px]
            "
          >
            <Image
              src={bgImage}
              alt=""
              fill
              priority
              fetchPriority="high"
              sizes="1700px"
              className="
                h-full
                w-full
                object-contain
                opacity-[0.14]
              "
            />
          </div>
        )}

        {/* Mobile readability overlay */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(180deg,rgba(37,58,123,0.96)_0%,rgba(37,58,123,0.78)_45%,rgba(18,32,76,0.3)_100%)]
            lg:hidden
          "
        />

        {/* Bottom depth vignette */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[240px]
            bg-[linear-gradient(180deg,transparent_0%,rgba(18,32,76,0.42)_100%)]
          "
        />
      </div>

      {/* =========================================================
          MAIN FOREGROUND CONTENT
      ========================================================== */}
      <div className="relative z-10 w-full overflow-hidden text-white">
        <Container
          size="lg"
          className="
            relative
            min-h-[680px]
            px-5

            sm:px-6

            lg:px-8
          "
        >
          <div
            className="
              grid
              min-h-[680px]
              grid-cols-12
              items-center
            "
          >
            {/* =====================================================
                LEFT COPY & CTAS
                Mobile: Centered
                Desktop: Left aligned
            ====================================================== */}
            <div
              className="
                relative
                z-30
                col-span-12
                flex
                flex-col
                items-center
                justify-center
                px-2
                py-14
                w-full
                max-w-[900px]
                text-center

                -translate-y-6

                sm:px-4
                sm:py-16
                sm:-translate-y-7

                lg:col-span-7
                lg:items-start
                lg:px-0
                lg:py-20
                lg:text-left
                lg:-translate-y-10
              "
            >
              {/* TRUST BADGE */}
              <div className="mb-5 sm:mb-6">
                <EyebrowBadge
                  className="
                    !before:hidden
                    !after:hidden
                    before:hidden
                    after:hidden
                  "
                >
                  Verified Study Abroad Advisory
                </EyebrowBadge>
              </div>

              {/* HEADING */}
              <h1
                className="
                  max-w-[800px]
                  text-white
                  text-balance
                "
              >
                {country.title}
              </h1>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-6
                  max-w-[720px]
                  px-2
                  text-body-large
                  text-white/90

                  sm:mt-7
                  sm:px-0

                  md:mt-8
                "
              >
                {country.tagline}
              </p>

              {/* CTA BUTTONS */}
              <div
                className="
                  relative
                  z-30
                  mt-7
                  flex
                  w-full
                  flex-col
                  items-center
                  justify-center
                  gap-3

                  sm:mt-8
                  sm:flex-row
                  sm:gap-4

                  md:mt-9

                  lg:items-start
                  lg:justify-start
                "
              >
                <LeadCTAButton
                  source={`country_hero_${country.slug}`}
                  id="cta-book-counselling"
                  className="
                    w-fit
                    max-w-[280px]

                    sm:w-auto
                    sm:max-w-none
                  "
                >
                  Book Free Counselling
                </LeadCTAButton>

                <Link
                  href={`/study-in/${country.slug}`}
                  id="cta-explore-universities"
                  className={cn(
                    buttonVariants({
                      variant: "inverse",
                      size: "default",
                    }),
                    `
                      group
                      w-fit
                      max-w-[280px]
                      border-white/30
                      bg-white/5
                      hover:border-white/60
                      hover:bg-white/10

                      sm:w-auto
                      sm:max-w-none
                    `
                  )}
                >
                  <span>Explore Universities</span>
                  <ArrowRight
                    size={18}
                    strokeWidth={2.2}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </div>

              {/* REVIEW ROW */}
              <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
                <div className="flex -space-x-2">
                  {reviewAvatars.map((avatar, index) => (
                    <div
                      key={avatar}
                      className="
                        relative
                        h-9
                        w-9
                        overflow-hidden
                        rounded-full
                        border-2
                        border-white
                        bg-white/20
                      "
                    >
                      <Image
                        src={avatar}
                        alt={`Student review ${index + 1}`}
                        fill
                        sizes="36px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <Star
                    size={17}
                    fill="#FFD83D"
                    strokeWidth={0}
                    className="shrink-0"
                  />
                  <span className="text-body-small font-medium text-white sm:text-body">
                    Verified Student Advisory
                  </span>
                </div>
              </div>
            </div>

            {/* =====================================================
                DESKTOP RIGHT VISUAL
                Matches Hero.tsx structure & floating badges
            ====================================================== */}
            <div
              className="
                relative
                col-span-12
                hidden
                min-h-[680px]

                lg:col-span-5
                lg:block
              "
            >
              {/* STUDENT IMAGE */}
              <div
                className="
                  absolute
                  bottom-0
                  left-1/2
                  z-20
                  h-[610px]
                  w-[490px]
                  -translate-x-1/2

                  xl:h-[650px]
                  xl:w-[530px]
                "
              >
                <Image
                  src="/images/Study In/ChatGPT Image Sep 14, 2026, 12_10_06 PM.webp"
                  alt={`Student studying in ${country.name}`}
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(min-width: 1280px) 530px, (min-width: 1024px) 490px, 100vw"
                  className="
                    object-contain
                    object-bottom
                  "
                />
              </div>

              {/* 500+ GLOBAL UNIVERSITY CARD */}
              <div
                className="
                  absolute
                  right-3
                  top-[180px]
                  z-20
                  w-[180px]
                  rounded-[24px]
                  bg-[#FFE59A]
                  p-4
                  text-[#253A7B]
                  shadow-[0_18px_45px_rgba(8,18,55,0.18)]

                  xl:right-0
                "
              >
                <CountryFlags />

                <div
                  className="
                    mt-3
                    text-[44px]
                    font-normal
                    leading-none
                    tracking-[-0.06em]
                  "
                >
                  7
                </div>

                <div
                  className="
                    mt-1
                    text-[14px]
                    font-medium
                    leading-tight
                  "
                >
                  Top Destinations
                </div>
              </div>

              {/* 95+ VISA SUCCESS CARD */}
              <div
                className="
                  absolute
                  bottom-[130px]
                  left-3
                  z-40
                  w-[165px]
                  rounded-[24px]
                  bg-white
                  px-5
                  py-4
                  text-[#253A7B]
                  shadow-[0_18px_45px_rgba(8,18,55,0.18)]

                  xl:left-0
                "
              >
                <div
                  className="
                    text-[44px]
                    font-normal
                    leading-none
                    tracking-[-0.06em]
                  "
                >
                  100%
                </div>

                <div
                  className="
                    mt-1
                    text-[14px]
                    font-medium
                    leading-tight
                  "
                >
                  Free Advisory
                </div>
              </div>
            </div>

            {/* =====================================================
                MOBILE VISUAL
                Rendered below content on mobile viewports
            ====================================================== */}
            <div
              className="
                relative
                col-span-12
                mx-auto
                mt-0
                block
                h-[380px]
                w-full
                max-w-[520px]

                sm:mt-[-10px]
                sm:h-[500px]

                lg:hidden
              "
            >
              {/* STUDENT IMAGE */}
              <Image
                src="/images/Study In/ChatGPT Image Sep 14, 2026, 12_10_06 PM.webp"
                alt={`Student studying in ${country.name}`}
                fill
                priority
                sizes="100vw"
                className="
                  object-contain
                  object-bottom
                "
              />

              {/* MOBILE 500+ CARD */}
              <div
                className="
                  absolute
                  right-3
                  top-12
                  z-40
                  w-[150px]
                  rounded-[20px]
                  bg-[#FFE59A]
                  p-3.5
                  text-[#253A7B]
                  shadow-[0_15px_35px_rgba(8,18,55,0.18)]

                  sm:right-6
                  sm:top-8
                "
              >
                <CountryFlags />

                <div
                  className="
                    mt-2
                    text-[34px]
                    font-normal
                    leading-none
                    tracking-[-0.06em]
                  "
                >
                  7
                </div>

                <div
                  className="
                    mt-1
                    text-[12px]
                    font-medium
                  "
                >
                  Top Destinations
                </div>
              </div>

              {/* MOBILE 95+ CARD */}
              <div
                className="
                  absolute
                  bottom-12
                  left-3
                  z-40
                  rounded-[20px]
                  bg-white
                  px-4
                  py-3
                  text-[#253A7B]
                  shadow-[0_15px_35px_rgba(8,18,55,0.18)]

                  sm:bottom-10
                  sm:left-6
                "
              >
                <div
                  className="
                    text-[32px]
                    font-semibold
                    leading-none
                    tracking-[-0.06em]
                  "
                >
                  100%
                </div>

                <div
                  className="
                    mt-1
                    text-[12px]
                    font-medium
                  "
                >
                  Free Advisory
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default CountryHero;