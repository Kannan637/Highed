import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import Container from "@/components/ui/Container";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[linear-gradient(180deg,#253A7B,#12204C)] text-white">
      <Container size="lg" className="py-16">
        <div className="grid grid-cols-4 gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand Info */}
          <div className="col-span-4 lg:col-span-4">
            <Link href="/" className="inline-block bg-white p-2 rounded-lg">
              <Image
                src="/logos/Highed Logo/Highed.png"
                alt="HighEd"
                width={140}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="mt-6 max-w-sm font-body text-body-small font-medium leading-relaxed text-gray-300">
              HighEd is an official representative for 500+ top global universities. We offer personalized counseling, scholarship assistance, and visa guidance to make your study abroad journey seamless.
            </p>

            <div className="mt-6 space-y-2 font-body text-caption font-medium text-gray-300">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-brand-accent" />
                <a href="tel:+919050180501" className="hover:text-white">+91 90501 80501</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-brand-accent" />
                <a href="mailto:admissions@highed.org" className="hover:text-white">admissions@highed.org</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-brand-accent" />
                <span>Global Education Towers, Level 4, Academic City</span>
              </div>
            </div>
          </div>

          {/* Study Abroad Countries */}
          <div className="col-span-4 sm:col-span-2 lg:col-span-3">
            <h4 className="text-h5 uppercase tracking-wider text-white">
              Study Abroad
            </h4>
            <ul className="mt-4 space-y-2.5 font-body text-body-small font-medium text-gray-300">
              <li>
                <Link href="/study-in/dubai" className="transition-colors hover:text-white">
                  Study in Dubai
                </Link>
              </li>
              <li>
                <Link href="/study-in/usa" className="transition-colors hover:text-white">
                  Study in USA
                </Link>
              </li>
              <li>
                <Link href="/study-in/uk" className="transition-colors hover:text-white">
                  Study in UK
                </Link>
              </li>
              <li>
                <Link href="/study-in/canada" className="transition-colors hover:text-white">
                  Study in Canada
                </Link>
              </li>
              <li>
                <Link href="/study-in/australia" className="transition-colors hover:text-white">
                  Study in Australia
                </Link>
              </li>
              <li>
                <Link href="/study-in/germany" className="transition-colors hover:text-white">
                  Study in Germany
                </Link>
              </li>
            </ul>
          </div>

          {/* Student Services */}
          <div className="col-span-4 sm:col-span-2 lg:col-span-2">
            <h4 className="text-h5 uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5 font-body text-body-small font-medium text-gray-300">
              <li>
                <Link href="/services#career-counselling" className="transition-colors hover:text-white">
                  Career Counselling
                </Link>
              </li>
              <li>
                <Link href="/services#university-application" className="transition-colors hover:text-white">
                  University Applications
                </Link>
              </li>
              <li>
                <Link href="/scholarships" className="transition-colors hover:text-white">
                  Scholarships & Grants
                </Link>
              </li>
              <li>
                <Link href="/services#visa-assistance" className="transition-colors hover:text-white">
                  Visa Assistance
                </Link>
              </li>
              <li>
                <Link href="/services#education-loan" className="transition-colors hover:text-white">
                  Education Loans
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-4 sm:col-span-2 lg:col-span-3">
            <h4 className="text-h5 uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5 font-body text-body-small font-medium text-gray-300">
              <li>
                <Link href="/about" className="transition-colors hover:text-white">
                  About HighEd
                </Link>
              </li>
              <li>
                <Link href="/events" className="transition-colors hover:text-white">
                  Education Fairs 2026
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="transition-colors hover:text-white">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-white">
                  Study Abroad Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* City Locations - SEO Internal Linking */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <h4 className="text-h5 uppercase tracking-wider text-white/90">
            Study Abroad Consultants by City
          </h4>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 font-body text-caption font-medium text-gray-300">
            <Link href="/best-study-consultant-in/chennai" className="transition-colors hover:text-white">
              Best Study Consultant in Chennai
            </Link>
            <span className="text-white/30">•</span>
            <Link href="/best-study-consultant-in/coimbatore" className="transition-colors hover:text-white">
              Best Study Consultant in Coimbatore
            </Link>
            <span className="text-white/30">•</span>
            <Link href="/best-study-consultant-in/tirupathi" className="transition-colors hover:text-white">
              Best Study Consultant in Tirupathi
            </Link>
            <span className="text-white/30">•</span>
            <Link href="/best-study-consultant-in/vellore" className="transition-colors hover:text-white">
              Best Study Consultant in Vellore
            </Link>
            <span className="text-white/30">•</span>
            <Link href="/best-study-consultant-in/thiruvallur" className="transition-colors hover:text-white">
              Best Study Consultant in Thiruvallur
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-6 font-body text-caption font-medium text-gray-400 sm:flex-row gap-4">
          <div>
            © {new Date().getFullYear()} HighEd Global Education Advisory. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <Link href="/privacy-policy" className="hover:text-white transition-colors py-1">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors py-1">
              Terms of Service
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart size={12} className="fill-[#E93F61] text-brand-accent" />
            <span>for international students</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;