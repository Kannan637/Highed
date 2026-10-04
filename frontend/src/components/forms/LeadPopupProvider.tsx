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
   * 1-MINUTE INACTIVITY MONITOR
   *
   * If there is no user action on the website
   * for 1 minute → open the lead popup.
   */
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Pause monitor while popup is currently open
    if (isOpen) return;

    // Skip popup on the dedicated full-page form route
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
          source: `inactivity_${pathname === "/"
            ? "home"
            : pathname.replace(/^\//, "").replace(/\//g, "_")
            }`,
        });
      }, 60_000); // 1 minute of no action
    };

    // Any user action resets the 1-minute timer
    const handleAction = () => {
      startTimer();
    };

    // Throttled mouse movement handler
    let lastMouseMove = 0;

    const handleMouseMove = () => {
      const now = Date.now();

      if (now - lastMouseMove > 60_000) {
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

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    // Start 1-minute countdown immediately
    // on mount or route transition
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