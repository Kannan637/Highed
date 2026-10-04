"use client";

import React, { useId, useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Award,
  Calendar,
  Building2,
  GraduationCap,
  Sparkles,
  ExternalLink,
  RotateCcw,
  CheckCircle2,
  X,
  BookOpen,
} from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import {
  DESTINATIONS,
  STUDY_LEVELS,
  Destination,
  StudyLevel,
} from "@/data/tools/costConfig";
import {
  FUNDING_AMOUNTS,
  FundingAmount,
  sampleScholarships,
  SCHOLARSHIP_TYPES,
  ScholarshipType,
} from "@/data/tools/scholarshipsData";
import {
  filterAndMatchScholarships,
  MatchedScholarship,
  ScholarshipFilterCriteria,
} from "@/lib/calculators/scholarshipMatcher";
import { formatINRCompact } from "@/lib/format";
import { trackEvent } from "@/lib/analytics";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import { ToolReset } from "./toolPrimitives";

export const ScholarshipFinder = () => {
  const [query, setQuery] = useState<string>("");
  const [country, setCountry] = useState<Destination | "">("");
  const [studyLevel, setStudyLevel] = useState<StudyLevel | "">("");
  const [type, setType] = useState<ScholarshipType | "">("");
  const [fundingCategory, setFundingCategory] = useState<FundingAmount | "">("");
  const [deadlineRange, setDeadlineRange] = useState<
    "all" | "upcoming" | "this-month" | "next-3-months"
  >("all");
  const [userPercentage, setUserPercentage] = useState<number>(75);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [selectedScholarship, setSelectedScholarship] = useState<MatchedScholarship | null>(null);

  const searchId = useId();

  const handleResetFilters = () => {
    setQuery("");
    setCountry("");
    setStudyLevel("");
    setType("");
    setFundingCategory("");
    setDeadlineRange("all");
    setUserPercentage(75);
    trackEvent("calculator_reset", { tool: "scholarship_finder" });
  };

  const filterCriteria: ScholarshipFilterCriteria = useMemo(
    () => ({
      query,
      country,
      studyLevel,
      type,
      fundingCategory,
      deadlineRange,
      userPercentage: Number(userPercentage) || undefined,
    }),
    [query, country, studyLevel, type, fundingCategory, deadlineRange, userPercentage]
  );

  const matchedResults = useMemo(() => {
    const list = filterAndMatchScholarships(filterCriteria, sampleScholarships);
    trackEvent("scholarship_search", {
      count: list.length,
      country: country || "all",
      level: studyLevel || "all",
    });
    return list;
  }, [filterCriteria, country, studyLevel]);

  const activeFilterCount = [
    country,
    studyLevel,
    type,
    fundingCategory,
    deadlineRange !== "all",
  ].filter(Boolean).length;

  return (
    <section className="bg-[#F5F5F9] py-10 sm:py-14 lg:py-16">
      <Container size="lg">
        {/* ================= SEARCH & PROFILE MATCHER HEADER ================= */}
        <div className="rounded-[24px] border border-[#E6E7EF] bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <span className="text-[12px] font-semibold uppercase tracking-wider text-brand-accent">
                Scholarship Intelligence
              </span>
              <h2 className="text-[22px] font-bold text-brand-primary sm:text-[26px]">
                Discover & Match Funding Opportunities
              </h2>
              <p className="mt-1 text-[14px] text-content-secondary">
                Search verified government, university, and merit awards matching your academic criteria
              </p>
            </div>

            <ToolReset onReset={handleResetFilters} label="Clear Filters" />
          </div>

          {/* Search bar + Profile match inputs */}
          <div className="mt-6 grid gap-4 lg:grid-cols-12 lg:items-center">
            {/* Search Input */}
            <div className="relative lg:col-span-6">
              <label htmlFor={searchId} className="sr-only">
                Search scholarships
              </label>
              <Search
                size={18}
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-content-secondary"
              />
              <input
                id={searchId}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search scholarship name, university, or eligibility..."
                className="h-12 w-full rounded-xl border border-[#E6E7EF] bg-white pl-11 pr-4 text-[15px] text-content-primary placeholder:text-content-secondary/80 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
              />
            </div>

            {/* Profile Academic % Matcher */}
            <div className="flex items-center gap-3 rounded-xl border border-[#E6E7EF] bg-[#F5F5F9] px-4 py-2 lg:col-span-4">
              <span className="shrink-0 text-[13px] font-semibold text-content-primary">
                Your Academic %:
              </span>
              <input
                type="number"
                min={40}
                max={100}
                value={userPercentage || ""}
                onChange={(e) => setUserPercentage(Number(e.target.value))}
                className="h-8 w-20 rounded-lg border border-[#E6E7EF] bg-white px-2 text-center text-[14px] font-bold text-brand-primary focus:outline-none"
              />
              <span className="text-[12px] text-content-secondary">% for Match</span>
            </div>

            {/* Mobile Filter Button */}
            <div className="lg:col-span-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setMobileFilterOpen(true)}
                className="w-full gap-2 lg:hidden"
              >
                <SlidersHorizontal size={16} />
                Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
              </Button>
            </div>
          </div>

          {/* Desktop Filter Row */}
          <div className="mt-4 hidden grid-cols-5 gap-3 border-t border-[#E6E7EF] pt-4 lg:grid">
            <Select
              value={country}
              onChange={(e) => setCountry(e.target.value as Destination | "")}
              className="text-[13px]"
            >
              <option value="">All Destinations</option>
              {DESTINATIONS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </Select>

            <Select
              value={studyLevel}
              onChange={(e) => setStudyLevel(e.target.value as StudyLevel | "")}
              className="text-[13px]"
            >
              <option value="">All Study Levels</option>
              {STUDY_LEVELS.map((lvl) => (
                <option key={lvl} value={lvl}>
                  {lvl}
                </option>
              ))}
            </Select>

            <Select
              value={type}
              onChange={(e) => setType(e.target.value as ScholarshipType | "")}
              className="text-[13px]"
            >
              <option value="">All Types (Merit/Govt)</option>
              {SCHOLARSHIP_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </Select>

            <Select
              value={fundingCategory}
              onChange={(e) =>
                setFundingCategory(e.target.value as FundingAmount | "")
              }
              className="text-[13px]"
            >
              <option value="">All Funding Tiers</option>
              {FUNDING_AMOUNTS.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </Select>

            <Select
              value={deadlineRange}
              onChange={(e) =>
                setDeadlineRange(e.target.value as ScholarshipFilterCriteria["deadlineRange"] || "all")
              }
              className="text-[13px]"
            >
              <option value="all">Any Deadline</option>
              <option value="upcoming">Upcoming</option>
              <option value="this-month">Closing This Month</option>
              <option value="next-3-months">Next 3 Months</option>
            </Select>
          </div>
        </div>

        {/* ================= RESULTS COUNTER & CARDS ================= */}
        <div className="mt-8">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-[15px] font-semibold text-content-primary">
              <span className="font-bold text-brand-primary">{matchedResults.length}</span>{" "}
              scholarships match your search and profile
            </p>
          </div>

          {matchedResults.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {matchedResults.map((s) => (
                <article
                  key={s.id}
                  className="flex flex-col justify-between rounded-[24px] border border-[#E6E7EF] bg-white p-6 transition-all duration-200 hover:border-brand-primary/30 hover:shadow-md"
                >
                  <div>
                    {/* Header: Flag, Country & Match Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="flex size-7 items-center justify-center overflow-hidden rounded-md border border-[#E6E7EF]">
                          <ReactCountryFlag
                            countryCode={s.countryCode}
                            svg
                            style={{ width: "1.25rem", height: "0.9rem" }}
                          />
                        </span>
                        <span className="text-[12px] font-bold text-content-secondary">
                          {s.country}
                        </span>
                      </div>

                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                          s.matchBadge === "High Match"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-brand-primary/10 text-brand-primary"
                        }`}
                      >
                        {s.matchPercentage}% {s.matchBadge}
                      </span>
                    </div>

                    {/* Scholarship Title */}
                    <h3 className="mt-3.5 text-[18px] font-bold leading-snug text-brand-primary">
                      {s.name}
                    </h3>
                    <p className="mt-1 flex items-center gap-1.5 text-[13px] text-content-secondary">
                      <Building2 size={13} className="shrink-0" />
                      <span className="truncate">{s.organization}</span>
                    </p>

                    {/* Funding Highlight */}
                    <div className="mt-4 rounded-xl border border-brand-accent/15 bg-brand-accent/5 p-3 text-[13px]">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-brand-accent">
                        Award Coverage · {s.fundingCategory}
                      </span>
                      <p className="mt-0.5 font-bold text-content-primary">
                        {s.fundingDisplay}
                      </p>
                    </div>

                    {/* Eligibility Snippet */}
                    <p className="mt-3.5 line-clamp-2 text-[13px] text-content-secondary">
                      <strong className="text-content-primary">Criteria: </strong>
                      {s.eligibility}
                    </p>
                  </div>

                  {/* Footer: Deadline & Action */}
                  <div className="mt-5 border-t border-[#E6E7EF] pt-4">
                    <div className="flex items-center justify-between text-[12px] text-content-secondary mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} />
                        Deadline: {s.deadlineDisplay}
                      </span>
                      <span className="rounded-md bg-[#F5F5F9] px-2 py-0.5 font-medium text-brand-primary">
                        {s.type}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedScholarship(s)}
                        className="btn-motion flex-1 rounded-xl border border-[#E6E7EF] py-2 text-center text-[13px] font-semibold text-brand-primary hover:bg-[#F5F5F9]"
                      >
                        View Details
                      </button>

                      <LeadCTAButton
                        source={`scholarship_${s.id}`}
                        contextTitle={`Scholarship Application: ${s.name} (${s.country})`}
                        forcePopup
                        className="flex-1 py-2 text-[13px]"
                      >
                        Apply Support
                      </LeadCTAButton>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="rounded-[24px] border border-dashed border-[#E6E7EF] bg-white p-12 text-center">
              <Award size={40} className="mx-auto text-content-secondary/40" />
              <h3 className="mt-4 text-[18px] font-bold text-brand-primary">
                No scholarships match these filters
              </h3>
              <p className="mt-1 text-[14px] text-content-secondary">
                Try widening your selected study destination, funding amount, or clearing keywords.
              </p>
              <div className="mt-5">
                <Button type="button" variant="outline" onClick={handleResetFilters}>
                  Clear All Filters
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Modal: Scholarship Full Details */}
        {selectedScholarship && (
          <div
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs"
            role="dialog"
            aria-modal="true"
            aria-labelledby="scholarship-modal-title"
          >
            <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[28px] bg-white p-6 sm:p-8">
              <button
                type="button"
                onClick={() => setSelectedScholarship(null)}
                aria-label="Close dialog"
                className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full bg-[#F5F5F9] text-content-secondary hover:text-content-primary"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2">
                <ReactCountryFlag
                  countryCode={selectedScholarship.countryCode}
                  svg
                  style={{ width: "1.5rem", height: "1.1rem" }}
                />
                <span className="text-[13px] font-bold text-content-secondary">
                  {selectedScholarship.country} · {selectedScholarship.type} Award
                </span>
              </div>

              <h3
                id="scholarship-modal-title"
                className="mt-3 text-[24px] font-bold text-brand-primary"
              >
                {selectedScholarship.name}
              </h3>
              <p className="text-[14px] text-content-secondary">
                {selectedScholarship.organization}
              </p>

              <div className="mt-5 rounded-2xl border border-brand-accent/20 bg-brand-accent/5 p-4">
                <span className="text-[12px] font-bold uppercase tracking-wider text-brand-accent">
                  Financial Benefit
                </span>
                <p className="mt-1 text-[16px] font-bold text-content-primary">
                  {selectedScholarship.fundingDisplay}
                </p>
              </div>

              <div className="mt-5 space-y-4 text-[14px] leading-relaxed">
                <div>
                  <h4 className="font-bold text-brand-primary">Description</h4>
                  <p className="mt-1 text-content-secondary">
                    {selectedScholarship.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-brand-primary">Eligibility & Requirements</h4>
                  <p className="mt-1 text-content-secondary">
                    {selectedScholarship.eligibility}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 border-t border-[#E6E7EF] pt-4 text-[13px]">
                  <div>
                    <span className="text-content-secondary">Application Deadline: </span>
                    <strong className="text-brand-primary">{selectedScholarship.deadlineDisplay}</strong>
                  </div>
                  <div>
                    <span className="text-content-secondary">Target Study Level: </span>
                    <strong className="text-brand-primary">{selectedScholarship.studyLevels.join(", ")}</strong>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setSelectedScholarship(null)}
                >
                  Close
                </Button>
                <LeadCTAButton
                  source={`modal_${selectedScholarship.id}`}
                  contextTitle={`Scholarship Application: ${selectedScholarship.name}`}
                  forcePopup
                >
                  Apply with HighEd Assistance
                </LeadCTAButton>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Filter Drawer */}
        {mobileFilterOpen && (
          <div
            className="fixed inset-0 z-[10000] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-filters-title"
          >
            <button
              type="button"
              aria-label="Close filters"
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileFilterOpen(false)}
            />
            <div className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-[28px] bg-white p-6 pb-8">
              <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-[#E6E7EF]" />
              <div className="mb-5 flex items-center justify-between">
                <h3 id="mobile-filters-title" className="text-[20px] font-bold text-brand-primary">
                  Filter Scholarships
                </h3>
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(false)}
                  aria-label="Close"
                  className="flex size-10 items-center justify-center rounded-full hover:bg-[#F5F5F9]"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-[13px] font-semibold text-content-primary">
                    Destination
                  </label>
                  <Select
                    value={country}
                    onChange={(e) => setCountry(e.target.value as Destination | "")}
                  >
                    <option value="">All Destinations</option>
                    {DESTINATIONS.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </Select>
                </div>

                <div>
                  <label className="mb-1 block text-[13px] font-semibold text-content-primary">
                    Study Level
                  </label>
                  <Select
                    value={studyLevel}
                    onChange={(e) => setStudyLevel(e.target.value as StudyLevel | "")}
                  >
                    <option value="">All Study Levels</option>
                    {STUDY_LEVELS.map((lvl) => (
                      <option key={lvl} value={lvl}>
                        {lvl}
                      </option>
                    ))}
                  </Select>
                </div>

                <div>
                  <label className="mb-1 block text-[13px] font-semibold text-content-primary">
                    Scholarship Type
                  </label>
                  <Select
                    value={type}
                    onChange={(e) => setType(e.target.value as ScholarshipType | "")}
                  >
                    <option value="">All Types</option>
                    {SCHOLARSHIP_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </Select>
                </div>

                <div>
                  <label className="mb-1 block text-[13px] font-semibold text-content-primary">
                    Funding Amount
                  </label>
                  <Select
                    value={fundingCategory}
                    onChange={(e) =>
                      setFundingCategory(e.target.value as FundingAmount | "")
                    }
                  >
                    <option value="">All Funding</option>
                    {FUNDING_AMOUNTS.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button type="button" variant="outline" onClick={handleResetFilters}>
                  Reset
                </Button>
                <Button
                  type="button"
                  variant="accent"
                  onClick={() => setMobileFilterOpen(false)}
                >
                  Show ({matchedResults.length})
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default ScholarshipFinder;
