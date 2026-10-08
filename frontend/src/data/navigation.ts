import { NavDropdownData, NavEventItem } from "@/types/navigation";

export const navDropdowns: Record<string, NavDropdownData> = {
  "About Us": {
    columns: [
      {
        title: "About HighEd",
        items: [
          { label: "Our Story", href: "/our-story", icon: "building" },
          { label: "Why Choose HighEd", href: "/about#why-choose-us", icon: "star" },
          { label: "Our Team", href: "/our-team", icon: "users" },
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
        title: "Areas We Serve",
        items: [
          { label: "Contact & Headquarters", href: "/contact", icon: "contact" },
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
      { name: "Ireland", code: "IE", href: "/study-in/ireland" },
      { name: "Dubai", code: "AE", href: "/study-in/dubai" },
      { name: "Germany", code: "DE", href: "/study-in/germany" },
    ],
  },

  Services: {
    columns: [
      {
        title: "Counselling & Guidance",
        items: [
          { label: "Career Counselling", href: "/services/career-counselling", icon: "career" },
          { label: "University Application", href: "/services/university-application", icon: "university" },
          { label: "Scholarship Assistance", href: "/services/scholarship-assistance", icon: "scholarship" },
        ],
      },
      {
        title: "Application Support",
        items: [
          { label: "SOP & LOR Assistance", href: "/services/sop-lor-assistance", icon: "document" },
          { label: "Visa Assistance", href: "/services/visa-assistance", icon: "visa" },
        ],
      },
      {
        title: "Financial & Pre-Departure",
        items: [
          { label: "Education Loan", href: "/services/education-loan", icon: "loan" },
          { label: "Accommodation & Pre-Departure Support", href: "/services/accommodation-pre-departure", icon: "support" },
        ],
      },
    ],
  },

  Resources: {
    columns: [
      {
        title: "Guides & Information",
        items: [
          { label: "Study Abroad Guide", href: "/resources#guides", icon: "guide" },
          { label: "Country Guides", href: "/study-in", icon: "country" },
          { label: "University Directory", href: "/study-in", icon: "university" },
          { label: "Exam & Test Prep Guides", href: "/resources#exams", icon: "exam" },
          { label: "Frequently Asked Questions", href: "/about#faq", icon: "faq" },
        ],
      },
      {
        title: "Tools & Calculators",
        items: [
          { label: "Study Abroad Cost Calculator", href: "/tools/study-abroad-cost", icon: "cost" },
          { label: "Education Loan EMI Calculator", href: "/tools/education-loan-emi", icon: "calculator" },
          { label: "Profile Eligibility Checker", href: "/tools/profile-checker", icon: "check" },
          { label: "Scholarship Finder", href: "/tools/scholarship-finder", icon: "scholarship" },
          { label: "Test Score Evaluator (IELTS/PTE)", href: "/tools/test-score-evaluator", icon: "ielts" },
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
