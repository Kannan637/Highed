# MASTER INSTRUCTION: 12-COLUMN DESKTOP + 4-COLUMN MOBILE GRID SYSTEM

## 1. PRIMARY OBJECTIVE

Refactor and maintain the entire website using a **strict responsive grid system**:

* **Desktop / large screens:** 12-column grid
* **Mobile:** 4-column grid
* **Tablet:** intelligently adapt between the two systems while preserving alignment
* Every major section, component, card, image, heading, form, CTA, and content block must align to the grid.
* Do **not** create arbitrary widths or positioning that breaks the grid.
* The grid must remain visually consistent across the entire website.

The goal is a professional, production-grade layout comparable to a modern SaaS, education, fintech, or premium corporate website.

---

# 2. GRID PHILOSOPHY

Treat the grid as the **structural foundation of the entire UI**, not merely a CSS utility.

Every section should have:

```text
Viewport
└── Container
    └── 12-column desktop grid
        ├── Column 1
        ├── Column 2
        ├── ...
        └── Column 12
```

On mobile:

```text
Viewport
└── Container
    └── 4-column mobile grid
        ├── Column 1
        ├── Column 2
        ├── Column 3
        └── Column 4
```

Components should be positioned by **column span**, not arbitrary pixel positioning.

---

# 3. DESKTOP GRID

Use a 12-column grid at desktop breakpoints.

Recommended structure:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}
```

Use responsive gaps rather than manually calculated widths.

Recommended:

```css
gap: 24px;
```

For large desktop:

```css
gap: 32px;
```

The exact gap may adapt responsively, but the column structure must remain 12 columns.

---

# 4. MOBILE GRID

Mobile must use exactly **4 columns**.

```css
grid-template-columns: repeat(4, minmax(0, 1fr));
```

Recommended mobile gap:

```css
gap: 12px;
```

or:

```css
gap: 16px;
```

depending on available viewport width.

Do not use a desktop 12-column grid compressed into mobile.

Mobile must explicitly transition to:

```text
4 columns
```

---

# 5. CONTAINER SYSTEM

Create one consistent global container system.

Example:

```css
.container {
  width: 100%;
  margin-inline: auto;
  padding-inline: 24px;
}

@media (min-width: 640px) {
  .container {
    padding-inline: 32px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1280px;
    padding-inline: 32px;
  }
}

@media (min-width: 1440px) {
  .container {
    max-width: 1440px;
    padding-inline: 48px;
  }
}
```

Do not create different container widths randomly for individual sections.

If a section genuinely requires a different content width, use a deliberate nested container.

---

# 6. COLUMN SPAN RULES

Use column spans to define layout.

### Desktop examples

Full width:

```text
12 / 12
```

Half:

```text
6 / 12
```

One-third:

```text
4 / 12
```

Two-thirds:

```text
8 / 12
```

Quarter:

```text
3 / 12
```

Large content + sidebar:

```text
8 / 12 + 4 / 12
```

Main + smaller sidebar:

```text
9 / 12 + 3 / 12
```

Three equal cards:

```text
4 / 12 + 4 / 12 + 4 / 12
```

Four equal cards:

```text
3 / 12 + 3 / 12 + 3 / 12 + 3 / 12
```

---

# 7. MOBILE COLUMN SPANS

On mobile, use the 4-column system.

Full width:

```text
4 / 4
```

Half:

```text
2 / 4
```

Quarter:

```text
1 / 4
```

For most content:

```text
4 / 4
```

Avoid unnecessarily squeezing content into 1 or 2 columns.

Example:

```text
Desktop:
[ 6 columns ] [ 6 columns ]

Mobile:
[ 4 columns ]
[ 4 columns ]
```

---

# 8. HERO SECTION

The hero must strictly follow the grid.

### Desktop

Example:

```text
┌──────────────────────────────────────────────┐
│                                              │
│  COL 1 ───────── COL 7 │ COL 8 ───── COL 12│
│                         │                    │
│  Heading               │ Student Image      │
│  Description           │                    │
│  CTA                    │                    │
│                         │                    │
└──────────────────────────────────────────────┘
```

Recommended:

```text
Content: 6–7 columns
Visual: 5–6 columns
```

### Mobile

Everything should stack using the 4-column grid:

```text
┌──────────────────┐
│ Heading          │
│ 4 columns        │
├──────────────────┤
│ Description      │
│ 4 columns        │
├──────────────────┤
│ CTA              │
│ 4 columns        │
├──────────────────┤
│ Image            │
│ 4 columns        │
└──────────────────┘
```

Do not use absolute positioning to force the hero image into a location that violates the grid.

---

# 9. NAVBAR

Navbar content should align with the same global container.

Desktop:

```text
Logo       Navigation                CTA
│              │                     │
└──────────────┴─────────────────────┘
```

The navbar's left and right edges should align with the primary page content.

Mobile:

* Logo
* Menu button
* Optional CTA
* No horizontal overflow
* No desktop navigation squeezed into 4 columns

---

# 10. SECTION HEADERS

Section headings should align to grid columns.

Example:

```text
Desktop:

COL 1 ───────── COL 8
[ Section label ]
[ Large heading ]
[ Description ]
```

Do not center every section automatically.

Use intentional alignment.

For centered sections:

```text
COL 3 ───────────── COL 10
```

or another balanced grid span.

---

# 11. CARDS

Cards must use predictable grid spans.

Desktop:

```text
3 cards:
[ 4 ] [ 4 ] [ 4 ]

4 cards:
[ 3 ] [ 3 ] [ 3 ] [ 3 ]
```

Mobile:

```text
[ 4 ]
[ 4 ]
[ 4 ]
[ 4 ]
```

Avoid:

```text
width: 387px;
width: 421px;
width: 31.7%;
```

when the width is being used to imitate a grid.

Use:

```css
grid-column: span 4;
```

or:

```css
grid-column: span 3;
```

---

# 12. IMAGE PLACEMENT

Images must respect the grid.

Do not randomly position images with:

```css
left: 137px;
right: 83px;
top: 42px;
```

unless the positioning is purely decorative and does not affect layout.

Prefer:

```css
grid-column: span 5;
```

or:

```css
grid-column: 8 / span 5;
```

Decorative elements may use absolute positioning, but the **primary content structure must remain grid-based**.

---

# 13. FORMS

Forms should follow the same grid.

Desktop:

```text
First name       Last name
[ 6 columns ]   [ 6 columns ]

Email
[ 12 columns ]

Phone            Country
[ 6 columns ]   [ 6 columns ]

CTA
[ 12 columns ]
```

Mobile:

```text
First name
[ 4 columns ]

Last name
[ 4 columns ]

Email
[ 4 columns ]

Phone
[ 4 columns ]

CTA
[ 4 columns ]
```

---

# 14. FOOTER

Desktop footer should use the 12-column grid.

Example:

```text
Brand          Company      Resources      Contact
4 columns      2 columns    3 columns      3 columns
```

Mobile:

```text
Brand
4 columns

Company
4 columns

Resources
4 columns

Contact
4 columns
```

Do not allow footer content to create horizontal scrolling.

---

# 15. RESPONSIVE BREAKPOINTS

Use a consistent breakpoint strategy.

Suggested:

```text
Mobile:       < 640px
Small tablet: 640px+
Tablet:       768px+
Desktop:      1024px+
Large:        1280px+
XL:           1536px+
```

The exact Tailwind breakpoints may be used if the project already uses Tailwind.

Do not introduce unnecessary custom breakpoints.

---

# 16. TAILWIND IMPLEMENTATION

If the project uses Tailwind CSS, use patterns such as:

```tsx
<div className="grid grid-cols-4 gap-4 lg:grid-cols-12 lg:gap-6">
```

Desktop:

```tsx
lg:col-span-6
```

Mobile:

```tsx
col-span-4
```

Example:

```tsx
<div className="col-span-4 lg:col-span-6">
```

Example:

```tsx
<div className="col-span-4 lg:col-span-4">
```

Example:

```tsx
<div className="col-span-2 lg:col-span-3">
```

Do not use arbitrary pixel widths when a grid span can solve the problem.

---

# 17. CSS GRID NAMING

Where useful, create reusable utilities/components.

Example:

```tsx
<section className="container">
  <div className="grid grid-cols-4 gap-4 lg:grid-cols-12 lg:gap-6">
    ...
  </div>
</section>
```

This should become the standard section structure.

---

# 18. NESTED GRIDS

Nested grids are allowed.

Example:

```text
Parent:
12 columns

Main content:
8 columns

Inside main content:
4-column nested grid
```

Use nested grids when they make the design clearer.

Do not force everything into one giant grid.

---

# 19. SPACING SYSTEM

Grid alignment and spacing must work together.

Use a consistent spacing scale.

Prefer:

```text
4
8
12
16
20
24
32
40
48
64
80
96
120
```

Avoid random values such as:

```text
17px
29px
37px
53px
71px
```

unless there is a specific visual reason.

---

# 20. TYPOGRAPHY MUST ALSO ALIGN TO THE GRID

Headings should not randomly span the entire viewport.

Example:

```text
Desktop:

COL 2 ───────────── COL 9

Study Abroad With Confidence
```

The text width should be deliberately controlled.

Avoid extremely long text lines.

Use:

```css
max-width
```

or grid spans.

---

# 21. BUTTONS AND CTA GROUPS

CTA groups must remain aligned.

Desktop:

```text
[Primary CTA] [Secondary CTA]
```

Mobile:

```text
[Primary CTA]
[Secondary CTA]
```

Buttons should never overflow the 4-column mobile container.

---

# 22. MOBILE-FIRST DEVELOPMENT

Build components mobile-first.

Start with:

```text
4-column mobile layout
```

Then enhance at desktop:

```text
12-column desktop layout
```

Do not build desktop first and simply shrink it.

---

# 23. MOBILE REQUIREMENTS

At mobile widths:

* No horizontal scrolling
* No clipped content
* No overlapping cards
* No text extending outside containers
* No fixed desktop widths
* No desktop navigation overflow
* Images must scale correctly
* Buttons must remain tappable
* Cards must stack logically
* Grid alignment must remain consistent
* Touch targets should be comfortably sized
* Important content must not be hidden simply to make the layout fit

Test at minimum:

```text
320px
360px
375px
390px
414px
430px
```

---

# 24. DESKTOP REQUIREMENTS

Test at:

```text
1024px
1280px
1440px
1536px
1920px
```

The layout must remain visually intentional at every width.

Do not simply stretch content indefinitely.

---

# 25. TABLET BEHAVIOR

Tablet should not become a broken desktop layout.

Use responsive transitions such as:

```text
Mobile:
4 columns

Tablet:
4 columns / flexible intermediate composition

Desktop:
12 columns
```

For complicated sections, allow cards to move from:

```text
4 → 2 → 3/4 desktop columns
```

depending on the content.

---

# 26. ABSOLUTE POSITIONING RULE

Absolute positioning is allowed ONLY for:

* Decorative shapes
* Background graphics
* Floating visual elements
* Badges
* Overlays
* Controlled image compositions

Do NOT use absolute positioning for:

* Main headings
* Paragraphs
* Forms
* Navigation structure
* Card layout
* Primary CTA positioning
* Main page columns

If an element can be positioned using CSS Grid or Flexbox, use Grid/Flexbox.

---

# 27. FIXED WIDTH RULE

Avoid hard-coded widths such as:

```css
width: 500px;
width: 720px;
width: 43vw;
```

for structural components.

Prefer:

```text
grid-column
max-width
width: 100%
minmax()
clamp()
```

Fixed widths may be used for small UI elements where appropriate, such as icons, avatars, or buttons.

---

# 28. IMAGES MUST NOT BREAK THE GRID

Use:

```css
width: 100%;
height: auto;
object-fit: cover;
```

or appropriate aspect-ratio containers.

For Next.js:

```tsx
<Image
  fill
  className="object-cover"
  ...
/>
```

inside a grid-aligned container.

Do not allow image dimensions to determine the page layout unexpectedly.

---

# 29. DESIGN CONSISTENCY

The following must share the same alignment system:

* Navbar
* Hero
* Statistics
* Services
* Study destinations
* Scholarships
* Education loans
* Testimonials
* University sections
* Company/logo sections
* Forms
* FAQ
* CTA
* Footer

A user should be able to visually perceive one continuous vertical alignment system across the page.

---

# 30. COMPONENT ARCHITECTURE

Create reusable layout primitives where appropriate.

For example:

```tsx
<Container>
  <Grid>
    <GridItem span={{ mobile: 4, desktop: 6 }}>
      ...
    </GridItem>
  </Grid>
</Container>
```

If creating abstractions would overcomplicate the existing codebase, use Tailwind classes directly.

The priority is:

```text
Consistency > abstraction
```

---

# 31. DO NOT OVER-ENGINEER

Do not create a complicated design-system framework just to implement the grid.

Use the existing:

* React
* Next.js
* Tailwind
* CSS
* Component architecture

already present in the project.

Modify the minimum necessary architecture.

---

# 32. EXISTING DESIGN MUST BE PRESERVED

While implementing the grid:

**Do not unnecessarily redesign the visual identity.**

Preserve:

* Brand colors
* Typography
* Existing visual hierarchy
* Images
* Icons
* Content
* CTA intent
* Existing component behavior

Change the underlying layout where necessary so everything follows the grid.

---

# 33. ACCESSIBILITY

Grid implementation must not negatively affect accessibility.

Ensure:

* Correct heading hierarchy
* Keyboard navigation
* Visible focus states
* Proper button semantics
* Proper form labels
* Accessible images
* Meaningful alt text
* Sufficient touch target sizes
* No content becomes inaccessible on mobile

Do not use CSS positioning that changes visual order while leaving confusing DOM order.

---

# 34. PERFORMANCE

Do not sacrifice performance for the grid.

Avoid:

* Excessive nested wrappers
* Unnecessary JavaScript for layout
* JS-based viewport calculations
* Resize listeners for basic responsive layout
* Duplicate desktop/mobile components unless genuinely necessary

Prefer native CSS Grid and media queries.

---

# 35. CODE QUALITY

While making changes:

* Remove obsolete layout classes
* Remove conflicting styles
* Remove unnecessary absolute positioning
* Remove duplicate responsive rules
* Remove dead CSS
* Keep class names readable
* Keep components maintainable
* Do not introduce CSS hacks
* Do not use `!important` unless absolutely necessary

---

# 36. GRID AUDIT

Before considering the task complete, audit every major section.

For each section answer:

```text
1. Is the content inside the global container?
2. Does desktop use 12 columns?
3. Does mobile use 4 columns?
4. Are major elements assigned deliberate spans?
5. Are gaps consistent?
6. Are images aligned?
7. Is typography aligned?
8. Are CTAs aligned?
9. Is there any arbitrary structural positioning?
10. Does the section work at 320px?
11. Does it work at 390px?
12. Does it work at 768px?
13. Does it work at 1024px?
14. Does it work at 1440px?
15. Is there any horizontal overflow?
```

---

# 37. VISUAL QA

After implementation, inspect the website at:

### Mobile

```text
320 × 800
360 × 800
375 × 812
390 × 844
414 × 896
430 × 932
```

### Tablet

```text
768 × 1024
834 × 1194
1024 × 1366
```

### Desktop

```text
1280 × 720
1440 × 900
1536 × 864
1920 × 1080
```

Look specifically for:

* Misaligned edges
* Uneven gutters
* Unexpected wrapping
* Overflow
* Overlapping elements
* Inconsistent card widths
* Excessive whitespace
* Broken image crops
* CTA misalignment
* Typography breaking
* Sections that visually jump between grid positions

---

# 38. ACCEPTANCE CRITERIA

The implementation is complete only when:

### Grid

* [ ] Desktop uses 12 columns
* [ ] Mobile uses 4 columns
* [ ] Major sections share the same container
* [ ] Column spans are intentional
* [ ] Gaps are consistent

### Responsive

* [ ] 320px works
* [ ] 360px works
* [ ] 390px works
* [ ] 414px works
* [ ] 768px works
* [ ] 1024px works
* [ ] 1280px works
* [ ] 1440px works
* [ ] 1920px works

### UX

* [ ] No horizontal scrolling
* [ ] No clipped content
* [ ] No accidental overlap
* [ ] Buttons remain usable
* [ ] Navigation works
* [ ] Forms work
* [ ] Images remain visually correct
* [ ] Content hierarchy remains clear

### Code

* [ ] No unnecessary fixed structural widths
* [ ] No layout hacks
* [ ] No unnecessary absolute positioning
* [ ] No duplicate responsive components
* [ ] No unnecessary JavaScript for layout
* [ ] Existing functionality remains intact

---

# 39. IMPORTANT IMPLEMENTATION RULE

Whenever you encounter an existing component with something like:

```css
width: 40%;
margin-left: 17%;
left: 120px;
position: absolute;
```

do NOT automatically preserve it.

First determine whether the component should instead be represented as:

```text
grid-column: X / span Y
```

or:

```text
grid-column: span Y
```

The **12/4 grid should be the source of truth for structural positioning.**

---

# 40. FINAL AGENT INSTRUCTION

Work through the entire website systematically.

### Step 1

Inspect the complete codebase.

### Step 2

Identify all page-level sections and reusable components.

### Step 3

Identify existing containers, grids, flex layouts, absolute positioning, fixed widths, and responsive breakpoints.

### Step 4

Create/standardize the global container and grid system.

### Step 5

Convert each major desktop section to the 12-column grid.

### Step 6

Convert each mobile section to the 4-column grid.

### Step 7

Fix tablet behavior.

### Step 8

Remove layout hacks that are no longer necessary.

### Step 9

Check typography, images, cards, forms, CTAs, navbar, and footer against the grid.

### Step 10

Run the complete responsive QA.

### Step 11

Fix every overflow, alignment, spacing, wrapping, and positioning issue discovered.

### Step 12

Do a final code-quality pass.

**Do not stop after implementing the grid on only the homepage. Apply the system consistently across the entire website and all reusable components.**

The final result should feel like **one coherent design system**, where elements line up naturally across sections and the desktop/mobile layouts are intentionally designed rather than simply resized.
