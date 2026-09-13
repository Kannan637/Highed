"use client";

import React, { useState, useMemo, useCallback, Suspense } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Country } from "@/types/country";
import {
  ExploreFilters as FiltersType,
  ExploreContentType,
  CourseLevel,
  ScholarshipType,
  ExploreSortOption,
  ExploreResult,
  University,
} from "@/types/explore";
import { allUniversities, getUniversitiesByCountry } from "@/data/universities";
import { allCourses, getCoursesByCountry } from "@/data/courses";
import { allScholarships, getScholarshipsByCountry } from "@/data/scholarships";
import { countries } from "@/data/countries";
import Container from "@/components/ui/Container";
import ExploreFilters from "./ExploreFilters";
import ExploreFilterDrawer from "./ExploreFilterDrawer";
import ActiveFilters from "./ActiveFilters";
import ExploreResults from "./ExploreResults";

interface ExploreContentProps {
  country?: Country;
}

function ExploreContentInner({ country }: ExploreContentProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Parse initial state from URL query parameters
  const initialType = (searchParams.get("type") as ExploreContentType) || "all";
  const initialLevel = (searchParams.get("level") as CourseLevel) || undefined;
  const initialArea = searchParams.get("area") || undefined;
  const initialScholarshipType =
    (searchParams.get("scholarshipType") as ScholarshipType) || undefined;
  const initialQuery = searchParams.get("q") || undefined;
  const initialSort = (searchParams.get("sort") as ExploreSortOption) || "recommended";
  const initialCountryParam = searchParams.get("country") || undefined;
  const initialCountry = country ? country.slug : initialCountryParam;

  const [filters, setFilters] = useState<FiltersType>({
    type: ["all", "universities", "courses", "scholarships"].includes(initialType)
      ? initialType
      : "all",
    country: initialCountry,
    level: initialLevel,
    area: initialArea,
    scholarshipType: initialScholarshipType,
    query: initialQuery,
    sort: initialSort,
  });

  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Sync state back to URL query parameters
  const updateUrl = useCallback(
    (newFilters: FiltersType) => {
      const params = new URLSearchParams();
      if (newFilters.type && newFilters.type !== "all") {
        params.set("type", newFilters.type);
      }
      if (!country && newFilters.country && newFilters.country !== "all") {
        params.set("country", newFilters.country);
      }
      if (newFilters.level) params.set("level", newFilters.level);
      if (newFilters.area) params.set("area", newFilters.area);
      if (newFilters.scholarshipType) {
        params.set("scholarshipType", newFilters.scholarshipType);
      }
      if (newFilters.query) params.set("q", newFilters.query);
      if (newFilters.sort && newFilters.sort !== "recommended") {
        params.set("sort", newFilters.sort);
      }

      const queryString = params.toString();
      const newUrl = queryString ? `${pathname}?${queryString}` : pathname;
      router.replace(newUrl, { scroll: false });
    },
    [country, pathname, router]
  );

  const handleFiltersChange = (newFilters: FiltersType) => {
    setFilters(newFilters);
    updateUrl(newFilters);
  };

  const handleRemoveFilter = (key: keyof FiltersType) => {
    const updated = { ...filters, [key]: undefined };
    if (key === "type") updated.type = "all";
    if (key === "country") updated.country = country ? country.slug : undefined;
    setFilters(updated);
    updateUrl(updated);
  };

  const handleClearAll = () => {
    const reset: FiltersType = {
      type: "all",
      country: country ? country.slug : undefined,
      level: undefined,
      area: undefined,
      scholarshipType: undefined,
      query: undefined,
      sort: "recommended",
    };
    setFilters(reset);
    updateUrl(reset);
  };

  // Resolve active country slug
  const activeCountrySlug = country
    ? country.slug
    : filters.country && filters.country !== "all"
    ? filters.country
    : undefined;

  // Base raw records for the active country or all countries
  const rawUniversities = useMemo(() => {
    if (activeCountrySlug) return getUniversitiesByCountry(activeCountrySlug);
    return allUniversities;
  }, [activeCountrySlug]);

  const rawCourses = useMemo(() => {
    if (activeCountrySlug) return getCoursesByCountry(activeCountrySlug);
    return allCourses;
  }, [activeCountrySlug]);

  const rawScholarships = useMemo(() => {
    if (activeCountrySlug) return getScholarshipsByCountry(activeCountrySlug);
    return allScholarships;
  }, [activeCountrySlug]);

  // Distinct study areas available
  const distinctStudyAreas = useMemo(() => {
    const set = new Set<string>();
    const source = activeCountrySlug ? rawCourses : allCourses;
    source.forEach((c) => {
      if (c.studyArea) set.add(c.studyArea);
    });
    return Array.from(set).sort();
  }, [activeCountrySlug, rawCourses]);

  // Counts for the categories
  const counts = useMemo(() => {
    return {
      all: rawUniversities.length + rawCourses.length + rawScholarships.length,
      universities: rawUniversities.length,
      courses: rawCourses.length,
      scholarships: rawScholarships.length,
    };
  }, [rawUniversities, rawCourses, rawScholarships]);

  // Filter and sort items
  const processedResults = useMemo(() => {
    const list: ExploreResult[] = [];
    const q = (filters.query || "").trim().toLowerCase();

    // 1. Universities
    if (filters.type === "all" || filters.type === "universities") {
      // Don't show universities if level or study area or scholarshipType is specifically filtered unless type is explicitly universities
      const skipUni =
        filters.type === "all" &&
        (Boolean(filters.level) || Boolean(filters.area) || Boolean(filters.scholarshipType));

      if (!skipUni) {
        rawUniversities.forEach((u) => {
          const matchQuery =
            !q ||
            u.name.toLowerCase().includes(q) ||
            u.location.toLowerCase().includes(q) ||
            (u.popularPrograms && u.popularPrograms.some((p) => p.toLowerCase().includes(q)));

          if (matchQuery) {
            list.push({ kind: "university", data: u });
          }
        });
      }
    }

    // 2. Courses
    if (filters.type === "all" || filters.type === "courses") {
      const skipCourse = filters.type === "all" && Boolean(filters.scholarshipType);

      if (!skipCourse) {
        rawCourses.forEach((c) => {
          const matchQuery =
            !q ||
            c.name.toLowerCase().includes(q) ||
            c.studyArea.toLowerCase().includes(q) ||
            (c.careerProspects && c.careerProspects.some((cp) => cp.toLowerCase().includes(q)));

          const matchLevel =
            !filters.level || c.level.toLowerCase() === filters.level.toLowerCase();
          const matchArea = !filters.area || c.studyArea === filters.area;

          if (matchQuery && matchLevel && matchArea) {
            list.push({ kind: "course", data: c });
          }
        });
      }
    }

    // 3. Scholarships
    if (filters.type === "all" || filters.type === "scholarships") {
      const skipScholarship =
        filters.type === "all" && (Boolean(filters.level) || Boolean(filters.area));

      if (!skipScholarship) {
        rawScholarships.forEach((s) => {
          const matchQuery =
            !q ||
            s.name.toLowerCase().includes(q) ||
            s.eligibility.toLowerCase().includes(q) ||
            s.coverage.toLowerCase().includes(q);

          const matchType =
            !filters.scholarshipType || s.type === filters.scholarshipType;

          if (matchQuery && matchType) {
            list.push({ kind: "scholarship", data: s });
          }
        });
      }
    }

    // Sort list
    const sort = filters.sort || "recommended";
    if (sort === "name") {
      list.sort((a, b) => a.data.name.localeCompare(b.data.name));
    } else if (sort === "ranking") {
      list.sort((a, b) => {
        const rankA = a.kind === "university" ? parseInt((a.data as University).ranking?.match(/\d+/)?.[0] || "9999", 10) : 9999;
        const rankB = b.kind === "university" ? parseInt((b.data as University).ranking?.match(/\d+/)?.[0] || "9999", 10) : 9999;
        return rankA - rankB;
      });
    }

    return list;
  }, [filters, rawUniversities, rawCourses, rawScholarships]);

  return (
    <section className="bg-neutral-50/50 py-12">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Filters (Desktop) */}
          <aside className="lg:col-span-4 xl:col-span-3 hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs">
              <ExploreFilters
                filters={filters}
                onChange={handleFiltersChange}
                studyAreas={distinctStudyAreas}
                counts={counts}
                showCountryFilter={!country}
              />
            </div>
          </aside>

          {/* Main Results Column */}
          <main className="lg:col-span-8 xl:col-span-9">
            <ActiveFilters
              filters={filters}
              onRemove={handleRemoveFilter}
              onClearAll={handleClearAll}
              isCountryFixed={Boolean(country)}
            />

            <ExploreResults
              results={processedResults}
              countryName={
                country
                  ? country.name
                  : activeCountrySlug
                  ? countries[activeCountrySlug]?.name
                  : undefined
              }
              onReset={handleClearAll}
              query={filters.query}
              totalCount={processedResults.length}
              activeSort={filters.sort || "recommended"}
              onSortChange={(sort) => handleFiltersChange({ ...filters, sort })}
              activeType={filters.type}
              onOpenFiltersMobile={() => setIsMobileDrawerOpen(true)}
            />
          </main>
        </div>

        {/* Mobile Filter Drawer */}
        <ExploreFilterDrawer
          isOpen={isMobileDrawerOpen}
          onClose={() => setIsMobileDrawerOpen(false)}
          onApply={() => setIsMobileDrawerOpen(false)}
          onClear={handleClearAll}
        >
          <ExploreFilters
            filters={filters}
            onChange={handleFiltersChange}
            studyAreas={distinctStudyAreas}
            counts={counts}
            showCountryFilter={!country}
          />
        </ExploreFilterDrawer>
      </Container>
    </section>
  );
}

export const ExploreContent: React.FC<ExploreContentProps> = ({ country }) => {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#253A7B] border-r-transparent align-[-0.125em]" />
          <p className="mt-4 text-sm text-neutral-500">Loading directory listings...</p>
        </div>
      }
    >
      <ExploreContentInner country={country} />
    </Suspense>
  );
};

export default ExploreContent;
