"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import EyebrowBadge from "@/components/ui/EyebrowBadge";

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
    <section
      className="
        w-full
        bg-white
        py-12
        text-content-primary
        sm:py-16
        lg:py-20
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
              <EyebrowBadge>FAQ</EyebrowBadge>

              {/* Heading */}
              <h2 className="mx-auto text-content-primary">
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
                  border-border-default
                "
                  >
                    {/* Question */}

                    <button
                      id={`country-faq-btn-${index}`}
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      aria-controls={`country-faq-answer-${index}`}
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
                      text-body
                      font-medium
                      transition-colors
                      ${isOpen
                            ? "text-brand-primary"
                            : "text-content-primary group-hover:text-brand-primary"
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
                      bg-brand-primary
                      text-white
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                      >
                        <ChevronDown
                          size={17}
                          strokeWidth={2.5}
                          aria-hidden="true"
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
                      id={`country-faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`country-faq-btn-${index}`}
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
                        text-body
                        text-content-secondary
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
              <LeadCTAButton
                source="country_faq_cta"
              >
                Book Free Counselling
              </LeadCTAButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}