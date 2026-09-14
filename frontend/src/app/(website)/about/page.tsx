import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, Globe2, Building2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import { constructMetadata } from "@/seo/metadata";

export const metadata = constructMetadata({
  title: "About Us — Official Global University Representative",
  description:
    "Learn about HighEd, our mission, certified counsellors, and partnerships with 500+ global universities across USA, UK, Canada, Australia, Germany, and Dubai.",
  path: "/about",
  keywords: ["about high education", "study abroad consultants", "overseas education agency"],
});

export default function AboutPage() {
  return (
    <div className="bg-[#FAFAFC] py-16 sm:py-24 font-dmsans">
      <Container size="lg">
        {/* Hero Section */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF1FA] px-4 py-1.5 text-xs font-semibold text-[#253A7B]">
            <ShieldCheck size={16} />
            <span>Official University Representative</span>
          </span>

          <h1 className="mt-4 font-hedvig text-4xl font-bold tracking-tight text-[#121314] sm:text-5xl lg:text-6xl">
            Empowering Ambitious Minds to Study Globally
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 sm:text-xl">
            HighEd is an international education advisory firm representing over 500 accredited universities. We provide transparent, end-to-end guidance from profile evaluation to post-study work visas.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <LeadCTAButton
              source="about_hero"
              className="inline-flex h-12 items-center gap-2.5 rounded-full bg-[#E93F61] px-8 text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#D93657] active:scale-[0.98] cursor-pointer"
            >
              <span>Book Free Consultation</span>
              <ArrowRight size={18} />
            </LeadCTAButton>
            <Link
              href="/study-in"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-gray-200 bg-white px-7 text-base font-semibold text-[#121314] shadow-xs transition-all duration-200 hover:border-gray-300 hover:bg-gray-50"
            >
              Explore Destinations
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-4 gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-6">
          <div className="col-span-2 lg:col-span-3 rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-xs">
            <div className="font-hedvig text-4xl font-bold text-[#253A7B]">500+</div>
            <div className="mt-2 text-sm text-gray-500">Partner Universities</div>
          </div>
          <div className="col-span-2 lg:col-span-3 rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-xs">
            <div className="font-hedvig text-4xl font-bold text-[#E93F61]">10,000+</div>
            <div className="mt-2 text-sm text-gray-500">Students Counselled</div>
          </div>
          <div className="col-span-2 lg:col-span-3 rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-xs">
            <div className="font-hedvig text-4xl font-bold text-[#1E7B47]">98.6%</div>
            <div className="mt-2 text-sm text-gray-500">Visa Success Rate</div>
          </div>
          <div className="col-span-2 lg:col-span-3 rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-xs">
            <div className="font-hedvig text-4xl font-bold text-[#253A7B]">100%</div>
            <div className="mt-2 text-sm text-gray-500">Free Counselling</div>
          </div>
        </div>

        {/* Why Choose HighEd */}
        <div id="why-choose-us" className="mt-24">
          <SectionHeading
            badge="Our Advantage"
            title="Why Students Trust HighEd"
            subtitle="We prioritize your academic and career aspirations above all else."
          />

          <div className="mt-12 grid grid-cols-4 gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="col-span-4 lg:col-span-4 rounded-3xl border border-gray-100 bg-white p-8 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF1FA] text-[#253A7B]">
                <Building2 size={24} />
              </div>
              <h3 className="mt-6 font-hedvig text-2xl font-bold text-[#121314]">Direct University Portals</h3>
              <p className="mt-3 text-base text-gray-600">
                Official representation means your application is processed directly through verified university agent channels for faster offer turnaround.
              </p>
            </div>

            <div className="col-span-4 lg:col-span-4 rounded-3xl border border-gray-100 bg-white p-8 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FDF0F3] text-[#E93F61]">
                <Award size={24} />
              </div>
              <h3 className="mt-6 font-hedvig text-2xl font-bold text-[#121314]">Maximum Scholarships</h3>
              <p className="mt-3 text-base text-gray-600">
                Our advisors cross-reference hundreds of merit, athletic, and governmental scholarships to maximize fee waivers for eligible students.
              </p>
            </div>

            <div className="col-span-4 lg:col-span-4 rounded-3xl border border-gray-100 bg-white p-8 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EBF5EE] text-[#1E7B47]">
                <Globe2 size={24} />
              </div>
              <h3 className="mt-6 font-hedvig text-2xl font-bold text-[#121314]">Global Visas & Housing</h3>
              <p className="mt-3 text-base text-gray-600">
                Complete mock visa interview preparation, financial documentation verification, and pre-departure accommodation support.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-24 rounded-3xl bg-[linear-gradient(135deg,#253A7B,#142456)] p-10 text-center text-white sm:p-14">
          <h2 className="font-hedvig text-3xl font-bold sm:text-4xl">Ready to Start Your Study Abroad Journey?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/85 sm:text-lg">
            Connect with a certified counsellor today. Zero consultation fees, 100% personalized advisory.
          </p>
          <div className="mt-8">
            <LeadCTAButton
              source="about_bottom"
              className="inline-flex h-12 items-center gap-2.5 rounded-full bg-[#E93F61] px-8 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-[#D93657] active:scale-[0.98] cursor-pointer"
            >
              <span>Schedule Free Strategy Session</span>
              <ArrowRight size={18} />
            </LeadCTAButton>
          </div>
        </div>
      </Container>
    </div>
  );
}
