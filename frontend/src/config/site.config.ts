const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://highed-rho.vercel.app";
// Normalize site URL: strip trailing slash
const siteUrl = rawSiteUrl.replace(/\/+$/, "");

export const siteConfig = {
  name: "HighEd",
  legalName: "HighEd Overseas Education Advisory",
  tagline: "Study Abroad Consultants & Global Education Advisory in Tamil Nadu",
  description:
    "Study abroad counselling, university admissions, scholarships, education loan guidance, and student visa advisory for students in Tamil Nadu.",
  url: siteUrl,
  ogImage: `${siteUrl}/images/brand/og-image.jpg`,
  links: {
    twitter: "https://twitter.com/highed",
    instagram: "https://instagram.com/highed",
    linkedin: "https://linkedin.com/company/highed",
  },
  contact: {
    phone: "+919043982424",
    formattedPhone: "+91 90439 82424",
    email: "admissions@highed.in",
    address:
      "1st Floor, 11, 1st St, Venus Colony, CIT Nagar, Saidapet, Chennai, Tamil Nadu 600017",
    addressDetails: {
      streetAddress:
        "1st Floor, 11, 1st St, Venus Colony, CIT Nagar, Saidapet",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600017",
      addressCountry: "IN",
    },
  },
  destinations: [
    "USA",
    "UK",
    "Canada",
    "Australia",
    "Germany",
    "Ireland",
    "Dubai",
  ],
  targetCities: [
    "Chennai",
    "Coimbatore",
    "Vellore",
    "Tirupathi",
    "Thiruvallur",
  ],
  offices: [
    {
      city: "Chennai",
      slug: "chennai",
      name: "HighEd Chennai Head Office",
      hasPhysicalOffice: true,
      address:
        "1st Floor, 11, 1st St, Venus Colony, CIT Nagar, Saidapet, Chennai, Tamil Nadu 600017",
      phone: "+919043982424",
      email: "admissions@highed.in",
      openingHours: ["Mo-Sa 09:30-18:30"],
    },
    {
      city: "Coimbatore",
      slug: "coimbatore",
      name: "HighEd Coimbatore Counselling Desk",
      hasPhysicalOffice: false,
    },
    {
      city: "Vellore",
      slug: "vellore",
      name: "HighEd Vellore Counselling Desk",
      hasPhysicalOffice: false,
    },
    {
      city: "Tirupathi",
      slug: "tirupathi",
      name: "HighEd Tirupathi Counselling Desk",
      hasPhysicalOffice: false,
    },
    {
      city: "Thiruvallur",
      slug: "thiruvallur",
      name: "HighEd Thiruvallur Counselling Desk",
      hasPhysicalOffice: false,
    },
  ],
};

