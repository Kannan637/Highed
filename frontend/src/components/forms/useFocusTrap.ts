"use client";

import { useEffect, type RefObject } from "react";

interface UseFocusTrapOptions {
    isActive: boolean;
    onEscape?: () => void;
    autoFocus?: boolean;
}

const FOCUSABLE_SELECTOR =
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function useFocusTrap(
    containerRef: RefObject<HTMLElement | null>,
    { isActive, onEscape, autoFocus = true }: UseFocusTrapOptions
) {
    // Auto-focus: runs ONLY when isActive flips to true, not on every render
    useEffect(() => {
        if (!isActive || !autoFocus || !containerRef.current) return;

        const focusables = containerRef.current.querySelectorAll<HTMLElement>(
            FOCUSABLE_SELECTOR
        );
        focusables[0]?.focus();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isActive]);

    // Tab-cycling + Escape: attached once while active, not per keystroke
    useEffect(() => {
        if (!isActive || !containerRef.current) return;

        const container = containerRef.current;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onEscape?.();
                return;
            }

            if (e.key !== "Tab") return;

            const focusables = container.querySelectorAll<HTMLElement>(
                FOCUSABLE_SELECTOR
            );
            if (focusables.length === 0) return;

            const first = focusables[0];
            const last = focusables[focusables.length - 1];

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };

        container.addEventListener("keydown", handleKeyDown);
        return () => container.removeEventListener("keydown", handleKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isActive]);
}

export default useFocusTrap;