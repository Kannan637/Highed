import React from "react";
import { siteConfig } from "@/config/site.config";
import { constructMetadata } from "@/seo/metadata";
import LegalHero from "@/components/legal/LegalHero";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata = constructMetadata({
  title: "Privacy Policy",
  description:
    "Read HighEd's Privacy Policy to learn how we collect, protect, and use your personal information during your study abroad counselling journey.",
  path: "/privacy-policy",
  keywords: ["privacy policy", "data protection", "student data privacy"],
});

export default function PrivacyPolicyPage() {
  const lastUpdated = "Feb 16, 2025";

  return (
    <div className="w-full">
      {/* 1. Dark Hero Section with Atmospheric Glow */}
      <LegalHero title="Privacy Policy" lastUpdated={lastUpdated} />

      {/* 2. Main Document Area: Centered Layout on #F8F9FC Background */}
      <LegalLayout>
        <article className="space-y-11 lg:space-y-12 font-body text-[#667085]">
          {/* Intro Paragraph */}
          <div className="text-[14px] sm:text-[15px] font-normal leading-[1.7] text-[#667085]">
            <p className="m-0">
              At <strong className="font-semibold text-[#151A2D]">{siteConfig.name}</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), accessible via{" "}
              <a
                href={siteConfig.url}
                className="text-[#253A7B] font-medium underline underline-offset-2 hover:text-[#19C9E8] transition-colors"
              >
                {siteConfig.url}
              </a>
              , we prioritize the privacy and security of our visitors and students. This Privacy Policy describes how your personal information is collected, used, and protected when you interact with our counselling services, website, and digital portals.
            </p>
          </div>

          {/* Section 1: Information We Collect */}
          <section id="information-we-collect" className="scroll-mt-24 sm:scroll-mt-28 space-y-4">
            <h2 className="!text-[24px] sm:!text-[26px] lg:!text-[30px] !font-bold text-[#151A2D] !leading-[1.25] !tracking-tight m-0">
              1. Information We Collect
            </h2>
            <p className="text-[14px] sm:text-[15px] font-normal leading-[1.7] text-[#667085] m-0">
              When you interact with our website or submit an inquiry for study abroad counselling, we may collect the following categories of information:
            </p>
            <ul className="list-disc pl-5 space-y-2 sm:space-y-2.5 text-[14px] sm:text-[15px] font-normal leading-[1.7] text-[#667085] marker:text-[#98A2B3] m-0">
              <li>
                <strong className="font-semibold text-[#151A2D]">Contact Information:</strong> Full name, email address, telephone number, and country of residence.
              </li>
              <li>
                <strong className="font-semibold text-[#151A2D]">Academic Profile:</strong> Educational qualifications, GPA/grades, standardized test scores (IELTS, TOEFL, GRE, GMAT), graduation year, and institution history.
              </li>
              <li>
                <strong className="font-semibold text-[#151A2D]">Study Abroad Preferences:</strong> Preferred destination countries (e.g., Dubai, USA, UK, Canada, Australia, Germany), intended degree level (Undergraduate, Postgraduate, Doctorate), and desired fields of study.
              </li>
              <li>
                <strong className="font-semibold text-[#151A2D]">Technical &amp; Usage Data:</strong> IP address, browser type, device details, operating system, and pages visited on our website to optimize platform performance.
              </li>
            </ul>
          </section>

          {/* Section 2: How We Use Your Information */}
          <section id="how-we-use" className="scroll-mt-24 sm:scroll-mt-28 space-y-4">
            <h2 className="!text-[24px] sm:!text-[26px] lg:!text-[30px] !font-bold text-[#151A2D] !leading-[1.25] !tracking-tight m-0">
              2. How We Use Your Information
            </h2>
            <p className="text-[14px] sm:text-[15px] font-normal leading-[1.7] text-[#667085] m-0">
              We process your data for legitimate educational consulting purposes, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 sm:space-y-2.5 text-[14px] sm:text-[15px] font-normal leading-[1.7] text-[#667085] marker:text-[#98A2B3] m-0">
              <li>Providing personalized academic counseling and university shortlisting services.</li>
              <li>Contacting you via phone, WhatsApp, or email regarding university deadlines, scholarships, and visa appointments.</li>
              <li>Assisting with university admissions applications and document evaluation.</li>
              <li>Improving our website functionality and delivering relevant content about overseas education.</li>
              <li>Complying with statutory legal obligations and regulatory standards.</li>
            </ul>
          </section>

          {/* Section 3: Sharing with Partner Universities */}
          <section id="sharing" className="scroll-mt-24 sm:scroll-mt-28 space-y-4">
            <h2 className="!text-[24px] sm:!text-[26px] lg:!text-[30px] !font-bold text-[#151A2D] !leading-[1.25] !tracking-tight m-0">
              3. Sharing with Partner Universities
            </h2>
            <p className="text-[14px] sm:text-[15px] font-normal leading-[1.7] text-[#667085] m-0">
              We may share necessary application documents and personal profiles with verified admissions offices of accredited partner universities, colleges, and authorized visa processing bodies only with your explicit consent or instruction to submit an application. We do <strong className="font-semibold text-[#151A2D]">not</strong> sell, rent, or trade your personal information to third-party advertisers.
            </p>
          </section>

          {/* Section 4: Data Security */}
          <section id="security" className="scroll-mt-24 sm:scroll-mt-28 space-y-4">
            <h2 className="!text-[24px] sm:!text-[26px] lg:!text-[30px] !font-bold text-[#151A2D] !leading-[1.25] !tracking-tight m-0">
              4. Data Security
            </h2>
            <p className="text-[14px] sm:text-[15px] font-normal leading-[1.7] text-[#667085] m-0">
              We implement industry-standard administrative, technical, and physical safeguards to protect your personal information against unauthorized access, loss, misuse, or alteration. All electronic communications and lead submissions are encrypted in transit using SSL/TLS protocols.
            </p>
          </section>

          {/* Section 5: Cookies and Tracking Technologies */}
          <section id="cookies" className="scroll-mt-24 sm:scroll-mt-28 space-y-4">
            <h2 className="!text-[24px] sm:!text-[26px] lg:!text-[30px] !font-bold text-[#151A2D] !leading-[1.25] !tracking-tight m-0">
              5. Cookies and Tracking Technologies
            </h2>
            <p className="text-[14px] sm:text-[15px] font-normal leading-[1.7] text-[#667085] m-0">
              Our website uses cookies and similar technologies to enhance browsing experience, remember your preferences, and analyze website traffic. You can adjust your browser settings to refuse cookies, though some features of the platform may experience reduced functionality.
            </p>
          </section>

          {/* Section 6: Your Rights and Choices */}
          <section id="rights" className="scroll-mt-24 sm:scroll-mt-28 space-y-4">
            <h2 className="!text-[24px] sm:!text-[26px] lg:!text-[30px] !font-bold text-[#151A2D] !leading-[1.25] !tracking-tight m-0">
              6. Your Rights and Choices
            </h2>
            <p className="text-[14px] sm:text-[15px] font-normal leading-[1.7] text-[#667085] m-0">
              Depending on your location, you may have rights under applicable privacy laws (such as GDPR or regional consumer data acts), including the right to:
            </p>
            <ul className="list-disc pl-5 space-y-2 sm:space-y-2.5 text-[14px] sm:text-[15px] font-normal leading-[1.7] text-[#667085] marker:text-[#98A2B3] m-0">
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction of inaccurate or incomplete information.</li>
              <li>Request deletion of your data where retention is no longer necessary.</li>
              <li>Opt out of promotional communications at any time by clicking the unsubscribe link or contacting our team.</li>
            </ul>
          </section>

          {/* Section 7: Contact Our Privacy Team */}
          <section id="contact" className="scroll-mt-24 sm:scroll-mt-28 space-y-4">
            <h2 className="!text-[24px] sm:!text-[26px] lg:!text-[30px] !font-bold text-[#151A2D] !leading-[1.25] !tracking-tight m-0">
              7. Contact Our Privacy Team
            </h2>
            <p className="text-[14px] sm:text-[15px] font-normal leading-[1.7] text-[#667085] m-0">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data management practices, please contact us at:
            </p>
            <div className="mt-4 rounded-[10px] border border-[#E6EAF0] bg-white p-6 sm:p-7 text-[14px] leading-relaxed text-[#667085]">
              <p className="font-bold text-[15px] text-[#151A2D] m-0">{siteConfig.name} Admissions Office</p>
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
              <p className="mt-1.5 text-[#667085] m-0">
                Phone:{" "}
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-[#253A7B] font-semibold hover:text-[#19C9E8] transition-colors underline underline-offset-2"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
            </div>
          </section>
        </article>
      </LegalLayout>
    </div>
  );
}
