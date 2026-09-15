Redesign the entire country study-abroad page UI in the existing codebase, with special focus on the Dubai page and these four sections:

1. Top Universities in Dubai
2. Popular Courses to Study in Dubai
3. Scholarships & Grants in Dubai
4. Upcoming Intakes in Dubai

IMPORTANT:

* Do NOT rebuild the application architecture.
* Do NOT remove existing data, routes, CTA functionality, or country-specific rendering.
* Reuse the existing `Country` data model wherever possible.
* Keep the page fully dynamic so the same components continue working for other countries.
* Dubai should receive the strongest visual treatment, but the components must remain reusable.
* Follow the existing brand colors:

  * Primary: `#253A7B`
  * Accent: `#E93F61`
* Keep the overall design minimal, premium, modern, editorial, and education-focused.
* Avoid the current overly information-heavy card style.

---

## GLOBAL DESIGN DIRECTION

Create a clean premium university-discovery interface.

Visual characteristics:

* Large whitespace
* Strong typography hierarchy
* Very subtle borders
* Soft neutral backgrounds
* Rounded corners, but avoid excessive pill-shaped UI
* Minimal shadows
* Image-first cards
* Strong use of `#253A7B`
* Small controlled use of `#E93F61`
* Avoid excessive gradients
* Avoid large icon-heavy cards
* Avoid displaying too much information inside cards
* Cards should feel like a premium education directory rather than generic SaaS dashboard cards.

Typography:

* Headings: DM Sans
* Descriptions/body: Manrope
* Small labels / metadata: Geist Mono
* Maintain the existing font implementation if already configured globally.
* Do not introduce duplicate font-loading logic inside individual components.

Spacing:

* Use generous vertical section spacing.
* Desktop max width should remain aligned with the existing `Container`.
* Mobile must remain highly polished.
* Maintain consistent card heights where possible.

Interaction:

* Subtle hover movement only.
* Image zoom should be very subtle.
* Borders can transition to `#253A7B`.
* CTA arrows can move 3–4px on hover.
* No exaggerated animations.
* Respect `prefers-reduced-motion`.

---

1. TOP UNIVERSITIES IN DUBAI

---

Current university cards contain too much information.

Redesign this section as an IMAGE-FIRST university showcase.

Section heading:

Title:
"Top Universities in Dubai"

Subtitle should be short and editorial, not a paragraph-heavy explanation.

CARD DESIGN:

Each university card should contain:

TOP:

* Large university/campus image
* Image should occupy approximately 55–60% of the card height.
* Use a real image field if the data already contains one.
* If no image exists, create a reusable placeholder.
* Placeholder must look intentional and premium, NOT like a broken image.
* Use a soft neutral placeholder background with a minimal university/campus visual treatment.
* Add a small image overlay/gradient only if necessary for readability.

BOTTOM:

* University logo area
* University name
* Very minimal metadata only

DO NOT show:

* Long university descriptions
* Tuition fees
* Multiple program chips
* QS ranking details
* Large lists of programs
* Eligibility information
* Multiple badges

The user specifically wants the university cards to be visually driven with less detail.

Recommended card hierarchy:

[ UNIVERSITY IMAGE ]

[ UNIVERSITY LOGO ]

University Name
Dubai, UAE

[small arrow CTA]

University logo:

* Add support for a university logo/image field.
* Logo should sit inside a small white rounded container.
* Example size: 48–64px.
* Use `object-contain`.
* If logo is unavailable, show a clean placeholder logo box.

Image data architecture:
Prefer something like:

image?: string
logo?: string

If the existing university interface already has equivalent fields, use those instead of introducing duplicate properties.

If the fields do not exist:

* Extend the TypeScript type safely.
* Make them optional.
* Do NOT break existing country data.

Fallback:

image:
`/images/placeholders/university-placeholder.webp`

logo:
`/images/placeholders/university-logo-placeholder.svg`

Do not assume these files already exist. If they don't exist, create the placeholder implementation using CSS/SVG or create the required placeholder assets in the project's existing public/assets structure.

---

2. POPULAR COURSES TO STUDY IN DUBAI

---

Redesign:

"Popular Courses to Study in Dubai"

The current course cards contain tuition, career prospects, duration, filters, and multiple metadata blocks. Simplify them significantly.

The visual focus should now be:

COURSE IMAGE / VISUAL
+
COURSE NAME
+
UNIVERSITY LOGOS

Each course card should have a large visual placeholder at the top.

Example structure:

┌─────────────────────────────┐
│                             │
│       COURSE IMAGE          │
│       PLACEHOLDER            │
│                             │
├─────────────────────────────┤
│  [uni] [uni] [uni]          │
│                             │
│  Business Management        │
│                             │
│  → Explore course           │
└─────────────────────────────┘

IMAGE:

* Add a course-related image field.
* If no image exists, use a visually designed placeholder.
* Placeholder should represent the course category:

  * Business
  * Engineering
  * Computer Science
  * Data Science
  * Architecture
  * Healthcare
    etc.
* Do NOT use generic broken-image UI.

UNIVERSITY LOGOS:

* Add a small horizontal university-logo row.
* Show 2–4 logos maximum.
* Each logo should be inside a subtle circular/square white container.
* Use `object-contain`.
* Add `+N` if there are additional universities.
* If actual university logos are unavailable, render empty placeholder logo containers.

The placeholder system is IMPORTANT.

Example:

[ □ ] [ □ ] [ □ ] +4

where each `□` is a subtle logo placeholder.

Do NOT show:

* Average annual fee
* Career opportunity chips
* Large descriptions
* Multiple metadata sections

Keep the card extremely clean.

COURSE FILTER:
Keep the existing:

* All Levels
* Undergraduate
* Postgraduate

But redesign the filter as a minimal segmented control.

Do not remove existing filtering functionality.

---

3. SCHOLARSHIPS & GRANTS IN DUBAI

---

Redesign:

"Scholarships & Grants in Dubai"

Current scholarship cards are text-heavy.

Turn them into visually driven scholarship cards.

CARD STRUCTURE:

TOP:
Large scholarship image/logo placeholder area.

CENTER:
Scholarship logo/image

BOTTOM:
Scholarship name

Small amount/coverage indicator

Small CTA

Example:

┌─────────────────────────────┐
│                             │
│      SCHOLARSHIP IMAGE      │
│        PLACEHOLDER          │
│                             │
├─────────────────────────────┤
│       [ Scholarship Logo ]  │
│                             │
│   UAE University Scholarship│
│                             │
│   Up to 50%                 │
│                             │
│   Check qualification →     │
└─────────────────────────────┘

IMAGE:
Add support for:

image?: string

logo?: string

If no image/logo is available:

* Leave the visual area as an intentional placeholder.
* Do not use random unrelated images.
* Do not use broken image icons.
* Do not invent scholarship logos.

Placeholder design:

* Light neutral background
* Very subtle geometric/document/award visual
* Brand accent `#253A7B` or `#E93F61`
* Small centered placeholder mark

Keep the scholarship amount visible, but make it visually secondary.

REMOVE from the primary card:

* Long eligibility text
* Long coverage descriptions
* Multiple icon rows

Those details can remain available on the detailed/explore page if already supported by the application.

The card should communicate:

Scholarship
+
Visual
+
Amount
+
CTA

---

4. UPCOMING INTAKES IN DUBAI

---

Redesign:

"Upcoming Intakes in Dubai"

The current section is a text-heavy timeline/card grid.

Turn each intake into an image-led admission card.

Each intake card should contain:

TOP:
Relevant intake image/visual placeholder.

Possible visuals:

* University campus
* Students entering campus
* Academic calendar
* Classroom
* Graduation/admission themed visual

If no actual image exists:
use a clean intake placeholder.

MIDDLE:
Season name

Example:
September Intake

SMALL:
Classes start:
September 2026

Apply before:
June 2026

BOTTOM:
CTA

Example:

┌─────────────────────────────┐
│                             │
│       INTAKE IMAGE          │
│        PLACEHOLDER          │
│                             │
├─────────────────────────────┤
│  MAJOR INTAKE               │
│                             │
│  September                  │
│                             │
│  Classes start   September  │
│  Apply before    June       │
│                             │
│  Apply for September →      │
└─────────────────────────────┘

IMAGE DATA:
Add optional support:

image?: string

Use an intake-specific placeholder when absent.

Do not use the same generic placeholder for every section if it can be avoided.

Create a small visual language:

University → campus/building placeholder
Course → academic/subject placeholder
Scholarship → award/document placeholder
Intake → calendar/admission placeholder

This makes the page feel intentionally designed.

---

## DATA MODEL CHANGES

Inspect the existing `Country` type and all university/course/scholarship/intake interfaces before modifying them.

Do not duplicate existing fields.

Add optional visual fields only where necessary.

Preferred structure:

University:
{
name: string;
...
image?: string;
logo?: string;
}

Course:
{
name: string;
...
image?: string;
universityLogos?: string[];
}

Scholarship:
{
name: string;
...
image?: string;
logo?: string;
}

Intake:
{
season: string;
...
image?: string;
}

If actual existing field names differ, adapt to the existing schema instead of forcing this exact structure.

---

## PLACEHOLDER SYSTEM

Build reusable placeholder components rather than repeating placeholder markup.

Create something similar to:

`StudyImagePlaceholder`

Props:

type:
"university" | "course" | "scholarship" | "intake"

className?: string

The component should render different visual treatments depending on type.

Example:

<StudyImagePlaceholder type="university" />

<StudyImagePlaceholder type="course" />

<StudyImagePlaceholder type="scholarship" />

<StudyImagePlaceholder type="intake" />

Requirements:

* No broken `<img>`
* No empty blank white rectangle
* No external image dependency
* No random stock imagery
* Should look intentional in production
* Accessible
* Lightweight
* Reusable across countries

---

## IMAGE HANDLING

Use Next.js `<Image>` if the existing project is using Next.js image optimization.

Requirements:

* `fill` where appropriate
* `object-cover` for photography
* `object-contain` for logos
* Proper responsive `sizes`
* Avoid layout shift
* Add meaningful `alt` text
* Do not use remote image URLs unless the domain is already configured.
* If an image is missing, automatically render the placeholder.

Create a safe image fallback pattern.

Example behavior:

image exists
→ render image

image missing
→ render placeholder

image fails
→ render placeholder

Never display a broken image.

---

## CARD DESIGN SYSTEM

Use one consistent card language across all four sections.

Image card:

rounded-[24px]
overflow-hidden
border border-neutral-200
background white

Image area:
aspect-[16/10]
or
aspect-[4/3]

Content:
padding 20–24px

Hover:

* translateY(-2px)
* subtle shadow
* border becomes slightly brand-colored
* image scale 1.02–1.04

Do NOT:

* use huge shadows
* use glassmorphism
* use excessive gradients
* use neon effects
* use excessive badges
* use giant icons

---

## SECTION LAYOUT

All four sections should feel like part of ONE design system.

Recommended structure:

Section heading
small label
large heading
short subtitle

Then:

Desktop:
3-column cards or horizontal carousel depending on existing data count.

Tablet:
2 columns.

Mobile:
1 column or horizontal snap carousel.

Keep the existing reusable `Carousel` component if appropriate.

Do not replace it with a new carousel library.

The current codebase already uses the shared Carousel component in these sections, so preserve that architecture.

---

## COUNTRY DYNAMIC BEHAVIOR

Do not hardcode "Dubai" inside reusable components.

Continue using:

country.name
country.slug
country.universitiesList
country.coursesList
country.scholarshipsList
country.intakes

For Dubai-specific assets/data, use the existing country data layer.

Example:

country.slug === "dubai"

may provide richer image/logo data, but components must still gracefully render other countries.

---

## CTA BEHAVIOR

Keep existing LeadCTAButton functionality.

Do not replace it with ordinary buttons.

Preserve existing tracking source values.

For example:

country_uni_${country.slug}

country_course_${country.slug}

country_scholarship_${country.slug}

country_intake_${country.slug}_${...}

Do not break lead generation.

CTA text should be shorter and cleaner.

Examples:

"Explore University →"
"Explore Course →"
"Check Scholarship →"
"Apply for September →"

---

## RESPONSIVE REQUIREMENTS

Desktop:

* Premium spacious layout
* Cards approximately 320–400px wide
* Image-first hierarchy

Tablet:

* 2-column grid where appropriate

Mobile:

* No cramped content
* Cards should have comfortable touch targets
* Logo rows should never overflow
* Text must not collide with CTA
* Images should maintain consistent aspect ratio
* Horizontal carousel can be used where it improves browsing

---

## ACCESSIBILITY

Every image requires meaningful alt text.

Decorative placeholder graphics should use:

aria-hidden="true"

Interactive cards must have clear focus states.

Do not rely on color alone for meaning.

Maintain keyboard navigation.

---

## CODE QUALITY

Before editing:

1. Inspect the complete `Country` type.
2. Inspect all country data files.
3. Inspect the existing Carousel implementation.
4. Inspect existing image conventions.
5. Inspect existing public/assets directories.
6. Identify whether university/course/scholarship/intake image fields already exist.

Then implement the redesign.

Avoid unnecessary refactoring outside these sections.

Do not rewrite unrelated components.

Do not remove existing routes.

Do not remove existing data.

Do not introduce TypeScript `any`.

Ensure:

* `npm run lint` passes
* TypeScript passes
* No unused imports
* No broken image paths
* No hydration errors
* No console errors

---

## FINAL VISUAL GOAL

The final page should feel like:

"Premium study-abroad discovery platform"

NOT:

"Information dashboard"

The user should visually scan:

1. University → see campus → recognize logo → know university
2. Course → see subject visual → see available university logos → know course
3. Scholarship → see scholarship visual → recognize award → see funding
4. Intake → see admission visual → recognize intake → see dates

Keep information density low.

Use imagery and logos to create visual richness instead of adding more text.

Most importantly:

DO NOT simply add images to the existing cards.

REDESIGN THE CARD COMPOSITION AROUND THE IMAGE.

The image should become the primary visual anchor of every card.
