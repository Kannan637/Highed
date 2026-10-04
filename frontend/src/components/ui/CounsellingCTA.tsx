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
        <section className="mt-10 w-full" aria-label="Course Counselling Consultation">
            <div className="w-full">
                <div className="w-full overflow-hidden rounded-2xl bg-brand-primary px-5 py-7 sm:px-8 sm:py-9 lg:min-h-[160px] lg:px-12 lg:py-8 xl:px-14">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        {/* Icon & Text */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-5 min-w-0 max-w-3xl">
                            <div className="flex size-12 lg:size-14 shrink-0 items-center justify-center rounded-xl lg:rounded-2xl bg-white shadow-sm">
                                <GraduationCap
                                    size={28}
                                    strokeWidth={1.8}
                                    aria-hidden="true"
                                    className="text-brand-primary"
                                />
                            </div>

                            <div className="min-w-0">
                                <h2 className="text-white text-xl sm:text-2xl font-semibold tracking-tight">
                                    Not sure which course fits your profile?
                                </h2>

                                <p className="mt-2 max-w-2xl text-sm leading-6 tracking-[-0.015em] text-white/80 sm:text-[15px]">
                                    Our counsellors will analyse your academics, budget &amp; career goals to recommend the perfect programme.
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="shrink-0 w-full sm:w-auto">
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