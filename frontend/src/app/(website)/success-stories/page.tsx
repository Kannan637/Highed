import React from "react";
import { Quote, Star } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import CTASection from "@/components/ui/CTASection";
import { constructMetadata } from "@/seo/metadata";

export const metadata = constructMetadata({
  title: "Student Success Stories — Study Abroad Experiences",
  description:
    "Read how students from Chennai and Tamil Nadu achieved admissions and visa approvals at top universities in the USA, UK, Canada, Australia, Germany, Ireland, and Dubai.",
  path: "/success-stories",
  keywords: [
    "study abroad success stories",
    "highed student testimonials",
    "overseas education reviews chennai",
    "study abroad consultants testimonials tamil nadu",
  ],
});

const testimonials = [
  {
    name: "P. Sharma (Chennai)",
    program: "MS Computer Science",
    university: "University of Texas at Dallas",
    country: "USA",
    code: "US",
    scholarship: "$12,000 Merit Scholarship",
    rating: 5,
    text: "I was overwhelmed trying to shortlist universities for my MS CS application. HighEd's counsellors helped me narrow down 8 universities, reviewed my SOP, and even helped me negotiate a partial scholarship. I got my I-20 within 3 weeks of application!",
    avatar: "PS",
    avatarColor: "bg-brand-primary",
  },
  {
    name: "A. Mehta (Coimbatore)",
    program: "MBA — Finance",
    university: "University of Birmingham",
    country: "UK",
    code: "GB",
    scholarship: "GREAT Scholarship — £10,000",
    rating: 5,
    text: "HighEd helped me secure the GREAT Scholarship worth £10,000. My counsellor knew exactly which universities had scholarship deadlines ahead of the regular intake, and guided my application end-to-end. Visa was approved in 12 working days.",
    avatar: "AM",
    avatarColor: "bg-brand-accent",
  },
  {
    name: "D. Krishnan (Vellore)",
    program: "MEng Civil Engineering",
    university: "University of Toronto",
    country: "Canada",
    code: "CA",
    scholarship: "University Excellence Award — CA$8,000",
    rating: 5,
    text: "Getting my Canadian study permit felt impossible until I worked with HighEd. They organised all my documents, proofread my SOP, and submitted everything 6 weeks ahead of deadline. Offer letter received in 3 weeks, permit in 7!",
    avatar: "DK",
    avatarColor: "bg-feedback-success",
  },
  {
    name: "R. Nair (Chennai)",
    program: "Master of Data Science",
    university: "University of Melbourne",
    country: "Australia",
    code: "AU",
    scholarship: "University International Scholarship — AU$6,000",
    rating: 5,
    text: "I had a CGPA of 7.2 and was worried I wouldn't get into a top university. HighEd's counsellor found universities that valued industry experience over pure CGPA, and I received an offer from Melbourne within 4 weeks of applying.",
    avatar: "RN",
    avatarColor: "bg-brand-gold",
  },
  {
    name: "S. Patel (Salem)",
    program: "MSc Mechanical Engineering",
    university: "RWTH Aachen University",
    country: "Germany",
    code: "DE",
    scholarship: "DAAD Scholarship — €934/month",
    rating: 5,
    text: "Applying to Germany seemed incredibly daunting with APS certification, TestDaF, and blocked accounts. HighEd walked me through every requirement step-by-step. I now study at RWTH Aachen — tuition free — with a DAAD stipend.",
    avatar: "SP",
    avatarColor: "bg-brand-primary",
  },
  {
    name: "K. Venkatesh (Chennai)",
    program: "MSc Finance",
    university: "SP Jain School of Global Management",
    country: "Dubai",
    code: "AE",
    scholarship: "Merit Scholarship — 20% Tuition",
    rating: 5,
    text: "Dubai was not on my radar initially but HighEd showed me the tax-free salary potential and career opportunities for SP Jain. The visa process took just 10 days. Best decision for my international career!",
    avatar: "KV",
    avatarColor: "bg-brand-accent",
  },
];

const stats = [
  { value: "7", label: "Study Destinations" },
  { value: "1-on-1", label: "Personalized Mentorship" },
  { value: "End-to-End", label: "Visa & Document Guidance" },
  { value: "100%", label: "Free Consultation" },
];

export default function SuccessStoriesPage() {
  return (
    <div className="bg-surface-neutral py-16 sm:py-24 font-body">
      <Container size="lg">
        <SectionHeading
          badge="Student Reviews"
          title="Real Stories. Real Success."
          subtitle="Read how students across Tamil Nadu achieved their global education aspirations with personalized guidance from HighEd."
        />

        {/* Stats Bar */}
        <div className="mb-14 grid grid-cols-4 gap-4 rounded-2xl border border-brand-primary/15 bg-brand-primary p-8 text-white lg:grid-cols-12 shadow-md">
          {stats.map((s) => (
            <div key={s.label} className="col-span-2 lg:col-span-3 text-center">
              <div className="font-heading text-3xl sm:text-4xl font-bold text-white">{s.value}</div>
              <div className="mt-1 text-xs sm:text-sm font-medium text-white/75">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-4 gap-6 lg:grid-cols-12 lg:gap-8">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              hover
              className="col-span-4 sm:col-span-2 lg:col-span-4 flex flex-col justify-between p-7 rounded-2xl border-border bg-card shadow-xs transition-all duration-300 hover:shadow-md hover:border-brand-primary/20"
            >
              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={15} className="fill-brand-gold text-brand-gold" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote size={22} className="mb-2 text-brand-accent/40" />
                  <p className="text-sm leading-relaxed text-content-secondary">{t.text}</p>
                </div>
              </div>

              <div>
                {/* Divider */}
                <div className="my-5 border-t border-border" />

                {/* Student Info */}
                <div className="flex items-start gap-3.5">
                  <div
                    className={`flex size-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-xs ${t.avatarColor}`}
                  >
                    {t.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-content-primary">{t.name}</p>
                      <ReactCountryFlag
                        countryCode={t.code}
                        svg
                        style={{ width: "16px", height: "16px", borderRadius: "50%", objectFit: "cover" }}
                      />
                    </div>
                    <p className="text-xs text-content-secondary truncate">{t.program}</p>
                    <p className="text-xs font-semibold text-brand-primary truncate">{t.university}</p>
                    {t.scholarship && (
                      <Badge variant="success" className="mt-1.5 text-xs">
                        {t.scholarship}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16">
          <CTASection
            badge="Begin Your Study Abroad Journey"
            title="Your Success Story Starts Here"
            subtitle="Book a free counselling session and let our advisors craft the same winning strategy for your study-abroad journey."
            ctaLabel="Book Free Counselling"
            ctaSource="success_stories_cta"
          />
        </div>
      </Container>
    </div>
  );
}