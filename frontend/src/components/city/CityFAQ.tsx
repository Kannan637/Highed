import React from "react";
import { HelpCircle, MessageSquare } from "lucide-react";
import { CityData } from "@/types/city";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import LeadCTAButton from "@/components/forms/LeadCTAButton";

interface CityFAQProps {
  city: CityData;
}

export const CityFAQ: React.FC<CityFAQProps> = ({ city }) => {
  const accordionItems = city.faqs.map((faq, index) => ({
    id: `city-faq-${index}`,
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <section id="faq" className="bg-neutral-50/70 py-20 border-t border-neutral-200/60">
      <Container size="md">
        <SectionHeading
          badge="Frequently Asked Questions"
          title={`Got Questions About Studying Abroad from ${city.name}?`}
          subtitle={`Everything you need to know regarding local transcript evaluation, zero consultation charges, university admissions, and visa procedures.`}
          align="center"
        />

        <div className="mt-10 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs">
          <Accordion items={accordionItems} />
        </div>

        {/* Still have questions prompt */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-card border border-border p-5 md:p-6 shadow-xs">
          <div className="flex items-center gap-3.5">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-brand-primary">
              <HelpCircle size={22} />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Still have questions regarding studying abroad from {city.name}?
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Our certified educational advisors provide instant 1-on-1 clarity.
              </p>
            </div>
          </div>

          <LeadCTAButton
            source={`city_faq_help_${city.slug}`}
            contextTitle={`FAQ Assistance for ${city.name}`}
            contextCTA="Talk to an Advisor"
            size="default"
            className="h-11 sm:h-12 px-6 rounded-full text-xs sm:text-sm font-semibold inline-flex items-center gap-2 shrink-0 shadow-sm"
          >
            <MessageSquare size={16} />
            <span>Ask an Advisor</span>
          </LeadCTAButton>
        </div>
      </Container>
    </section>
  );
};

export default CityFAQ;
