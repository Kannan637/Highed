"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import { resourceCategories } from "@/data/resources";
import { cn } from "@/lib/utils";

/** Sticky, horizontally scrollable category nav with scroll-spy. */
export const ResourceCategoryNav = () => {
  const [active, setActive] = useState("all");
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (!visible.length) return;
        const match = resourceCategories.find((c) => c.target === visible[0].target.id);
        if (match) setActive(match.id);
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );
    resourceCategories.forEach((c) => {
      const el = document.getElementById(c.target);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Keep the active pill visible on small screens.
  useEffect(() => {
    const el = listRef.current?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    el?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [active]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string, target: string) => {
    const el = document.getElementById(target);
    if (!el) return;
    e.preventDefault();
    setActive(id);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${target}`);
  };

  return (
    <nav
      aria-label="Resource categories"
      className="sticky top-0 z-40 border-y border-[#E6E7EF] bg-white/95 backdrop-blur-sm"
    >
      <Container size="lg">
        <ul
          ref={listRef}
          className="-mx-1 flex gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {resourceCategories.map((c) => {
            const isActive = active === c.id;
            return (
              <li key={c.id} className="shrink-0">
                <a
                  href={`#${c.target}`}
                  data-id={c.id}
                  id={`resource-nav-${c.id}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={(e) => handleClick(e, c.id, c.target)}
                  className={cn(
                    "inline-flex min-h-11 items-center rounded-full px-4 text-[14px] font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary",
                    isActive
                      ? "bg-brand-accent text-white"
                      : "text-content-secondary hover:bg-[#F5F5F9] hover:text-brand-primary"
                  )}
                >
                  {c.label}
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
};

export default ResourceCategoryNav;
