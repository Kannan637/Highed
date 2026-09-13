"use client";

import { useState, useCallback } from "react";

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  const toggleDropdown = useCallback((label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  }, []);

  return {
    isOpen,
    activeDropdown,
    open,
    close,
    toggle,
    toggleDropdown,
  };
}

export default useMobileMenu;
