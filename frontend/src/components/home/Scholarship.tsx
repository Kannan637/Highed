import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

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
        tracking-[-0.04em]
        [letter-spacing:-0.04em]
        [&_*]:[letter-spacing:-0.04em]
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
                    {/* DESKTOP LAYOUT (12-Column Grid: 4 + 4 + 4) */}
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
                            <div className="relative z-10 h-[460px] w-full max-w-[345px] overflow-hidden rounded-3xl bg-surface-neutral shadow-sm">
                                <Image
                                    src="/images/Scholarship/ChatGPT Image Sep 14, 2026, 12_34_47 PM.webp"
                                    alt="Student studying abroad"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 345px"
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

                    {/* MOBILE LAYOUT (4-Column Grid) */}
                    <div className="grid grid-cols-4 gap-4 lg:hidden">
                        {/* Image */}
                        <div className="col-span-4 flex justify-center">
                            <div className="relative h-[380px] sm:h-[430px] w-full max-w-[345px] overflow-hidden rounded-3xl bg-surface-neutral shadow-sm">
                                <Image
                                    src="/images/Scholarship/ChatGPT Image Sep 14, 2026, 12_34_47 PM.webp"
                                    alt="Student studying abroad"
                                    fill
                                    sizes="(max-width: 1024px) 345px, 100vw"
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
                                    className="col-span-4 sm:col-span-2 flex min-h-12 items-center justify-center rounded-full border border-border bg-surface-neutral px-5 py-2.5 text-center text-sm font-medium text-content-primary"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA BUTTONS */}
                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <LeadCTAButton
                        source="scholarship_counselling"
                        variant="accent"
                        size="default"
                        iconBadge={<Phone size={18} strokeWidth={2} />}
                    >
                        Book Free Counselling
                    </LeadCTAButton>

                    <LeadCTAButton
                        source="explore_scholarships"
                        variant="outline"
                        size="default"
                    >
                        <span>Explore Scholarships</span>
                        <ArrowRight size={18} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </LeadCTAButton>
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
            bg-border-default
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
            bg-border-default
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
          bg-surface-neutral
          px-4
          text-body-small
          font-medium
          text-content-primary
          shadow-[0_2px_8px_rgba(18,19,20,0.02)]
          border
          border-border-default
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