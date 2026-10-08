import Image from "next/image";
import { BriefcaseBusiness, Check } from "lucide-react";

import Container from "@/components/ui/Container";
import EyebrowBadge from "@/components/ui/EyebrowBadge";

/* =========================================================
   COMPANY LOGOS
========================================================= */

const companies = [
    {
        name: "Google",
        image: "/logos/Company Logo/google.webp",
    },
    {
        name: "Apple",
        image: "/logos/Company Logo/apple.webp",
    },
    {
        name: "Siemens",
        image: "/logos/Company Logo/Siemens.webp",
    },
    {
        name: "Microsoft",
        image: "/logos/Company Logo/microsoft.webp",
    },
    {
        name: "JPMorgan",
        image: "/logos/Company Logo/Jpmorgan.webp",
    },
    {
        name: "Amazon",
        image: "/logos/Company Logo/amazon.webp",
    },
    {
        name: "Cisco",
        image: "/logos/Company Logo/Cisco.webp",
    },
];

/* =========================================================
   TRUST POINTS
========================================================= */

const trustPoints = [
    "Trusted by Students & Parents",
    "Transparent Process with No Hidden Costs",
    "Personalized Counselling Approach",
    "Strong Global University Network",
];

/* =========================================================
   SVG 1
   Shared shape
========================================================= */

function ShapeOne({
    className = "",
}: {
    className?: string;
}) {
    return (
        <svg
            viewBox="0 0 256 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            <path
                d="M 128 0 C 147.68 0 164.04 14.213 167.377 32.934 C 182.974 22.055 204.594 23.574 218.51 37.49 C 232.426 51.406 233.944 73.025 223.066 88.622 C 241.787 91.96 256 108.32 256 128 C 256 147.68 241.787 164.04 223.065 167.377 C 233.944 182.974 232.426 204.594 218.51 218.51 C 204.594 232.426 182.974 233.944 167.377 223.065 C 164.04 241.787 147.68 256 128 256 C 108.32 256 91.959 241.787 88.622 223.065 C 73.025 233.944 51.406 232.426 37.49 218.51 C 23.574 204.594 22.055 182.974 32.934 167.377 C 14.213 164.04 0 147.68 0 128 C 0 108.32 14.213 91.96 32.934 88.622 C 22.056 73.025 23.574 51.406 37.49 37.49 C 51.406 23.574 73.025 22.055 88.622 32.934 C 91.96 14.213 108.32 0 128 0 Z"
                fill="currentColor"
            />
        </svg>
    );
}

/* =========================================================
   SVG 2
   Shared shape — used on RIGHT only
   NOTE: this is NOT the SVG you asked to remove.
========================================================= */

function ShapeThree({
    className = "",
}: {
    className?: string;
}) {
    return (
        <svg
            viewBox="0 0 256 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            <path
                d="M 192 0 C 227.346 0 256 28.654 256 64 C 256 99.346 227.346 128 192 128 C 227.346 128 256 156.654 256 192 C 256 227.346 227.346 256 192 256 C 156.654 256 128 227.346 128 192 C 128 227.346 99.346 256 64 256 C 28.654 256 0 227.346 0 192 C 0 156.654 28.654 128 64 128 C 28.654 128 0 99.346 0 64 C 0 28.654 28.654 0 64 0 C 99.346 0 128 28.654 128 64 C 128 28.654 156.654 0 192 0 Z M 128 100 C 112.536 100 100 112.536 100 128 C 100 143.464 112.536 156 128 156 C 143.464 156 156 143.464 156 128 C 156 112.536 143.464 100 128 100 Z"
                fill="currentColor"
            />
        </svg>
    );
}

/* =========================================================
   TRUST ITEM
========================================================= */

function TrustItem({ text }: { text: string }) {
    return (
        <div
            className="
        flex
        min-h-[58px]
        items-center
        gap-3
        rounded-2xl
        border
        border-[#E0E3EB]
        bg-[#F7F8FB]
        px-4
        py-3
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-[#E93F61]/30
        hover:bg-white
      "
        >
            <span
                className="
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#E93F61]
        "
            >
                <Check
                    size={14}
                    strokeWidth={3}
                    className="text-white"
                />
            </span>

            <span
                className="
          font-body
          text-[13px]
          font-medium
          leading-5
          text-[#253A7B]
        "
            >
                {text}
            </span>
        </div>
    );
}

/* =========================================================
   COMPANY LOGO
========================================================= */

function CompanyLogo({
    company,
}: {
    company: (typeof companies)[number];
}) {
    return (
        <div
            title={company.name}
            className="
        group
        relative
        flex
        h-12
        w-12
        shrink-0
        items-center
        justify-center
        overflow-hidden
        rounded-full
        border
        border-[#E3E5EC]
        bg-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-md
      "
        >
            <Image
                src={company.image}
                alt={`${company.name} logo`}
                fill
                sizes="48px"
                className="
          object-contain
          p-2.5
          transition-transform
          duration-300
          group-hover:scale-110
        "
            />
        </div>
    );
}

/* =========================================================
   ABOUT SECTION
========================================================= */

export default function AboutSection() {
    return (
        <>
            <section
                className="
          relative
          w-full
          overflow-hidden
          bg-white
          text-black
          [letter-spacing:-0.04em]
        "
            >
                {/* =====================================================
            VERY LIMITED BACKGROUND DECORATION

            IMPORTANT:
            The previously supplied 4-part SVG is NOT used.
        ===================================================== */}

                {/* Left top decoration */}
                <ShapeOne
                    className="
            pointer-events-none
            absolute
            left-[1%]
            top-[7%]
            z-0
            h-[110px]
            w-[110px]
            rotate-[-10deg]
            text-[#F8C5D1]
            opacity-25
            sm:h-[135px]
            sm:w-[135px]
            lg:h-[155px]
            lg:w-[155px]
          "
                />

                {/* Right decoration */}
                <ShapeThree
                    className="
            pointer-events-none
            absolute
            right-[-35px]
            top-[8%]
            z-0
            h-[145px]
            w-[145px]
            rotate-[8deg]
            text-[#D9DFF4]
            opacity-45
            sm:h-[175px]
            sm:w-[175px]
            lg:h-[205px]
            lg:w-[205px]
          "
                />

                <Container
                    size="lg"
                    className="relative z-10"
                >
                    {/* =====================================================
              12 COLUMN GRID
          ===================================================== */}

                    <div
                        className="
              grid
              grid-cols-1
              gap-12
              lg:grid-cols-12
              lg:items-center
              lg:gap-10
              xl:gap-14
            "
                    >
                        {/* =================================================
                LEFT — 6 COLUMNS
            ================================================= */}

                        <div
                            className="
                order-2
                lg:order-1
                lg:col-span-6
              "
                        >
                            <div
                                className="
                  relative
                  mx-auto
                  h-[560px]
                  w-full
                  max-w-[620px]
                  sm:h-[620px]
                  lg:h-[680px]
                  xl:h-[720px]
                "
                            >
                                {/* =================================================
                    DECORATIVE SVG — peeks out from the right of the main image
                ================================================= */}

                                <svg
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 256"
                                    fill="none"
                                    className="
                      pointer-events-none
                      absolute
                      right-[8%]
                      top-[12%]
                      z-[5]
                      h-[180px]
                      w-[180px]
                      
                      sm:h-[220px]
                      sm:w-[220px]
                      lg:h-[260px]
                      lg:w-[260px]
                    "
                                >
                                    <path
                                        d="M 228 0 C 172.772 0 128 44.772 128 100 L 128 0 L 0 0 L 0 28 C 0 83.228 44.772 128 100 128 L 0 128 L 0 256 L 28 256 C 83.228 256 128 211.228 128 156 L 128 256 L 256 256 L 256 228 C 256 172.772 211.228 128 156 128 L 256 128 L 256 0 Z"
                                        fill=" #D9ECDE"
                                    />
                                </svg>

                                {/* =================================================
                    MAIN IMAGE
                ================================================= */}

                                <div
                                    className="
                    absolute
                    left-[7%]
                    top-[8%]
                    z-10
                    w-[61%]
                    sm:left-[8%]
                    sm:w-[60%]
                    lg:left-[6%]
                    lg:w-[61%]
                  "
                                >
                                    <div
                                        className="
                      relative
                      aspect-[4/5]
                      overflow-hidden
                      rounded-[42px]
                      border-[6px]
                      border-white
                      bg-[#F5F5F9]
                      shadow-[0_25px_70px_rgba(37,58,123,0.13)]
                    "
                                    >
                                        <Image
                                            src="/images/about/frame-536.webp"
                                            alt="HighEd overseas education counselling"
                                            fill
                                            priority
                                            sizes="(max-width: 640px) 58vw, (max-width: 1024px) 38vw, 30vw"
                                            className="
                        object-cover
                        transition-transform
                        duration-700
                        hover:scale-[1.03]
                      "
                                        />
                                    </div>
                                </div>

                                <div
                                    className="
                    absolute
                    bottom-[9%]
                    right-[3%]
                    z-20
                    w-[45%]
                    sm:right-[4%]
                    sm:w-[44%]
                    lg:right-[3%]
                    lg:w-[45%]
                  "
                                >
                                    <div
                                        className="
                      relative
                      aspect-[4/3]
                      overflow-hidden
                      rounded-[38px]
                      border-[6px]
                      border-white
                      bg-[#F5F5F9]
                      shadow-[0_22px_55px_rgba(37,58,123,0.16)]
                    "
                                    >
                                        <Image
                                            src="/images/about/frame-537.webp"
                                            alt="HighEd student counselling"
                                            fill
                                            sizes="(max-width: 640px) 43vw, (max-width: 1024px) 28vw, 22vw"
                                            className="
                        object-cover
                        transition-transform
                        duration-700
                        hover:scale-[1.03]
                      "
                                        />
                                    </div>
                                </div>

                                {/* =================================================
                    5+ EXPERIENCE CARD

                    IMPORTANT:
                    Positioned EXACTLY between both image cards.
                ================================================= */}

                                <div
                                    className="
                    absolute
                    left-[60%]
                    top-[60%]
                    z-40
                    flex
                    h-[150px]
                    w-[100px]
                    -translate-x-1/2
                    -translate-y-1/2
                    flex-col
                    items-center
                    justify-center
                    rounded-[24px]
                    bg-[#E93F61]
                    text-center
                    ring-[2px]
                    ring-white
                    sm:h-[90px]
                    sm:w-[140px]
                    lg:h-[100px]
                    lg:w-[150px]
                    lg:rounded-[28px]
                  "
                                >
                                    <span
                                        className="
                      text-[34px]
                      font-bold
                      leading-none
                      text-white
                      sm:text-[38px]
                      lg:text-[42px]
                    "
                                    >
                                        5+
                                    </span>

                                    <span
                                        className="
                      mt-2
                      text-[10px]
                      font-semibold
                      uppercase
                      leading-[1.3]
                      text-white
                      sm:text-[11px]
                      lg:text-[12px]
                    "
                                    >
                                        Years
                                        Experience
                                    </span>
                                </div>

                                {/* =================================================
                    RATING CARD

                    Kept outside the experience badge.
                ================================================= */}

                                <div
                                    className="
                    absolute
                    bottom-[20%]
                    left-[3%]
                    z-30
                    flex
                    h-[100px]
                    w-[125px]
                    flex-col
                    items-center
                    justify-center
                    rounded-[26px]
                    border
                    border-white
                    bg-white
                    shadow-[0_18px_45px_rgba(37,58,123,0.13)]
                    sm:h-[112px]
                    sm:w-[138px]
                    lg:bottom-[19%]
                    lg:left-[2%]
                    lg:h-[120px]
                    lg:w-[145px]
                  "
                                >
                                    <span
                                        className="
                      text-[38px]
                      font-medium
                      leading-none
                      text-black
                      sm:text-[42px]
                    "
                                    >
                                        4.5
                                    </span>

                                    <div className="mt-1 flex gap-[2px]">
                                        {Array.from({ length: 5 }).map(
                                            (_, index) => (
                                                <span
                                                    key={index}
                                                    className="
                            text-[15px]
                            leading-none
                            text-[#E9B528]
                          "
                                                >
                                                    ★
                                                </span>
                                            ),
                                        )}
                                    </div>

                                    <span
                                        className="
                      mt-1
                      text-[8px]
                      font-medium
                      text-black/35
                    "
                                    >
                                        Rating
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* =================================================
                RIGHT — 6 COLUMNS
            ================================================= */}

                        <div
                            className="
                order-1
                flex
                flex-col
                justify-center
                lg:order-2
                lg:col-span-6
                lg:py-[60px]
              "
                        >
                            {/* =================================================
                  BADGE
              ================================================= */}

                            <EyebrowBadge className="self-center lg:self-start">
                                About HighEd
                            </EyebrowBadge>

                            {/* =================================================
                  HEADING
              ================================================= */}

                            <h2
                                className="
                  mx-auto
                  mt-6
                  max-w-[650px]
                  text-center
                  text-brand-primary
                  lg:mx-0
                  lg:text-left
                "
                            >
                                Your Trusted {" "}
                                <span className="text-brand-accent">
                                    Study Abroad
                                </span>{" "}
                                Education Partner
                            </h2>

                            {/* =================================================
                  DESCRIPTION
              ================================================= */}

                            <div
                                className="
                  mx-auto
                  mt-6
                  max-w-[620px]
                  text-center
                  text-body
                  leading-7
                  text-black/65
                  lg:mx-0
                  lg:text-left
                "
                            >
                                <p>
                                    HighEd provides personalised study abroad guidance to help students choose the right universities, courses and international study destinations.
                                </p>

                                <p className="mt-4">
                                    From university selection and applications to scholarships, education loans and student visa support, we help simplify every step of your study abroad journey.
                                </p>
                            </div>

                            {/* =================================================
                  TRUST CARDS
              ================================================= */}

                            <div
                                className="
                  mt-8
                  grid
                  grid-cols-1
                  gap-3
                  sm:grid-cols-2
                "
                            >
                                {trustPoints.map((point) => (
                                    <TrustItem
                                        key={point}
                                        text={point}
                                    />
                                ))}
                            </div>

                            {/* =================================================
                  COMPANY SECTION
              ================================================= */}

                            <div className="mt-8">
                                <div
                                    className="
                    mb-4
                    flex
                    items-center
                    justify-center
                    gap-2
                    lg:justify-start
                  "
                                >
                                    <BriefcaseBusiness
                                        size={16}
                                        strokeWidth={2}
                                        className="text-brand-accent"
                                    />

                                    <span
                                        className="
                      text-body-small
                      font-medium
                      text-brand-primary/65
                    "
                                    >
                                        Target career pathways &amp; top global employers for international graduates
                                    </span>
                                </div>

                                {/* =================================================
                    COMPANY LOGO CAROUSEL
                ================================================= */}

                                <div
                                    className="
                    relative
                    mx-auto
                    w-full
                    max-w-[620px]
                    overflow-hidden
                    py-2
                    lg:mx-0
                  "
                                >
                                    {/* Left fade */}

                                    <div
                                        aria-hidden="true"
                                        className="
                      pointer-events-none
                      absolute
                      inset-y-0
                      left-0
                      z-20
                      w-12
                      bg-gradient-to-r
                      from-white
                      to-transparent
                    "
                                    />

                                    {/* Right fade */}

                                    <div
                                        aria-hidden="true"
                                        className="
                      pointer-events-none
                      absolute
                      inset-y-0
                      right-0
                      z-20
                      w-12
                      bg-gradient-to-l
                      from-white
                      to-transparent
                    "
                                    />

                                    <div
                                        className="
                      company-carousel-track
                      flex
                      w-max
                      items-center
                      gap-4
                    "
                                    >
                                        {[
                                            ...companies,
                                            ...companies,
                                        ].map((company, index) => (
                                            <CompanyLogo
                                                key={`${company.name}-${index}`}
                                                company={company}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* =========================================================
          CAROUSEL ANIMATION
      ========================================================= */}

            <style >{`
        .company-carousel-track {
          animation: highEdCompanyScroll 24s linear infinite;
          will-change: transform;
        }

        .company-carousel-track:hover {
          animation-play-state: paused;
        }

        @keyframes highEdCompanyScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 8px));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .company-carousel-track {
            animation: none !important;
          }
        }
      `}</style>
        </>
    );
}