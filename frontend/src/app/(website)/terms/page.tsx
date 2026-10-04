import React from "react";
import { siteConfig } from "@/config/site.config";
import { constructMetadata } from "@/seo/metadata";
import LegalHero from "@/components/legal/LegalHero";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata = constructMetadata({
  title: "Terms of Service",
  description:
    "Review the Terms of Service for HighEd. Understand our advisory commitments, student responsibilities, and website terms of use.",
  path: "/terms",
  keywords: ["terms of service", "terms and conditions", "user agreement"],
});

export default function TermsPage() {
  const lastUpdated = "September 12, 2026";

  return (
    <div className="w-full">
      {/* 1. Dark Hero Section with Atmospheric Glow */}
      <LegalHero title="Terms of Service" lastUpdated={lastUpdated} />

      {/* 2. Main Document Area: Centered Layout on #F8F9FC Background */}
      <LegalLayout>
        <article className="space-y-11 lg:space-y-12 font-body text-[#667085]">
          {/* Intro Paragraph */}
          <div className="text-[14px] sm:text-[15px] font-normal leading-[1.7] text-[#667085]">
            <p className="m-0">
              Welcome to <strong className="font-semibold text-[#151A2D]">{siteConfig.name}</strong> (&quot;HighEd&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of the website at{" "}
              <a
                href={siteConfig.url}
                className="text-[#253A7B] font-medium underline underline-offset-2 hover:text-[#19C9E8] transition-colors"
              >
                {siteConfig.url}
              </a>{" "}
              and all counselling, application guidance, and study abroad consulting services provided by us.
            </p>
          </div>

          {/* Section 1: Acceptance of Terms */}
          <section id="acceptance" className="scroll-mt-24 sm:scroll-mt-28 space-y-4">
            <h2 className="!text-[24px] sm:!text-[26px] lg:!text-[30px] !font-bold text-[#151A2D] !leading-[1.25] !tracking-tight m-0">
              1. Acceptance of Terms
            </h2>
            <p className="text-[14px] sm:text-[15px] font-normal leading-[1.7] text-[#667085] m-0">
              By accessing our platform, booking a counselling session, or submitting an inquiry form, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to all terms, you must discontinue use of our website and services immediately.
            </p>
          </section>

          {/* Section 2: Advisory Services & Scope */}
          <section id="advisory-services" className="scroll-mt-24 sm:scroll-mt-28 space-y-4">
            <h2 className="!text-[24px] sm:!text-[26px] lg:!text-[30px] !font-bold text-[#151A2D] !leading-[1.25] !tracking-tight m-0">
              2. Advisory Services &amp; Scope
            </h2>
            <p className="text-[14px] sm:text-[15px] font-normal leading-[1.7] text-[#667085] m-0">
              HighEd provides educational counselling, university shortlisting, application assistance, scholarship guidance, and visa interview preparation. While our advisors provide professional recommendations based on university requirements and historical trends:
            </p>
            <ul className="list-disc pl-5 space-y-2 sm:space-y-2.5 text-[14px] sm:text-[15px] font-normal leading-[1.7] text-[#667085] marker:text-[#98A2B3] m-0">
              <li>
                <strong className="font-semibold text-[#151A2D]">Admissions Decisions:</strong> Final admissions decisions are solely at the discretion of the individual university, college, or academic institution.
              </li>
              <li>
                <strong className="font-semibold text-[#151A2D]">Visa Decisions:</strong> Visa approvals, issuances, and interview assessments are determined exclusively by official governmental immigration authorities. HighEd cannot guarantee admission or visa issuance.
              </li>
            </ul>
          </section>

          {/* Section 3: Student Responsibilities */}
          <section id="student-responsibilities" className="scroll-mt-24 sm:scroll-mt-28 space-y-4">
            <h2 className="!text-[24px] sm:!text-[26px] lg:!text-[30px] !font-bold text-[#151A2D] !leading-[1.25] !tracking-tight m-0">
              3. Student Responsibilities
            </h2>
            <p className="text-[14px] sm:text-[15px] font-normal leading-[1.7] text-[#667085] m-0">
              As a student or applicant using HighEd services, you agree that:
            </p>
            <ul className="list-disc pl-5 space-y-2 sm:space-y-2.5 text-[14px] sm:text-[15px] font-normal leading-[1.7] text-[#667085] marker:text-[#98A2B3] m-0">
              <li>All academic records, transcripts, identity credentials, and financial documentation provided are authentic, true, and untampered.</li>
              <li>You will meet application deadlines and promptly provide required supporting documents.</li>
              <li>You will adhere to the code of conduct of the destination universities and host countries.</li>
            </ul>
          </section>

          {/* Section 4: Intellectual Property */}
          <section id="intellectual-property" className="scroll-mt-24 sm:scroll-mt-28 space-y-4">
            <h2 className="!text-[24px] sm:!text-[26px] lg:!text-[30px] !font-bold text-[#151A2D] !leading-[1.25] !tracking-tight m-0">
              4. Intellectual Property
            </h2>
            <p className="text-[14px] sm:text-[15px] font-normal leading-[1.7] text-[#667085] m-0">
              All materials, branding, text, graphics, course comparisons, and software on this site are the property of HighEd or its licensors and are protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our prior written permission.
            </p>
          </section>

          {/* Section 5: Disclaimer & Limitation of Liability */}
          <section id="disclaimer" className="scroll-mt-24 sm:scroll-mt-28 space-y-4">
            <h2 className="!text-[24px] sm:!text-[26px] lg:!text-[30px] !font-bold text-[#151A2D] !leading-[1.25] !tracking-tight m-0">
              5. Disclaimer &amp; Limitation of Liability
            </h2>
            <p className="text-[14px] sm:text-[15px] font-normal leading-[1.7] text-[#667085] m-0">
              Our website and advisory information are provided on an &quot;as is&quot; and &quot;as available&quot; basis. HighEd makes every effort to keep tuition fee estimates, scholarship deadlines, and admission requirements current. However, universities and immigration agencies frequently alter policies. To the maximum extent permitted by law, HighEd shall not be liable for any indirect, incidental, or consequential damages resulting from your use of or reliance on our services.
            </p>
          </section>

          {/* Section 6: Third-Party Links */}
          <section id="third-party-links" className="scroll-mt-24 sm:scroll-mt-28 space-y-4">
            <h2 className="!text-[24px] sm:!text-[26px] lg:!text-[30px] !font-bold text-[#151A2D] !leading-[1.25] !tracking-tight m-0">
              6. Third-Party Links
            </h2>
            <p className="text-[14px] sm:text-[15px] font-normal leading-[1.7] text-[#667085] m-0">
              Our platform may contain links to external third-party sites such as university portals, testing services (e.g. ETS, IELTS), and embassy visa portals. HighEd is not responsible for the content, privacy practices, or operations of third-party platforms.
            </p>
          </section>

          {/* Section 7: Governing Law */}
          <section id="governing-law" className="scroll-mt-24 sm:scroll-mt-28 space-y-4">
            <h2 className="!text-[24px] sm:!text-[26px] lg:!text-[30px] !font-bold text-[#151A2D] !leading-[1.25] !tracking-tight m-0">
              7. Governing Law
            </h2>
            <p className="text-[14px] sm:text-[15px] font-normal leading-[1.7] text-[#667085] m-0">
              These Terms are governed by and construed in accordance with the laws applicable to educational consultancies, without regard to conflict of law provisions.
            </p>
          </section>

          {/* Section 8: Contact Us */}
          <section id="contact" className="scroll-mt-24 sm:scroll-mt-28 space-y-4">
            <h2 className="!text-[24px] sm:!text-[26px] lg:!text-[30px] !font-bold text-[#151A2D] !leading-[1.25] !tracking-tight m-0">
              8. Contact Us
            </h2>
            <p className="text-[14px] sm:text-[15px] font-normal leading-[1.7] text-[#667085] m-0">
              For questions or clarifications regarding these Terms of Service, please contact:
            </p>
            <div className="mt-4 rounded-[10px] border border-[#E6EAF0] bg-white p-6 sm:p-7 text-[14px] leading-relaxed text-[#667085]">
              <p className="font-bold text-[15px] text-[#151A2D] m-0">{siteConfig.name} Legal &amp; Compliance</p>
              <p className="mt-1.5 text-[#667085] m-0">{siteConfig.contact.address}</p>
              <p className="mt-3 text-[#667085] m-0">
                Email:{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-[#253A7B] font-semibold hover:text-[#19C9E8] transition-colors underline underline-offset-2"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>
          </section>
        </article>
      </LegalLayout>
    </div>
  );
}
