"use client";

import Image from "next/image";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

type CounsellingCTAProps = {
    source?: string;
};

export default function CounsellingCTA({
    source = "course_counselling",
}: CounsellingCTAProps) {
    return (
        <section
            className="mt-10 w-full"
            aria-label="Course Counselling Consultation"
        >
            <div className="relative w-full">
                {/* =====================================================
                    DESKTOP + MOBILE CTA BANNER
                ====================================================== */}
                <div
                    className="
                        relative w-full overflow-visible rounded-2xl
                        bg-brand-primary
                        px-5 py-7
                        sm:px-8 sm:py-8
                        lg:min-h-[230px]
                        lg:pl-[27%] lg:pr-10
                        xl:pl-[28%] xl:pr-12
                    "
                >
                    <div
                        className="
                            flex w-full flex-col items-center justify-center
                            gap-6
                            lg:min-h-[230px]
                            lg:flex-row
                            lg:items-center
                            lg:justify-between
                            lg:gap-8
                        "
                    >
                        {/* =================================================
                            MOBILE IMAGE
                            Visible only below lg
                        ================================================== */}
                        <div className="flex w-full justify-center lg:hidden">
                            <Image
                                src="/images/courses/Puzzled Mascot Exploring Course Options.webp"
                                alt=""
                                width={500}
                                height={500}
                                priority
                                className="
                                    h-auto
                                    w-[230px]
                                    object-contain
                                    sm:w-[270px]
                                "
                            />
                        </div>

                        {/* =================================================
                            CONTENT
                        ================================================== */}
                        <div
                            className="
                                min-w-0 flex-1
                                text-center
                                lg:text-left
                            "
                        >
                            <h2
                                className="
                                    mx-auto
                                    max-w-[700px]
                                    text-3xl
                                    font-semibold
                                    leading-[1.08]
                                    tracking-[-0.035em]
                                    text-white
                                    sm:text-4xl
                                    lg:mx-0
                                    lg:text-[42px]
                                    xl:text-[46px]
                                "
                            >
                                Not sure which course fits your profile?
                            </h2>

                            <p
                                className="
                                    mx-auto
                                    mt-3
                                    max-w-[680px]
                                    text-sm
                                    leading-6
                                    tracking-[-0.015em]
                                    text-white/80
                                    sm:text-[15px]
                                    lg:mx-0
                                    lg:text-base
                                "
                            >
                                Our counsellors will analyse your academics,
                                budget &amp; career goals to recommend the
                                perfect programme.
                            </p>
                        </div>

                        {/* =================================================
                            CTA BUTTON
                        ================================================== */}
                        <div
                            className="
                                flex
                                w-full
                                justify-center
                                sm:w-auto
                                lg:shrink-0
                                lg:justify-end
                            "
                        >
                            <LeadCTAButton source={source}>
                                Request Callback
                            </LeadCTAButton>
                        </div>
                    </div>
                </div>

                {/* =====================================================
                    DESKTOP IMAGE
                    Completely outside the blue banner
                ====================================================== */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        bottom-0
                        left-0
                        z-20
                        hidden
                        h-full
                        w-[27%]
                        lg:block
                    "
                >
                    <div
                        className="
                            absolute
                            bottom-[-2px]
                            left-1/2
                            -translate-x-1/2
                        "
                    >
                        <Image
                            src="/images/courses/Puzzled Mascot Exploring Course Options.webp"
                            alt=""
                            width={500}
                            height={500}
                            priority
                            className="
                                h-auto
                                w-[330px]
                                max-w-none
                                object-contain
                                xl:w-[370px]
                            "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}