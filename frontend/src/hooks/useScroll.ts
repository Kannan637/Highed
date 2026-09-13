"use client";

import { useState, useEffect } from "react";

export function useScroll() {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
    isScrolled: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
        isScrolled: window.scrollY > 20,
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPosition;
}

export default useScroll;
