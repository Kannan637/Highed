"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Mail,
    Sparkles,
    Users,
    GraduationCap,
    FileCheck2,
    Award,
    Compass,
    CheckCircle2,
    Building2,
    MapPin,
} from "lucide-react";
import Container from "@/components/ui/Container";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/config/site.config";

gsap.registerPlugin(ScrollTrigger);

/* ================================================================
   LEADERSHIP & ADVISORY DESKS DATA
================================================================ */

const founder = {
    name: "Kannan C",
    role: "Founder & Creative Director",
    location: "Chennai / Coimbatore, Tamil Nadu",
    initials: "KC",
    bio: "Guiding the strategic vision, ethical student advisory model, and digital education platforms behind HighEd. Committed to honest, student-first global education counselling for Tamil Nadu students.",
    email: `mailto:${siteConfig.contact.email}`,
};

const advisoryDesks = [
    {
        title: "Admissions & University Selection Desk",
        badge: "Admissions",
        icon: GraduationCap,
        location: "Chennai Head Office & Virtual",
        description:
            "Specialized academic advisors assisting students in course mapping, university shortlisting, and application evaluation for universities in USA, UK, Canada, Australia, Germany, Ireland, and Dubai.",
        deliverables: [
            "University & program shortlisting matched to student profile",
            "Statement of Purpose (SOP) & Letter of Recommendation (LOR) review",
            "Application timeline tracking and direct portal submissions",
        ],
    },
    {
        title: "Visa Guidance & Compliance Desk",
        badge: "Visa Desk",
        icon: FileCheck2,
        location: "CIT Nagar, Saidapet, Chennai",
        description:
            "Experienced visa advisors providing thorough file review, financial document verification, and 1-on-1 embassy mock interviews for stress-free visa preparation.",
        deliverables: [
            "F-1, CAS, Study Permit, Subclass 500, and APS file structuring",
            "Sponsorship & education loan documentation verification",
            "Rigorous 1-on-1 embassy mock interview sessions",
        ],
    },
    {
        title: "Scholarships & Financial Aid Desk",
        badge: "Financial Aid",
        icon: Award,
        location: "Chennai & Tamil Nadu Desks",
        description:
            "Dedicated advisors identifying merit-based fee waivers, university grants, and connecting students with leading education loan partners across India.",
        deliverables: [
            "Merit and university scholarship eligibility screening",
            "Scholarship essay and statement refinement",
            "Guidance on collateral and non-collateral education loan options",
        ],
    },
    {
        title: "Pre-Departure & Student Settlement Desk",
        badge: "Student Support",
        icon: Compass,
        location: "Chennai & Partner Support",
        description:
            "Supporting students post-visa with student housing guidance, flight arrangements, foreign exchange (Forex), and airport arrival preparation.",
        deliverables: [
            "Verified student accommodation shortlisting near campus",
            "Student health insurance and foreign exchange assistance",
            "Pre-departure orientation & destination settlement advice",
        ],
    },
];

export default function OurTeamClient() {
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
            const intro = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },
            });

            intro
                .from(".team-eyebrow", {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                })
                .from(
                    ".team-title",
                    {
                        y: 45,
                        opacity: 0,
                        duration: 0.9,
                    },
                    "-=0.25"
                )
                .from(
                    ".team-description",
                    {
                        y: 25,
                        opacity: 0,
                        duration: 0.7,
                    },
                    "-=0.45"
                );

            /* FOUNDER CARD */
            gsap.from(".founder-card", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".founder-card",
                    start: "top 85%",
                    once: true,
                },
            });

            /* DESK CARDS */
            gsap.from(".desk-card", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".desks-grid",
                    start: "top 82%",
                    once: true,
                },
            });

            /* VALUES */
            gsap.from(".team-value", {
                y: 35,
                opacity: 0,
                duration: 0.7,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".values-grid",
                    start: "top 80%",
                    once: true,
                },
            });

            /* CTA */
            gsap.from(".team-cta-content > *", {
                y: 35,
                opacity: 0,
                duration: 0.7,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".team-cta",
                    start: "top 82%",
                    once: true,
                },
            });
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={root}
            className="min-h-screen overflow-hidden bg-[#FAFAFC] font-body text-[#121314]"
        >
            {/* HERO */}
            <section className="relative overflow-hidden bg-white">
                <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#253A7B]/[0.045] blur-3xl" />
                <div className="pointer-events-none absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#E93F61]/[0.035] blur-3xl" />

                <Container size="lg">
                    <div className="relative py-20 sm:py-28 lg:py-32">
                        <div className="max-w-5xl">
                            <Badge
                                variant="brand"
                                className="team-eyebrow gap-2 uppercase tracking-[0.14em]"
                            >
                                <Users size={13} />
                                Leadership & Advisory Desks
                            </Badge>

                            <h1 className="team-title mt-6 max-w-5xl">
                                Dedicated specialists behind
                                <br />
                                <span className="text-[#253A7B]">
                                    your international education.
                                </span>
                            </h1>

                            <p className="team-description mt-7 max-w-2xl text-content-secondary">
                                An integrated team of admissions counsellors, visa
                                specialists, and financial advisors working together with
                                complete transparency for students across Tamil Nadu.
                            </p>
                        </div>

                        {/* Hero metadata */}
                        <div className="mt-10 flex flex-wrap gap-3">
                            {[
                                "Admissions Advisory",
                                "Visa & Documentation Desk",
                                "Scholarship & Aid Desk",
                                "Pre-Departure Mentorship",
                            ].map((item) => (
                                <Badge
                                    key={item}
                                    variant="neutral"
                                    size="sm"
                                    className="font-semibold text-black/60"
                                >
                                    {item}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* FOUNDER & LEADERSHIP */}
            <section className="bg-[#FAFAFC] py-16 sm:py-20">
                <Container size="lg">
                    <div className="mb-10 sm:mb-12">
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#253A7B]">
                            LEADERSHIP
                        </span>
                        <h2 className="mt-3">Founded on Trust & Transparency</h2>
                    </div>

                    <div className="founder-card overflow-hidden rounded-[30px] border border-black/[0.08] bg-white p-8 sm:p-10 lg:p-12 shadow-sm">
                        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                            <div className="flex items-center gap-6 lg:col-span-5">
                                <div className="flex h-24 w-24 sm:h-28 sm:w-28 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary to-brand-primary/85 text-white shadow-md">
                                    <span className="font-heading text-4xl font-bold tracking-tight">
                                        {founder.initials}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="card-title text-content-primary">
                                        {founder.name}
                                    </h3>
                                    <p className="mt-1 text-sm font-semibold text-brand-primary">
                                        {founder.role}
                                    </p>
                                    <div className="mt-3 flex items-center gap-2 text-xs text-content-secondary">
                                        <MapPin size={13} className="text-brand-accent" />
                                        <span>{founder.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-7 lg:border-l lg:border-black/[0.08] lg:pl-10">
                                <p className="text-body-large text-content-secondary leading-relaxed">
                                    {founder.bio}
                                </p>
                                <div className="mt-6 flex flex-wrap items-center gap-4">
                                    <a
                                        href={founder.email}
                                        className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-5 py-2.5 text-xs font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-white"
                                    >
                                        <Mail size={14} />
                                        <span>Contact Office: {siteConfig.contact.email}</span>
                                    </a>
                                    <div className="flex items-center gap-1.5 text-xs text-black/50">
                                        <Building2 size={14} className="text-brand-primary" />
                                        <span>Headquartered in Saidapet, Chennai</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ADVISORY DESKS */}
            <section className="bg-white py-16 sm:py-24">
                <Container size="lg">
                    <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#253A7B]">
                                SPECIALIZED TEAMS
                            </span>
                            <h2 className="mt-3">Functional Advisory Desks</h2>
                            <p className="mt-2 max-w-2xl text-content-secondary">
                                Rather than relying on generic counselling, every student receives
                                specialized guidance across distinct advisory desks.
                            </p>
                        </div>
                        <span className="self-start rounded-full bg-[#FAFAFC] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-black/40 border border-black/[0.06] sm:self-auto">
                            HighEd Advisory Model
                        </span>
                    </div>

                    <div className="desks-grid grid grid-cols-1 gap-6 md:grid-cols-2">
                        {advisoryDesks.map((desk) => {
                            const IconComponent = desk.icon;
                            return (
                                <article
                                    key={desk.title}
                                    className="desk-card group relative flex flex-col justify-between rounded-[28px] border border-black/[0.07] bg-[#FAFAFC] p-8 transition-all duration-300 hover:border-brand-primary/30 hover:bg-white hover:shadow-lg"
                                >
                                    <div>
                                        <div className="flex items-center justify-between gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white">
                                                <IconComponent size={22} />
                                            </div>
                                            <Badge variant="neutral" size="sm">
                                                {desk.badge}
                                            </Badge>
                                        </div>

                                        <h3 className="card-title mt-6 text-content-primary">
                                            {desk.title}
                                        </h3>

                                        <p className="mt-3 text-body-small text-content-secondary leading-relaxed">
                                            {desk.description}
                                        </p>

                                        <div className="mt-6 border-t border-black/[0.06] pt-5">
                                            <span className="text-[11px] font-bold uppercase tracking-wider text-black/40">
                                                What This Desk Handles:
                                            </span>
                                            <ul className="mt-3 space-y-2.5">
                                                {desk.deliverables.map((item) => (
                                                    <li
                                                        key={item}
                                                        className="flex items-start gap-2.5 text-xs text-content-secondary"
                                                    >
                                                        <CheckCircle2
                                                            size={15}
                                                            className="mt-0.5 shrink-0 text-feedback-success"
                                                        />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-8 flex items-center justify-between border-t border-black/[0.06] pt-4 text-xs">
                                        <span className="text-black/45 flex items-center gap-1.5">
                                            <MapPin size={12} className="text-brand-accent" />
                                            {desk.location}
                                        </span>
                                        <span className="font-semibold text-brand-primary">
                                            Dedicated Support
                                        </span>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </Container>
            </section>

            {/* VALUES */}
            <section className="bg-[#FAFAFC] py-20 sm:py-28">
                <Container size="lg">
                    <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
                        <div className="lg:col-span-5">
                            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-accent">
                                OUR PRINCIPLES
                            </span>

                            <h2 className="mt-4 text-content-primary">
                                Transparent advice.
                                <br />
                                Zero hidden agendas.
                            </h2>

                            <p className="mt-6 max-w-md text-content-secondary">
                                We combine regional accessibility across Tamil Nadu with global
                                university insights to guide each student honestly.
                            </p>
                        </div>

                        <div className="values-grid grid gap-4 sm:grid-cols-2 lg:col-span-7">
                            {[
                                {
                                    number: "01",
                                    title: "Listen first",
                                    text: "We evaluate your academic profile, budget, and long-term career aspirations before recommending any institution.",
                                },
                                {
                                    number: "02",
                                    title: "Global insight",
                                    text: "Comparative knowledge across USA, UK, Canada, Australia, Germany, Ireland, and Dubai to find the best fit.",
                                },
                                {
                                    number: "03",
                                    title: "Ethical counselling",
                                    text: "No false visa guarantees or hidden costs. We provide factual requirements and genuine documentation support.",
                                },
                                {
                                    number: "04",
                                    title: "Continuous support",
                                    text: "From your initial profile check to visa stamping and pre-departure, our team guides you at every step.",
                                },
                            ].map((value) => (
                                <div
                                    key={value.number}
                                    className="team-value rounded-[26px] border border-black/[0.07] bg-white p-6 sm:p-7 shadow-xs"
                                >
                                    <span className="text-[10px] font-bold tracking-[0.15em] text-[#253A7B]/60">
                                        {value.number}
                                    </span>

                                    <h3 className="card-title mt-4 text-content-primary">
                                        {value.title}
                                    </h3>

                                    <p className="mt-3 text-body-small text-content-secondary">
                                        {value.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="bg-white">
                <Container size="lg">
                    <div className="team-cta relative my-12 overflow-hidden rounded-[34px] bg-[#253A7B] text-white shadow-[0_20px_60px_rgba(37,58,123,0.16)] sm:my-16">
                        <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#E93F61]/10 blur-3xl" />

                        <div className="relative grid gap-10 px-7 py-12 sm:px-10 sm:py-14 lg:grid-cols-12 lg:items-center lg:px-14 lg:py-16">
                            <div className="team-cta-content lg:col-span-8">
                                <Badge
                                    variant="inverse"
                                    className="mb-5 gap-2 uppercase tracking-[0.14em]"
                                >
                                    <Sparkles size={13} className="text-[#FCF6BA]" />
                                    Book Free Consultation
                                </Badge>

                                <h2 className="max-w-3xl text-white">
                                    Discuss your global education plans with our advisory team.
                                </h2>

                                <p className="mt-5 max-w-2xl text-white/70">
                                    Book a free, 1-on-1 profile evaluation with our Chennai team
                                    in-person or virtually across Tamil Nadu.
                                </p>
                            </div>

                            <div className="lg:col-span-4 lg:flex lg:justify-end">
                                <LeadCTAButton
                                    source="our_team_cta"
                                    className="w-full sm:w-auto"
                                >
                                    Book Free Counselling
                                </LeadCTAButton>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
