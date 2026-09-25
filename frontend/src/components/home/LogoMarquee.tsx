"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const logos = [
    "/icons/University/American-College-Dublin.webp",
    "/icons/University/Amity-University,-Dubai,-UAE.webp",
    "/icons/University/AURA-Business-School.webp",
    "/icons/University/Brescia-University-College.webp",
    "/icons/University/EAE.webp",
    "/icons/University/griffith.webp",
    "/icons/University/Holmes-Instittue-of-Dublin.webp",
    "/icons/University/it-carlow.webp",
];

function MarqueeRow({
    direction,
}: {
    direction: "left" | "right";
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        const track = trackRef.current;

        if (!container || !track) return;

        const originalItems = Array.from(
            track.querySelectorAll<HTMLElement>(".marquee-item")
        );

        if (!originalItems.length) return;

        // Duplicate logos for seamless looping
        originalItems.forEach((item) => {
            track.appendChild(item.cloneNode(true));
        });

        const firstItem = originalItems[0];

        const calculateLoopWidth = () => {
            const styles = window.getComputedStyle(track);
            const gap = parseFloat(styles.columnGap || "0");

            return (firstItem.offsetWidth + gap) * originalItems.length;
        };

        let loopWidth = calculateLoopWidth();

        const state = {
            x: direction === "right" ? -loopWidth : 0,
        };

        gsap.set(track, {
            x: state.x,
        });

        animationRef.current = gsap.to(state, {
            x: direction === "left" ? -loopWidth : 0,
            duration: 28,
            ease: "none",
            repeat: -1,

            onUpdate: () => {
                let x = state.x;

                if (direction === "left" && x <= -loopWidth) {
                    x += loopWidth;
                    state.x = x;
                }

                if (direction === "right" && x >= 0) {
                    x -= loopWidth;
                    state.x = x;
                }

                gsap.set(track, { x });
            },
        });

        const handleResize = () => {
            const currentX = state.x;

            loopWidth = calculateLoopWidth();

            // Keep the animation position inside the new loop
            if (direction === "left") {
                state.x = Math.max(-loopWidth, Math.min(0, currentX));
            } else {
                state.x = Math.max(-loopWidth, Math.min(0, currentX));
            }

            gsap.set(track, {
                x: state.x,
            });
        };

        const handleMouseEnter = () => {
            if (!animationRef.current) return;

            gsap.to(animationRef.current, {
                timeScale: 0,
                duration: 0.35,
                ease: "power2.out",
            });
        };

        const handleMouseLeave = () => {
            if (!animationRef.current) return;

            gsap.to(animationRef.current, {
                timeScale: 1,
                duration: 0.5,
                ease: "power2.out",
            });
        };

        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener("resize", handleResize);

        return () => {
            container.removeEventListener("mouseenter", handleMouseEnter);
            container.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("resize", handleResize);

            animationRef.current?.kill();
        };
    }, [direction]);

    return (
        <div
            ref={containerRef}
            className="relative col-span-12 overflow-hidden"
        >
            {/* Left fade */}
            <div
                className="
                    pointer-events-none
                    absolute
                    left-0
                    top-0
                    z-10
                    h-full
                    w-10
                    bg-gradient-to-r
                    from-background
                    via-background/80
                    to-transparent
                    sm:w-16
                    md:w-24
                    lg:w-28
                "
            />

            {/* Right fade */}
            <div
                className="
                    pointer-events-none
                    absolute
                    right-0
                    top-0
                    z-10
                    h-full
                    w-10
                    bg-gradient-to-l
                    from-background
                    via-background/80
                    to-transparent
                    sm:w-16
                    md:w-24
                    lg:w-28
                "
            />

            {/* Moving track */}
            <div
                ref={trackRef}
                className="
                    flex
                    w-max
                    items-center
                    gap-8
                    sm:gap-10
                    md:gap-12
                    lg:gap-16
                "
            >
                {logos.map((logo, index) => (
                    <div
                        key={index}
                        className="
                            marquee-item
                            flex
                            h-16
                            w-[110px]
                            shrink-0
                            items-center
                            justify-center
                            sm:h-18
                            sm:w-[130px]
                            md:h-20
                            md:w-[150px]
                            lg:w-[160px]
                        "
                    >
                        <Image
                            src={logo}
                            alt="University"
                            width={140}
                            height={60}
                            style={{ width: "auto", height: "auto" }}
                            className="
                                h-auto
                                max-h-[42px]
                                w-auto
                                max-w-[100px]
                                object-contain
                                sm:max-h-[48px]
                                sm:max-w-[115px]
                                md:max-h-[54px]
                                md:max-w-[130px]
                                lg:max-h-[60px]
                                lg:max-w-[140px]
                            "
                            draggable={false}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function LogoMarquee() {
    return (
        <section
            className="
                w-full
                overflow-hidden
                bg-background
                py-12
                sm:py-14
                md:py-16
                lg:py-20
            "
        >
            <div
                className="
                    mx-auto
                    grid
                    w-full
                    max-w-[1440px]
                    grid-cols-12
                    gap-4
                    px-4
                    sm:px-6
                    md:px-8
                    lg:px-12
                "
            >
                {/* Heading */}
                <div
                    className="
                        col-span-12
                        mb-5
                        flex
                        justify-center
                        sm:mb-6
                        md:mb-8
                    "
                >
                    <h6
                        className="
                            max-w-[90%]
                            text-center
                            text-[20px]
                            font-semibold
                            leading-[25px]
                            tracking-[-0.04em]
                            text-[#121314]
                            sm:text-[22px]
                            sm:leading-[27px]
                            md:text-[24px]
                            md:leading-[29px]
                            lg:text-[26px]
                            lg:leading-[31.2px]
                        "
                    >
                        Top Universities we work with
                    </h6>
                </div>

                {/* Row 1 — Left */}
                <MarqueeRow direction="left" />

                {/* Row 2 — Right */}
                <MarqueeRow direction="right" />
            </div>
        </section>
    );
}