import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Star,
} from "lucide-react";

import { Country } from "@/types/country";
import Container from "@/components/ui/Container";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

interface CountryHeroProps {
  country: Country;
}

const reviewAvatars = [
  "/images/reviews/review-1.jpg",
  "/images/reviews/review-2.jpg",
  "/images/reviews/review-3.jpg",
  "/images/reviews/review-4.jpg",
];

export const CountryHero = ({ country }: CountryHeroProps) => {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-[#172D67] text-white md:min-h-[680px] lg:min-h-[720px]">
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================== */}
      {country.heroImage && (
        <div className="absolute inset-0">
          <Image
            src={country.heroImage}
            alt={`Study in ${country.name}`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Overall image overlay */}
          <div className="absolute inset-0 bg-[#10285F]/25" />

          {/* Strong left-side gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#172F70] via-[#1E4B9A]/90 via-45% to-transparent" />

          {/* Bottom gradient */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}

      {/* =========================================================
          CONTENT
      ========================================================== */}
      <Container
        size="lg"
        className="relative z-10 flex min-h-[620px] items-center md:min-h-[680px] lg:min-h-[720px]"
      >
        <div className="w-full max-w-[760px] pt-12 md:pt-16 lg:pt-20">
          {/* =====================================================
              TRUST BADGE
          ====================================================== */}
          <div className="mb-7 inline-flex items-center rounded-full bg-[#F43F68] px-4 py-2 text-sm font-medium leading-none text-white shadow-lg shadow-black/10">
            <span>
              Trusted by{" "}
              <span className="font-bold">10,000+</span> students
            </span>

            <span
              aria-hidden="true"
              className="ml-2 text-lg leading-none"
            >
              ↗
            </span>
          </div>

          {/* =====================================================
              HEADING
          ====================================================== */}
          <h1
            className="
              max-w-[760px]
              font-sans
              text-[42px]
              font-medium
              leading-[1.02]
              tracking-[-0.045em]
              text-white
              sm:text-[52px]
              md:text-[60px]
              lg:text-[64px]
              xl:text-[68px]
            "
          >
            {country.title}
          </h1>

          {/* =====================================================
              DESCRIPTION
          ====================================================== */}
          <p
            className="
              mt-6
              max-w-[700px]
              font-sans
              text-[15px]
              font-normal
              leading-[1.55]
              tracking-[-0.01em]
              text-white/85
              sm:text-base
              md:text-[17px]
            "
          >
            {country.tagline}
          </p>

          {/* =====================================================
              CTA BUTTONS
          ====================================================== */}
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            {/* Primary CTA */}
            <LeadCTAButton
              source={`country_hero_${country.slug}`}
              variant="accent"
              size="lg"
              className="
                h-12
                rounded-full
                bg-[#F43F68]
                px-6
                font-sans
                text-sm
                font-medium
                text-white
                shadow-lg
                shadow-[#F43F68]/20
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#E9355D]
                sm:h-13
                sm:px-7
              "
            >
              <span>Get Free Counselling</span>

              <ArrowRight
                size={19}
                strokeWidth={2}
                className="ml-1"
              />
            </LeadCTAButton>

            {/* Secondary CTA */}
            <Link
              href={`/study-in/${country.slug}/explore?type=universities`}
              className="
                group
                inline-flex
                h-12
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-white/80
                bg-white/5
                px-6
                font-sans
                text-sm
                font-medium
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:bg-white
                hover:text-[#172F70]
                sm:h-13
                sm:px-7
              "
            >
              <span>Explore Universities</span>

              <ArrowRight
                size={18}
                strokeWidth={2}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>

          {/* =====================================================
              REVIEW ROW
          ====================================================== */}
          <div className="mt-9 flex items-center gap-3">
            {/* Avatar stack */}
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

            {/* Rating */}
            <div className="flex items-center gap-2">
              <Star
                size={17}
                fill="#FFD83D"
                strokeWidth={0}
                className="shrink-0"
              />

              <span className="font-sans text-sm font-medium text-white sm:text-base">
                4.9 review in Google
              </span>
            </div>
          </div>
        </div>
      </Container>

      {/* =========================================================
          DECORATIVE ORBIT
          Optional visual element similar to reference
      ========================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[5%]
          top-[18%]
          hidden
          h-[260px]
          w-[420px]
          rounded-[50%]
          border
          border-white/80
          rotate-[-9deg]
          lg:block
          xl:h-[300px]
          xl:w-[500px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[1%]
          top-[38%]
          hidden
          h-[180px]
          w-[420px]
          rounded-[50%]
          border
          border-white/60
          rotate-[-8deg]
          lg:block
          xl:w-[520px]
        "
      />
    </section>
  );
};

export default CountryHero;