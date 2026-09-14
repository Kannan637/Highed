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
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="HighEd"
                width={140}
                height={40}
                className="h-9 w-auto brightness-0 invert object-contain"
              />
            </Link>
            <p className="mt-4 max-w-sm font-dmsans text-sm leading-relaxed text-gray-300">
              HighEd is an official representative for 500+ top global universities. We offer personalized counseling, scholarship assistance, and visa guidance to make your study abroad journey seamless.
            </p>

            <div className="mt-6 space-y-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#E93F61]" />
                <a href="tel:+919050180501" className="hover:text-white">+91 90501 80501</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#E93F61]" />
                <a href="mailto:admissions@highed.org" className="hover:text-white">admissions@highed.org</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#E93F61]" />
                <span>Global Education Towers, Level 4, Academic City</span>
              </div>
            </div>
          </div>

          {/* Study Abroad Countries */}
          <div className="col-span-4 sm:col-span-2 lg:col-span-3">
            <h4 className="font-dmsans text-sm font-bold uppercase tracking-wider text-white">
              Study Abroad
            </h4>
            <ul className="mt-4 space-y-2.5 font-dmsans text-sm text-gray-300">
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
            <h4 className="font-dmsans text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5 font-dmsans text-sm text-gray-300">
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
            <h4 className="font-dmsans text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5 font-dmsans text-sm text-gray-300">
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

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-6 font-dmsans text-xs text-gray-400 sm:flex-row">
          <div>
            © {new Date().getFullYear()} HighEd Global Education Advisory. All rights reserved.
          </div>
          <div className="mt-3 flex items-center gap-1 sm:mt-0">
            <span>Crafted with</span>
            <Heart size={12} className="fill-[#E93F61] text-[#E93F61]" />
            <span>for international students</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
