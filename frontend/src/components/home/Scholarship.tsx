
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import Link from "next/link";

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
    return (
        <section
            className="
        w-full
        overflow-hidden
        bg-white
        py-16
        text-content-primary
        tracking-tight-5
        [letter-spacing:var(--tracking-tight-5)]
        [&_*]:[letter-spacing:var(--tracking-tight-5)]
        sm:py-20
        lg:py-[72px]
      "
        >
            <Container size="lg">
                {/* HEADER */}
                <SectionHeading
                    eyebrow="Scholarships & Loans"
                    title="Scholarships & Education Loan Assistance in Tamil Nadu"
                    className="mb-10 sm:mb-12"
                />

                {/* SCHOLARSHIP VISUAL */}
                <div className="mt-8 lg:mt-12">
                    {/* DESKTOP */}
                    <div className="hidden items-center lg:grid lg:grid-cols-12 lg:gap-8">
                        {/* LEFT ITEMS */}
                        <div className="col-span-4 flex h-[460px] flex-col justify-around py-6">
                            {scholarshipItems.left.map((item) => (
                                <ScholarshipLabel
                                    key={item}
                                    text={item}
                                    side="left"
                                />
                            ))}
                        </div>

                        {/* CENTER IMAGE */}
                        <div className="col-span-4 flex justify-center">
                            <div className="relative z-10 h-[460px] w-full max-w-[345px] overflow-hidden rounded-3xl bg-surface-neutral">
                                <Image
                                    src="/images/Scholarship/ChatGPT Image Sep 14, 2026, 12_34_47 PM.webp"
                                    alt="Student studying abroad"
                                    fill
                                    sizes="345px"
                                    className="object-cover"
                                    priority={false}
                                />
                            </div>
                        </div>

                        {/* RIGHT ITEMS */}
                        <div className="col-span-4 flex h-[460px] flex-col justify-around py-6">
                            {scholarshipItems.right.map((item) => (
                                <ScholarshipLabel
                                    key={item}
                                    text={item}
                                    side="right"
                                />
                            ))}
                        </div>
                    </div>

                    {/* MOBILE */}
                    <div className="grid grid-cols-4 gap-4 lg:hidden">
                        {/* IMAGE */}
                        <div className="col-span-4 flex justify-center">
                            <div className="relative h-[380px] w-full max-w-[345px] overflow-hidden rounded-3xl bg-surface-neutral sm:h-[430px]">
                                <Image
                                    src="/images/Scholarship/ChatGPT Image Sep 14, 2026, 12_34_47 PM.webp"
                                    alt="Student studying abroad"
                                    fill
                                    sizes="(max-width: 639px) 100vw, 345px"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* MOBILE LABELS */}
                        <div className="col-span-4 mt-4 grid grid-cols-4 gap-3">
                            {[
                                ...scholarshipItems.left,
                                ...scholarshipItems.right,
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="
                    col-span-4
                    flex
                    min-h-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-border
                    bg-surface-neutral
                    px-5
                    py-2.5
                    text-center
                    text-sm
                    font-medium
                    text-content-primary
                    sm:col-span-2
                  "
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA BUTTONS */}
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row">
                    <LeadCTAButton source="scholarship_counselling">
                        Book Free Counselling
                    </LeadCTAButton>

                    <Link
                        href="/scholarships"
                        className="group inline-flex h-12 cursor-pointer items-center gap-2 rounded-full px-6 text-sm font-semibold text-brand-accent transition-all hover:bg-brand-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                    >
                        <span>Explore Scholarships</span>

                        <ArrowRight
                            size={18}
                            strokeWidth={2.2}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                    </Link>
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
            {/* CONNECTING LINE */}
            <span
                aria-hidden="true"
                className={`
          absolute
          h-px
          w-[48px]
          bg-border-default
          xl:w-[72px]
          ${side === "left" ? "right-0" : "left-0"}
        `}
            />

            {/* LABEL */}
            <div
                className={`
          relative
          z-10
          flex
          min-h-[44px]
          max-w-full
          items-center
          rounded-full
          border
          border-border-default
          bg-surface-neutral
          px-4
          text-body-small
          font-medium
          text-content-primary
          ${side === "left"
                        ? "mr-[40px] xl:mr-[60px]"
                        : "ml-[40px] xl:ml-[60px]"
                    }
        `}
            >
                <span className="whitespace-nowrap">{text}</span>
            </div>
        </div>
    );
}