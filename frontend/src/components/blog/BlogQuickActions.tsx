"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  PhoneCall,
  Share2,
  Check,
  Zap,
  X,
  ArrowRight,
} from "lucide-react";
import { useLeadPopup } from "@/hooks/useLeadPopup";
import { cn } from "@/lib/utils";

export interface QuickActionItem {
  id: string;
  label: string;
}

interface BlogQuickActionsProps {
  items: QuickActionItem[];
  articleTitle: string;
  className?: string;
}

export function BlogQuickActions({
  items,
  articleTitle,
  className,
}: BlogQuickActionsProps) {
  const { openLeadPopup } = useLeadPopup();
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");
  const [copied, setCopied] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  // IntersectionObserver scroll-spy for active section
  useEffect(() => {
    if (!items || items.length === 0) return;

    if (typeof window !== "undefined" && window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      if (items.some((item) => item.id === hashId)) {
        setActiveId(hashId);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-15% 0px -70% 0px",
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      setActiveId(id);
      setIsDrawerOpen(false);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      if (typeof window !== "undefined" && window.history.pushState) {
        window.history.pushState(null, "", `#${id}`);
      }
    }
  };

  const handleOpenLead = () => {
    openLeadPopup({
      source: "blog-sidebar-quickaction",
      contextTitle: articleTitle,
      contextCTA: "Book Free Counselling",
    });
    setIsDrawerOpen(false);
  };

  const handleShare = async () => {
    if (typeof window === "undefined") return;
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // Fallback
    }
  };

  return (
    <>
      {/* =========================================================
          LEFT ARTICLE SIDEBAR: Desktop Sticky (lg:block)
          ========================================================= */}
      <aside
        id="key-takeaways"
        className={cn(
          "w-full shrink-0 scroll-mt-24",
          className
        )}
        aria-label="Article Navigation & Key Takeaways"
      >
        <div className="lg:sticky lg:top-24 space-y-6">
          {/* Key Takeaways Heading (using h3 as requested) */}
          <div className="pb-1">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground m-0">
              Key takeaways
            </h3>
            <p className="mt-1 text-xs text-muted-foreground m-0">
              Jump directly to specific policy sections
            </p>
          </div>

          {/* Vertically stacked list of navigation items separated by horizontal dividers */}
          <nav
            aria-label="Table of Contents"
            className="border-t border-b border-border divide-y divide-border"
          >
            {items.map((item) => {
              const isActive = item.id === activeId;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={cn(
                    "group flex items-start justify-between gap-3 py-3.5 px-1 text-xs sm:text-[13.5px] leading-snug transition-colors",
                    isActive
                      ? "font-semibold text-brand-primary"
                      : "font-normal text-muted-foreground hover:text-foreground"
                  )}
                  aria-current={isActive ? "location" : undefined}
                >
                  <span className="text-pretty">{item.label}</span>
                  <ChevronRight
                    className={cn(
                      "size-3.5 shrink-0 mt-0.5 transition-transform duration-200",
                      isActive
                        ? "text-brand-primary translate-x-0.5"
                        : "text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-0.5"
                    )}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </nav>

          {/* Dedicated Quick Action Section for Blog Page Alone */}
          <div className="pt-2 space-y-2.5">
            <button
              type="button"
              onClick={handleOpenLead}
              className="btn-motion group flex w-full items-center justify-between gap-2 rounded-xl bg-brand-primary px-4 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-brand-primary-hover cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <PhoneCall className="size-3.5 text-white/90" />
                <span>Book Free Counselling</span>
              </span>
              <ArrowRight className="size-3.5 text-white/70 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="btn-motion flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-xs font-medium text-foreground hover:bg-surface-neutral transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="size-3.5 text-emerald-600" />
                  <span className="text-emerald-600 font-semibold">
                    Link Copied!
                  </span>
                </>
              ) : (
                <>
                  <Share2 className="size-3.5 text-muted-foreground" />
                  <span>Share Article</span>
                </>
              )}
            </button>
          </div>
        </div>
      </aside>

      {/* =========================================================
          MOBILE FLOATING QUICK ACTION BUTTON
          ========================================================= */}
      <div className="lg:hidden fixed bottom-20 right-4 z-40">
        <button
          type="button"
          onClick={() => setIsDrawerOpen(true)}
          className="btn-motion flex items-center gap-2 rounded-full bg-brand-primary px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-brand-primary/30 hover:bg-brand-primary-hover active:scale-95 cursor-pointer"
          aria-label="Open Quick Actions Navigation"
        >
          <Zap className="size-4 fill-white" />
          <span>Quick Actions</span>
        </button>
      </div>

      {/* =========================================================
          MOBILE QUICK ACTIONS DRAWER / MODAL
          ========================================================= */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-xs lg:hidden animate-in fade-in duration-200"
          onClick={() => setIsDrawerOpen(false)}
        >
          <div
            className="w-full max-h-[85vh] overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl animate-in slide-in-from-bottom duration-250"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <div>
                <h4 className="text-base font-bold text-foreground m-0">
                  Key takeaways &amp; Sections
                </h4>
                <p className="text-xs text-muted-foreground m-0">
                  Quick navigation for {articleTitle}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsDrawerOpen(false)}
                className="flex size-8 items-center justify-center rounded-full bg-surface-neutral text-muted-foreground hover:text-foreground"
                aria-label="Close"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* List */}
            <div className="mt-4 divide-y divide-border border-y border-border max-h-[300px] overflow-y-auto">
              {items.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className={cn(
                      "block py-3 px-1 text-xs font-medium transition-colors",
                      isActive
                        ? "text-brand-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="mt-5 space-y-2">
              <button
                type="button"
                onClick={handleOpenLead}
                className="btn-motion flex w-full items-center justify-center gap-2 rounded-xl bg-brand-primary py-3 text-xs font-semibold text-white shadow-xs hover:bg-brand-primary-hover cursor-pointer"
              >
                <PhoneCall className="size-3.5" />
                <span>Book Free Counselling</span>
              </button>

              <button
                type="button"
                onClick={handleShare}
                className="btn-motion flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card py-2 text-xs font-medium text-foreground hover:bg-surface-neutral cursor-pointer"
              >
                {copied ? (
                  <span className="text-emerald-600 font-semibold">
                    Link Copied!
                  </span>
                ) : (
                  <span>Share Article</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BlogQuickActions;
