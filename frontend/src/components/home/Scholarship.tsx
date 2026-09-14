"use client";

import {
    ArrowRight,
    Phone,
} from "lucide-react";
import Image from "next/image";
import { useLeadPopup } from "@/hooks/useLeadPopup";
import Container from "@/components/ui/Container";

const scholarshipItems = {
    left: [
        "Merit-Based Scholarships",
        "University Scholarships",
        "Education Loan Assistance",
    ],
    right: [
        "Financial Planning Support",
        "Government Scholarships",
        "Sports & Talent Scholarship",
    ],
};

export default function ScholarshipsLoansSection() {
    const { openLeadPopup } = useLeadPopup();
    
    return (
        <section
            className="
        w-full
        overflow-hidden
        bg-white
        py-16
        text-[#121314]
        sm:py-20
        lg:py-[72px]
      "
        >
            <Container size="lg">
                {/* =====================================================
            HEADER
        ====================================================== */}

                <div className="text-center">
                    {/* Eyebrow */}
                    <div className="mb-7 flex items-center justify-center gap-2">
                        <span className="h-[7px] w-[7px] rounded-full bg-[#253A7B]" />

                        <span className="text-[14px] font-medium text-[#253A7B] sm:text-[15px]">
                            Scholarships & Loans
                        </span>
                    </div>

                    {/* Heading */}
                    <h2
                        className="
              mx-auto
              max-w-[760px]
              text-[39px]
              font-normal
              leading-[1.03]
              tracking-[-1.8px]
              text-[#121314]
              sm:text-[46px]
              lg:text-[47px]
            "
                    >
                        Scholarships & Education
                        <br />
                        Loan Assistance in Tamil Nadu
                    </h2>
                </div>

                {/* =====================================================
            SCHOLARSHIP VISUAL
        ====================================================== */}

                <div className="mt-14 lg:mt-[66px]">
                    {/* ===================================================
              DESKTOP LAYOUT (12-Column Grid: 4 + 4 + 4)
          ==================================================== */}

                    <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                        {/* LEFT ITEMS (4 Cols) */}
                        <div className="col-span-4 flex flex-col justify-around h-[460px] py-6">
                            {scholarshipItems.left.map((item) => (
                                <ScholarshipLabel
                                    key={item}
                                    text={item}
                                    side="left"
                                />
                            ))}
                        </div>

                        {/* CENTER IMAGE (4 Cols) */}
                        <div className="col-span-4 flex justify-center">
                            <div
                                className="
                    relative
                    z-10
                    h-[460px]
                    w-full
                    max-w-[345px]
                    overflow-hidden
                    rounded-[28px]
                    bg-[#eef1f5]
                    shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                  "
                            >
                                <Image
                                    src="/images/Scholarship/ChatGPT Image Sep 14, 2026, 12_34_47 PM.webp"
                                    alt="Student studying abroad"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* RIGHT ITEMS (4 Cols) */}
                        <div className="col-span-4 flex flex-col justify-around h-[460px] py-6">
                            {scholarshipItems.right.map((item) => (
                                <ScholarshipLabel
                                    key={item}
                                    text={item}
                                    side="right"
                                />
                            ))}
                        </div>
                    </div>

                    {/* ===================================================
              MOBILE LAYOUT (4-Column Grid)
          ==================================================== */}

                    <div className="grid grid-cols-4 gap-4 lg:hidden">
                        {/* Image */}
                        <div className="col-span-4 flex justify-center">
                            <div
                                className="
                    relative
                    h-[430px]
                    w-full
                    max-w-[345px]
                    overflow-hidden
                    rounded-[26px]
                    bg-[#eef1f5]
                  "
                            >
                                <Image
                                    src="/images/Scholarship/ChatGPT Image Sep 14, 2026, 12_34_47 PM.webp"
                                    alt="Student studying abroad"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Mobile labels */}
                        <div className="col-span-4 mt-4 grid grid-cols-4 gap-3">
                            {[
                                ...scholarshipItems.left,
                                ...scholarshipItems.right,
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="
                    col-span-4
                    sm:col-span-2
                    flex
                    min-h-[48px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#eeeeee]
                    bg-[#fafafa]
                    px-5
                    py-2.5
                    text-center
                    text-[14px]
                    font-medium
                    text-[#121314]
                  "
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* =====================================================
            CTA BUTTONS
        ====================================================== */}

                <div
                    className="
            mt-12
            flex
            flex-col
            items-center
            justify-center
            gap-3
            sm:flex-row
            lg:mt-[58px]
          "
                >
                    {/* Book Counselling */}

                    <button
                        type="button"
                        onClick={() => openLeadPopup({ source: "scholarship_counselling" })}
                        className="
              group
              flex
              h-[55px]
              items-center
              justify-between
              gap-5
              rounded-full
              bg-[#E93F61]
              pl-[18px]
              pr-2
              text-[15px]
              font-medium
              text-white
              transition-all
              duration-200
              hover:bg-[#d93657]
            "
                    >
                        <span className="whitespace-nowrap">
                            Book Free Counselling
                        </span>

                        <span
                            className="
                flex
                h-[40px]
                w-[40px]
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#121314]
              "
                        >
                            <Phone
                                size={18}
                                strokeWidth={2}
                                fill="currentColor"
                            />
                        </span>
                    </button>

                    {/* Explore Scholarships */}

                    <button
                        type="button"
                        onClick={() => openLeadPopup({ source: "explore_scholarships" })}
                        className="
              group
              flex
              h-[55px]
              items-center
              justify-between
              gap-7
              rounded-full
              border
              border-[#121314]
              bg-white
              px-5
              text-[15px]
              font-medium
              text-[#121314]
              transition-all
              duration-200
              hover:bg-[#121314]
              hover:text-white
            "
                    >
                        <span className="whitespace-nowrap">
                            Explore Scholarships
                        </span>

                        <ArrowRight
                            size={19}
                            strokeWidth={2}
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

/* ============================================================
   SCHOLARSHIP LABEL
============================================================ */

function ScholarshipLabel({
    text,
    side,
}: {
    text: string;
    side: "left" | "right";
}) {
    return (
        <div
            className={`
        relative
        flex
        items-center
        ${side === "left" ? "justify-end" : "justify-start"}
      `}
        >
            {/* Connecting line */}
            {side === "left" ? (
                <span
                    aria-hidden="true"
                    className="
            absolute
            right-0
            h-px
            w-[48px]
            xl:w-[72px]
            bg-[#d4d4d4]
          "
                />
            ) : (
                <span
                    aria-hidden="true"
                    className="
            absolute
            left-0
            h-px
            w-[48px]
            xl:w-[72px]
            bg-[#d4d4d4]
          "
                />
            )}

            {/* Label */}
            <div
                className={`
          relative
          z-10
          flex
          min-h-[44px]
          items-center
          rounded-full
          bg-[#fafafa]
          px-4
          text-[14px]
          font-medium
          text-[#121314]
          shadow-[0_2px_8px_rgba(18,19,20,0.02)]
          border
          border-[#f0f0f0]
          ${side === "left"
                        ? "mr-[40px] xl:mr-[60px]"
                        : "ml-[40px] xl:ml-[60px]"
                    }
        `}
            >
                {text}
            </div>
        </div>
    );
}