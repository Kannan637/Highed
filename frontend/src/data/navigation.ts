import { NavDropdownData, NavEventItem } from "@/types/navigation";

export const navDropdowns: Record<string, NavDropdownData> = {
  "About Us": {
    columns: [
      {
        title: "About HighEd",
        items: [
          { label: "Our Story", href: "/about", icon: "building" },
          { label: "Why Choose HighEd", href: "/about#why-choose-us", icon: "star" },
          { label: "Our Team", href: "/about#team", icon: "users" },
        ],
      },
      {
        title: "Student Success",
        items: [
          { label: "Student Success Stories", href: "/success-stories", icon: "success" },
          { label: "Student Reviews", href: "/success-stories#reviews", icon: "reviews" },
        ],
      },
      {
        title: "Get in Touch",
        items: [
          { label: "Contact Us", href: "/contact", icon: "contact" },
        ],
      },
    ],
  },

  "Study Abroad": {
    countries: [
      { name: "USA", code: "US", href: "/study-in/usa" },
      { name: "UK", code: "GB", href: "/study-in/uk" },
      { name: "Canada", code: "CA", href: "/study-in/canada" },
      { name: "Australia", code: "AU", href: "/study-in/australia" },
      { name: "Dubai", code: "AE", href: "/study-in/dubai" },
      { name: "Germany", code: "DE", href: "/study-in/germany" },
    ],
  },

  Services: {
    columns: [
      {
        title: "Counselling & Guidance",
        items: [
          { label: "Career Counselling", href: "/services#career-counselling", icon: "career" },
          { label: "University Application", href: "/services#university-application", icon: "university" },
          { label: "Scholarship Assistance", href: "/scholarships", icon: "scholarship" },
        ],
      },
      {
        title: "Application Support",
        items: [
          { label: "SOP & LOR Assistance", href: "/services#sop-lor-assistance", icon: "document" },
          { label: "Visa Assistance", href: "/services#visa-assistance", icon: "visa" },
        ],
      },
      {
        title: "Financial & Pre-Departure",
        items: [
          { label: "Education Loan", href: "/services#education-loan", icon: "loan" },
          { label: "Accommodation", href: "/services#accommodation", icon: "home" },
          { label: "Pre-Departure Support", href: "/services#pre-departure-support", icon: "support" },
        ],
      },
    ],
  },

  Resources: {
    columns: [
      {
        title: "Guides & Information",
        items: [
          { label: "Study Abroad Guide", href: "/blog", icon: "guide" },
          { label: "Country Guides", href: "/study-in", icon: "country" },
          { label: "University Guides", href: "/study-in", icon: "university" },
          { label: "Exam & Test Prep Guides", href: "/blog", icon: "exam" },
          { label: "Frequently Asked Questions", href: "/about#faq", icon: "faq" },
        ],
      },
      {
        title: "Tools & Calculators",
        items: [
          { label: "Study Abroad Cost Calculator", href: "/book-counselling", icon: "cost" },
          { label: "Education Loan EMI Calculator", href: "/services#education-loan", icon: "calculator" },
          { label: "Profile Eligibility Checker", href: "/book-counselling", icon: "check" },
          { label: "Scholarship Finder", href: "/scholarships", icon: "scholarship" },
          { label: "Test Score Evaluator (IELTS/PTE)", href: "/book-counselling", icon: "ielts" },
        ],
      },
      {
        title: "Accommodation & Living",
        items: [
          { label: "Accommodation", href: "/services#accommodation", icon: "home" },
          { label: "Pre-Departure Support", href: "/services#pre-departure-support", icon: "support" },
          { label: "Cost of Living Guides", href: "/study-in", icon: "cost" },
        ],
      },
    ],
  },
};

export const eventsList: NavEventItem[] = [
  {
    label: "Study Abroad Fairs",
    href: "/events?type=fair",
    icon: "fair",
  },
  {
    label: "University Events",
    href: "/events?type=university",
    icon: "event",
  },
  {
    label: "Webinars",
    href: "/events?type=webinar",
    icon: "webinar",
  },
  {
    label: "Upcoming Events",
    href: "/events",
    icon: "calendar",
  },
];
