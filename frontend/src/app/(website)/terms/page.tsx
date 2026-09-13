import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site.config";
import { constructMetadata } from "@/seo/metadata";

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
    <div className="bg-[#FAFAFC] py-12 sm:py-20">
      <Container size="md">
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-dmsans text-sm font-semibold text-[#253A7B] transition-colors hover:text-[#E93F61]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xs sm:p-12">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF1FA] text-[#253A7B]">
              <FileText className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <span className="font-dmsans text-xs font-bold uppercase tracking-wider text-[#253A7B]">
                Legal Documentation
              </span>
              <h1 className="font-hedvig text-3xl font-bold text-[#121314] sm:text-4xl">
                Terms of Service
              </h1>
            </div>
          </div>
          <p className="mt-4 font-dmsans text-sm text-gray-500">
            Last Updated: {lastUpdated}
          </p>

          <div className="prose prose-slate mt-8 max-w-none font-dmsans text-base leading-relaxed text-gray-700">
            <p>
              Welcome to <strong>{siteConfig.name}</strong> (&quot;HighEd&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of the website at{" "}
              <a href={siteConfig.url} className="text-[#253A7B] underline">
                {siteConfig.url}
              </a>{" "}
              and all counselling, application guidance, and study abroad consulting services provided by us.
            </p>

            <h2 className="mt-8 text-xl font-bold text-[#121314]">1. Acceptance of Terms</h2>
            <p>
              By accessing our platform, booking a counselling session, or submitting an inquiry form, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to all terms, you must discontinue use of our website and services immediately.
            </p>

            <h2 className="mt-8 text-xl font-bold text-[#121314]">2. Advisory Services & Scope</h2>
            <p>
              HighEd provides educational counselling, university shortlisting, application assistance, scholarship guidance, and visa interview preparation. While our advisors provide professional recommendations based on university requirements and historical trends:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                <strong>Admissions Decisions:</strong> Final admissions decisions are solely at the discretion of the individual university, college, or academic institution.
              </li>
              <li>
                <strong>Visa Decisions:</strong> Visa approvals, issuances, and interview assessments are determined exclusively by official governmental immigration authorities. HighEd cannot guarantee admission or visa issuance.
              </li>
            </ul>

            <h2 className="mt-8 text-xl font-bold text-[#121314]">3. Student Responsibilities</h2>
            <p>As a student or applicant using HighEd services, you agree that:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>All academic records, transcripts, identity credentials, and financial documentation provided are authentic, true, and untampered.</li>
              <li>You will meet application deadlines and promptly provide required supporting documents.</li>
              <li>You will adhere to the code of conduct of the destination universities and host countries.</li>
            </ul>

            <h2 className="mt-8 text-xl font-bold text-[#121314]">4. Intellectual Property</h2>
            <p>
              All materials, branding, text, graphics, course comparisons, and software on this site are the property of HighEd or its licensors and are protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our prior written permission.
            </p>

            <h2 className="mt-8 text-xl font-bold text-[#121314]">5. Disclaimer & Limitation of Liability</h2>
            <p>
              Our website and advisory information are provided on an &quot;as is&quot; and &quot;as available&quot; basis. HighEd makes every effort to keep tuition fee estimates, scholarship deadlines, and admission requirements current. However, universities and immigration agencies frequently alter policies. To the maximum extent permitted by law, HighEd shall not be liable for any indirect, incidental, or consequential damages resulting from your use of or reliance on our services.
            </p>

            <h2 className="mt-8 text-xl font-bold text-[#121314]">6. Third-Party Links</h2>
            <p>
              Our platform may contain links to external third-party sites such as university portals, testing services (e.g. ETS, IELTS), and embassy visa portals. HighEd is not responsible for the content, privacy practices, or operations of third-party platforms.
            </p>

            <h2 className="mt-8 text-xl font-bold text-[#121314]">7. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws applicable to educational consultancies, without regard to conflict of law provisions.
            </p>

            <h2 className="mt-8 text-xl font-bold text-[#121314]">8. Contact Us</h2>
            <p>For questions or clarifications regarding these Terms of Service, please contact:</p>
            <div className="mt-4 rounded-2xl bg-[#F8F9FE] p-6 text-sm text-gray-700">
              <p className="font-semibold text-[#121314]">{siteConfig.name} Legal & Compliance</p>
              <p className="mt-1">{siteConfig.contact.address}</p>
              <p className="mt-1">
                Email:{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-[#253A7B] font-medium underline">
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
