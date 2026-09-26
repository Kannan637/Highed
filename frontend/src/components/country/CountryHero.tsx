import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Star,
} from "lucide-react";

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
  "/images/reviews/review-1.jpg",
  "/images/reviews/review-2.jpg",
  "/images/reviews/review-3.jpg",
  "/images/reviews/review-4.jpg",
];

export const CountryHero = ({ country }: CountryHeroProps) => {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-[#172D67] text-white md:min-h-[680px] lg:min-h-[720px] tracking-tight-5 [letter-spacing:var(--tracking-tight-5)] [&_*]:[letter-spacing:var(--tracking-tight-5)]">
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

          {/* Strong left-side gradient */}


          {/* Bottom gradient */}

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
          <EyebrowBadge className="mb-7">
            Trusted by 10,000+ students
          </EyebrowBadge>

          {/* =====================================================
              HEADING
          ====================================================== */}
          <h1 className="max-w-[760px] text-white">
            {country.title}
          </h1>

          {/* =====================================================
              DESCRIPTION
          ====================================================== */}
          <p className="mt-6 max-w-[700px] text-white/90">
            {country.tagline}
          </p>

          {/* =====================================================
              CTA BUTTONS
          ====================================================== */}
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            {/* Primary CTA */}
            <LeadCTAButton
              source={`country_hero_${country.slug}`}
            >
              Book Free Counselling
            </LeadCTAButton>

            {/* Secondary CTA */}
            <Link
              href={`/study-in/${country.slug}/explore?type=universities`}
              className={cn(
                buttonVariants({ variant: "inverse", size: "lg" }),
                "group border-white/80 hover:bg-white hover:text-brand-primary"
              )}
            >
              <span>Explore Universities</span>
              <ArrowRight
                size={18}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
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

              <span className="text-body-small font-medium text-white sm:text-body">
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