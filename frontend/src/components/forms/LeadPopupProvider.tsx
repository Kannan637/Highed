"use client";

import React, {
  createContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const LeadPopup = dynamic(() => import("./LeadPopup"), {
  ssr: false,
});

interface LeadPopupOptions {
  source?: string;
  contextTitle?: string;
  contextCTA?: string;
}

interface LeadPopupContextType {
  openLeadPopup: (options?: LeadPopupOptions) => void;
  closeLeadPopup: () => void;
  isOpen: boolean;
}

export const LeadPopupContext = createContext<LeadPopupContextType>({
  openLeadPopup: () => { },
  closeLeadPopup: () => { },
  isOpen: false,
});

export const LeadPopupProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [source, setSource] = useState("popup");
  const [contextTitle, setContextTitle] = useState<string | undefined>();
  const [contextCTA, setContextCTA] = useState<string | undefined>();

  const pathname = usePathname();

  const isOpenRef = useRef(false);
  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /**
   * Open popup
   */
  const openLeadPopup = useCallback((options?: LeadPopupOptions) => {
    // Prevent opening multiple times concurrently
    if (isOpenRef.current) return;

    setSource(options?.source ?? "popup");
    setContextTitle(options?.contextTitle);
    setContextCTA(options?.contextCTA);

    setIsOpen(true);
  }, []);

  /**
   * Close popup
   */
  const closeLeadPopup = useCallback(() => {
    setIsOpen(false);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  /**
   * 10-SECOND INACTIVITY MONITOR
   * Continually monitors user action.
   * If there is no action on the website for 10 seconds → pop up the lead popup form.
   */
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Pause monitor while popup is currently open
    if (isOpen) return;

    // Skip popup on the dedicated full-page form route (/book-counselling)
    if (pathname === "/book-counselling") return;

    const clearTimer = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };

    const startTimer = () => {
      clearTimer();

      timerRef.current = setTimeout(() => {
        openLeadPopup({
          source: `inactivity_${pathname === "/" ? "home" : pathname.replace(/^\//, "").replace(/\//g, "_")}`,
        });
      }, 10_000); // 10 seconds of no action
    };

    // Any user action resets the 10-second timer
    const handleAction = () => {
      startTimer();
    };

    // Throttled mouse movement handler so cursor movement acts as activity without performance overhead
    let lastMouseMove = 0;
    const handleMouseMove = () => {
      const now = Date.now();
      if (now - lastMouseMove > 1000) {
        lastMouseMove = now;
        startTimer();
      }
    };

    const actionEvents: Array<keyof WindowEventMap> = [
      "click",
      "scroll",
      "keydown",
      "touchstart",
      "mousedown",
    ];

    actionEvents.forEach((event) => {
      window.addEventListener(event, handleAction, { passive: true });
    });

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Start 10-second countdown immediately on mount or route transition
    startTimer();

    return () => {
      clearTimer();

      actionEvents.forEach((event) => {
        window.removeEventListener(event, handleAction);
      });

      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isOpen, pathname, openLeadPopup]);

  return (
    <LeadPopupContext.Provider
      value={{
        openLeadPopup,
        closeLeadPopup,
        isOpen,
      }}
    >
      {children}

      {isOpen && (
        <LeadPopup
          isOpen={isOpen}
          onClose={closeLeadPopup}
          source={source}
          page={pathname}
          contextTitle={contextTitle}
          contextCTA={contextCTA}
        />
      )}
    </LeadPopupContext.Provider>
  );
};

export default LeadPopupProvider;