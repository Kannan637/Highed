import { Country } from "@/types/country";

export const uk: Country = {
  slug: "uk",
  name: "UK",
  code: "GB",
  title: "Study in UK from India | Universities & Visa Help",
  tagline:
    "Study at world-renowned universities like Oxford, Cambridge, and Imperial — with 1-year Master's programs and a 2-year Graduate Route visa.",
  description:
    "The United Kingdom is home to some of the oldest and most prestigious universities in the world. With over 150 universities offering globally accredited degrees, the UK is the second most popular study destination worldwide. International students benefit from shorter program durations (1-year Master's), the Graduate Route visa allowing 2 years of post-study work, multicultural cities like London, Edinburgh, and Manchester, and a rich cultural heritage that enhances the learning experience.",
  heroImage: "/images/countries/study-in-uk.webp",
  flag: "🇬🇧",
  currency: "GBP (British Pound Sterling)",
  capital: "London",
  language: ["English"],
  intakes: [
    {
      season: "Autumn Intake",
      months: "September - October",
      deadline: "January - June",
      type: "Major",
    },
    {
      season: "Spring / January Intake",
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
      title: "Globally Top-Ranked Universities",
      description:
        "The UK is home to 4 of the world's top 10 universities — Oxford, Cambridge, Imperial College London, and UCL — with degrees recognized and valued by employers worldwide.",
      icon: "building",
    },
    {
      title: "Shorter Duration = Lower Total Cost",
      description:
        "Most Master's programs are just 1 year (vs. 2 years in the US), significantly reducing total tuition and living costs while delivering the same qualification.",
      icon: "tax",
    },
    {
      title: "2-Year Graduate Route Visa",
      description:
        "International graduates can stay and work in the UK for 2 years (3 years for PhD holders) after completing their degree — no sponsorship required.",
      icon: "visa",
    },
    {
      title: "NHS Healthcare Access",
      description:
        "International students paying the Immigration Health Surcharge (IHS) get full access to the UK's National Health Service (NHS), including GP visits, hospital treatment, and prescriptions.",
      icon: "shield",
    },
    {
      title: "Research Excellence",
      description:
        "The UK produces 14% of the world's most-cited research papers, with pioneering work in AI, biotechnology, renewable energy, and quantum computing.",
      icon: "growth",
    },
    {
      title: "Multicultural Global Cities",
      description:
        "Live and study in vibrant cities like London, Manchester, Edinburgh, and Birmingham — offering world-class culture, transport, and career opportunities.",
      icon: "star",
    },
  ],
  universitiesList: [
    {
      name: "University of Oxford",
      location: "Oxford, England",
      ranking: "#3 QS World Rankings",
      tuitionRange: "£28,000 - £44,000 / year",
      popularPrograms: ["PPE (Philosophy, Politics & Economics)", "Computer Science", "Law", "Medicine"],
    },
    {
      name: "University College London (UCL)",
      location: "London, England",
      ranking: "#9 QS World Rankings",
      tuitionRange: "£25,000 - £38,000 / year",
      popularPrograms: ["Architecture", "Data Science", "Education", "Neuroscience"],
    },
    {
      name: "Imperial College London",
      location: "London, England",
      ranking: "#6 QS World Rankings",
      tuitionRange: "£32,000 - £45,000 / year",
      popularPrograms: ["Engineering", "Computing", "Business Analytics", "Biomedical Sciences"],
    },
    {
      name: "University of Edinburgh",
      location: "Edinburgh, Scotland",
      ranking: "#27 QS World Rankings",
      tuitionRange: "£23,000 - £35,000 / year",
      popularPrograms: ["AI & Machine Learning", "Informatics", "International Relations", "Medicine"],
    },
    {
      name: "University of Manchester",
      location: "Manchester, England",
      ranking: "#34 QS World Rankings",
      tuitionRange: "£22,000 - £32,000 / year",
      popularPrograms: ["Chemical Engineering", "Textile Technology", "Business", "Physics"],
    },
    {
      name: "King's College London",
      location: "London, England",
      ranking: "#40 QS World Rankings",
      tuitionRange: "£24,000 - £37,000 / year",
      popularPrograms: ["Law", "International Relations", "Nursing", "Digital Humanities"],
    },
  ],
  coursesList: [
    {
      name: "Computer Science & AI",
      level: "Postgraduate",
      duration: "1 Year",
      averageFee: "£28,000 - £40,000 / year",
      careerProspects: ["Software Engineer", "AI Researcher", "Data Scientist", "Product Manager"],
    },
    {
      name: "MBA & Management",
      level: "Postgraduate",
      duration: "1 Year",
      averageFee: "£30,000 - £55,000 / year",
      careerProspects: ["Management Consultant", "Strategy Director", "Entrepreneur", "Finance Manager"],
    },
    {
      name: "Law (LLM / LLB)",
      level: "Postgraduate",
      duration: "1 Year (LLM)",
      averageFee: "£22,000 - £38,000 / year",
      careerProspects: ["Barrister", "Corporate Lawyer", "Legal Consultant", "Policy Advisor"],
    },
    {
      name: "Mechanical & Aerospace Engineering",
      level: "Undergraduate",
      duration: "3 - 4 Years (MEng)",
      averageFee: "£25,000 - £35,000 / year",
      careerProspects: ["Aerospace Engineer", "Automotive Designer", "Energy Consultant", "R&D Lead"],
    },
    {
      name: "Public Health & Global Health",
      level: "Postgraduate",
      duration: "1 Year",
      averageFee: "£20,000 - £30,000 / year",
      careerProspects: ["Epidemiologist", "Health Economist", "NGO Director", "WHO Specialist"],
    },
    {
      name: "Architecture & Urban Planning",
      level: "Postgraduate",
      duration: "1 - 2 Years",
      averageFee: "£22,000 - £32,000 / year",
      careerProspects: ["Architect", "Urban Planner", "Sustainability Consultant", "Interior Designer"],
    },
  ],
  costDetails: {
    tuitionMin: "£15,000",
    tuitionMax: "£45,000",
    livingCostMonthly: "£1,000 - £1,500 (outside London)",
    accommodationMonthly: "£500 - £1,200",
    foodAndTransportMonthly: "£300 - £500",
  },
  scholarshipsList: [
    {
      name: "Chevening Scholarships",
      amount: "Full Funding (Tuition + Living + Travel)",
      eligibility: "Mid-career professionals with leadership potential and 2+ years work experience",
      coverage: "Fully funded 1-year Master's at any UK university — UK Government funded",
    },
    {
      name: "Commonwealth Scholarships",
      amount: "Full Tuition + Stipend + Airfare",
      eligibility: "Students from Commonwealth countries with strong academic records",
      coverage: "Funded Master's and PhD programs at leading UK universities",
    },
    {
      name: "GREAT Scholarships",
      amount: "£10,000 minimum",
      eligibility: "Students from eligible countries applying to participating universities",
      coverage: "Tuition fee reduction for 1-year postgraduate taught programs",
    },
    {
      name: "University-Specific Scholarships",
      amount: "£2,000 - £20,000 / year",
      eligibility: "Merit-based, varying by university and program",
      coverage: "Tuition discounts across Russell Group and other top universities",
    },
  ],
  visaDetails: {
    visaType: "Student Visa (formerly Tier 4)",
    processingTime: "3 to 6 Weeks",
    fundsRequired:
      "Proof of tuition fees + maintenance funds: £1,334/month (London) or £1,023/month (outside London) for 9 months",
    workPermitHours: "Up to 20 hours/week during term; Full-time during vacations",
    postStudyWorkVisa: "Graduate Route Visa — 2 years (Bachelor's/Master's) or 3 years (PhD)",
    steps: [
      {
        stepNumber: 1,
        title: "Receive CAS from University",
        description:
          "After accepting your unconditional offer, the university issues a Confirmation of Acceptance for Studies (CAS) — your unique visa reference number.",
      },
      {
        stepNumber: 2,
        title: "Prepare Financial Evidence",
        description:
          "Show sufficient funds covering tuition + living costs held in your account for at least 28 consecutive days before application.",
      },
      {
        stepNumber: 3,
        title: "Apply Online & Pay IHS",
        description:
          "Complete the online Student Visa application, pay the visa fee (~£490) and the Immigration Health Surcharge (IHS, ~£776/year) for NHS access.",
      },
      {
        stepNumber: 4,
        title: "Attend Biometrics Appointment",
        description:
          "Visit a Visa Application Centre (VAC) to submit your biometrics (fingerprints and photograph) and supporting documents.",
      },
      {
        stepNumber: 5,
        title: "Receive Visa & Travel to UK",
        description:
          "Upon approval, collect your vignette sticker (valid 90 days) and collect your Biometric Residence Permit (BRP) within 10 days of arriving in the UK.",
      },
    ],
  },
  faqs: [
    {
      question: "How long does a Master's degree take in the UK?",
      answer:
        "Most taught Master's programs (MSc, MA, MBA) in the UK are just 1 year long — significantly shorter than the typical 2-year programs in the US, Canada, or Australia. This means lower total tuition and living costs.",
    },
    {
      question: "Can I work while studying in the UK?",
      answer:
        "Yes. International students on a Student Visa can work up to 20 hours per week during term time and full-time during official university holiday periods.",
    },
    {
      question: "What is the Graduate Route visa?",
      answer:
        "The Graduate Route allows international students to stay and work (or look for work) in the UK for 2 years after completing a Bachelor's or Master's degree, or 3 years after a PhD — no employer sponsorship needed.",
    },
    {
      question: "What English language scores are required?",
      answer:
        "Most UK universities require IELTS 6.0 - 7.0 (or equivalent TOEFL/PTE scores). Some universities accept alternative evidence such as an English-medium undergraduate degree or pre-sessional courses.",
    },
    {
      question: "How much does it cost to live in the UK as a student?",
      answer:
        "Monthly living costs range from £1,000 to £1,500 outside London, and £1,300 to £2,000 in London. This covers accommodation, food, transport, and personal expenses. University halls are often the most affordable housing option in the first year.",
    },
    {
      question: "How does HighEd help with UK university applications?",
      answer:
        "HighEd provides free counseling, university shortlisting, UCAS/direct application support, SOP and LOR guidance, scholarship applications, and Student Visa preparation for UK-bound students.",
    },
  ],
  testimonial: {
    studentName: "Sneha Mukherjee",
    university: "University of Manchester",
    course: "MSc International Business",
    country: "UK",
    rating: 5,
    quote: "HighEd made my UK admissions seamless. They helped me craft a compelling statement of purpose and managed my CAS and visa documents flawlessly.",
  },
};
