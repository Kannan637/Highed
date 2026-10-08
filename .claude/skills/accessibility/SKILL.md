---
name: accessibility
description: WCAG 2.2 AA accessibility checklists, accessible modal implementations, focus rings, contrast benchmarks, and ARIA guidelines.
---

# Accessibility Engineering Playbook (WCAG 2.2 AA)

## 1. Focus Visible Standard

HighEd enforces a unified, globally defined focus indicator in `globals.css`:

```css
:focus-visible {
  outline: 2px solid var(--brand-primary);
  outline-offset: 2px;
}
```

- Form controls (`input`, `select`, `textarea`) manage their own borders with `focus-visible:ring-2 focus-visible:ring-brand-primary/20`.
- Never use `outline: none` without providing an alternate distinct visible focus state.

## 2. Accessible Modal Dialog Recipe

```tsx
// 1. Accessibility attributes on backdrop & container
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-desc"
  className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs"
>
  <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
    <h2 id="modal-title" className="text-lg font-bold text-foreground">
      Book Free Counselling Session
    </h2>
    <p id="modal-desc" className="text-xs text-muted-foreground">
      Speak with our certified overseas education counselors.
    </p>

    {/* Accessible close button */}
    <button
      type="button"
      onClick={onClose}
      aria-label="Close dialog"
      className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full text-muted-foreground hover:bg-neutral-100 focus-visible:ring-2"
    >
      <X className="size-4" />
    </button>
  </div>
</div>
```

## 3. Form Input Accessibility Checklist

- Label explicitly tied via `htmlFor`:
  ```tsx
  <label htmlFor="user-phone" className="block text-xs font-semibold text-foreground mb-1">
    Mobile Number <span className="text-brand-accent">*</span>
  </label>
  <input
    id="user-phone"
    type="tel"
    required
    aria-required="true"
    aria-invalid={hasError ? "true" : "false"}
    aria-describedby={hasError ? "phone-error" : undefined}
  />
  ```
- Error message container:
  ```tsx
  {hasError && (
    <p id="phone-error" role="alert" className="text-xs text-destructive mt-1">
      Please enter a valid 10-digit mobile number.
    </p>
  )}
  ```
