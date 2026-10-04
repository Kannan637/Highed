"use client";

import React, {
    useEffect,
    useRef,
    useState,
    type KeyboardEvent,
    type MouseEvent,
    type Ref,
} from "react";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import gsap from "gsap";
import Image from "next/image";

import { useLeadPopup } from "@/hooks/useLeadPopup";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type Destination = {
    country: string;
    description: string;
    image: string;
};

const destinations: Destination[] = [
    {
        country: "Study in Ireland",
        description:
            "Study at leading universities with globally recognised programmes, strong academic opportunities and career-focused education.",
        image: "/images/countries/IRELAND.webp",
    },
    {
        country: "Study in the USA",
        description:
            "Explore leading universities, high-value programmes, research opportunities and post-study work pathways for international students.",
        image: "/images/countries/USA.webp",
    },
    {
        country: "Study in Canada",
        description:
            "Discover leading universities, career-focused programmes and post-study opportunities for international students.",
        image: "/images/countries/CANADA.webp",
    },
    {
        country: "Study in the UK",
        description:
            "Explore world-class universities, globally recognised degrees and a wide range of undergraduate and postgraduate programmes.",
        image: "/images/countries/UK.webp",
    },
    {
        country: "Study in Australia",
        description:
            "Explore globally ranked universities, career-focused programmes and post-study opportunities across a wide range of disciplines.",
        image: "/images/countries/AUSTRALIA.webp",
    },
    {
        country: "Study in New Zealand",
        description:
            "Study in a welcoming destination offering quality education, internationally recognised programmes and opportunities for international students.",
        image: "/images/countries/NEW ZEALAND.webp",
    },
];

export default function StudyDestinations({
    id = "top-countries",
}: {
    id?: string;
} = {}) {
    const { openLeadPopup } = useLeadPopup();

    const [activeIndex, setActiveIndex] = useState(1);

    const activeIndexRef = useRef(activeIndex);
    const directionRef = useRef<1 | -1>(1);
    const isFirstRender = useRef(true);

    // Desktop refs
    const desktopCardRef = useRef<HTMLElement>(null);
    const desktopImageRef = useRef<HTMLDivElement>(null);
    const desktopContentRef = useRef<HTMLDivElement>(null);

    const prevCardRef = useRef<HTMLElement>(null);
    const nextCardRef = useRef<HTMLElement>(null);

    // Mobile refs
    const mobileCardRef = useRef<HTMLElement>(null);
    const mobileImageRef = useRef<HTMLDivElement>(null);
    const mobileContentRef = useRef<HTMLDivElement>(null);

    // Drag refs
    const dragStartX = useRef<number | null>(null);
    const isDragging = useRef(false);

    /*
     * ============================================================
     * NAVIGATION
     * ============================================================
     */

    const previous = () => {
        directionRef.current = -1;

        const newIndex =
            activeIndexRef.current === 0
                ? destinations.length - 1
                : activeIndexRef.current - 1;

        activeIndexRef.current = newIndex;
        setActiveIndex(newIndex);
    };

    const next = () => {
        directionRef.current = 1;

        const newIndex =
            activeIndexRef.current === destinations.length - 1
                ? 0
                : activeIndexRef.current + 1;

        activeIndexRef.current = newIndex;
        setActiveIndex(newIndex);
    };

    const goTo = (index: number) => {
        if (index === activeIndexRef.current) return;

        const length = destinations.length;

        const diff =
            (index - activeIndexRef.current + length) % length;

        directionRef.current =
            diff <= length / 2 ? 1 : -1;

        activeIndexRef.current = index;
        setActiveIndex(index);
    };

    const getDestination = (offset: number) => {
        return destinations[
            (activeIndex + offset + destinations.length) %
            destinations.length
        ];
    };

    const previousCountry = getDestination(-1);
    const activeCountry = getDestination(0);
    const nextCountry = getDestination(1);

    /*
     * ============================================================
     * DRAG / SWIPE
     * ============================================================
     */

    const onPointerDown = (e: React.PointerEvent) => {
        dragStartX.current = e.clientX;
        isDragging.current = false;

        if (e.target instanceof HTMLElement) {
            e.target.setPointerCapture(e.pointerId);
        }
    };

    const onPointerMove = (e: React.PointerEvent) => {
        if (dragStartX.current === null) return;

        if (
            Math.abs(e.clientX - dragStartX.current) > 10
        ) {
            isDragging.current = true;
        }
    };

    const onPointerUp = (e: React.PointerEvent) => {
        if (dragStartX.current === null) return;

        const deltaX =
            e.clientX - dragStartX.current;

        if (deltaX > 50) {
            previous();
        } else if (deltaX < -50) {
            next();
        }

        dragStartX.current = null;

        setTimeout(() => {
            isDragging.current = false;
        }, 0);
    };

    const handleCardClick = (action: () => void) => {
        if (!isDragging.current) {
            action();
        }
    };

    /*
     * ============================================================
     * GSAP ANIMATION
     * ============================================================
     */

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        if (
            typeof window !== "undefined" &&
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches
        ) {
            return;
        }

        const direction = directionRef.current;

        const cards = [
            desktopCardRef.current,
            mobileCardRef.current,
            prevCardRef.current,
            nextCardRef.current,
        ].filter(
            (element): element is HTMLElement =>
                element !== null
        );

        const images = [
            desktopImageRef.current,
            mobileImageRef.current,
        ].filter(
            (element): element is HTMLDivElement =>
                element !== null
        );

        const contents = [
            desktopContentRef.current,
            mobileContentRef.current,
        ].filter(
            (element): element is HTMLDivElement =>
                element !== null
        );

        const allTargets = [
            ...cards,
            ...images,
            ...contents,
        ];

        if (!allTargets.length) return;

        gsap.killTweensOf(allTargets);

        const timeline = gsap.timeline({
            defaults: {
                overwrite: "auto",
                force3D: true,
            },
            onComplete: () => {
                gsap.set(allTargets, {
                    clearProps: "transform,opacity",
                });
            },
        });

        /*
         * Card movement
         */

        timeline.fromTo(
            cards,
            {
                x: direction * 45,
            },
            {
                x: 0,
                duration: 0.55,
                ease: "power3.out",
            },
            0
        );

        /*
         * Image zoom
         */

        timeline.fromTo(
            images,
            {
                scale: 1.07,
            },
            {
                scale: 1,
                duration: 0.8,
                ease: "power2.out",
            },
            0
        );

        /*
         * Content animation
         */

        timeline.fromTo(
            contents,
            {
                opacity: 0,
                y: 20,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.45,
                ease: "power3.out",
            },
            0.08
        );

        return () => {
            timeline.kill();
        };
    }, [activeIndex]);

    /*
     * ============================================================
     * BUTTON ANIMATION
     * ============================================================
     */

    const bounceButton = (
        element: HTMLButtonElement
    ) => {
        gsap.fromTo(
            element,
            {
                scale: 0.9,
            },
            {
                scale: 1,
                duration: 0.45,
                ease: "back.out(2)",
            }
        );
    };

    const handlePrevious = (
        event: MouseEvent<HTMLButtonElement>
    ) => {
        bounceButton(event.currentTarget);
        previous();
    };

    const handleNext = (
        event: MouseEvent<HTMLButtonElement>
    ) => {
        bounceButton(event.currentTarget);
        next();
    };

    return (
        <section
            id={id}
            className="
                w-full
                overflow-hidden
                py-16
                sm:py-20
                lg:py-[88px]
                text-brand-primary
                tracking-tight-5
                [letter-spacing:var(--tracking-tight-5)]
                [&_*]:[letter-spacing:var(--tracking-tight-5)]
                scroll-mt-6
            "
        >
            <Container size="lg">

                {/* ====================================================
                    HEADER
                ===================================================== */}

                <SectionHeading
                    eyebrow="Study Destinations"
                    title="Explore Top Study Abroad Destinations"
                    accentText="Study Abroad"
                    className="mb-10 sm:mb-12"
                />

                {/* ====================================================
                    DESKTOP 12 COLUMN GRID
                ===================================================== */}

                <div
                    className="
                        relative
                        mt-14
                        hidden
                        h-[435px]
                        grid-cols-12
                        gap-6
                        lg:grid
                        touch-pan-y
                        select-none
                    "
                    role="region"
                    aria-roledescription="carousel"
                    aria-label="Study destinations"
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={onPointerUp}
                    onPointerCancel={onPointerUp}
                >

                    {/* =================================================
                        LEFT PREVIEW
                        2 / 12 COLUMNS
                    ================================================= */}

                    <div className="relative col-span-2 h-[435px]">
                        <DestinationCard
                            destination={previousCountry}
                            position="side-left"
                            onClick={() =>
                                handleCardClick(previous)
                            }
                            cardRef={prevCardRef}
                        />
                    </div>

                    {/* =================================================
                        MAIN CARD
                        8 / 12 COLUMNS
                    ================================================= */}

                    <div
                        className="
                            relative
                            col-span-8
                            h-[435px]
                        "
                    >
                        <DestinationCard
                            destination={activeCountry}
                            position="active"
                            contentRef={desktopContentRef}
                            imageRef={desktopImageRef}
                            cardRef={desktopCardRef}
                        />

                        {/* LEFT ARROW */}
                        <div className="absolute -left-6 top-1/2 z-40 -translate-y-1/2">
                            <button
                                type="button"
                                onClick={handlePrevious}
                                aria-label="Previous destination"
                                className="
                                    btn-motion
                                    flex
                                    size-12
                                    cursor-pointer
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-white
                                    text-brand-primary
                                    shadow-[0_8px_25px_rgba(0,0,0,0.14)]
                                    hover:bg-brand-primary
                                    hover:text-white
                                "
                            >
                                <ArrowLeft
                                    size={20}
                                    strokeWidth={2.2}
                                />
                            </button>
                        </div>

                        {/* RIGHT ARROW */}
                        <div className="absolute -right-6 top-1/2 z-40 -translate-y-1/2">
                            <button
                                type="button"
                                onClick={handleNext}
                                aria-label="Next destination"
                                className="
                                    btn-motion
                                    flex
                                    size-12
                                    cursor-pointer
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-white
                                    text-brand-primary
                                    shadow-[0_8px_25px_rgba(0,0,0,0.14)]
                                    hover:bg-brand-primary
                                    hover:text-white
                                "
                            >
                                <ArrowRight
                                    size={20}
                                    strokeWidth={2.2}
                                />
                            </button>
                        </div>
                    </div>

                    {/* =================================================
                        RIGHT PREVIEW
                        2 / 12 COLUMNS
                    ================================================= */}

                    <div className="relative col-span-2 h-[435px]">
                        <DestinationCard
                            destination={nextCountry}
                            position="side-right"
                            onClick={() =>
                                handleCardClick(next)
                            }
                            cardRef={nextCardRef}
                        />
                    </div>
                </div>

                {/* ====================================================
                    MOBILE
                ===================================================== */}

                <div
                    className="
                        mt-12
                        lg:hidden
                        touch-pan-y
                        select-none
                    "
                    role="region"
                    aria-roledescription="carousel"
                    aria-label="Study destinations"
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={onPointerUp}
                    onPointerCancel={onPointerUp}
                >
                    <DestinationCard
                        destination={activeCountry}
                        position="active"
                        contentRef={mobileContentRef}
                        imageRef={mobileImageRef}
                        cardRef={mobileCardRef}
                    />

                    {/* MOBILE CONTROLS */}

                    <div
                        className="
                            mt-5
                            flex
                            items-center
                            justify-between
                        "
                    >
                        <button
                            type="button"
                            onClick={handlePrevious}
                            aria-label="Previous destination"
                            className="
                                btn-motion
                                flex
                                size-11
                                cursor-pointer
                                items-center
                                justify-center
                                rounded-full
                                bg-brand-primary
                                text-white
                                shadow-sm
                                hover:bg-brand-primary-hover
                            "
                        >
                            <ArrowLeft size={19} />
                        </button>

                        {/* PAGINATION */}

                        <div className="flex items-center gap-2">
                            {destinations.map(
                                (destination, index) => (
                                    <button
                                        key={destination.country}
                                        type="button"
                                        aria-label={`Go to ${destination.country}`}
                                        onClick={() =>
                                            goTo(index)
                                        }
                                        className={`
                                            h-2
                                            cursor-pointer
                                            rounded-full
                                            transition-all
                                            duration-300
                                            ${index ===
                                                activeIndex
                                                ? "w-7 bg-brand-accent"
                                                : "w-2 bg-border hover:bg-gray-400"
                                            }
                                        `}
                                    />
                                )
                            )}
                        </div>

                        <button
                            type="button"
                            onClick={handleNext}
                            aria-label="Next destination"
                            className="
                                btn-motion
                                flex
                                size-11
                                cursor-pointer
                                items-center
                                justify-center
                                rounded-full
                                bg-brand-primary
                                text-white
                                shadow-sm
                                hover:bg-brand-primary-hover
                            "
                        >
                            <ArrowRight size={19} />
                        </button>
                    </div>
                </div>

                {/* ====================================================
                    VIEW ALL COUNTRIES
                ===================================================== */}

                <div className="mt-10 flex justify-center lg:mt-8">
                    <button
                        type="button"
                        onClick={() =>
                            openLeadPopup({
                                source: "country_cta",
                            })
                        }
                        className="
                            btn-motion
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
                            hover:bg-brand-accent/10
                        "
                    >
                        <span>
                            View All Countries
                        </span>

                        <ArrowRight
                            size={18}
                            strokeWidth={2.2}
                            className="
                                transition-transform
                                duration-200
                                group-hover:translate-x-1
                            "
                        />
                    </button>
                </div>
            </Container>
        </section>
    );
}

/* ================================================================
   DESTINATION CARD
================================================================ */

function DestinationCard({
    destination,
    position,
    onClick,
    contentRef,
    imageRef,
    cardRef,
}: {
    destination: Destination;
    position: "active" | "side-left" | "side-right";
    onClick?: () => void;
    contentRef?: Ref<HTMLDivElement>;
    imageRef?: Ref<HTMLDivElement>;
    cardRef?: Ref<HTMLElement>;
}) {
    const { openLeadPopup } = useLeadPopup();

    const isActive = position === "active";

    const handleKeyDown = (
        event: KeyboardEvent<HTMLElement>
    ) => {
        if (!onClick) return;

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {
            event.preventDefault();
            onClick();
        }
    };

    return (
        <article
            ref={cardRef}
            onClick={!isActive ? onClick : undefined}
            onKeyDown={
                !isActive
                    ? handleKeyDown
                    : undefined
            }
            tabIndex={!isActive ? 0 : undefined}
            aria-label={
                !isActive
                    ? `View ${destination.country}`
                    : undefined
            }
            className={`
                group
                relative
                h-[435px]
                w-full
                overflow-hidden
                rounded-[28px]
                bg-surface-neutral-alt

                ${isActive
                    ? `
                            shadow-[0_20px_55px_rgba(18,19,20,0.16)]
                        `
                    : `
                            cursor-pointer
                            shadow-[0_12px_30px_rgba(18,19,20,0.08)]
                        `
                }
            `}
        >

            {/* ========================================================
                IMAGE
            ========================================================= */}

            <div
                ref={imageRef}
                className="
                    absolute
                    inset-0
                    overflow-hidden
                    bg-surface-neutral-alt
                "
            >
                <Image
                    src={destination.image}
                    alt={`${destination.country} study destination`}
                    fill
                    priority={isActive}
                    sizes={
                        isActive
                            ? "(max-width: 768px) 100vw, 66vw"
                            : "16vw"
                    }
                    className={`
                        object-cover
                        transition-all
                        duration-700
                        ease-out

                        ${isActive
                            ? `
                                    grayscale-0
                                    group-hover:scale-[1.025]
                                `
                            : `
                                    grayscale
                                    opacity-70
                                `
                        }
                    `}
                />
            </div>

            {/* ========================================================
                GRADIENT
            ========================================================= */}

            <div
                className={`
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/50
                    to-transparent
                    transition-opacity
                    duration-500
                    ${isActive
                        ? "opacity-[0.88]"
                        : "opacity-60"
                    }
                `}
            />

            {/* ========================================================
                SIDE OVERLAY
            ========================================================= */}

            {!isActive && (
                <div
                    className="
                        absolute
                        inset-0
                        bg-brand-primary/15
                        transition-all
                        duration-300
                        group-hover:bg-transparent
                    "
                />
            )}

            {/* ========================================================
                ACTIVE LABEL
            ========================================================= */}

            {isActive && (
                <div
                    className="
                        absolute
                        left-5
                        top-5
                        z-20
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/20
                        bg-black/35
                        px-3.5
                        py-2
                        text-xs
                        font-medium
                        text-white
                        backdrop-blur-md
                    "
                >
                    <MapPin
                        size={14}
                        strokeWidth={2.2}
                    />

                    <span>
                        Study Destination
                    </span>
                </div>
            )}

            {/* ========================================================
                CONTENT OVERLAY
            ========================================================= */}

            <div
                ref={contentRef}
                className={`
                    absolute
                    bottom-0
                    left-0
                    right-0
                    z-10
                    p-5
                    text-white

                    ${isActive
                        ? "sm:p-7 lg:p-8"
                        : "lg:p-5"
                    }
                `}
            >

                {/* COUNTRY */}

                <div
                    className="
                        mb-2
                        flex
                        items-center
                        gap-2
                    "
                >
                    <MapPin
                        size={17}
                        strokeWidth={2.2}
                        className="shrink-0 text-brand-accent"
                    />

                    <h3
                        className={`
                            font-semibold
                            leading-tight
                            text-white

                            ${isActive
                                ? "text-xl sm:text-2xl"
                                : "text-base"
                            }
                        `}
                    >
                        {destination.country}
                    </h3>
                </div>

                {/* DESCRIPTION */}

                <p
                    className={`
                        leading-relaxed
                        text-white/85

                        ${isActive
                            ? "max-w-[580px] text-sm sm:text-base"
                            : "line-clamp-3 text-xs"
                        }
                    `}
                >
                    {destination.description}
                </p>

                {/* EXPLORE */}

                {isActive && (
                    <button
                        type="button"
                        onClick={() =>
                            openLeadPopup({
                                source: "country_cta",
                            })
                        }
                        className="
                            btn-motion
                            group/explore
                            mt-5
                            inline-flex
                            h-11
                            items-center
                            gap-2
                            rounded-full
                            bg-brand-accent
                            px-5
                            text-sm
                            font-semibold
                            text-white
                            shadow-[0_8px_20px_rgba(233,63,97,0.25)]
                            hover:bg-brand-accent-hover
                            hover:shadow-[0_10px_25px_rgba(233,63,97,0.32)]
                        "
                    >
                        <span>
                            Explore
                        </span>

                        <ArrowRight
                            size={16}
                            strokeWidth={2.4}
                            className="
                                transition-transform
                                duration-200
                                group-hover/explore:translate-x-1
                            "
                        />
                    </button>
                )}
            </div>
        </article>
    );
}