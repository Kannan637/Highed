import React from "react";
import { ArrowRight, Quote, ShieldCheck, Star } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import { constructMetadata } from "@/seo/metadata";

export const metadata = constructMetadata({
  title: "Student Success Stories — Study Abroad Testimonials",
  description:
    "Read real success stories from HighEd students who secured admissions at top universities in the USA, UK, Canada, Australia, Germany, and Dubai with full scholarships and visa approvals.",
  path: "/success-stories",
  keywords: [
    "study abroad success stories",
    "highed student testimonials",
    "overseas education reviews",
    "study abroad consultants testimonials india",
  ],
});

const testimonials = [
  {
    name: "Priya Sharma",
    program: "MS Computer Science",
    university: "University of Texas at Dallas",
    country: "USA",
    code: "US",
    scholarship: "$12,000 Merit Scholarship",
    rating: 5,
    text: "I was overwhelmed trying to shortlist universities for my MS CS application. HighEd's counsellors helped me narrow down 8 universities, reviewed my SOP, and even helped me negotiate a partial scholarship. I got my I-20 within 3 weeks of application!",
    avatar: "PS",
    color: "#EEF1FA",
  },
  {
    name: "Arjun Mehta",
    program: "MBA — Finance",
    university: "University of Birmingham",
    country: "UK",
    code: "GB",
    scholarship: "GREAT Scholarship — £10,000",
    rating: 5,
    text: "HighEd helped me secure the GREAT Scholarship worth £10,000. My counsellor knew exactly which universities had scholarship deadlines ahead of the regular intake, and guided my application end-to-end. Visa was approved in 12 working days.",
    avatar: "AM",
    color: "#FDF0F3",
  },
  {
    name: "Deepa Krishnan",
    program: "MEng Civil Engineering",
    university: "University of Toronto",
    country: "Canada",
    code: "CA",
    scholarship: "University Excellence Award — CA$8,000",
    rating: 5,
    text: "Getting my Canadian study permit felt impossible until I worked with HighEd. They organised all my documents, proofread my SOP, and submitted everything 6 weeks ahead of deadline. Offer letter received in 3 weeks, permit in 7!",
    avatar: "DK",
    color: "#EBF5EE",
  },
  {
    name: "Rahul Nair",
    program: "Master of Data Science",
    university: "University of Melbourne",
    country: "Australia",
    code: "AU",
    scholarship: "University International Scholarship — AU$6,000",
    rating: 5,
    text: "I had a CGPA of 7.2 and was worried I wouldn't get into a top university. HighEd's counsellor found universities that valued industry experience over pure CGPA, and I received an offer from Melbourne within 4 weeks of applying.",
    avatar: "RN",
    color: "#FEF9EC",
  },
  {
    name: "Sneha Patel",
    program: "MSc Mechanical Engineering",
    university: "RWTH Aachen University",
    country: "Germany",
    code: "DE",
    scholarship: "DAAD Scholarship — €934/month",
    rating: 5,
    text: "Applying to Germany seemed incredibly daunting with APS certification, TestDaF, and blocked accounts. HighEd walked me through every requirement step-by-step. I now study at RWTH Aachen — tuition free — with a DAAD stipend.",
    avatar: "SP",
    color: "#EEF1FA",
  },
  {
    name: "Karthik Venkatesh",
    program: "MSc Finance",
    university: "SP Jain School of Global Management",
    country: "Dubai",
    code: "AE",
    scholarship: "Merit Scholarship — 20% Tuition",
    rating: 5,
    text: "Dubai was not on my radar initially but HighEd showed me the tax-free salary potential and 100% campus placements data for SP Jain. The visa process took just 10 days. Best decision of my life!",
    avatar: "KV",
    color: "#FDF0F3",
  },
];

const stats = [
  { value: "10,000+", label: "Students Counselled" },
  { value: "98%+", label: "Visa Success Rate" },
  { value: "500+", label: "University Partners" },
  { value: "100%", label: "Free of Charge" },
];

export default function SuccessStoriesPage() {
  return (
    <div className="bg-[#FAFAFC] py-16 sm:py-24 font-dmsans">
      <Container size="lg">
        <SectionHeading
          badge="Student Reviews"
          title="Real Stories. Real Success."
          subtitle="Over 10,000 students have trusted HighEd with their study-abroad journey. Here are a few of their stories."
        />

        {/* Stats Bar */}
        <div className="mb-14 grid grid-cols-2 gap-4 rounded-2xl border border-[#253A7B]/15 bg-[#253A7B] p-6 text-white sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-hedvig text-3xl font-bold text-white sm:text-4xl">{s.value}</div>
              <div className="mt-1 font-dmsans text-xs font-medium text-white/70">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-3xl border border-gray-100 bg-white p-7 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[#253A7B]/20 hover:shadow-lg"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[#D6B66A] text-[#D6B66A]" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative flex-1">
                <Quote size={20} className="mb-2 text-[#E93F61]/30" />
                <p className="font-dmsans text-sm leading-relaxed text-gray-700">{t.text}</p>
              </div>

              {/* Divider */}
              <div className="my-5 border-t border-gray-100" />

              {/* Student Info */}
              <div className="flex items-start gap-3.5">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-dmsans text-sm font-bold text-white"
                  style={{ backgroundColor: t.code === "US" ? "#253A7B" : t.code === "GB" ? "#E93F61" : t.code === "CA" ? "#1E7B47" : t.code === "AU" ? "#B38728" : t.code === "DE" ? "#253A7B" : "#6B3FA0" }}
                >
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-dmsans text-sm font-bold text-[#121314]">{t.name}</p>
                    <ReactCountryFlag
                      countryCode={t.code}
                      svg
                      style={{ width: "16px", height: "16px", borderRadius: "50%", objectFit: "cover" }}
                    />
                  </div>
                  <p className="font-dmsans text-xs text-gray-500 truncate">{t.program}</p>
                  <p className="font-dmsans text-xs font-semibold text-[#253A7B] truncate">{t.university}</p>
                  {t.scholarship && (
                    <span className="mt-1.5 inline-block rounded-full bg-[#EBF5EE] px-2.5 py-0.5 font-dmsans text-[11px] font-semibold text-[#1E7B47]">
                      {t.scholarship}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-center gap-5 rounded-3xl bg-[linear-gradient(135deg,#253A7B,#142456)] px-8 py-14 text-center text-white sm:px-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 font-dmsans text-xs font-semibold tracking-wide text-white backdrop-blur-xs">
            <ShieldCheck size={14} className="text-[#E93F61]" />
            Join 10,000+ Successful Students
          </span>
          <h2 className="font-hedvig text-3xl font-bold tracking-tight sm:text-4xl">
            Your Success Story Starts Here
          </h2>
          <p className="max-w-xl font-dmsans text-base text-white/85">
            Book a free counselling session and let our advisors craft the same winning strategy for your study-abroad journey.
          </p>
          <LeadCTAButton
            source="success_stories_cta"
            className="inline-flex h-12 items-center gap-2.5 rounded-full bg-[#E93F61] px-8 font-dmsans text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-[#d93657] active:scale-[0.98] cursor-pointer"
          >
            <span>Book Free Counselling</span>
            <ArrowRight size={18} />
          </LeadCTAButton>
        </div>
      </Container>
    </div>
  );
}
