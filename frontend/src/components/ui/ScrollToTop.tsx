"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-[5.25rem] right-7 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-[#253A7B] text-white shadow-md transition-all duration-300 hover:scale-110 hover:bg-[#1b2b5c] active:scale-95 cursor-pointer"
    >
      <ArrowUp size={18} />
    </button>
  );
};

export default ScrollToTop;
