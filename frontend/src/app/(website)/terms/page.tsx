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
    <div className="bg-background py-12 sm:py-20">
      <Container size="md">
        {/* Breadcrumb / Back Link */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-brand-primary transition-colors hover:text-brand-accent"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-10 md:p-12 shadow-xs">
          <div className="flex items-center gap-3">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-brand-primary">
              <FileText className="size-6" aria-hidden="true" />
            </span>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
                 Legal Documentation
              </span>
              <h1 className="text-foreground">
                Terms of Service
              </h1>
            </div>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-muted-foreground">
            Last Updated: {lastUpdated}
          </p>

          <div className="prose prose-slate mt-8 max-w-none font-body text-base leading-relaxed text-gray-700">
            <p>
              Welcome to <strong>{siteConfig.name}</strong> (&quot;HighEd&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of the website at{" "}
              <a href={siteConfig.url} className="text-brand-primary underline">
                {siteConfig.url}
              </a>{" "}
              and all counselling, application guidance, and study abroad consulting services provided by us.
            </p>

            <h2 className="mt-8 text-content-primary">1. Acceptance of Terms</h2>
            <p>
              By accessing our platform, booking a counselling session, or submitting an inquiry form, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to all terms, you must discontinue use of our website and services immediately.
            </p>

            <h2 className="mt-8 text-content-primary">2. Advisory Services & Scope</h2>
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

            <h2 className="mt-8 text-content-primary">3. Student Responsibilities</h2>
            <p>As a student or applicant using HighEd services, you agree that:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>All academic records, transcripts, identity credentials, and financial documentation provided are authentic, true, and untampered.</li>
              <li>You will meet application deadlines and promptly provide required supporting documents.</li>
              <li>You will adhere to the code of conduct of the destination universities and host countries.</li>
            </ul>

            <h2 className="mt-8 text-content-primary">4. Intellectual Property</h2>
            <p>
              All materials, branding, text, graphics, course comparisons, and software on this site are the property of HighEd or its licensors and are protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our prior written permission.
            </p>

            <h2 className="mt-8 text-content-primary">5. Disclaimer & Limitation of Liability</h2>
            <p>
              Our website and advisory information are provided on an &quot;as is&quot; and &quot;as available&quot; basis. HighEd makes every effort to keep tuition fee estimates, scholarship deadlines, and admission requirements current. However, universities and immigration agencies frequently alter policies. To the maximum extent permitted by law, HighEd shall not be liable for any indirect, incidental, or consequential damages resulting from your use of or reliance on our services.
            </p>

            <h2 className="mt-8 text-content-primary">6. Third-Party Links</h2>
            <p>
              Our platform may contain links to external third-party sites such as university portals, testing services (e.g. ETS, IELTS), and embassy visa portals. HighEd is not responsible for the content, privacy practices, or operations of third-party platforms.
            </p>

            <h2 className="mt-8 text-content-primary">7. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws applicable to educational consultancies, without regard to conflict of law provisions.
            </p>

            <h2 className="mt-8 text-foreground">8. Contact Us</h2>
            <p>For questions or clarifications regarding these Terms of Service, please contact:</p>
            <div className="mt-6 rounded-xl border border-border bg-neutral-50/70 p-6 text-sm text-foreground">
              <p className="font-bold text-foreground">{siteConfig.name} Legal & Compliance</p>
              <p className="mt-1 text-muted-foreground">{siteConfig.contact.address}</p>
              <p className="mt-2 text-muted-foreground">
                Email:{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-primary font-semibold underline">
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
