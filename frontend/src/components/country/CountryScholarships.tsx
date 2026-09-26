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

import { Badge } from "@/components/ui/Badge";
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

  /**
   * Update carousel state
   */
  const updateCarouselState = useCallback(() => {
    const container = carouselRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    setCanScrollPrev(scrollLeft > 8);
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 8);

    const firstCard = container.firstElementChild as HTMLElement | null;
    if (!firstCard) return;

    const gap = 16;
    const cardWidth = firstCard.offsetWidth;
    const index = Math.round(scrollLeft / (cardWidth + gap));

    setActiveIndex(
      Math.min(Math.max(index, 0), Math.max(totalCount - 1, 0))
    );
  }, [totalCount]);

  /**
   * Scroll to specific slide
   */
  const scrollToIndex = useCallback(
    (index: number) => {
      const container = carouselRef.current;
      if (!container) return;

      const firstCard = container.firstElementChild as HTMLElement | null;
      if (!firstCard) return;

      const gap = 16;
      const cardWidth = firstCard.offsetWidth;

      container.scrollTo({
        left: index * (cardWidth + gap),
        behavior: "smooth",
      });
    },
    []
  );

  /**
   * Next / Prev button handler
   */
  const scroll = useCallback(
    (direction: "prev" | "next") => {
      const container = carouselRef.current;
      if (!container) return;

      const firstCard = container.firstElementChild as HTMLElement | null;
      const cardWidth = firstCard ? firstCard.offsetWidth : container.clientWidth * 0.85;
      const gap = 16;
      const scrollStep = cardWidth + gap;

      container.scrollBy({
        left: direction === "next" ? scrollStep : -scrollStep,
        behavior: "smooth",
      });
    },
    []
  );

  /**
   * Keyboard accessibility
   */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scroll("prev");
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scroll("next");
    }
  };

  /**
   * Sync scroll listener
   */
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

  if (!scholarships.length) return null;

  return (
    <section
      id="scholarships"
      className="border-t border-border/60 bg-surface-neutral/60 py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      <Container size="lg">
        {/* =====================================================
            HEADER + DESKTOP CONTROLS
        ===================================================== */}
        <div className="mb-8 flex flex-col gap-6 sm:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionHeading
              badge="Financial Support"
              title={`Scholarships & Grants in ${country.name}`}
              subtitle="Offset your tuition with merit-based awards, government stipends, and university waivers."
              className="text-left"
            />
          </div>

          {/* Desktop Controls */}
          {totalCount > 1 && (
            <div className="hidden items-center gap-3 sm:flex">
              <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {activeIndex + 1} / {totalCount}
              </span>

              <Button
                type="button"
                variant="outline"
                size="icon"
                disabled={!canScrollPrev}
                onClick={() => scroll("prev")}
                aria-label="Previous scholarship"
                className="size-10 rounded-full cursor-pointer"
              >
                <ChevronLeft className="size-4" />
              </Button>

              <Button
                type="button"
                variant="outline"
                size="icon"
                disabled={!canScrollNext}
                onClick={() => scroll("next")}
                aria-label="Next scholarship"
                className="size-10 rounded-full cursor-pointer"
              >
                <ChevronRight className="size-4" />
              </Button>
            </div>
          )}
        </div>

        {/* =====================================================
            CAROUSEL TRACK
        ===================================================== */}
        <div
          role="region"
          aria-label={`Scholarships in ${country.name}`}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="relative outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/20 focus-visible:ring-offset-4"
        >
          <div
            ref={carouselRef}
            className={cn(
              "flex gap-4 overflow-x-auto scroll-smooth",
              "snap-x snap-mandatory",
              "scrollbar-none",
              "px-1 py-2",
              "touch-pan-x"
            )}
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            {scholarships.map((scholarship, index) => (
              <Card
                key={`${scholarship.name}-${index}`}
                className={cn(
                  "group flex shrink-0 snap-start flex-col",
                  "rounded-2xl border-border/70 bg-background",
                  "shadow-xs transition-all duration-300",
                  "hover:-translate-y-1 hover:shadow-md",
                  // Mobile peeking card width
                  "w-[84vw] min-w-[270px] max-w-[340px]",
                  // Tablet
                  "sm:w-[calc(50%-8px)] sm:max-w-none",
                  // Desktop
                  "lg:w-[calc(33.333%-11px)]"
                )}
              >
                {/* CARD HEADER */}
                <CardHeader className="space-y-4 p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <Badge
                      variant="secondary"
                      className="gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800"
                    >
                      <Award className="size-3.5 text-amber-600" />
                      <span>{scholarship.amount}</span>
                    </Badge>

                    <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      Scholarship
                    </span>
                  </div>

                  <CardTitle className="line-clamp-2 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                    {scholarship.name}
                  </CardTitle>
                </CardHeader>

                {/* CARD CONTENT */}
                <CardContent className="flex-1 space-y-4 p-5 pt-0 sm:p-6 sm:pt-0">
                  <div className="space-y-3 rounded-xl bg-muted/40 p-3.5">
                    {/* Eligibility */}
                    <div className="flex items-start gap-3">
                      <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                        <CheckCircle2 className="size-3.5" />
                      </div>
                      <div className="min-w-0">
                        <p className="mb-0.5 text-xs font-semibold text-foreground">
                          Eligibility
                        </p>
                        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                          {scholarship.eligibility}
                        </p>
                      </div>
                    </div>

                    <Separator />

                    {/* Coverage */}
                    <div className="flex items-start gap-3">
                      <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                        <ShieldCheck className="size-3.5" />
                      </div>
                      <div className="min-w-0">
                        <p className="mb-0.5 text-xs font-semibold text-foreground">
                          Coverage
                        </p>
                        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                          {scholarship.coverage}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>

                {/* CARD FOOTER */}
                <CardFooter className="flex-col p-0">
                  <Separator />
                  <div className="w-full p-4 sm:p-5">
                    <LeadCTAButton
                      source={`country_scholarship_${country.slug}`}
                      variant="ghost"
                      size="sm"
                      className={cn(
                        "group/cta flex w-full items-center justify-between",
                        "rounded-xl px-3 py-2.5",
                        "font-semibold text-brand-primary",
                        "hover:bg-brand-primary/5",
                        "hover:text-brand-accent cursor-pointer"
                      )}
                    >
                      <span>Check Qualification</span>
                      <span className="flex size-8 items-center justify-center rounded-full bg-brand-primary/10 transition-transform duration-300 group-hover/cta:translate-x-0.5">
                        <ArrowRight className="size-4" />
                      </span>
                    </LeadCTAButton>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* =====================================================
            MOBILE CONTROLS (Dots + Next/Prev)
        ===================================================== */}
        {totalCount > 1 && (
          <div className="mt-6 flex items-center justify-between gap-4 sm:hidden">
            {/* Pagination Dots */}
            <div
              className="flex items-center gap-1.5"
              role="tablist"
              aria-label="Scholarship carousel pagination"
            >
              {scholarships.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === index}
                  aria-label={`Go to scholarship ${index + 1}`}
                  onClick={() => scrollToIndex(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300 cursor-pointer",
                    activeIndex === index
                      ? "w-6 bg-brand-accent shadow-xs"
                      : "w-2 bg-muted-foreground/25 hover:bg-muted-foreground/40"
                  )}
                />
              ))}
            </div>

            {/* Mobile Navigation Buttons */}
            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                disabled={!canScrollPrev}
                onClick={() => scroll("prev")}
                aria-label="Previous scholarship"
                className="size-9 rounded-full cursor-pointer"
              >
                <ChevronLeft className="size-4" />
              </Button>

              <span className="min-w-10 text-center text-xs font-semibold text-muted-foreground">
                {activeIndex + 1} / {totalCount}
              </span>

              <Button
                type="button"
                variant="outline"
                size="icon"
                disabled={!canScrollNext}
                onClick={() => scroll("next")}
                aria-label="Next scholarship"
                className="size-9 rounded-full cursor-pointer"
              >
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>
        )}

        {/* =====================================================
            EXPLORE ALL
        ===================================================== */}
        <div className="mt-8 flex justify-center sm:mt-12">
          <Link
            href={`/study-in/${country.slug}/explore?type=scholarships`}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "group flex h-auto min-h-12 w-full max-w-[560px] items-center justify-center gap-2 rounded-xl px-4 py-3 text-center text-sm sm:w-auto sm:px-6 cursor-pointer"
            )}
          >
            <Compass className="size-4 text-brand-primary" />
            <span className="text-center text-sm font-semibold">
              Explore All Scholarships & Application Deadlines
            </span>
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CountryScholarships;
