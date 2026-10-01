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
  Sparkles,
  Building2,
  X,
  ExternalLink,
  Filter,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import LeadCTAButton from "@/components/forms/LeadCTAButton";
import {
  UPCOMING_EVENTS,
  PAST_EVENTS,
  INDUSTRY_EXPERTS,
  MEETING_GALLERY,
  EventItem,
} from "@/data/events";
import { cn } from "@/lib/utils";

type LocationFilter = "All" | "Chennai" | "Coimbatore" | "Tirupathi" | "Online";
type GalleryFilter = "All" | "1-on-1 Sessions" | "Delegate Conclave" | "Pre-Departure" | "Fairs";

export default function EventsView() {
  const [selectedLocation, setSelectedLocation] = useState<LocationFilter>("All");
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [selectedGalleryCat, setSelectedGalleryCat] = useState<GalleryFilter>("All");
  const [activeRecapEvent, setActiveRecapEvent] = useState<EventItem | null>(null);

  // Filter Upcoming Events based on location
  const filteredUpcoming = useMemo(() => {
    if (selectedLocation === "All") return UPCOMING_EVENTS;
    return UPCOMING_EVENTS.filter((evt) => evt.city === selectedLocation);
  }, [selectedLocation]);

  // Filter Past Events based on location
  const filteredPast = useMemo(() => {
    if (selectedLocation === "All") return PAST_EVENTS;
    return PAST_EVENTS.filter((evt) => evt.city === selectedLocation);
  }, [selectedLocation]);

  // Filter Gallery items based on category
  const filteredGallery = useMemo(() => {
    if (selectedGalleryCat === "All") return MEETING_GALLERY;
    return MEETING_GALLERY.filter((item) => item.category === selectedGalleryCat);
  }, [selectedGalleryCat]);

  // Location filter options with counts
  const locationOptions: { label: string; value: LocationFilter; count: number }[] = [
    {
      label: "All Locations",
      value: "All",
      count: UPCOMING_EVENTS.length + PAST_EVENTS.length,
    },
    {
      label: "Chennai",
      value: "Chennai",
      count:
        UPCOMING_EVENTS.filter((e) => e.city === "Chennai").length +
        PAST_EVENTS.filter((e) => e.city === "Chennai").length,
    },
    {
      label: "Coimbatore",
      value: "Coimbatore",
      count:
        UPCOMING_EVENTS.filter((e) => e.city === "Coimbatore").length +
        PAST_EVENTS.filter((e) => e.city === "Coimbatore").length,
    },
    {
      label: "Tirupathi",
      value: "Tirupathi",
      count:
        UPCOMING_EVENTS.filter((e) => e.city === "Tirupathi").length +
        PAST_EVENTS.filter((e) => e.city === "Tirupathi").length,
    },
    {
      label: "Online / Webinar",
      value: "Online",
      count:
        UPCOMING_EVENTS.filter((e) => e.city === "Online").length +
        PAST_EVENTS.filter((e) => e.city === "Online").length,
    },
  ];

  return (
    <div className="min-h-screen bg-surface-neutral font-body text-content-primary">
      {/* ============================================================
          1. HERO SECTION
          ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#121A38] via-[#1B2956] to-[#253A7B] pt-20 pb-20 sm:pt-28 sm:pb-24 text-white">
        {/* Ambient background glow & grid lines */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(230,58,95,0.18),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,58,123,0.35),transparent_60%)] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"
          aria-hidden="true"
        />

        <Container size="lg" className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-white/90 backdrop-blur-md shadow-xs animate-fade-in">
              <Sparkles className="size-4 text-[#D6B66A]" />
              <span>Official Global University Conclaves & Admissions Fairs</span>
            </div>

            {/* H1 Heading */}
            <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-white font-heading leading-[1.12]">
              Connect Directly with <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-white via-white/95 to-[#E0E5F5] bg-clip-text text-transparent">
                World-Class Universities
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed font-normal max-w-2xl mx-auto">
              Meet university admissions directors, secure on-spot profile assessments, and
              unlock merit scholarships up to 100%. Free entry across our Tamil Nadu centres and live virtual broadcasts.
            </p>

            {/* Quick Stats Grid */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 max-w-3xl mx-auto">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xs">
                <p className="font-heading text-2xl sm:text-3xl font-bold text-[#E63A5F]">50+</p>
                <p className="mt-1 text-xs text-white/70">Global Unis Represented</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xs">
                <p className="font-heading text-2xl sm:text-3xl font-bold text-[#D6B66A]">100%</p>
                <p className="mt-1 text-xs text-white/70">Free Entry & Evaluation</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xs">
                <p className="font-heading text-2xl sm:text-3xl font-bold text-white">₹5 Cr+</p>
                <p className="mt-1 text-xs text-white/70">Scholarships Conferred</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xs">
                <p className="font-heading text-2xl sm:text-3xl font-bold text-emerald-400">98.4%</p>
                <p className="mt-1 text-xs text-white/70">Visa Approval Rate</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          2. LOCATION FILTER & STATUS TABS
          ============================================================ */}
      <section className="sticky top-16 z-30 border-y border-black/8 bg-white/95 backdrop-blur-md shadow-xs py-3.5 transition-all">
        <Container size="lg">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Location Selector Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              <span className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-content-secondary uppercase tracking-wider pr-2">
                <Filter size={14} className="text-brand-primary" />
                <span>Filter:</span>
              </span>
              {locationOptions.map((opt) => {
                const isSelected = selectedLocation === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setSelectedLocation(opt.value)}
                    className={cn(
                      "inline-flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shrink-0",
                      isSelected
                        ? "bg-brand-primary text-white shadow-xs"
                        : "bg-surface-neutral text-content-secondary hover:bg-neutral-200/70 hover:text-content-primary"
                    )}
                  >
                    <span>{opt.label}</span>
                    <span
                      className={cn(
                        "rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none",
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-black/5 text-content-secondary"
                      )}
                    >
                      {opt.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Upcoming vs Past Switcher Tabs */}
            <div className="flex items-center rounded-full bg-surface-neutral p-1 border border-black/5 shrink-0 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setActiveTab("upcoming")}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer",
                  activeTab === "upcoming"
                    ? "bg-white text-brand-primary shadow-xs font-bold"
                    : "text-content-secondary hover:text-content-primary"
                )}
              >
                Upcoming Events ({filteredUpcoming.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("past")}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer",
                  activeTab === "past"
                    ? "bg-white text-brand-primary shadow-xs font-bold"
                    : "text-content-secondary hover:text-content-primary"
                )}
              >
                Past Events ({filteredPast.length})
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          3. UPCOMING / PAST EVENTS LISTINGS
          ============================================================ */}
      <section className="py-12 sm:py-16">
        <Container size="lg">
          {activeTab === "upcoming" ? (
            <div>
              <div className="flex items-end justify-between mb-8">
                <div>
                  <Badge variant="primary" className="mb-2">
                    Open for Registration
                  </Badge>
                  <h2 className="text-2xl sm:text-3xl font-semibold font-heading text-content-primary">
                    Upcoming Sessions & Admissions Days
                  </h2>
                </div>
                <p className="hidden md:block text-xs sm:text-sm text-content-secondary">
                  Showing {filteredUpcoming.length} events for{" "}
                  <span className="font-semibold text-brand-primary">{selectedLocation}</span>
                </p>
              </div>

              {filteredUpcoming.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-black/15 bg-white p-12 text-center">
                  <Calendar className="mx-auto size-12 text-neutral-300" />
                  <h3 className="mt-3 text-lg font-semibold text-content-primary">
                    No upcoming events in {selectedLocation}
                  </h3>
                  <p className="mt-1 text-sm text-content-secondary max-w-md mx-auto">
                    We frequently add new university fairs and webinars. View our All Locations
                    schedule or book a personal 1-on-1 counseling session anytime.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedLocation("All")}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-primary px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-brand-primary-hover"
                  >
                    View All Locations
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {filteredUpcoming.map((evt) => (
                    <article
                      key={evt.id}
                      className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xs transition-all duration-300 hover:shadow-lg hover:border-brand-primary/20"
                    >
                      {/* Image Banner */}
                      <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-neutral-100">
                        <Image
                          src={evt.image}
                          alt={evt.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={evt.id === "global-fair-chennai-2026"}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                          <span className="rounded-full bg-brand-primary/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white shadow-xs">
                            {evt.type}
                          </span>
                          <span
                            className={cn(
                              "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md shadow-xs",
                              evt.isOnline
                                ? "bg-emerald-500/90 text-white"
                                : "bg-white/95 text-neutral-800"
                            )}
                          >
                            {evt.isOnline ? (
                              <Video size={12} className="text-white" />
                            ) : (
                              <MapPin size={12} className="text-brand-accent" />
                            )}
                            <span>{evt.city}</span>
                          </span>
                        </div>

                        {/* Date & Time Overlay Bar */}
                        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center gap-3 text-white text-xs font-medium">
                          <div className="inline-flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-xs px-2.5 py-1">
                            <Calendar size={13} className="text-[#D6B66A]" />
                            <span>{evt.date}</span>
                          </div>
                          <div className="inline-flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-xs px-2.5 py-1">
                            <Clock size={13} className="text-[#D6B66A]" />
                            <span>{evt.time}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content Card Body */}
                      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                        <div>
                          <h3 className="font-heading text-lg sm:text-xl font-semibold leading-snug text-content-primary group-hover:text-brand-primary transition-colors">
                            {evt.title}
                          </h3>

                          <p className="mt-2 text-sm text-content-secondary line-clamp-2 leading-relaxed">
                            {evt.shortDescription}
                          </p>

                          {/* Key Perks Chips */}
                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {evt.highlights.map((hl) => (
                              <span
                                key={hl}
                                className="inline-flex items-center gap-1 rounded-lg bg-surface-subtle px-2.5 py-1 text-[11px] font-medium text-neutral-700"
                              >
                                <CheckCircle2 size={12} className="text-emerald-600 shrink-0" />
                                <span>{hl}</span>
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Footer */}
                        <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between gap-3">
                          <div className="text-xs text-content-muted flex items-center gap-1">
                            <MapPin size={13} className="shrink-0 text-brand-primary" />
                            <span className="truncate max-w-[180px] sm:max-w-[220px]">
                              {evt.location}
                            </span>
                          </div>

                          <LeadCTAButton
                            source={`event_${evt.id}`}
                            contextTitle={`Register for ${evt.title}`}
                            contextCTA="Confirm Free Pass"
                            variant="accent"
                            size="sm"
                            forcePopup={true}
                            className="shrink-0 font-semibold"
                          >
                            Register Free
                          </LeadCTAButton>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* ============================================================
               PAST EVENTS SECTION (WITH "LEARN MORE" BUTTON)
               ============================================================ */
            <div>
              <div className="flex items-end justify-between mb-8">
                <div>
                  <Badge variant="neutral" className="mb-2">
                    Event Archive & Outcomes
                  </Badge>
                  <h2 className="text-2xl sm:text-3xl font-semibold font-heading text-content-primary">
                    Past Conclaves & Admission Highlights
                  </h2>
                </div>
                <p className="hidden md:block text-xs sm:text-sm text-content-secondary">
                  Showing {filteredPast.length} past events with verified student admission results
                </p>
              </div>

              {filteredPast.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-black/15 bg-white p-12 text-center">
                  <p className="text-sm text-content-secondary">
                    No past event records in {selectedLocation}.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedLocation("All")}
                    className="mt-3 text-xs font-semibold text-brand-primary hover:underline"
                  >
                    View All Locations
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredPast.map((evt) => (
                    <article
                      key={evt.id}
                      className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xs transition-all duration-300 hover:shadow-md"
                    >
                      {/* Image Banner */}
                      <div className="relative h-44 w-full overflow-hidden bg-neutral-100">
                        <Image
                          src={evt.image}
                          alt={evt.title}
                          fill
                          className="object-cover grayscale-[30%] transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                        {/* Top Badge */}
                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span className="rounded-full bg-neutral-900/80 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-semibold text-white">
                            Completed
                          </span>
                          <span className="rounded-full bg-white/90 backdrop-blur-md px-2 py-0.5 text-[11px] font-semibold text-neutral-800">
                            {evt.city}
                          </span>
                        </div>

                        {/* Stats Pill */}
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                          <span className="inline-flex items-center gap-1 font-semibold text-[#D6B66A]">
                            <Users size={12} />
                            <span>{evt.attendees || "300+ Students"}</span>
                          </span>
                          <span className="inline-flex items-center gap-1 font-semibold text-emerald-300">
                            <Award size={12} />
                            <span>{evt.spotOffers || "Offers Issued"}</span>
                          </span>
                        </div>
                      </div>

                      {/* Content Card Body */}
                      <div className="flex flex-1 flex-col justify-between p-5">
                        <div>
                          <p className="text-xs text-content-muted">{evt.date}</p>
                          <h3 className="mt-1 font-heading text-base font-semibold leading-snug text-content-primary group-hover:text-brand-primary transition-colors">
                            {evt.title}
                          </h3>

                          <p className="mt-2 text-xs sm:text-sm text-content-secondary line-clamp-2 leading-relaxed">
                            {evt.shortDescription}
                          </p>
                        </div>

                        {/* Explicit "Learn More" Button (Per User Requirement) */}
                        <div className="mt-5 pt-4 border-t border-black/5 flex items-center justify-between">
                          <span className="text-xs text-content-muted">Recap & Key Outcomes</span>
                          <button
                            type="button"
                            onClick={() => setActiveRecapEvent(evt)}
                            className="inline-flex items-center gap-1.5 rounded-full border border-brand-primary/30 bg-brand-primary/5 px-3.5 py-1.5 text-xs font-semibold text-brand-primary transition-all duration-200 hover:bg-brand-primary hover:text-white cursor-pointer"
                          >
                            <span>Learn More</span>
                            <ArrowRight size={13} />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          )}
        </Container>
      </section>

      {/* ============================================================
          4. MEETING & EVENT GALLERY SECTION
          ============================================================ */}
      <section className="border-t border-black/8 bg-surface-subtle py-16 sm:py-20">
        <Container size="lg">
          <SectionHeading
            badge="Photo Archive"
            title="Inside HighEd Events & Delegate Meetings"
            subtitle="Glimpse our university delegate roundtables, 1-on-1 counseling desks, and pre-departure orientations."
          />

          {/* Gallery Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {(["All", "1-on-1 Sessions", "Delegate Conclave", "Pre-Departure", "Fairs"] as GalleryFilter[]).map(
              (cat) => {
                const isActive = selectedGalleryCat === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedGalleryCat(cat)}
                    className={cn(
                      "rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer",
                      isActive
                        ? "bg-brand-primary text-white shadow-xs"
                        : "bg-white text-content-secondary hover:bg-neutral-200/80 hover:text-content-primary border border-black/5"
                    )}
                  >
                    {cat}
                  </button>
                );
              }
            )}
          </div>

          {/* Photo Grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xs transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="relative h-64 w-full overflow-hidden bg-neutral-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-90 transition-opacity group-hover:opacity-95" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-white/90 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-semibold text-neutral-800 shadow-xs">
                      {item.category}
                    </span>
                  </div>

                  {/* Caption & Location at Bottom */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-heading text-sm font-semibold leading-snug drop-shadow-xs">
                      {item.title}
                    </p>
                    <div className="mt-1 flex items-center justify-between text-[11px] text-white/80">
                      <span className="flex items-center gap-1">
                        <MapPin size={11} className="text-[#E63A5F]" />
                        <span>{item.location}</span>
                      </span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================
          5. INDUSTRY EXPERTS & UNIVERSITY DELEGATES SECTION
          ============================================================ */}
      <section className="py-16 sm:py-24 bg-white">
        <Container size="lg">
          <SectionHeading
            badge="Keynote Speakers"
            title="Meet the University Delegates & Advisory Panel"
            subtitle="Gain first-hand perspective on global admissions rubrics, visa policy shifts, and post-study career avenues."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRY_EXPERTS.map((expert) => (
              <div
                key={expert.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-surface-neutral p-6 text-center transition-all duration-300 hover:shadow-md hover:border-brand-primary/20 hover:bg-white"
              >
                {/* Expert Photo */}
                <div className="relative mx-auto size-28 overflow-hidden rounded-full border-2 border-brand-primary/20 shadow-md">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="112px"
                  />
                </div>

                {/* Country Pill */}
                <div className="mt-4">
                  <span className="rounded-full bg-brand-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-brand-primary">
                    {expert.country}
                  </span>
                </div>

                {/* Name & Title */}
                <h3 className="mt-2 font-heading text-lg font-semibold text-content-primary">
                  {expert.name}
                </h3>
                <p className="mt-0.5 text-xs font-medium text-brand-accent">
                  {expert.role}
                </p>
                <p className="mt-1 text-xs text-content-secondary line-clamp-1">
                  {expert.organization}
                </p>

                {/* Specialty */}
                <div className="mt-4 pt-3 border-t border-black/5 text-left">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-content-muted">
                    Session Topics:
                  </p>
                  <p className="mt-1 text-xs text-content-secondary leading-relaxed">
                    {expert.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================
          6. CTA FOOTER SECTION
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#1B2956] to-[#253A7B] text-white">
        <Container size="lg">
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-8 sm:p-12 lg:p-16 backdrop-blur-md shadow-2xl text-center">
            {/* Background decorative elements */}
            <div className="absolute -top-24 -right-24 size-64 rounded-full bg-[#E63A5F]/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 size-64 rounded-full bg-[#D6B66A]/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1 text-xs font-semibold text-white/90 backdrop-blur-xs">
                <Building2 size={13} className="text-[#D6B66A]" />
                <span>Can&apos;t Make It to an Upcoming Event?</span>
              </span>

              <h2 className="mt-4 font-heading text-2xl sm:text-4xl font-semibold leading-tight text-white">
                Book a Personal 1-on-1 University Mapping Session
              </h2>

              <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed">
                Meet our certified education advisors at Chennai, Coimbatore, or Tirupathi. Get
                personalized university shortlisting, scholarship assessment, and visa guidance tailored to your profile.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <LeadCTAButton
                  source="events_footer_cta"
                  contextTitle="Book 1-on-1 Counselling"
                  contextCTA="Schedule Free Consultation"
                  variant="accent"
                  size="lg"
                  forcePopup={true}
                  className="w-full sm:w-auto font-semibold px-8"
                >
                  Book Free Counselling
                </LeadCTAButton>

                <a
                  href="https://wa.me/919043982424?text=Hi%20HighEd,%20I%20would%20like%20to%20know%20more%20about%20upcoming%20study%20abroad%20events."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all cursor-pointer"
                >
                  <span>Chat with an Advisor</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          RECAP MODAL FOR PAST EVENTS ("LEARN MORE")
          ============================================================ */}
      {activeRecapEvent && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
          onClick={() => setActiveRecapEvent(null)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-black/10 bg-white shadow-2xl animate-scale-up text-content-primary"
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
                <span className="rounded-full bg-brand-accent px-2.5 py-0.5 text-xs font-semibold">
                  {activeRecapEvent.type} Recap
                </span>
                <h3 id="modal-title" className="mt-1 font-heading text-lg sm:text-xl font-bold leading-snug">
                  {activeRecapEvent.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
              <div className="flex flex-wrap items-center gap-4 text-xs text-content-secondary border-b border-black/5 pb-4">
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
                <h4 className="text-xs font-bold uppercase tracking-wider text-content-muted">
                  Executive Summary:
                </h4>
                <p className="mt-2 text-sm text-content-secondary leading-relaxed">
                  {activeRecapEvent.recap?.summary || activeRecapEvent.shortDescription}
                </p>
              </div>

              {/* Key Outcomes */}
              {activeRecapEvent.recap?.keyOutcomes && (
                <div className="mt-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-content-muted">
                    Verified Outcomes:
                  </h4>
                  <ul className="mt-2.5 space-y-2">
                    {activeRecapEvent.recap.keyOutcomes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-content-primary">
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
                  <h4 className="text-xs font-bold uppercase tracking-wider text-content-muted">
                    Participating Universities:
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {activeRecapEvent.recap.participatingUnis.map((uni) => (
                      <span
                        key={uni}
                        className="rounded-full bg-surface-subtle px-3 py-1 text-xs font-medium text-neutral-800 border border-black/5"
                      >
                        {uni}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal CTA */}
              <div className="mt-8 pt-5 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-content-muted text-center sm:text-left">
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
    </div>
  );
}
