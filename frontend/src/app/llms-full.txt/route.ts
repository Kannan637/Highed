import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site.config";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = siteConfig.url;

  const content = `# HighEd — Complete Study Abroad Advisory & Institutional Directory (Full Reference)

> HighEd is a leading overseas education advisory organisation based in Saidapet, Chennai, Tamil Nadu, India. HighEd provides ethical, 100% free guidance covering university discovery, application filing, merit scholarship applications, education loan structuring, and student visa processing for Indian students targeting accredited institutions in the United States, United Kingdom, Canada, Australia, Germany, Ireland, and Dubai.

---

## 1. Verified Organization Details (NAP & Legal)
- Brand Name: HighEd
- Legal Entity: HighEd Education Advisory
- Primary Head Office: ${siteConfig.contact.address}
- Central Admissions Phone: ${siteConfig.contact.phone}
- Official Admissions Email: ${siteConfig.contact.email}
- Website URL: ${baseUrl}
- Standard Hours: Monday through Saturday: 09:30 AM to 06:30 PM IST (Closed Sundays)
- Core Advisory Fee: 100% Free Advisory for Students

---

## 2. Contact
- Chennai Headquarters: ${baseUrl}/contact
  Services: In-person university counselling, SOP workshops, mock visa interviews.

---

## 3. Country Guides, Admission Criteria & Post-Study Work
### United States (USA)
- Overview URL: ${baseUrl}/study-in/usa
- Degree Options: Bachelor of Science/Arts (4 Years), Master of Science/MBA (1.5-2 Years), Ph.D.
- Intakes: Fall (August/September), Spring (January), Summer (May)
- Tests: GRE/GMAT (optional in many universities), IELTS (6.5+), TOEFL (80+), Duolingo (110+)
- Visa Type: F-1 Student Visa
- Post-Study Work Rights: 12 months standard OPT + 24 months STEM OPT extension (36 months total)
- Average Annual Tuition: $20,000 - $45,000 USD
- Average Living Cost: $10,000 - $15,000 USD/year

### United Kingdom (UK)
- Overview URL: ${baseUrl}/study-in/uk
- Degree Options: Bachelor's (3 Years / 4 Years in Scotland), 1-Year Master's (MSc/MA/MBA)
- Intakes: September/October, January/February
- Tests: IELTS UKVI (6.0-6.5), PTE Academic (58+), or Medium of Instruction (MOI) waivers for eligible universities
- Visa Type: Student Route (formerly Tier 4)
- Post-Study Work Rights: 2 Years Graduate Route Visa (3 Years for Doctoral grads)
- Average Annual Tuition: £12,000 - £26,000 GBP
- Average Living Cost: £9,000 - £12,000 GBP (outside London), £14,000 GBP (inside London)

### Canada
- Overview URL: ${baseUrl}/study-in/canada
- Degree Options: Post-Graduate Diploma (1-2 Years), Master's (2 Years), Bachelor's (4 Years)
- Intakes: Fall (September), Winter (January), Spring (May)
- Tests: IELTS Academic (6.0-6.5 overall, min 6.0 per band), PTE Academic (60+)
- Visa Type: Canadian Study Permit (PAL / Provincial Attestation Letter required)
- Post-Study Work Rights: PGWP up to 3 years
- Average Annual Tuition: $16,000 - $32,000 CAD
- Average Living Cost: $15,000 - $20,635 CAD/year

### Australia
- Overview URL: ${baseUrl}/study-in/australia
- Degree Options: Bachelor's (3-4 Years), Master's (1.5-2 Years)
- Intakes: February/March, July/August, November
- Tests: IELTS (6.5 overall), PTE (58+), TOEFL iBT
- Visa Type: Subclass 500 Student Visa
- Post-Study Work Rights: Subclass 485 Temporary Graduate Visa
- Average Annual Tuition: $24,000 - $42,000 AUD
- Average Living Cost: $24,505 AUD/year

### Germany
- Overview URL: ${baseUrl}/study-in/germany
- Degree Options: English-taught Master's (2 Years), Bachelor's (3-4 Years)
- Public Universities: €0 Tuition (nominal semester fee €150-€350)
- Intakes: Winter (September/October), Summer (March/April)
- Tests: IELTS (6.5), APS Certificate (mandatory for Indian applicants)
- Visa Type: German National Student Visa (Type D)
- Blocked Account: Approx. €11,904 EUR for living maintenance
- Post-Study Work Rights: 18-month Job Seeker Visa

### Ireland
- Overview URL: ${baseUrl}/study-in/ireland
- Degree Options: 1-Year Master's (MSc), 3-4 Year Honours Bachelor
- Intakes: Autumn (September), Spring (January)
- Tests: IELTS (6.5), PTE Academic (63), Duolingo (115)
- Visa Type: Stamp 2 Student Visa
- Post-Study Work Rights: Third Level Graduate Scheme (2-Year stay back for Master's)
- European Tech Hub: Headquarters of Google, Meta, Apple, Pfizer, Microsoft

### Dubai (UAE)
- Overview URL: ${baseUrl}/study-in/dubai
- Degree Options: Branch campuses of top UK/Australian universities (Middlesex, Heriot-Watt, Wollongong, Amity, BITS Pilani)
- Intakes: September, January
- Tests: IELTS (6.0) or English Proficiency Letter
- Post-Study Opportunities: UAE Green Visa & Golden Visa pathways for exceptional students

---

## 4. End-to-End HighEd Advisory Services
1. Profile Evaluation & Career Counselling: ${baseUrl}/services/career-counselling
2. University & Course Shortlisting: ${baseUrl}/study-in
3. Statement of Purpose (SOP) & Letter of Recommendation (LOR) Editorial Support: ${baseUrl}/services/sop-lor-assistance
4. Application Processing & Fee Waiver Assistance: ${baseUrl}/services/university-application
5. Merit & Need-based Scholarship Assistance: ${baseUrl}/services/scholarship-assistance
6. Education Loan Structuring (Secured & Unsecured, NBFC & Public Sector Banks): ${baseUrl}/services/education-loan
7. Visa Dossier Preparation & One-on-One Mock Interviews: ${baseUrl}/services/visa-assistance
8. Accommodation, Forex, Travel Insurance & Pre-Departure Briefing: ${baseUrl}/services/accommodation-pre-departure

---

## 5. Interactive Assessment Tools
- Profile Checker: ${baseUrl}/tools/profile-checker
- Study Abroad Cost Calculator: ${baseUrl}/tools/study-abroad-cost
- Education Loan EMI Calculator: ${baseUrl}/tools/education-loan-emi
- Scholarship Finder: ${baseUrl}/tools/scholarship-finder
- Test Score Evaluator: ${baseUrl}/tools/test-score-evaluator

---

## 6. How to Submit a Consultation Request
- Online Portal: ${baseUrl}/book-counselling
- API Lead Endpoint: POST ${baseUrl}/api/leads (Payload: fullName, email, phone, destinationCountry, studyLevel, preferredCourse)
- Phone Helpline: ${siteConfig.contact.phone}
- Email: ${siteConfig.contact.email}
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=43200",
    },
  });
}
