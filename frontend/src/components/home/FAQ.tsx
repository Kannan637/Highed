"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useLeadPopup } from "@/hooks/useLeadPopup";
import Container from "@/components/ui/Container";

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
    const { openLeadPopup } = useLeadPopup();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex((current) => (current === index ? null : index));
    };

    return (
        <section
            className="
        w-full
        bg-white
        py-16
        text-[#121314]
        sm:py-20
        lg:py-[80px]
      "
        >
            <Container size="lg">
                <div className="grid grid-cols-4 lg:grid-cols-12 gap-8">
                    <div className="col-span-4 lg:col-span-8 lg:col-start-3">
                {/* =====================================================
            HEADER
        ====================================================== */}

                <header className="text-center">
                    {/* Eyebrow */}
                    <div className="mb-7 flex items-center justify-center gap-2">
                        <span className="h-[7px] w-[7px] rounded-full bg-[#253A7B]" />

                        <span className="text-[14px] font-medium text-[#253A7B] sm:text-[15px]">
                            FAQ
                        </span>
                    </div>

                    {/* Heading */}
                    <h2
                        className="
              mx-auto
              text-[38px]
              font-normal
              leading-[1.02]
              tracking-[-1.7px]
              text-[#121314]
              sm:text-[45px]
              lg:text-[47px]
            "
                    >
                        Frequently Asked Questions –
                        <br className="hidden sm:block" />
                        Study Abroad from Tamil Nadu
                    </h2>
                </header>

                {/* =====================================================
            FAQ ACCORDION
        ====================================================== */}

                <div className="mt-12 sm:mt-14">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={faq.question}
                                className="
                  border-b
                  border-[#eeeeee]
                "
                            >
                                {/* Question */}

                                <button
                                    type="button"
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={isOpen}
                                    className="
                    group
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-5
                    py-[15px]
                    text-left
                  "
                                >
                                    <span
                                        className={`
                      text-[16px]
                      font-normal
                      leading-[1.4]
                      tracking-[-0.2px]
                      transition-colors
                      sm:text-[17px]
                      ${isOpen
                                                ? "text-[#253A7B]"
                                                : "text-[#121314] group-hover:text-[#253A7B]"
                                            }
                    `}
                                    >
                                        {faq.question}
                                    </span>

                                    {/* Arrow */}

                                    <span
                                        className="
                      flex
                      h-[26px]
                      w-[26px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#253A7B]
                      text-white
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                                    >
                                        <ChevronDown
                                            size={17}
                                            strokeWidth={2.5}
                                            className={`
                        transition-transform
                        duration-300
                        ${isOpen ? "rotate-180" : "rotate-0"}
                      `}
                                        />
                                    </span>
                                </button>

                                {/* =================================================
                    ANSWER
                ================================================== */}

                                <div
                                    className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out
                    ${isOpen
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                        }
                  `}
                                >
                                    <div className="overflow-hidden">
                                        <p
                                            className="
                        max-w-[640px]
                        pb-5
                        pr-10
                        text-[14px]
                        leading-[1.65]
                        text-[#121314]/65
                        sm:text-[15px]
                      "
                                        >
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* =====================================================
                    BOTTOM CTA
                ====================================================== */}
                <div className="mt-12 flex justify-center">
                    <button
                        type="button"
                        onClick={() => openLeadPopup({ source: "faq_cta" })}
                        className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#E93F61]
              px-6
              py-3
              text-[15px]
              font-medium
              text-white
              transition-all
              duration-200
              hover:bg-[#d93657]
            "
                    >
                        <span>Still have questions? Let's talk</span>
                        <ArrowRight
                            size={18}
                            strokeWidth={2.2}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                    </button>
                </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}