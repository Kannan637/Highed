"use client";

import {
    ArrowRight,
    Award,
    ChevronLeft,
    ChevronRight,
    GraduationCap,
    Landmark,
    PiggyBank,
    Trophy,
    Wallet,
    type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
    useCallback,
    useEffect,
    useRef,
    useState,
    type ReactNode,
} from "react";

import Container from "@/components/ui/Container";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import EyebrowBadge from "../ui/EyebrowBadge";

const SCHOLARSHIP_IMAGE =
    "/images/Scholarship/ChatGPT Image Sep 14, 2026, 12_34_47 PM.webp";

const CARD_GAP_PX = 16;

/*
 * PAUL-inspired pastel palette
 *
 * Cream    #FFF4D6
 * Lime     #DFFF7F
 * Sky      #BFE3FF
 * Pink     #FFB7D5
 * Lavender #C9B8FF
 * Peach    #FFD6A5
 * Navy     #253A82
 */

interface ScholarshipItem {
    label: string;
    description: string;
    Icon: LucideIcon;
    card: string;
    descText: string;
    tile: string;
}

const scholarshipItems: readonly ScholarshipItem[] = [
    {
        label: "Merit-Based Scholarships",
        description:
            "Awards for strong academic records and test scores.",
        Icon: Award,
        card: "bg-[#FFF4D6] text-[#253A82]",
        descText: "text-[#253A82]/75",
        tile: "bg-[#DFFF7F] text-[#253A82]",
    },
    {
        label: "University Scholarships",
        description:
            "Funding offered directly by your chosen university.",
        Icon: GraduationCap,
        card: "bg-[#DFFF7F] text-[#253A82]",
        descText: "text-[#253A82]/75",
        tile: "bg-[#253A82] text-[#DFFF7F]",
    },
    {
        label: "Education Loan Assistance",
        description:
            "Help with documents, applications, and lender choice.",
        Icon: Landmark,
        card: "bg-[#BFE3FF] text-[#253A82]",
        descText: "text-[#253A82]/75",
        tile: "bg-[#FFB7D5] text-[#253A82]",
    },
    {
        label: "Financial Planning Support",
        description:
            "Plan tuition, living costs, and repayment upfront.",
        Icon: PiggyBank,
        card: "bg-[#FFB7D5] text-[#253A82]",
        descText: "text-[#253A82]/75",
        tile: "bg-[#253A82] text-[#FFB7D5]",
    },
    {
        label: "Government Scholarships",
        description:
            "Schemes run by central and state governments.",
        Icon: Wallet,
        card: "bg-[#C9B8FF] text-[#253A82]",
        descText: "text-[#253A82]/75",
        tile: "bg-[#FFF4D6] text-[#253A82]",
    },
    {
        label: "Sports & Talent Scholarship",
        description:
            "Support for athletes and gifted performers.",
        Icon: Trophy,
        card: "bg-[#FFD6A5] text-[#253A82]",
        descText: "text-[#253A82]/75",
        tile: "bg-[#BFE3FF] text-[#253A82]",
    },
];

export default function ScholarshipsLoansSection() {
    return (
        <section
            className="
                w-full
                overflow-hidden
                bg-brand-primary
                py-14
                text-content-primary
                tracking-tight-5
                [letter-spacing:var(--tracking-tight-5)]
                [&_*]:[letter-spacing:var(--tracking-tight-5)]
                sm:py-20
                lg:py-[72px]
            "
        >
            <Container size="lg">
                <div
                    className="
                        grid
                        items-center
                        gap-10
                        lg:grid-cols-12
                        lg:gap-16
                    "
                >
                    {/* =====================================================
                        CONTENT
                    ====================================================== */}
                    <div
                        className="
                            min-w-0
                            text-center
                            lg:col-span-7
                            lg:text-left
                        "
                    >
                        <EyebrowBadge className="mx-auto mb-5 lg:mx-0">
                            Scholarships & Loans
                        </EyebrowBadge>

                        <h2
                            className="
                                mx-auto
                                max-w-[24ch]
                                text-3xl
                                font-semibold
                                leading-[1.08]
                                text-white
                                sm:text-5xl
                                lg:mx-0
                                lg:text-6xl
                            "
                        >
                            Scholarships and education loan help in Tamil Nadu
                        </h2>

                        <p
                            className="
                                mx-auto
                                mt-5
                                max-w-[48ch]
                                text-base
                                leading-relaxed
                                text-white/70
                                sm:text-lg
                                lg:mx-0
                            "
                        >
                            We match you with funding you qualify for and guide
                            you through every application.
                        </p>

                        {/* =================================================
                            CARD CAROUSEL
                        ================================================== */}
                        <CardCarousel label="Scholarship and loan options">
                            {scholarshipItems.map(
                                ({
                                    label,
                                    description,
                                    Icon,
                                    card,
                                    descText,
                                    tile,
                                }) => (
                                    <li
                                        key={label}
                                        className={`
                                            flex
                                            min-h-[270px]
                                            w-[82vw]
                                            max-w-[280px]
                                            shrink-0
                                            snap-center
                                            flex-col
                                            justify-between
                                            rounded-[28px]
                                            p-6
                                            text-left
                                            sm:min-h-[280px]
                                            sm:w-[260px]
                                            sm:snap-start
                                            ${card}
                                        `}
                                    >
                                        <span
                                            aria-hidden="true"
                                            className={`
                                                flex
                                                size-12
                                                items-center
                                                justify-center
                                                rounded-2xl
                                                ${tile}
                                            `}
                                        >
                                            <Icon
                                                size={22}
                                                strokeWidth={2}
                                            />
                                        </span>

                                        <div className="flex flex-col gap-2">
                                            <h3
                                                className="
                                                    text-xl
                                                    font-semibold
                                                    leading-tight
                                                "
                                            >
                                                {label}
                                            </h3>

                                            <p
                                                className={`
                                                    text-sm
                                                    leading-relaxed
                                                    ${descText}
                                                `}
                                            >
                                                {description}
                                            </p>
                                        </div>
                                    </li>
                                ),
                            )}
                        </CardCarousel>

                        {/* =================================================
                            CTA
                        ================================================== */}
                        <div
                            className="
                                mt-8
                                flex
                                flex-col
                                items-center
                                justify-center
                                gap-3
                                sm:flex-row
                                lg:items-center
                                lg:justify-start
                            "
                        >
                            <LeadCTAButton source="scholarship_counselling">
                                Book Free Counselling
                            </LeadCTAButton>

                            <Link
                                href="/scholarships"
                                className="
                                    group
                                    inline-flex
                                    h-12
                                    items-center
                                    gap-2
                                    rounded-full
                                    px-6
                                    text-sm
                                    font-semibold
                                    text-brand-accent
                                    transition-colors
                                    hover:bg-brand-accent/10
                                    focus-visible:outline-none
                                    focus-visible:ring-2
                                    focus-visible:ring-brand-accent
                                    motion-reduce:transition-none
                                "
                            >
                                <span>Explore Scholarships</span>

                                <ArrowRight
                                    size={18}
                                    strokeWidth={2.2}
                                    aria-hidden="true"
                                    className="
                                        transition-transform
                                        duration-200
                                        group-hover:translate-x-1
                                        motion-reduce:transition-none
                                    "
                                />
                            </Link>
                        </div>
                    </div>

                    {/* =====================================================
                        IMAGE
                    ====================================================== */}
                    <div
                        className="
                            flex
                            justify-center
                            lg:col-span-5
                            lg:justify-end
                        "
                    >
                        <div
                            className="
                                relative
                                aspect-[4/5]
                                w-full
                                max-w-[360px]
                                overflow-hidden
                                rounded-[28px]
                                rounded-tr-[90px]
                                bg-surface-neutral
                                sm:max-w-[400px]
                                sm:rounded-tr-[130px]
                                lg:max-w-[460px]
                                lg:rounded-tr-[160px]
                            "
                        >
                            <Image
                                src={SCHOLARSHIP_IMAGE}
                                alt="Student studying abroad"
                                fill
                                sizes="
                                    (min-width: 1024px) 460px,
                                    (min-width: 640px) 400px,
                                    90vw
                                "
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

/* ============================================================
   CARD CAROUSEL
   - Mobile: centered cards
   - Desktop: left aligned cards
   - Scroll snap
   - No card hover animation
   - No card shadow
============================================================ */

function CardCarousel({
    label,
    children,
}: {
    label: string;
    children: ReactNode;
}) {
    const listRef = useRef<HTMLUListElement>(null);

    const [canScroll, setCanScroll] = useState(false);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const update = useCallback(() => {
        const el = listRef.current;

        if (!el) return;

        const hasOverflow = el.scrollWidth > el.clientWidth + 1;

        setCanScroll(hasOverflow);
        setAtStart(el.scrollLeft <= 1);
        setAtEnd(
            el.scrollLeft + el.clientWidth >=
            el.scrollWidth - 1,
        );
    }, []);

    useEffect(() => {
        const el = listRef.current;

        if (!el) return;

        update();

        el.addEventListener("scroll", update, {
            passive: true,
        });

        const observer = new ResizeObserver(update);

        observer.observe(el);

        return () => {
            el.removeEventListener("scroll", update);
            observer.disconnect();
        };
    }, [update]);

    const scrollByCard = (direction: 1 | -1) => {
        const el = listRef.current;
        const first = el?.firstElementChild;

        if (!el || !first) return;

        const step =
            first.getBoundingClientRect().width +
            CARD_GAP_PX;

        const reduceMotion = window
            .matchMedia("(prefers-reduced-motion: reduce)")
            .matches;

        el.scrollBy({
            left: direction * step,
            behavior: reduceMotion ? "auto" : "smooth",
        });
    };

    const controlClass = `
        flex
        size-11
        items-center
        justify-center
        rounded-full
        border
        border-white/25
        text-white
        transition-colors
        hover:bg-white/10
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-brand-accent
        disabled:cursor-not-allowed
        disabled:opacity-35
        disabled:hover:bg-transparent
        motion-reduce:transition-none
    `;

    return (
        <div
            role="region"
            aria-roledescription="carousel"
            aria-label={label}
            className="mt-10 w-full"
        >
            <ul
                ref={listRef}
                tabIndex={0}
                className="
                    flex
                    snap-x
                    snap-mandatory
                    gap-4
                    overflow-x-auto
                    scroll-smooth
                    pb-2

                    px-[calc((100%-82vw)/2)]

                    sm:px-0

                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-brand-accent

                    motion-reduce:scroll-auto

                    [scrollbar-width:none]
                    [&::-webkit-scrollbar]:hidden
                "
            >
                {children}
            </ul>

            {canScroll && (
                <div
                    className="
                        mt-5
                        flex
                        justify-center
                        gap-2
                        sm:justify-end
                    "
                >
                    <button
                        type="button"
                        onClick={() => scrollByCard(-1)}
                        disabled={atStart}
                        aria-label="Previous scholarship option"
                        className={controlClass}
                    >
                        <ChevronLeft
                            size={21}
                            aria-hidden="true"
                        />
                    </button>

                    <button
                        type="button"
                        onClick={() => scrollByCard(1)}
                        disabled={atEnd}
                        aria-label="Next scholarship option"
                        className={controlClass}
                    >
                        <ChevronRight
                            size={21}
                            aria-hidden="true"
                        />
                    </button>
                </div>
            )}
        </div>
    );
}