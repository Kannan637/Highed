
"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Compass,
  ShieldCheck,
} from "lucide-react";

import { Country } from "@/types/country";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

import { Button, buttonVariants } from "@/components/ui/Button";
import { Separator } from "@/components/ui/separator";

import { cn } from "@/lib/utils";

interface CountryScholarshipsProps {
  country: Country;
}

export const CountryScholarships: React.FC<CountryScholarshipsProps> = ({
  country,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scholarships = country?.scholarshipsList || [];
  const totalCount = scholarships.length;

  /* ============================================================
     CAROUSEL STATE
     ============================================================ */

  const updateCarouselState = useCallback(() => {
    const container = carouselRef.current;

    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    setCanScrollPrev(scrollLeft > 8);
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 8);

    const firstCard = container.firstElementChild as HTMLElement | null;

    if (!firstCard) return;

    const computedStyle = window.getComputedStyle(container);
    const gap = parseFloat(computedStyle.columnGap || "0") || 0;

    const cardWidth = firstCard.offsetWidth;

    const index = Math.round(scrollLeft / (cardWidth + gap));

    setActiveIndex(
      Math.min(Math.max(index, 0), Math.max(totalCount - 1, 0))
    );
  }, [totalCount]);

  /* ============================================================
     SCROLL TO INDEX
     ============================================================ */

  const scrollToIndex = useCallback((index: number) => {
    const container = carouselRef.current;

    if (!container) return;

    const firstCard = container.firstElementChild as HTMLElement | null;

    if (!firstCard) return;

    const computedStyle = window.getComputedStyle(container);
    const gap = parseFloat(computedStyle.columnGap || "0") || 0;

    const cardWidth = firstCard.offsetWidth;

    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });
  }, []);

  /* ============================================================
     PREVIOUS / NEXT
     ============================================================ */

  const scroll = useCallback((direction: "prev" | "next") => {
    const container = carouselRef.current;

    if (!container) return;

    const firstCard = container.firstElementChild as HTMLElement | null;

    const computedStyle = window.getComputedStyle(container);
    const gap = parseFloat(computedStyle.columnGap || "0") || 0;

    const cardWidth = firstCard
      ? firstCard.offsetWidth
      : container.clientWidth * 0.86;

    const scrollStep = cardWidth + gap;

    container.scrollBy({
      left: direction === "next" ? scrollStep : -scrollStep,
      behavior: "smooth",
    });
  }, []);

  /* ============================================================
     KEYBOARD NAVIGATION
     ============================================================ */

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scroll("prev");
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      scroll("next");
    }
  };

  /* ============================================================
     SCROLL LISTENER
     ============================================================ */

  useEffect(() => {
    updateCarouselState();

    const container = carouselRef.current;

    if (!container) return;

    container.addEventListener("scroll", updateCarouselState, {
      passive: true,
    });

    window.addEventListener("resize", updateCarouselState);

    return () => {
      container.removeEventListener("scroll", updateCarouselState);
      window.removeEventListener("resize", updateCarouselState);
    };
  }, [updateCarouselState]);

  if (!scholarships.length) {
    return null;
  }

  return (
    <section
      id="scholarships"
      className="
        w-full
        overflow-hidden
        border-t
        border-border-default
        bg-surface-neutral
        py-16
        sm:py-20
        lg:py-24
      "
    >
      <Container size="lg">
        {/* ========================================================
            HEADER
            ======================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            badge="Financial Support"
            title={`Scholarships & Grants in ${country.name} `}
            subtitle="Offset your tuition with merit-based awards, government stipends, and university waivers."
            className="text-center"
          />
        </div>

        {/* ========================================================
            NAVIGATION
            ======================================================== */}

        {totalCount > 1 && (
          <div className="mt-8 flex items-center justify-center sm:mt-10">
            <div className="flex items-center gap-4">
              <Button
                type="button"
                variant="outline"
                size="icon"
                disabled={!canScrollPrev}
                onClick={() => scroll("prev")}
                aria-label="Previous scholarship"
                className="
                  size-10
                  cursor-pointer
                  rounded-full
                  border-border-default
                  bg-surface-default
                  shadow-none
                  transition-all
                  duration-200
                  hover:border-brand-primary
                  hover:text-brand-primary
                  disabled:cursor-not-allowed
                "
              >
                <ChevronLeft
                  aria-hidden="true"
                  className="size-4"
                />
              </Button>

              <span
                className="
                  min-w-16
                  text-center
                  text-caption
                  font-medium
                  tabular-nums
                  text-content-secondary
                "
              >
                {String(activeIndex + 1).padStart(2, "0")}
                {" / "}
                {String(totalCount).padStart(2, "0")}
              </span>

              <Button
                type="button"
                variant="outline"
                size="icon"
                disabled={!canScrollNext}
                onClick={() => scroll("next")}
                aria-label="Next scholarship"
                className="
                  size-10
                  cursor-pointer
                  rounded-full
                  border-border-default
                  bg-surface-default
                  shadow-none
                  transition-all
                  duration-200
                  hover:border-brand-primary
                  hover:text-brand-primary
                  disabled:cursor-not-allowed
                "
              >
                <ChevronRight
                  aria-hidden="true"
                  className="size-4"
                />
              </Button>
            </div>
          </div>
        )}

        {/* ========================================================
            SCHOLARSHIP CAROUSEL
            ======================================================== */}

        <div
          role="region"
          aria-label={`Scholarships in ${country.name} `}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="
            mt-10
            outline-none
            focus-visible:ring-2
            focus-visible:ring-brand-primary
            focus-visible:ring-offset-4
            sm:mt-12
            lg:mt-14
          "
        >
          <div
            ref={carouselRef}
            className="
              flex
              snap-x
              snap-mandatory
              gap-4
              overflow-x-auto
              scroll-smooth
              scrollbar-none
              px-1
              py-2
              touch-pan-x
              sm:gap-5
            "
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            {scholarships.map((scholarship, index) => (
              <Card
                key={`${scholarship.name} -${index} `}
                className={cn(
                  /* Layout */
                  "group flex shrink-0 snap-start flex-col",

                  /* Mobile */
                  "w-[86vw] min-w-[280px] max-w-[360px]",

                  /* Tablet */
                  "sm:w-[calc(50%-10px)] sm:max-w-none",

                  /* Desktop */
                  "lg:w-[calc(33.333%-13.333px)]",

                  /* Global design system */
                  "rounded-[var(--radius-card)]",
                  "border-border-card",
                  "bg-surface-default",

                  /* Elevation */
                  "shadow-card-resting",

                  /* Interaction */
                  "transition-all",
                  "duration-[var(--duration-normal)]",
                  "ease-[var(--easing-default)]",

                  "hover:border-brand-primary/20",
                  "hover:shadow-card-hover"
                )}
              >
                {/* ==================================================
                    CARD HEADER
                    ================================================== */}

                <CardHeader className="space-y-5 p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    {/* Award icon */}

                    <div
                      className="
                        flex
                        size-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-[var(--radius-icon)]
                        bg-icon-bg-gold
                        text-brand-gold
                      "
                    >
                      <Award
                        aria-hidden="true"
                        className="size-5"
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* Scholarship label */}

                    <span
                      className="
                        pt-1
                        text-caption
                        font-medium
                        uppercase
                        tracking-[0.04em]
                        text-content-muted
                      "
                    >
                      Scholarship
                    </span>
                  </div>

                  {/* Amount */}

                  <div>
                    <p
                      className="
                        text-caption
                        font-medium
                        text-content-secondary
                      "
                    >
                      Award Amount
                    </p>

                    <p
                      className="
                        mt-1
                        text-h5
                        text-brand-primary
                      "
                    >
                      {scholarship.amount}
                    </p>
                  </div>

                  {/* Title */}

                  <CardTitle
                    className="
                      line-clamp-2
                      text-h5
                      text-content-primary
                    "
                  >
                    {scholarship.name}
                  </CardTitle>
                </CardHeader>

                {/* ==================================================
                    CARD CONTENT
                    ================================================== */}

                <CardContent className="flex-1 px-6 pb-6 sm:px-7 sm:pb-7">
                  <div
                    className="
                      rounded-[16px]
                      border
                      border-border-light
                      bg-surface-neutral
                    "
                  >
                    {/* Eligibility */}

                    <div className="flex items-start gap-3.5 p-4">
                      <div
                        className="
                          mt-0.5
                          flex
                          size-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-[var(--radius-icon)]
                          bg-icon-bg-success
                          text-feedback-success
                        "
                      >
                        <CheckCircle2
                          aria-hidden="true"
                          className="size-4"
                          strokeWidth={1.8}
                        />
                      </div>

                      <div className="min-w-0">
                        <p
                          className="
                            text-caption
                            font-medium
                            text-content-secondary
                          "
                        >
                          Eligibility
                        </p>

                        <p
                          className="
                            mt-1
                            line-clamp-3
                            text-body-small
                            text-content-primary
                          "
                        >
                          {scholarship.eligibility}
                        </p>
                      </div>
                    </div>

                    <Separator className="bg-border-light" />

                    {/* Coverage */}

                    <div className="flex items-start gap-3.5 p-4">
                      <div
                        className="
                          mt-0.5
                          flex
                          size-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-[var(--radius-icon)]
                          bg-icon-bg-primary
                          text-brand-primary
                        "
                      >
                        <ShieldCheck
                          aria-hidden="true"
                          className="size-4"
                          strokeWidth={1.8}
                        />
                      </div>

                      <div className="min-w-0">
                        <p
                          className="
                            text-caption
                            font-medium
                            text-content-secondary
                          "
                        >
                          Coverage
                        </p>

                        <p
                          className="
                            mt-1
                            line-clamp-3
                            text-body-small
                            text-content-primary
                          "
                        >
                          {scholarship.coverage}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>

                {/* ==================================================
                    CARD FOOTER
                    ================================================== */}

                <CardFooter className="border-t border-border-light p-0">
                  <div className="w-full p-5 sm:p-6">
                    <LeadCTAButton
                      source={`country_scholarship_${country.slug} `}
                      variant="ghost"
                      size="sm"
                      className="
                        group/cta
                        flex
                        w-full
                        cursor-pointer
                        items-center
                        justify-between
                        rounded-[var(--radius-btn)]
                        px-3
                        py-2.5
                        text-btn
                        text-brand-primary
                        transition-colors
                        duration-[var(--duration-fast)]
                        hover:bg-surface-brand-light
                        hover:text-brand-primary
                      "
                    >
                      <span>Check Qualification</span>

                      <span
                        className="
                          flex
                          size-8
                          items-center
                          justify-center
                          rounded-full
                          bg-icon-bg-primary
                          text-brand-primary
                          transition-all
                          duration-[var(--duration-fast)]
                          group-hover/cta:bg-brand-primary
                          group-hover/cta:text-content-inverse
                        "
                      >
                        <ArrowRight
                          aria-hidden="true"
                          className="
                            size-4
                            transition-transform
                            duration-[var(--duration-fast)]
                            group-hover/cta:translate-x-0.5
                          "
                          strokeWidth={1.8}
                        />
                      </span>
                    </LeadCTAButton>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* ========================================================
            MOBILE PAGINATION
            ======================================================== */}

        {totalCount > 1 && (
          <div className="mt-6 flex justify-center sm:hidden">
            <div
              className="flex items-center gap-1"
              role="tablist"
              aria-label="Scholarship carousel pagination"
            >
              {scholarships.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === index}
                  aria-label={`Go to scholarship ${index + 1} `}
                  onClick={() => scrollToIndex(index)}
                  className="
                    flex
                    min-h-9
                    min-w-9
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-full
                  "
                >
                  <span
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-200",
                      activeIndex === index
                        ? "w-6 bg-brand-primary"
                        : "w-1.5 bg-content-muted/30"
                    )}
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================
            EXPLORE ALL & SCHOLARSHIP FINDER TOOL
            ======================================================== */}

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:mt-12">
          <Link
            href={`/study-in/${country.slug}/explore?type=scholarships`}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "group flex h-12 w-full max-w-[360px] cursor-pointer items-center justify-center gap-2.5 rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-brand-primary shadow-none transition-all hover:border-brand-primary hover:bg-brand-primary/5 sm:w-auto sm:max-w-none"
            )}
          >
            <Compass
              aria-hidden="true"
              className="size-4 text-brand-primary"
              strokeWidth={1.8}
            />

            <span>
              Explore {country.name} Scholarships
            </span>

            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </Link>

          <Link
            href="/tools/scholarship-finder"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "group flex h-12 w-full max-w-[360px] cursor-pointer items-center justify-center gap-2.5 rounded-full border border-brand-accent/20 bg-brand-accent/5 px-6 text-sm font-semibold text-brand-accent shadow-none transition-all hover:border-brand-accent hover:bg-brand-accent/10 sm:w-auto sm:max-w-none"
            )}
          >
            <Award
              aria-hidden="true"
              className="size-4 text-brand-accent"
              strokeWidth={1.8}
            />

            <span>
              Match Profile on Scholarship Finder
            </span>

            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CountryScholarships