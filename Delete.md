Yes. I went through the **entire pasted codebase — 52,228 source lines / ~1.9 MB**, and traced the import relationships between routes, components, hooks, utilities, data, and admin modules. The biggest issue is **not broken pages; it’s accumulated dead code and duplicated architecture**.

## 1. Definitely unused website components

These have **no incoming import/reference** in the supplied codebase and are safe candidates for removal after one final runtime check:

| Component | Status | Recommendation |
|---|---|---|
| `components/country/CountryCost.tsx` | ❌ Unused | Delete |
| `components/country/CountryCourses&university.tsx` | ⚠️ **USED** | Keep — imported by country page |
| `components/country/CountryIllustration.tsx` | ❌ Unused | Delete |
| `components/country/CountryOverview.tsx` | ❌ Unused | Delete |
| `components/forms/useFocusTrap.ts` | ❌ Unused | Delete |
| `components/layout/MobileStickyCTA.tsx` | ❌ Unused alias | Delete |
| `components/legal/QuickActions.tsx` | ❌ Unused | Delete or integrate |
| `components/seo/ContentReviewed.tsx` | ❌ Unused | Delete or integrate |
| `components/seo/StatsDisclaimer.tsx` | ❌ Unused | Delete or integrate |
| `components/ui/AnimatedShinyText.tsx` | ❌ Unused | Delete |
| `components/ui/Carousel.tsx` | ❌ Unused | Delete |
| `components/ui/GridContainer.tsx` | ❌ Unused | Delete |
| `components/ui/Section.tsx` | ❌ Unused | Delete |
| `components/ui/SkipToContent.tsx` | ❌ Unused | Delete or integrate accessibility feature |
| `components/ui/Textarea.tsx` | ❌ Unused | Delete |
| `components/ui/avatar.tsx` | ❌ Unused | Delete |
| `components/ui/label.tsx` | ❌ Unused | Delete |

The component directory itself is quite large, with many of these sitting beside actively used components. Pasted text

### One important exception

`CountryCourses&university.tsx` initially looks unused from the filename, but it **is actually rendered on every country page**:

```tsx
<CountryWhyStudy country={country} />
<Service />
<Countrtcourese country={country} />
<CountryScholarships country={country} />
```

So **DO NOT delete it**. Pasted text(20261004-141407)

---

# 2. Country page has actual architectural bloat

Your country page currently renders:

```text
CountryHero
CountryFeatureCards
CountryMarquee
CountryWhyStudy
Service
CountryCourses&university
CountryScholarships
CountryIntakes
CountryVisa
CountryRealStories
CountryTestimonials
CountryWhyHighEd
CountryFAQ
CountryRelatedBlogs
CountryCTA
```

That's **15 sections** on one country page. Pasted text(20261004-141407)

But you also have these country components sitting unused:

```text
CountryCost
CountryIllustration
CountryOverview
```

So there are effectively **two generations of country-page architecture mixed together**.

### My recommendation

Keep the current country page architecture and remove:

```text
❌ CountryCost.tsx
❌ CountryIllustration.tsx
❌ CountryOverview.tsx
```

unless you specifically want to reintroduce those sections.

---

# 3. `MobileStickyCTA.tsx` is completely unnecessary

This file is literally an alias:

```tsx
export {
  MobileBottomNav as MobileStickyCTA,
  MobileBottomNav
} from "./MobileBottomNav";

export { default } from "./MobileBottomNav";
```

And there is no usage.

You already render:

```tsx
<MobileBottomNav />
```

inside the website layout. Pasted text(20261004-141407)

So:

```text
❌ MobileStickyCTA.tsx
```

can go.

---

# 4. `AutoOpenLeadPopup.tsx` is dead code

This one is especially worth cleaning.

It contains:

```tsx
useEffect(() => {
  const timer = setTimeout(() => {
    openLeadPopup({
      source: "book_counselling_page"
    });
  }, 400);

  return () => clearTimeout(timer);
}, [openLeadPopup]);

return null;
```

It exists purely for the side effect and **renders nothing**. More importantly, I found no page importing it.

So currently:

```text
AutoOpenLeadPopup.tsx
        ↓
returns null
        ↓
not mounted
        ↓
does absolutely nothing
```

That's dead code.

The book-counselling page already renders its actual `LeadForm`. Pasted text(20261004-141407)

### Recommendation

Delete:

```text
src/app/(website)/book-counselling/AutoOpenLeadPopup.tsx
```

**unless you intentionally want the counselling page to auto-open the popup.**

---

# 5. Unused global hooks

These are currently unreferenced:

```text
❌ src/hooks/useGsap.ts
❌ src/hooks/useMediaQuery.ts
❌ src/hooks/useMobileMenu.ts
❌ src/hooks/useScroll.ts
```

But this is interesting because the project has custom navigation/mobile logic that doesn't use these abstractions.

You should **not keep hooks just because they sound reusable**.

If they aren't used:

```text
delete them
```

The project already has its actual mobile navigation state inside `Navbar` / `MobileNavigation`. Pasted text(20261004-141407)

---

# 6. Unused utility code

Also unused:

```text
❌ src/lib/calculators/validation.ts
❌ src/lib/constants.ts
❌ src/lib/urls.ts
```

These are classic examples of code that looks useful but currently doesn't contribute to the application.

I'd remove them unless you're deliberately reserving them for an upcoming implementation.

---

# 7. Admin panel has a lot of dead UI components

Your admin UI contains:

```text
checkbox.tsx
separator.tsx
skeleton.tsx
switch.tsx
tabs.tsx
tooltip.tsx
```

and:

```text
common/ErrorState.tsx
```

None are referenced by the current admin pages according to the import graph.

The admin component tree confirms they're sitting alongside the actively used UI components. Pasted text

### Delete candidates

```text
❌ admin/components/common/ErrorState.tsx

❌ admin/components/ui/checkbox.tsx
❌ admin/components/ui/separator.tsx
❌ admin/components/ui/skeleton.tsx
❌ admin/components/ui/switch.tsx
❌ admin/components/ui/tabs.tsx
❌ admin/components/ui/tooltip.tsx
```

This is especially relevant because you're already moving the admin toward **shadcn/Base Nova**. Keeping an unused custom UI library beside the new system just creates confusion.

---

# 8. Admin hooks that aren't being used

These are also unreferenced:

```text
❌ admin/hooks/useDebounce.ts
❌ admin/hooks/usePermissions.ts
```

`usePermissions` is particularly suspicious because you already have:

```text
lib/auth/permissions.ts
lib/auth/roles.ts
```

So there are two potential permission architectures.

I'd keep the actual permission implementation and remove the unused hook unless the new admin architecture needs it.

---

# 9. Admin validation files are mostly dead

These are currently unreferenced:

```text
❌ admin/lib/validations/blog.ts
❌ admin/lib/validations/event.ts
❌ admin/lib/validations/lead.ts
❌ admin/lib/validations/login.ts
❌ admin/lib/validations/testimonial.ts
❌ admin/lib/validations/user.ts
```

This is a bigger architectural smell.

You have validation files, but the forms/pages aren't consistently consuming them.

You should eventually have:

```text
Form
 ↓
Zod schema
 ↓
validation
 ↓
API/service
 ↓
Supabase
```

rather than schemas existing as decorative files.

---

# 10. `navigation.ts` in admin is unused

You have:

```text
admin/lib/constants/navigation.ts
```

but your admin navigation is being implemented elsewhere.

That means there's probably duplicated navigation configuration:

```text
navigation.ts
       +
Sidebar.tsx
       +
routes.ts
```

I'd consolidate this.

### Better architecture

```text
admin/
├── config/
│   └── navigation.ts       ← single source of truth
│
├── components/
│   └── layout/
│       ├── Sidebar.tsx
│       └── Header.tsx
```

Sidebar should consume the config rather than maintaining its own route definitions.

---

# 11. `ThemeProvider.tsx` is unused

You have:

```text
admin/providers/
├── AuthProvider.tsx
├── QueryProvider.tsx
└── ThemeProvider.tsx
```

But the admin layout currently mounts:

```tsx
<QueryProvider>
  <AuthProvider>
    ...
  </AuthProvider>
</QueryProvider>
```

There is no `ThemeProvider`. Pasted text(20261004-141407)

So:

```text
❌ ThemeProvider.tsx
```

is another cleanup candidate.

This also fits your current direction because the admin is supposed to use the Nova/shadcn visual system rather than maintain an independent theme abstraction.

---

# 12. Admin pages contain fake functionality

This is more important than dead files.

For example, Leads has:

```tsx
const handleExportCSV = () => {
  alert('Exporting leads data to CSV...');
};
```

That means the button **doesn't actually export anything**.

It only tells the user that it's exporting.

That's not production functionality. Pasted text(20261004-141407)

Similarly, settings contain:

```tsx
setTimeout(() => {
  setIsSaving(false);
  alert('General settings saved!');
}, 600);
```

That's a fake save.

So you have:

```text
UI
 ↓
fake loading
 ↓
alert()
 ↓
no persistence
```

rather than:

```text
UI
 ↓
validation
 ↓
API/service
 ↓
Supabase
 ↓
success/error state
```

### These need fixing, not just deletion.

---

# 13. The admin currently has placeholder/mock data

The Users page has a fallback containing hardcoded users such as:

```text
Kannan (Director)
Priyadharshini M
...
```

when the API doesn't return data. Pasted text(20261004-141407)

That's dangerous for production because an API failure can look like legitimate application data.

### Change this

Instead of:

```text
API fails
   ↓
show fake users
```

use:

```text
API fails
   ↓
ErrorState
   ↓
Retry
```

You already have infrastructure for loading/empty/error states, but some of it is inconsistent.

---

# 14. `ErrorState` itself is unused

This is ironic.

You have:

```text
ErrorState.tsx
```

but the Users page appears to use fallback mock data rather than a proper error state.

So the architecture is backwards:

```text
❌ Error → fake data
```

should become:

```text
✅ Error → ErrorState
```

Then:

```text
ErrorState
  ├── message
  └── retry
```

---

# 15. `QuickActions` is built but not used

`components/legal/QuickActions.tsx` is a fairly substantial interactive component with scroll-spy behavior. But neither privacy policy nor terms appears to use it.

You currently have:

```text
LegalHero
LegalLayout
article
```

but not:

```text
QuickActions
```

So you have two choices:

### Option A — simplify

Delete:

```text
QuickActions.tsx
```

### Option B — actually use it

Add it to:

```text
Privacy Policy
Terms
```

For a simple HighEd site, **I'd delete it** unless you specifically want sidebar section navigation.

---

# 16. SEO components are currently decorative architecture

These are unused:

```text
ContentReviewed.tsx
StatsDisclaimer.tsx
```

They were clearly created for SEO/E-E-A-T purposes.

That's not automatically bad, but unused SEO components don't improve SEO.

If your pages make claims like:

```text
98% visa success
10,000+ students
70,000 students
100+ scholarships
```

then these components should either be used meaningfully or removed.

Otherwise you're maintaining SEO infrastructure that isn't actually attached to the content.

---

# 17. UI library has duplicate concepts

This is one of the biggest structural problems.

You have:

```text
components/ui/
```

with:

```text
Button
Card
Input
Select
Textarea
Badge
...
```

while the admin has:

```text
app/admin/components/ui/
```

with another:

```text
button
card
input
select
textarea
badge
...
```

So there are effectively **two UI systems**.

And you're now moving admin to Nova/shadcn.

### Website

Keep:

```text
src/components/ui/
```

### Admin

Use:

```text
src/components/ui/
```

or a dedicated:

```text
src/app/admin/components/ui/
```

but don't maintain a half-migrated third system.

For your current direction, I'd make the admin's shadcn/Nova components the source of truth and remove unused legacy admin primitives.

---

# 18. Some filenames indicate unfinished/legacy architecture

These should be cleaned up even where technically used:

```text
CountryCourses&university.tsx
UnviersityApplication.tsx
Acc&pre.tsx
SOP&LOPAssistance.tsx
```

Especially:

```text
UnviersityApplication.tsx
```

is misspelled.

The dynamic service router has to import these oddly named files. Pasted text(20261004-141407)

I'd rename them:

```text
CountryCoursesUniversity.tsx
UniversityApplication.tsx
AccommodationPreDeparture.tsx
SOPLORAssistance.tsx
```

Then update imports.

This isn't dead code, but it makes the codebase feel much more improvised than it needs to be.

---

# 19. Service pages are NOT dead

Don't accidentally delete these:

```text
services/CareerCounselling.tsx
services/EducationLoan.tsx
services/ScholarshipAssistance.tsx
services/SOP&LOPAssistance.tsx
services/UnviersityApplication.tsx
services/VisaAssistance.tsx
services/Acc&pre.tsx
```

They aren't directly imported by other pages in the usual way, but the dynamic service router explicitly imports them and maps them to slugs.

For example:

```text
/services/career-counselling
/services/university-application
/services/scholarship-assistance
/services/sop-lor-assistance
/services/visa-assistance
/services/education-loan
/services/accommodation-pre-departure
```

are backed by that router. Pasted text(20261004-141407)

So these are **used**.

---

# 20. `/services` itself has a legitimate purpose

The service hub is not redundant.

It provides the service directory and links to the dynamic detail pages:

```text
/services
      ↓
Career Counselling
University Application
Scholarship Assistance
SOP & LOR
Visa
Education Loan
Accommodation
```

The page explicitly defines these links. Pasted text(20261004-141407)

Keep it.

---

# 21. `/courses` is legitimate

The courses page isn't simply rendering a useless wrapper.

It has:

```text
Engineering & Technology
Business & Management
...
```

with course lists and destination links, plus a counselling CTA. Pasted text(20261004-141407)

Keep it.

---

# 22. `/resources` is legitimate

This is also a real content hub:

```text
Resources
├── Guides
├── Country Guides
├── University Directory
├── Exam Section
├── FAQ
├── Tools
└── CTA
```

It is actually composed from reusable sections. Pasted text(20261004-141407)

Keep it.

---

# 23. `/explore` and country `/explore` are both legitimate

You have:

```text
/explore
```

and:

```text
/study-in/[country]/explore
```

These aren't necessarily duplicates.

They're conceptually:

```text
/explore
    → global directory

/study-in/usa/explore
    → USA-specific directory
```

The country-specific route explicitly receives the country and builds country-specific metadata/results. Pasted text(20261004-141407)

Keep both.

---

# 24. Home page architecture is actually reasonable

The homepage uses dynamic imports for below-the-fold sections:

```tsx
const CountryService = dynamic(...)
const ServicesSection = dynamic(...)
const AboutUs = dynamic(...)
const Courses = dynamic(...)
const ScholarShip = dynamic(...)
const RealStory = dynamic(...)
const Testimonials = dynamic(...)
const WhyChooseAs = dynamic(...)
const FAQSection = dynamic(...)
```

and then renders them intentionally. Pasted text(20261004-141407)

So don't interpret those as unused components.

---

# 25. Final cleanup list

### 🔴 DELETE — high confidence

```text
src/components/country/CountryCost.tsx
src/components/country/CountryIllustration.tsx
src/components/country/CountryOverview.tsx

src/components/forms/useFocusTrap.ts

src/components/layout/MobileStickyCTA.tsx

src/components/legal/QuickActions.tsx

src/components/seo/ContentReviewed.tsx
src/components/seo/StatsDisclaimer.tsx

src/components/ui/AnimatedShinyText.tsx
src/components/ui/Carousel.tsx
src/components/ui/GridContainer.tsx
src/components/ui/Section.tsx
src/components/ui/Textarea.tsx
src/components/ui/avatar.tsx
src/components/ui/label.tsx

src/hooks/useGsap.ts
src/hooks/useMediaQuery.ts
src/hooks/useMobileMenu.ts
src/hooks/useScroll.ts

src/lib/calculators/validation.ts
src/lib/constants.ts
src/lib/urls.ts

src/app/(website)/book-counselling/AutoOpenLeadPopup.tsx

admin/components/common/ErrorState.tsx
admin/components/ui/checkbox.tsx
admin/components/ui/separator.tsx
admin/components/ui/skeleton.tsx
admin/components/ui/switch.tsx
admin/components/ui/tabs.tsx
admin/components/ui/tooltip.tsx

admin/hooks/useDebounce.ts
admin/hooks/usePermissions.ts

admin/lib/constants/navigation.ts

admin/providers/ThemeProvider.tsx
```

That's roughly **40+ files worth of dead/unused architecture**.

---

## 🟠 KEEP BUT FIX

```text
CountryCourses&university.tsx
```

Used, but rename it.

```text
services/*.tsx
```

Used through dynamic routing.

```text
admin/lib/validations/*.ts
```

Currently unused, but don't necessarily delete if you're about to wire proper Zod validation into the admin forms.

```text
SEO ContentReviewed / StatsDisclaimer
```

Delete unless you're actually going to place them on relevant pages.

---

## 🔴 Bigger problem than unused files

The codebase currently has **three different categories of technical debt**:

```text
1. DEAD CODE
   ↓
   Files/components nobody imports

2. FAKE FUNCTIONALITY
   ↓
   alert()
   setTimeout()
   mock fallback data
   "Exporting..." without export

3. DUPLICATED ARCHITECTURE
   ↓
   Multiple UI systems
   Multiple navigation abstractions
   Multiple validation layers
   Legacy components + new Nova/shadcn
```

The **second and third categories are more important than simply deleting files**.

### Target architecture

I'd reduce the project toward:

```text
src/
├── app/
│   ├── (website)/
│   ├── admin/
│   └── api/
│
├── components/
│   ├── website/
│   │   ├── home/
│   │   ├── country/
│   │   ├── city/
│   │   ├── blog/
│   │   ├── services/
│   │   └── ...
│   │
│   ├── forms/
│   ├── layout/
│   ├── seo/
│   └── ui/
│
├── data/
├── domain/
├── hooks/
├── lib/
├── services/
└── types/
```

And **every component should answer one of three questions**:

```text
Is it rendered?
Is it imported?
Does it provide infrastructure actually used by rendered code?
```

If the answer is **no to all three → delete it.**

The current repository structure makes the cleanup especially worthwhile because the website already has a fairly complete route/component system, while the admin is simultaneously undergoing a UI-system migration. Pasted text