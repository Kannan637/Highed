import { Country } from "@/types/country";

export const canada: Country = {
  slug: "canada",
  name: "Canada",
  code: "CA",
  title: "Study in Canada from India | Universities & Visa",
  tagline:
    "Affordable tuition, multicultural campuses, 3-year PGWP, and one of the world's most immigrant-friendly PR pathways.",
  description:
    "Canada has emerged as one of the top three study destinations globally, welcoming over 800,000 international students. Known for affordable tuition compared to the US and UK, Canada offers world-class universities, a safe and inclusive society, and the Post-Graduation Work Permit (PGWP) allowing up to 3 years of full-time work after graduation. Canada's Express Entry immigration system provides a direct pathway from student → worker → permanent resident, making it ideal for students seeking long-term settlement.",
  heroImage: "/images/countries/study-in-canada.webp",
  flag: "🇨🇦",
  currency: "CAD (Canadian Dollar)",
  capital: "Ottawa",
  language: ["English", "French"],
  intakes: [
    {
      season: "Fall Intake",
      months: "September",
      deadline: "January - April",
      type: "Major",
    },
    {
      season: "Winter Intake",
      months: "January",
      deadline: "June - September",
      type: "Major",
    },
    {
      season: "Summer Intake",
      months: "May",
      deadline: "November - February",
      type: "Minor",
    },
  ],
  whyStudy: [
    {
      title: "Affordable World-Class Education",
      description:
        "Canadian tuition fees are 30-50% lower than the US and UK, with average annual tuition of CAD 20,000 - 35,000 for international students at globally ranked universities.",
      icon: "tax",
    },
    {
      title: "3-Year Post-Graduation Work Permit",
      description:
        "Graduates from programs of 2+ years receive a 3-year open work permit (PGWP) — no employer sponsorship needed — to gain Canadian work experience.",
      icon: "visa",
    },
    {
      title: "Direct Pathway to Permanent Residency",
      description:
        "Canadian work experience earned under PGWP qualifies for Express Entry CRS points, making Canada the most accessible PR pathway for international students worldwide.",
      icon: "star",
    },
    {
      title: "Safe, Inclusive & Multicultural Society",
      description:
        "Ranked #1 globally for quality of life, Canada is one of the safest and most welcoming countries with universal healthcare, low crime rates, and official multiculturalism policies.",
      icon: "shield",
    },
    {
      title: "Co-op & Internship Opportunities",
      description:
        "Many Canadian programs include mandatory co-op terms (paid work placements with companies like Shopify, RBC, and Bombardier), providing real industry experience before graduation.",
      icon: "growth",
    },
    {
      title: "Bilingual Advantage",
      description:
        "Study in English or French (or both). Quebec's lower tuition rates and bilingual programs offer unique career advantages in international organizations and government.",
      icon: "building",
    },
  ],
  universitiesList: [
    {
      name: "University of Toronto",
      location: "Toronto, Ontario",
      ranking: "#21 QS World Rankings",
      tuitionRange: "CAD 45,000 - 65,000 / year",
      popularPrograms: ["Computer Science", "Engineering", "Business", "Life Sciences"],
    },
    {
      name: "University of British Columbia (UBC)",
      location: "Vancouver, British Columbia",
      ranking: "#34 QS World Rankings",
      tuitionRange: "CAD 40,000 - 55,000 / year",
      popularPrograms: ["Forestry", "Computer Science", "Mining Engineering", "Psychology"],
    },
    {
      name: "McGill University",
      location: "Montreal, Quebec",
      ranking: "#30 QS World Rankings",
      tuitionRange: "CAD 25,000 - 50,000 / year",
      popularPrograms: ["Medicine", "Law", "Music", "Political Science"],
    },
    {
      name: "University of Waterloo",
      location: "Waterloo, Ontario",
      ranking: "#112 QS World Rankings",
      tuitionRange: "CAD 40,000 - 55,000 / year",
      popularPrograms: ["Software Engineering", "Mechatronics", "Actuarial Science", "Quantum Computing"],
    },
    {
      name: "University of Alberta",
      location: "Edmonton, Alberta",
      ranking: "#111 QS World Rankings",
      tuitionRange: "CAD 28,000 - 40,000 / year",
      popularPrograms: ["AI & Machine Learning", "Petroleum Engineering", "Agriculture", "Pharmacy"],
    },
    {
      name: "University of Montreal (UdeM)",
      location: "Montreal, Quebec",
      ranking: "#141 QS World Rankings",
      tuitionRange: "CAD 20,000 - 35,000 / year",
      popularPrograms: ["Deep Learning (Mila)", "Law", "Veterinary Medicine", "Criminology"],
    },
  ],
  coursesList: [
    {
      name: "Computer Science & AI",
      level: "Postgraduate",
      duration: "1.5 - 2 Years",
      averageFee: "CAD 35,000 - 55,000 / year",
      careerProspects: ["Software Developer", "ML Engineer", "Cloud Architect", "DevOps Lead"],
    },
    {
      name: "MBA & Business Analytics",
      level: "Postgraduate",
      duration: "1 - 2 Years",
      averageFee: "CAD 30,000 - 60,000 / year",
      careerProspects: ["Management Consultant", "Business Analyst", "Operations Director", "Entrepreneur"],
    },
    {
      name: "Nursing & Healthcare",
      level: "Undergraduate",
      duration: "4 Years",
      averageFee: "CAD 25,000 - 40,000 / year",
      careerProspects: ["Registered Nurse", "Nurse Practitioner", "Healthcare Administrator", "Clinical Researcher"],
    },
    {
      name: "Civil & Environmental Engineering",
      level: "Undergraduate",
      duration: "4 Years (with co-op)",
      averageFee: "CAD 35,000 - 50,000 / year",
      careerProspects: ["Structural Engineer", "Environmental Consultant", "Project Manager", "Urban Planner"],
    },
    {
      name: "Data Science & Statistics",
      level: "Postgraduate",
      duration: "1 - 2 Years",
      averageFee: "CAD 30,000 - 45,000 / year",
      careerProspects: ["Data Scientist", "Quantitative Analyst", "Research Scientist", "BI Developer"],
    },
    {
      name: "Supply Chain & Logistics Management",
      level: "Postgraduate",
      duration: "1 Year",
      averageFee: "CAD 25,000 - 35,000 / year",
      careerProspects: ["Supply Chain Manager", "Logistics Coordinator", "Procurement Lead", "Operations Analyst"],
    },
  ],
  costDetails: {
    tuitionMin: "CAD 18,000",
    tuitionMax: "CAD 55,000",
    livingCostMonthly: "CAD 1,000 - 1,800",
    accommodationMonthly: "CAD 600 - 1,200",
    foodAndTransportMonthly: "CAD 300 - 500",
  },
  scholarshipsList: [
    {
      name: "Vanier Canada Graduate Scholarships",
      amount: "CAD 50,000 / year for 3 years",
      eligibility: "Doctoral students with exceptional research potential and leadership",
      coverage: "Fully funded PhD research at any Canadian university",
    },
    {
      name: "Lester B. Pearson International Scholarships (U of T)",
      amount: "Full Tuition + Books + Living (4 Years)",
      eligibility: "Exceptional international students nominated by their school",
      coverage: "Full undergraduate funding at the University of Toronto",
    },
    {
      name: "Ontario Graduate Scholarship (OGS)",
      amount: "CAD 15,000 / year",
      eligibility: "Graduate students with strong academic standing at Ontario universities",
      coverage: "1-year renewable scholarship for Master's or PhD students",
    },
    {
      name: "University Entrance Scholarships",
      amount: "CAD 3,000 - 30,000",
      eligibility: "High academic performance, varying by university",
      coverage: "Automatic or application-based awards across Canadian universities",
    },
  ],
  visaDetails: {
    visaType: "Canadian Study Permit",
    processingTime: "4 to 12 Weeks",
    fundsRequired:
      "Proof of tuition for first year + CAD 20,635 (or CAD 25,690 in Quebec) for living expenses",
    workPermitHours: "Up to 20 hours/week during sessions; Full-time during scheduled breaks",
    postStudyWorkVisa: "PGWP — 8 months to 3 years (matching program length) → Express Entry PR",
    steps: [
      {
        stepNumber: 1,
        title: "Receive Letter of Acceptance from DLI",
        description:
          "Obtain an acceptance letter from a Designated Learning Institution (DLI). Verify the institution's DLI number for study permit eligibility.",
      },
      {
        stepNumber: 2,
        title: "Gather Financial & Supporting Documents",
        description:
          "Prepare proof of funds, passport, acceptance letter, academic transcripts, language test scores, and Statement of Purpose.",
      },
      {
        stepNumber: 3,
        title: "Apply Online via IRCC Portal",
        description:
          "Create a GCKey account on the IRCC website, complete the study permit application, upload documents, and pay the CAD 150 application fee.",
      },
      {
        stepNumber: 4,
        title: "Biometrics & Medical Exam",
        description:
          "Attend a biometrics appointment at a designated VAC. Complete a medical exam if required (depends on country of residence and duration of stay).",
      },
      {
        stepNumber: 5,
        title: "Receive Study Permit & Travel to Canada",
        description:
          "Upon approval, receive a Port of Entry (POE) letter. Present it with your passport to a Canadian border officer upon arrival to receive your study permit.",
      },
    ],
  },
  faqs: [
    {
      question: "Can I get permanent residency in Canada after studying?",
      answer:
        "Yes! Canada offers one of the clearest student-to-PR pathways. After completing a 2+ year program and working for 1 year under PGWP, you accumulate Comprehensive Ranking System (CRS) points for Express Entry, with most graduates qualifying for PR within 1-2 years of graduation.",
    },
    {
      question: "What is a PGWP and how long is it valid?",
      answer:
        "The Post-Graduation Work Permit (PGWP) is an open work permit that allows international graduates to work for any employer in Canada. Duration matches your program length: 8 months for short programs, up to 3 years for programs of 2+ years.",
    },
    {
      question: "Can I work while studying in Canada?",
      answer:
        "Yes. Study permit holders at designated institutions can work up to 20 hours/week during regular academic sessions and full-time during scheduled breaks (summer, winter holidays). Co-op work terms are also permitted with a co-op work permit.",
    },
    {
      question: "Is Canada cheaper than the US and UK for studying?",
      answer:
        "Generally yes. Average tuition in Canada is CAD 20,000 - 35,000 / year for international students, compared to USD 45,000 - 60,000 in the US and GBP 20,000 - 35,000 in the UK. Living costs are also lower in most Canadian cities compared to major US/UK cities.",
    },
    {
      question: "What English test scores are needed for Canadian universities?",
      answer:
        "Most Canadian universities require IELTS 6.0 - 6.5 (or equivalent TOEFL 80-90). Some programs accept Duolingo English Test (DET) scores of 105+. French-language programs may require a TEF/TCF score instead.",
    },
    {
      question: "How does HighEd help with Canadian university applications?",
      answer:
        "HighEd provides free end-to-end counseling for Canada-bound students: university shortlisting, SOP/LOR assistance, scholarship applications, study permit preparation, and pre-departure support.",
    },
  ],
  testimonial: {
    studentName: "Rohan Verma",
    university: "University of Toronto",
    course: "BSc Computer Science",
    country: "Canada",
    rating: 5,
    quote: "Navigating Canadian study permits and SDS application requirements was effortless with HighEd. I was admitted to my dream program with an entrance scholarship.",
  },
};
