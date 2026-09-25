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
    type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const CARD_BG_COLORS = [
    "#E5EDF2",
    "#DEECE1",
    "#F2EAE0",
    "#F2E7ED",
] as const;

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

const defaultHeader: ServicesHeader = {
    heading: "Complete Study Abroad Advisory Services",
    description:
        "From university shortlisting and scholarship assistance to visa approval and pre-departure briefings, we provide end-to-end guidance for your global education journey.",
    ctaText: "Explore All Services",
    ctaHref: "/services",
};

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

export function ServicesSection({
    header,
    posts,
    className,
    renderCtaLink,
    renderCardLink,
}: ServicesSectionProps = {}) {
    const activeHeader: ServicesHeader = {
        ...defaultHeader,
        ...header,
    };

    const activePosts =
        posts && posts.length > 0 ? posts : defaultPosts;

    const ctaContent = (
        <span className="group/cta inline-flex items-center gap-2 text-sm font-semibold text-brand-primary transition-colors hover:text-brand-primary-hover">
            {activeHeader.ctaText}
            <ArrowUpRight
                className="size-4 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                strokeWidth={2}
            />
        </span>
    );

    return (
        <section
            className={cn(
                "w-full bg-background py-12 sm:py-16 md:py-20 tracking-[-0.04em] [letter-spacing:-0.04em] [&_*]:[letter-spacing:-0.04em]",
                className
            )}
        >
            <Container size="lg">
                <SectionHeading
                    eyebrow="Our Services"
                    title={activeHeader.heading}
                    description={activeHeader.description}
                    className="mb-8"
                />

                {activeHeader.ctaHref && (
                    <div className="mb-12 flex justify-center -mt-4">
                        {renderCtaLink ? (
                            renderCtaLink({
                                href: activeHeader.ctaHref,
                                children: ctaContent,
                            })
                        ) : (
                            <Link
                                href={activeHeader.ctaHref}
                                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-full"
                            >
                                {ctaContent}
                            </Link>
                        )}
                    </div>
                )}

                <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {activePosts.map((post, index) => {
                        const Icon = post.icon;
                        const cardBg =
                            post.bgColor ||
                            CARD_BG_COLORS[index % CARD_BG_COLORS.length];

                        const cardInner = (
                            <div
                                className={cn(
                                    "relative flex flex-col justify-between h-full min-h-[340px] rounded-3xl p-7 sm:p-8",
                                    "border border-black/[0.06] shadow-[0_2px_8px_rgba(0,0,0,0.03)]",
                                    "transition-all duration-300 ease-out",
                                    "group-hover/card:-translate-y-1.5 group-hover/card:shadow-[0_16px_32px_rgba(0,0,0,0.07)]",
                                    "group-hover/card:border-black/[0.12]"
                                )}
                                style={{ backgroundColor: cardBg }}
                            >
                                {/* Header / Icon */}
                                <div>
                                    {post.customText ? (
                                        <div className="flex size-14 items-center justify-center rounded-2xl bg-white shadow-xs transition-transform duration-300 group-hover/card:scale-105">
                                            <span className="text-xs font-bold tracking-tight text-brand-primary">
                                                {post.customText}
                                            </span>
                                        </div>
                                    ) : Icon ? (
                                        <div className="flex size-14 items-center justify-center rounded-2xl bg-white shadow-xs text-brand-primary transition-transform duration-300 group-hover/card:scale-105">
                                            <Icon
                                                className="size-6 text-brand-primary"
                                                strokeWidth={2}
                                            />
                                        </div>
                                    ) : null}
                                </div>

                                {/* Content */}
                                <div className="flex-1 py-6 flex flex-col justify-center">
                                    <h3 className="text-xl sm:text-2xl font-semibold text-content-primary leading-snug tracking-[-0.03em]">
                                        {post.title}
                                    </h3>

                                    {post.description && (
                                        <p className="mt-3 text-sm sm:text-[15px] font-normal leading-relaxed text-content-secondary">
                                            {post.description}
                                        </p>
                                    )}
                                </div>

                                {/* Footer CTA Pill */}
                                <div className="flex items-center justify-end pt-2">
                                    <span className="inline-flex items-center gap-1.5 h-10 px-5 rounded-full bg-brand-primary text-white text-xs font-semibold shadow-xs transition-all duration-200 group-hover/card:bg-brand-primary-hover group-hover/card:shadow-sm">
                                        Explore
                                        <ArrowUpRight
                                            className="size-4 transition-transform duration-200 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5"
                                            strokeWidth={2.2}
                                        />
                                    </span>
                                </div>
                            </div>
                        );

                        if (renderCardLink && post.href) {
                            return (
                                <div key={index} className="group/card h-full">
                                    {renderCardLink({
                                        href: post.href,
                                        children: cardInner,
                                    })}
                                </div>
                            );
                        }

                        if (post.href) {
                            return (
                                <Link
                                    key={index}
                                    href={post.href}
                                    className="group/card block h-full rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                                >
                                    {cardInner}
                                </Link>
                            );
                        }

                        return (
                            <div key={index} className="group/card h-full">
                                {cardInner}
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}

export default ServicesSection;
export { ServicesSection as Blog2 };