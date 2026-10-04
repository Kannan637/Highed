"use client";

import React, { useEffect, useRef } from "react";
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
            /* HERO */
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

            /* REVEALS */
            gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
                gsap.from(element, {
                    y: 60,
                    opacity: 0,
                    duration: 0.9,
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
                    scale: 0.94,
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

            /* TIMELINE */
            gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item) => {
                gsap.from(item, {
                    x: 50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 82%",
                        once: true,
                    },
                });
            });

            /* VISION / MISSION */
            gsap.from(".vision-card", {
                x: -60,
                opacity: 0,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".vision-mission",
                    start: "top 75%",
                    once: true,
                },
            });

            gsap.from(".mission-card", {
                x: 60,
                opacity: 0,
                duration: 0.9,
                delay: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".vision-mission",
                    start: "top 75%",
                    once: true,
                },
            });

            /* VALUES */
            gsap.from(".value-item", {
                y: 50,
                opacity: 0,
                duration: 0.7,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".values-grid",
                    start: "top 78%",
                    once: true,
                },
            });

            /* STATS */
            gsap.from(".stat-item", {
                y: 35,
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

            /* DESTINATION PILLS */
            gsap.from(".destination-pill", {
                y: 30,
                opacity: 0,
                scale: 0.9,
                duration: 0.6,
                stagger: 0.06,
                ease: "back.out(1.4)",
                scrollTrigger: {
                    trigger: ".destinations",
                    start: "top 80%",
                    once: true,
                },
            });
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={root}
            className="overflow-hidden bg-surface-neutral text-content-primary"
        >
            {/* HERO */}
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

                            <span className="text-xs font-semibold tracking-[0.18em] text-white/70 uppercase">
                                Our Story
                            </span>
                        </div>

                        <h1 className="hero-title max-w-4xl overflow-hidden">
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

                        <p className="hero-copy mt-8 max-w-xl text-white/80">
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
                                    alt="Students studying together"
                                    width={700}
                                    height={875}
                                    priority
                                    unoptimized
                                    className="aspect-[4/5] w-full rounded-[30px] object-cover"
                                />
                            </div>

                            <div className="hero-floating-card absolute -bottom-7 -left-5 rounded-[24px] bg-white p-6 text-[#121314] shadow-2xl sm:-left-10">
                                <div className="text-2xl font-bold tracking-tight text-brand-primary">
                                    Student First
                                </div>
                                <div className="mt-1 text-xs font-semibold text-black/50 uppercase tracking-wider">
                                    Ethical Advisory
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

            {/* BIG STATEMENT */}
            <section className="statement-section bg-white">
                <div className="mx-auto max-w-[1250px] px-6 py-28 md:px-10 lg:py-36">
                    <div className="max-w-[1100px]">
                        <span className="reveal text-xs font-semibold tracking-[0.2em] text-[#253A7B] uppercase">
                            More Than A Consultancy
                        </span>

                        <h2 className="mt-8">
                            We help turn ambition into a clear, achievable direction.
                        </h2>
                    </div>

                    <div className="mt-14 grid gap-10 md:grid-cols-2 md:items-end">
                        <p className="reveal max-w-xl text-content-secondary leading-relaxed">
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

            {/* STORY IMAGE */}
            <section id="story" className="bg-surface-neutral">
                <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
                    <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                        <div className="story-image reveal-scale relative h-[540px] overflow-hidden rounded-[36px] lg:col-span-7">
                            <Image
                                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1400&q=90"
                                alt="Students collaborating"
                                fill
                                unoptimized
                                sizes="(max-width: 1024px) 100vw, 58vw"
                                className="object-cover"
                            />

                            <div className="absolute bottom-6 left-6 rounded-[22px] bg-white/95 px-6 py-5 shadow-xl backdrop-blur">
                                <div className="text-xs font-semibold tracking-[0.14em] text-[#253A7B]">
                                    THE IDEA
                                </div>
                                <div className="mt-1 text-sm text-black/60">
                                    Make global education accessible and stress-free.
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 lg:pl-10">
                            <span className="reveal text-xs font-semibold tracking-[0.2em] text-[#253A7B] uppercase">
                                Where It Started
                            </span>

                            <h2 className="reveal mt-6">
                                One question changed the way we saw education advisory.
                            </h2>

                            <p className="reveal mt-7 text-content-secondary leading-relaxed">
                                Why should students have to navigate a complicated world of
                                countries, universities, courses, applications and visas alone?
                            </p>

                            <p className="reveal mt-5 text-content-secondary leading-relaxed">
                                That question became the foundation of HighEd — a place where
                                students from Tamil Nadu find clear, transparent, and honest guidance
                                before making one of the biggest decisions of their lives.
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

            {/* TIMELINE */}
            <section className="bg-[#121B35] text-white">
                <div className="timeline-wrapper mx-auto max-w-[1200px] px-6 py-28 md:px-10 lg:py-36">
                    <div className="grid gap-16 lg:grid-cols-12">
                        <div className="lg:col-span-4">
                            <span className="reveal text-xs font-semibold tracking-[0.2em] text-[#FCF6BA] uppercase">
                                Our Journey
                            </span>

                            <h2 className="reveal mt-6 text-white">
                                Years of moving forward.
                            </h2>

                            <p className="reveal mt-7 max-w-sm text-white/70 leading-relaxed">
                                Every chapter brought us closer to the same purpose: helping
                                students discover what&apos;s possible.
                            </p>
                        </div>

                        <div className="relative lg:col-span-7 lg:col-start-6">
                            <div className="space-y-12">
                                {milestones.map((item) => (
                                    <div
                                        key={item.year}
                                        className="timeline-item relative border-l border-white/20 pl-8 pb-4"
                                    >
                                        <div className="absolute -left-[9px] top-1 h-[17px] w-[17px] rounded-full border-4 border-[#121B35] bg-[#FCF6BA]" />

                                        <div className="text-4xl font-bold tracking-tight text-[#FCF6BA]">
                                            {item.year}
                                        </div>

                                        <h3 className="mt-3 card-title text-white">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 max-w-xl text-white/70 leading-relaxed text-sm">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VISION & MISSION */}
            <section id="vision" className="vision-mission bg-white">
                <div className="mx-auto max-w-[1250px] px-6 py-28 md:px-10 lg:py-36">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="reveal text-xs font-semibold tracking-[0.2em] text-[#253A7B] uppercase">
                            Vision & Mission
                        </span>

                        <h2 className="reveal mt-6">
                            Built for where global education is going next.
                        </h2>
                    </div>

                    <div className="mt-16 grid gap-6 lg:grid-cols-2">
                        <div className="vision-card group relative overflow-hidden rounded-[32px] bg-[#253A7B] p-8 text-white md:p-12 shadow-md">
                            <div className="relative">
                                <div className="flex items-center justify-between">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-white/10">
                                        <Lightbulb size={26} strokeWidth={1.7} />
                                    </div>
                                    <span className="text-xs font-semibold tracking-[0.18em] text-white/40">
                                        01
                                    </span>
                                </div>

                                <div className="mt-20">
                                    <span className="text-sm font-semibold text-[#FCF6BA]">
                                        OUR VISION
                                    </span>

                                    <h3 className="mt-4 text-white">
                                        A world where every student can see beyond borders.
                                    </h3>

                                    <p className="mt-6 max-w-lg text-white/80 leading-relaxed text-sm">
                                        We envision a future where access to global education is
                                        transparent, merit-driven, and shaped around the individual
                                        aspirations of each student.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mission-card group relative overflow-hidden rounded-[32px] bg-[#F2F3F6] p-8 md:p-12 shadow-sm">
                            <div className="relative">
                                <div className="flex items-center justify-between">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#253A7B] text-white">
                                        <Target size={26} strokeWidth={1.7} />
                                    </div>
                                    <span className="text-xs font-semibold tracking-[0.18em] text-black/25">
                                        02
                                    </span>
                                </div>

                                <div className="mt-20">
                                    <span className="text-sm font-semibold text-[#253A7B]">
                                        OUR MISSION
                                    </span>

                                    <h3 className="mt-4 text-content-primary">
                                        Simplify the journey from ambition to international opportunity.
                                    </h3>

                                    <p className="mt-6 max-w-lg text-content-secondary leading-relaxed text-sm">
                                        We guide students with personalised profile evaluation,
                                        transparent university admissions, and dedicated visa support
                                        at every stage.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUES */}
            <section className="bg-surface-neutral">
                <div className="mx-auto max-w-[1250px] px-6 py-28 md:px-10 lg:py-36">
                    <div className="grid gap-14 lg:grid-cols-12">
                        <div className="lg:col-span-5">
                            <span className="reveal text-xs font-semibold tracking-[0.2em] text-[#253A7B] uppercase">
                                What We Believe
                            </span>

                            <h2 className="reveal mt-6">
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
                                            <h3 className="card-title text-content-primary">
                                                {value.title}
                                            </h3>

                                            <p className="mt-3 max-w-xl text-content-secondary text-sm leading-relaxed">
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

            {/* STATS */}
            <section className="stats-section border-y border-black/8 bg-white">
                <div className="mx-auto grid max-w-[1250px] grid-cols-2 md:grid-cols-4">
                    {stats.map(([value, label], index) => (
                        <div
                            key={label}
                            className={`stat-item px-6 py-12 md:px-8 md:py-16 ${
                                index > 0 ? "border-l border-black/8" : ""
                            }`}
                        >
                            <div className="text-4xl font-bold tracking-tight text-brand-primary md:text-5xl">
                                {value}
                            </div>
                            <div className="mt-2 text-sm text-black/55">{label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* DESTINATIONS */}
            <section className="destinations bg-[#FAFAFC]">
                <div className="mx-auto max-w-[1250px] px-6 py-28 text-center md:px-10 lg:py-36">
                    <span className="reveal text-xs font-semibold tracking-[0.2em] text-[#253A7B] uppercase">
                        Global Study Destinations
                    </span>

                    <h2 className="reveal mx-auto mt-6 max-w-4xl">
                        One world. Endless possibilities.
                    </h2>

                    <p className="reveal mx-auto mt-6 max-w-xl text-content-secondary">
                        Explore premier educational destinations across leading countries.
                    </p>

                    <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
                        {destinations.map((destination) => (
                            <Link
                                key={destination}
                                href={`/study-in/${destination.toLowerCase().replace(/ /g, "-")}`}
                                className="destination-pill group flex items-center gap-3 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/20 hover:bg-brand-primary hover:text-white shadow-xs"
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

            {/* FINAL CTA */}
            <section className="final-cta bg-brand-primary text-white">
                <div className="cta-content mx-auto max-w-[1200px] px-6 py-28 text-center md:px-10 lg:py-36">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                        <GraduationCap size={26} />
                    </div>

                    <span className="mt-8 block text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
                        Your Story Starts Here
                    </span>

                    <h2 className="mx-auto mt-6 max-w-4xl text-white">
                        The next chapter is yours to write.
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl text-white/80 leading-relaxed">
                        Tell us where you want to go. We&apos;ll help you understand the path
                        to get there with complete honesty.
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

                    <div className="mt-16 flex items-center justify-center gap-2 text-xs text-white/40">
                        <Heart size={13} />
                        Built around students across Tamil Nadu.
                    </div>
                </div>
            </section>
        </div>
    );
}
