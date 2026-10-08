# Command: `/seo-audit`

## Purpose
Performs a deep technical SEO and search indexability audit across the HighEd website.

## Checklist
1. **Title & Meta Descriptions:**
   - Every route in `frontend/src/app/(website)` defines `generateMetadata` or static `metadata`.
   - Title matches pattern: `<Title> | HighEd Insights` (< 60 chars).
   - Description between 140–160 characters.
2. **Heading Architecture:**
   - Verify exactly one `<h1>` per rendered page.
   - Verify headings do not skip levels (e.g. `h1` directly followed by `h4`).
3. **Structured Data Schemas:**
   - Organization schema present on home page.
   - BreadcrumbList schema on destination and resource subpages.
   - BlogPosting schema on blog article pages (`/blog/[slug]`).
4. **Sitemap & Robots:**
   - Check `frontend/src/app/sitemap.ts` includes all public routes and dynamic slugs.
   - Check `frontend/src/app/robots.ts` disallows admin routes (`/admin`) and allows public crawling.
5. **Local Landing Pages:**
   - Inspect `/best-study-consultant-in/[city]` routes for localized content density, local address data, and geo-targeted keywords.
6. **Canonical & Social Cards:**
   - Ensure canonical URLs are self-referential and absolute.
   - Verify OpenGraph images have explicit URLs and standard 1200x630 dimensions.
