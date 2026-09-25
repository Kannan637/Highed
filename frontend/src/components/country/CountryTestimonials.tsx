"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGsap } from "@/hooks/useGsap";
import {
  ArrowLeft,
  ArrowRight,
  Play,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import EyebrowBadge from "@/components/ui/EyebrowBadge";

/* =========================================================
   TYPES
========================================================= */

interface Testimonial {
  id: number;
  name: string;
  university: string;
  country: string;
  image: string;
  rating: number;
  quote: string;
}

/* =========================================================
   DATA
========================================================= */

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mrs. Lakshmi N.",
    university: "TU Munich",
    country: "Germany",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=85",
    rating: 5,
    quote:
      "My son got admission to TU Munich — one of the best technical universities in the world with zero tuition fees. The German pathways seemed complicated with all the APS and blocked account requirements, but HighEd guided us through each step. Highly recommend for anyone considering Germany.",
  },
  {
    id: 2,
    name: "Ananya S",
    university: "University of Toronto",
    country: "Canada",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=85",
    rating: 5,
    quote:
      "From IELTS prep to final departure — they handled everything. My parents were especially worried about safety and accommodation, but HighEd even connected me with seniors already studying there. Now I'm in my second semester at UofT and loving every moment.",
  },
  {
    id: 3,
    name: "Arjun V",
    university: "Trinity College Dublin",
    country: "Ireland",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
    rating: 5,
    quote:
      "Two words: Life changing. I had a 3-year gap after my B.Tech and every other consultant told me it would be a problem. HighEd helped me build a strong profile with certifications and projects. Today I'm at Trinity College with a 50% scholarship. If they can do it for me, they can do it for anyone.",
  },
  {
    id: 4,
    name: "Priya K",
    university: "University of Melbourne",
    country: "Australia",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=85",
    rating: 5,
    quote:
      "HighEd made the entire Australia application process simple. From choosing the right university to preparing my visa documents, I always knew what the next step was.",
  },
  {
    id: 5,
    name: "Rahul M",
    university: "University of Birmingham",
    country: "United Kingdom",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
    rating: 5,
    quote:
      "The guidance I received throughout my UK application was extremely structured. The team helped me compare courses, universities and scholarships before I made my decision.",
  },
  {
    id: 6,
    name: "Sneha R",
    university: "Technical University of Munich",
    country: "Germany",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=85",
    rating: 5,
    quote:
      "I was confused about studying in Germany because of the documentation and application process. HighEd gave me a clear roadmap and helped me complete every important step.",
  },
];

/* =========================================================
   MATERIAL 3 — TESTIMONIAL CARD
========================================================= */

function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "group flex flex-col justify-between overflow-hidden !p-0 shadow-md",
        className
      )}
    >
      {/* =================================================
          IMAGE
      ================================================= */}

      <div className="relative px-5 pt-5 sm:px-6 sm:pt-6 md:px-7">
        <div
          className="
            relative
            mx-auto
            aspect-[0.82]
            max-w-[220px]
            sm:max-w-[260px]
            md:max-w-[300px]
            overflow-hidden
            rounded-[110px]
            sm:rounded-[130px]
            md:rounded-[150px]
            bg-[#eef0f4]
          "
        >
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="
              object-cover
              object-center
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.03]
            "
          />

          {/* =================================================
              PLAY BUTTON
          ================================================= */}

          <button
            type="button"
            aria-label={`Play ${testimonial.name}'s story`}
            className="
              absolute
              bottom-5
              left-1/2
              flex
              min-h-12
              -translate-x-1/2
              items-center
              justify-center
              gap-2
              rounded-full
              bg-brand-accent
              px-6
              font-dm-sans
              text-sm
              font-medium
              text-white
              shadow-[0_2px_4px_rgba(0,0,0,0.18)]
              transition-all
              duration-200
              hover:scale-[1.03]
              active:scale-[0.98]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-brand-accent
              focus-visible:ring-offset-2
              motion-reduce:transition-none
            "
          >
            <Play
              size={16}
              fill="currentColor"
              strokeWidth={0}
              aria-hidden="true"
            />

            <span>Play</span>
          </button>
        </div>
      </div>

      {/* =================================================
          RATING
      ================================================= */}

      <div className="flex justify-center pt-5">
        <div
          className="
            inline-flex
            min-h-8
            items-center
            gap-1.5
            rounded-full
            bg-[#f5f5f5]
            px-3
            text-caption
            font-medium
            text-content-secondary
          "
        >
          <Star
            size={14}
            fill="#EAB308"
            strokeWidth={0}
            aria-hidden="true"
          />

          <span>{testimonial.rating}</span>
        </div>
      </div>

      {/* =================================================
          QUOTE
      ================================================= */}

      <div className="px-7 pb-7 pt-4 md:px-8">
        <p className="mx-auto max-w-[310px] text-center text-body-small font-medium text-content-primary">
          &quot;{testimonial.quote}&quot;
        </p>
      </div>

      {/* =================================================
          STUDENT DETAILS
      ================================================= */}

      <div
        className="
          border-t
          border-black/[0.08]
          px-6
          py-5
          text-center
        "
      >
        <h3 className="card-title text-content-primary">
          {testimonial.name}
        </h3>

        {/* UNIVERSITY */}

        <p className="mt-2 text-caption font-medium text-content-secondary">
          {testimonial.university}, {testimonial.country}
        </p>
      </div>
    </Card>
  );
}

/* =========================================================
   MATERIAL 3 — ICON BUTTON
========================================================= */

function CarouselButton({
  direction,
  onClick,
  label,
  desktop = false,
}: {
  direction: "previous" | "next";
  onClick: () => void;
  label: string;
  desktop?: boolean;
}) {
  const Icon =
    direction === "previous" ? ArrowLeft : ArrowRight;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`
        ${desktop
          ? "absolute top-1/2 hidden -translate-y-1/2 lg:flex"
          : "flex h-12 w-12"
        }

        ${direction === "previous"
          ? desktop
            ? "-left-4 -translate-x-full"
            : ""
          : desktop
            ? "-right-4 translate-x-full"
            : ""
        }

        z-20
        items-center
        justify-center
        rounded-full

        ${desktop
          ? "text-brand-accent"
          : "border border-black/10 text-brand-primary"
        }

        transition-all
        duration-200

        ${desktop
          ? "hover:scale-110"
          : "hover:bg-brand-primary hover:text-white"
        }

        active:scale-95

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#253A7B]
        focus-visible:ring-offset-2

        motion-reduce:transition-none
      `}
    >
      <Icon
        size={desktop ? 22 : 18}
        strokeWidth={desktop ? 1.7 : 2}
        aria-hidden="true"
      />
    </button>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function StudentTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const cardsContainerRef =
    useRef<HTMLDivElement>(null);
  const mobileContainerRef =
    useRef<HTMLDivElement>(null);

  const handleMobileScroll = (dir: "previous" | "next") => {
    if (!mobileContainerRef.current) return;
    const scrollAmount = mobileContainerRef.current.clientWidth * 0.85;
    mobileContainerRef.current.scrollBy({
      left: dir === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  /* =======================================================
     MATERIAL 3 MOTION
  ======================================================= */

  useGsap(
    () => {
      if (!cardsContainerRef.current) return;

      gsap.fromTo(
        cardsContainerRef.current.children,
        {
          opacity: 0,
          x: 32 * direction,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.45,
          stagger: 0.06,
          ease: "power2.out",
        }
      );
    },
    [activeIndex, direction],
    cardsContainerRef
  );

  /* =======================================================
     VISIBLE CARDS
  ======================================================= */

  const visibleTestimonials = testimonials.slice(
    activeIndex,
    activeIndex + 3
  );

  /* =======================================================
     PREVIOUS
  ======================================================= */

  const handlePrevious = () => {
    setDirection(-1);

    setActiveIndex((current) => {
      if (current === 0) {
        return testimonials.length - 3;
      }

      return current - 1;
    });
  };

  /* =======================================================
     NEXT
  ======================================================= */

  const handleNext = () => {
    setDirection(1);

    setActiveIndex((current) => {
      if (current >= testimonials.length - 3) {
        return 0;
      }

      return current + 1;
    });
  };

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        py-20
        md:py-24
        lg:py-28
      "
    >
      {/* =================================================
          12 COLUMN MATERIAL 3 CONTAINER
      ================================================= */}

      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1440px]
          grid-cols-12
          gap-x-5
          px-5
          sm:px-8
          md:px-10
          lg:px-12
          xl:px-16
        "
      >
        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <header
          className="
            col-span-12
            flex
            flex-col
            items-center
            text-center
          "
        >
          {/* EYEBROW */}

          <EyebrowBadge>Real Stories</EyebrowBadge>

          {/* HEADING */}

          <h2 className="mt-6 max-w-[720px] text-content-primary">
            Real Student Stories, Real
            <br />
            Study Abroad Success
          </h2>
        </header>

        {/* =================================================
            CAROUSEL
        ================================================= */}

        <div
          className="
            relative
            col-span-12
            mt-14
            md:mt-16
            lg:mt-20
          "
        >
          {/* DESKTOP PREVIOUS */}

          <CarouselButton
            direction="previous"
            onClick={handlePrevious}
            label="Previous student stories"
            desktop
          />

          {/* MOBILE CAROUSEL */}
          <div
            ref={mobileContainerRef}
            className="
              flex
              lg:hidden
              gap-4
              overflow-x-auto
              snap-x
              snap-mandatory
              scrollbar-none
              pb-4
              px-1
            "
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                className="w-[82vw] max-w-[320px] shrink-0 snap-center"
              />
            ))}
          </div>

          {/* DESKTOP GRID */}
          <div
            ref={cardsContainerRef}
            className="
              hidden
              lg:grid
              grid-cols-12
              gap-5
            "
          >
            {visibleTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                className="col-span-4"
              />
            ))}
          </div>

          {/* DESKTOP NEXT */}

          <CarouselButton
            direction="next"
            onClick={handleNext}
            label="Next student stories"
            desktop
          />
        </div>

        {/* =================================================
            MOBILE CONTROLS
        ================================================= */}

        <div
          className="
            col-span-12
            mt-6
            flex
            items-center
            justify-center
            gap-3
            lg:hidden
          "
        >
          <CarouselButton
            direction="previous"
            onClick={() => handleMobileScroll("previous")}
            label="Previous student stories"
          />

          <CarouselButton
            direction="next"
            onClick={() => handleMobileScroll("next")}
            label="Next student stories"
          />
        </div>

        {/* =================================================
            CTA
        ================================================= */}

        <div
          className="
            col-span-12
            mt-14
            flex
            justify-center
            md:mt-16
          "
        >
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="group border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-content-inverse"
          >
            <span>Explore More Stories</span>

            <span
              className="
                flex
                items-center
                justify-center
                transition-transform
                duration-200
                group-hover:translate-x-1
              "
            >
              <ArrowRight
                size={19}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}