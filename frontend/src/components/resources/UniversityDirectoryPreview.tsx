"use client";

import React, { useMemo, useState } from "react";
import { MapPin, Search, SlidersHorizontal, X } from "lucide-react";
import Container from "@/components/ui/Container";
import { universityPreviews } from "@/data/resources";
import { cn } from "@/lib/utils";
import { ArrowLink, ResourceSectionHeader, resourceCardClass } from "./primitives";

type FilterKey = "country" | "course" | "tuition" | "ranking" | "intake";

const tuitionLabel = { 1: "₹", 2: "₹₹", 3: "₹₹₹" } as const;
const tuitionText = { 1: "Low tuition", 2: "Mid tuition", 3: "High tuition" } as const;

const unique = (arr: string[]) => Array.from(new Set(arr)).sort();

const filterOptions: Record<FilterKey, { label: string; options: string[] }> = {
  country: { label: "Country", options: unique(universityPreviews.map((u) => u.country)) },
  course: { label: "Course", options: unique(universityPreviews.flatMap((u) => u.courses)) },
  tuition: { label: "Tuition", options: ["Low tuition", "Mid tuition", "High tuition"] },
  ranking: { label: "Ranking", options: unique(universityPreviews.map((u) => u.ranking)) },
  intake: { label: "Intake", options: unique(universityPreviews.map((u) => u.intake)) },
};

const emptyFilters: Record<FilterKey, string> = { country: "", course: "", tuition: "", ranking: "", intake: "" };

const selectClass =
  "h-11 w-full rounded-xl border border-[#E6E7EF] bg-white px-3 text-[14px] font-medium text-content-primary focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20";

const FilterFields = ({
  filters,
  onChange,
  idPrefix,
}: {
  filters: Record<FilterKey, string>;
  onChange: (k: FilterKey, v: string) => void;
  idPrefix: string;
}) => (
  <>
    {(Object.keys(filterOptions) as FilterKey[]).map((key) => (
      <div key={key} className="min-w-0">
        <label htmlFor={`${idPrefix}-${key}`} className="mb-1.5 block text-[12px] font-semibold text-content-secondary">
          {filterOptions[key].label}
        </label>
        <select
          id={`${idPrefix}-${key}`}
          value={filters[key]}
          onChange={(e) => onChange(key, e.target.value)}
          className={selectClass}
        >
          <option value="">All</option>
          {filterOptions[key].options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>
    ))}
  </>
);

export const UniversityDirectoryPreview = () => {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState(emptyFilters);
  const [sheetOpen, setSheetOpen] = useState(false);

  const setFilter = (k: FilterKey, v: string) => setFilters((f) => ({ ...f, [k]: v }));
  const activeCount = Object.values(filters).filter(Boolean).length;

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return universityPreviews.filter((u) => {
      const haystack = [u.name, u.country, u.city, ...u.courses].join(" ").toLowerCase();
      return (
        (!q || haystack.includes(q)) &&
        (!filters.country || u.country === filters.country) &&
        (!filters.course || u.courses.includes(filters.course)) &&
        (!filters.tuition || tuitionText[u.tuition] === filters.tuition) &&
        (!filters.ranking || u.ranking === filters.ranking) &&
        (!filters.intake || u.intake === filters.intake)
      );
    });
  }, [query, filters]);

  return (
    <section id="universities" aria-labelledby="universities-heading" className="scroll-mt-20 py-16 sm:py-20 lg:py-24">
      <Container size="lg">
        <ResourceSectionHeader
          id="universities-heading"
          eyebrow="Directory"
          title="Find Your University"
          description="Explore universities by country, course, ranking, tuition and admission requirements."
        />

        <div className="rounded-[24px] border border-[#E6E7EF] bg-[#F5F5F9] p-3 sm:p-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <label htmlFor="university-search" className="sr-only">Search universities, countries or courses</label>
              <Search size={18} aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-content-secondary" />
              <input
                id="university-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search universities, countries or courses..."
                className="h-12 w-full rounded-xl border border-[#E6E7EF] bg-white pl-11 pr-4 text-[15px] text-content-primary placeholder:text-content-secondary/80 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
              />
            </div>
            <button
              type="button"
              id="university-filters-open"
              onClick={() => setSheetOpen(true)}
              aria-haspopup="dialog"
              className="btn-motion inline-flex h-12 shrink-0 items-center gap-2 rounded-xl border border-[#E6E7EF] bg-white px-4 text-[14px] font-semibold text-brand-primary lg:hidden"
            >
              <SlidersHorizontal size={16} aria-hidden="true" />
              Filters{activeCount > 0 && ` (${activeCount})`}
            </button>
          </div>
          <div className="mt-3 hidden grid-cols-5 gap-3 lg:grid">
            <FilterFields filters={filters} onChange={setFilter} idPrefix="uni-desktop" />
          </div>
        </div>

        <p className="mt-6 text-[14px] text-content-secondary" aria-live="polite">
          Showing {results.length} of {universityPreviews.length} featured universities
        </p>

        {results.length > 0 ? (
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((u) => (
              <li key={u.name}>
                <article className={cn(resourceCardClass, "h-full p-6 sm:p-6")}>
                  <div className="flex items-start gap-4">
                    <span aria-hidden="true" className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary text-[16px] font-semibold text-white">
                      {u.name.split(" ").filter((w) => w[0] === w[0].toUpperCase() && w.length > 2).slice(0, 2).map((w) => w[0]).join("")}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[18px] leading-snug text-brand-primary">{u.name}</h3>
                      <p className="mt-1 flex items-center gap-1 text-[13px] text-content-secondary">
                        <MapPin size={13} aria-hidden="true" /> {u.city}, {u.country}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {u.courses.map((c) => (
                      <li key={c} className="rounded-lg bg-[#F5F5F9] px-2.5 py-1 text-[12px] font-medium text-content-primary">{c}</li>
                    ))}
                  </ul>
                  <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-[#E6E7EF] pt-4 text-[12px]">
                    <div><dt className="text-content-secondary">Tuition</dt><dd className="font-semibold text-content-primary" title={tuitionText[u.tuition]}>{tuitionLabel[u.tuition]}<span className="sr-only"> {tuitionText[u.tuition]}</span></dd></div>
                    <div><dt className="text-content-secondary">Ranking</dt><dd className="font-semibold text-content-primary">{u.ranking}</dd></div>
                    <div><dt className="text-content-secondary">Intake</dt><dd className="font-semibold text-content-primary">{u.intake}</dd></div>
                  </dl>
                  <div className="mt-auto pt-5">
                    <ArrowLink href="/explore" stretched>View University</ArrowLink>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-4 rounded-[24px] border border-dashed border-[#E6E7EF] p-10 text-center">
            <p className="text-[16px] font-semibold text-brand-primary">No universities match your filters</p>
            <button
              type="button"
              onClick={() => { setQuery(""); setFilters(emptyFilters); }}
              className="mt-3 min-h-11 text-[14px] font-semibold text-brand-accent underline-offset-4 hover:underline"
            >
              Clear search and filters
            </button>
          </div>
        )}

        <div className="mt-8 flex justify-center">
          <ArrowLink href="/explore">Open full University Directory</ArrowLink>
        </div>
      </Container>

      {/* Mobile filter bottom sheet */}
      {sheetOpen && (
        <div className="fixed inset-0 z-[10000] lg:hidden" role="dialog" aria-modal="true" aria-labelledby="filters-title">
          <button type="button" aria-label="Close filters" className="absolute inset-0 bg-black/40" onClick={() => setSheetOpen(false)} />
          <div className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-[28px] bg-white p-6 pb-8">
            <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-[#E6E7EF]" aria-hidden="true" />
            <div className="mb-5 flex items-center justify-between">
              <h3 id="filters-title" className="text-[20px] text-brand-primary">Filters</h3>
              <button type="button" onClick={() => setSheetOpen(false)} aria-label="Close filters" className="flex size-11 items-center justify-center rounded-full hover:bg-[#F5F5F9]">
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <div className="grid gap-4">
              <FilterFields filters={filters} onChange={setFilter} idPrefix="uni-mobile" />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button type="button" onClick={() => setFilters(emptyFilters)} className="btn-motion h-12 rounded-full border border-[#E6E7EF] text-[15px] font-semibold text-brand-primary">
                Reset
              </button>
              <button type="button" onClick={() => setSheetOpen(false)} className="btn-motion h-12 rounded-full bg-brand-accent text-[15px] font-semibold text-white">
                Show {results.length} results
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default UniversityDirectoryPreview;
