"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  Video,
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  Search,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTA";
import { Badge } from "@/components/ui/Badge";
import { CardAction } from "@/components/ui/Card";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import EventRegistrationModal from "./EventRegistrationModal";
import {
  UPCOMING_EVENTS,
  PAST_EVENTS,
  INDUSTRY_EXPERTS,
  MEETING_GALLERY,
  EventItem,
} from "@/data/events";
import { cn } from "@/lib/utils";

type StatusFilter = "Upcoming" | "Past";
type LocationFilter = "All" | "Chennai" | "Coimbatore" | "Tirupathi" | "Online";
type GalleryFilter = "All" | "1-on-1 Sessions" | "Delegate Conclave" | "Pre-Departure" | "Fairs";

const EVENTS_PER_PAGE = 4;

export default function EventsView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeStatus, setActiveStatus] = useState<StatusFilter>("Upcoming");
  const [selectedLocation, setSelectedLocation] = useState<LocationFilter>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeRecapEvent, setActiveRecapEvent] = useState<EventItem | null>(null);
  const [selectedEventForRegistration, setSelectedEventForRegistration] = useState<EventItem | null>(null);

  // Gallery state
  const [selectedGalleryCat, setSelectedGalleryCat] = useState<GalleryFilter>("All");

  // Combine status categories
  const statusCategories: StatusFilter[] = ["Upcoming", "Past"];

  // Derive location filter options from both pools
  const allEvents = useMemo(() => {
    return activeStatus === "Upcoming" ? UPCOMING_EVENTS : PAST_EVENTS;
  }, [activeStatus]);

  const locationOptions = useMemo(() => {
    const cities = Array.from(new Set(allEvents.map((e) => e.city)));
    return ["All", ...cities] as LocationFilter[];
  }, [allEvents]);

  // Filter events by search + location
  const filteredEvents = useMemo(() => {
    return allEvents.filter((evt) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        evt.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        evt.city.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesLocation =
        selectedLocation === "All" || evt.city === selectedLocation;

      return matchesSearch && matchesLocation;
    });
  }, [allEvents, searchQuery, selectedLocation]);

  // Pagination
  const totalPages = Math.max(
    1,
    Math.ceil(filteredEvents.length / EVENTS_PER_PAGE)
  );

  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * EVENTS_PER_PAGE,
    currentPage * EVENTS_PER_PAGE
  );

  // Reset to page 1 when filters change
  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleStatusChange = (status: StatusFilter) => {
    setActiveStatus(status);
    setSelectedLocation("All");
    setCurrentPage(1);
  };

  const handleLocationChange = (loc: LocationFilter) => {
    setSelectedLocation(loc);
    setCurrentPage(1);
  };

  // Gallery filter
  const filteredGallery = useMemo(() => {
    if (selectedGalleryCat === "All") return MEETING_GALLERY;
    return MEETING_GALLERY.filter((item) => item.category === selectedGalleryCat);
  }, [selectedGalleryCat]);

  return (
    <div className="w-full tracking-[-0.04em] [letter-spacing:-0.04em]">
      {/* =========================================================
          HERO SECTION — Mirrors BlogContent Hero exactly
          ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#000000] to-brand-primary py-12 text-white sm:py-16 md:py-20">
        {/* Centered Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1000px] px-4 sm:px-6">
          <div className="flex flex-col items-center text-center">
            {/* Breadcrumb */}
            <div className="mb-5">
              <Breadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Events & Fairs" },
                ]}
                className="
                  [&_span]:text-white/70
                  [&_a]:text-white/70
                  [&_a:hover]:text-white
                  [&_svg]:text-white/40
                  [&_span[aria-current]]:text-white
                "
              />
            </div>

            {/* Eyebrow Badge */}
            <div className="mb-5">
              <div className="inline-flex items-center gap-2 rounded-2xl bg-brand-accent px-3.5 py-2 text-xs font-semibold text-white">
                <span className="size-2 rounded-full bg-white" aria-hidden="true" />
                <span>Official University Conclaves &amp; Admissions Fairs</span>
              </div>
            </div>

            {/* H1 */}
            <div className="w-full max-w-4xl">
              <h1 className="text-center text-white">
                Study Abroad <span className="text-brand-accent">Events & Fairs</span>
              </h1>
            </div>

            {/* Description */}
            <div className="mt-4 w-full max-w-2xl">
              <p className="font-body text-center text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
                Register for in-person university fairs, admissions days, and
                webinars. Connect directly with admissions directors and unlock
                merit scholarships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EVENT CONTENT SECTION — Mirrors BlogContent layout exactly
          ========================================================= */}
      <section className="w-full bg-surface-neutral px-4 py-12 font-body sm:py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-[1000px] grid-cols-12 gap-y-6 sm:gap-y-8">
          {/* Search Bar */}
          <div className="relative col-span-12 w-full">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <input
              type="text"
              placeholder="Search events by title, city or keyword..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="h-12 w-full rounded-xl border border-input bg-card py-3.5 pl-11 pr-10 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 shadow-xs"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => handleSearch("")}
                className="absolute right-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-lg text-muted-foreground hover:bg-neutral-100 hover:text-foreground"
                aria-label="Clear search"
              >
                <X className="size-4" />
              </button>
            )}
          </div>

          {/* Status Tabs (Upcoming / Past) + Location Filter Pills */}
          <div className="col-span-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            {/* Status Tabs */}
            <div className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-1 pt-0.5">
              {statusCategories.map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => handleStatusChange(status)}
                  className={`btn-motion min-h-[40px] shrink-0 cursor-pointer rounded-full px-4 py-2 text-xs font-semibold sm:text-sm ${activeStatus === status
                    ? "bg-brand-primary text-white shadow-xs"
                    : "border border-border bg-card text-muted-foreground hover:bg-brand-primary/5 hover:text-brand-primary"
                    }`}
                >
                  {status}
                </button>
              ))}

              {/* Separator */}
              <span className="mx-1 hidden h-5 w-px bg-border sm:block" aria-hidden="true" />

              {/* Location Pills */}
              {locationOptions.map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => handleLocationChange(loc)}
                  className={`btn-motion min-h-[40px] shrink-0 cursor-pointer rounded-full px-4 py-2 text-xs font-semibold sm:text-sm ${selectedLocation === loc
                    ? "bg-brand-primary text-white shadow-xs"
                    : "border border-border bg-card text-muted-foreground hover:bg-brand-primary/5 hover:text-brand-primary"
                    }`}
                >
                  {loc === "All" ? "All Locations" : loc}
                </button>
              ))}
            </div>
          </div>

          {/* Event Cards — Horizontal layout matching Blog article cards */}
          <div className="col-span-12 flex w-full flex-col gap-4 sm:gap-5">
            {paginatedEvents.length === 0 ? (
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-neutral-100/60 px-4 py-16 text-center">
                <Calendar className="size-10 text-muted-foreground/40" />

                <p className="text-base font-semibold text-foreground">
                  No events found
                </p>

                <p className="max-w-xs text-sm text-muted-foreground">
                  Try adjusting your search query or selecting a different
                  location filter.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedLocation("All");
                    setCurrentPage(1);
                  }}
                  className="mt-2 min-h-[44px] cursor-pointer px-4 py-2 text-sm font-semibold text-brand-primary underline underline-offset-4 hover:text-brand-primary/80"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              paginatedEvents.map((evt) => (
                <div
                  key={evt.id}
                  className="group block w-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                >
                  <article className="grid w-full grid-cols-12 gap-3 sm:gap-4">
                    {/* Left Text Box — 7/8 cols (matches Blog exactly) */}
                    <div className="order-2 col-span-12 flex flex-col justify-between gap-4 rounded-2xl border border-border bg-neutral-50/70 p-6 transition-colors duration-200 group-hover:border-primary/40 group-hover:bg-white group-hover:shadow-md sm:order-1 sm:col-span-7 sm:p-7 md:col-span-8 md:p-8">
                      <div className="flex flex-col gap-2.5">
                        {/* Badge Row — Category + City + Date */}
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge variant="accent" size="sm">
                            {evt.type}
                          </Badge>

                          <span className="text-xs text-muted-foreground">
                            •
                          </span>

                          <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-primary">
                            {evt.isOnline ? (
                              <Video size={12} className="text-brand-primary" />
                            ) : (
                              <MapPin size={12} className="text-brand-primary" />
                            )}
                            {evt.city}
                          </span>

                          <span className="text-xs text-muted-foreground">
                            •
                          </span>

                          <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
                            <Calendar size={12} />
                            {evt.date}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="article-title text-foreground transition-colors group-hover:text-brand-primary">
                          {evt.title}
                        </h2>

                        {/* Description */}
                        <p className="line-clamp-2 text-pretty text-sm leading-relaxed text-muted-foreground sm:line-clamp-3">
                          {evt.shortDescription}
                        </p>

                        {/* Key Perks Chips */}
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {evt.highlights.slice(0, 3).map((hl) => (
                            <span
                              key={hl}
                              className="inline-flex items-center gap-1 rounded-lg bg-surface-neutral px-2.5 py-1 text-[11px] font-medium text-neutral-700"
                            >
                              <CheckCircle2 size={11} className="text-emerald-600 shrink-0" />
                              <span>{hl}</span>
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Button — matches Blog's CardAction pill exactly */}
                      <div className="mt-2 flex items-center justify-between gap-3">
                        <span className="truncate text-xs text-muted-foreground flex items-center gap-1">
                          <Clock size={12} className="shrink-0" />
                          {evt.time}
                        </span>

                        {activeStatus === "Upcoming" ? (
                          <button
                            type="button"
                            onClick={() => setSelectedEventForRegistration(evt)}
                            className="btn-motion shrink-0 cursor-pointer rounded-full bg-brand-accent px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all hover:bg-brand-accent/90"
                          >
                            Register Free
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setActiveRecapEvent(evt)}
                            className="shrink-0"
                          >
                            <CardAction
                              variant="pill"
                              className="min-h-[44px]"
                            >
                              View Recap
                            </CardAction>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Right Image Box — 4/5 cols (matches Blog exactly) */}
                    <div className="relative order-1 col-span-12 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border sm:order-2 sm:col-span-5 sm:aspect-auto sm:min-h-[240px] md:col-span-4">
                      <Image
                        src={evt.image}
                        alt={evt.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 42vw, 340px"
                      />

                      {/* Overlay badges on image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Status & attendance info at bottom of image */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-semibold">
                        <span className={cn(
                          "rounded-full px-2.5 py-1 backdrop-blur-md",
                          activeStatus === "Upcoming"
                            ? "bg-emerald-500/90 text-white"
                            : "bg-neutral-900/80 text-white"
                        )}>
                          {activeStatus === "Upcoming" ? "Open" : "Completed"}
                        </span>

                        {evt.attendees && activeStatus === "Past" && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-black/50 px-2.5 py-1 backdrop-blur-md">
                            <Users size={11} />
                            <span>{evt.attendees}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                </div>
              ))
            )}
          </div>

          {/* Pagination — Matches Blog pagination exactly */}
          {totalPages > 1 && (
            <div className="col-span-12 flex items-center justify-center gap-2 pt-2">
              <button
                type="button"
                onClick={() =>
                  setCurrentPage((p) => Math.max(1, p - 1))
                }
                disabled={currentPage === 1}
                className="btn-motion flex size-11 cursor-pointer items-center justify-center rounded-xl border border-border bg-card text-foreground shadow-xs hover:bg-brand-primary/5 disabled:cursor-not-allowed disabled:opacity-40 sm:size-12"
                aria-label="Previous page"
              >
                <ChevronLeft className="size-5" />
              </button>

              {Array.from(
                { length: totalPages },
                (_, i) => i + 1
              ).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`btn-motion flex size-11 cursor-pointer items-center justify-center rounded-xl text-sm font-semibold shadow-xs sm:size-12 ${currentPage === page
                    ? "bg-brand-primary text-white"
                    : "border border-border bg-card text-foreground hover:bg-brand-primary/5"
                    }`}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="btn-motion flex size-11 cursor-pointer items-center justify-center rounded-xl border border-border bg-card text-foreground shadow-xs hover:bg-brand-primary/5 disabled:cursor-not-allowed disabled:opacity-40 sm:size-12"
                aria-label="Next page"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          )}

          {/* Lead Generation CTA — Same as Blog */}
          <div className="col-span-12 pt-4">
            <CTASection title="Have Questions About Upcoming Events?" />
          </div>
        </div>
      </section>

      {/* =========================================================
          GALLERY SECTION — Kept as separate section below
          ========================================================= */}
      <section className="w-full bg-card px-4 py-12 font-body sm:py-16 md:py-20 border-t border-border">
        <div className="mx-auto w-full max-w-[1000px]">
          {/* Section Heading — Blog-style centered */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="mb-3">
              <div className="inline-flex items-center gap-2 rounded-2xl bg-brand-accent/10 px-3.5 py-2 text-xs font-semibold text-brand-accent">
                <span className="size-1.5 rounded-full bg-brand-accent" aria-hidden="true" />
                <span>Photo Archive</span>
              </div>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Inside HighEd Events & Delegate Meetings
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Glimpse our university delegate roundtables, 1-on-1 counseling desks, and pre-departure orientations.
            </p>
          </div>

          {/* Gallery Category Filter — Blog-style pills */}
          <div className="no-scrollbar flex items-center justify-center gap-2 overflow-x-auto pb-1 pt-0.5 flex-wrap">
            {(["All", "1-on-1 Sessions", "Delegate Conclave", "Pre-Departure", "Fairs"] as GalleryFilter[]).map(
              (cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedGalleryCat(cat)}
                  className={`btn-motion min-h-[40px] shrink-0 cursor-pointer rounded-full px-4 py-2 text-xs font-semibold sm:text-sm ${selectedGalleryCat === cat
                    ? "bg-brand-primary text-white shadow-xs"
                    : "border border-border bg-card text-muted-foreground hover:bg-brand-primary/5 hover:text-brand-primary"
                    }`}
                >
                  {cat}
                </button>
              )
            )}
          </div>

          {/* Photo Grid — Cards with blog-style border and hover */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl border border-border bg-neutral-50/70 transition-all duration-200 hover:border-primary/40 hover:bg-white hover:shadow-md"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <Badge variant="accent" size="sm">
                      {item.category}
                    </Badge>
                  </div>

                  {/* Caption at Bottom */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-sm font-semibold leading-snug drop-shadow-sm">
                      {item.title}
                    </p>
                    <div className="mt-1 flex items-center justify-between text-[11px] text-white/80">
                      <span className="flex items-center gap-1">
                        <MapPin size={11} className="text-brand-accent" />
                        <span>{item.location}</span>
                      </span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          EXPERTS SECTION — Blog-style centered layout
          ========================================================= */}
      <section className="w-full bg-surface-neutral px-4 py-12 font-body sm:py-16 md:py-20 border-t border-border">
        <div className="mx-auto w-full max-w-[1000px]">
          {/* Section Heading — Blog-style centered */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="mb-3">
              <div className="inline-flex items-center gap-2 rounded-2xl bg-brand-accent/10 px-3.5 py-2 text-xs font-semibold text-brand-accent">
                <span className="size-1.5 rounded-full bg-brand-accent" aria-hidden="true" />
                <span>Keynote Speakers</span>
              </div>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Meet the University Delegates & Advisory Panel
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Gain first-hand perspective on global admissions rubrics, visa policy shifts, and post-study career avenues.
            </p>
          </div>

          {/* Experts Grid — 4-col cards with blog-style borders */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRY_EXPERTS.map((expert) => (
              <div
                key={expert.id}
                className="group flex flex-col items-center overflow-hidden rounded-2xl border border-border bg-neutral-50/70 p-6 text-center transition-all duration-200 hover:border-primary/40 hover:bg-white hover:shadow-md"
              >
                {/* Expert Photo */}
                <div className="relative size-24 overflow-hidden rounded-full border-2 border-brand-primary/20 shadow-sm">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="96px"
                  />
                </div>

                {/* Country Pill */}
                <div className="mt-4">
                  <Badge variant="accent" size="sm">
                    {expert.country}
                  </Badge>
                </div>

                {/* Name & Title */}
                <h3 className="mt-3 text-base font-semibold text-foreground leading-snug group-hover:text-brand-primary transition-colors">
                  {expert.name}
                </h3>
                <p className="mt-0.5 text-xs font-medium text-brand-accent">
                  {expert.role}
                </p>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
                  {expert.organization}
                </p>

                {/* Specialty */}
                <div className="mt-4 pt-3 border-t border-border w-full text-left">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Session Topics:
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {expert.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          RECAP MODAL FOR PAST EVENTS — Blog-style modal
          ========================================================= */}
      {activeRecapEvent && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setActiveRecapEvent(null)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Banner */}
            <div className="relative h-40 w-full overflow-hidden bg-brand-primary">
              <Image
                src={activeRecapEvent.image}
                alt={activeRecapEvent.title}
                fill
                className="object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

              <button
                type="button"
                onClick={() => setActiveRecapEvent(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-10 flex size-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md hover:bg-black/80 transition-all cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <Badge variant="accent" size="sm">
                  {activeRecapEvent.type} Recap
                </Badge>
                <h3 id="modal-title" className="mt-2 text-lg sm:text-xl font-bold leading-snug text-white">
                  {activeRecapEvent.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground border-b border-border pb-4">
                <span className="flex items-center gap-1.5 font-medium">
                  <Calendar size={14} className="text-brand-primary" />
                  <span>{activeRecapEvent.date}</span>
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <MapPin size={14} className="text-brand-accent" />
                  <span>{activeRecapEvent.location}</span>
                </span>
                <span className="flex items-center gap-1.5 font-semibold text-emerald-600 ml-auto">
                  <Users size={14} />
                  <span>{activeRecapEvent.attendees}</span>
                </span>
              </div>

              {/* Summary */}
              <div className="mt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Executive Summary:
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {activeRecapEvent.recap?.summary || activeRecapEvent.shortDescription}
                </p>
              </div>

              {/* Key Outcomes */}
              {activeRecapEvent.recap?.keyOutcomes && (
                <div className="mt-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Verified Outcomes:
                  </h4>
                  <ul className="mt-2.5 space-y-2">
                    {activeRecapEvent.recap.keyOutcomes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Participating Universities */}
              {activeRecapEvent.recap?.participatingUnis && (
                <div className="mt-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Participating Universities:
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {activeRecapEvent.recap.participatingUnis.map((uni) => (
                      <span
                        key={uni}
                        className="rounded-full bg-surface-neutral px-3 py-1 text-xs font-medium text-foreground border border-border"
                      >
                        {uni}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal CTA */}
              <div className="mt-8 pt-5 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-muted-foreground text-center sm:text-left">
                  Missed this event? Request the recording or secure VIP alerts for the next round.
                </p>
                <LeadCTAButton
                  source={`recap_${activeRecapEvent.id}`}
                  contextTitle={`Request info on ${activeRecapEvent.title}`}
                  contextCTA="Request Session Summary"
                  variant="accent"
                  size="sm"
                  forcePopup={true}
                  className="w-full sm:w-auto font-semibold shrink-0"
                >
                  Request Next Session Alert
                </LeadCTAButton>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dedicated Event Registration Popup Modal */}
      <EventRegistrationModal
        isOpen={!!selectedEventForRegistration}
        onClose={() => setSelectedEventForRegistration(null)}
        event={selectedEventForRegistration}
      />
    </div>
  );
}
