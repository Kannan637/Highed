"use client";

import Image from "next/image";
import { Play, ArrowRight } from "lucide-react";
import EyebrowBadge from "@/components/ui/EyebrowBadge";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import Link from "next/link";

const successStories = [
    {
        id: 1,
        image: "/images/storis/story-1.webp",
        alt: "Student success story",
    },
    {
        id: 2,
        image: "/images/storis/story-2.webp",
        alt: "Student success story",
    },
    {
        id: 3,
        image: "/images/storis/story-3.webp",
        alt: "Student success story",
    },
    {
        id: 4,
        image: "/images/storis/story-4.webp",
        alt: "Student success story",
    },
];

export default function SuccessStories() {
    return (
        <section className="w-full bg-[#F5F5F9] py-16 md:px-8 lg:py-20 tracking-tight-5 [letter-spacing:var(--tracking-tight-5)] [&_*]:[letter-spacing:var(--tracking-tight-5)]">
            <div className="mx-auto flex max-w-[1320px] flex-col items-center">

                {/* Eyebrow Badge */}
                <EyebrowBadge>Real Stories</EyebrowBadge>

                {/* Heading */}
                <h2 className="px-6 text-center text-content-primary">
                    Student Success Stories
                </h2>

                {/* Description */}
                <p className="mt-5 max-w-[520px] px-6 text-center text-content-secondary">
                    Stay informed with expert breakdowns of immigration policies,
                    <br className="hidden md:block" />
                    scholarship criteria, and global campus life.
                </p>

                {/* =========================================
                    MOBILE CAROUSEL
                ========================================== */}
                <div
                    className="
                        mt-12
                        flex
                        w-full
                        snap-x
                        snap-mandatory
                        gap-4
                        overflow-x-auto
                        overscroll-x-contain
                        px-6
                        pb-4
                        scrollbar-none
                        sm:hidden
                    "
                >
                    {successStories.map((story) => (
                        <div
                            key={story.id}
                            className="
                                group
                                relative
                                h-[500px]
                                w-[302px]
                                min-w-[302px]
                                snap-center
                                overflow-hidden
                                rounded-[24px]
                                bg-black
                            "
                        >
                            {/* Image */}
                            <Image
                                src={story.image}
                                alt={story.alt}
                                fill
                                sizes="302px"
                                className="
                                    object-cover
                                    object-center
                                    transition-transform
                                    duration-500
                                    ease-out
                                    group-hover:scale-[1.03]
                                "
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/5 transition-colors duration-300 group-hover:bg-black/15" />

                            {/* Play Button */}
                            <button
                                type="button"
                                aria-label={`Play success story ${story.id}`}
                                className="
                                    absolute
                                    left-1/2
                                    top-1/2
                                    flex
                                    h-16
                                    w-16
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#253A7B]
                                    text-white
                                    shadow-lg
                                    transition-all
                                    duration-300
                                    hover:scale-110
                                    hover:bg-[#E93F61]
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-white
                                    focus:ring-offset-2
                                    focus:ring-offset-[#253A7B]
                                "
                            >
                                <Play
                                    size={24}
                                    strokeWidth={0}
                                    fill="currentColor"
                                    className="ml-1"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                    ))}
                </div>

                {/* =========================================
                    TABLET / DESKTOP GRID
                ========================================== */}
                <div
                    className="
                        mt-12
                        hidden
                        w-full
                        justify-items-center
                        gap-6
                        sm:grid
                        sm:grid-cols-2
                        lg:grid-cols-4
                        lg:gap-[22px]
                    "
                >
                    {successStories.map((story) => (
                        <div
                            key={story.id}
                            className="
                                group
                                relative
                                h-[500px]
                                w-[302px]
                                overflow-hidden
                                rounded-[24px]
                                bg-black
                            "
                        >
                            {/* Image */}
                            <Image
                                src={story.image}
                                alt={story.alt}
                                fill
                                sizes="302px"
                                className="
                                    object-cover
                                    object-center
                                    transition-transform
                                    duration-500
                                    ease-out
                                    group-hover:scale-[1.03]
                                "
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/5 transition-colors duration-300 group-hover:bg-black/15" />

                            {/* Play Button */}
                            <button
                                type="button"
                                aria-label={`Play success story ${story.id}`}
                                className="
                                    absolute
                                    left-1/2
                                    top-1/2
                                    flex
                                    h-16
                                    w-16
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#253A7B]
                                    text-white
                                    shadow-lg
                                    transition-all
                                    duration-300
                                    hover:scale-110
                                    hover:bg-[#E93F61]
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-white
                                    focus:ring-offset-2
                                    focus:ring-offset-[#253A7B]
                                "
                            >
                                <Play
                                    size={24}
                                    strokeWidth={0}
                                    fill="currentColor"
                                    className="ml-1"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:mt-8">
                    <LeadCTAButton source="real_stories_bottom">
                        Book Free Counselling
                    </LeadCTAButton>

                    <Link
                        href="/success-stories"
                        aria-label="View all student success stories"
                        className="group inline-flex h-12 cursor-pointer items-center gap-2 rounded-full px-6 text-sm font-semibold text-[#E93F61] transition-all duration-200 hover:bg-[#E93F61]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E93F61] focus-visible:ring-offset-2"
                    >
                        <span>View All Stories</span>

                        <ArrowRight
                            size={18}
                            strokeWidth={2.2}
                            aria-hidden="true"
                            className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                    </Link>
                </div>

            </div>
        </section>
    );
}