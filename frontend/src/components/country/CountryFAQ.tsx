import React from "react";
import { HelpCircle, MessageSquare } from "lucide-react";
import { Country } from "@/types/country";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

interface CountryFAQProps {
  country: Country;
}

export const CountryFAQ: React.FC<CountryFAQProps> = ({ country }) => {
  const accordionItems = country.faqs.map((faq, index) => ({
    id: `faq-${index}`,
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <section id="faq" className="bg-neutral-50/70 py-20 border-t border-neutral-200/60">
      <Container size="md">
        <SectionHeading
          badge="Frequently Asked Questions"
          title={`Got Questions About Studying in ${country.name}?`}
          subtitle={`Everything you need to know regarding university requirements, visas, costs, and career paths.`}
        />

        <div className="mt-10 rounded-2xl border border-neutral-200/80 bg-white p-6 md:p-8 shadow-xs">
          <Accordion items={accordionItems} />
        </div>

        {/* Still have questions prompt */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-white border border-neutral-200/80 p-5 md:p-6 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#253A7B]">
              <HelpCircle size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-neutral-900">Still have questions about {country.name}?</p>
              <p className="text-xs text-neutral-500">Our study abroad experts are here to give you 1-on-1 personalized answers.</p>
            </div>
          </div>

          <LeadCTAButton
            source={`country_faq_help_${country.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-[#253A7B] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#1b2b5c] transition-all cursor-pointer shrink-0"
          >
            <MessageSquare size={14} />
            <span>Ask an Advisor</span>
          </LeadCTAButton>
        </div>
      </Container>
    </section>
  );
};

export default CountryFAQ;
