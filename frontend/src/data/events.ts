export interface EventSpeaker {
  name: string;
  role: string;
  org: string;
}

export interface EventItem {
  id: string;
  title: string;
  type: "Education Fair" | "Webinar" | "Admissions Day" | "Visa Workshop" | "Conclave";
  status: "upcoming" | "past";
  date: string;
  time: string;
  location: string;
  city: "Chennai" | "Coimbatore" | "Tirupathi" | "Online";
  isOnline: boolean;
  image: string;
  shortDescription: string;
  highlights: string[];
  attendees?: string;
  spotOffers?: string;
  speakers?: EventSpeaker[];
  recap?: {
    summary: string;
    keyOutcomes: string[];
    participatingUnis: string[];
  };
}

export interface EventExpert {
  id: string;
  name: string;
  role: string;
  organization: string;
  country: string;
  image: string;
  specialty: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "1-on-1 Sessions" | "Delegate Conclave" | "Pre-Departure" | "Fairs";
  image: string;
  location: string;
  date: string;
}

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: "global-fair-chennai-2026",
    title: "Global Higher Education Conclave & Spot Admissions 2026",
    type: "Education Fair",
    status: "upcoming",
    date: "October 18, 2026",
    time: "10:30 AM – 5:30 PM IST",
    location: "HighEd Flagship Centre, Saidapet, Chennai",
    city: "Chennai",
    isOnline: false,
    image: "/images/events/global-fair-banner.jpg",
    shortDescription:
      "Direct 1-on-1 face time with official admission delegates from 40+ accredited universities across UK, USA, Canada, Australia, and Germany.",
    highlights: ["On-Spot Profile Assessment", "100% Application Fee Waiver", "Up to ₹50L Scholarships"],
    speakers: [
      { name: "Dr. Edward Collins", role: "International Dean", org: "Russell Group Representative" },
      { name: "Priya Ramanathan", role: "Chief Visa Strategist", org: "HighEd Advisory" },
    ],
  },
  {
    id: "usa-stem-opt-webinar-2026",
    title: "USA STEM Master's & 3-Year OPT Work Authorization Masterclass",
    type: "Webinar",
    status: "upcoming",
    date: "November 5, 2026",
    time: "6:00 PM – 7:30 PM IST",
    location: "Live Interactive Session via Zoom",
    city: "Online",
    isOnline: true,
    image: "/images/events/webinar-masterclass.jpg",
    shortDescription:
      "Strategic roadmap for Fall 2027 aspirants: GRE waiver programs, graduate assistantships, tuition discounts, and H-1B transition paths.",
    highlights: ["GRE Waivers Decoded", "Assistantships & Fellowships", "Interactive Q&A Session"],
    speakers: [
      { name: "Marcus Jenkins", role: "North American Admissions Specialist", org: "US Universities Consortium" },
    ],
  },
  {
    id: "spot-admissions-coimbatore-2026",
    title: "Australia & UK Spot Evaluation Day – Coimbatore",
    type: "Admissions Day",
    status: "upcoming",
    date: "November 22, 2026",
    time: "11:00 AM – 4:00 PM IST",
    location: "HighEd Counselling Centre, Coimbatore",
    city: "Coimbatore",
    isOnline: false,
    image: "/images/events/spot-admissions-day.jpg",
    shortDescription:
      "Bring academic transcripts for expedited conditional offer letter issuance in 48 hours for top Group of Eight and UK Russell Group institutions.",
    highlights: ["48-Hour Fast-Track Offers", "Simplified Visa Check", "One-on-One Counselling"],
    speakers: [
      { name: "Sarah Jenkins", role: "Regional Admissions Officer", org: "Go8 Alliance Liaison" },
    ],
  },
  {
    id: "germany-aps-tirupathi-2026",
    title: "Germany Tuition-Free Education & APS Certification Seminar",
    type: "Conclave",
    status: "upcoming",
    date: "December 6, 2026",
    time: "10:00 AM – 2:00 PM IST",
    location: "HighEd Centre, Tirupathi",
    city: "Tirupathi",
    isOnline: false,
    image: "/images/about/frame-536.webp",
    shortDescription:
      "Navigate public German university requirements, APS verification documents, blocked account procedures, and English-taught Master's degrees.",
    highlights: ["Zero-Tuition Public Unis", "APS Verification Guide", "Blocked Account Advice"],
    speakers: [
      { name: "Klaus Hoffmann", role: "Senior European Education Advisor", org: "DAAD Alumni Panel" },
    ],
  },
  {
    id: "uk-visa-interview-webinar-2026",
    title: "UK & Canada Student Visa Fast-Track & Financial Vetting",
    type: "Webinar",
    status: "upcoming",
    date: "December 15, 2026",
    time: "5:00 PM – 6:30 PM IST",
    location: "Virtual Broadcast via Zoom",
    city: "Online",
    isOnline: true,
    image: "/images/blog/UK Graduate Route 2Year Post Study Work Visa Explained.webp",
    shortDescription:
      "Comprehensive walkthrough on CAS letters, PAL guidelines, maintenance funds, financial affidavits, and consular mock questions.",
    highlights: ["98.4% Visa Success Strategy", "CAS & PAL Preparation", "Document Checklist PDF"],
    speakers: [
      { name: "Priya Ramanathan", role: "Head of Visa Compliance", org: "HighEd Legal Advisory" },
    ],
  },
];

export const PAST_EVENTS: EventItem[] = [
  {
    id: "past-uk-russell-group-2026",
    title: "UK Russell Group Spring Admissions Summit 2026",
    type: "Education Fair",
    status: "past",
    date: "August 24, 2026",
    time: "10:00 AM – 5:00 PM IST",
    location: "HighEd Flagship Centre, Chennai",
    city: "Chennai",
    isOnline: false,
    image: "/images/about/frame-537.webp",
    shortDescription:
      "Over 450 students and parents met with 28 UK university delegates for direct document appraisal and conditional admission approvals.",
    highlights: ["450+ Attendees", "112 Spot Offer Letters", "£1.2M Total Scholarships Granted"],
    attendees: "450+ Attendees",
    spotOffers: "112 Spot Offers",
    recap: {
      summary:
        "The Spring 2026 UK Admissions Summit was HighEd's largest British university conclave of the season. Delegates from prestigious institutions conducted on-spot assessments, cleared credential verification, and granted merit fee discounts.",
      keyOutcomes: [
        "112 students secured on-spot conditional offer letters",
        "£1,200,000 in total scholarship vouchers conferred",
        "100% application fee waivers granted to all attendees",
        "Comprehensive CAS document validation completed on-site",
      ],
      participatingUnis: [
        "University of Bristol",
        "University of Glasgow",
        "Queen Mary University of London",
        "University of Birmingham",
        "University of Southampton",
        "Newcastle University",
      ],
    },
  },
  {
    id: "past-germany-tech-2026",
    title: "Germany TU9 & Public Universities Master's Symposium",
    type: "Webinar",
    status: "past",
    date: "July 12, 2026",
    time: "6:00 PM – 8:00 PM IST",
    location: "Virtual Webinar Broadcast",
    city: "Online",
    isOnline: true,
    image: "/images/whychooseus/ChatGPT Image Sep 24, 2026, 12_21_45 PM.webp",
    shortDescription:
      "A deep-dive technical briefing on APS certification protocols, English-language Master's in Data/AI/Mechanical, and student work rights.",
    highlights: ["620+ Virtual Attendees", "APS Step-by-Step Guide", "Blocked Account FAQs"],
    attendees: "620+ Attendees",
    spotOffers: "APS Roadmap Provided",
    recap: {
      summary:
        "An intensive 2-hour virtual masterclass breaking down the latest German consulate APS rules, blocked account deposit thresholds for 2026/2027, and English-taught Master's admissions strategies.",
      keyOutcomes: [
        "Full walkthrough of the new APS digital certificate workflow",
        "Curated roster of 65+ zero-tuition English Master's programs",
        "Live Q&A covering blocked accounts (Expatrio / Fintiba) and health coverage",
        "Free SOP framework distributed to all 620 participants",
      ],
      participatingUnis: [
        "Technical University of Munich (TUM)",
        "RWTH Aachen University",
        "TU Berlin",
        "University of Stuttgart",
        "Heidelberg University",
      ],
    },
  },
  {
    id: "past-canada-visa-summit-2026",
    title: "Canada Student Direct Stream (SDS) & PGWP Conclave",
    type: "Admissions Day",
    status: "past",
    date: "June 18, 2026",
    time: "11:00 AM – 4:00 PM IST",
    location: "HighEd Centre, Coimbatore",
    city: "Coimbatore",
    isOnline: false,
    image: "/images/CTA/ChatGPT Image Sep 18, 2026, 10_29_22 PM.webp",
    shortDescription:
      "Essential updates on IRCC student visa regulations, Provincial Attestation Letters (PAL), GIC requirements, and Post-Graduation Work Permits.",
    highlights: ["280+ Attendees", "PAL Clarification Session", "GIC Assistance Desk"],
    attendees: "280+ Attendees",
    spotOffers: "42 Offer Validations",
    recap: {
      summary:
        "Our legal and immigration advisory team delivered critical clarity on the new Canadian immigration quotas, PAL requirements, and high-demand university programs with guaranteed PGWP eligibility.",
      keyOutcomes: [
        "PAL allocation process explained for Ontario, BC, and Alberta",
        "GIC banking coordination with Scotiabank & CIBC representatives",
        "42 students received validated admission fast-track letters",
        "1-on-1 financial solvency reviews for all student files",
      ],
      participatingUnis: [
        "University of Windsor",
        "York University",
        "Memorial University",
        "Concordia University",
        "University of Manitoba",
      ],
    },
  },
];

export const INDUSTRY_EXPERTS: EventExpert[] = [
  {
    id: "expert-collins",
    name: "Dr. Edward Collins",
    role: "Dean of International Admissions",
    organization: "Russell Group Global Consortium",
    country: "United Kingdom",
    image: "/images/stories/story-1.webp",
    specialty: "STEM & Business Admissions, Tier 4 / Student Route Vetting",
  },
  {
    id: "expert-ramanathan",
    name: "Meera Ramanathan",
    role: "Head of Visa Compliance & Policy",
    organization: "HighEd Global Advisory",
    country: "India & Global",
    image: "/images/stories/story-2.webp",
    specialty: "98.4% Visa Clearance, Consular Mock Interviews, Financial Audits",
  },
  {
    id: "expert-jenkins",
    name: "Marcus Jenkins",
    role: "Senior Director of Academic Relations",
    organization: "North American Universities Alliance",
    country: "USA & Canada",
    image: "/images/stories/story-3.webp",
    specialty: "GRE/GMAT Waivers, STEM OPT 3-Year Extensions, Assistantships",
  },
  {
    id: "expert-hoffmann",
    name: "Klaus Hoffmann",
    role: "European Higher Education Fellow",
    organization: "German Universities Network (DAAD Alum)",
    country: "Germany",
    image: "/images/stories/story-4.webp",
    specialty: "Public Zero-Tuition Admissions, APS Certification, Blocked Accounts",
  },
];

export const MEETING_GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "1-on-1 Academic Profile Assessment & University Mapping",
    category: "1-on-1 Sessions",
    image: "/images/about/frame-536.webp",
    location: "HighEd Flagship Centre, Chennai",
    date: "September 2026",
  },
  {
    id: "gal-2",
    title: "UK University Delegate Round Table & Admissions Review",
    category: "Delegate Conclave",
    image: "/images/about/frame-537.webp",
    location: "Executive Briefing Room, Chennai",
    date: "August 2026",
  },
  {
    id: "gal-3",
    title: "Fall 2026 Pre-Departure Briefing & Student Welcome Kit",
    category: "Pre-Departure",
    image: "/images/whychooseus/ChatGPT Image Sep 24, 2026, 12_21_45 PM.webp",
    location: "HighEd Centre, Coimbatore",
    date: "July 2026",
  },
  {
    id: "gal-4",
    title: "High-Commission Student Visa Simulation & Mock Drills",
    category: "1-on-1 Sessions",
    image: "/images/CTA/ChatGPT Image Sep 18, 2026, 10_29_22 PM.webp",
    location: "HighEd Visa Lab, Tirupathi",
    date: "June 2026",
  },
  {
    id: "gal-5",
    title: "Annual Global Education Conclave Main Hall Exhibition",
    category: "Fairs",
    image: "/images/events/global-fair-banner.jpg",
    location: "Convention Grand Hall, Chennai",
    date: "May 2026",
  },
  {
    id: "gal-6",
    title: "Spot Offer Issuance & Scholarship Appraisal Desk",
    category: "Fairs",
    image: "/images/events/spot-admissions-day.jpg",
    location: "Admissions Lounge, Coimbatore",
    date: "April 2026",
  },
];
