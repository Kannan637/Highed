import { Country } from "@/types/country";

export const usa: Country = {
  slug: "usa",
  name: "USA",
  code: "US",
  title: "Study in USA from India | Admissions & Visa Help",
  tagline:
    "Home to Ivy League universities, cutting-edge research, and unmatched career opportunities across every industry.",
  description:
    "The United States remains the world's most popular destination for international students, hosting over one million students annually. With globally top-ranked universities such as MIT, Stanford, and Harvard, the US offers unparalleled academic diversity across STEM, business, arts, and medicine. Students benefit from Optional Practical Training (OPT) allowing up to 3 years of post-graduation work experience, thriving campus cultures, and access to Silicon Valley, Wall Street, and world-leading research institutions.",
  heroImage: "/images/countries/study-in-usa.webp",
  flag: "🇺🇸",
  currency: "USD (United States Dollar)",
  capital: "Washington, D.C.",
  language: ["English"],
  intakes: [
    {
      season: "Fall Intake",
      months: "August - September",
      deadline: "December - March",
      type: "Major",
    },
    {
      season: "Spring Intake",
      months: "January - February",
      deadline: "August - October",
      type: "Major",
    },
    {
      season: "Summer Intake",
      months: "May - June",
      deadline: "January - March",
      type: "Minor",
    },
  ],
  whyStudy: [
    {
      title: "World-Ranked Universities",
      description:
        "The USA hosts 8 of the top 10 global universities (QS Rankings), including MIT, Stanford, Harvard, and Caltech — offering degrees recognized and respected worldwide.",
      icon: "building",
    },
    {
      title: "STEM OPT — Up to 3 Years Work Post-Study",
      description:
        "International students on F-1 visas can work in the US for 12 months under OPT, extended to 36 months for STEM graduates, providing a direct pathway to H-1B sponsorship.",
      icon: "star",
    },
    {
      title: "Flexible Credit-Based Education",
      description:
        "US universities follow a liberal arts model allowing students to explore multiple disciplines before declaring a major, with the freedom to double-major or switch fields.",
      icon: "growth",
    },
    {
      title: "Generous Scholarships & Financial Aid",
      description:
        "Many US universities offer merit-based and need-based scholarships, graduate assistantships, and tuition waivers worth $10,000 - $50,000+ per year for international students.",
      icon: "scholarship",
    },
    {
      title: "Diverse & Inclusive Campus Culture",
      description:
        "With students from over 200 countries, US campuses offer a truly multicultural experience with student organizations, sports, research labs, and community engagement.",
      icon: "shield",
    },
    {
      title: "Innovation & Industry Access",
      description:
        "Direct proximity to tech hubs (Silicon Valley, Austin, Boston), finance centers (New York, Chicago), and biotech corridors (San Diego, Research Triangle) for internships and careers.",
      icon: "growth",
    },
  ],
  universitiesList: [
    {
      name: "Massachusetts Institute of Technology (MIT)",
      location: "Cambridge, Massachusetts",
      ranking: "#1 QS World Rankings",
      tuitionRange: "$55,000 - $60,000 / year",
      popularPrograms: ["Computer Science", "Artificial Intelligence", "Engineering", "Economics"],
    },
    {
      name: "Stanford University",
      location: "Stanford, California",
      ranking: "#5 QS World Rankings",
      tuitionRange: "$56,000 - $60,000 / year",
      popularPrograms: ["Computer Science", "Business", "Human Biology", "Electrical Engineering"],
    },
    {
      name: "University of California, Berkeley",
      location: "Berkeley, California",
      ranking: "#12 QS World Rankings",
      tuitionRange: "$44,000 - $48,000 / year (out-of-state)",
      popularPrograms: ["Data Science", "Electrical Engineering", "Economics", "Public Policy"],
    },
    {
      name: "Columbia University",
      location: "New York City, New York",
      ranking: "#23 QS World Rankings",
      tuitionRange: "$60,000 - $65,000 / year",
      popularPrograms: ["Journalism", "Business Analytics", "International Affairs", "Computer Science"],
    },
    {
      name: "University of Michigan, Ann Arbor",
      location: "Ann Arbor, Michigan",
      ranking: "#33 QS World Rankings",
      tuitionRange: "$50,000 - $55,000 / year (out-of-state)",
      popularPrograms: ["Engineering", "Business", "Public Health", "Computer Science"],
    },
    {
      name: "New York University (NYU)",
      location: "New York City, New York",
      ranking: "#38 QS World Rankings",
      tuitionRange: "$54,000 - $58,000 / year",
      popularPrograms: ["Finance", "Film & Media", "Data Science", "Law"],
    },
  ],
  coursesList: [
    {
      name: "Computer Science & Software Engineering",
      level: "Postgraduate",
      duration: "1.5 - 2 Years",
      averageFee: "$45,000 - $60,000 / year",
      careerProspects: ["Software Engineer", "ML Engineer", "Cloud Architect", "Product Manager"],
    },
    {
      name: "MBA & Business Administration",
      level: "Postgraduate",
      duration: "2 Years",
      averageFee: "$50,000 - $75,000 / year",
      careerProspects: ["Management Consultant", "Investment Banker", "Product Strategist", "Entrepreneur"],
    },
    {
      name: "Data Science & Analytics",
      level: "Postgraduate",
      duration: "1 - 2 Years",
      averageFee: "$40,000 - $55,000 / year",
      careerProspects: ["Data Scientist", "Business Analyst", "AI Researcher", "Quantitative Analyst"],
    },
    {
      name: "Electrical & Computer Engineering",
      level: "Undergraduate",
      duration: "4 Years",
      averageFee: "$45,000 - $58,000 / year",
      careerProspects: ["Hardware Engineer", "Embedded Systems Developer", "Robotics Engineer", "Chip Designer"],
    },
    {
      name: "Public Health & Epidemiology",
      level: "Postgraduate",
      duration: "2 Years",
      averageFee: "$35,000 - $55,000 / year",
      careerProspects: ["Epidemiologist", "Health Policy Analyst", "WHO/CDC Researcher", "Biostatistician"],
    },
    {
      name: "Finance & Financial Engineering",
      level: "Postgraduate",
      duration: "1 - 1.5 Years",
      averageFee: "$50,000 - $65,000 / year",
      careerProspects: ["Quantitative Trader", "Risk Analyst", "Portfolio Manager", "FinTech Developer"],
    },
  ],
  costDetails: {
    tuitionMin: "$30,000",
    tuitionMax: "$75,000",
    livingCostMonthly: "$1,200 - $2,500",
    accommodationMonthly: "$800 - $1,800",
    foodAndTransportMonthly: "$400 - $700",
  },
  scholarshipsList: [
    {
      name: "Fulbright Foreign Student Program",
      amount: "Full Tuition + Living Stipend + Airfare",
      eligibility: "Outstanding academic record, leadership potential, home-country commitment",
      coverage: "Fully funded for Master's and PhD programs at accredited US universities",
    },
    {
      name: "Hubert Humphrey Fellowship Program",
      amount: "Full Funding (10 months)",
      eligibility: "Mid-career professionals with leadership experience",
      coverage: "Tuition, living expenses, travel, and professional development",
    },
    {
      name: "University Merit Scholarships",
      amount: "$10,000 - $50,000 / year",
      eligibility: "High GPA (3.5+), strong GRE/GMAT, extracurriculars",
      coverage: "Tuition reduction across top 100 US universities",
    },
    {
      name: "Graduate Assistantships (TA/RA)",
      amount: "Full Tuition Waiver + $15,000 - $30,000 Stipend",
      eligibility: "Admitted graduate students with research or teaching qualifications",
      coverage: "Tuition waiver plus monthly living stipend for the academic year",
    },
  ],
  visaDetails: {
    visaType: "F-1 Student Visa",
    processingTime: "3 to 8 Weeks",
    fundsRequired:
      "Proof of first year's tuition + living expenses (I-20 amount), bank statements, sponsor affidavit",
    workPermitHours: "Up to 20 hours/week on-campus during term; CPT/OPT for off-campus",
    postStudyWorkVisa: "OPT (12 months, extendable to 36 months for STEM) → H-1B Sponsorship",
    steps: [
      {
        stepNumber: 1,
        title: "Receive I-20 from University",
        description:
          "After admission and financial proof submission, the university issues Form I-20, your certificate of eligibility for F-1 status.",
      },
      {
        stepNumber: 2,
        title: "Pay SEVIS Fee & Complete DS-160",
        description:
          "Pay the $350 SEVIS I-901 fee and fill the online DS-160 visa application form with passport details, travel plans, and program information.",
      },
      {
        stepNumber: 3,
        title: "Schedule Visa Interview at US Embassy",
        description:
          "Book a visa appointment at your nearest US Embassy/Consulate. Prepare financial documents, I-20, admission letter, and academic transcripts.",
      },
      {
        stepNumber: 4,
        title: "Attend F-1 Visa Interview",
        description:
          "Answer questions about your study plans, university choice, funding sources, and ties to your home country. Processing typically takes 3-5 business days.",
      },
      {
        stepNumber: 5,
        title: "Receive Passport with F-1 Visa Stamp",
        description:
          "Once approved, your passport is returned with the F-1 visa sticker. You can enter the US up to 30 days before your program start date.",
      },
    ],
  },
  faqs: [
    {
      question: "What exams are required to study in the USA?",
      answer:
        "Most US universities require the TOEFL (79+) or IELTS (6.5+) for English proficiency. Graduate programs typically require GRE (for MS/PhD) or GMAT (for MBA). Some universities have waived standardized test requirements — check individual program pages.",
    },
    {
      question: "Can international students work while studying in the USA?",
      answer:
        "Yes. F-1 students can work up to 20 hours/week on-campus during the academic term and full-time during breaks. Off-campus work requires CPT (Curricular Practical Training) authorization from your university.",
    },
    {
      question: "What is OPT and how does it work?",
      answer:
        "Optional Practical Training (OPT) allows F-1 students to work in the US for 12 months after graduation in a field related to their degree. STEM graduates can extend OPT for an additional 24 months (total 36 months), providing a pathway to H-1B sponsorship.",
    },
    {
      question: "How much does it cost to study in the USA?",
      answer:
        "Tuition ranges from $30,000 to $75,000+ per year depending on the university and program. Living costs are approximately $12,000 - $25,000 per year depending on the city. Many students offset costs with scholarships, assistantships, and on-campus jobs.",
    },
    {
      question: "Can I get a scholarship to study in the USA?",
      answer:
        "Absolutely. US universities offer generous merit-based scholarships, need-based aid, graduate assistantships (TA/RA with full tuition waivers), and external awards like Fulbright. HighEd helps you identify and apply for the best scholarships matching your profile.",
    },
    {
      question: "How do I apply to US universities through HighEd?",
      answer:
        "HighEd provides end-to-end support: profile evaluation, university shortlisting, SOP/LOR guidance, application submission, scholarship filing, and F-1 visa preparation — all at zero counseling cost.",
    },
  ],
  testimonial: {
    studentName: "Aditya Patel",
    university: "Northeastern University",
    course: "MS in Data Analytics",
    country: "USA",
    rating: 5,
    quote: "Securing an admission and F-1 visa for the US felt overwhelming until I consulted HighEd. Their team helped me shortlist ambitious yet realistic universities and guided me through every mock interview.",
  },
};
