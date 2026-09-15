Update the entire codebase to use the following global typography system consistently across all pages, components, sections, cards, forms, navigation, modals, and reusable UI elements.

### Font System

1. **DM Sans — Titles & Headings**

   * Use for H1, H2, H3, H4, H5, H6
   * Hero headlines
   * Section titles
   * Card titles
   * Major UI headings
   * Recommended weights: 600, 700

2. **Manrope — Descriptions & General UI**

   * Use for body text
   * Paragraphs
   * Descriptions
   * Supporting text
   * Navigation text
   * Buttons
   * Form labels and inputs
   * Card descriptions
   * Recommended weights: 400, 500, 600

3. **Geist Mono — Micro Typography**

   * Use only for small topbars and micro-level UI elements
   * Announcement bars
   * Eyebrow labels
   * Tiny metadata
   * Badges
   * Tags
   * Small category labels
   * Technical/status indicators
   * Recommended weights: 400, 500
   * Use subtle letter spacing where appropriate

### Global CSS Variables

Define:

```css
--font-heading: "DM Sans", sans-serif;
--font-body: "Manrope", sans-serif;
--font-mono: "Geist Mono", monospace;
```

### Typography Rules

```css
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-heading);
}

body {
  font-family: var(--font-body);
}

.topbar,
.eyebrow,
.badge,
.mono-label {
  font-family: var(--font-mono);
}
```

### Implementation Requirements

* First inspect the existing codebase and identify the current font-loading mechanism.
* Replace the existing typography system rather than creating duplicate font definitions.
* Load all three fonts correctly and efficiently.
* Remove obsolete font imports and unused font-family declarations.
* Replace hardcoded font-family values throughout the codebase with the global font variables/tokens.
* Ensure the typography remains consistent across every existing page and reusable component.
* Do not change the existing layout, spacing, colors, component structure, animations, or visual design unless required for font rendering.
* Preserve the existing responsive behavior.
* Do not introduce unnecessary typography variants.
* Ensure font weights used in the UI are actually loaded.
* Check for inherited styles and component-specific overrides that could prevent the new typography system from being applied.
* Maintain a clear hierarchy: **DM Sans → Manrope → Geist Mono**.
* Do not use Geist Mono as the general body font.
* Do not randomly mix fonts within components.

### Final Goal

The entire website should have one consistent typography system:

**DM Sans = hierarchy and titles**
**Manrope = readable content and UI**
**Geist Mono = small technical/micro typography**

Make the implementation production-ready and consistent across the entire codebase.


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Geist+Mono:ital,wght@0,100..900;1,100..900&family=Manrope:wght@200..800&display=swap" rel="stylesheet">