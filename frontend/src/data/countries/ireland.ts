import { Country } from "@/types/country";

export const ireland: Country = {
  slug: "ireland",
  name: "Ireland",
  code: "IE",
  title: "Study in Ireland from India | Universities & Visa",
  tagline:
    "English-speaking European destination with world-class universities, a 2-year Stay Back visa, and thriving tech & pharma industries.",
  description:
    "Ireland has become one of the fastest-growing study destinations for Indian students, offering internationally recognized degrees from prestigious universities like Trinity College Dublin, University College Dublin, and the National University of Ireland Galway. As the European headquarters for Google, Apple, Meta, and Pfizer, Ireland provides exceptional post-study career opportunities. The 2-year Stay Back visa (Third Level Graduate Programme) allows graduates to work in Ireland after completing their degree, with pathways to long-term employment permits and EU residency.",
  heroImage: "/images/countries/study-in-ireland.webp",
  flag: "🇮🇪",
  currency: "EUR (Euro)",
  capital: "Dublin",
  language: ["English", "Irish"],
  intakes: [
    {
      season: "Autumn Intake",
      months: "September - October",
      deadline: "January - June",
      type: "Major",
    },
    {
      season: "Spring Intake",
      months: "January - February",
      deadline: "August - October",
      type: "Minor",
    },
  ],
  whyStudy: [
    {
      title: "English-Speaking European Destination",
      description:
        "Ireland is the only English-speaking country in the EU, eliminating language barriers while giving students access to the entire European job market and Schengen area.",
      icon: "building",
    },
    {
      title: "2-Year Stay Back Visa",
      description:
        "The Third Level Graduate Programme allows graduates to remain in Ireland for up to 2 years to find employment, with pathways to Critical Skills Employment Permits.",
      icon: "star",
    },
    {
      title: "Global Tech & Pharma Hub",
      description:
        "Ireland is the European headquarters for 9 of the top 10 global tech companies and 8 of the top 10 pharma companies, offering unparalleled internship and career opportunities.",
      icon: "growth",
    },
    {
      title: "Affordable Compared to UK & USA",
      description:
        "Tuition fees range from €10,000 to €25,000 per year — significantly lower than comparable programs in the UK and USA — with generous scholarship opportunities for Indian students.",
      icon: "scholarship",
    },
    {
      title: "Safe, Welcoming & Multicultural",
      description:
        "Ireland consistently ranks among the safest countries in the world. Its famously warm culture and growing Indian community make it an ideal destination for students from India.",
      icon: "shield",
    },
    {
      title: "Globally Recognized Qualifications",
      description:
        "Irish universities are ranked in the top 1% worldwide (QS Rankings), and Irish degrees are recognized across the EU, UK, USA, and globally for both employment and further study.",
      icon: "growth",
    },
  ],
  universitiesList: [
    {
      name: "Trinity College Dublin (TCD)",
      location: "Dublin",
      ranking: "#81 QS World Rankings",
      tuitionRange: "€18,000 - €25,000 / year",
      popularPrograms: ["Computer Science", "Business", "Law", "Engineering"],
    },
    {
      name: "University College Dublin (UCD)",
      location: "Dublin",
      ranking: "#126 QS World Rankings",
      tuitionRange: "€16,000 - €24,000 / year",
      popularPrograms: ["Data Science", "Finance", "Biomedical Engineering", "Public Policy"],
    },
    {
      name: "National University of Ireland, Galway (NUIG)",
      location: "Galway",
      ranking: "#270 QS World Rankings",
      tuitionRange: "€14,000 - €20,000 / year",
      popularPrograms: ["Marine Science", "Biomedical Science", "Human Rights Law", "Engineering"],
    },
    {
      name: "University College Cork (UCC)",
      location: "Cork",
      ranking: "#292 QS World Rankings",
      tuitionRange: "€14,000 - €22,000 / year",
      popularPrograms: ["Pharmacy", "Food Science", "Computer Science", "Business Analytics"],
    },
    {
      name: "Dublin City University (DCU)",
      location: "Dublin",
      ranking: "#436 QS World Rankings",
      tuitionRange: "€12,000 - €18,000 / year",
      popularPrograms: ["Communications", "Computing", "Biotechnology", "Education"],
    },
    {
      name: "University of Limerick (UL)",
      location: "Limerick",
      ranking: "#500 QS World Rankings",
      tuitionRange: "€12,000 - €18,000 / year",
      popularPrograms: ["Software Engineering", "Sports Science", "Business", "Aeronautical Engineering"],
    },
  ],
  coursesList: [
    {
      name: "Computer Science & Data Analytics",
      level: "Postgraduate",
      duration: "1 - 2 Years",
      averageFee: "€15,000 - €25,000 / year",
      careerProspects: ["Software Engineer", "Data Scientist", "ML Engineer", "Cloud Architect"],
    },
    {
      name: "Business Analytics & Finance",
      level: "Postgraduate",
      duration: "1 Year",
      averageFee: "€15,000 - €22,000 / year",
      careerProspects: ["Financial Analyst", "Business Intelligence Analyst", "Risk Manager", "Consultant"],
    },
    {
      name: "Pharmaceutical Sciences",
      level: "Postgraduate",
      duration: "1 - 2 Years",
      averageFee: "€16,000 - €24,000 / year",
      careerProspects: ["Pharmaceutical Scientist", "Regulatory Affairs", "QA Manager", "Clinical Research"],
    },
    {
      name: "Engineering (Mechanical / Electrical / Civil)",
      level: "Undergraduate",
      duration: "4 Years",
      averageFee: "€14,000 - €22,000 / year",
      careerProspects: ["Design Engineer", "Project Manager", "R&D Engineer", "Sustainability Consultant"],
    },
    {
      name: "Artificial Intelligence & Machine Learning",
      level: "Postgraduate",
      duration: "1 - 1.5 Years",
      averageFee: "€16,000 - €25,000 / year",
      careerProspects: ["AI Engineer", "NLP Researcher", "Computer Vision Engineer", "MLOps Engineer"],
    },
    {
      name: "Biotechnology & Biomedical Science",
      level: "Postgraduate",
      duration: "1 - 2 Years",
      averageFee: "€14,000 - €20,000 / year",
      careerProspects: ["Biotech Researcher", "Lab Manager", "Genetic Analyst", "Medical Device Engineer"],
    },
  ],
  costDetails: {
    tuitionMin: "€10,000",
    tuitionMax: "€25,000",
    livingCostMonthly: "€800 - €1,500",
    accommodationMonthly: "€500 - €1,200",
    foodAndTransportMonthly: "€300 - €500",
  },
  scholarshipsList: [
    {
      name: "Government of Ireland International Education Scholarships",
      amount: "€10,000 (one-year fee waiver)",
      eligibility: "Non-EU/EEA students with outstanding academic record",
      coverage: "Tuition fee reduction for one year of study at an Irish HEI",
    },
    {
      name: "Trinity College Dublin Global Excellence Scholarships",
      amount: "Up to €5,000 per year",
      eligibility: "High-achieving non-EU applicants",
      coverage: "Partial tuition fee reduction for the duration of the programme",
    },
    {
      name: "UCD Global Scholarships",
      amount: "50% - 100% tuition waiver",
      eligibility: "Outstanding academic merit, leadership, and extracurricular achievements",
      coverage: "Tuition fee reduction for undergraduate and postgraduate programmes",
    },
    {
      name: "Science Foundation Ireland (SFI) Research Fellowships",
      amount: "Full Funding (Tuition + Stipend)",
      eligibility: "PhD candidates in STEM fields at Irish universities",
      coverage: "Full tuition, monthly stipend, and research expenses for 3-4 years",
    },
  ],
  visaDetails: {
    visaType: "Stamp 2 Student Visa",
    processingTime: "4 to 8 Weeks",
    fundsRequired:
      "€10,000 in a bank account (or €7,000 if tuition already paid), proof of tuition payment, private medical insurance",
    workPermitHours: "Up to 20 hours/week during term; 40 hours/week during holidays (June-Sept, Dec 15-Jan 15)",
    postStudyWorkVisa: "Third Level Graduate Programme — 1 year (Level 8) or 2 years (Level 9/10) Stay Back Visa",
    steps: [
      {
        stepNumber: 1,
        title: "Receive Offer Letter from Irish University",
        description:
          "After acceptance, the university issues an official offer letter confirming your programme, tuition fees, and start date.",
      },
      {
        stepNumber: 2,
        title: "Pay Tuition Deposit & Arrange Finances",
        description:
          "Pay the university's tuition deposit (typically €5,000-€7,000) and ensure you have €10,000 in accessible funds for the visa application.",
      },
      {
        stepNumber: 3,
        title: "Apply for Irish Student Visa Online",
        description:
          "Submit the visa application through AVATS (online system) with passport, offer letter, financial proof, medical insurance, and English proficiency evidence.",
      },
      {
        stepNumber: 4,
        title: "Attend Visa Appointment at VFS Centre",
        description:
          "Submit biometrics and original documents at the nearest VFS Global centre in India. Processing typically takes 4-8 weeks.",
      },
      {
        stepNumber: 5,
        title: "Register with GNIB/IRP on Arrival",
        description:
          "Within 90 days of arrival in Ireland, register with the Garda National Immigration Bureau (GNIB) to receive your Irish Residence Permit (IRP) card.",
      },
    ],
  },
  faqs: [
    {
      question: "What exams are required to study in Ireland?",
      answer:
        "Most Irish universities accept IELTS (6.0-6.5) or TOEFL (80-90) for English proficiency. Unlike the USA, standardized tests like GRE/GMAT are not universally required — many programmes accept students based on academic transcripts and relevant experience.",
    },
    {
      question: "Can international students work while studying in Ireland?",
      answer:
        "Yes. Students on a Stamp 2 visa can work up to 20 hours per week during term time and up to 40 hours per week during holiday periods (June-September and December 15-January 15).",
    },
    {
      question: "What is the Stay Back visa in Ireland?",
      answer:
        "The Third Level Graduate Programme allows graduates to stay in Ireland after completing their degree — 1 year for Level 8 (Honours Bachelor's) and 2 years for Level 9/10 (Master's/PhD). This provides time to find employment and apply for a Critical Skills Employment Permit.",
    },
    {
      question: "How much does it cost to study in Ireland?",
      answer:
        "Tuition fees range from €10,000 to €25,000 per year depending on the university and programme. Living costs are approximately €800-€1,500 per month including accommodation. Ireland is significantly more affordable than the UK and USA for comparable quality education.",
    },
    {
      question: "Can I get a scholarship to study in Ireland?",
      answer:
        "Yes. The Government of Ireland offers International Education Scholarships worth €10,000, and individual universities like Trinity, UCD, and UCC offer merit-based scholarships covering up to 100% of tuition. HighEd helps match your profile to the best available scholarships.",
    },
    {
      question: "How do I apply to Irish universities through HighEd?",
      answer:
        "HighEd provides complete support: profile evaluation, university and course shortlisting, SOP and LOR guidance, application submission, scholarship filing, and Stamp 2 visa preparation — all at zero counselling cost.",
    },
  ],
  testimonial: {
    studentName: "Priya Krishnan",
    university: "Trinity College Dublin",
    course: "MSc in Computer Science",
    country: "Ireland",
    rating: 5,
    quote: "Ireland was not even on my radar until HighEd's counsellor recommended it. The tech ecosystem here is incredible — I had three job offers before my course ended. The 2-year Stay Back visa made all the difference.",
  },
};
