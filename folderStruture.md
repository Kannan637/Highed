# COMPLETE UI/UX REDESIGN — COUNTRY STUDY ABROAD PAGES

## Objective

Completely redesign the **UI and UX** of the existing country study-abroad pages.

### Critical Constraint

**DO NOT change the existing section structure.**

Keep:

* Existing sections
* Existing section order
* Existing component architecture
* Existing routes
* Existing data structures
* Existing props
* Existing API/data flow
* Existing CTA functionality
* Existing lead-generation functionality
* Existing reusable components
* Existing country-specific content
* Existing navigation behavior

Only redesign:

* Visual hierarchy
* Layout
* Spacing
* Typography
* Cards
* Buttons
* Icons
* Colors
* Background treatments
* Borders
* Shadows
* Micro-interactions
* Animations
* Responsive behavior
* Information presentation
* Interaction patterns
* Accessibility
* UX clarity

Do not create unnecessary new sections.

---

# 1. DESIGN DIRECTION

Transform the current design into a:

**Premium + Editorial + Modern + Trustworthy + Conversion-focused Study Abroad Experience**

The visual language should feel closer to a premium international education platform than a generic template.

Avoid:

* Generic SaaS dashboard aesthetics
* Excessive gradients
* Excessive rounded cards
* Excessive shadows
* Crowded layouts
* Random decorative elements
* Overuse of glassmorphism
* Large amounts of empty space
* Inconsistent card styles
* Excessive animations
* Template-like repetitive sections

Use:

* Strong editorial hierarchy
* Large confident typography
* Clean white space
* Subtle borders
* Controlled shadows
* Strong visual rhythm
* Asymmetric layouts where appropriate
* Premium cards
* Meaningful iconography
* Country-specific visual identity
* Clear CTA hierarchy
* High information scannability

---

# 2. DESIGN SYSTEM

## Primary colors

Use the existing brand colors:

* Primary Navy: `#253A7B`
* Deep Navy: `#12204C`
* Accent Pink: `#E93F61`
* White: `#FFFFFF`

Supporting neutrals:

* Primary text: `#111827`
* Secondary text: `#4B5563`
* Muted text: `#6B7280`
* Border: `#E5E7EB`
* Surface: `#F8FAFC`
* Soft surface: `#F3F5FA`

Do not introduce a completely new color palette.

Use pink primarily for:

* Primary CTA
* Important highlights
* Active states
* Small visual accents

Do not make large portions of the page pink.

---

# 3. TYPOGRAPHY

Maintain:

* DM Sans for interface/body text
* Hedvig-style display typography where already configured

Create a clear hierarchy:

### H1

Large, bold, highly readable.

Desktop:
`52–64px`

Tablet:
`42–48px`

Mobile:
`34–40px`

### H2

`36–44px`

### H3

`22–28px`

### Body

`16–18px`

### Supporting text

`13–15px`

Avoid excessive tiny text.

Important information must never depend solely on small typography.

---

# 4. GLOBAL LAYOUT

Use a consistent content container.

Recommended:

```tsx
max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10
```

Create stronger horizontal rhythm.

Do not make every section use exactly the same visual treatment.

Alternate between:

* White
* Soft neutral
* Subtle tinted surfaces
* Full-width dark CTA areas

But maintain visual continuity.

---

# 5. HEADER / NAVIGATION UX

Improve the existing navigation visually without changing its functionality.

Desktop:

* Clean horizontal navigation
* Strong active state
* Better spacing
* Better typography
* Subtle bottom border
* Sticky behavior if already supported
* Slight backdrop blur after scrolling

Navigation should visually prioritize:

1. Study destinations
2. Courses/universities
3. Scholarships
4. Resources
5. Primary CTA

Primary CTA should be visually distinct.

Avoid multiple competing CTA colors.

---

# 6. BREADCRUMB

Redesign breadcrumb as a subtle contextual navigation element.

Example visual hierarchy:

```text
Home / Study Abroad / Canada
```

Use:

* 12–14px
* muted text
* clear current-page state
* small Lucide chevron

Do not give the breadcrumb excessive visual weight.

---

# 7. HERO SECTION

The hero must become the strongest visual section on the page.

Keep the existing hero information and functionality.

Current hero already contains:

* Breadcrumb
* Country identity
* Title
* Tagline
* CTA
* Directory CTA
* Country illustration
* Intake information
* Tuition information
* Visa information
* Post-study work information

Redesign it as a premium split-screen composition.

### Layout

Desktop:

```text
┌────────────────────────────────────────────────────────────┐
│ Breadcrumb                                                  │
│                                                            │
│ LEFT                              RIGHT                    │
│ Country label                     Country illustration     │
│                                                        │
│ Large headline                                           │
│ Supporting description                                   │
│                                                            │
│ Primary CTA   Secondary CTA                               │
│                                                            │
│ ───────────────────────────────────────────────────────── │
│ Intake | Tuition | Visa | Post-study work                 │
└────────────────────────────────────────────────────────────┘
```

### Hero background

Use deep navy.

Introduce:

* subtle radial glow
* very subtle country-inspired line art
* low-opacity geometric elements

Do NOT use distracting decorative graphics.

### Country illustration

Make it feel like a premium editorial illustration.

Use:

* larger scale
* subtle floating movement
* depth
* controlled glow
* soft ambient shadow

Do not allow illustration to overpower the headline.

### Hero metrics

Turn the four existing highlights into a premium information strip.

Each item:

* icon
* small label
* strong value

Use vertical dividers on desktop.

On mobile:

```text
2 × 2 grid
```

Keep these highly scannable.

---

# 8. FEATURE CARDS

Keep the existing three cards:

* Courses
* Universities
* Scholarships

The current component already contains these three destinations.

Redesign them as **premium navigation cards**.

### Desktop

Three equal cards.

But avoid making them look identical.

Each card should have:

* subtle category label
* icon
* title
* concise description
* count
* CTA arrow

Use a large clickable surface.

### Interaction

Hover:

* card moves upward 4–6px
* border becomes slightly stronger
* arrow moves right
* icon subtly scales
* shadow increases slightly

Do not use aggressive animation.

### Mobile

Cards stack vertically.

Minimum touch target:

`44px`

---

# 9. SECTION HEADINGS

Standardize section headings.

Use:

```text
small eyebrow
large heading
short supporting description
```

Example:

```text
HIGH-DEMAND DEGREES

Popular Courses to Study in Canada

Explore career-focused programs...
```

Heading alignment can vary depending on section purpose.

Avoid making every section center aligned.

Use left alignment for data-heavy sections.

---

# 10. OVERVIEW SECTION

Keep the existing overview content.

Redesign the presentation using an editorial split layout.

Recommended:

```text
LEFT
Large heading
Short introduction

RIGHT
Key information blocks
```

Use visual hierarchy instead of putting everything inside one large card.

Highlight important facts using:

* number
* label
* short explanation

Avoid long uninterrupted text blocks.

---

# 11. WHY STUDY SECTION

Convert existing benefits into a strong visual benefit system.

Use:

* large numbered points
* icon
* short title
* concise explanation

Possible layout:

```text
01  Global Recognition
    Short explanation

02  Career Opportunities
    Short explanation

03  International Experience
    Short explanation
```

Use alternating alignment or subtle offset positioning.

Avoid generic 3×3 card grids unless the existing data requires it.

---

# 12. UNIVERSITIES SECTION

This should feel like a premium university discovery interface.

Use existing university data.

Cards should prioritize:

1. University name
2. Location
3. Ranking / important metric
4. Tuition
5. Short relevant metadata
6. CTA

Create strong visual grouping.

Example:

```text
University Name
Location

QS / Ranking
Tuition

View University →
```

Use badges only for genuinely important metadata.

Avoid displaying too many badges simultaneously.

---

# 13. COURSES SECTION

The existing course section already provides:

* Level
* Duration
* Average fee
* Career prospects
* Eligibility CTA
* Level filtering

Keep all functionality.

Redesign cards around **decision-making**.

Priority:

```text
Course name
Level + duration

Average annual fee

Career opportunities

Check eligibility →
```

The course title should be the dominant element.

Career tags should be secondary.

### Filters

Redesign filter tabs into a compact segmented control.

Active:

```text
bg-[#253A7B]
text-white
```

Inactive:

```text
bg-transparent
text-neutral-600
```

Add smooth animated active-state transition.

---

# 14. SCHOLARSHIPS SECTION

Make scholarships visually feel valuable.

Prioritize:

* Scholarship name
* Provider
* Funding amount/coverage
* Eligibility
* Deadline if available
* CTA

Use a strong visual distinction for fully funded opportunities.

Avoid cluttering cards with too much metadata.

Use small visual labels such as:

```text
FULL FUNDING
MERIT BASED
UNIVERSITY
GOVERNMENT
```

Only show labels when supported by the existing data.

---

# 15. COST SECTION

The existing cost component contains:

* Annual tuition
* Scholarship availability
* Monthly living cost
* Accommodation
* Food & transport
* Part-time work information
* Budget CTAs

Redesign this into a premium financial-planning interface.

### Main composition

```text
        COST OF STUDYING & LIVING

┌──────────────────────┬──────────────────────┐
│                      │                      │
│ Annual Tuition       │ Monthly Living       │
│                      │                      │
│ ₹ / $ range          │ ₹ / $ amount         │
│                      │                      │
│ Scholarship note     │ Accommodation        │
│                      │ Food & Transport     │
│                      │                      │
└──────────────────────┴──────────────────────┘
```

Make the primary financial figures visually dominant.

Use icons sparingly.

Avoid excessive green/pink/blue mini-cards.

---

# 16. VISA SECTION

Present visa information as a clear journey rather than a dense information block.

Use a timeline-style UI if the existing content supports the necessary steps.

Example:

```text
01 Eligibility
      ↓
02 Documents
      ↓
03 Application
      ↓
04 Processing
      ↓
05 Approval
```

On desktop, this can become horizontal.

On mobile, vertical.

Keep all existing visa information.

Do not invent additional requirements.

---

# 17. INTAKES SECTION

Present intakes as an application-planning timeline.

Example:

```text
JAN
Application window

MAY
Application window

SEP
Application window
```

Clearly highlight:

* Intake
* Application period if existing
* Status
* Important dates

Use visual status indicators only when data exists.

---

# 18. TESTIMONIALS

Make testimonials more human.

Prioritize:

* Student image if existing
* Name
* Program
* University
* Quote

Avoid giant quotation marks and excessive decoration.

Use a premium horizontal testimonial card.

On mobile:

One testimonial per viewport/card.

---

# 19. RELATED BLOGS

Make blog cards editorial rather than generic.

Prioritize:

* Image
* Category
* Title
* Reading information
* CTA

Use image aspect ratio consistently.

Card hover:

* image subtle zoom
* title color transition
* arrow movement

Do not over-animate.

---

# 20. FAQ

The current FAQ already uses an accordion interaction.

Keep the accordion functionality.

Improve UX with:

* larger question row
* stronger active state
* smooth height animation
* clear plus/minus icon
* better spacing
* readable answer width

Use one open item at a time if the existing Accordion component supports it.

Keep the advisor CTA visually connected to the FAQ.

---

# 21. FINAL CTA

The existing CTA includes:

* Partner trust statement
* Main heading
* Supporting copy
* Free counselling CTA
* Directory CTA

Redesign it as the strongest conversion section after the content.

Use:

* deep navy background
* subtle country-inspired decorative pattern
* large heading
* concise copy
* one dominant pink CTA
* one secondary outlined CTA

Add subtle visual depth.

Do not turn the CTA into a huge oversized banner.

---

# 22. CTA HIERARCHY

There should be one clear primary CTA throughout the page.

Primary:

```text
Get Free Counselling
```

Secondary actions:

```text
Explore Directory
Check Eligibility
View Scholarships
Calculate My Budget
```

Do not give every CTA the same visual weight.

Primary CTA:

* Pink
* High contrast
* Strong typography

Secondary CTA:

* Outline / neutral
* Lower visual weight

---

# 23. UX PRINCIPLES

Apply these principles throughout the redesign:

### Fitts's Law

Important actions must have sufficiently large clickable areas.

### Hick's Law

Reduce unnecessary choices.

### Miller's Law

Group related information into manageable chunks.

### Jakob's Law

Use familiar navigation and interaction patterns.

### Law of Proximity

Group related information visually.

### Law of Similarity

Keep equivalent components visually consistent.

### Law of Common Region

Use containers only where grouping is useful.

### Von Restorff Effect

Use accent colors only for important actions.

### Serial Position Effect

Give beginning and ending sections strong visual hierarchy.

### Peak-End Rule

Make the hero and final CTA memorable.

### Aesthetic-Usability Effect

Maintain polished visual consistency.

### Postel's Law

Be forgiving with user interactions and inputs.

### Parkinson's Law

Remove unnecessary interface complexity.

### Goal Gradient Effect

Make progress-oriented flows visually clear.

### Occam's Razor

Prefer the simplest UI that communicates the information.

### Principle of Least Effort

Users should understand each section without excessive reading.

---

# 24. RESPONSIVE DESIGN

The redesign must be genuinely responsive.

### Desktop

Optimize for:

`1440px`

Also test:

`1280px`

### Tablet

Test:

`768px – 1024px`

### Mobile

Test:

`375px`

`390px`

`430px`

Do not simply shrink desktop layouts.

Create intentional mobile layouts.

---

# 25. MOBILE UX

Mobile must prioritize:

1. Country identity
2. Main value proposition
3. Primary CTA
4. Key facts
5. Courses
6. Universities
7. Scholarships
8. Cost
9. Visa
10. FAQ
11. Final CTA

Use:

* horizontal scrolling where appropriate
* stacked cards
* large touch targets
* readable typography
* compact metadata
* sticky CTA only if it does not interfere with content

Avoid horizontal overflow.

---

# 26. ANIMATION

Use GSAP only where animation meaningfully improves UX.

Recommended:

### Hero

* fade + upward reveal
* illustration subtle floating animation

### Cards

* hover elevation
* icon movement

### Sections

* subtle scroll reveal

### Metrics

* number reveal if appropriate

### FAQ

* smooth accordion animation

Avoid:

* excessive parallax
* spinning icons
* bouncing buttons
* constant floating animations
* slow page transitions
* animation on every element

Animation should feel premium and restrained.

---

# 27. ICONOGRAPHY

Use **Lucide React** consistently.

Do not mix random icon libraries.

Icons should:

* communicate meaning
* have consistent stroke width
* use consistent sizing
* never replace important text

Recommended:

* 18–24px for cards
* 16–18px for metadata
* 14–16px for inline actions

---

# 28. CARDS

Do not use the same card style everywhere.

Create three visual levels:

### Level 1 — Information card

Simple:

```text
border
white background
minimal shadow
```

### Level 2 — Interactive card

```text
border
subtle shadow
hover elevation
```

### Level 3 — Featured card

```text
accent treatment
strong hierarchy
slightly stronger shadow
```

Use each intentionally.

---

# 29. BORDERS & SHADOWS

Prefer borders over heavy shadows.

Default:

```text
border-neutral-200/80
```

Small shadow:

```text
shadow-sm
```

Interactive hover:

```text
shadow-lg
```

Avoid:

```text
shadow-2xl
```

everywhere.

---

# 30. BORDER RADIUS

Use a consistent radius system.

Small:

`10px`

Medium:

`14px`

Large:

`20px`

Hero/major containers:

`24px`

Avoid excessive pill-shaped UI.

Reserve pills for:

* badges
* filters
* status
* compact labels

---

# 31. INFORMATION DENSITY

The current design contains substantial information.

Do not remove useful content.

Instead:

* prioritize
* group
* collapse
* progressively reveal
* visually separate

The goal is:

**More clarity without less information.**

---

# 32. ACCESSIBILITY

Ensure:

* WCAG-friendly contrast
* keyboard navigation
* visible focus states
* semantic headings
* semantic buttons/links
* accessible accordion controls
* aria labels where required
* touch targets ≥44px
* reduced-motion support

Never rely only on color to communicate status.

---

# 33. PERFORMANCE

Do not sacrifice performance for visual effects.

Avoid:

* unnecessary JavaScript
* excessive animation listeners
* huge image assets
* duplicated components
* unnecessary re-renders

Use CSS transitions where GSAP is unnecessary.

---

# 34. CODE CONSTRAINTS

Do not rewrite the entire application architecture.

Do not:

* rename existing components unnecessarily
* move components unnecessarily
* change routes
* change APIs
* change data schemas
* remove existing functionality
* duplicate components
* introduce unnecessary dependencies

Modify the JSX/Tailwind styling inside existing components.

If a reusable visual pattern is needed, create a reusable UI component only when it genuinely reduces duplication.

---

# 35. IMPORTANT IMPLEMENTATION RULE

Before modifying any component:

1. Understand its existing props.
2. Understand its data source.
3. Understand its existing interactions.
4. Preserve its functionality.
5. Redesign only the presentation layer.
6. Verify desktop.
7. Verify tablet.
8. Verify mobile.

---

# 36. FINAL QUALITY STANDARD

The redesigned page should look like a **premium international education destination page**.

It should communicate:

**Trust → Opportunity → Clarity → Action**

within the first few seconds.

The user should immediately understand:

* Which country this page is about
* Why they should consider it
* What they can study
* Which universities are available
* What scholarships exist
* How much it costs
* What the visa process involves
* What their next action should be

Do not change the information architecture.

**Change the experience.**

The final result should feel like a completely new website even though the underlying section structure remains the same.



no svg in herosection use ai generated img --with transparent background