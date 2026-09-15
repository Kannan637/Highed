"use client";

import {
    BriefcaseBusiness,
    ArrowRight,
} from "lucide-react";

import Image from "next/image";
import Container from "@/components/ui/Container";
import { useLeadPopup } from "@/hooks/useLeadPopup";

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
    {
        text: "Trusted by Students & Parents",
        position:
            "left-[8%] top-[22%]",
    },
    {
        text: "Transparent Process with No Hidden Costs",
        position:
            "left-[4%] top-[50%]",
    },
    {
        text: "Personalized Counselling Approach",
        position:
            "right-[4%] top-[67%]",
    },
    {
        text: "Strong Global University Network",
        position:
            "left-[9%] bottom-[5%]",
    },
];

/* =========================================================
   COMPANY LOGO COMPONENT
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
        h-[48px]
        w-[48px]
        shrink-0
        items-center
        justify-center
        rounded-full
        border
        border-white/20
        bg-white
        shadow-[0_5px_18px_rgba(18,19,20,0.12)]
        transition-all
        duration-200
        hover:-translate-y-1
        hover:shadow-[0_9px_24px_rgba(18,19,20,0.20)]
        overflow-hidden
      "
        >
            <Image
                src={company.image}
                alt={company.name}
                fill
                sizes="48px"
                className="
          object-contain
          p-2.5
          transition-transform
          duration-200
          group-hover:scale-110
        "
            />
        </div>
    );
}

/* =========================================================
   TRUST BADGE
========================================================= */

function TrustBadge({
    text,
    position,
}: {
    text: string;
    position: string;
}) {
    return (
        <div
            className={`
        absolute
        z-30
        hidden
        items-center
        gap-3
        rounded-full
        border-[7px]
        border-white/20
        bg-white
        px-4
        py-2
        shadow-[0_8px_22px_rgba(18,19,20,0.12)]
        md:flex
        ${position}
      `}
        >
            <span
                className="
          h-[7px]
          w-[7px]
          shrink-0
          rounded-full
          bg-[#E93F61]
        "
            />

            <span
                className="
          whitespace-nowrap
          text-[13px]
          font-medium
          text-[#E93F61]
        "
            >
                {text}
            </span>
        </div>
    );
}

/* =========================================================
   ABOUT SECTION
========================================================= */

export default function AboutSection() {
    const { openLeadPopup } = useLeadPopup();

    return (
        <section
            className={`
        relative
        w-full
        overflow-hidden
        bg-[#253A7B]
        text-white
      `}
        >
            {/* =====================================================
          DECORATIVE WHITE ARC — TOP LEFT
      ====================================================== */}

            <div
                aria-hidden="true"
                className="
          pointer-events-none
          absolute
          -left-[230px]
          -top-[130px]
          hidden
          h-[320px]
          w-[650px]
          rotate-[17deg]
          rounded-[50%]
          border-[60px]
          border-white
          lg:block
        "
            />

            {/* =====================================================
          DECORATIVE WHITE ARC — BOTTOM
      ====================================================== */}

            <div
                aria-hidden="true"
                className="
          pointer-events-none
          absolute
          -bottom-[250px]
          left-[310px]
          hidden
          h-[430px]
          w-[650px]
          rotate-[48deg]
          rounded-[50%]
          border-[55px]
          border-white
          lg:block
        "
            />

            {/* =====================================================
          MAIN WRAPPER
      ====================================================== */}

            <Container size="lg" className="relative z-10">
                <div className="grid grid-cols-4 gap-8 lg:grid-cols-12 lg:gap-12 items-center lg:min-h-[800px]">
                    {/* ===================================================
                        LEFT — STUDENT VISUAL
                    ==================================================== */}

                    <div
                        className="
                            col-span-4
                            lg:col-span-6
                            relative
                            flex
                            min-h-[480px]
                            items-end
                            justify-center
                            overflow-visible
                            px-0
                            pt-10
                            sm:min-h-[620px]
                            lg:min-h-[800px]
                            lg:justify-start
                            order-2
                            lg:order-1
                        "
                    >
                    {/* =================================================
              STUDENT IMAGE PLACEHOLDER
          ================================================== */}

                    <div
                        className="
    relative
    z-10
    h-[420px]
    w-full
    max-w-[340px]
    sm:max-w-none
    sm:h-[680px]
    sm:w-[540px]
    lg:absolute
    lg:bottom-0
    lg:left-[-20px]
    lg:h-[850px]
    lg:w-[680px]
  "
                    >
                        <Image
                            src="/images/about/ChatGPT Image Sep 14, 2026, 12_10_06 PM.webp"
                            alt="Student"
                            fill
                            sizes="(max-width: 640px) 340px, (max-width: 1024px) 540px, 680px"
                            priority
                            className="object-contain object-bottom"
                        />
                    </div>

                    {/* =================================================
              DESKTOP TRUST BADGES
          ================================================== */}

                    {trustPoints.map((point) => (
                        <TrustBadge
                            key={point.text}
                            text={point.text}
                            position={point.position}
                        />
                    ))}

                    {/* =================================================
              MOBILE TRUST BADGES
          ================================================== */}

                    <div
                        className="
              absolute
              bottom-7
              left-1/2
              z-30
              flex
              w-[92%]
              -translate-x-1/2
              flex-col
              items-center
              gap-2
              md:hidden
            "
                    >
                        <div
                            className="
                flex
                items-center
                gap-2
                rounded-full
                border-4
                border-white/20
                bg-white
                px-4
                py-2
                shadow-[0_8px_20px_rgba(18,19,20,0.15)]
              "
                        >
                            <span
                                className="
                  h-[7px]
                  w-[7px]
                  rounded-full
                  bg-[#E93F61]
                "
                            />

                            <span
                                className="
                  text-[12px]
                  font-medium
                  text-[#E93F61]
                "
                            >
                                Trusted by Students & Parents
                            </span>
                        </div>
                    </div>
                </div>

                {/* ===================================================
                    RIGHT — CONTENT
                ==================================================== */}

                <div
                    className="
                        col-span-4
                        lg:col-span-6
                        relative
                        z-20
                        px-0
                        pb-10
                        pt-16
                        text-center
                        lg:py-[78px]
                        lg:text-left
                        order-1
                        lg:order-2
                    "
                >
                    {/* =================================================
              EYEBROW
          ================================================== */}

                    <div
                        className="
              mb-7
              flex
              items-center
              justify-center
              lg:justify-start
              gap-2
            "
                    >
                        <span
                            className="
                h-[7px]
                w-[7px]
                rounded-full
                bg-white
              "
                        />

                        <span
                            className="
                text-[14px]
                font-medium
                text-white
                sm:text-[15px]
              "
                        >
                            About Us
                        </span>
                    </div>

                    {/* =================================================
              HEADING
          ================================================== */}

                    <h2
                        className="
              mx-auto
              lg:mx-0
              max-w-[680px]
              text-[40px]
              font-normal
              leading-[1.02]
              tracking-[-1.8px]
              text-white
              sm:text-[47px]
              lg:text-[48px]
            "
                    >
                        Leading Overseas{" "}
                        <span className="text-[#E93F61]">
                            Education
                        </span>
                        <br />
                        Advisors in Coimbatore
                    </h2>

                    {/* =================================================
              ABOUT COPY
          ================================================== */}

                    <div
                        className="
              mx-auto
              lg:mx-0
              mt-14
              max-w-[610px]
              space-y-7
              text-[15px]
              leading-[1.6]
              text-white
              sm:text-[16px]
              lg:text-[17px]
            "
                    >
                        <p>
                            HighEd is a trusted overseas education advisory
                            helping students across Tamil Nadu achieve their
                            study abroad goals with personalized counselling
                            and transparent guidance.
                        </p>

                        <p>
                            From Chennai and Coimbatore to Madurai, Trichy,
                            Salem, Tirunelveli and other cities, our experienced
                            counsellors simplify university selection,
                            applications, scholarships, education loans and
                            student visa processes.
                        </p>

                        <p>
                            With strong global university partnerships and
                            student-focused guidance, we help aspiring students
                            choose the right country, course and university for
                            their academic and career goals.
                        </p>
                    </div>

                    {/* =================================================
              COMPANY OUTCOMES
          ================================================== */}

                    <div className="mt-10">
                        {/* Label */}

                        <div
                            className="
                mb-4
                flex
                items-center
                justify-center
                lg:justify-start
                gap-2
              "
                        >
                            <BriefcaseBusiness
                                size={15}
                                strokeWidth={2}
                                className="text-[#E93F61]"
                            />

                            <span
                                className="
                  text-[13px]
                  font-medium
                  text-white/80
                  sm:text-[14px]
                "
                            >
                                Our students work at leading global companies
                            </span>
                        </div>

                        {/* =================================================
                COMPANY LOGOS
            ================================================== */}

                        <div className="group relative mx-auto lg:mx-0 w-full max-w-[570px] overflow-hidden py-2">
                            {/* Fade edges */}
                            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#253A7B] to-transparent" />
                            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#253A7B] to-transparent" />

                            <div className="flex w-max animate-[scroll_25s_linear_infinite] items-center gap-4 group-hover:[animation-play-state:paused]">
                                {[...companies, ...companies, ...companies].map((company, i) => (
                                    <CompanyLogo
                                        key={`${company.name}-${i}`}
                                        company={company}
                                    />
                                ))}
                            </div>
                        </div>

                        <style>{`
                            @keyframes scroll {
                                0% { transform: translateX(0); }
                                100% { transform: translateX(calc(-33.3333% - 0.333rem)); }
                            }
                        `}</style>
                    </div>

                    {/* =================================================
              CTA
          ================================================== */}

                    <button
                        type="button"
                        onClick={() => openLeadPopup({ source: "about_cta" })}
                        className="
              group
              mt-9
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#E93F61]
              px-5
              py-2.5
              text-[14px]
              font-medium
              text-white
              transition-all
              duration-200
              hover:gap-3
              hover:bg-[#d93657]
            "
                    >
                        <span>
                            Start Your Journey
                        </span>

                        <ArrowRight
                            size={17}
                            strokeWidth={2.2}
                            className="
                transition-transform
                duration-200
                group-hover:translate-x-0.5
              "
                        />
                    </button>
                </div>
            </div>
            </Container>
        </section>
    );
}