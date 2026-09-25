"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Globe,
    Mail,
    Sparkles,
    Users,
} from "lucide-react";

import Image from "next/image";
import Container from "@/components/ui/Container";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import { Badge } from "@/components/ui/Badge";

gsap.registerPlugin(ScrollTrigger);

/* ================================================================
   TEAM DATA
================================================================ */

const team = [
    {
        name: "Kannan C",
        role: "Founder & Creative Director",
        location: "Coimbatore, India",
        image: "/images/team/kannan.jpg",
        initials: "KC",
        bio: "Building the vision, creative direction and digital experiences behind HighEd.",
        linkedin: "#",
        email: "mailto:hello@highed.com",
        featured: true,
    },
    {
        name: "Priya Sharma",
        role: "Senior Education Counsellor",
        location: "Chennai, India",
        image: "/images/team/priya.jpg",
        initials: "PS",
        bio: "Helping students find the right academic path and destination.",
        linkedin: "#",
        email: "mailto:hello@highed.com",
    },
    {
        name: "Arjun Kumar",
        role: "International Admissions Advisor",
        location: "Chennai, India",
        image: "/images/team/arjun.jpg",
        initials: "AK",
        bio: "Supporting students through university applications and admissions.",
        linkedin: "#",
        email: "mailto:hello@highed.com",
    },
    {
        name: "Deepa Krishnan",
        role: "Senior Visa Counsellor",
        location: "Chennai, India",
        image: "/images/team/deepa.jpg",
        initials: "DK",
        bio: "Making complex visa processes simple, clear and stress-free.",
        linkedin: "#",
        email: "mailto:hello@highed.com",
    },
    {
        name: "Rahul Nair",
        role: "University Relations Manager",
        location: "India",
        image: "/images/team/rahul.jpg",
        initials: "RN",
        bio: "Building relationships with universities across the world.",
        linkedin: "#",
        email: "mailto:hello@highed.com",
    },
    {
        name: "Sneha Patel",
        role: "Student Success Manager",
        location: "India",
        image: "/images/team/sneha.jpg",
        initials: "SP",
        bio: "Making sure every student receives support throughout their journey.",
        linkedin: "#",
        email: "mailto:hello@highed.com",
    },
    {
        name: "Karthik V",
        role: "Digital Marketing Lead",
        location: "Coimbatore, India",
        image: "/images/team/karthik.jpg",
        initials: "KV",
        bio: "Connecting ambitious students with opportunities around the world.",
        linkedin: "#",
        email: "mailto:hello@highed.com",
    },
    {
        name: "Meera Iyer",
        role: "Application Specialist",
        location: "India",
        image: "/images/team/meera.jpg",
        initials: "MI",
        bio: "Helping students turn their academic profiles into strong applications.",
        linkedin: "#",
        email: "mailto:hello@highed.com",
    },
];

/* ================================================================
   TEAM CARD
================================================================ */

function TeamCard({
    member,
    index,
}: {
    member: (typeof team)[number];
    index: number;
}) {
    return (
        <article
            className={`team-card group relative overflow-hidden rounded-[30px] border border-black/[0.07] bg-white ${member.featured ? "lg:col-span-8" : "lg:col-span-4"
                }`}
        >
            {/* Image */}
            <div
                className={`relative overflow-hidden bg-[#EEF1FA] ${member.featured ? "aspect-[16/10]" : "aspect-[4/4.5]"
                    }`}
            >
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="team-image object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Fallback initials */}
                <div className="absolute inset-0 -z-0 flex items-center justify-center bg-[linear-gradient(135deg,var(--icon-bg-primary),#F8F9FC)]">
                    <span className="font-heading text-6xl tracking-[-0.06em] text-brand-primary/15">
                        {member.initials}
                    </span>
                </div>

                {/* Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Index */}
                <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/15 text-[10px] font-bold text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                    {String(index + 1).padStart(2, "0")}
                </div>

                {/* LinkedIn */}
                <a
                    href={member.linkedin}
                    aria-label={`${member.name} LinkedIn`}
                    className="absolute right-5 top-5 flex size-11 sm:size-12 translate-y-2 items-center justify-center rounded-full bg-white text-brand-primary opacity-0 shadow-lg transition-all duration-300 hover:scale-105 group-hover:translate-y-0 group-hover:opacity-100"
                >
                    <Globe size={18} />
                </a>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                        <h3 className="card-title text-content-primary">
                            {member.name}
                        </h3>

                        <p className="mt-1 text-xs font-semibold text-brand-primary">
                            {member.role}
                        </p>
                    </div>

                    <a
                        href={member.email}
                        aria-label={`Email ${member.name}`}
                        className="flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-full bg-surface-subtle text-content-secondary transition-all hover:bg-brand-primary hover:text-white"
                    >
                        <Mail size={16} />
                    </a>
                </div>

                <p className="mt-4 text-body-small text-content-secondary">
                    {member.bio}
                </p>

                <div className="mt-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-black/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                    {member.location}
                </div>
            </div>
        </article>
    );
}

/* ================================================================
   PAGE
================================================================ */

export default function OurTeamPage() {
    const root = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!root.current) return;
        if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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

            /* TEAM CARDS */
            gsap.utils.toArray<HTMLElement>(".team-grid").forEach((grid) => {
                const cards = grid.querySelectorAll(".team-card");

                gsap.from(cards, {
                    y: 55,
                    opacity: 0,
                    scale: 0.97,
                    duration: 0.8,
                    stagger: 0.09,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: grid,
                        start: "top 82%",
                        once: true,
                    },
                });
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

            /* FLOATING ORB */
            gsap.to(".floating-orb", {
                y: -25,
                x: 15,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <main
            ref={root}
            className="min-h-screen overflow-hidden bg-[#FAFAFC] font-body text-[#121314]"
        >
            {/* ========================================================
          HERO
      ======================================================== */}

            <section className="relative overflow-hidden bg-white">
                <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#253A7B]/[0.045] blur-3xl" />

                <div className="pointer-events-none absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#E93F61]/[0.035] blur-3xl" />

                <Container size="lg">
                    <div className="relative py-20 sm:py-28 lg:py-32">
                        <div className="max-w-5xl">
                            <Badge variant="brand" className="team-eyebrow gap-2 uppercase tracking-[0.14em]">
                                <Users size={13} />
                                Meet Our Team
                            </Badge>

                            <h1 className="team-title mt-6 max-w-5xl">
                                People behind
                                <br />
                                <span className="text-[#253A7B]">your next chapter.</span>
                            </h1>

                            <p className="team-description mt-7 max-w-2xl text-content-secondary">
                                A team of counsellors, advisors, application specialists and
                                problem-solvers working together to make your study-abroad
                                journey simpler.
                            </p>
                        </div>

                        {/* Hero metadata */}
                        <div className="mt-10 flex flex-wrap gap-3">
                            {[
                                "Education Counselling",
                                "University Admissions",
                                "Visa Guidance",
                                "Student Success",
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

            {/* ========================================================
          TEAM
      ======================================================== */}

            <section className="bg-[#FAFAFC]">
                <Container size="lg">
                    <div className="py-16 sm:py-20 lg:py-24">
                        <div className="mb-10 flex items-end justify-between gap-6 sm:mb-12">
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#253A7B]">
                                    THE PEOPLE
                                </span>

                                <h2 className="mt-3">
                                    One team. Many strengths.
                                </h2>
                            </div>

                            <span className="hidden rounded-full bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-black/30 shadow-sm sm:block">
                                HighEd Team
                            </span>
                        </div>

                        {/* ==================================================
                TEAM GRID
            ================================================== */}

                        <div className="team-grid grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
                            {team.map((member, index) => (
                                <TeamCard
                                    key={member.name}
                                    member={member}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* ========================================================
          VALUES
      ======================================================== */}

            <section className="bg-white">
                <Container size="lg">
                    <div className="py-20 sm:py-28">
                        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
                            <div className="lg:col-span-5">
                                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-accent">
                                    HOW WE WORK
                                </span>

                                <h2 className="mt-4 text-content-primary">
                                    More than
                                    <br />
                                    just counselling.
                                </h2>

                                <p className="mt-6 max-w-md text-content-secondary">
                                    We combine human guidance, global university knowledge and
                                    technology to help students make informed decisions.
                                </p>
                            </div>

                            <div className="values-grid grid gap-4 sm:grid-cols-2 lg:col-span-7">
                                {[
                                    {
                                        number: "01",
                                        title: "Listen first",
                                        text: "We start by understanding your goals, interests and plans before suggesting anything.",
                                    },
                                    {
                                        number: "02",
                                        title: "Think globally",
                                        text: "We help you explore opportunities across multiple destinations and education systems.",
                                    },
                                    {
                                        number: "03",
                                        title: "Stay personal",
                                        text: "Every student's journey is different. Our guidance is built around your profile.",
                                    },
                                    {
                                        number: "04",
                                        title: "Stay with you",
                                        text: "From shortlisting to applications and visas, we're there throughout the journey.",
                                    },
                                ].map((value) => (
                                    <div
                                        key={value.number}
                                        className="team-value rounded-[26px] border border-black/[0.07] bg-[#FAFAFC] p-6 sm:p-7"
                                    >
                                        <span className="text-[10px] font-bold tracking-[0.15em] text-[#253A7B]/45">
                                            {value.number}
                                        </span>

                                        <h3 className="mt-5 card-title text-content-primary">
                                            {value.title}
                                        </h3>

                                        <p className="mt-3 text-body-small text-content-secondary">
                                            {value.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ========================================================
          CTA
      ======================================================== */}

            <section className="bg-[#FAFAFC]">
                <Container size="lg">
                    <div className="team-cta relative my-12 overflow-hidden rounded-[34px] bg-[#253A7B] text-white shadow-[0_20px_60px_rgba(37,58,123,0.16)] sm:my-16">
                        {/* Decorative orb */}
                        <div className="floating-orb pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[50px] border-white/[0.04]" />

                        <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#E93F61]/10 blur-3xl" />

                        <div className="relative grid gap-10 px-7 py-12 sm:px-10 sm:py-14 lg:grid-cols-12 lg:items-center lg:px-14 lg:py-16">
                            <div className="team-cta-content lg:col-span-8">
                                <Badge variant="inverse" className="mb-5 gap-2 uppercase tracking-[0.14em]">
                                    <Sparkles size={13} className="text-[#FCF6BA]" />
                                    Start your journey
                                </Badge>

                                <h2 className="max-w-3xl text-white">
                                    Your dream university is closer than you think.
                                </h2>

                                <p className="mt-5 max-w-2xl text-white/70">
                                    Talk to our team about your course, destination and
                                    university options.
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
        </main>
    );
}