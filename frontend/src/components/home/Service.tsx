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
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface BlogAuthor {
    name: string;
    role: string;
    avatar: string;
}

export interface BlogCardItem {
    meta?: string;
    title: string;
    description?: string;
    author?: BlogAuthor;
    href?: string;
    icon?: React.ComponentType<{
        size?: number;
        className?: string;
        strokeWidth?: number;
        "aria-hidden"?: boolean | "true" | "false";
    }>;
    customText?: string;
}

export interface Blog2Header {
    heading: string;
    description: string;
    ctaText: string;
    ctaHref: string;
}

export interface Blog2Props {
    header?: Partial<Blog2Header>;
    posts?: BlogCardItem[];
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

const defaultHeader: Blog2Header = {
    heading: "Complete Study Abroad Advisory Services",
    description:
        "From university shortlisting and scholarship assistance to visa approval and pre-departure briefings, we provide end-to-end guidance for your global education journey.",
    ctaText: "Explore All Services",
    ctaHref: "/services",
};

const defaultPosts: BlogCardItem[] = [
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
        title: "Visa  & Mock Interview Training",
        description:
            "Get complete visa documentation and interview preparation support.",
        href: "/services",
        icon: BadgeCheck,
        customText: "VISA",
    },
    {
        title: "Pre-Departure &  Accommodation",
        description:
            "Travel stress-free with complete pre-departure support.",
        href: "/services",
        icon: Plane,
    },
];

const colorVariants = [
    "bg-violet-400/60 hover:bg-violet-400/50",
    "bg-amber-400/60 hover:bg-amber-400/50",
    "bg-emerald-400/60 hover:bg-emerald-400/50",
    "bg-orange-400/60 hover:bg-orange-400/50",
    "bg-blue-400/60 hover:bg-blue-400/50",
    "bg-rose-400/60 hover:bg-rose-400/50",
];

export function Blog2({
    header,
    posts,
    className,
    renderCtaLink,
    renderCardLink,
}: Blog2Props = {}) {
    const activeHeader: Blog2Header = {
        ...defaultHeader,
        ...header,
    };

    const activePosts =
        posts && posts.length > 0 ? posts : defaultPosts;

    const ctaContent = (
        <span className="group/cta inline-flex items-center gap-2 text-sm font-semibold text-[#253A7B] transition-colors hover:text-[#1B2B5C]">
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
                "w-full bg-background px-4 py-8 sm:py-12 font-body",
                className
            )}
            style={{
                fontFamily: "var(--font-body), 'DM Sans', sans-serif",
            }}
        >
            <div className="mx-auto max-w-6xl">
                <div className="mx-auto mb-7 flex w-fit items-center gap-2 rounded-full bg-[#E93E60] px-6 py-3">
                    <span className="size-[7px] rounded-full bg-white" />

                    <span className="font-body text-[13px] font-medium leading-none text-white">
                        Our Services
                    </span>
                </div>

                <div className="mb-12 flex flex-col items-center gap-4 text-center md:mb-16">
                    <h2
                        className="max-w-2xl !font-body text-[30px] font-medium leading-[1.15] tracking-[-0.03em] text-[#2E2E2E] sm:text-[36px] md:text-[44px]"
                        style={{
                            fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                        }}
                    >
                        {activeHeader.heading}
                    </h2>

                    {activeHeader.description && (
                        <p className="max-w-lg font-body text-[14px] font-normal leading-6 text-muted-foreground sm:text-[16px]">
                            {activeHeader.description}
                        </p>
                    )}

                    {activeHeader.ctaHref &&
                        (renderCtaLink ? (
                            renderCtaLink({
                                href: activeHeader.ctaHref,
                                children: ctaContent,
                            })
                        ) : (
                            <Link href={activeHeader.ctaHref}>
                                {ctaContent}
                            </Link>
                        ))}
                </div>

                <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {activePosts.map((post, index) => {
                        const Icon = post.icon;

                        const card = (
                            <article
                                key={index}
                                className={cn(
                                    "group relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-[28px] p-6 font-body transition-all duration-300 sm:min-h-[380px] sm:p-7",
                                    colorVariants[index % colorVariants.length]
                                )}
                                style={{
                                    fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                                }}
                            >
                                <div className="flex items-center justify-start">
                                    {(Icon || post.customText) && (
                                        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[15px] bg-white shadow-sm">
                                            {post.customText ? (
                                                <span className="text-[10px] font-bold tracking-wide text-[#253A7B]">
                                                    {post.customText}
                                                </span>
                                            ) : Icon ? (
                                                <Icon
                                                    size={24}
                                                    strokeWidth={2.4}
                                                    className="text-[#253A7B]"
                                                    aria-hidden="true"
                                                />
                                            ) : null}
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-1 flex-col justify-center py-8">
                                    <h3
                                        className="max-w-[290px] !font-body text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#2E2E2E] sm:text-[24px]"
                                        style={{
                                            fontFamily:
                                                "var(--font-body), 'DM Sans', sans-serif",
                                        }}
                                    >
                                        {post.title}
                                    </h3>

                                    {post.description && (
                                        <p className="mt-3 max-w-[300px] font-body text-[14px] font-medium leading-6 text-[#2E2E2E]/70">
                                            {post.description}
                                        </p>
                                    )}
                                </div>

                                <div className="flex items-center justify-end">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-[#253A7B] px-5 py-2.5 font-body text-[13px] font-semibold text-white shadow-sm transition-all duration-300 group-hover:bg-[#1B2B5C]">
                                        Explore

                                        <ArrowUpRight
                                            className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                            strokeWidth={2}
                                        />
                                    </div>
                                </div>
                            </article>
                        );

                        if (renderCardLink && post.href) {
                            return renderCardLink({
                                href: post.href,
                                children: card,
                            });
                        }

                        if (post.href) {
                            return (
                                <Link
                                    key={index}
                                    href={post.href}
                                    className="block h-full rounded-[28px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#253A7B] focus-visible:ring-offset-2"
                                >
                                    {card}
                                </Link>
                            );
                        }

                        return card;
                    })}
                </div>
            </div>
        </section>
    );
}

export default Blog2;
export { Blog2 as ServicesSection };