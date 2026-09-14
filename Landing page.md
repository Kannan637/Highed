# HIGHED WEBSITE — MASTER UX/UI + FRONTEND ENGINEERING FIX PROMPT

You are a **senior frontend engineer, UX/UI designer, accessibility specialist, performance engineer, and conversion-rate optimization expert with 15+ years of production experience**.

You are working on the existing **HighEd overseas education consultancy website**.

Your task is to **audit, fix, refine, and production-harden the entire existing homepage codebase**.

---

# 1. PRIMARY OBJECTIVE

Improve the existing website from a visually good prototype into a:

* production-ready website
* high-converting study-abroad consultancy website
* accessible website
* responsive website
* performant website
* technically maintainable React/Next.js application
* polished premium education brand experience

## VERY IMPORTANT

**DO NOT redesign the website from scratch.**

Preserve the existing:

* section order
* overall page structure
* brand identity
* primary colors
* typography direction
* major visual concepts
* imagery concepts
* country carousel concept
* course category concept
* scholarship composition
* comparison section
* FAQ structure

Improve the existing implementation rather than replacing the entire design.

---

# 2. EXISTING HOMEPAGE STRUCTURE

Preserve this structure:

1. Hero
2. Study Abroad Quick Navigation Cards
3. About Us
4. Study Destinations
5. Popular Courses
6. Scholarships & Education Loans
7. Services
8. Why Choose Us
9. FAQ

Do NOT add unnecessary sections merely to make the page longer.

Only add small supporting UI elements where they improve UX or conversion.

---

# 3. EXISTING COMPONENTS

Work with the existing components:

```text
frontend/src/components/home/

AboutUs.tsx
CountryService.tsx
Courses.tsx
FAQ.tsx
Hero.tsx
Scholarship.tsx
Service.tsx
StudyAbroadCards.tsx
WhyChooseAs.tsx
```

Do not unnecessarily rename or relocate these components.

Before modifying anything:

1. Understand every component.
2. Understand its state.
3. Understand its props.
4. Understand its interactions.
5. Understand its responsive behavior.
6. Understand its dependencies.
7. Identify duplicated patterns.
8. Identify broken/dead interactions.
9. Identify accessibility issues.
10. Identify performance issues.

---

# 4. DESIGN SYSTEM

Preserve the existing brand direction.

## Primary colors

```text
Primary Blue: #253A7B
Primary Pink: #E93F61
Dark Text:    #121314
White:        #FFFFFF
```

Use the existing colors consistently.

Do not introduce random new colors.

Create reusable design tokens where appropriate.

For example:

```ts
const colors = {
  primary: "#253A7B",
  accent: "#E93F61",
  dark: "#121314",
  white: "#FFFFFF",
};
```

If the project already has an appropriate Tailwind/theme system, integrate with it instead of creating a competing system.

---

# 5. TYPOGRAPHY

The existing design uses:

```text
DM Sans
Hedvig Letters Serif
```

Preserve this pairing.

However:

## FIX

Do not initialize the same Google fonts independently inside every component.

Centralize font loading at the appropriate application/layout level.

Then use the shared font variables throughout the homepage.

Do not unnecessarily change font sizes that already look visually correct.

Only adjust typography where required for:

* hierarchy
* readability
* mobile responsiveness
* accessibility
* visual consistency

---

# 6. GLOBAL CTA ARCHITECTURE

This is the highest-priority fix.

The website currently contains multiple buttons that visually appear interactive but are not fully connected to actions.

Every meaningful CTA must work.

Create one consistent CTA/lead-generation architecture.

The existing Hero already uses the lead popup pattern:

```ts
openLeadPopup({
  source: "hero_primary_cta"
})
```

Extend this architecture to the rest of the homepage.

Use meaningful source identifiers.

Examples:

```ts
hero_primary_cta
about_cta
country_cta
course_brochure
course_guidance
scholarship_cta
service_cta
why_choose_cta
faq_cta
```

Do not duplicate popup logic unnecessarily.

Create a reusable CTA abstraction if appropriate.

Example:

```tsx
<LeadCTA source="about_cta">
  Start Your Journey
</LeadCTA>
```

or:

```tsx
<Button
  onClick={() => openLeadPopup({
    source: "about_cta"
  })}
>
  Start Your Journey
</Button>
```

Use the architecture that best fits the existing project.

---

# 7. FIX ALL DEAD BUTTONS

Search the entire homepage for:

```tsx
<button>
```

and all links/interactive elements.

Every button must have a meaningful action.

Specifically verify and fix:

### About

```text
Start Your Journey
```

### Countries

```text
View All Countries
Explore Country
Previous
Next
Pagination
```

### Courses

```text
Download Brochure
View All Courses
Course guidance CTA
```

### Scholarships

```text
Explore Scholarships
Book Free Counselling
```

### Services

```text
Service interactions
Counselling CTA
```

### Why Choose Us

```text
Profile assessment / counselling CTA
```

### FAQ

Add a meaningful counselling CTA after the FAQ if it fits the existing layout.

Never leave a button that appears actionable without functionality.

---

# 8. CTA LANGUAGE

Improve vague CTA labels.

Avoid:

```text
Explore
```

when the destination is ambiguous.

Prefer context-specific labels such as:

```text
Explore Study Destinations
Explore Universities
Explore Courses
Explore Scholarships
Get Free Counselling
Get Course Guidance
Get Profile Assessment
```

Use the shortest clear wording.

Do not make every CTA identical.

Primary conversion CTA:

```text
Book Free Counselling
```

Secondary discovery CTAs should remain visually secondary.

---

# 9. HERO UX FIXES

Preserve the current Hero concept.

Do NOT remove the existing sophisticated animation unless technically necessary.

The Hero currently includes:

* typewriter questions
* GSAP animation
* magnetic cursor interaction
* responsive question bubbles
* CTA
* statistics
* background imagery
* reduced-motion handling

Keep these.

## Improve:

### A. Reduce animation competition

Animation must support the message, not compete with it.

Keep:

* typewriter effect
* subtle magnetic interaction
* subtle transitions

Avoid excessive simultaneous movement.

Do not animate every element independently.

### B. Respect reduced motion

Preserve and strengthen the existing reduced-motion behavior.

When:

```ts
prefers-reduced-motion: reduce
```

disable:

* unnecessary cursor movement
* magnetic effects
* continuous animation
* aggressive transitions

Content and CTA must remain fully usable.

### C. Hero CTA

Ensure:

```text
Book Free Counselling
```

opens the lead popup.

Ensure:

```text
Explore Study Destinations
```

or the appropriate discovery action actually works.

### D. Trust statistics

Keep the existing statistics.

Do not invent new statistics.

Do not change factual claims unless the source data is available.

If explanatory microcopy is added, keep it subtle.

---

# 10. QUICK NAVIGATION CARDS

Existing cards:

```text
Country & University
Courses
Scholarship
Student Support
```

Preserve these.

## FIX

The current card data contains empty image values.

Replace empty image areas with appropriate existing/local visual assets if available.

Do not invent nonexistent image paths.

If suitable assets already exist, use them.

If no appropriate assets exist, create a clean visual treatment using:

* icons
* abstract shapes
* existing brand elements

Do not leave large empty colored rectangles that look unfinished.

## Interaction

Every card must:

* be keyboard accessible
* have visible hover state
* have visible focus state
* have active/click feedback
* route to the correct destination

Preserve existing destinations unless there is a clearly better existing route.

---

# 11. ABOUT US

Preserve the existing:

* blue background
* student visual
* trust badges
* company logo strip
* company outcome messaging
* CTA

## FIX CTA

Make:

```text
Start Your Journey
```

functional.

It should use the centralized lead flow.

## Company logos

Keep the existing companies only if they are factually appropriate.

Do not imply that HighEd directly employs or placed someone at a company unless the claim is actually supported.

The visual treatment should clearly communicate the intended meaning of the logos.

Do not fabricate partnerships.

Do not add fake company logos.

## Logo carousel

Improve:

* accessibility
* pause behavior
* reduced-motion behavior
* mobile usability

For reduced motion:

* stop continuous marquee animation
* display a static horizontal set or accessible list

Make sure the infinite animation does not cause excessive CPU usage.

---

# 12. STUDY DESTINATIONS CAROUSEL

Preserve the existing carousel design.

It already supports:

* desktop side cards
* active center card
* previous/next controls
* mobile card
* swipe/drag
* GSAP transitions
* keyboard interaction

Do not replace this with a generic slider unless absolutely necessary.

## Improve accessibility

Add:

```text
aria-label
aria-roledescription
aria-current
aria-live where appropriate
```

where useful.

Users should understand:

* current country
* total number of countries
* previous/next controls
* active slide

Example conceptual announcement:

```text
United Kingdom, slide 4 of 6
```

Do not spam screen readers with continuous announcements.

## Keyboard support

Ensure:

* Tab reaches controls
* Enter activates controls
* Space activates controls
* focus remains predictable

## Touch

Ensure:

* horizontal swipe works
* vertical page scrolling is not accidentally blocked
* drag doesn't interfere with buttons
* tap doesn't accidentally trigger navigation after a swipe

## Country information

Improve decision usefulness without overcrowding.

Where existing data supports it, consider concise metadata such as:

```text
Popular for:
STEM
Research
Post-study work
```

Do not invent facts.

---

# 13. COURSE SECTION

This is a high-priority area.

Preserve the existing category architecture:

```text
MBA
Management
Data Science
AI & ML
Engineering
Healthcare
```

Preserve the current three-course-card structure.

## FIX 1 — Placeholder imagery

Remove the current course image placeholder.

Use actual course imagery from existing project assets if available.

If appropriate assets are unavailable:

* use a clean branded visual
* use course-related iconography
* do not use obviously empty placeholder boxes

The result must look production-ready.

---

# 14. COURSE COUNTRY FLAG BUG

Find the hardcoded country flag.

Current behavior effectively uses:

```tsx
🇺🇸
```

for courses regardless of actual course destination.

This is a data/UI correctness problem.

## FIX

Add country metadata to each course object.

Example:

```ts
{
  title: "...",
  university: "...",
  country: "USA",
  countryCode: "US",
  flag: "🇺🇸"
}
```

or use a proper country-flag component/package if the project already uses one.

Render the correct country dynamically.

Never hardcode a USA flag into every course card.

---

# 15. COURSE BROCHURE CTA

`Download Brochure` must perform a real action.

Choose the implementation that matches the existing lead-generation architecture.

Preferred flow if brochure access requires lead capture:

```text
Download Brochure
        ↓
Lead Popup
        ↓
Mobile number
        ↓
Submit
        ↓
Brochure download / delivery
```

If brochures already exist and don't require lead capture, provide a real downloadable asset.

Do not fake the interaction.

Do not invent PDF paths.

If the repository does not contain brochure files, keep the CTA wired to the lead flow rather than creating fake files.

---

# 16. SCHOLARSHIP SECTION

Preserve the existing six-category visual composition:

```text
Merit-Based Scholarships
University Scholarships
Education Loan Assistance

Financial Planning Support
Government Scholarships
Sports & Talent Scholarship
```

Keep the student-centered composition.

## Improve:

* hierarchy
* label readability
* hover/focus behavior
* mobile stacking
* CTA functionality

Make scholarship labels interactive only if a valid destination/action exists.

Do not make decorative labels appear like links if they aren't links.

The primary CTA should open the lead flow.

---

# 17. SERVICES SECTION

Preserve the existing six services:

```text
Free Study Abroad Counselling
University & Course Selection
SOP, LOR & Application Assistance
Scholarship & Education Loan Support
Visa Documentation & Interview Training
Pre-Departure & Accommodation
```

Improve the cards visually.

Recommended interaction:

```text
Icon
Title
Description
Arrow
```

On hover:

* subtle elevation
* subtle background shift
* icon movement
* arrow movement

Do NOT add excessive animations.

If service detail routes exist, make the cards clickable.

If they don't exist, don't create fake URLs.

The counselling service must have a clear CTA to the lead flow.

---

# 18. WHY CHOOSE US

Preserve the existing comparison:

```text
Other Consultants
vs
Our Approach
```

Keep the strong blue/pink visual hierarchy.

Improve:

* readability
* spacing
* responsive behavior
* accessibility

Add one conversion CTA beneath the comparison.

Suggested concept:

```text
Get Free Profile Assessment
```

It should use the lead-popup system.

Do not make unsupported claims.

---

# 19. FAQ

Preserve the existing accordion behavior.

Only one item should be open at a time unless there is a strong UX reason to change it.

Ensure:

```text
aria-expanded
aria-controls
button semantics
keyboard support
focus states
```

are correct.

Add useful high-intent questions only when supported by the business information.

Potential topics:

```text
Is counselling free?
Can I study abroad with a low CGPA?
Can I study abroad without IELTS?
Do you help with education loans?
Do you help with accommodation?
How early should I start my application?
Do you help with visa preparation?
```

Do not invent policy answers.

If an answer is unknown, don't fabricate it.

---

# 20. MOBILE UX

Mobile must be treated as a first-class experience.

Audit every section at:

```text
320px
360px
375px
390px
414px
430px
```

Ensure:

* no horizontal overflow
* no clipped text
* no oversized headings
* no overlapping floating badges
* no unusable carousel
* no CTA collision
* no tiny touch targets
* no accidental page scroll lock

Minimum touch target:

```text
44px
```

where practical.

---

# 21. MOBILE STICKY CTA

Add a subtle mobile-only sticky conversion CTA if it does not conflict with the existing design.

Concept:

```text
┌─────────────────────────────────┐
│  Book Free Counselling       →  │
└─────────────────────────────────┘
```

Requirements:

* mobile only
* doesn't cover important content
* respects safe-area inset
* doesn't cover cookie banners/modals
* accessible
* easy to dismiss only if necessary
* uses the existing lead-popup flow

Do not make it visually aggressive.

---

# 22. ACCESSIBILITY

Perform a complete accessibility pass.

Check:

## Semantic HTML

Use:

```html
header
nav
main
section
article
footer
button
a
h1
h2
h3
```

appropriately.

Do not use clickable `<div>` elements when a button/link is appropriate.

## Heading hierarchy

Ensure:

```text
H1
 ├── H2
 │    ├── H3
 │    └── H3
 ├── H2
 │    └── H3
```

No random heading jumps.

## Keyboard

Everything interactive must work without a mouse.

## Focus

Add visible:

```css
focus-visible
```

states.

Use the brand system rather than ugly browser-default focus rings.

## Screen readers

Ensure:

* meaningful alt text
* decorative images use empty alt
* icon-only buttons have aria-label
* carousel controls are labelled
* accordion state is announced
* interactive states are understandable

## Motion

Respect:

```text
prefers-reduced-motion
```

---

# 23. IMAGE ACCESSIBILITY

Audit every `<Image>`.

Rules:

## Informative image

Use meaningful alt text.

## Decorative image

Use:

```tsx
alt=""
```

Do not write meaningless alt text like:

```text
image
photo
picture
student image
```

unless it actually describes useful content.

---

# 24. PERFORMANCE

Audit:

* image sizes
* image formats
* lazy loading
* priority loading
* font loading
* GSAP usage
* animation frequency
* layout shifts
* unnecessary rerenders
* large client components
* duplicated dependencies

## Above fold

Only critical Hero assets should use priority loading.

Do not mark every image as priority.

## Below fold

Use lazy loading where appropriate.

## Animation

Do not use JavaScript animation where CSS can accomplish the same result.

Use GSAP only where its capabilities provide real value.

---

# 25. GSAP

Preserve GSAP where it is justified:

```text
Hero
Country carousel
```

Do not spread GSAP into every component.

For simple hover interactions use CSS.

Example:

```css
transition
transform
opacity
```

Avoid unnecessary animation timelines.

Always clean up GSAP animations on unmount.

---

# 26. CODE QUALITY

Refactor repeated code carefully.

Create reusable components where they genuinely improve maintainability.

Potential shared components:

```text
SectionHeader
PrimaryButton
SecondaryButton
LeadCTA
IconButton
```

Potential shared constants:

```text
colors
spacing
font variables
CTA sources
```

Do NOT over-engineer.

Do not create 50 abstractions for simple JSX.

---

# 27. DATA ARCHITECTURE

Keep content data separate from rendering logic where practical.

For example:

```ts
const destinations = [...]
const courses = [...]
const services = [...]
const faqs = [...]
```

This pattern already exists and should be preserved/improved.

Use proper TypeScript types.

Avoid:

```ts
any
```

unless genuinely unavoidable.

Use explicit types for:

* course
* destination
* service
* FAQ
* CTA source
* company

---

# 28. TYPESCRIPT

Run a strict TypeScript review.

Fix:

* unused imports
* incorrect types
* implicit any
* unsafe casts
* unnecessary `as`
* missing null checks
* incorrect event types
* invalid refs
* dead variables

Do not weaken TypeScript configuration just to make the build pass.

---

# 29. REACT QUALITY

Audit:

* `useEffect`
* `useState`
* `useRef`
* dependency arrays
* stale closures
* unnecessary rerenders
* event listeners
* timers
* animation cleanup

Every effect must have a clear reason.

Every global event listener must be removed.

Every timeout/animation should be safely cleaned up where necessary.

---

# 30. CLIENT COMPONENTS

Do not automatically mark every component as:

```tsx
"use client";
```

Only use client components where interaction/state/browser APIs require them.

However, do not force server conversion if it makes the architecture unnecessarily complicated.

Preserve functionality first.

---

# 31. RESPONSIVE DESIGN

Audit all Tailwind breakpoints.

Avoid excessive arbitrary values where reusable responsive values are more appropriate.

Do not destroy carefully tuned positioning without testing.

Pay particular attention to:

* Hero student image
* About student image
* trust badges
* country carousel
* scholarship labels
* course cards
* sticky CTA

---

# 32. VISUAL CONSISTENCY

Every section should feel like part of the same brand.

Maintain:

```text
Blue
Pink
White
Dark
DM Sans
Hedvig Serif
Rounded shapes
Clean editorial layout
```

Standardize:

* button radius
* card radius
* section spacing
* heading spacing
* eyebrow styling
* icon sizes
* CTA height

Do not make every section identical.

Consistency ≠ repetition.

---

# 33. HOVER STATES

Add polished but subtle hover states to interactive elements.

Buttons:

```text
background shift
small arrow movement
```

Cards:

```text
subtle lift
border/background change
```

Links:

```text
underline/opacity/color transition
```

Avoid:

* large scaling
* excessive rotation
* bouncing
* flashing
* distracting effects

---

# 34. FOCUS STATES

Every interactive element needs a visible keyboard focus state.

Especially:

* Hero CTA
* navigation cards
* carousel buttons
* course controls
* course CTA
* scholarship CTA
* service cards
* FAQ buttons
* sticky CTA

Use `focus-visible`, not permanent focus styling.

---

# 35. ERROR PREVENTION

Before finishing, search for:

```text
href="#"
href=""
onClick={() => {}}
<button>
```

and other signs of incomplete functionality.

Also search for:

```text
TODO
FIXME
placeholder
coming soon
```

Remove unfinished UI from production.

---

# 36. DEAD CODE

Remove:

* unused imports
* unused state
* unused refs
* unused helper functions
* obsolete comments
* duplicate CSS
* dead animation logic

Do not remove code merely because it looks unnecessary without understanding its purpose.

---

# 37. SECURITY / ROBUSTNESS

Do not:

* expose API keys
* hardcode secrets
* insert unsafe HTML
* use `dangerouslySetInnerHTML` unnecessarily
* trust arbitrary external input
* add untrusted third-party scripts without need

If lead-form integration exists, preserve secure handling.

---

# 38. SEO

Perform a frontend SEO review.

Ensure:

* exactly one primary H1
* meaningful title metadata at page level
* meaningful description
* semantic headings
* useful image alt text
* internal links work
* anchor labels are descriptive

Do not keyword-stuff content.

Study-abroad keywords should appear naturally.

---

# 39. CONVERSION OPTIMIZATION

The page's main conversion is:

```text
Book Free Counselling
```

Every major section should answer one question:

### Hero

"What do you do?"

### About

"Can I trust you?"

### Countries

"Where can I study?"

### Courses

"What can I study?"

### Scholarships

"How can I afford it?"

### Services

"What help do I get?"

### Why Choose Us

"Why should I choose you?"

### FAQ

"What objections/questions do I still have?"

### Final CTA

"What should I do next?"

Do not turn the page into a sales-heavy landing page.

Keep the premium editorial feel.

---

# 40. CTA SOURCE TRACKING

Where the existing lead system supports it, distinguish CTA sources.

Example:

```ts
type LeadSource =
  | "hero_primary_cta"
  | "about_cta"
  | "country_cta"
  | "course_brochure"
  | "course_guidance"
  | "scholarship_cta"
  | "service_cta"
  | "why_choose_cta"
  | "faq_cta"
  | "mobile_sticky_cta";
```

Do not break the existing lead-popup API.

---

# 41. DO NOT FABRICATE BUSINESS INFORMATION

This is extremely important.

Do NOT invent:

* university partnerships
* placement numbers
* visa success rates
* company relationships
* scholarship guarantees
* loan approval guarantees
* immigration outcomes
* employment guarantees

Preserve existing factual content unless there is verified source data in the project.

If a UI improvement requires a fact that does not exist, use neutral wording rather than inventing data.

---

# 42. DO NOT BREAK EXISTING ROUTES

Before changing links, inspect existing routes.

Do not invent:

```text
/countries
/universities
/brochures
/profile
```

unless those routes actually exist.

Use the existing route structure.

If a route doesn't exist but the action should be a lead capture, use the lead popup instead.

---

# 43. NO UNNECESSARY PACKAGES

Before installing anything:

1. Check existing dependencies.
2. Check whether the functionality can be implemented using existing packages.
3. Prefer existing:

   * Lucide
   * Next Image
   * GSAP
   * Tailwind
   * React/Next primitives

Only add a package when there is a clear benefit.

If using a logo/flag package, ensure it is compatible with the existing Next.js setup.

---

# 44. FINAL TESTING

After modifications, perform a full mental/code audit for:

## Desktop

```text
1280
1440
1920
```

## Tablet

```text
768
820
1024
```

## Mobile

```text
320
360
375
390
414
430
```

Check:

* overflow
* spacing
* image cropping
* text wrapping
* button sizes
* carousel
* animations
* CTA visibility
* sticky CTA
* modal behavior

---

# 45. FUNCTIONAL TEST CHECKLIST

Verify every item:

```text
[ ] Hero CTA opens lead popup
[ ] Hero secondary CTA works
[ ] Quick navigation cards work
[ ] About CTA works
[ ] Country previous works
[ ] Country next works
[ ] Country pagination works
[ ] Country swipe works
[ ] Country keyboard interaction works
[ ] View all countries works
[ ] Course category switching works
[ ] Course previous/next works
[ ] Course brochure CTA works
[ ] Course country flags are correct
[ ] Scholarship CTA works
[ ] Scholarship exploration works
[ ] Service interactions work
[ ] Why Choose CTA works
[ ] FAQ opens/closes
[ ] FAQ keyboard works
[ ] Mobile sticky CTA works
```

---

# 46. ACCESSIBILITY TEST CHECKLIST

```text
[ ] Keyboard navigation works
[ ] Visible focus states
[ ] Correct heading hierarchy
[ ] Correct button/link semantics
[ ] Alt text reviewed
[ ] Decorative images have alt=""
[ ] Icon-only buttons have aria-label
[ ] Carousel semantics correct
[ ] FAQ aria-expanded correct
[ ] FAQ aria-controls correct
[ ] Reduced motion supported
[ ] Touch targets approximately 44px+
[ ] No keyboard traps
```

---

# 47. PERFORMANCE TEST CHECKLIST

```text
[ ] No unnecessary priority images
[ ] Images optimized
[ ] Below-fold images lazy loaded
[ ] No excessive JS animation
[ ] GSAP cleanup correct
[ ] Event listeners cleaned up
[ ] No animation memory leaks
[ ] Fonts centralized
[ ] No unnecessary client components
[ ] No unnecessary package dependencies
```

---

# 48. FINAL CODE STANDARD

The final implementation must be:

* clean
* readable
* typed
* modular
* responsive
* accessible
* performant
* production-ready

Do not produce a superficial patch.

Actually inspect the existing implementation and modify the real code.

Do not merely explain what should be changed.

---

# 49. IMPORTANT IMPLEMENTATION RULE

When fixing something, **preserve existing working functionality**.

Do not rewrite a working component just because you personally would structure it differently.

Only refactor when it provides a real benefit:

```text
better maintainability
better performance
better accessibility
less duplication
better correctness
```

---

# 50. FINAL DELIVERABLE

After completing the implementation:

1. Return the complete updated code for every modified file.
2. Clearly identify each modified file.
3. Do not omit unchanged surrounding code from a modified file.
4. Do not use placeholders such as:

```text
// rest of code...
// existing code...
// same as before...
```

5. Make sure all imports are included.
6. Make sure all TypeScript types are included.
7. Make sure all dependencies are valid.
8. Make sure all paths are real or already present in the repository.
9. Make sure there are no dead buttons.
10. Make sure there are no obvious UX regressions.

---

# 51. FINAL ACCEPTANCE CRITERIA

Consider the task complete only when:

### UX

```text
9/10+
```

The interface should feel:

* intuitive
* premium
* trustworthy
* easy to scan
* conversion-oriented
* not over-designed

### UI

```text
9/10+
```

The existing visual identity should feel cohesive across every section.

### Accessibility

```text
WCAG-conscious
```

Keyboard, focus, semantics, alt text and reduced-motion behavior must be addressed.

### Code quality

```text
production-ready
```

No obvious dead code, broken handlers, incorrect flags, placeholders or duplicated architecture.

### Conversion

Every major user intent must have a clear next action:

```text
Country → Explore
Course → Get guidance / Brochure
Scholarship → Get financial guidance
Service → Get help
FAQ → Talk to counsellor
```

And the primary conversion remains:

```text
BOOK FREE COUNSELLING
```

---

# MOST IMPORTANT PRIORITIES

If you need to prioritize work, follow this exact order:

```text
P0
1. Fix all dead CTAs
2. Centralize and connect lead-popup flow
3. Fix course country flag bug
4. Replace course placeholders
5. Verify all interactive elements

P1
6. Improve mobile conversion
7. Add mobile sticky counselling CTA
8. Improve country carousel accessibility
9. Improve service interactions
10. Improve FAQ objections
11. Improve CTA wording

P2
12. Centralize fonts
13. Create design tokens
14. Reuse buttons/section headers
15. Improve focus states
16. Optimize images
17. Clean TypeScript/React code
18. Reduce unnecessary animation

P3
19. Micro-interactions
20. Visual polish
21. Additional animation only where useful
```

## FINAL INSTRUCTION

**Do not change the website's fundamental section structure.**

The goal is not to create a different website.

The goal is to take the existing HighEd website and make it feel like the **finished, production-grade version of the design that is already there**.

Prioritize:

**functionality → UX → conversion → accessibility → performance → maintainability → visual polish.**

Do not stop after identifying problems.

**Implement the fixes.**
