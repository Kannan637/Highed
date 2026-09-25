"use client";

import { GraduationCap } from "lucide-react";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

type CounsellingCTAProps = {
    source?: string;
};

export default function CounsellingCTA({
    source = "course_counselling",
}: CounsellingCTAProps) {
    return (
        <section className="mt-10 w-full">
            <div className="w-full">
                {/* =====================================================
                    CTA CONTAINER
                ===================================================== */}
                <div
                    className="
                        w-full
                        overflow-hidden
                        rounded-2xl
                        bg-brand-primary
                    "
                >
                    {/* =================================================
                        MOBILE / TABLET
                    ================================================= */}
                    <div
                        className="
                            flex
                            flex-col
                            px-5
                            py-7
                            sm:px-8
                            sm:py-9
                            lg:hidden
                        "
                    >
                        {/* Icon */}
                        <div
                            className="
                                mb-5
                                flex
                                size-12
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-white
                            "
                        >
                            <GraduationCap
                                size={26}
                                strokeWidth={1.8}
                                aria-hidden="true"
                                className="text-brand-primary"
                            />
                        </div>

                        {/* Content */}
                        <div className="min-w-0 max-w-2xl">
                            <h2 className="text-white">
                                Not sure which course fits your profile?
                            </h2>

                            <p
                                className="
                                    mt-3
                                    max-w-xl
                                    text-sm
                                    leading-6
                                    tracking-[-0.015em]
                                    text-white/80
                                    sm:text-[15px]
                                "
                            >
                                Our counsellors will analyse your academics,
                                budget &amp; career goals to recommend the
                                perfect programme.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="mt-6 w-full sm:w-auto">
                            <LeadCTAButton source={source}>
                                Request Callback
                            </LeadCTAButton>
                        </div>
                    </div>

                    {/* =================================================
                        DESKTOP
                    ================================================= */}
                    <div
                        className="
                            hidden
                            min-h-[190px]
                            items-center
                            lg:grid
                            lg:grid-cols-[minmax(0,1fr)_auto]
                            lg:gap-10
                            lg:px-12
                            lg:py-8
                            xl:gap-14
                            xl:px-14
                        "
                    >
                        {/* LEFT CONTENT */}
                        <div
                            className="
                                flex
                                min-w-0
                                items-center
                                gap-5
                            "
                        >
                            {/* Icon */}
                            <div
                                className="
                                    flex
                                    size-16
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-white
                                "
                            >
                                <GraduationCap
                                    size={32}
                                    strokeWidth={1.8}
                                    aria-hidden="true"
                                    className="text-brand-primary"
                                />
                            </div>

                            {/* Text */}
                            <div className="min-w-0">
                                <h2 className="text-white">
                                    Not sure which course fits your profile?
                                </h2>

                                <p
                                    className="
                                        mt-2
                                        max-w-2xl
                                        text-sm
                                        leading-6
                                        tracking-[-0.015em]
                                        text-white/80
                                        xl:text-[15px]
                                    "
                                >
                                    Our counsellors will analyse your
                                    academics, budget &amp; career goals to
                                    recommend the perfect programme.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT CTA */}
                        <div
                            className="
                                flex
                                shrink-0
                                items-center
                                justify-end
                            "
                        >
                            <LeadCTAButton source={source}>
                                Request Callback
                            </LeadCTAButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}