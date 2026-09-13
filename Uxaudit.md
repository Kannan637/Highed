# HIGHED — COMPLETE WEBSITE FIX & OPTIMIZATION MASTER PROMPT

## ROLE

Act as a **Senior Full-Stack Web Developer + Senior UI/UX Designer + UX Researcher + Accessibility Engineer + SEO Engineer + Performance Engineer + Conversion Optimization Specialist**, with 20+ years of professional experience building high-converting education, SaaS, and enterprise websites.

You are working on the **HighEd study-abroad consulting website**.

Your responsibility is to audit, fix, optimize, and production-harden the **entire existing codebase**.

---

# 1. PRIMARY OBJECTIVE

Fix **everything that is currently wrong, incomplete, inconsistent, inaccessible, misleading, inefficient, or unnecessarily complicated** across the website.

The final website must feel:

* Premium
* Trustworthy
* Modern
* Professional
* Fast
* Conversion-focused
* Accessible
* Mobile-first
* SEO-friendly
* Easy to navigate
* Visually consistent
* Technically maintainable
* Production-ready

### IMPORTANT

Do **NOT** blindly redesign the website.

Preserve the existing:

* Page structure
* Route structure
* Section architecture
* Component architecture
* Data architecture
* Existing functionality
* Brand identity
* Main visual language

Improve the implementation and UX **inside the existing structure** wherever possible.

Only introduce structural changes when they are required to fix a genuine UX, accessibility, SEO, performance, security, or conversion problem.

---

# 2. FIRST — UNDERSTAND THE ENTIRE CODEBASE

Before modifying anything:

1. Read the complete project.
2. Understand the Next.js architecture.
3. Understand every route.
4. Understand every reusable component.
5. Understand every data file.
6. Understand every hook.
7. Understand the form architecture.
8. Understand the API.
9. Understand the SEO implementation.
10. Understand the navigation system.
11. Understand desktop/mobile differences.
12. Understand the existing design system.
13. Understand how country pages are generated.
14. Understand how lead capture works.
15. Identify duplicated logic.
16. Identify dead components.
17. Identify components that exist but are never rendered.
18. Identify broken or misleading links.
19. Identify accessibility problems.
20. Identify production risks.

Do not start randomly editing files.

Create an internal dependency map before making changes.

---

# 3. NON-NEGOTIABLE RULE

## DO NOT BREAK EXISTING FUNCTIONALITY

Before changing a component, determine:

* Who imports it?
* Where is it rendered?
* What props does it receive?
* What data does it depend on?
* Does another route depend on it?
* Is it client-side or server-side?
* Does it affect SEO?
* Does it affect mobile?
* Does it affect forms?
* Does it affect animations?

Never remove functionality simply because it looks unnecessary.

---

# 4. DESIGN SYSTEM

Create a consistent design system without changing the brand identity.

## Brand Colors

Primary:

`#253A7B`

Accent:

`#E93F61`

White:

`#FFFFFF`

Use semantic tokens instead of repeatedly hardcoding colors.

Example conceptual system:

* primary
* primary-hover
* accent
* accent-hover
* background
* surface
* surface-muted
* text-primary
* text-secondary
* text-muted
* border
* success
* warning
* error

Centralize these values.

---

# 5. TYPOGRAPHY SYSTEM

Use the existing DM Sans direction consistently.

Create a semantic typography hierarchy.

### Suggested hierarchy

* Display
* H1
* H2
* H3
* H4
* Body Large
* Body
* Body Small
* Caption
* Label

Do not randomly use:

* text-3xl
* text-4xl
* text-5xl
* arbitrary pixel sizes

throughout the application.

Use predictable typography tokens.

Ensure:

* proper line-height
* readable paragraph width
* responsive font scaling
* consistent font weight
* sufficient contrast

---

# 6. SPACING SYSTEM

Create consistent spacing rules.

Use a predictable spacing scale.

Avoid random values unless there is a clear design reason.

Maintain:

* consistent section padding
* consistent card spacing
* consistent grid gaps
* consistent heading-to-content spacing
* consistent CTA spacing

---

# 7. BUTTON SYSTEM

Audit every button.

Buttons must have:

* consistent height
* consistent radius
* consistent typography
* consistent icon spacing
* clear hover state
* clear active state
* clear focus state
* disabled state
* loading state where required

Interactive controls should generally provide a **minimum 44×44px touch target**.

Fix controls that are currently too small.

---

# 8. FITTS'S LAW

Apply Fitts's Law to every important interaction.

Increase the clickable area of:

* buttons
* navigation links
* mobile menu controls
* carousel arrows
* close buttons
* tabs
* filters
* accordion triggers
* pagination
* icon-only controls
* floating controls

Do not rely on tiny text itself as the clickable target.

---

# 9. HICK'S LAW

Reduce unnecessary decisions.

For every page ask:

> "What is the most important action this user should take?"

Prioritize:

### Primary

Book Free Counselling

### Secondary

Explore Courses / Explore Countries

### Supporting

WhatsApp / Call / Learn More

Do not allow:

* too many competing CTAs
* unnecessary buttons
* excessive navigation choices
* redundant actions

---

# 10. MILLER'S LAW

Avoid overwhelming users with too many simultaneous choices.

For:

* navigation
* filters
* country information
* course information
* visa information
* scholarship information

group information into meaningful categories.

Use:

* progressive disclosure
* accordions
* tabs
* grouped cards
* summaries

when appropriate.

---

# 11. JAKOB'S LAW

Follow familiar web interaction patterns.

Do not create unusual:

* navigation behavior
* form behavior
* button behavior
* scrolling patterns
* filtering interactions
* modal behavior

Users should immediately understand how the website works.

---

# 12. LAW OF PROXIMITY

Group related information visually.

Examples:

Heading
→ Description
→ Supporting content
→ CTA

should feel like one logical group.

Increase separation between unrelated groups.

---

# 13. LAW OF SIMILARITY

Similar elements must behave similarly.

Ensure:

* same button type = same visual treatment
* same card type = same structure
* same heading hierarchy = same typography
* same CTA = same behavior

---

# 14. LAW OF COMMON REGION

Use containers, cards, backgrounds, and spacing to communicate grouping.

Do not put unrelated content inside the same visual container.

---

# 15. LAW OF CONTINUITY

Design visual flow from:

Discovery
→ Understanding
→ Comparison
→ Decision
→ Action

Especially on country pages.

---

# 16. VON RESTORFF EFFECT

Make the most important CTA visually distinctive.

Do not make every element visually loud.

Primary CTA should stand out.

Supporting actions should remain secondary.

---

# 17. SERIAL POSITION EFFECT

Important actions should appear:

* near the beginning
* at key decision points
* near the end

Do not place the primary conversion action only once.

---

# 18. PEAK-END RULE

Improve:

* hero experience
* major decision moments
* form completion
* success state

The final experience should feel reassuring and professional.

---

# 19. AESTHETIC-USABILITY EFFECT

Preserve the premium visual language.

However:

**Beautiful ≠ usable.**

Never sacrifice:

* readability
* accessibility
* performance
* clarity

for visual effects.

---

# 20. POSTEL'S LAW

Be flexible with user input.

Forms should tolerate:

* spaces
* phone formatting
* capitalization
* reasonable input variations

Normalize values safely.

Never punish users for harmless formatting.

---

# 21. PARKINSON'S LAW

Remove unnecessary steps.

For example:

If a user can book counselling in 4 steps instead of 7, use 4.

Reduce:

* unnecessary clicks
* redundant confirmation
* unnecessary fields
* unnecessary navigation

---

# 22. OCCAM'S RAZOR

Prefer the simplest implementation that solves the problem.

Do not add:

* unnecessary dependencies
* unnecessary abstractions
* unnecessary components
* unnecessary animations
* unnecessary state

---

# 23. PRINCIPLE OF LEAST EFFORT

Users should reach:

Country
→ University
→ Course
→ Cost
→ Scholarship
→ Visa
→ Counselling

with minimal effort.

---

# 24. GOAL-GRADIENT EFFECT

Make progress visible.

For forms and multi-step experiences:

* show progress
* show clear next action
* provide confirmation
* reduce uncertainty

---

# 25. HOMEPAGE FIX

Current homepage is too shallow.

Do NOT blindly add dozens of sections.

Improve the existing homepage so it communicates:

1. What HighEd does
2. Who it helps
3. Where students can study
4. Why HighEd should be trusted
5. What services are offered
6. Social proof
7. Primary conversion action

Use the existing architecture where possible.

---

# 26. HERO SECTION

Keep the existing creative hero concept.

However, reduce cognitive overload.

Current hero contains multiple animated elements.

Fix:

* excessive simultaneous animation
* excessive movement
* competing visual elements
* unnecessary loops
* excessive typewriter effects

Hierarchy must be:

### 1. Primary message

### 2. Supporting message

### 3. Primary CTA

### 4. Secondary CTA

### 5. Supporting visual storytelling

Do not allow animation to compete with the CTA.

---

# 27. HERO ANIMATION

GSAP animations must:

* be purposeful
* be subtle
* not block interaction
* not cause layout shifts
* not continuously distract users

Avoid excessive:

`repeat: -1`

unless the animation genuinely benefits the experience.

Implement `prefers-reduced-motion`.

If reduced motion is enabled:

* disable decorative loops
* disable unnecessary transforms
* remove typewriter animation
* show content immediately

---

# 28. TOP BAR

The announcement bar should not compete with the hero.

Reduce unnecessary animation.

Prefer:

Static announcement
+
clear CTA

instead of constant visual movement.

---

# 29. COUNTRY PAGE — CRITICAL FIX

Audit every country page.

The intended decision journey should be:

**Why Study**
→ **Universities**
→ **Courses**
→ **Cost**
→ **Scholarships**
→ **Intakes**
→ **Visa**
→ **Student Experience**
→ **Trust**
→ **FAQ**
→ **Counselling**

---

# 30. COUNTRY COST — P0

There is an existing:

`CountryCost.tsx`

component.

If it is not being rendered, integrate it into the country page.

Cost is one of the most important study-abroad decision factors.

Ensure it clearly communicates:

* tuition
* living expenses
* accommodation
* other major expenses
* useful ranges where applicable

Do not fabricate exact numbers.

Use the existing country data.

---

# 31. COUNTRY VISA — P0

There is an existing:

`CountryVisa.tsx`

component.

Integrate it into the country page.

Visa information must be:

* easy to scan
* clearly structured
* visually prioritized
* expandable where appropriate

Use careful language for changing information.

Avoid absolute guarantees.

---

# 32. COUNTRY PAGE PROGRESSIVE DISCLOSURE

Country pages can become extremely long.

Do not remove important information.

Instead make dense sections easier to consume.

Examples:

### Cost

Show:

* 3–4 important numbers

Then:

"View detailed breakdown"

### Visa

Show:

* key highlights

Then expandable details.

### FAQ

Accordion.

### Universities

Show key cards.

Allow deeper exploration.

---

# 33. COUNTRY HERO

Country hero should answer immediately:

* Where?
* Why?
* What opportunity?
* What should I do next?

Maintain visual impact but prioritize clarity.

---

# 34. COUNTRY CTA

Primary CTA should be obvious.

Use:

**Book Free Counselling**

Secondary:

**Explore Courses**

Avoid multiple equally dominant buttons.

---

# 35. COUNTRY TESTIMONIALS

Fix trust issues.

If a video is presented as:

"Student Journey Video"

there must actually be a usable video.

If there is no real video:

Do not present an empty placeholder as a video.

Use:

* actual video
  OR
* student testimonial card

Do not imply authenticity or verification without evidence.

---

# 36. TRUST CLAIMS

Audit every claim such as:

* 500+ Partner Universities
* 10,000+ Students Counselled
* 98.6% Visa Success Rate
* 100% Free Counselling
* 100% Authentic
* Verified Admit

For every numerical or absolute claim:

Ask:

1. Is it supported by data?
2. Is it current?
3. Is it measurable?
4. Can it be explained?
5. Could it mislead users?

Where appropriate:

* add source
* add timeframe
* add methodology
* soften wording
* remove unsupported claim

NEVER invent supporting evidence.

---

# 37. DATA SAFETY

Study-abroad data changes frequently.

Be especially careful with:

* tuition
* visa rules
* work rights
* post-study work
* immigration
* PR pathways
* university rankings
* scholarship eligibility
* intake dates

Use language such as:

* "typically"
* "may"
* "varies"
* "subject to current policy"

when appropriate.

Do not make guarantees.

---

# 38. BLOG ARCHITECTURE

Audit:

`CountryRelatedBlogs.tsx`

If a card says:

"Read Complete Guide"

but links to a general `/blog` page, fix the mismatch.

Choose one architecture:

### Option A — Real article system

Create:

`/blog/[slug]`

and link cards to the correct article.

OR

### Option B — Destination guides

Rename the UX so users understand they are navigating to a country guide.

Do not claim an article exists when the link does not lead to the article.

---

# 39. NAVIGATION

Audit:

* DesktopNavigation
* MobileNavigation
* NavigationDropdown
* Navbar
* TopBar

Ensure:

* active route
* hover
* focus
* keyboard navigation
* mobile behavior
* Escape behavior
* click-outside behavior
* focus restoration

The active page must be visually identifiable.

---

# 40. MOBILE NAVIGATION

Maintain the existing strong mobile architecture.

Improve:

* focus restoration to hamburger
* active route indication
* backdrop behavior
* nested menu reset
* body scroll locking
* Escape behavior

Do not make the mobile navigation unnecessarily complex.

---

# 41. CAROUSELS

Audit every carousel.

Users must understand that more content exists.

Provide ONE subtle discovery mechanism:

Either:

* pagination dots

OR:

* "1–3 of 9"

Do not unnecessarily use both.

Ensure:

* keyboard support
* touch support
* visible controls
* accessible labels
* proper focus handling

---

# 42. TABS

Audit:

* course level tabs
* category tabs
* filter tabs

Do not use tiny controls.

Target:

**44px minimum interaction height**

Ensure:

* active state
* focus state
* keyboard navigation
* aria-selected
* tab roles where appropriate

---

# 43. FORMS

Audit the entire lead system.

Files include:

* LeadForm
* LeadPopup
* LeadPopupProvider
* LeadCTAButton
* LeadSuccess
* PhoneInput
* validations
* API route
* lead service

---

# 44. LEAD FORM UX

The form should:

* have clear labels
* use sensible defaults
* minimize fields
* show inline validation
* preserve entered data after recoverable errors
* show loading state
* prevent duplicate submission
* show success state
* show meaningful errors

Never make users wonder whether the submission worked.

---

# 45. POPUP UX

Do NOT automatically open a counselling popup immediately after page load unless there is a strong reason.

The current counselling page uses an approximately 400ms automatic popup.

Replace this with a more intentional experience.

Preferred:

* embedded form
* CTA-triggered popup
* delayed popup only where justified
* exit-intent only if appropriate

Never aggressively interrupt users.

---

# 46. POPUP ACCESSIBILITY

Maintain:

* `role="dialog"`
* `aria-modal`
* focus trap
* Escape
* body scroll lock
* focus restoration
* reduced motion

Improve:

* close button to at least 44×44px
* accessible name
* visible focus
* screen reader announcements

---

# 47. PHONE INPUT

Ensure:

* correct country code behavior
* keyboard navigation
* accessible labels
* error association
* mobile-friendly interaction
* valid input handling

A native `<select>` is acceptable if it improves accessibility and usability without harming the design.

---

# 48. LEAD API — CRITICAL P0

The lead API currently behaves like a logging/fallback implementation.

A production website MUST persist leads.

Implement a reliable production pipeline:

Form
→ API
→ Validation
→ Rate limiting
→ Persistence / CRM
→ Response
→ Success state

Do not allow:

"Thank you"

to appear when the lead was not actually stored.

If a CRM/database is not currently configured:

Create a clean service abstraction that can safely connect to one.

Do NOT fake successful persistence.

---

# 49. RATE LIMITING

Current in-memory rate limiting is not sufficient for a multi-instance production deployment.

Replace it with infrastructure appropriate for production, such as:

* Redis
* Upstash
* platform-level rate limiting
* equivalent distributed solution

Keep a development fallback if necessary.

---

# 50. ORIGIN VALIDATION

Do not use loose checks such as:

`origin.startsWith(allowed)`

Use exact origin comparison.

Parse the origin safely.

Compare normalized origins.

Never accidentally allow:

`https://trusted-domain.com.attacker.com`

when:

`https://trusted-domain.com`

was intended.

---

# 51. API SECURITY

Audit:

* validation
* sanitization
* rate limiting
* origin checks
* HTTP methods
* content types
* error handling
* sensitive logging
* abuse prevention

Never log:

* passwords
* sensitive personal information
* unnecessary phone numbers
* private lead data

---

# 52. ERROR HANDLING

Every API failure should return a predictable structure.

Frontend should display:

* useful user-facing message
* retry option
* no internal stack traces

Server logs may contain diagnostic details where appropriate.

---

# 53. ACCESSIBILITY — WCAG

Target:

**WCAG 2.2 AA**

Audit:

* semantic HTML
* keyboard navigation
* focus visibility
* color contrast
* form labels
* error messages
* landmarks
* heading hierarchy
* alt text
* aria usage
* dialogs
* accordions
* tabs
* carousels
* navigation
* links
* buttons

Do not add ARIA where native HTML already solves the problem.

---

# 54. ACCORDION ACCESSIBILITY

Accordion triggers should have proper relationships.

Implement:

* `aria-expanded`
* `aria-controls`

Panels should have:

* unique IDs
* predictable relationships

Keyboard behavior should be logical.

---

# 55. SKIP NAVIGATION

Preserve and verify:

"Skip to content"

Ensure it actually moves focus to the main content.

---

# 56. FOCUS MANAGEMENT

Audit:

* mobile menu
* popup
* dropdown
* accordion
* tabs
* filters
* drawers
* forms

Focus must never become lost.

---

# 57. SCROLL-TO-TOP

Ensure the scroll-to-top button:

* has accessible name
* has visible focus
* has adequate target size
* does not obscure content
* appears only when useful

Prefer 44–48px.

---

# 58. WHATSAPP BUTTON

The floating WhatsApp button must not compete excessively with the main CTA.

Establish hierarchy:

1. Book Free Counselling
2. WhatsApp
3. Phone

Ensure floating controls:

* do not overlap
* do not cover important content
* work on mobile
* have accessible labels

---

# 59. LOADING STATES

Replace generic:

"Loading..."

where possible with contextual skeletons.

Examples:

Course cards → course skeleton

University cards → university skeleton

Explore results → result skeleton

Country sections → section skeleton where needed

Avoid layout jumps.

---

# 60. EMPTY STATES

Every data-driven area should have an intentional empty state.

Include:

* explanation
* useful next step
* reset filters where appropriate
* alternative action

---

# 61. ERROR STATES

Ensure:

* 404 page
* route error
* API error
* form error
* empty results

all have useful recovery actions.

Do not trap users.

---

# 62. EXPLORE EXPERIENCE

The Explore architecture should follow:

**Search
→ Filter
→ Scan
→ Compare
→ Select
→ Act**

Improve:

* search visibility
* filter discoverability
* active filters
* sorting
* result count
* empty state
* mobile filter drawer
* card hierarchy

Do not overload the interface with filters.

---

# 63. EXPLORE MOBILE

Ensure:

* filter button is easy to find
* drawer is accessible
* body scroll is locked correctly
* close button is 44×44px
* active filters remain visible
* result count is clear

---

# 64. CARD SYSTEM

The website currently relies heavily on rounded cards.

Do not remove the visual identity.

Instead introduce hierarchy:

### Pattern 1 — Primary elevated card

For important decision content.

### Pattern 2 — Flat supporting content

For secondary information.

### Pattern 3 — Emphasized action panel

For conversion moments.

Not every piece of information should look like a card.

---

# 65. SECTION HEADINGS

Avoid making every section:

Badge
+
H2
+
Subtitle

Use variation while maintaining consistency.

Possible patterns:

* centered heading
* left-aligned heading
* heading + CTA
* heading + statistic
* compact heading
* decision-oriented heading

---

# 66. RESPONSIVE DESIGN

Audit every breakpoint.

Test:

* 320px
* 360px
* 375px
* 390px
* 414px
* 768px
* 1024px
* 1280px
* 1440px
* 1920px

No:

* horizontal overflow
* clipped text
* overlapping cards
* broken navigation
* inaccessible buttons
* tiny controls
* excessive whitespace

---

# 67. MOBILE-FIRST PRIORITY

On mobile:

* primary content first
* primary CTA visible
* concise text
* cards stack naturally
* navigation remains easy
* animations are reduced
* floating buttons do not overlap
* forms remain comfortable

Do not simply shrink the desktop UI.

---

# 68. PERFORMANCE

Audit:

* image sizes
* image formats
* lazy loading
* `next/image`
* fonts
* JavaScript
* GSAP usage
* client components
* unnecessary hydration
* bundle size
* layout shifts

Remove:

`unoptimized`

from images unless technically necessary.

Use optimized image delivery.

---

# 69. IMAGE OPTIMIZATION

Use:

* WebP/AVIF where appropriate
* responsive image sizes
* proper width/height
* lazy loading for below-the-fold images
* eager loading only for critical hero images

Prevent CLS.

Provide meaningful alt text.

Decorative images should use empty alt where appropriate.

---

# 70. GSAP PERFORMANCE

Animations should:

* animate transform/opacity where possible
* avoid layout-triggering properties
* clean up timelines
* respect reduced motion
* avoid unnecessary client-side work

Do not initialize expensive animations unnecessarily.

---

# 71. NEXT.JS ARCHITECTURE

Audit server/client boundaries.

Do not make an entire page `"use client"` just because one component needs client-side interaction.

Keep:

* server components server-side
* interactive components client-side

where practical.

---

# 72. SEO

Audit every page.

Ensure:

* unique title
* unique description
* canonical URL
* Open Graph
* Twitter metadata
* robots
* sitemap
* structured data

---

# 73. STRUCTURED DATA

Audit:

* Organization
* WebSite
* BreadcrumbList
* FAQPage
* Article where appropriate

Do not generate structured data that does not represent visible page content.

---

# 74. SEARCHACTION FIX

If the website declares a WebSite SearchAction pointing to:

`/study-in?q=...`

but `/study-in` is not actually a search interface, fix the mismatch.

Either:

1. implement the search functionality

OR

2. remove the SearchAction schema.

Never publish misleading structured data.

---

# 75. INTERNAL LINKING

Audit every link.

Every CTA must lead to exactly what its label promises.

Examples:

"Read Complete Guide"
→ actual guide

"Explore Courses"
→ course exploration

"View University"
→ university information

"Book Counselling"
→ counselling flow

No dead ends.

---

# 76. URL ARCHITECTURE

Keep URLs:

* readable
* stable
* semantic
* lowercase
* predictable

Country routes should remain consistent.

---

# 77. METADATA

Country pages should have dynamically generated metadata based on country data.

Ensure no duplicate:

* title
* description
* canonical
* OG data

---

# 78. SITEMAP

Ensure sitemap includes only valid, indexable URLs.

Do not include:

* invalid routes
* duplicate routes
* internal utility routes
* nonexistent blog URLs

---

# 79. ROBOTS

Ensure robots configuration does not accidentally block important pages.

---

# 80. CONTENT QUALITY

Do not rewrite content unnecessarily.

Improve only when necessary for:

* clarity
* accuracy
* UX
* compliance
* consistency

Never invent:

* universities
* statistics
* rankings
* visa rules
* student numbers
* success rates
* partnerships

---

# 81. LEGAL PAGES

Audit:

* Privacy Policy
* Terms
* Contact information

Ensure claims and legal language are consistent with the actual functionality.

Add:

* anchor navigation
* back-to-top where useful

without overengineering.

---

# 82. DESIGN CONSISTENCY

Audit every page for:

* border radius
* shadows
* button sizes
* typography
* spacing
* colors
* badges
* icon sizes
* hover states
* focus states

Create reusable primitives where duplication exists.

---

# 83. ICON SYSTEM

Use Lucide icons consistently.

Do not mix arbitrary icon libraries.

Every icon-only button must have:

* accessible name
* adequate target size
* visible focus state

---

# 84. MICROINTERACTIONS

Use subtle interactions for:

* buttons
* cards
* links
* navigation
* form states

Avoid animation for animation's sake.

---

# 85. REDUCED MOTION

Implement a global reduced-motion strategy.

When:

`prefers-reduced-motion: reduce`

is enabled:

* disable decorative loops
* reduce transitions
* disable typewriter effects
* avoid large transforms
* show content immediately

This applies to the entire website, not just the popup.

---

# 86. SECURITY

Audit:

* API routes
* form submissions
* headers
* origin validation
* rate limiting
* input validation
* XSS risks
* open redirects
* exposed secrets
* client-side environment variables

Never expose private secrets to the browser.

---

# 87. ENVIRONMENT VARIABLES

Audit environment variables.

Public variables must use the correct Next.js public prefix only when necessary.

Never expose:

* database credentials
* API secrets
* private keys
* CRM tokens

to client components.

---

# 88. DUPLICATION

Identify repeated:

* class strings
* constants
* validation logic
* CTA definitions
* colors
* typography
* metadata
* navigation logic

Extract only when it genuinely improves maintainability.

Do not over-abstract.

---

# 89. DEAD CODE

Identify:

* unused components
* unused imports
* unused hooks
* unused data
* unused CSS
* dead routes

Before deleting anything, verify it is genuinely unused.

---

# 90. TYPESCRIPT

The project must be strongly typed.

Avoid:

* unnecessary `any`
* unsafe casts
* duplicated types
* inconsistent optional fields

Use existing domain types wherever possible.

---

# 91. ERROR-FREE BUILD

After modifications run:

```bash
npm run lint
npm run build
```

If available, also run:

```bash
npx tsc --noEmit
```

Fix every:

* TypeScript error
* ESLint error
* build error
* hydration issue
* import error

Do not finish with known errors.

---

# 92. HYDRATION

Audit all client components for:

* browser-only APIs
* `window`
* `document`
* `localStorage`
* media queries
* animation initialization

Prevent server/client markup mismatches.

---

# 93. LEAD CONVERSION FUNNEL

Audit the entire journey:

Homepage
→ Destination
→ Country
→ Course
→ University
→ Counselling

At every stage answer:

> "What should the user do next?"

Make the next action obvious.

---

# 94. CONVERSION CTA STRATEGY

Primary CTA:

**Book Free Counselling**

Secondary CTA:

**Explore Courses**

Utility CTA:

**WhatsApp / Call**

Do not make every CTA look primary.

---

# 95. TRUST BEFORE CONVERSION

Before asking users for their details, communicate:

* credibility
* process
* student outcomes
* university relationships
* transparent expectations

Do not use fake urgency.

Do not use fake scarcity.

Do not use manipulative patterns.

---

# 96. DARK PATTERN AUDIT

Remove:

* deceptive popups
* forced actions
* fake countdowns
* fake scarcity
* misleading CTA labels
* hidden cancellation
* unnecessary consent
* confusing close buttons

The website should convert through clarity and trust.

---

# 97. FORM PRIVACY

Clearly communicate:

* why information is collected
* how it may be used
* appropriate consent where required

Do not collect unnecessary personal data.

---

# 98. ANALYTICS

Where analytics exist, ensure meaningful events can be measured:

* CTA click
* counselling open
* form start
* form validation error
* form submit
* successful lead
* WhatsApp click
* phone click
* course interaction
* university interaction
* country interaction
* filter interaction

Do not collect unnecessary sensitive information.

---

# 99. FINAL UX JOURNEY

The website should feel like:

## DISCOVER

"Where can I study?"

↓

## EXPLORE

"What can I study?"

↓

## COMPARE

"Which university/course is right?"

↓

## UNDERSTAND

"How much will it cost?"

↓

## PLAN

"When can I apply?"

↓

## VERIFY

"What about visa?"

↓

## TRUST

"Can I trust HighEd?"

↓

## ACT

"Book my counselling."

---

# 100. FINAL COUNTRY PAGE JOURNEY

Every country page should logically communicate:

**Country Hero**

↓

**Why Study Here**

↓

**Universities**

↓

**Courses**

↓

**Cost**

↓

**Scholarships**

↓

**Intakes**

↓

**Visa**

↓

**Student Experience / Testimonials**

↓

**Why HighEd**

↓

**FAQ**

↓

**Related Guides**

↓

**Book Free Counselling**

Preserve the existing section architecture while correcting omissions and hierarchy.

---

# 101. PRIORITY SYSTEM

Classify every discovered issue:

### P0 — Critical

Fix immediately.

Examples:

* broken functionality
* missing critical country sections
* lead persistence failure
* security vulnerabilities
* misleading trust claims
* broken important links
* accessibility blockers

### P1 — High

Fix before production.

Examples:

* popup interruption
* poor hierarchy
* mobile friction
* CTA competition
* SEO mismatch
* poor loading states
* animation overload

### P2 — Medium

Polish.

Examples:

* card variety
* section-heading variation
* spacing
* microinteractions
* typography refinement
* token cleanup

### P3 — Nice to have

Only implement if time and complexity justify it.

---

# 102. DO NOT OVERENGINEER

Never turn a simple problem into a large architecture change.

Prefer:

existing component
+
small improvement

over:

new library
+
new abstraction
+
new architecture

---

# 103. COMPONENT RULE

Before creating a new component ask:

> "Can the existing component safely support this?"

If yes, extend it.

If no, create a reusable component.

Do not create one-off components unnecessarily.

---

# 104. DATA RULE

Do not duplicate country information inside components.

Country data should remain centralized.

Components should consume typed data.

---

# 105. RESPONSIVE RULE

Every UI change must work on:

Desktop
Tablet
Mobile

Never fix desktop and break mobile.

Never fix mobile and break desktop.

---

# 106. VISUAL REGRESSION

After modifications inspect:

* homepage
* country page
* explore page
* courses
* scholarships
* contact
* counselling
* blog
* mobile navigation
* popup
* footer

Look specifically for:

* spacing shifts
* overflow
* typography breaks
* button misalignment
* broken images
* broken animations
* unexpected layout changes

---

# 107. FINAL QA CHECKLIST

Before declaring completion:

## UX

* [ ] Clear hierarchy
* [ ] Clear primary CTA
* [ ] Minimal friction
* [ ] No confusing interactions
* [ ] No excessive choices
* [ ] Strong decision journey

## UI

* [ ] Consistent typography
* [ ] Consistent spacing
* [ ] Consistent colors
* [ ] Consistent buttons
* [ ] Consistent cards
* [ ] Responsive layouts

## Accessibility

* [ ] Keyboard navigation
* [ ] Focus management
* [ ] 44px touch targets
* [ ] Screen-reader labels
* [ ] Form labels
* [ ] Error associations
* [ ] Reduced motion
* [ ] WCAG 2.2 AA review

## SEO

* [ ] Metadata
* [ ] Canonicals
* [ ] Sitemap
* [ ] Robots
* [ ] Structured data
* [ ] Internal links
* [ ] No misleading schema

## Performance

* [ ] Optimized images
* [ ] No unnecessary `unoptimized`
* [ ] Reduced client JS
* [ ] Optimized GSAP
* [ ] No unnecessary hydration
* [ ] No layout shifts
* [ ] Good loading states

## Security

* [ ] API validation
* [ ] Rate limiting
* [ ] Exact origin validation
* [ ] No secret exposure
* [ ] Safe error handling
* [ ] Input sanitization
* [ ] Abuse prevention

## Conversion

* [ ] Counselling CTA visible
* [ ] Lead form works
* [ ] Lead actually persists
* [ ] Success state accurate
* [ ] Error state useful
* [ ] WhatsApp does not compete
* [ ] No aggressive popup

---

# 108. REQUIRED IMPLEMENTATION PROCESS

Follow this exact workflow.

## PHASE 1 — AUDIT

Inspect the entire codebase.

Create an internal list of:

* P0
* P1
* P2
* P3

Do not modify yet.

---

## PHASE 2 — FOUNDATION

Fix:

* design tokens
* typography
* spacing
* buttons
* accessibility primitives
* shared components

---

## PHASE 3 — CRITICAL FUNCTIONALITY

Fix:

* CountryCost
* CountryVisa
* testimonials
* lead persistence
* API security
* rate limiting
* broken links
* trust claims

---

## PHASE 4 — UX

Fix:

* hero cognitive load
* CTA hierarchy
* popup behavior
* carousel discoverability
* tabs
* progressive disclosure
* country-page journey
* Explore experience

---

## PHASE 5 — ACCESSIBILITY

Perform full keyboard and screen-reader-oriented review.

---

## PHASE 6 — PERFORMANCE

Optimize:

* images
* animation
* hydration
* client components
* bundle
* loading states

---

## PHASE 7 — SEO

Fix:

* metadata
* schema
* SearchAction
* sitemap
* internal links
* canonical URLs

---

## PHASE 8 — RESPONSIVE

Test all major breakpoints.

---

## PHASE 9 — VALIDATION

Run:

```bash
npm run lint
npm run build
npx tsc --noEmit
```

Fix everything.

---

# 109. IMPORTANT: DO NOT STOP AFTER FIRST ERROR

If the build fails:

1. identify root cause
2. fix root cause
3. rerun
4. continue until clean

Do not simply suppress errors.

Do not use:

```ts
// @ts-ignore
```

unless there is a documented unavoidable reason.

Do not disable ESLint rules globally just to make the build pass.

---

# 110. OUTPUT REQUIREMENT

After completing the work, provide a concise implementation report.

Use this format:

## COMPLETED

* P0 fixes
* P1 fixes
* P2 fixes
* Accessibility fixes
* Performance fixes
* SEO fixes
* Security fixes
* Conversion fixes

## FILES CHANGED

List every changed file.

## FILES CREATED

List newly created files.

## FILES REMOVED

List deleted files and why.

## BUILD STATUS

```text
TypeScript: PASS/FAIL
ESLint: PASS/FAIL
Build: PASS/FAIL
```

## REMAINING ISSUES

Only list issues that genuinely cannot be resolved without:

* external credentials
* CRM setup
* database setup
* external service
* missing real content/assets
* business decisions

Do not hide unresolved problems.

---

# 111. ABSOLUTE RULES

### NEVER

* invent data
* invent testimonials
* invent statistics
* invent university partnerships
* invent visa policies
* invent rankings
* fake lead persistence
* fake success states
* break existing routes
* remove useful functionality
* introduce unnecessary dependencies
* ignore accessibility
* ignore mobile
* ignore build errors
* hide TypeScript errors
* suppress lint errors without justification
* create misleading SEO schema
* use deceptive UX
* overanimate the interface

### ALWAYS

* preserve architecture where possible
* reuse components
* use typed data
* use Lucide icons
* use GSAP only where useful
* respect reduced motion
* maintain responsive behavior
* maintain semantic HTML
* optimize images
* validate forms
* secure API endpoints
* verify every important link
* test keyboard navigation
* test mobile interactions
* run lint/build/type checks
* prioritize P0 before P1
* prioritize usability over decoration

---

# 112. FINAL QUALITY TARGET

The final implementation should target:

### UX

**9/10+**

### Accessibility

**WCAG 2.2 AA**

### Performance

**Production-grade**

### SEO

**Technically clean and semantically correct**

### Conversion

**Clear, trustworthy, low-friction**

### Code Quality

**Maintainable, typed, reusable**

### Mobile

**First-class experience, not a compressed desktop version**

---

# FINAL INSTRUCTION

Do not merely report problems.

**FIX THEM IN THE CODEBASE.**

Do not ask me to manually fix obvious issues.

Do not stop after fixing one page.

Audit and improve the **entire HighEd website**.

Work systematically from:

**P0 → P1 → P2 → P3**

while preserving the existing architecture and visual identity.

When finished, verify the complete application and provide the final implementation report.
