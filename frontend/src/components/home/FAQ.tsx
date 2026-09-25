"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

const faqs = [
    {
        question: "How much does it cost to study abroad from Tamil Nadu?",
        answer:
            "The total cost depends on your destination, university, course and lifestyle. Our counsellors help you compare tuition fees, living expenses, scholarships and education loan options before you apply.",
    },
    {
        question: "Which country is best for Tamil Nadu students?",
        answer:
            "Popular destinations include the UK, USA, Canada, Australia, Ireland and New Zealand. The best country depends on your academic profile, budget, preferred course and long-term career goals.",
    },
    {
        question: "Can I study abroad without IELTS?",
        answer:
            "Yes. Some universities accept alternatives such as PTE, TOEFL, Duolingo English Test or proof of previous education in English. Requirements vary by university and programme.",
    },
    {
        question: "How long does the visa process take?",
        answer:
            "Visa processing times vary by country, intake and application period. Starting your documentation early helps reduce delays and gives you enough time to handle additional requirements.",
    },
    {
        question: "What is the minimum budget required?",
        answer:
            "Your minimum budget depends on the destination and programme. Scholarships, education loans and financial planning can significantly reduce the amount you need to fund directly.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex((current) => (current === index ? null : index));
    };

    return (
        <section className="w-full bg-white py-14 sm:py-18 md:py-20 text-content-primary tracking-[-0.04em] [letter-spacing:-0.04em] [&_*]:[letter-spacing:-0.04em]">
            <Container size="lg">
                <div className="grid grid-cols-4 lg:grid-cols-12 gap-8">
                    <div className="col-span-4 lg:col-span-8 lg:col-start-3">
                        {/* HEADER */}
                        <SectionHeading
                            eyebrow="FAQ"
                            title="Frequently Asked Questions – Study Abroad from Tamil Nadu"
                            className="mb-10 sm:mb-12"
                        />

                        {/* FAQ ACCORDION */}
                        <div className="divide-y divide-border">
                            {faqs.map((faq, index) => {
                                const isOpen = openIndex === index;

                                return (
                                    <div key={faq.question} className="border-b border-border">
                                        {/* Question Trigger - 48px min touch target */}
                                        <button
                                            id={`faq-btn-${index}`}
                                            type="button"
                                            onClick={() => toggleFAQ(index)}
                                            aria-expanded={isOpen}
                                            aria-controls={`faq-answer-${index}`}
                                            className="group flex min-h-14 w-full cursor-pointer items-center justify-between gap-5 py-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                                        >
                                            <span
                                                className={`text-base sm:text-lg font-medium transition-colors ${
                                                    isOpen
                                                        ? "text-brand-primary font-semibold"
                                                        : "text-content-primary group-hover:text-brand-primary"
                                                }`}
                                            >
                                                {faq.question}
                                            </span>

                                            {/* Chevron Toggle Icon */}
                                            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white shadow-2xs transition-transform duration-300 group-hover:scale-105">
                                                <ChevronDown
                                                    size={18}
                                                    strokeWidth={2.5}
                                                    aria-hidden="true"
                                                    className={`transition-transform duration-300 ${
                                                        isOpen ? "rotate-180" : "rotate-0"
                                                    }`}
                                                />
                                            </span>
                                        </button>

                                        {/* Answer Content */}
                                        <div
                                            id={`faq-answer-${index}`}
                                            role="region"
                                            aria-labelledby={`faq-btn-${index}`}
                                            className={`grid transition-all duration-300 ease-in-out ${
                                                isOpen
                                                    ? "grid-rows-[1fr] opacity-100 pb-5"
                                                    : "grid-rows-[0fr] opacity-0 pb-0"
                                            }`}
                                        >
                                            <div className="overflow-hidden">
                                                <p className="max-w-2xl pr-8 text-sm sm:text-base leading-relaxed text-content-secondary">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* BOTTOM CTA */}
                        <div className="mt-12 flex justify-center">
                            <LeadCTAButton
                                source="faq_cta"
                                variant="accent"
                                size="default"
                                iconBadge={<ArrowRight size={18} strokeWidth={2.2} />}
                            >
                                Still have questions? Let&apos;s talk
                            </LeadCTAButton>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}