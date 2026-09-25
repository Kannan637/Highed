"use client";

import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

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
        <section className="w-full bg-[#F5F5F9] px-6 py-16 md:px-8 lg:py-20">
            <div className="mx-auto flex max-w-[1320px] flex-col items-center">
                {/* Badge */}
                <div className="mb-5 inline-flex h-8 items-center gap-2 rounded-full bg-[#E93F61] px-4">
                    <span className="h-2 w-2 rounded-full bg-white" />
                    <span className="font-dm-sans text-sm font-medium text-white">
                        Success Story
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center font-dm-sans text-[40px] font-medium leading-[1.1] tracking-[-0.04em] text-[#121314] md:text-[48px]">
                    Over students Success Storys
                </h2>

                {/* Description */}
                <p className="mt-5 max-w-[520px] text-center font-dm-sans text-base font-normal leading-6 text-[#A0A0A0]">
                    Stay informed with expert breakdowns of immigration policies,
                    <br className="hidden md:block" />
                    scholarship criteria, and global campus life.
                </p>

                {/* Cards */}
                <div className="mt-12 grid w-full grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[22px]">
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

                            {/* Dark overlay */}
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
                                />
                            </button>
                        </div>
                    ))}
                </div>

                {/* View All Stories */}
                <button
                    type="button"
                    className="
            mt-12
            inline-flex
            h-12
            items-center
            gap-3
            rounded-full
            bg-[#E93F61]
            pl-6
            pr-1.5
            font-dm-sans
            text-base
            font-medium
            text-white
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:bg-[#d93657]
            focus:outline-none
            focus:ring-2
            focus:ring-[#E93F61]
            focus:ring-offset-2
          "
                >
                    <span>View All Storys</span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#E93F61]">
                        <ArrowRight size={20} strokeWidth={2} />
                    </span>
                </button>
            </div>
        </section>
    );
}