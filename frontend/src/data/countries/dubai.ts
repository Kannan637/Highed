import { Country } from "@/types/country";

export const dubai: Country = {
  slug: "dubai",
  name: "Dubai",
  code: "AE",
  title: "Study in Dubai — Global Hub for Innovation & World-Class Education",
  tagline: "Tax-free earnings, global branch campuses, and swift visa processes in the city of the future.",
  description:
    "Dubai is rapidly becoming one of the most popular global study destinations for international students. Home to prestigious branch campuses of leading UK, Australian, and US universities, Dubai offers internationally accredited degrees, safe and cosmopolitan lifestyle, and booming post-study employment avenues in tech, finance, and hospitality.",
  heroImage: "/images/countries/study-in-dubai.webp",
  flag: "🇦🇪",
  currency: "AED (United Arab Emirates Dirham)",
  capital: "Abu Dhabi (UAE)",
  language: ["English (Primary medium of instruction)", "Arabic"],
  intakes: [
    {
      season: "Autumn / Fall Intake",
      months: "September - October",
      deadline: "June - July",
      type: "Major",
    },
    {
      season: "Spring Intake",
      months: "January - February",
      deadline: "November - December",
      type: "Major",
    },
    {
      season: "Summer Intake",
      months: "May - June",
      deadline: "March - April",
      type: "Minor",
    },
  ],
  whyStudy: [
    {
      title: "Global Branch Campuses",
      description:
        "Earn prestigious degrees from top UK, Australian, and US institutions (e.g. University of Birmingham, Wollongong, Curtin) right in Dubai at significantly lower costs.",
      icon: "building",
    },
    {
      title: "100% Tax-Free Earnings",
      description:
        "Work part-time during your studies and transition to high-paying jobs upon graduation without any personal income tax deductions.",
      icon: "tax",
    },
    {
      title: "High Visa Success Rate & Swift Processing",
      description:
        "Student visas in Dubai are sponsored directly by the university, with typical turnaround times of just 2 to 4 weeks and minimal financial documentation roadblocks.",
      icon: "visa",
    },
    {
      title: "Safe & Multicultural Global City",
      description:
        "Ranked among the safest cities in the world with over 200 nationalities co-existing, offering an unparalleled international networking environment.",
      icon: "shield",
    },
    {
      title: "Golden Visa Opportunities",
      description:
        "Outstanding university graduates with top GPAs can qualify for the prestigious 10-year UAE Golden Visa for long-term residency and career mobility.",
      icon: "star",
    },
    {
      title: "Booming Hub for Tech, Finance & Business",
      description:
        "Direct access to multinational headquarters, start-up incubators in Dubai Internet City, DIFC, and Silicon Oasis with flourishing internships.",
      icon: "growth",
    },
  ],
  universitiesList: [
    {
      name: "University of Birmingham Dubai",
      location: "Dubai International Academic City",
      ranking: "World Top 100 (QS Ranking)",
      tuitionRange: "AED 75,000 - 130,000 / year",
      popularPrograms: ["Computer Science", "Artificial Intelligence", "Business Management", "Mechanical Engineering"],
    },
    {
      name: "University of Wollongong in Dubai (UOWD)",
      location: "Dubai Knowledge Park",
      ranking: "Top Australian Institution in UAE",
      tuitionRange: "AED 55,000 - 95,000 / year",
      popularPrograms: ["Finance & Banking", "Cybersecurity", "International Business", "Media & Communications"],
    },
    {
      name: "Middlesex University Dubai",
      location: "Dubai Knowledge Park & Academic City",
      ranking: "Leading UK University Campus",
      tuitionRange: "AED 50,000 - 80,000 / year",
      popularPrograms: ["Law (LLB)", "Psychology", "Data Science", "Digital Marketing"],
    },
    {
      name: "Curtin University Dubai",
      location: "Dubai International Academic City",
      ranking: "Global Top 1% University",
      tuitionRange: "AED 52,000 - 85,000 / year",
      popularPrograms: ["Information Technology", "Accounting", "Logistics & Supply Chain", "Mass Communication"],
    },
    {
      name: "Heriot-Watt University Dubai",
      location: "Dubai Knowledge Park",
      ranking: "5-Star HEC Ranked",
      tuitionRange: "AED 60,000 - 110,000 / year",
      popularPrograms: ["Civil & Construction Engineering", "Fashion & Interior Design", "Robotics", "Actuarial Science"],
    },
    {
      name: "Manipal Academy of Higher Education Dubai",
      location: "Dubai International Academic City",
      ranking: "Premier Asian Branch Campus",
      tuitionRange: "AED 35,000 - 65,000 / year",
      popularPrograms: ["Biotechnology", "Architecture", "Information Technology", "Business Administration"],
    },
  ],
  coursesList: [
    {
      name: "Computer Science & Artificial Intelligence",
      level: "Postgraduate",
      duration: "1 - 2 Years",
      averageFee: "AED 70,000 - 110,000 / year",
      careerProspects: ["AI Specialist", "Full-Stack Software Engineer", "Data Scientist", "Cloud Architect"],
    },
    {
      name: "Business Administration & Management (MBA/BBA)",
      level: "Postgraduate",
      duration: "1 - 2 Years",
      averageFee: "AED 60,000 - 120,000 / year",
      careerProspects: ["Management Consultant", "Business Strategist", "Financial Analyst", "Operations Manager"],
    },
    {
      name: "FinTech & Banking Analytics",
      level: "Postgraduate",
      duration: "1 Year",
      averageFee: "AED 65,000 - 95,000 / year",
      careerProspects: ["Investment Banker", "Risk Analyst", "Blockchain Developer", "Fintech Product Manager"],
    },
    {
      name: "International Tourism & Hospitality Management",
      level: "Undergraduate",
      duration: "3 - 4 Years",
      averageFee: "AED 45,000 - 75,000 / year",
      careerProspects: ["Luxury Resort Manager", "Events Director", "Guest Experience Lead", "Airline Executive"],
    },
    {
      name: "Mechanical & Robotics Engineering",
      level: "Undergraduate",
      duration: "4 Years",
      averageFee: "AED 55,000 - 90,000 / year",
      careerProspects: ["Automation Engineer", "Robotics Designer", "Aviation Systems Engineer", "Project Lead"],
    },
    {
      name: "Digital Marketing & Creative Communication",
      level: "Postgraduate",
      duration: "1 Year",
      averageFee: "AED 48,000 - 70,000 / year",
      careerProspects: ["Growth Marketer", "Brand Strategist", "SEO/PPC Director", "Content Producer"],
    },
  ],
  costDetails: {
    tuitionMin: "AED 40,000",
    tuitionMax: "AED 110,000",
    livingCostMonthly: "AED 3,000 - 5,500",
    accommodationMonthly: "AED 1,800 - 3,500",
    foodAndTransportMonthly: "AED 1,200 - 2,000",
  },
  scholarshipsList: [
    {
      name: "Academic Excellence Merit Scholarship",
      amount: "Up to 50% Tuition Fee Reduction",
      eligibility: "High school score 85%+ or Bachelor's GPA 3.5+",
      coverage: "Tuition waiver applied across academic semesters",
    },
    {
      name: "University of Birmingham Dubai Chancellor's Grant",
      amount: "Up to 40% Waiver",
      eligibility: "Outstanding academic track record & leadership essay",
      coverage: "Applicable to undergraduate and postgraduate programs",
    },
    {
      name: "Early Bird Enrolment Grant",
      amount: "AED 5,000 - 15,000 off 1st Year Tuition",
      eligibility: "Students accepting admission offer before June 30",
      coverage: "Direct reduction on first-term fees",
    },
    {
      name: "Sports & Creative Arts Scholarship",
      amount: "15% - 30% Tuition Discount",
      eligibility: "Demonstrated national/state level athletic or artistic achievement",
      coverage: "Renewable based on continuous sports/arts participation",
    },
  ],
  visaDetails: {
    visaType: "UAE Student Residence Visa (1 Year Renewable or Golden Visa)",
    processingTime: "2 to 4 Weeks",
    fundsRequired: "Proof of 1st year tuition payment + bank statement showing living funds (approx. AED 30,000)",
    workPermitHours: "Up to 20 hours/week during term; Full-time (40 hrs) during vacation",
    postStudyWorkVisa: "Green Visa (5 Years) or University-sponsored grace period / Job Seeker Visa",
    steps: [
      {
        stepNumber: 1,
        title: "Secure Unconditional Admission",
        description: "Receive your official Offer Letter and pay the initial seat confirmation fee to the university.",
      },
      {
        stepNumber: 2,
        title: "University Initiates Visa Entry Permit",
        description: "The university's international visa office submits your application to the General Directorate of Residency and Foreigners Affairs (GDRFA).",
      },
      {
        stepNumber: 3,
        title: "Receive Entry Permit & Travel to Dubai",
        description: "An electronic Entry Permit (Pink Visa) is issued within 10-15 business days, allowing you to fly to UAE.",
      },
      {
        stepNumber: 4,
        title: "Medical Fitness Test & Emirates ID",
        description: "Upon arrival, undergo medical screening (blood test & chest X-ray) and biometric capture for Emirates ID card.",
      },
      {
        stepNumber: 5,
        title: "Visa Stamping on Passport",
        description: "Residency visa sticker is stamped and Emirates ID card is delivered, granting full legal resident status.",
      },
    ],
  },
  faqs: [
    {
      question: "Can international students work while studying in Dubai?",
      answer:
        "Yes! UAE labor law permits international students enrolled at accredited universities to work part-time (up to 20 hours per week during term time and 40 hours per week during breaks) with permission from their university and a student work permit.",
    },
    {
      question: "Is Dubai education recognized globally?",
      answer:
        "Absolutely. Universities in Dubai like University of Birmingham, Wollongong, Middlesex, and Curtin are licensed by the UAE Ministry of Higher Education (CAA) and Dubai's KHDA, and issue identical degree certificates to those awarded at their home campuses in the UK or Australia.",
    },
    {
      question: "What are the language requirements to study in Dubai?",
      answer:
        "Most universities teach entirely in English. Standard requirements are IELTS 6.0 - 6.5 or TOEFL 79 - 88 for degree programs. Many universities offer pre-sessional English or accept English proficiency waivers if your prior education was in English medium.",
    },
    {
      question: "How much does it cost to live in Dubai as a student?",
      answer:
        "Living costs for international students generally range between AED 3,000 to AED 5,000 per month ($800 - $1,350 USD), covering student housing or shared apartments, meals, transport (metro & bus discounts available for students), and personal expenses.",
    },
    {
      question: "Can I stay in Dubai after completing my graduation?",
      answer:
        "Yes. Graduating students can transition to UAE employment visas upon receiving a job offer, apply for the UAE Green Visa (5-year self-sponsored residency for skilled workers), or qualify for the 10-year Golden Visa if graduating with top academic honors.",
    },
    {
      question: "How do I apply for universities in Dubai through HighEd?",
      answer:
        "HighEd is an official representative for top Dubai universities. We assist with course selection, scholarship applications, document verification, application submission, and end-to-end visa filing with zero counseling charges for students.",
    },
  ],
  testimonial: {
    studentName: "Priya Sharma",
    university: "University of Birmingham Dubai",
    course: "MSc Computer Science",
    country: "Dubai",
    rating: 5,
    quote: "HighEd made my dream of studying in Dubai a reality. From university selection to visa processing, every step was handled with such care and professionalism. I received a 30% scholarship and the entire process took less than 6 weeks.",
  },
};
