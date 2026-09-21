"use client";

import { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useGsap(
  effect: (ctx: gsap.Context) => void,
  dependencies: unknown[] = [],
  scope?: React.RefObject<HTMLElement | null>
) {
  const isMounted = useRef(false);

  useIsomorphicLayoutEffect(() => {
    isMounted.current = true;

    // Respect user's motion preferences
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context((self) => {
      effect(self as gsap.Context);
    }, scope?.current || undefined);

    return () => {
      ctx.revert();
    };
  }, dependencies);
}

export default useGsap;
