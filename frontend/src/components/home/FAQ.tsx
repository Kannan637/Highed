"use client";

import React, { useState } from "react";
import {
    Plus,
    Minus,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

export interface FAQItem {
    question: string;
    answer: string;
}

export interface FAQCategory {
    id: string;
    label: string;
    icon?: React.ReactNode;
    items: FAQItem[];
}

export interface FAQSectionProps {
    badge?: string;
    title?: string;
    subtitle?: string;
    categories?: FAQCategory[];
    contactLabel?: string;
    contactEmail?: string;
}

const defaultCategories: FAQCategory[] = [
    {
        id: "general",
        label: "General",
        items: [
            {
                question:
                    "How much does it cost to study abroad from Tamil Nadu?",
                answer:
                    "The total cost depends on your destination, university, course, and lifestyle. HighEd counsellors help you compare tuition fees, living expenses, scholarships, and education loan options before you apply.",
            },
            {
                question:
                    "Which country is best for Tamil Nadu students?",
                answer:
                    "Popular destinations include the UK, USA, Canada, Australia, Ireland, and New Zealand. The ideal country depends on your academic profile, budget, preferred programme, and post-study career goals.",
            },
            {
                question:
                    "What is the minimum budget required to study abroad?",
                answer:
                    "Minimum budget varies widely: select European public universities offer low tuition, while programmes in the UK, USA, and Australia typically range from ₹15L to ₹35L per year. Scholarships and loans can fund up to 100% of these expenses.",
            },
        ],
    },
    {
        id: "admissions",
        label: "Admissions & Exams",
        items: [
            {
                question: "Can I study abroad without IELTS?",
                answer:
                    "Yes. Many universities in the UK, USA, Europe, and Ireland accept alternative tests like PTE, TOEFL, Duolingo English Test (DET), or Medium of Instruction (MOI) certificates from your previous college.",
            },
            {
                question:
                    "Can I apply if I have academic backlogs or study gaps?",
                answer:
                    "Yes. Several reputed global universities accept applicants with cleared backlogs or career gaps, provided you have genuine work experience, strong SOPs, or valid justification.",
            },
            {
                question:
                    "When should I begin my study abroad application?",
                answer:
                    "We recommend starting 8 to 12 months before your target intake (e.g., September Fall or January Spring) to allow ample time for exam prep, university offers, and visa processing.",
            },
        ],
    },
    {
        id: "visa",
        label: "Visa & Process",
        items: [
            {
                question: "How long does the student visa process take?",
                answer:
                    "Student visa decisions typically take 2 to 6 weeks depending on the country. HighEd offers end-to-end documentation auditing and mock interview coaching to maintain our 98%+ visa success rate.",
            },
            {
                question:
                    "What documents are required for a student visa?",
                answer:
                    "Key documents include your University Confirmation (CAS/I-20/eCoE), valid passport, academic transcripts, financial proof (bank balance/loan sanction), Statement of Purpose, and required medical tests.",
            },
            {
                question:
                    "Does HighEd help with visa interview preparation?",
                answer:
                    "Yes, our senior visa specialists conduct 1-on-1 mock interview sessions tailored to US F-1 visas, German embassy interviews, and UK credibility interviews.",
            },
        ],
    },
    {
        id: "finance",
        label: "Scholarships & Loans",
        items: [
            {
                question:
                    "Are 100% scholarships available for Indian students?",
                answer:
                    "Full-ride and partial scholarships are offered by universities and government bodies (e.g., Chevening, Fulbright, Commonwealth, Erasmus+). We help you identify and craft winning applications for relevant grants.",
            },
            {
                question:
                    "Can I get an education loan without collateral?",
                answer:
                    "Yes. We partner with leading public and private banks as well as NBFCs to offer non-collateral education loans up to ₹50 Lakhs for eligible students with a co-borrower.",
            },
            {
                question:
                    "Can I work part-time while studying abroad?",
                answer:
                    "Yes. Most destinations (UK, Australia, Canada, Ireland, New Zealand) permit international students to work up to 20 hours per week during term time and full-time during vacations.",
            },
        ],
    },
];

interface CategoryTabProps {
    category: FAQCategory;
    isActive: boolean;
    onClick: () => void;
}

function CategoryTab({
    category,
    isActive,
    onClick,
}: CategoryTabProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-medium whitespace-nowrap cursor-pointer transition-all duration-200 sm:text-sm ${isActive
                ? "bg-[#E93F61] text-white shadow-sm"
                : "text-content-secondary hover:bg-[#E93F61]/10 hover:text-[#E93F61]"
                }`}
        >
            <span>{category.label}</span>
        </button>
    );
}

export function FAQSection({
    badge = "Need Help?",
    title = "Frequently Asked Questions",
    subtitle = "Find clear answers to common questions about studying abroad, admissions, visas, costs, and career opportunities.",
    categories = defaultCategories,
}: FAQSectionProps) {
    const activeCategoryList =
        categories.length > 0 ? categories : defaultCategories;

    const [activeCategoryId, setActiveCategoryId] = useState<string>(
        activeCategoryList[0]?.id ?? "general"
    );

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const currentCategory =
        activeCategoryList.find(
            (category) => category.id === activeCategoryId
        ) ?? activeCategoryList[0];

    const currentItems = currentCategory?.items ?? [];

    const handleCategoryChange = (id: string) => {
        setActiveCategoryId(id);
        setOpenIndex(0);
    };

    const toggleItem = (index: number) => {
        setOpenIndex((prev) =>
            prev === index ? null : index
        );
    };

    return (
        <section className="w-full bg-background py-16 tracking-tight-5 [letter-spacing:var(--tracking-tight-5)] sm:py-20 [&_*]:[letter-spacing:var(--tracking-tight-5)]">
            <Container size="lg">

                {/* HEADER */}
                <SectionHeading
                    badge={badge}
                    title={title}
                    description={subtitle}
                    align="center"
                />

                {/* CATEGORY PILLS NAVIGATION */}
                <div className="mx-auto mb-10 w-full max-w-2xl">
                    <div className="mx-auto flex w-fit max-w-full items-center gap-1.5 overflow-x-auto rounded-full border border-border/80 bg-muted/40 p-1.5 shadow-2xs scrollbar-none">
                        {activeCategoryList.map((category) => (
                            <CategoryTab
                                key={category.id}
                                category={category}
                                isActive={
                                    activeCategoryId === category.id
                                }
                                onClick={() =>
                                    handleCategoryChange(category.id)
                                }
                            />
                        ))}
                    </div>
                </div>

                {/* ACCORDION LIST */}
                <div className="mx-auto flex w-full max-w-2xl flex-col gap-3">
                    {currentItems.map((item, index) => {
                        const isOpen = openIndex === index;
                        const itemId = `faq-${activeCategoryId}-${index}`;

                        return (
                            <div
                                key={itemId}
                                className="overflow-hidden rounded-2xl border border-border/80 bg-surface-subtle/50 shadow-2xs transition-all duration-200 hover:border-black/15 hover:bg-surface-subtle"
                            >
                                {/* QUESTION */}
                                <button
                                    type="button"
                                    id={`trigger-${itemId}`}
                                    aria-expanded={isOpen}
                                    aria-controls={`content-${itemId}`}
                                    onClick={() =>
                                        toggleItem(index)
                                    }
                                    className="group flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                                >
                                    <span
                                        className={`text-sm font-medium transition-colors sm:text-base ${isOpen
                                            ? "font-semibold text-brand-primary"
                                            : "text-content-primary group-hover:text-brand-primary"
                                            }`}
                                    >
                                        {item.question}
                                    </span>

                                    {/* ACCORDION ICON */}
                                    <span
                                        className={`flex size-7 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${isOpen
                                            ? "bg-brand-primary text-white"
                                            : "bg-neutral-200/80 text-content-primary group-hover:bg-neutral-300"
                                            }`}
                                    >
                                        {isOpen ? (
                                            <Minus
                                                size={14}
                                                strokeWidth={2.2}
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <Plus
                                                size={14}
                                                strokeWidth={2.2}
                                                aria-hidden="true"
                                            />
                                        )}
                                    </span>
                                </button>

                                {/* ANSWER */}
                                <div
                                    id={`content-${itemId}`}
                                    role="region"
                                    aria-labelledby={`trigger-${itemId}`}
                                    className={`grid transition-all duration-200 ease-in-out ${isOpen
                                        ? "grid-rows-[1fr] px-5 pb-5 pt-0 opacity-100"
                                        : "grid-rows-[0fr] px-5 pb-0 pt-0 opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-sm leading-relaxed text-content-secondary sm:text-base">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* BOTTOM CTA */}
                <div className="mt-12 flex justify-center">
                    <LeadCTAButton source="faq">
                        Ask Expert - Request Callback
                    </LeadCTAButton>
                </div>
            </Container>
        </section>
    );
}

export const FAQ2 = FAQSection;

export default FAQSection;