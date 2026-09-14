"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap, Building2, ShieldCheck, Globe } from "lucide-react";
import gsap from "gsap";
import { useLeadPopup } from "@/hooks/useLeadPopup";

const questionSets = {
    left: [
        "Any Scholarship?",
        "How much loan?",
        "Which country?",
        "Any intake?",
    ],
    rightTop: [
        "Am I eligible?",
        "Which university?",
        "Can I get a visa?",
        "What course?",
    ],
    rightBottom: [
        "What IELTS?",
        "How much IELTS?",
        "GRE required?",
        "When should I apply?",
    ],
};

function Hero() {
    const { openLeadPopup } = useLeadPopup();
    /*
     * Container refs for interactive cursor reaction
     */
    const heroContentRef = useRef<HTMLDivElement>(null);
    const desktopLeftContainerRef = useRef<HTMLDivElement>(null);
    const desktopRightTopContainerRef = useRef<HTMLDivElement>(null);
    const desktopRightBottomContainerRef = useRef<HTMLDivElement>(null);

    /*
     * Desktop text & bubble refs
     */
    const desktopLeftBubble = useRef<HTMLDivElement>(null);
    const desktopLeftText = useRef<HTMLDivElement>(null);

    const desktopRightTopBubble = useRef<HTMLDivElement>(null);
    const desktopRightTopText = useRef<HTMLDivElement>(null);

    const desktopRightBottomBubble = useRef<HTMLDivElement>(null);
    const desktopRightBottomText = useRef<HTMLDivElement>(null);

    /*
     * Mobile refs
     */
    const mobileLeftBubble = useRef<HTMLDivElement>(null);
    const mobileLeftText = useRef<HTMLDivElement>(null);

    const mobileRightBubble = useRef<HTMLDivElement>(null);
    const mobileRightText = useRef<HTMLDivElement>(null);

    /*
     * ============================================================
     * One-by-One Sequential Typewriter Timeline
     *
     * Exactly ONE question types at any time.
     * Order: Left -> Right Top -> Right Bottom -> Pause -> Repeat
     * Deferred to requestAnimationFrame to prevent blocking initial paint.
     * ============================================================
     */
    useEffect(() => {
        if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const leftTargets = [desktopLeftText.current, mobileLeftText.current];
        const rightTopTargets = [
            desktopRightTopText.current,
            mobileRightText.current,
        ];
        const rightBottomTargets = [desktopRightBottomText.current];

        let ctx: gsap.Context | null = null;
        const rafId = requestAnimationFrame(() => {
            ctx = gsap.context(() => {
                const masterTl = gsap.timeline({ repeat: -1 });

                // Initial pause so the user can read the starting questions
                masterTl.to({}, { duration: 3.5 });

                // Helper to add a type-out -> type-in sequence for a single question position
                const addTypeStep = (
                    targets: (HTMLElement | null)[],
                    oldText: string,
                    newText: string
                ) => {
                    // 1. Type out (erase character by character)
                    const eraseState = { progress: 0 };
                    masterTl.to(eraseState, {
                        progress: 1,
                        duration: Math.max(oldText.length * 0.035, 0.35),
                        ease: "none",
                        onUpdate: () => {
                            const remaining = Math.ceil(
                                oldText.length * (1 - eraseState.progress)
                            );
                            const txt = oldText.substring(0, remaining);
                            for (const el of targets) {
                                if (el) el.textContent = txt || "\u00A0";
                            }
                        },
                    });

                    // 2. Brief breath before typing new question
                    masterTl.to({}, { duration: 0.12 });

                    // 3. Type in (type character by character)
                    const typeState = { progress: 0 };
                    masterTl.to(typeState, {
                        progress: 1,
                        duration: Math.max(newText.length * 0.045, 0.5),
                        ease: "none",
                        onUpdate: () => {
                            const chars = Math.floor(
                                newText.length * typeState.progress
                            );
                            const txt = newText.substring(0, chars);
                            for (const el of targets) {
                                if (el) el.textContent = txt || "\u00A0";
                            }
                        },
                        onComplete: () => {
                            for (const el of targets) {
                                if (el) el.textContent = newText;
                            }
                        },
                    });

                    // 4. Clean pause between questions so they type strictly one after another
                    masterTl.to({}, { duration: 0.35 });
                };

                const totalSets = questionSets.left.length; // 4 sets

                // Build full 4-cycle loop: 0->1, 1->2, 2->3, 3->0
                for (let i = 0; i < totalSets; i++) {
                    const nextIdx = (i + 1) % totalSets;

                    // 1) Animate Left Question
                    addTypeStep(
                        leftTargets,
                        questionSets.left[i],
                        questionSets.left[nextIdx]
                    );

                    // 2) Animate Right Top Question (strictly AFTER Left has finished)
                    addTypeStep(
                        rightTopTargets,
                        questionSets.rightTop[i],
                        questionSets.rightTop[nextIdx]
                    );

                    // 3) Animate Right Bottom Question (strictly AFTER Right Top has finished)
                    addTypeStep(
                        rightBottomTargets,
                        questionSets.rightBottom[i],
                        questionSets.rightBottom[nextIdx]
                    );

                    // 4) Pause with all three questions visible together
                    masterTl.to({}, { duration: 3.5 });
                }
            });
        });

        return () => {
            cancelAnimationFrame(rafId);
            ctx?.revert();
        };
    }, []);

    /*
     * ============================================================
     * Interactive Cursor Reaction (Magnetic Proximity & Tilt)
     *
     * Questions reflect and react dynamically as the cursor moves
     * near them, gliding with smooth spring-like momentum.
     * Throttled with requestAnimationFrame and cached bounding centers
     * to eliminate layout thrashing and reduce TBT to 0ms.
     * ============================================================
     */
    useEffect(() => {
        if (
            typeof window === "undefined" ||
            !window.matchMedia("(pointer: fine)").matches ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            return;
        }

        const heroEl = heroContentRef.current;
        if (!heroEl) return;

        const badgeItems = [
            { ref: desktopLeftContainerRef, baseRot: -8 },
            { ref: desktopRightTopContainerRef, baseRot: 6 },
            { ref: desktopRightBottomContainerRef, baseRot: -7 },
        ];

        const animators = badgeItems.map(({ ref, baseRot }) => {
            if (!ref.current) return null;
            return {
                xTo: gsap.quickTo(ref.current, "x", {
                    duration: 0.45,
                    ease: "power2.out",
                }),
                yTo: gsap.quickTo(ref.current, "y", {
                    duration: 0.45,
                    ease: "power2.out",
                }),
                rotTo: gsap.quickTo(ref.current, "rotation", {
                    duration: 0.45,
                    ease: "power2.out",
                }),
                scaleXTo: gsap.quickTo(ref.current, "scaleX", {
                    duration: 0.45,
                    ease: "power2.out",
                }),
                scaleYTo: gsap.quickTo(ref.current, "scaleY", {
                    duration: 0.45,
                    ease: "power2.out",
                }),
                baseRot,
            };
        });

        // Cache coordinates to avoid forced synchronous layout recalculation on every mousemove
        const centers = [
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 },
        ];

        const updateCenters = () => {
            badgeItems.forEach((item, index) => {
                if (!item.ref.current) return;
                const rect = item.ref.current.getBoundingClientRect();
                centers[index] = {
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2,
                };
            });
        };

        const centerTimer = setTimeout(updateCenters, 150);

        let rafId: number | null = null;
        let lastX = 0;
        let lastY = 0;

        const renderMouseReaction = () => {
            rafId = null;
            badgeItems.forEach((item, index) => {
                const anim = animators[index];
                if (!anim || !item.ref.current) return;

                const center = centers[index];
                if (!center || (center.x === 0 && center.y === 0)) return;

                const dx = lastX - center.x;
                const dy = lastY - center.y;
                const dist = Math.hypot(dx, dy);

                const maxDist = 320; // Proximity threshold in px

                if (dist < maxDist) {
                    const norm = 1 - dist / maxDist; // 0 to 1
                    const pull = Math.pow(norm, 1.3);

                    // Magnetic pull towards cursor (up to 24px)
                    const targetX = Math.max(-24, Math.min(24, dx * 0.2 * pull));
                    const targetY = Math.max(-20, Math.min(20, dy * 0.2 * pull));

                    // Interactive tilt reacting to cursor angle
                    const targetRot =
                        anim.baseRot + Math.max(-7, Math.min(7, (dx / 25) * pull));

                    // Subtle magnetic scale expansion
                    const targetScale = 1 + 0.08 * pull;

                    anim.xTo(targetX);
                    anim.yTo(targetY);
                    anim.rotTo(targetRot);
                    anim.scaleXTo(targetScale);
                    anim.scaleYTo(targetScale);
                } else {
                    // Smoothly settle back to resting position
                    anim.xTo(0);
                    anim.yTo(0);
                    anim.rotTo(anim.baseRot);
                    anim.scaleXTo(1);
                    anim.scaleYTo(1);
                }
            });
        };

        const handleMouseMove = (e: MouseEvent) => {
            lastX = e.clientX;
            lastY = e.clientY;
            if (rafId === null) {
                rafId = requestAnimationFrame(renderMouseReaction);
            }
        };

        const handleMouseLeave = () => {
            if (rafId !== null) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
            animators.forEach((anim) => {
                if (!anim) return;
                anim.xTo(0);
                anim.yTo(0);
                anim.rotTo(anim.baseRot);
                anim.scaleXTo(1);
                anim.scaleYTo(1);
            });
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        window.addEventListener("resize", updateCenters, { passive: true });
        window.addEventListener("scroll", updateCenters, { passive: true });
        heroEl.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            clearTimeout(centerTimer);
            if (rafId !== null) cancelAnimationFrame(rafId);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", updateCenters);
            window.removeEventListener("scroll", updateCenters);
            heroEl.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <section
            className="
                relative
                flex
                min-h-[540px]
                w-full
                flex-col
                overflow-hidden
                bg-[linear-gradient(180deg,#253A7B,#12204C)]
            "
        >


            {/* =====================================================
                HERO
            ====================================================== */}
            <section className="relative z-10 w-full overflow-hidden text-white">
                <div
                    ref={heroContentRef}
                    className="
                        relative
                        mx-auto
                        flex
                        w-full
                        max-w-7xl
                        2xl:max-w-[1440px]
                        flex-col
                        items-center
                        px-6
                        pt-16
                        pb-16
                        text-center
                        sm:px-8
                        sm:pt-18
                        sm:pb-24
                        md:pb-32
                        2xl:px-12
                    "
                >
                    {/* =================================================
                        MOBILE QUESTION — TOP LEFT
                    ================================================== */}
                    <div
                        className="
                            absolute
                            left-3
                            top-6
                            z-20
                            flex
                            items-center
                            gap-2
                            -rotate-[7deg]
                            sm:hidden
                        "
                    >
                        {/* Circle */}
                        <div
                            className="
                                flex
                                h-8
                                w-8
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-[#E93F61]
                                text-[13px]
                                font-bold
                                text-white
                            "
                        >
                            ?
                        </div>

                        {/* Bubble */}
                        <div
                            ref={mobileLeftBubble}
                            className="
                                inline-flex
                                h-8
                                w-max
                                items-center
                                overflow-hidden
                                rounded-r-full
                                rounded-tl-full
                                bg-white
                                px-3
                                py-1.5
                                text-[11px]
                                font-medium
                                text-[#111827]
                                shadow-sm
                                select-none
                            "
                        >
                            <div
                                ref={mobileLeftText}
                                className="whitespace-nowrap"
                            >
                                {questionSets.left[0]}
                            </div>
                        </div>
                    </div>

                    {/* =================================================
                        MOBILE QUESTION — TOP RIGHT
                    ================================================== */}
                    <div
                        className="
                            absolute
                            right-3
                            top-6
                            z-20
                            flex
                            items-center
                            gap-2
                            rotate-[6deg]
                            sm:hidden
                        "
                    >
                        {/* Bubble */}
                        <div
                            ref={mobileRightBubble}
                            className="
                                inline-flex
                                h-8
                                w-max
                                items-center
                                justify-end
                                overflow-hidden
                                rounded-l-full
                                rounded-tr-full
                                bg-white
                                px-3
                                py-1.5
                                text-[11px]
                                font-medium
                                text-[#111827]
                                shadow-sm
                                select-none
                            "
                        >
                            <div
                                ref={mobileRightText}
                                className="whitespace-nowrap"
                            >
                                {questionSets.rightTop[0]}
                            </div>
                        </div>

                        {/* Circle */}
                        <div
                            className="
                                flex
                                h-8
                                w-8
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-[#D6B66A]
                                text-[13px]
                                font-bold
                                text-white
                            "
                        >
                            ?
                        </div>
                    </div>

                    {/* =================================================
                        TRUSTED BADGE
                    ================================================== */}
                    <div
                        className="
                            mb-5
                            sm:mb-6
                            inline-flex
                            h-7.5
                            items-center
                            rounded-full
                            bg-[#E93F61]
                            px-3.5
                            text-[12px]
                            font-medium
                            whitespace-nowrap
                            shadow-xs
                        "
                    >
                        Trusted by{" "}
                        <span className="mx-1 font-bold">
                            10,000+
                        </span>{" "}
                        students
                    </div>

                    {/* =================================================
                        TITLE
                    ================================================== */}
                    <h1
                        className="
                            max-w-[800px]
                            font-dmsans
                            text-[44px]
                            font-medium
                            leading-[1.04]
                            tracking-[-1.8px]
                            sm:text-[52px]
                            sm:tracking-[-2px]
                            md:text-[60px]
                            md:leading-[1.05]
                            md:tracking-[-2.2px]
                            lg:text-[66px]
                            lg:leading-[1.05]
                            lg:tracking-[-2.5px]
                        "
                    >
                        Study Abroad{" "}
                        <span className="text-[#E93F61]">
                            Advisors
                        </span>
                        <br />
                        in Tamil Nadu
                    </h1>

                    {/* =================================================
                        DESCRIPTION
                    ================================================== */}
                    <p
                        className="
                            mt-6
                            sm:mt-7
                            md:mt-8
                            max-w-[720px]
                            px-2
                            text-[15px]
                            sm:text-[16.5px]
                            md:text-[17px]
                            font-normal
                            leading-relaxed
                            sm:leading-[27px]
                            text-white/85
                        "
                    >
                        Get expert study-abroad guidance from Tamil Nadu.
                        Explore top universities, courses, scholarships,
                        loans, and visa support across the USA, UK, Canada,
                        Australia, Ireland &amp; Europe.
                    </p>

                    {/* =================================================
                        CTA (with Animated Shiny Stroke Border on Hover)
                    ================================================== */}
                    <div className="relative z-30 mt-7 sm:mt-8 md:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4">
                        {/* Primary Button: Book Free Counselling */}
                        <button
                            type="button"
                            id="cta-book-counselling"
                            onClick={() => openLeadPopup({ source: "hero_primary_cta" })}
                            className="
                                group
                                relative
                                inline-flex
                                items-center
                                justify-center
                                rounded-full
                                bg-gradient-to-r
                                from-[#FF5E7E]
                                via-[#E93F61]
                                to-[#FF5E7E]
                                p-[2px]
                                cursor-pointer
                                touch-manipulation
                                select-none
                                transition-all
                                duration-300
                                hover:scale-[1.03]
                                active:scale-[0.98]
                                shadow-[0_8px_24px_rgba(233,63,97,0.32)]
                                w-full
                                sm:w-auto
                                max-w-[280px]
                                sm:max-w-none
                            "
                        >
                            {/* Animated Shiny Stroke Border (Reacts on Hover across the stroke) */}
                            <span
                                className="
                                    absolute
                                    inset-0
                                    rounded-full
                                    bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_20%,#ffffff_50%,rgba(255,255,255,0.2)_80%,transparent_100%)]
                                    bg-[length:200%_100%]
                                    opacity-0
                                    group-hover:opacity-100
                                    group-hover:animate-shiny-stroke
                                    transition-opacity
                                    duration-300
                                    pointer-events-none
                                "
                                aria-hidden="true"
                            />

                            {/* Inner Button Body */}
                            <span
                                className="
                                    relative
                                    z-10
                                    flex
                                    h-12
                                    sm:h-[50px]
                                    w-full
                                    sm:w-auto
                                    items-center
                                    justify-center
                                    gap-2.5
                                    rounded-full
                                    bg-[#E93F61]
                                    px-6
                                    sm:px-7
                                    text-[15px]
                                    sm:text-[16px]
                                    font-semibold
                                    text-white
                                    transition-colors
                                    duration-300
                                    group-hover:bg-[#d83556]
                                "
                            >
                                <span>Book Free Counselling</span>

                                <ArrowRight
                                    size={18}
                                    strokeWidth={2.2}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </span>
                        </button>

                        {/* Secondary Button: Explore Universities (Stroke White, No Fill, 16px DM Sans Medium) */}
                        <Link
                            href="/explore"
                            id="cta-explore-universities"
                            className="
                                group
                                relative
                                inline-flex
                                h-12
                                sm:h-[50px]
                                w-full
                                sm:w-auto
                                max-w-[280px]
                                sm:max-w-none
                                items-center
                                justify-center
                                gap-2.5
                                rounded-full
                                border
                                border-white
                                bg-transparent
                                px-6
                                sm:px-7
                                font-dmsans
                                text-[16px]
                                font-medium
                                text-white
                                transition-all
                                duration-300
                                hover:bg-white/10
                                hover:border-white
                                hover:scale-[1.03]
                                active:scale-[0.98]
                            "
                        >
                            <span>Explore</span>

                            <ArrowRight
                                size={18}
                                strokeWidth={2.2}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>

                    {/* =================================================
                        THIN LINE & TRUST STATS (Below CTA)
                    ================================================== */}
                    <div className="relative z-30 mt-7 sm:mt-8 md:mt-10 w-full max-w-4xl mx-auto px-4">
                        {/* Thin Line */}


                        {/* Information Row */}
                        <div className="mt-3.5 sm:mt-4 md:mt-5 grid grid-cols-4 gap-y-4 gap-x-3 md:gap-x-0 lg:grid-cols-12 md:divide-x md:divide-white/20">
                            <div className="col-span-2 lg:col-span-3 flex flex-col items-center justify-center text-center px-2 sm:px-3 md:px-4 gap-1.5 sm:gap-2">
                                <GraduationCap
                                    className="h-5 w-5 sm:h-[22px] sm:w-[22px] md:h-6 md:w-6 text-white/90 shrink-0"
                                    strokeWidth={1.9}
                                    aria-hidden="true"
                                />
                                <span className="font-dmsans text-[12.5px] min-[380px]:text-[13.5px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium text-white/95 leading-snug">
                                    1000+ Students Placed
                                </span>
                            </div>
                            <div className="col-span-2 lg:col-span-3 flex flex-col items-center justify-center text-center px-2 sm:px-3 md:px-4 gap-1.5 sm:gap-2">
                                <Building2
                                    className="h-5 w-5 sm:h-[22px] sm:w-[22px] md:h-6 md:w-6 text-white/90 shrink-0"
                                    strokeWidth={1.9}
                                    aria-hidden="true"
                                />
                                <span className="font-dmsans text-[12.5px] min-[380px]:text-[13.5px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium text-white/95 leading-snug">
                                    500+ Global Universities
                                </span>
                            </div>
                            <div className="col-span-2 lg:col-span-3 flex flex-col items-center justify-center text-center px-2 sm:px-3 md:px-4 gap-1.5 sm:gap-2">
                                <ShieldCheck
                                    className="h-5 w-5 sm:h-[22px] sm:w-[22px] md:h-6 md:w-6 text-white/90 shrink-0"
                                    strokeWidth={1.9}
                                    aria-hidden="true"
                                />
                                <span className="font-dmsans text-[12.5px] min-[380px]:text-[13.5px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium text-white/95 leading-snug">
                                    95%+ Visa Success Rate
                                </span>
                            </div>
                            <div className="col-span-2 lg:col-span-3 flex flex-col items-center justify-center text-center px-2 sm:px-3 md:px-4 gap-1.5 sm:gap-2">
                                <Globe
                                    className="h-5 w-5 sm:h-[22px] sm:w-[22px] md:h-6 md:w-6 text-white/90 shrink-0"
                                    strokeWidth={1.9}
                                    aria-hidden="true"
                                />
                                <span className="font-dmsans text-[12.5px] min-[380px]:text-[13.5px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium text-white/95 leading-snug">
                                    50+ Countries Covered
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* =================================================
                        DESKTOP QUESTION — LEFT
                    ================================================== */}
                    <div
                        ref={desktopLeftContainerRef}
                        className="
                            absolute
                            left-[4%]
                            top-[175px]
                            hidden
                            w-[250px]
                            items-center
                            justify-start
                            gap-2
                            -rotate-[8deg]
                            sm:flex
                            md:left-[5.5%]
                            cursor-pointer
                            group
                            touch-manipulation
                        "
                    >
                        {/* Circle */}
                        <div
                            className="
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-[#E93F61]
                                text-[14px]
                                font-bold
                                text-white
                                shadow-sm
                                transition-transform
                                duration-200
                                group-hover:scale-110
                                group-hover:rotate-6
                            "
                        >
                            ?
                        </div>

                        {/* Bubble */}
                        <div
                            ref={desktopLeftBubble}
                            className="
                                inline-flex
                                h-9
                                w-max
                                items-center
                                overflow-hidden
                                rounded-r-full
                                rounded-tl-full
                                bg-white
                                px-4
                                py-2
                                text-[14px]
                                font-medium
                                text-[#111827]
                                shadow-sm
                                transition-shadow
                                duration-200
                                group-hover:shadow-md
                                select-none
                            "
                        >
                            <div
                                ref={desktopLeftText}
                                className="whitespace-nowrap"
                            >
                                {questionSets.left[0]}
                            </div>
                        </div>
                    </div>

                    {/* =================================================
                        DESKTOP QUESTION — RIGHT TOP
                    ================================================== */}
                    <div
                        ref={desktopRightTopContainerRef}
                        className="
                            absolute
                            right-[4%]
                            top-[125px]
                            hidden
                            w-[250px]
                            items-center
                            justify-end
                            gap-2
                            rotate-[6deg]
                            sm:flex
                            md:right-[7%]
                            cursor-pointer
                            group
                            touch-manipulation
                        "
                    >
                        {/* Bubble */}
                        <div
                            ref={desktopRightTopBubble}
                            className="
                                inline-flex
                                h-9
                                w-max
                                items-center
                                justify-end
                                overflow-hidden
                                rounded-l-full
                                rounded-tr-full
                                bg-white
                                px-4
                                py-2
                                text-[14px]
                                font-medium
                                text-[#111827]
                                shadow-sm
                                transition-shadow
                                duration-200
                                group-hover:shadow-md
                                select-none
                            "
                        >
                            <div
                                ref={desktopRightTopText}
                                className="whitespace-nowrap"
                            >
                                {questionSets.rightTop[0]}
                            </div>
                        </div>

                        {/* Circle */}
                        <div
                            className="
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-[#D6B66A]
                                text-[14px]
                                font-bold
                                text-white
                                shadow-sm
                                transition-transform
                                duration-200
                                group-hover:scale-110
                                group-hover:-rotate-6
                            "
                        >
                            ?
                        </div>
                    </div>

                    {/* =================================================
                        DESKTOP QUESTION — RIGHT BOTTOM
                        Shifted further right to avoid overlaying description
                    ================================================== */}
                    <div
                        ref={desktopRightBottomContainerRef}
                        className="
                            absolute
                            right-[0.5%]
                            top-[320px]
                            hidden
                            w-[215px]
                            items-center
                            justify-start
                            gap-2
                            -rotate-[7deg]
                            sm:flex
                            sm:right-[1%]
                            sm:top-[310px]
                            md:right-[1.5%]
                            md:top-[330px]
                            lg:right-[2%]
                            lg:top-[340px]
                            cursor-pointer
                            group
                            touch-manipulation
                        "
                    >
                        {/* Circle */}
                        <div
                            className="
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-[#D6B66A]
                                text-[14px]
                                font-bold
                                text-white
                                shadow-sm
                                transition-transform
                                duration-200
                                group-hover:scale-110
                                group-hover:rotate-6
                            "
                        >
                            ?
                        </div>

                        {/* Bubble */}
                        <div
                            ref={desktopRightBottomBubble}
                            className="
                                inline-flex
                                h-9
                                w-max
                                items-center
                                overflow-hidden
                                rounded-r-full
                                rounded-tl-full
                                bg-white
                                px-4
                                py-2
                                text-[14px]
                                font-medium
                                text-[#111827]
                                shadow-sm
                                transition-shadow
                                duration-200
                                group-hover:shadow-md
                                select-none
                            "
                        >
                            <div
                                ref={desktopRightBottomText}
                                className="whitespace-nowrap"
                            >
                                {questionSets.rightBottom[0]}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                BACKGROUND WATERMARK
            ========================================================== */}
            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-0
                    select-none
                    overflow-hidden
                "
            >
                {/* <div
                    className=" 
                        absolute
                        bottom-0
                        left-1/2
                        -translate-x-1/2
                        translate-y-1/4
                        whitespace-nowrap
                        font-dmsans
                        text-[106px]
                        min-[390px]:text-[124px]
                        sm:text-[180px]
                        md:text-[250px]
                        lg:text-[350px]
                        font-black
                        leading-none
                        tracking-[-0.04em]
                        text-[#25397A]
                        opacity-20
                    "
                    aria-hidden="true"
                >
                    HIGHED
                </div> */}
                <div
                    className="
    absolute
    bottom-0
    left-0
    w-full
    h-full
    pointer-events-none
    overflow-hidden
    opacity-10
  "
                    aria-hidden="true"
                >
                    <Image
                        src="/images/hero/ChatGPT Image Sep 14, 2026, 09_45_43 AM.webp"
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                        className="
      object-cover
      object-center
      translate-y-[20%]
      sm:translate-y-[25%]
      md:translate-y-[30%]
      lg:translate-y-[35%]
      xl:translate-y-[35%]
      opacity-50
    "
                    />
                </div>
            </div>
        </section >
    );
}

export default Hero;
