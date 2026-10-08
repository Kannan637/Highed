# HighEd — Master Project Brain (`CLAUDE.md`)

This repository is **HighEd**, an enterprise-grade, high-converting Study Abroad Consultancy web application and administrative platform designed primarily for students and parents across Tamil Nadu, India, targeting overseas education opportunities in the USA, UK, Canada, Australia, Germany, Dubai, and Ireland.

---

## 1. Project Identity & Business Context

- **Business Name:** HighEd Overseas Education
- **Business Model:** Premium Study Abroad Consultancy (Admissions, Visas, Scholarships, Education Loans, Test Prep)
- **Primary Audience:** Students (UG/PG aspirants) and parents evaluating international education pathways
- **Primary Regional Focus:** Tamil Nadu, India (Key operational cities: Chennai, Coimbatore, Madurai, Vellore, Salem, Tiruppur, Tiruchirappalli, Tiruvallur)
- **Target Destinations:** USA, UK, Canada, Australia, Germany, Dubai, Ireland
- **Primary Conversion Goal:** Qualified lead generation & 1-on-1 counselling bookings
- **Primary Action (CTA):** "Book Free Counselling" (LeadCTAButton with lead modal or `/book-counselling`)
- **Secondary Action (CTA):** "Talk to an Expert" / "Explore Programs"

---

## 2. Technology Stack & Directory Structure

```text
c:\Users\91637\Documents\Highed
├── .claude/                → AI Engineering System (Brain, Agents, Commands, Skills, Rules)
├── frontend/               → Next.js 16 (App Router) + React 19 + TypeScript 5
│   ├── src/
│   │   ├── app/
│   │   │   ├── (website)/  → Public marketing & information routes
│   │   │   ├── admin/      → HighEd Admin & Dashboard platform
│   │   │   ├── api/        → Serverless Next.js API endpoints
│   │   │   ├── globals.css → Tailwind 4 + Design tokens + Unified motion
│   │   │   ├── sitemap.ts  → Programmatic dynamic SEO sitemap
│   │   │   └── robots.ts   → Crawl directive controller
│   │   ├── components/     → Domain-partitioned UI component tree
│   │   ├── config/         → Site configuration, navigation, brand tokens
│   │   ├── data/           → Destination data, articles, resources, city info
│   │   ├── domain/         → Core domain models & calculations
│   │   ├── hooks/          → UI hooks (useLeadPopup, useAuth, etc.)
│   │   ├── lib/            → Utility functions & helpers
│   │   ├── seo/            → Metadata constructors & structured data schemas
│   │   ├── services/       → Data fetching & API service abstractions
│   │   └── types/          → TypeScript interfaces & schema definitions
│   └── tests/              → Automated Python pytest test suites (smoke, leads, responsive)
└── Backend/                → Backend service configurations & environment variables
```

- **Framework:** Next.js 16.3 (React 19.2, TypeScript 5, Node.js)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`) with CSS theme variables
- **UI System:** Custom shadcn/ui-inspired primitives + Base UI + CVA (`class-variance-authority`)
- **Icons:** `lucide-react`
- **Testing:** Automated Python pytest harness (`tests/run_all_tests.py`, `tests/smoke/`, `tests/leads/`, `tests/responsive/`)

---

## 3. Core Architectural Principles

1. **HighEd Functionality Is Sovereign:** Never replace production hooks (`useLeads`, `useLeadPopup`), real data feeds, or API endpoints with mock data or foreign structures.
2. **Strict Single-H1 Rule:** Exactly one semantic `<h1>` tag per page for unambiguous SEO hierarchy.
3. **No Decorative Bloat:** Avoid unnecessary gradients, heavy drop shadows, or unconstrained animations. Keep visual design clean, editorial, responsive, and trustworthy.
4. **Brand Guidelines Compliance:**
   - **Primary Brand Color:** `#25347B` / `#253A7B` (Deep Navy)
   - **Brand Accent:** `#E93F61` / `#E63A5F` (Crimson Rose)
   - **Surface / Background:** `#F5F5F9` / `#FAFAFA`
   - **Typography:** `DM Sans` (`var(--font-body)` & `var(--font-heading)`)
   - **CTA Styling:** Pill-shaped (`rounded-full`), tactile motion (`btn-motion`), master gradient (`from-[#D9254C] to-[#B91C3C]`) with icon badge.
5. **Mobile-First Responsiveness:** All UI components must function seamlessly across 320px, 375px, 414px, 768px, 1024px, 1280px, and 1440px+.

---

## 4. Priority Hierarchy

When resolving engineering conflicts:
1. **User's Explicit Instruction**
2. **Security & Data Integrity** (No secret exposure, verified inputs)
3. **Production Stability** (Zero broken builds or routing errors)
4. **Accessibility (WCAG 2.2 AA)** (Keyboard navigation, contrast, focus rings)
5. **Performance (Core Web Vitals)** (LCP < 2.5s, CLS < 0.1, INP < 200ms)
6. **Brand Design System Consistency**
7. **Technical SEO Best Practices**
8. **Developer Convenience**

---

## 5. System Directory Navigation

- **Agents (`.claude/agents/`):** Specialized role personas for frontend, UI/UX, SEO, content, accessibility, performance, security, and QA.
- **Commands (`.claude/commands/`):** Repeatable execution workflows (`/audit`, `/ui-audit`, `/seo-audit`, `/responsive-audit`, `/test`, `/fix`, `/optimize`).
- **Skills (`.claude/skills/`):** Deep domain references for brand guidelines, study-abroad destination knowledge, SEO schema patterns, and conversion architecture.
- **Rules (`.claude/rules/`):** Non-negotiable technical standards for architecture, coding, design, accessibility, performance, and security.
