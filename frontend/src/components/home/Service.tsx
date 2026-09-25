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

/* =========================================================
   CARD BACKGROUND COLORS
========================================================= */

export const CARD_BG_COLORS = [
    "#E5EDF2",
    "#DEECE1",
    "#F2EAE0",
    "#F2E7ED",
] as const;

/* =========================================================
   DECORATIVE CARD SVGs
========================================================= */

const CardDecorativeIcons = [
    /* 01 */
    (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            fill="none"
        >
            <path
                d="M228 0C172.772 0 128 44.772 128 100V0H0V28C0 83.228 44.772 128 100 128H0V256H28C83.228 256 128 211.228 128 156V256H256V228C256 172.772 211.228 128 156 128H256V0H228Z"
                fill="currentColor"
            /><style>box-shadow: inset 0 0 8px rgba(255, 255, 255, 0.75);</style>
        </svg>
    ),

    /* 02 */
    (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            fill="none"
        >
            <path
                d="M128 28C128 83.228 83.228 128 28 128H128V128ZM256 156C256 211.228 211.228 256 156 256H128V156C128 211.228 83.228 256 28 256H0V0H256V28C256 83.228 211.228 128 156 128H256V156Z"
                fill="currentColor"
            /><style>box-shadow: inset 0 0 8px rgba(255, 255, 255, 0.75);</style>
        </svg>
    ),

    /* 03 */
    (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            fill="none"
        >
            <path
                d="M192 0C227.346 0 256 28.654 256 64C256 99.346 227.346 128 192 128C227.346 128 256 156.654 256 192C256 227.346 227.346 256 192 256C156.654 256 128 227.346 128 192C128 227.346 99.346 256 64 256C28.654 256 0 227.346 0 192C0 156.654 28.654 128 64 128C28.654 128 0 99.346 0 64C0 28.654 28.654 0 64 0C99.346 0 128 28.654 128 64C128 28.654 156.654 0 192 0ZM128 100C112.536 100 100 112.536 100 128C100 143.464 112.536 156 128 156C143.464 156 156 143.464 156 128C156 112.536 143.464 100 128 100Z"
                fill="currentColor"
            /><style>box-shadow: inset 0 0 8px rgba(255, 255, 255, 0.75);</style>
        </svg>
    ),

    /* 04 */
    (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            fill="none"
        >
            <path
                d="M128 0C147.68 0 164.04 14.213 167.377 32.934C182.974 22.055 204.594 23.574 218.51 37.49C232.426 51.406 233.944 73.025 223.066 88.622C241.787 91.96 256 108.32 256 128C256 147.68 241.787 164.04 223.065 167.377C233.944 182.974 232.426 204.594 218.51 218.51C204.594 232.426 182.974 233.944 167.377 223.065C164.04 241.787 147.68 256 128 256C108.32 256 91.959 241.787 88.622 223.065C73.025 233.944 51.406 232.426 37.49 218.51C23.574 204.594 22.055 182.974 32.934 167.377C14.213 164.04 0 147.68 0 128C0 108.32 14.213 91.96 32.934 88.622C22.056 73.025 23.574 51.406 37.49 37.49C51.406 23.574 73.025 22.055 88.622 32.934C91.96 14.213 108.32 0 128 0Z"
                fill="currentColor"
            /><style>box-shadow: inset 0 0 8px rgba(255, 255, 255, 0.75);</style>
        </svg>
    ),

    /* 05 */
    (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            fill="none"
        >
            <path
                d="M168 176C168 220.183 132.183 256 88 256H80C35.817 256 0 220.183 0 176H168ZM256 176C256 220.183 220.183 256 176 256H176V176H256ZM84 0C130.392 0 168 37.608 168 84C168 130.392 130.392 168 84 168C37.608 168 0 130.392 0 84C0 37.608 37.608 0 84 0ZM176 0C220.183 0 256 35.817 256 80V88C256 132.183 220.183 168 176 168V0Z"
                fill="currentColor"
            /><style>box-shadow: inset 0 0 8px rgba(255, 255, 255, 0.75);</style>
        </svg>
    ),

    /* 06 */
    (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            fill="none"
        >
            <path
                d="M 160 0 C 177.397 0 191.551 13.883 191.989 31.174 L 192.011 32.826 C 192.442 49.843 206.157 63.558 223.174 63.989 L 224.826 64.011 C 242.117 64.449 256 78.603 256 96 C 256 113.673 241.673 128 224 128 C 241.673 128 256 142.327 256 160 C 256 177.397 242.117 191.551 224.826 191.989 L 223.174 192.011 C 206.157 192.442 192.442 206.157 192.011 223.174 L 191.989 224.826 C 191.551 242.117 177.397 256 160 256 C 142.327 256 128 241.673 128 224 C 128 241.673 113.673 256 96 256 C 78.603 256 64.449 242.117 64.01 224.826 L 63.99 223.174 C 63.558 206.157 49.843 192.442 32.826 192.011 L 31.174 191.989 C 13.883 191.551 0 177.397 0 160 C 0 142.327 14.327 128 32 128 C 14.327 128 0 113.673 0 96 C 0 78.603 13.883 64.449 31.174 64.01 L 32.826 63.99 C 49.843 63.558 63.558 49.843 63.989 32.826 L 64.011 31.174 C 64.449 13.883 78.603 0 96 0 C 113.673 0 128 14.327 128 32 C 128 14.327 142.327 0 160 0 Z M 128 64 C 128 99.346 99.346 128 64 128 C 99.346 128 128 156.654 128 192 C 128 156.654 156.654 128 192 128 C 156.654 128 128 99.346 128 64 Z"
                fill="currentColor"
            /><style>box-shadow: inset 0 0 8px rgba(255, 255, 255, 0.75);</style>
        </svg>

    ),
] as const;

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
        href: "/services",
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
                            CardDecorativeIcons[index];

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
                                            <p className="mt-3 text-sm font-normal leading-relaxed text-content-secondary sm:text-[15px]">
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