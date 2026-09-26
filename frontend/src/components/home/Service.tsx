"use client";

import React from "react";
import Link from "next/link";
import {
    Award,
    GraduationCap,
    FileCheck2,
    BadgeDollarSign,
    BadgeCheck,
    Plane,
    ArrowUpRight,
    ArrowRight,
    type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export { CARD_BG_COLORS, CardDecorativeIcons } from "./service-constants";
import { CARD_BG_COLORS, CardDecorativeIcons } from "./service-constants";

/* =========================================================
   TYPES
========================================================= */

export interface ServiceCardItem {
    meta?: string;
    title: string;
    description?: string;
    href?: string;
    icon?: LucideIcon;
    customText?: string;
    bgColor?: string;
}

export interface ServicesHeader {
    heading: string;
    description: string;
    ctaText: string;
    ctaHref: string;
}

export interface ServicesSectionProps {
    header?: Partial<ServicesHeader>;
    posts?: ServiceCardItem[];
    className?: string;

    renderCtaLink?: (props: {
        href: string;
        children: React.ReactNode;
    }) => React.ReactNode;

    renderCardLink?: (props: {
        href: string;
        children: React.ReactNode;
    }) => React.ReactNode;
}

/* =========================================================
   DEFAULT HEADER
========================================================= */

const defaultHeader: ServicesHeader = {
    heading: "Complete Study Abroad Advisory Services",
    description:
        "From university shortlisting and scholarship assistance to visa approval and pre-departure briefings, we provide end-to-end guidance for your global education journey.",
    ctaText: "Explore All Services",
    ctaHref: "/services",
};

/* =========================================================
   DEFAULT CARDS
========================================================= */

const defaultPosts: ServiceCardItem[] = [
    {
        title: "Free Study Abroad Counselling",
        description:
            "Expert counselling to choose the right country and university.",
        href: "/book-counselling",
        icon: Award,
    },
    {
        title: "University & Course Selection",
        description:
            "Find your best-fit program from 500+ universities worldwide.",
        href: "/study-in",
        icon: GraduationCap,
    },
    {
        title: "SOP, LOR & Application Assistance",
        description:
            "Craft compelling SOPs and LORs tailored to university requirements.",
        href: "/services",
        icon: FileCheck2,
    },
    {
        title: "Scholarships & Education Loans",
        description:
            "Explore scholarships and education loans to fund your studies.",
        href: "/scholarships",
        icon: BadgeDollarSign,
    },
    {
        title: "Visa & Mock Interview Training",
        description:
            "Get complete visa documentation and interview preparation support.",
        href: "/services",
        icon: BadgeCheck,
        customText: "VISA",
    },
    {
        title: "Pre-Departure & Accommodation",
        description:
            "Travel stress-free with complete pre-departure support.",
        href: "#",
        icon: Plane,
    },
];

/* =========================================================
   SERVICES SECTION
========================================================= */

export function ServicesSection({
    header,
    posts,
    className,
    renderCtaLink: _renderCtaLink,
    renderCardLink,
}: ServicesSectionProps = {}) {
    const activeHeader: ServicesHeader = {
        ...defaultHeader,
        ...header,
    };

    const activePosts =
        posts && posts.length > 0 ? posts : defaultPosts;

    return (
        <section
            className={cn(
                "w-full bg-background py-12 tracking-tight-5 [letter-spacing:var(--tracking-tight-5)] [&_*]:[letter-spacing:var(--tracking-tight-5)] sm:py-16 md:py-20",
                className
            )}
        >
            <Container size="lg">
                {/* =====================================================
                    SECTION HEADER
                ====================================================== */}

                <SectionHeading
                    eyebrow="Our Services"
                    title={activeHeader.heading}
                    description={activeHeader.description}
                    className="mb-8"
                />

                {/* =====================================================
                    SERVICE CARDS
                ====================================================== */}

                <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {activePosts.map((post, index) => {
                        const Icon = post.icon;

                        const cardBg =
                            post.bgColor ||
                            CARD_BG_COLORS[
                            index % CARD_BG_COLORS.length
                            ];

                        const DecorativeIcon =
                            CardDecorativeIcons[
                            index % CardDecorativeIcons.length
                            ];

                        const cardInner = (
                            <div
                                className={cn(
                                    "group relative isolate flex h-full min-h-[340px] flex-col justify-between overflow-hidden rounded-3xl p-7 sm:p-8",

                                    /* Border */
                                    "border border-black/[0.06]",

                                    /* Shadow */
                                    "shadow-[0_2px_8px_rgba(0,0,0,0.03)]",

                                    /* Animation */
                                    "transition-all duration-300 ease-out",
                                    "group-hover/card:-translate-y-1.5",
                                    "group-hover/card:border-black/[0.12]",
                                    "group-hover/card:shadow-[0_16px_32px_rgba(0,0,0,0.07)]"
                                )}
                                style={{
                                    backgroundColor: cardBg,
                                }}
                            >
                                {/* =================================================
                                    DECORATIVE BACKGROUND SVG

                                    Positioned top-right and placed behind
                                    all card content.
                                ================================================== */}

                                {DecorativeIcon && (
                                    <DecorativeIcon
                                        aria-hidden="true"
                                        className={cn(
                                            "pointer-events-none absolute -right-10 -top-10 z-0",
                                            "h-55 w-55",
                                            "opacity-30",
                                            "text-black/[0.08]",
                                            "transition-all duration-500 ease-out",
                                            "group-hover/card:scale-105",
                                            "group-hover/card:text-black/[0.10]"
                                        )}
                                    />
                                )}

                                {/* =================================================
                                    CONTENT LAYER

                                    z-10 keeps all content above the SVG.
                                ================================================== */}

                                <div className="relative z-10 flex h-full flex-col justify-between">
                                    {/* =================================================
                                        ICON
                                    ================================================== */}

                                    <div>
                                        {post.customText ? (
                                            <div className="flex size-14 items-center justify-center rounded-2xl bg-white shadow-xs transition-transform duration-300 group-hover/card:scale-105">
                                                <span className="text-xs font-bold tracking-tight text-brand-primary">
                                                    {post.customText}
                                                </span>
                                            </div>
                                        ) : Icon ? (
                                            <div className="flex size-14 items-center justify-center rounded-2xl bg-white text-brand-primary shadow-xs transition-transform duration-300 group-hover/card:scale-105">
                                                <Icon
                                                    className="size-6 text-brand-primary"
                                                    strokeWidth={2}
                                                />
                                            </div>
                                        ) : null}
                                    </div>

                                    {/* =================================================
                                        CONTENT
                                    ================================================== */}

                                    <div className="flex flex-1 flex-col justify-center py-6">
                                        <h3 className="card-title text-content-primary">
                                            {post.title}
                                        </h3>

                                        {post.description && (
                                            <p className="mt-3 text-body-small text-content-secondary leading-relaxed">
                                                {post.description}
                                            </p>
                                        )}
                                    </div>

                                    {/* =================================================
                                        CARD CTA
                                    ================================================== */}

                                    <div className="flex items-center justify-end pt-2">
                                        <span
                                            className="
                                                inline-flex
                                                h-10
                                                items-center
                                                gap-1.5
                                                rounded-full
                                                bg-brand-primary
                                                px-5
                                                text-xs
                                                font-semibold
                                                text-white
                                                shadow-xs
                                                transition-all
                                                duration-200
                                                group-hover/card:bg-brand-primary-hover
                                                group-hover/card:shadow-sm
                                            "
                                        >
                                            Explore

                                            <ArrowUpRight
                                                className="size-4 transition-transform duration-200 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5"
                                                strokeWidth={2.2}
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );

                        /* =====================================================
                           CUSTOM CARD LINK
                        ====================================================== */

                        if (renderCardLink && post.href) {
                            return (
                                <div
                                    key={`${post.title}-${index}`}
                                    className="group/card h-full"
                                >
                                    {renderCardLink({
                                        href: post.href,
                                        children: cardInner,
                                    })}
                                </div>
                            );
                        }

                        /* =====================================================
                           DEFAULT CARD LINK
                        ====================================================== */

                        if (post.href) {
                            return (
                                <Link
                                    key={`${post.title}-${index}`}
                                    href={post.href}
                                    className="
                                        group/card
                                        block
                                        h-full
                                        rounded-3xl
                                        focus-visible:outline-none
                                        focus-visible:ring-2
                                        focus-visible:ring-brand-primary
                                        focus-visible:ring-offset-2
                                    "
                                >
                                    {cardInner}
                                </Link>
                            );
                        }

                        /* =====================================================
                           NON-LINK CARD
                        ====================================================== */

                        return (
                            <div
                                key={`${post.title}-${index}`}
                                className="group/card h-full"
                            >
                                {cardInner}
                            </div>
                        );
                    })}
                </div>

                {/* =====================================================
                    BOTTOM CTA
                ====================================================== */}

                {activeHeader.ctaHref && (
                    <div className="mt-10 flex justify-center lg:mt-8">
                        <Link
                            href={activeHeader.ctaHref}
                            className="
                                group
                                inline-flex
                                h-12
                                cursor-pointer
                                items-center
                                gap-2
                                rounded-full
                                px-6
                                text-sm
                                font-semibold
                                text-brand-accent
                                transition-all
                                hover:bg-brand-accent/10
                                focus-visible:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-brand-accent
                            "
                        >
                            <span>View All Services</span>

                            <ArrowRight
                                size={18}
                                strokeWidth={2.2}
                                className="transition-transform duration-200 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                )}
            </Container>
        </section>
    );
}

export default ServicesSection;

export { ServicesSection as Blog2 };