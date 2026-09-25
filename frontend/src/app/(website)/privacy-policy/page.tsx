import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site.config";
import { constructMetadata } from "@/seo/metadata";

export const metadata = constructMetadata({
  title: "Privacy Policy",
  description:
    "Read HighEd's Privacy Policy to learn how we collect, protect, and use your personal information during your study abroad counselling journey.",
  path: "/privacy-policy",
  keywords: ["privacy policy", "data protection", "student data privacy"],
});

export default function PrivacyPolicyPage() {
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
              <Shield className="size-6" aria-hidden="true" />
            </span>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
                Legal Documentation
              </span>
              <h1 className="text-foreground">
                Privacy Policy
              </h1>
            </div>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-muted-foreground">
            Last Updated: {lastUpdated}
          </p>

          <div className="prose prose-slate mt-8 max-w-none font-body text-base leading-relaxed text-gray-700">
            <p>
              At <strong>{siteConfig.name}</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), accessible via{" "}
              <a href={siteConfig.url} className="text-brand-primary underline">
                {siteConfig.url}
              </a>
              , we prioritize the privacy and security of our visitors and students. This Privacy Policy describes how your personal information is collected, used, and protected when you interact with our counselling services, website, and digital portals.
            </p>

            <h2 className="mt-8 text-content-primary">1. Information We Collect</h2>
            <p>
              When you interact with our website or submit an inquiry for study abroad counselling, we may collect the following categories of information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                <strong>Contact Information:</strong> Full name, email address, telephone number, and country of residence.
              </li>
              <li>
                <strong>Academic Profile:</strong> Educational qualifications, GPA/grades, standardized test scores (IELTS, TOEFL, GRE, GMAT), graduation year, and institution history.
              </li>
              <li>
                <strong>Study Abroad Preferences:</strong> Preferred destination countries (e.g., Dubai, USA, UK, Canada, Australia, Germany), intended degree level (Undergraduate, Postgraduate, Doctorate), and desired fields of study.
              </li>
              <li>
                <strong>Technical & Usage Data:</strong> IP address, browser type, device details, operating system, and pages visited on our website to optimize platform performance.
              </li>
            </ul>

            <h2 className="mt-8 text-content-primary">2. How We Use Your Information</h2>
            <p>We process your data for legitimate educational consulting purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Providing personalized academic counseling and university shortlisting services.</li>
              <li>Contacting you via phone, WhatsApp, or email regarding university deadlines, scholarships, and visa appointments.</li>
              <li>Assisting with university admissions applications and document evaluation.</li>
              <li>Improving our website functionality and delivering relevant content about overseas education.</li>
              <li>Complying with statutory legal obligations and regulatory standards.</li>
            </ul>

            <h2 className="mt-8 text-content-primary">3. Sharing with Partner Universities</h2>
            <p>
              We may share necessary application documents and personal profiles with verified admissions offices of accredited partner universities, colleges, and authorized visa processing bodies only with your explicit consent or instruction to submit an application. We do <strong>not</strong> sell, rent, or trade your personal information to third-party advertisers.
            </p>

            <h2 className="mt-8 text-content-primary">4. Data Security</h2>
            <p>
              We implement industry-standard administrative, technical, and physical safeguards to protect your personal information against unauthorized access, loss, misuse, or alteration. All electronic communications and lead submissions are encrypted in transit using SSL/TLS protocols.
            </p>

            <h2 className="mt-8 text-content-primary">5. Cookies and Tracking Technologies</h2>
            <p>
              Our website uses cookies and similar technologies to enhance browsing experience, remember your preferences, and analyze website traffic. You can adjust your browser settings to refuse cookies, though some features of the platform may experience reduced functionality.
            </p>

            <h2 className="mt-8 text-content-primary">6. Your Rights and Choices</h2>
            <p>
              Depending on your location, you may have rights under applicable privacy laws (such as GDPR or regional consumer data acts), including the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction of inaccurate or incomplete information.</li>
              <li>Request deletion of your data where retention is no longer necessary.</li>
              <li>Opt out of promotional communications at any time by clicking the unsubscribe link or contacting our team.</li>
            </ul>

            <h2 className="mt-8 text-content-primary">7. Contact Our Privacy Team</h2>
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or our data management practices, please contact us at:
            </p>
            <div className="mt-6 rounded-xl border border-border bg-neutral-50/70 p-6 text-sm text-foreground">
              <p className="font-bold text-foreground">{siteConfig.name} Admissions Office</p>
              <p className="mt-1 text-muted-foreground">{siteConfig.contact.address}</p>
              <p className="mt-2 text-muted-foreground">
                Email:{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-primary font-semibold underline">
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="mt-1 text-muted-foreground">
                Phone:{" "}
                <a href={`tel:${siteConfig.contact.phone}`} className="text-brand-primary font-semibold underline">
                  {siteConfig.contact.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
