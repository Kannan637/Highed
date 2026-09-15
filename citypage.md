# MASTER PROMPT — FIX CITY LANDING PAGES & LOCATION POSITIONING IN PRODUCTION

You are working on the **HighEd production website**.

Before making any changes, inspect and understand the existing codebase, especially:

* `frontend/src/app/(website)/best-study-consultant-in/[city]/page.tsx`
* `frontend/src/app/(website)/best-study-consultant-in/[city]/not-found.tsx`
* `frontend/src/data/cities/index.ts`
* `frontend/src/data/cities/chennai.ts`
* `frontend/src/data/cities/coimbatore.ts`
* `frontend/src/data/cities/tirupathi.ts`
* `frontend/src/data/cities/vellore.ts`
* `frontend/src/data/cities/thiruvallur.ts`
* `frontend/src/components/city/*`
* `frontend/src/app/(website)/contact/page.tsx`
* `frontend/src/components/layout/Footer.tsx`
* `frontend/src/components/layout/*`
* `frontend/src/config/site.config.ts`
* SEO metadata/schema files
* sitemap/robots configuration

The existing project already has dynamic city landing pages for Chennai, Coimbatore, Tirupathi, Vellore and Thiruvallur. Do NOT unnecessarily rebuild the architecture.

## 1. BUSINESS RULE — THIS IS NON-NEGOTIABLE

HighEd has **ONLY ONE PHYSICAL OFFICE: CHENNAI.**

There are NO physical HighEd offices/branches in:

* Coimbatore
* Tirupathi
* Vellore
* Thiruvallur

These four cities are **target/service markets**.

HighEd is targeting students from these locations through:

* Google Ads
* Meta Ads
* SEO
* Organic search
* Online counselling
* Phone counselling
* WhatsApp communication
* Remote application/visa guidance

The city landing pages exist primarily to capture users searching for terms such as:

* best study abroad consultant in Coimbatore
* study abroad consultant in Vellore
* overseas education consultant in Tirupathi
* study abroad consultant in Thiruvallur

Therefore:

**DO NOT REMOVE THE CITY LANDING PAGES.**

Instead, correct their positioning so they do not falsely imply that HighEd has a physical branch in those cities.

---

# 2. CORE POSITIONING

Use this distinction throughout the website:

### Chennai

Chennai = **physical office + service area**

Users can:

* visit the Chennai office
* attend in-person counselling
* receive online counselling
* call/WhatsApp the admissions team

### Coimbatore

Coimbatore = **target/service area only**

Users should be able to:

* receive online counselling
* receive phone/WhatsApp support
* apply through HighEd remotely
* communicate with the Chennai admissions team

Do NOT claim there is a Coimbatore office.

### Tirupathi

Tirupathi = **target/service area only**

Do NOT claim there is a Tirupathi office or branch.

### Vellore

Vellore = **target/service area only**

Do NOT claim there is a Vellore office or branch.

### Thiruvallur

Thiruvallur = **target/service area only**

Do NOT claim there is a Thiruvallur office or branch.

---

# 3. DO NOT DAMAGE SEO

This is extremely important.

Keep the existing URL architecture:

```text
/best-study-consultant-in/chennai
/best-study-consultant-in/coimbatore
/best-study-consultant-in/tirupathi
/best-study-consultant-in/vellore
/best-study-consultant-in/thiruvallur
```

Do NOT:

* remove these pages
* redirect them to Chennai
* canonicalize every city page to Chennai
* remove city keywords
* remove city-specific metadata
* remove city-specific FAQs
* remove internal links
* change working dynamic routing unnecessarily

The goal is:

**SEO landing page = city-specific search intent**

while

**business claim = accurate service-area positioning.**

---

# 4. FIX CITY PAGE HEADLINES

Current titles such as:

```text
Best Study Abroad Consultant in Coimbatore
```

can remain if they are being used for SEO, BUT the supporting page content must clearly establish that HighEd does not operate a physical office in that city.

Prefer natural customer-facing positioning such as:

### Coimbatore

```text
Best Study Abroad Consultant for Students in Coimbatore
```

### Vellore

```text
Best Study Abroad Consultant for Students in Vellore
```

### Tirupathi

```text
Best Study Abroad Consultant for Students in Tirupathi
```

### Thiruvallur

```text
Best Study Abroad Consultant for Students in Thiruvallur
```

### Chennai

```text
Best Study Abroad Consultant in Chennai
```

Do not blindly replace SEO keywords everywhere.

Preserve important keyword phrases naturally in:

* metadata
* headings where appropriate
* body copy
* FAQs
* structured data where valid
* internal links

---

# 5. FIX THE HERO SECTION

The city hero must immediately communicate the correct relationship.

## Example: Coimbatore

Use messaging similar to:

```text
Study Abroad Counselling for Students in Coimbatore

Get personalised guidance for studying in the USA, UK, Canada,
Australia, Germany and Dubai — from HighEd's Chennai-based
admissions team through convenient online counselling.
```

CTA:

```text
Book Free Online Counselling
```

Secondary CTA:

```text
Talk to an Advisor
```

Do NOT use:

```text
Visit our Coimbatore office
```

```text
Our Coimbatore branch
```

```text
HighEd Coimbatore office
```

```text
Visit our local centre
```

unless there is verified evidence that such an office actually exists.

---

# 6. ADD A CLEAR SERVICE-AREA SIGNAL

For the four non-office cities, include a subtle but clear statement on the landing page.

Example:

```text
Serving Students in Coimbatore

HighEd is based in Chennai and provides students across Coimbatore
with online counselling, application assistance, scholarship guidance,
education loan support and visa preparation.
```

For Vellore:

```text
Serving Students in Vellore

Connect with HighEd's Chennai-based admissions team online for
personalised study abroad counselling and application support.
```

For Tirupathi:

```text
Serving Students in Tirupathi

Students from Tirupathi can connect with our Chennai-based
counsellors through online, phone and WhatsApp consultations.
```

For Thiruvallur:

```text
Serving Students in Thiruvallur

Get online study abroad counselling from HighEd's Chennai team,
with complete support from university selection through visa filing.
```

Keep the copy natural and conversion-focused. Do not make the page sound like a legal disclaimer.

---

# 7. FIX ALL FALSE LOCAL-OFFICE LANGUAGE

Search the entire codebase for:

```text
HighEd Coimbatore
HighEd Vellore
HighEd Tirupathi
HighEd Thiruvallur
Coimbatore office
Vellore office
Tirupathi office
Thiruvallur office
Coimbatore branch
Vellore branch
Tirupathi branch
Thiruvallur branch
Coimbatore centre
Vellore centre
Tirupathi centre
Thiruvallur centre
local office
local branch
our office in Coimbatore
our office in Vellore
our office in Tirupathi
our office in Thiruvallur
```

Also search case-insensitively and inspect semantically similar wording.

Replace misleading claims with accurate language.

Examples:

```text
HighEd Coimbatore
```

→

```text
HighEd's study abroad counselling for students in Coimbatore
```

```text
HighEd Vellore
```

→

```text
HighEd's study abroad counselling for students in Vellore
```

```text
Our Coimbatore office
```

→

```text
Our Chennai admissions team serving students in Coimbatore
```

---

# 8. FIX CITY DATA FILES

Inspect:

```text
src/data/cities/coimbatore.ts
src/data/cities/tirupathi.ts
src/data/cities/vellore.ts
src/data/cities/thiruvallur.ts
```

Remove or rewrite any wording that implies a physical office.

For example, the current Coimbatore data contains language similar to:

```text
At HighEd Coimbatore...
```

This must be corrected.

Use:

```text
For students in Coimbatore, HighEd provides...
```

or:

```text
HighEd helps students from Coimbatore...
```

Do NOT fabricate a local office.

---

# 9. CITY-SPECIFIC STATS — DO NOT FABRICATE

Review every city page for claims such as:

```text
Coimbatore Office
Vellore Office
Tirupathi Office
Thiruvallur Office
Local Team
Local Counsellors
Local Branch
```

Remove those claims if unsupported.

Also do NOT invent new:

* student numbers
* office addresses
* local teams
* local branches
* local phone numbers
* local physical counselling centres

Existing legitimate student/counselling statistics may remain only if they are already approved project data.

Do not manufacture replacement statistics.

---

# 10. FAQ CONTENT

City FAQs must reinforce the correct service model.

Add/modify questions such as:

### Coimbatore

```text
Do you have a study abroad office in Coimbatore?

HighEd's main admissions office is in Chennai. Students from
Coimbatore can access complete study abroad counselling online,
by phone and through WhatsApp, without needing to visit Chennai.
```

### Vellore

```text
Can students from Vellore receive counselling online?

Yes. HighEd provides online, phone and WhatsApp counselling for
students in Vellore, with the admissions process handled by our
Chennai-based team.
```

### Tirupathi

```text
Does HighEd provide study abroad counselling for students in Tirupathi?

Yes. Students from Tirupathi can connect with our Chennai-based
counsellors remotely for university selection, applications,
scholarships and visa guidance.
```

### Thiruvallur

```text
Can I get counselling from Thiruvallur without travelling to Chennai?

Yes. HighEd provides online counselling, phone support and
WhatsApp assistance for students in Thiruvallur.
```

Do not make false claims about local offices.

---

# 11. CONTACT PAGE

The `/contact` page must clearly show that the physical admissions office is Chennai.

The physical address displayed by:

```text
siteConfig.contact.address
```

must remain the actual Chennai office address.

Do NOT create city-specific addresses.

Do NOT display a Coimbatore/Vellore/Tirupathi/Thiruvallur address.

The contact page can state:

```text
Our Admissions Office

Chennai
```

and separately:

```text
Serving students across Tamil Nadu and beyond through online
counselling and remote application support.
```

Only use an exact address already present in the production configuration.

---

# 12. NAVIGATION / FOOTER

The existing city links can remain because they are valuable SEO landing pages.

However, do not label the group in a way that implies all cities contain offices.

Avoid:

```text
Our Branches
```

```text
Our Offices
```

Prefer:

```text
Study Abroad Counselling Locations
```

or:

```text
Areas We Serve
```

or:

```text
Study Abroad Consultants by City
```

The existing footer already uses:

```text
Study Abroad Consultants by City
```

which is appropriate.

Keep the city links.

---

# 13. NAVBAR / LOCATION UI

If there is any UI that displays:

```text
Locations
```

make sure users do not interpret every location as a physical branch.

Prefer:

```text
Areas We Serve
```

if the component is intended to represent service markets.

Chennai can be explicitly marked as:

```text
Chennai — Main Office
```

while the other locations can be represented as:

```text
Coimbatore — Online Counselling
Vellore — Online Counselling
Tirupathi — Online Counselling
Thiruvallur — Online Counselling
```

Only do this where the UI supports such labels naturally.

---

# 14. LEAD GENERATION

Do NOT break the existing lead generation system.

Preserve:

* `LeadCTAButton`
* `LeadPopup`
* `LeadForm`
* `LeadPopupProvider`
* `useLeadPopup`
* `/api/leads`
* CRM integration
* existing lead sources
* phone/WhatsApp CTAs

City pages should continue generating leads.

Where useful, pass the city as lead context.

For example:

```text
city: coimbatore
```

```text
city: vellore
```

```text
city: tirupathi
```

```text
city: thiruvallur
```

This allows the admissions team to know which geographic campaign generated the lead.

Do NOT change the CRM contract unless necessary.

If the existing lead schema does not support city, do not break production just to add it.

---

# 15. AD LANDING PAGE INTENT

These pages are specifically useful for location-targeted campaigns.

The experience should be:

```text
Google/Meta Ad
      ↓
Coimbatore-specific landing page
      ↓
Student sees relevant Coimbatore messaging
      ↓
Online counselling CTA
      ↓
Lead popup
      ↓
CRM
      ↓
Chennai admissions team contacts student
```

The same model applies to:

```text
Tirupathi
Vellore
Thiruvallur
```

Do NOT turn these pages into generic Chennai pages.

The page should feel relevant to the user's city while remaining factually accurate.

---

# 16. SEO METADATA

Preserve city-specific SEO intent.

Examples:

### Coimbatore

Title:

```text
Best Study Abroad Consultant in Coimbatore | HighEd
```

Description:

```text
Looking for a study abroad consultant in Coimbatore?
Get free online counselling, university admissions, scholarships
and visa guidance from HighEd's Chennai-based admissions team.
```

### Vellore

Title:

```text
Best Study Abroad Consultant in Vellore | HighEd
```

Description should target Vellore search intent while explaining online/remote support.

### Tirupathi

Title:

```text
Best Study Abroad Consultant in Tirupathi | HighEd
```

Description should target Tirupathi search intent while explaining online/remote support.

### Thiruvallur

Title:

```text
Best Study Abroad Consultant in Thiruvallur | HighEd
```

Description should target Thiruvallur search intent while explaining online/remote support.

Do not unnecessarily remove the exact keyword:

```text
best study abroad consultant in {city}
```

from metadata.

---

# 17. STRUCTURED DATA / JSON-LD

Audit the city pages for:

* LocalBusiness
* Organization
* EducationalOrganization
* PostalAddress
* areaServed
* address
* location
* serviceArea

This is critical.

Do NOT generate a fake local business address for each city.

For the four target cities:

Use service-area concepts where appropriate rather than claiming a local physical address.

For example, conceptually:

```text
areaServed: Coimbatore
```

does NOT mean:

```text
address: Coimbatore
```

Only the actual Chennai office should have a physical postal address.

Review:

```text
src/components/seo/JsonLd.tsx
src/seo/*
```

and any schema generators before changing anything.

Do not introduce invalid or misleading schema.

---

# 18. GOOGLE MAP / ADDRESS / CONTACT LINKS

Search the entire project for:

```text
maps
google.com/maps
MapPin
address
office
branch
location
```

Make sure no city landing page contains a fake map/address for the four target cities.

Only Chennai may display the physical office location.

---

# 19. IMAGE / ALT TEXT AUDIT

Check city page image alt text.

Do not use alt text such as:

```text
HighEd Coimbatore office
```

unless there is actually such an office.

Prefer:

```text
Study abroad counselling for students in Coimbatore
```

Likewise for:

* Vellore
* Tirupathi
* Thiruvallur

---

# 20. INTERNAL LINKING

Keep city pages internally linked.

Do NOT remove them from:

* footer
* navigation
* relevant landing pages
* SEO internal links

These pages are strategic acquisition pages.

However, link labels should describe them as city/service-area pages, not branches.

---

# 21. DO NOT OVER-CORRECT THE WEBSITE

Do NOT:

* remove all references to the cities
* remove city pages
* redirect city URLs to Chennai
* replace city content with generic Chennai content
* remove city-specific SEO keywords
* remove city-specific FAQs
* remove city-specific testimonials
* remove location-specific search intent
* create unnecessary new architecture
* redesign the website
* change colors
* change typography
* change layout
* change the lead popup design
* change CRM integration
* change unrelated components

This is a **content/positioning/data accuracy correction**, not a redesign.

---

# 22. PRODUCTION SAFETY

Before editing:

1. Inspect the current implementation.
2. Identify every place where the four non-office cities are presented as physical locations.
3. Make the smallest safe production changes.
4. Preserve existing functionality.
5. Preserve SEO URLs.
6. Preserve lead generation.
7. Preserve responsive behavior.
8. Preserve existing design system.

After editing:

Run:

```bash
npm run lint
```

and:

```bash
npm run build
```

Fix all errors caused by your changes.

Do not leave TypeScript errors.

Do not leave ESLint errors caused by the implementation.

---

# 23. FINAL ACCEPTANCE TEST

Test these URLs:

```text
/best-study-consultant-in/chennai
/best-study-consultant-in/coimbatore
/best-study-consultant-in/tirupathi
/best-study-consultant-in/vellore
/best-study-consultant-in/thiruvallur
```

For each page verify:

### Chennai

* [ ] Chennai is clearly identified as the physical office.
* [ ] Physical address is accurate.
* [ ] In-person counselling can be mentioned.
* [ ] Online counselling remains available.

### Coimbatore

* [ ] No fake office.
* [ ] No fake branch.
* [ ] No Coimbatore physical address.
* [ ] Clearly says students from Coimbatore are served.
* [ ] Online/phone/WhatsApp counselling is clear.
* [ ] Chennai team/office can be mentioned.
* [ ] SEO keyword remains strong.
* [ ] CTA works.
* [ ] Lead submission works.

### Tirupathi

* [ ] No fake office.
* [ ] No fake branch.
* [ ] No Tirupathi physical address.
* [ ] Clearly says students from Tirupathi are served.
* [ ] Online counselling is clear.
* [ ] Chennai team can be mentioned.
* [ ] SEO remains intact.
* [ ] CTA works.

### Vellore

* [ ] No fake office.
* [ ] No fake branch.
* [ ] No Vellore physical address.
* [ ] Clearly says students from Vellore are served.
* [ ] Online counselling is clear.
* [ ] Chennai team can be mentioned.
* [ ] SEO remains intact.
* [ ] CTA works.

### Thiruvallur

* [ ] No fake office.
* [ ] No fake branch.
* [ ] No Thiruvallur physical address.
* [ ] Clearly says students from Thiruvallur are served.
* [ ] Online counselling is clear.
* [ ] Chennai team can be mentioned.
* [ ] SEO remains intact.
* [ ] CTA works.

---

# 24. IMPORTANT CONTENT RULE

The final website should communicate this model naturally:

```text
ONE PHYSICAL OFFICE
        ↓
     CHENNAI
        ↓
────────────────────────
        ↓
SERVING STUDENTS FROM
        ↓
Coimbatore
Tirupathi
Vellore
Thiruvallur
        ↓
ONLINE + PHONE + WHATSAPP
COUNSELLING
        ↓
CHENNAI ADMISSIONS TEAM
```

Never communicate this model:

```text
Chennai Office
Coimbatore Office
Tirupathi Office
Vellore Office
Thiruvallur Office
```

because that is factually incorrect.

---

# 25. DELIVERABLE

Implement the correction directly in the existing production codebase.

When finished, report:

1. Files changed
2. What misleading office/location claims were corrected
3. How Chennai is now distinguished from target/service cities
4. How city SEO intent was preserved
5. Whether lead/CRM functionality was preserved
6. `npm run lint` result
7. `npm run build` result

Do not make unrelated changes.

**Primary objective:**

> Keep Coimbatore, Tirupathi, Vellore and Thiruvallur as high-intent SEO/ad landing pages for acquiring students from those locations, while making it unmistakably clear that HighEd's only physical office is in Chennai.
