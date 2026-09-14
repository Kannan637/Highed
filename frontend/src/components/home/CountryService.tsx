"use client";

import {
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

type Destination = {
    country: string;
    description: string;
    image: string;
};

const destinations: Destination[] = [
    {
        country: "Ireland",
        description:
            "Study at leading universities with excellent career opportunities and globally recognised programmes.",
        image: "/images/countries/IRELAND.webp",
    },
    {
        country: "United States of America",
        description:
            "Access OPT work visas, Ivy League universities, high-ROI programmes, and research opportunities.",
        image: "/images/countries/USA.webp",
    },
    {
        country: "Canada",
        description:
            "Access post-study work opportunities, leading universities, and excellent pathways for international students.",
        image: "/images/countries/CANADA.webp",
    },
    {
        country: "United Kingdom",
        description:
            "Experience world-class universities, globally recognised degrees, and strong graduate opportunities.",
        image: "/images/countries/UK.webp",
    },
    {
        country: "Australia",
        description:
            "Explore globally ranked universities, career-focused programmes, and attractive post-study opportunities.",
        image: "/images/countries/AUSTRALIA.webp",
    },
    {
        country: "New Zealand",
        description:
            "Study in a safe, welcoming destination with quality education and excellent lifestyle opportunities.",
        image: "/images/countries/NEW ZEALAND.webp",
    },
];

export default function StudyDestinations() {
    const { openLeadPopup } = useLeadPopup();
    const [activeIndex, setActiveIndex] = useState(1);

    // Mirrors `activeIndex` synchronously (state updates are async) and tracks
    // which way we're navigating, so the GSAP effect below knows which
    // direction to slide in from.
    const activeIndexRef = useRef(activeIndex);
    const directionRef = useRef<1 | -1>(1);
    const isFirstRender = useRef(true);

    // Desktop refs
    const desktopContentRef = useRef<HTMLDivElement>(null);
    const desktopImageRef = useRef<HTMLDivElement>(null);
    const desktopCardRef = useRef<HTMLElement>(null);
    const prevContentRef = useRef<HTMLDivElement>(null);
    const prevCardRef = useRef<HTMLElement>(null);
    const nextContentRef = useRef<HTMLDivElement>(null);
    const nextCardRef = useRef<HTMLElement>(null);

    // Mobile refs
    const mobileContentRef = useRef<HTMLDivElement>(null);
    const mobileImageRef = useRef<HTMLDivElement>(null);
    const mobileCardRef = useRef<HTMLElement>(null);

    // Drag refs
    const dragStartX = useRef<number | null>(null);
    const isDragging = useRef(false);

    const onPointerDown = (e: React.PointerEvent) => {
        dragStartX.current = e.clientX;
        isDragging.current = false;
        if (e.target instanceof HTMLElement) {
            e.target.setPointerCapture(e.pointerId);
        }
    };

    const onPointerMove = (e: React.PointerEvent) => {
        if (dragStartX.current !== null) {
            if (Math.abs(e.clientX - dragStartX.current) > 10) {
                isDragging.current = true;
            }
        }
    };

    const onPointerUp = (e: React.PointerEvent) => {
        if (dragStartX.current === null) return;
        const deltaX = e.clientX - dragStartX.current;
        if (deltaX > 50) {
            previous();
        } else if (deltaX < -50) {
            next();
        }
        dragStartX.current = null;
        setTimeout(() => { isDragging.current = false; }, 0);
    };

    const handleCardClick = (action: () => void) => {
        if (!isDragging.current) {
            action();
        }
    };

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
        const diff = (index - activeIndexRef.current + length) % length;
        directionRef.current = diff <= length / 2 ? 1 : -1;
        activeIndexRef.current = index;
        setActiveIndex(index);
    };

    const getDestination = (offset: number) => {
        return destinations[
            (activeIndex + offset + destinations.length) % destinations.length
        ];
    };

    const previousCountry = getDestination(-1);
    const activeCountry = getDestination(0);
    const nextCountry = getDestination(1);

    // Smooth crossfade + slide + image "settle" whenever the active
    // destination changes. Runs for both the desktop and mobile card, and
    // whichever one is hidden by CSS just animates invisibly (harmless).
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        const dir = directionRef.current;

        const contentTargets = [
            desktopContentRef.current,
            mobileContentRef.current,
        ].filter((el): el is HTMLDivElement => el !== null);

        const imageTargets = [
            desktopImageRef.current,
            mobileImageRef.current,
        ].filter((el): el is HTMLDivElement => el !== null);

        const sideTargets = [
            prevContentRef.current,
            nextContentRef.current,
        ].filter((el): el is HTMLDivElement => el !== null);

        const cardTargets = [
            desktopCardRef.current,
            mobileCardRef.current,
            prevCardRef.current,
            nextCardRef.current,
        ].filter((el): el is HTMLElement => el !== null);

        if (cardTargets.length) {
            gsap.killTweensOf(cardTargets);
            gsap.fromTo(
                cardTargets,
                { x: dir * 60 },
                { x: 0, duration: 0.6, ease: "power3.out" }
            );
        }

        if (contentTargets.length) {
            gsap.killTweensOf(contentTargets);
            gsap.fromTo(
                contentTargets,
                { opacity: 0, x: dir * 28, scale: 0.98 },
                { opacity: 1, x: 0, scale: 1, duration: 0.55, ease: "power3.out" }
            );
        }

        if (imageTargets.length) {
            gsap.killTweensOf(imageTargets);
            gsap.fromTo(
                imageTargets,
                { scale: 1.12 },
                { scale: 1, duration: 0.8, ease: "power2.out" }
            );
        }

        if (sideTargets.length) {
            gsap.killTweensOf(sideTargets);
            gsap.fromTo(
                sideTargets,
                { opacity: 0.3 },
                { opacity: 1, duration: 0.5, ease: "power2.out" }
            );
        }

        return () => {
            gsap.killTweensOf([...cardTargets, ...contentTargets, ...imageTargets, ...sideTargets]);
        };
    }, [activeIndex]);

    const bounceButton = (element: HTMLButtonElement) => {
        gsap.fromTo(
            element,
            { scale: 0.9 },
            { scale: 1, duration: 0.5, ease: "power2.out" }
        );
    };

    const handlePrevious = (event: MouseEvent<HTMLButtonElement>) => {
        bounceButton(event.currentTarget);
        previous();
    };

    const handleNext = (event: MouseEvent<HTMLButtonElement>) => {
        bounceButton(event.currentTarget);
        next();
    };

    return (
        <section
            className="
                w-full
                overflow-hidden
                bg-white
                px-6
                py-16
                text-[#121314]
                sm:px-8
                sm:py-20
                lg:px-8
                2xl:px-12
                lg:py-[88px]
            "
        >
            <div className="mx-auto max-w-7xl 2xl:max-w-[1440px]">
                {/* =====================================================
            HEADER
        ====================================================== */}
                <div className="mx-auto max-w-[760px] text-center">
                    <div className="mb-7 flex items-center justify-center gap-2">
                        <span className="h-[7px] w-[7px] rounded-full bg-[#253A7B]" />

                        <span className="text-[14px] font-medium text-[#253A7B] sm:text-[15px]">
                            Study Destinations
                        </span>
                    </div>

                    <h2
                        className="
              text-[40px]
              font-normal
              leading-[1.03]
              tracking-[-1.8px]
              text-[#121314]
              sm:text-[48px]
              lg:text-[50px]
            "
                    >
                        Study Abroad from Coimbatore
                        <br />
                        – Top Destinations
                    </h2>
                </div>

                {/* =====================================================
            DESKTOP CAROUSEL
        ====================================================== */}
                <div
                    className="relative mt-14 hidden h-[435px] items-center lg:flex touch-pan-y"
                    role="group"
                    aria-roledescription="carousel"
                    aria-label="Study destinations"
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={onPointerUp}
                    onPointerCancel={onPointerUp}
                >
                    {/* LEFT PEEK CARD */}
                    <DestinationCard
                        destination={previousCountry}
                        position="side-left"
                        onClick={() => handleCardClick(previous)}
                        contentRef={prevContentRef}
                        cardRef={prevCardRef}
                    />

                    {/* CENTER CARD */}
                    <div className="absolute left-1/2 top-0 z-20 w-[650px] -translate-x-1/2">
                        <DestinationCard
                            destination={activeCountry}
                            position="active"
                            contentRef={desktopContentRef}
                            imageRef={desktopImageRef}
                            cardRef={desktopCardRef}
                        />

                        {/* LEFT ARROW */}
                        <button
                            type="button"
                            onClick={handlePrevious}
                            aria-label="Previous destination"
                            className="
                absolute
                -left-[22px]
                top-1/2
                z-30
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-[#253A7B]
                text-white
                shadow-[0_8px_20px_rgba(37,58,123,0.22)]
                transition-all
                hover:scale-105
                hover:bg-[#1f3168]
              "
                        >
                            <ArrowLeft size={21} strokeWidth={2.2} />
                        </button>

                        {/* RIGHT ARROW */}
                        <button
                            type="button"
                            onClick={handleNext}
                            aria-label="Next destination"
                            className="
                absolute
                -right-[22px]
                top-1/2
                z-30
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-[#253A7B]
                text-white
                shadow-[0_8px_20px_rgba(37,58,123,0.22)]
                transition-all
                hover:scale-105
                hover:bg-[#1f3168]
              "
                        >
                            <ArrowRight size={21} strokeWidth={2.2} />
                        </button>
                    </div>

                    {/* RIGHT PEEK CARD */}
                    <DestinationCard
                        destination={nextCountry}
                        position="side-right"
                        onClick={() => handleCardClick(next)}
                        contentRef={nextContentRef}
                        cardRef={nextCardRef}
                    />
                </div>

                {/* =====================================================
            MOBILE CAROUSEL
        ====================================================== */}
                <div
                    className="mt-12 lg:hidden touch-pan-y"
                    role="group"
                    aria-roledescription="carousel"
                    aria-label="Study destinations"
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={onPointerUp}
                    onPointerCancel={onPointerUp}
                >
                    <div className="relative">
                        <DestinationCard
                            destination={activeCountry}
                            position="active"
                            contentRef={mobileContentRef}
                            imageRef={mobileImageRef}
                            cardRef={mobileCardRef}
                        />

                        <div className="mt-5 flex items-center justify-between">
                            <button
                                type="button"
                                onClick={handlePrevious}
                                aria-label="Previous destination"
                                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-[#253A7B]
                  text-white
                "
                            >
                                <ArrowLeft size={20} />
                            </button>

                            {/* Pagination */}
                            <div className="flex items-center gap-1.5">
                                {destinations.map((destination, index) => (
                                    <button
                                        key={destination.country}
                                        type="button"
                                        aria-label={`Go to ${destination.country}`}
                                        onClick={() => goTo(index)}
                                        className={`
                      h-1.5
                      rounded-full
                      transition-all
                      ${index === activeIndex
                                                ? "w-6 bg-[#E93F61]"
                                                : "w-1.5 bg-[#cfd3dc]"
                                            }
                    `}
                                    />
                                ))}
                            </div>

                            <button
                                type="button"
                                onClick={handleNext}
                                aria-label="Next destination"
                                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-[#253A7B]
                  text-white
                "
                            >
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* =====================================================
            VIEW ALL COUNTRIES
        ====================================================== */}
                <div className="mt-10 flex justify-center lg:mt-8">
                    <button
                        type="button"
                        onClick={() => openLeadPopup({ source: "country_cta" })}
                        className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              px-5
              py-2.5
              text-[15px]
              font-medium
              text-[#E93F61]
              transition-all
              hover:bg-[#fff1f4]
            "
                    >
                        <span>View All Countries</span>

                        <ArrowRight
                            size={18}
                            strokeWidth={2.2}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
}

/* ============================================================
   DESTINATION CARD
============================================================ */

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

    const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
        if (!onClick) return;
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onClick();
        }
    };

    return (
        <article
            ref={cardRef}
            onClick={!isActive ? onClick : undefined}
            onKeyDown={!isActive ? handleKeyDown : undefined}
            role={!isActive ? "button" : undefined}
            tabIndex={!isActive ? 0 : undefined}
            aria-label={!isActive ? `View ${destination.country}` : undefined}
            className={`
        h-[435px]
        overflow-hidden
        rounded-[27px]
        bg-[#eef1f5]
        ${isActive
                    ? "relative w-full shadow-[0_16px_40px_rgba(18,19,20,0.10)]"
                    : "absolute top-0 w-[345px] cursor-pointer"
                }

        ${position === "side-left"
                    ? "left-[-2px]"
                    : position === "side-right"
                        ? "right-[-2px]"
                        : ""
                }
      `}
        >
            {/* =====================================================
          IMAGE
      ====================================================== */}
            <div ref={imageRef} className="absolute inset-0 bg-[#e8ebf0]">
                <Image
                    src={destination.image}
                    alt={`${destination.country} study destination`}
                    fill
                    className={`object-cover transition-all duration-700 ${isActive ? "grayscale-0" : "grayscale opacity-75"}`}
                    sizes={isActive ? "(max-width: 768px) 100vw, 650px" : "345px"}
                />
            </div>

            {/* =====================================================
          IMAGE GRADIENT
      ====================================================== */}
            <div
                className={`
          absolute
          inset-0
          bg-gradient-to-t
          from-[#121314]
          via-[#121314]/45
          to-transparent
          ${isActive
                        ? "opacity-85"
                        : "opacity-45"
                    }
        `}
            />

            {/* =====================================================
          SIDE CARD OVERLAY
      ====================================================== */}
            {!isActive && (
                <div className="absolute inset-0 bg-[#253A7B]/10 transition-colors hover:bg-transparent" />
            )}

            {/* =====================================================
          CONTENT
      ====================================================== */}
            <div
                ref={contentRef}
                className={`
          absolute
          bottom-0
          left-0
          right-0
          p-6
          text-white
          sm:p-7
          ${isActive
                        ? "lg:p-7"
                        : "lg:p-6"
                    }
        `}
            >
                {/* Country */}
                <div className="mb-2 flex items-center gap-2">
                    <MapPin
                        size={17}
                        strokeWidth={2.2}
                        className="text-[#E93F61]"
                    />

                    <h3
                        className={`
              font-medium
              tracking-[-0.7px]
              ${isActive
                                ? "text-[29px] sm:text-[31px]"
                                : "text-[26px]"
                            }
            `}
                    >
                        {destination.country}
                    </h3>
                </div>

                {/* Description */}
                <p
                    className={`
            max-w-[540px]
            text-[14px]
            leading-[1.55]
            text-white/90
            ${isActive
                            ? "sm:text-[15px]"
                            : "line-clamp-2"
                        }
          `}
                >
                    {destination.description}
                </p>

                {/* Explore */}
                {isActive && (
                    <button
                        type="button"
                        onClick={() => openLeadPopup({ source: "country_cta" })}
                        className="
              group
              mt-4
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#E93F61]
              px-4
              py-2
              text-[14px]
              font-medium
              text-white
              transition-all
              hover:bg-[#d93657]
            "
                    >
                        <span>Explore</span>

                        <ArrowRight
                            size={16}
                            strokeWidth={2.3}
                            className="transition-transform group-hover:translate-x-0.5"
                        />
                    </button>
                )}
            </div>

            {/* =====================================================
          ACTIVE CARD TOP LABEL
      ====================================================== */}
            {isActive && (
                <div
                    className="
            absolute
            left-5
            top-5
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/20
            bg-white/10
            px-3.5
            py-2
            text-[12px]
            font-medium
            text-white
            backdrop-blur-md
          "
                >
                    <MapPin size={14} />
                    <span>Study Destination</span>
                </div>
            )}
        </article>
    );
}