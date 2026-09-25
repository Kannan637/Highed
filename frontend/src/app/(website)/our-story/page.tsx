"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    Globe2,
    GraduationCap,
    Heart,
    Lightbulb,
    MapPin,
    Sparkles,
    Target,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const destinations = [
    "USA",
    "UK",
    "Canada",
    "Australia",
    "Dubai",
    "Germany",
];

const milestones = [
    {
        year: "2015",
        title: "The beginning",
        text: "A simple idea began with one goal — make international education easier to understand and easier to access.",
    },
    {
        year: "2018",
        title: "Growing the vision",
        text: "Our student community grew, along with our relationships with universities and education partners.",
    },
    {
        year: "2022",
        title: "Building the ecosystem",
        text: "Counselling, university discovery and application support came together into a more connected student experience.",
    },
    {
        year: "2026",
        title: "The journey continues",
        text: "Today, HighEd continues to help students make informed decisions about where education can take them.",
    },
];

const values = [
    {
        number: "01",
        title: "Student First",
        text: "Every decision begins with understanding the student.",
    },
    {
        number: "02",
        title: "Honest Guidance",
        text: "Clear information. Practical advice. No unnecessary complexity.",
    },
    {
        number: "03",
        title: "Global Thinking",
        text: "We help students look beyond borders and discover possibilities.",
    },
    {
        number: "04",
        title: "Long-Term Impact",
        text: "The goal isn't just admission. It's building what's next.",
    },
];

const stats = [
    ["10K+", "Students Guided"],
    ["500+", "University Options"],
    ["6", "Study Destinations"],
    ["95%", "Student Satisfaction"],
];

export default function OurStoryPage() {
    const root = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!root.current) return;

        const ctx = gsap.context(() => {
            /* ----------------------------------------------------------
               HERO
            ---------------------------------------------------------- */

            const heroTimeline = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },
            });

            heroTimeline
                .from(".hero-eyebrow", {
                    y: 25,
                    opacity: 0,
                    duration: 0.7,
                })
                .from(
                    ".hero-title span",
                    {
                        yPercent: 110,
                        opacity: 0,
                        duration: 1,
                        stagger: 0.08,
                    },
                    "-=0.35"
                )
                .from(
                    ".hero-copy",
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.7,
                    },
                    "-=0.5"
                )
                .from(
                    ".hero-actions",
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.6,
                    },
                    "-=0.4"
                )
                .from(
                    ".hero-image",
                    {
                        scale: 1.15,
                        opacity: 0,
                        duration: 1.4,
                        ease: "power3.out",
                    },
                    "-=1"
                )
                .from(
                    ".hero-floating-card",
                    {
                        y: 40,
                        opacity: 0,
                        duration: 0.7,
                    },
                    "-=0.8"
                );

            /* ----------------------------------------------------------
               GENERIC REVEALS
            ---------------------------------------------------------- */

            gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
                gsap.from(element, {
                    y: 70,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        once: true,
                    },
                });
            });

            gsap.utils.toArray<HTMLElement>(".reveal-scale").forEach((element) => {
                gsap.from(element, {
                    scale: 0.92,
                    opacity: 0,
                    duration: 1.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        once: true,
                    },
                });
            });

            /* ----------------------------------------------------------
               BIG STATEMENT
            ---------------------------------------------------------- */

            gsap.from(".statement-word", {
                yPercent: 100,
                opacity: 0,
                stagger: 0.06,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".statement-section",
                    start: "top 70%",
                    once: true,
                },
            });

            /* ----------------------------------------------------------
               STORY IMAGE PARALLAX
            ---------------------------------------------------------- */

            gsap.to(".story-image img", {
                yPercent: -12,
                ease: "none",
                scrollTrigger: {
                    trigger: ".story-image",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });

            /* ----------------------------------------------------------
               TIMELINE
            ---------------------------------------------------------- */

            gsap.from(".timeline-line-progress", {
                scaleY: 0,
                transformOrigin: "top",
                ease: "none",
                scrollTrigger: {
                    trigger: ".timeline-wrapper",
                    start: "top 65%",
                    end: "bottom 70%",
                    scrub: true,
                },
            });

            gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item) => {
                gsap.from(item, {
                    x: 60,
                    opacity: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 82%",
                        once: true,
                    },
                });
            });

            /* ----------------------------------------------------------
               VISION / MISSION
            ---------------------------------------------------------- */

            gsap.from(".vision-card", {
                x: -80,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".vision-mission",
                    start: "top 75%",
                    once: true,
                },
            });

            gsap.from(".mission-card", {
                x: 80,
                opacity: 0,
                duration: 1,
                delay: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".vision-mission",
                    start: "top 75%",
                    once: true,
                },
            });

            /* ----------------------------------------------------------
               VALUES
            ---------------------------------------------------------- */

            gsap.from(".value-item", {
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".values-grid",
                    start: "top 78%",
                    once: true,
                },
            });

            /* ----------------------------------------------------------
               STATS
            ---------------------------------------------------------- */

            gsap.from(".stat-item", {
                y: 40,
                opacity: 0,
                duration: 0.7,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".stats-section",
                    start: "top 80%",
                    once: true,
                },
            });

            /* ----------------------------------------------------------
               HORIZONTAL DESTINATIONS
            ---------------------------------------------------------- */

            gsap.from(".destination-pill", {
                y: 40,
                opacity: 0,
                scale: 0.9,
                duration: 0.7,
                stagger: 0.08,
                ease: "back.out(1.5)",
                scrollTrigger: {
                    trigger: ".destinations",
                    start: "top 80%",
                    once: true,
                },
            });

            /* ----------------------------------------------------------
               CTA
            ---------------------------------------------------------- */

            gsap.from(".cta-content > *", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".final-cta",
                    start: "top 75%",
                    once: true,
                },
            });

            /* ----------------------------------------------------------
               FLOATING IMAGE
            ---------------------------------------------------------- */

            gsap.to(".floating-photo", {
                y: -30,
                rotate: 2,
                ease: "none",
                scrollTrigger: {
                    trigger: ".floating-photo-wrapper",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <main
            ref={root}
            className="overflow-hidden bg-surface-neutral text-content-primary"
        >
            {/* ==========================================================
          HERO
      ========================================================== */}

            <section className="relative min-h-screen bg-[#253A7B] text-white">
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -right-32 top-20 h-[500px] w-[500px] rounded-full bg-white/[0.05] blur-3xl" />
                    <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#E93F61]/10 blur-3xl" />
                </div>

                <div className="relative mx-auto grid min-h-screen max-w-[1500px] items-center gap-14 px-6 pb-20 pt-32 md:px-10 lg:grid-cols-12 lg:px-16 lg:pt-28">
                    <div className="lg:col-span-6">
                        <div className="hero-eyebrow mb-7 flex items-center gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                                <Sparkles size={16} />
                            </div>

                            <span className="text-xs font-semibold tracking-[0.18em] text-white/70">
                                OUR STORY
                            </span>
                        </div>

                        <h1 className="hero-title max-w-4xl overflow-hidden text-[52px] font-medium leading-[0.94] tracking-[-0.055em] sm:text-[64px] lg:text-[82px]">
                            <span className="block overflow-hidden">
                                Every journey
                            </span>
                            <span className="block overflow-hidden">
                                begins with
                            </span>
                            <span className="block overflow-hidden text-[#FCF6BA]">
                                a decision.
                            </span>
                        </h1>

                        <p className="hero-copy mt-8 max-w-xl text-[17px] leading-8 text-white/65 md:text-[18px]">
                            HighEd exists to make one of life&apos;s biggest decisions feel
                            clearer — where to study, what to study and where your education
                            can take you.
                        </p>

                        <div className="hero-actions mt-10 flex flex-wrap gap-3">
                            <a
                                href="#story"
                                className="group inline-flex h-14 items-center gap-3 rounded-full bg-white px-7 text-sm font-semibold text-[#253A7B] transition-all hover:gap-4"
                            >
                                Discover our story
                                <ArrowRight size={17} />
                            </a>

                            <a
                                href="#vision"
                                className="inline-flex h-14 items-center gap-3 rounded-full border border-white/20 bg-white/[0.06] px-7 text-sm font-medium backdrop-blur transition hover:bg-white/10"
                            >
                                Our vision
                            </a>
                        </div>
                    </div>

                    <div className="relative lg:col-span-6">
                        <div className="relative mx-auto max-w-[600px] lg:ml-auto">
                            <div className="absolute -inset-6 rounded-[44px] bg-white/[0.06] blur-2xl" />

                            <div className="hero-image relative overflow-hidden rounded-[36px] border border-white/15 bg-white/10 p-2">
                                <Image
                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=90"
                                    alt="Students together"
                                    width={700}
                                    height={875}
                                    className="aspect-[4/5] w-full rounded-[30px] object-cover"
                                />
                            </div>

                            <div className="hero-floating-card absolute -bottom-7 -left-5 rounded-[24px] bg-white p-6 text-[#121314] shadow-2xl sm:-left-10">
                                <div className="text-4xl font-medium tracking-[-0.05em]">
                                    10K+
                                </div>
                                <div className="mt-1 text-sm text-black/45">
                                    student journeys
                                </div>
                            </div>

                            <div className="absolute -right-5 top-12 hidden rounded-[22px] bg-[#FCF6BA] p-5 text-[#253A7B] shadow-xl sm:block">
                                <Globe2 size={24} strokeWidth={1.7} />

                                <div className="mt-3 text-sm font-semibold">
                                    Think beyond
                                    <br />
                                    borders.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs text-white/40 md:flex">
                    <span>SCROLL TO EXPLORE</span>
                    <ArrowDown size={14} />
                </div>
            </section>

            {/* ==========================================================
          BIG STATEMENT
      ========================================================== */}

            <section className="statement-section bg-white">
                <div className="mx-auto max-w-[1250px] px-6 py-32 md:px-10 lg:py-44">
                    <div className="max-w-[1100px]">
                        <span className="reveal text-xs font-semibold tracking-[0.2em] text-[#253A7B]">
                            MORE THAN A CONSULTANCY
                        </span>

                        <h2 className="mt-8 overflow-hidden text-[45px] font-medium leading-[1.02] tracking-[-0.055em] md:text-[68px] lg:text-[88px]">
                            {"We help turn ambition into a direction."
                                .split(" ")
                                .map((word, index) => (
                                    <span
                                        key={`${word}-${index}`}
                                        className="statement-word mr-[0.22em] inline-block"
                                    >
                                        {word}
                                    </span>
                                ))}
                        </h2>
                    </div>

                    <div className="mt-16 grid gap-10 md:grid-cols-2 md:items-end">
                        <p className="reveal max-w-xl text-[18px] leading-8 text-black/50">
                            Choosing an international education isn&apos;t just about filling out
                            an application. It&apos;s about understanding yourself, your
                            opportunities and the future you want to create.
                        </p>

                        <div className="reveal text-right">
                            <span className="font-serif text-5xl italic text-[#253A7B] md:text-6xl">
                                Your future.
                            </span>
                            <br />
                            <span className="text-sm text-black/40">
                                Your journey. Your choice.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==========================================================
          STORY IMAGE
      ========================================================== */}

            <section id="story" className="bg-surface-neutral">
                <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
                    <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                        <div className="story-image reveal-scale relative overflow-hidden rounded-[36px] lg:col-span-7">
                            <Image
                                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1400&q=90"
                                alt="Students collaborating"
                                width={800}
                                height={620}
                                className="h-[620px] w-full scale-110 object-cover"
                            />

                            <div className="absolute bottom-6 left-6 rounded-[22px] bg-white/90 px-6 py-5 shadow-xl backdrop-blur">
                                <div className="text-xs font-semibold tracking-[0.14em] text-[#253A7B]">
                                    THE IDEA
                                </div>
                                <div className="mt-1 text-sm text-black/55">
                                    Make global education feel closer.
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 lg:pl-10">
                            <span className="reveal text-xs font-semibold tracking-[0.2em] text-[#253A7B]">
                                WHERE IT STARTED
                            </span>

                            <h2 className="reveal mt-6 text-4xl font-medium leading-[1.05] tracking-[-0.045em] md:text-5xl">
                                One question changed the way we saw education.
                            </h2>

                            <p className="reveal mt-7 text-[17px] leading-8 text-black/50">
                                Why should students have to navigate a complicated world of
                                countries, universities, courses, applications and decisions
                                alone?
                            </p>

                            <p className="reveal mt-5 text-[17px] leading-8 text-black/50">
                                That question became the foundation of HighEd — a place where
                                students could find clarity before making one of the biggest
                                decisions of their lives.
                            </p>

                            <div className="reveal mt-9 flex items-center gap-4">
                                <div className="h-px w-14 bg-[#253A7B]" />
                                <span className="text-sm font-medium text-[#253A7B]">
                                    And the journey began.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==========================================================
          TIMELINE
      ========================================================== */}

            <section className="bg-[#121B35] text-white">
                <div className="timeline-wrapper mx-auto max-w-[1200px] px-6 py-32 md:px-10 lg:py-40">
                    <div className="grid gap-16 lg:grid-cols-12">
                        <div className="lg:col-span-4">
                            <span className="reveal text-xs font-semibold tracking-[0.2em] text-[#FCF6BA]">
                                OUR JOURNEY
                            </span>

                            <h2 className="reveal mt-6 text-4xl font-medium leading-[1.04] tracking-[-0.045em] md:text-6xl">
                                Years of moving forward.
                            </h2>

                            <p className="reveal mt-7 max-w-sm text-[16px] leading-7 text-white/45">
                                Every chapter brought us closer to the same purpose: helping
                                students discover what&apos;s possible.
                            </p>
                        </div>

                        <div className="relative lg:col-span-7 lg:col-start-6">
                            <div className="absolute left-[8px] top-2 h-[calc(100%-20px)] w-px bg-white/10" />

                            <div className="timeline-line-progress absolute left-[8px] top-2 h-[calc(100%-20px)] w-px origin-top bg-[#FCF6BA]" />

                            <div className="space-y-14">
                                {milestones.map((item) => (
                                    <div
                                        key={item.year}
                                        className="timeline-item relative pl-12"
                                    >
                                        <div className="absolute left-0 top-1 h-[17px] w-[17px] rounded-full border-4 border-[#121B35] bg-[#FCF6BA]" />

                                        <div className="text-5xl font-medium tracking-[-0.05em] text-[#FCF6BA]">
                                            {item.year}
                                        </div>

                                        <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-4 max-w-xl text-[16px] leading-7 text-white/45">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==========================================================
          VISION & MISSION
      ========================================================== */}

            <section id="vision" className="vision-mission bg-white">
                <div className="mx-auto max-w-[1250px] px-6 py-32 md:px-10 lg:py-40">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="reveal text-xs font-semibold tracking-[0.2em] text-[#253A7B]">
                            VISION & MISSION
                        </span>

                        <h2 className="reveal mt-6 text-4xl font-medium tracking-[-0.045em] md:text-6xl">
                            Built for where education is going next.
                        </h2>
                    </div>

                    <div className="mt-20 grid gap-6 lg:grid-cols-2">
                        {/* Vision */}
                        <div className="vision-card group relative overflow-hidden rounded-[32px] bg-[#253A7B] p-8 text-white md:p-12">
                            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/[0.06] blur-2xl transition-transform duration-700 group-hover:scale-125" />

                            <div className="relative">
                                <div className="flex items-center justify-between">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-white/10">
                                        <Lightbulb size={26} strokeWidth={1.7} />
                                    </div>

                                    <span className="text-xs font-semibold tracking-[0.18em] text-white/40">
                                        01
                                    </span>
                                </div>

                                <div className="mt-24">
                                    <span className="text-sm font-semibold text-[#FCF6BA]">
                                        OUR VISION
                                    </span>

                                    <h3 className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-5xl">
                                        A world where every student can see beyond borders.
                                    </h3>

                                    <p className="mt-6 max-w-lg text-[16px] leading-7 text-white/55">
                                        We envision a future where access to global education is
                                        clearer, more informed and shaped around the individual
                                        student.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Mission */}
                        <div className="mission-card group relative overflow-hidden rounded-[32px] bg-[#F2F3F6] p-8 md:p-12">
                            <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#253A7B]/5 blur-3xl transition-transform duration-700 group-hover:scale-125" />

                            <div className="relative">
                                <div className="flex items-center justify-between">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#253A7B] text-white">
                                        <Target size={26} strokeWidth={1.7} />
                                    </div>

                                    <span className="text-xs font-semibold tracking-[0.18em] text-black/25">
                                        02
                                    </span>
                                </div>

                                <div className="mt-24">
                                    <span className="text-sm font-semibold text-[#253A7B]">
                                        OUR MISSION
                                    </span>

                                    <h3 className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-5xl">
                                        Simplify the journey from ambition to opportunity.
                                    </h3>

                                    <p className="mt-6 max-w-lg text-[16px] leading-7 text-black/50">
                                        We guide students with personalised advice, global
                                        opportunities and practical support at every important
                                        step.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==========================================================
          VALUES
      ========================================================== */}

            <section className="bg-surface-neutral">
                <div className="mx-auto max-w-[1250px] px-6 py-32 md:px-10 lg:py-40">
                    <div className="grid gap-14 lg:grid-cols-12">
                        <div className="lg:col-span-5">
                            <span className="reveal text-xs font-semibold tracking-[0.2em] text-[#253A7B]">
                                WHAT WE BELIEVE
                            </span>

                            <h2 className="reveal mt-6 text-4xl font-medium leading-[1.05] tracking-[-0.045em] md:text-6xl">
                                Principles that stay with us.
                            </h2>
                        </div>

                        <div className="values-grid lg:col-span-7">
                            <div className="divide-y divide-black/10 border-y border-black/10">
                                {values.map((value) => (
                                    <div
                                        key={value.number}
                                        className="value-item grid gap-5 py-9 md:grid-cols-[70px_1fr]"
                                    >
                                        <span className="text-sm font-semibold text-[#253A7B]">
                                            {value.number}
                                        </span>

                                        <div>
                                            <h3 className="text-2xl font-medium tracking-[-0.03em]">
                                                {value.title}
                                            </h3>

                                            <p className="mt-3 max-w-xl text-[15px] leading-7 text-black/50">
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

            {/* ==========================================================
          FLOATING EDITORIAL IMAGE
      ========================================================== */}

            <section className="bg-white">
                <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
                    <div className="floating-photo-wrapper relative min-h-[650px] overflow-hidden rounded-[38px] bg-[#253A7B]">
                        <Image
                            src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1600&q=90"
                            alt="Students learning together"
                            fill
                            sizes="(max-width: 1500px) 100vw, 1500px"
                            className="floating-photo object-cover opacity-70"
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-[#121B35]/95 via-[#121B35]/45 to-transparent" />

                        <div className="relative flex min-h-[650px] items-end p-8 md:p-14 lg:p-20">
                            <div className="max-w-2xl text-white">
                                <span className="reveal text-xs font-semibold tracking-[0.2em] text-[#FCF6BA]">
                                    THE PEOPLE MATTER
                                </span>

                                <h2 className="reveal mt-6 text-4xl font-medium leading-[1.02] tracking-[-0.045em] md:text-6xl">
                                    Behind every application is a person with a story.
                                </h2>

                                <p className="reveal mt-6 max-w-xl text-[17px] leading-8 text-white/60">
                                    That&apos;s why we listen first. Because the right destination
                                    isn&apos;t just about rankings or a course list — it&apos;s about
                                    whether it fits the person who will live that story.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==========================================================
          STATS
      ========================================================== */}

            <section className="stats-section border-y border-black/8 bg-surface-neutral">
                <div className="mx-auto grid max-w-[1250px] grid-cols-2 md:grid-cols-4">
                    {stats.map(([value, label], index) => (
                        <div
                            key={label}
                            className={`stat-item px-6 py-14 md:px-8 md:py-20 ${index > 0 ? "border-l border-black/8" : ""
                                }`}
                        >
                            <div className="text-5xl font-medium tracking-[-0.06em] text-brand-primary md:text-6xl">
                                {value}
                            </div>

                            <div className="mt-3 text-sm text-black/45">{label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ==========================================================
          DESTINATIONS
      ========================================================== */}

            <section className="destinations bg-white">
                <div className="mx-auto max-w-[1250px] px-6 py-32 text-center md:px-10 lg:py-40">
                    <span className="reveal text-xs font-semibold tracking-[0.2em] text-[#253A7B]">
                        THINK GLOBAL
                    </span>

                    <h2 className="reveal mx-auto mt-6 max-w-4xl text-4xl font-medium leading-[1.03] tracking-[-0.045em] md:text-6xl">
                        One world. Thousands of possibilities.
                    </h2>

                    <p className="reveal mx-auto mt-6 max-w-xl text-[17px] leading-8 text-black/50">
                        Explore opportunities across destinations that open doors to
                        different cultures, experiences and futures.
                    </p>

                    <div className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-3">
                        {destinations.map((destination) => (
                            <Link
                                key={destination}
                                href={`/study-in/${destination.toLowerCase().replace(/ /g, "-")}`}
                                className="destination-pill group flex items-center gap-3 rounded-full border border-border bg-surface-neutral px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/20 hover:bg-brand-primary hover:text-white cursor-pointer"
                            >
                                <MapPin
                                    size={16}
                                    className="text-brand-primary transition-colors group-hover:text-white"
                                />
                                {destination}
                                <ArrowUpRight
                                    size={15}
                                    className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==========================================================
          FINAL CTA
      ========================================================== */}

            <section className="final-cta bg-brand-primary text-white">
                <div className="cta-content mx-auto max-w-[1200px] px-6 py-32 text-center md:px-10 lg:py-44">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                        <GraduationCap size={26} />
                    </div>

                    <span className="mt-8 block text-xs font-semibold tracking-[0.2em] text-white/45">
                        YOUR STORY STARTS HERE
                    </span>

                    <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.055em] md:text-7xl">
                        The next chapter is yours to write.
                    </h2>

                    <p className="mx-auto mt-7 max-w-xl text-[17px] leading-8 text-white/55">
                        Tell us where you want to go. We&apos;ll help you understand the path
                        to get there.
                    </p>

                    <Link
                        href="/book-counselling"
                        className="group mt-10 inline-flex h-14 items-center gap-3 rounded-full bg-white px-8 text-sm font-semibold text-brand-primary shadow-md transition-all hover:gap-4 hover:shadow-lg"
                    >
                        Book Free Counselling
                        <ArrowRight
                            size={18}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </Link>

                    <div className="mt-20 flex items-center justify-center gap-2 text-xs text-white/30">
                        <Heart size={13} />
                        Built around students.
                    </div>
                </div>
            </section>
        </main>
    );
}

