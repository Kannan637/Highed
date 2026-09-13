import React from "react";
import Container from "@/components/ui/Container";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import { ShieldCheck, Award, Clock, Users, PhoneCall, ArrowRight } from "lucide-react";
import { constructMetadata } from "@/seo/metadata";
import { AutoOpenLeadPopup } from "./AutoOpenLeadPopup";

export const metadata = constructMetadata({
  title: "Book Free Study Abroad Counselling",
  description:
    "Book a free 1-on-1 counseling session with certified overseas education advisors. Get guidance on universities in Dubai, USA, UK, Canada, Australia, and Germany.",
  path: "/book-counselling",
  keywords: ["free counselling", "study abroad advisor", "overseas education guidance"],
});

export default function BookCounsellingPage() {
  return (
    <div className="bg-[#FAFAFC] py-16 sm:py-24">
      {/* Auto-open modal on route entry */}
      <AutoOpenLeadPopup />

      <Container size="lg">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Left Column: Information & Trust */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EEF1FA] px-4 py-1.5 font-dmsans text-xs font-semibold text-[#253A7B]">
              <ShieldCheck size={16} />
              <span>Official University Representative</span>
            </div>

            <h1 className="mt-4 font-hedvig text-4xl font-bold tracking-tight text-[#121314] sm:text-5xl">
              Take the First Step Towards Your Global Degree
            </h1>

            <p className="mt-4 font-dmsans text-base leading-relaxed text-gray-600 sm:text-lg">
              Our experienced counselors provide step-by-step guidance on program selection, university admissions, scholarship filings, and visa documentation. Completely free of charge.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-xs text-[#253A7B]">
                  <Users size={22} />
                </div>
                <div>
                  <h3 className="font-dmsans text-base font-bold text-[#121314]">
                    1-on-1 Dedicated Advisor
                  </h3>
                  <p className="font-dmsans text-sm text-gray-500">
                    Get an advisor dedicated to your application from profile evaluation to pre-departure.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-xs text-[#E93F61]">
                  <Award size={22} />
                </div>
                <div>
                  <h3 className="font-dmsans text-base font-bold text-[#121314]">
                    Maximum Scholarship Opportunities
                  </h3>
                  <p className="font-dmsans text-sm text-gray-500">
                    We match your profile with university and government scholarships up to 100% tuition.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-xs text-[#1E7B47]">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="font-dmsans text-base font-bold text-[#121314]">
                    Fast-Track Offers & Visa Support
                  </h3>
                  <p className="font-dmsans text-sm text-gray-500">
                    Direct university portal access for priority processing and 98%+ visa success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: LeadPopup Trigger Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF1FA] text-[#253A7B]">
                <PhoneCall size={28} />
              </div>

              <h2 className="mt-6 font-hedvig text-2xl font-bold text-[#121314] sm:text-3xl">
                Ready to speak with an admissions expert?
              </h2>

              <p className="mt-3 font-dmsans text-base leading-relaxed text-gray-600">
                Click below to request an instant callback. Enter your phone number and our certified counsellors will evaluate your profile.
              </p>

              <div className="mt-8">
                <LeadCTAButton
                  source="book_counselling_page"
                  className="flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[#E93F61] font-dmsans text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#d93657] active:scale-[0.98] cursor-pointer"
                >
                  <span>Book Free Counselling</span>
                  <ArrowRight size={18} />
                </LeadCTAButton>
              </div>

              <div className="mt-6 border-t border-gray-100 pt-6 text-center">
                <p className="font-dmsans text-sm text-gray-500">
                  Prefer calling directly?{" "}
                  <a
                    href="tel:+919050180501"
                    className="font-bold text-[#253A7B] hover:underline"
                  >
                    +91 90501 80501
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
