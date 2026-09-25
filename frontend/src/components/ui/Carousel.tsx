"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  ariaLabel?: string;
  showControls?: boolean;
  controlsPosition?: "top" | "sides" | "bottom";
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  className,
  containerClassName,
  ariaLabel = "Item carousel",
  showControls = true,
  controlsPosition = "top",
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollPrev(scrollLeft > 8);
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 8);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    const observer = new ResizeObserver(checkScroll);
    observer.observe(el);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
      observer.disconnect();
    };
  }, [checkScroll, children]);

  const scroll = (direction: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scroll("prev");
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scroll("next");
    }
  };

  const renderButtons = () => (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => scroll("prev")}
        disabled={!canScrollPrev}
        aria-label="Previous items"
        className={cn(
          "w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer",
          canScrollPrev
            ? "border-black/10 bg-white text-neutral-800 hover:border-brand-primary hover:text-brand-primary shadow-xs hover:shadow active:scale-95"
            : "border-black/5 bg-neutral-100 text-neutral-400 cursor-not-allowed opacity-50"
        )}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={() => scroll("next")}
        disabled={!canScrollNext}
        aria-label="Next items"
        className={cn(
          "w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer",
          canScrollNext
            ? "border-black/10 bg-white text-neutral-800 hover:border-brand-primary hover:text-brand-primary shadow-xs hover:shadow active:scale-95"
            : "border-black/5 bg-neutral-100 text-neutral-400 cursor-not-allowed opacity-50"
        )}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );

  return (
    <section
      role="region"
      aria-label={ariaLabel}
      className={cn("relative w-full", containerClassName)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {showControls && controlsPosition === "top" && (
        <div className="flex justify-end mb-4">
          {renderButtons()}
        </div>
      )}

      <div
        ref={scrollRef}
        className={cn(
          "flex gap-4 md:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth pb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#253A7B]/20 rounded-2xl",
          className
        )}
      >
        {children}
      </div>

      {showControls && controlsPosition === "bottom" && (
        <div className="flex justify-center mt-4">
          {renderButtons()}
        </div>
      )}
    </section>
  );
};

export default Carousel;
