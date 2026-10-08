"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  MapPin,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const destinations = [
  "USA",
  "UK",
  "Canada",
  "Australia",
  "Germany",
  "Ireland",
  "Dubai",
];

const milestones = [
  {
    year: "2015",
    title: "The beginning",
    text: "A simple idea began with one goal — make international education transparent, accessible, and easier to understand for Tamil Nadu students.",
  },
  {
    year: "2018",
    title: "Growing the vision",
    text: "Our counselling reach expanded across Chennai and regional cities, building direct partnerships with accredited universities.",
  },
  {
    year: "2022",
    title: "Building the ecosystem",
    text: "Course discovery, scholarship screening, and comprehensive visa mock interviews integrated into a seamless student experience.",
  },
  {
    year: "2026",
    title: "The journey continues",
    text: "Today, HighEd guides students through honest 1-on-1 mentorship, empowering global ambitions from our Chennai headquarters.",
  },
];

const values = [
  {
    number: "01",
    title: "Student First",
    text: "Every decision begins with understanding the student's unique academic strengths, budget, and life ambitions.",
  },
  {
    number: "02",
    title: "Honest Guidance",
    text: "Clear facts. Practical advice. Zero hidden fees or unrealistic visa promises.",
  },
  {
    number: "03",
    title: "Global Thinking",
    text: "We help students look beyond borders and compare opportunities across diverse world-class education systems.",
  },
  {
    number: "04",
    title: "Long-Term Impact",
    text: "The goal isn't just getting an admit. It's building successful international careers and global mobility.",
  },
];

const stats = [
  ["7", "Study Destinations"],
  ["100%", "Free Initial Advisory"],
  ["1-on-1", "Personalized Mentorship"],
  ["End-to-End", "Visa & Financial Guidance"],
];

export default function OurStoryClient() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      const reveals = gsap.utils.toArray<HTMLElement>(".story-reveal");

      reveals.forEach((element) => {
        gsap.fromTo(
          element,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      gsap.fromTo(
        ".hero-content",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
        },
      );

      gsap.fromTo(
        ".hero-image",
        {
          opacity: 0,
          scale: 1.03,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.1,
          delay: 0.15,
          ease: "power2.out",
        },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={root}
      className="overflow-hidden bg-white text-[#121314]"
    >
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="bg-[#253A7B] text-white">
        <div className="mx-auto grid min-h-[760px] max-w-[1440px] items-center gap-12 px-6 pb-16 pt-28 md:px-10 lg:grid-cols-12 lg:px-16 lg:py-24">
          {/* LEFT */}
          <div className="hero-content lg:col-span-6">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#E93F61]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65">
                Our Story
              </span>
            </div>

            <h1 className="max-w-3xl text-[clamp(3.2rem,6vw,6.2rem)] font-semibold leading-[0.94] tracking-[-0.055em]">
              Every journey
              <br />
              begins with
              <br />
              <span className="text-[#FCF6BA]">a decision.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
              HighEd exists to make one of life&apos;s biggest decisions feel
              clearer — where to study, what to study and where your education
              can take you.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="#story"
                className="inline-flex h-12 items-center gap-3 rounded-full bg-white px-6 text-sm font-semibold text-[#253A7B]"
              >
                Discover our story
                <ArrowRight size={16} />
              </Link>

              <Link
                href="#vision"
                className="inline-flex h-12 items-center gap-3 rounded-full border border-white/20 px-6 text-sm font-medium text-white"
              >
                Our vision
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hero-image relative lg:col-span-6">
            <div className="relative ml-auto max-w-[600px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px]">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=90"
                  alt="Students studying together"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* SIMPLE LABEL */}
              <div className="absolute bottom-5 left-5 bg-white px-5 py-4 text-[#121314] md:bottom-7 md:left-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#253A7B]">
                  Our principle
                </p>

                <p className="mt-1 text-sm font-medium">
                  Student first. Always.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO STATEMENT
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
          <div className="story-reveal grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#253A7B]">
                More than a consultancy
              </span>

              <h2 className="mt-6 max-w-4xl text-[clamp(2.4rem,5vw,4.8rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
                We help turn ambition into a clear, achievable direction.
              </h2>
            </div>

            <div className="lg:col-span-4">
              <p className="text-sm leading-7 text-[#666666] md:text-base">
                Choosing an international education isn&apos;t just about
                filling out an application. It&apos;s about understanding
                yourself, your opportunities and the future you want to
                create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHERE IT STARTED
      ========================================================= */}
      <section
        id="story"
        className="bg-[#F5F5F9]"
      >
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-16">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
            {/* IMAGE */}
            <div className="story-reveal relative aspect-[4/3] overflow-hidden lg:col-span-7">
              <Image
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1400&q=90"
                alt="Students collaborating"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />

              <div className="absolute bottom-5 left-5 max-w-[280px] bg-white px-5 py-4 md:bottom-7 md:left-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#253A7B]">
                  The idea
                </p>

                <p className="mt-1 text-sm leading-5 text-[#666666]">
                  Make global education accessible and stress-free.
                </p>
              </div>
            </div>

            {/* CONTENT */}
            <div className="lg:col-span-5 lg:pl-8">
              <span className="story-reveal text-[11px] font-semibold uppercase tracking-[0.2em] text-[#253A7B]">
                Where it started
              </span>

              <h2 className="story-reveal mt-6 text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
                One question changed the way we saw education advisory.
              </h2>

              <div className="story-reveal mt-7 space-y-5 text-sm leading-7 text-[#666666] md:text-base">
                <p>
                  Why should students have to navigate a complicated world of
                  countries, universities, courses, applications and visas
                  alone?
                </p>

                <p>
                  That question became the foundation of HighEd — a place where
                  students from Tamil Nadu find clear, transparent, and honest
                  guidance before making one of the biggest decisions of their
                  lives.
                </p>
              </div>

              <div className="story-reveal mt-9 flex items-center gap-4">
                <span className="h-px w-12 bg-[#E93F61]" />

                <span className="text-sm font-semibold text-[#253A7B]">
                  And the journey began.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          JOURNEY
      ========================================================= */}
      <section className="bg-[#121B35] text-white">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* INTRO */}
            <div className="lg:col-span-4">
              <span className="story-reveal text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FCF6BA]">
                Our journey
              </span>

              <h2 className="story-reveal mt-6 text-[clamp(2.4rem,4vw,4.4rem)] font-semibold leading-[1] tracking-[-0.045em] text-white">
                Years of moving forward.
              </h2>

              <p className="story-reveal mt-7 max-w-sm text-sm leading-7 text-white/60 md:text-base">
                Every chapter brought us closer to the same purpose: helping
                students discover what&apos;s possible.
              </p>
            </div>

            {/* TIMELINE */}
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="border-t border-white/15">
                {milestones.map((item, index) => (
                  <div
                    key={item.year}
                    className="story-reveal grid gap-5 border-b border-white/15 py-8 md:grid-cols-[100px_1fr] md:py-10"
                  >
                    <div className="text-2xl font-semibold tracking-[-0.03em] text-[#FCF6BA]">
                      {item.year}
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white md:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-6 text-white/60">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VISION + MISSION
      ========================================================= */}
      <section
        id="vision"
        className="bg-white"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
          <div className="story-reveal max-w-3xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#253A7B]">
              Vision & Mission
            </span>

            <h2 className="mt-6 text-[clamp(2.4rem,4.5vw,4.6rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
              Built for where global education is going next.
            </h2>
          </div>

          <div className="mt-16 grid gap-px bg-[#DDE1EA] lg:grid-cols-2">
            {/* VISION */}
            <div className="story-reveal bg-[#253A7B] p-8 text-white md:p-12 lg:min-h-[430px]">
              <div className="flex items-start justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
                  01 / Our vision
                </span>
              </div>

              <div className="mt-24 max-w-lg">
                <h3 className="text-[clamp(2rem,3vw,3rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-white">
                  A world where every student can see beyond borders.
                </h3>

                <p className="mt-6 text-sm leading-7 text-white/70">
                  We envision a future where access to global education is
                  transparent, merit-driven, and shaped around the individual
                  aspirations of each student.
                </p>
              </div>
            </div>

            {/* MISSION */}
            <div className="story-reveal bg-[#F5F5F9] p-8 md:p-12 lg:min-h-[430px]">
              <div className="flex items-start justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#253A7B]/50">
                  02 / Our mission
                </span>
              </div>

              <div className="mt-24 max-w-lg">
                <h3 className="text-[clamp(2rem,3vw,3rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-[#121314]">
                  Simplify the journey from ambition to international
                  opportunity.
                </h3>

                <p className="mt-6 text-sm leading-7 text-[#666666]">
                  We guide students with personalised profile evaluation,
                  transparent university admissions, and dedicated visa
                  support at every stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================= */}
      <section className="bg-[#F5F5F9]">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="story-reveal text-[11px] font-semibold uppercase tracking-[0.2em] text-[#253A7B]">
                What we believe
              </span>

              <h2 className="story-reveal mt-6 text-[clamp(2.4rem,4vw,4rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
                Principles that stay with us.
              </h2>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="border-t border-black/10">
                {values.map((value) => (
                  <div
                    key={value.number}
                    className="story-reveal grid gap-5 border-b border-black/10 py-8 md:grid-cols-[70px_1fr] md:py-10"
                  >
                    <span className="text-sm font-semibold text-[#E93F61]">
                      {value.number}
                    </span>

                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.02em]">
                        {value.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-6 text-[#666666] md:text-base">
                        {value.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 md:grid-cols-4">
          {stats.map(([value, label], index) => (
            <div
              key={label}
              className={`story-reveal px-6 py-10 md:px-8 md:py-14 ${
                index % 2 !== 0 ? "border-l border-black/10" : ""
              } md:border-l md:border-black/10 first:md:border-l-0`}
            >
              <div className="text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.045em] text-[#253A7B]">
                {value}
              </div>

              <p className="mt-2 max-w-[160px] text-xs leading-5 text-[#666666] md:text-sm">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          DESTINATIONS
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-24 text-center md:px-10 md:py-32 lg:px-16">
          <span className="story-reveal text-[11px] font-semibold uppercase tracking-[0.2em] text-[#253A7B]">
            Global study destinations
          </span>

          <h2 className="story-reveal mx-auto mt-6 max-w-4xl text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[1] tracking-[-0.05em]">
            One world.
            <br />
            Endless possibilities.
          </h2>

          <p className="story-reveal mx-auto mt-6 max-w-xl text-sm leading-7 text-[#666666] md:text-base">
            Explore premier educational destinations across leading countries.
          </p>

          <div className="story-reveal mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-2">
            {destinations.map((destination) => (
              <Link
                key={destination}
                href={`/study-in/${destination
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
                className="inline-flex h-11 items-center gap-2 rounded-full border border-black/10 bg-[#F5F5F9] px-5 text-sm font-medium text-[#121314]"
              >
                <MapPin
                  size={15}
                  strokeWidth={1.8}
                  className="text-[#253A7B]"
                />

                {destination}

                <ArrowUpRight
                  size={14}
                  className="text-[#666666]"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-[#253A7B] text-white">
        <div className="mx-auto max-w-[1200px] px-6 py-24 text-center md:px-10 md:py-32">
          <div className="story-reveal mx-auto max-w-4xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Your story starts here
            </span>

            <h2 className="mt-6 text-[clamp(2.8rem,5vw,5.2rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-white">
              The next chapter
              <br />
              is yours to write.
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/65 md:text-base">
              Tell us where you want to go. We&apos;ll help you understand the
              path to get there with complete honesty.
            </p>

            <Link
              href="/book-counselling"
              className="mt-10 inline-flex h-12 items-center gap-3 rounded-full bg-white px-7 text-sm font-semibold text-[#253A7B]"
            >
              Book Free Counselling
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-16 border-t border-white/10 pt-6 text-xs text-white/40">
            Built around students across Tamil Nadu.
          </div>
        </div>
      </section>
    </main>
  );
}