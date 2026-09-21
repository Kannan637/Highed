"use client";

import React, { createContext, useState, useCallback } from "react";
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
  openLeadPopup: () => {},
  closeLeadPopup: () => {},
  isOpen: false,
});

export const LeadPopupProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("popup");
  const [contextTitle, setContextTitle] = useState<string | undefined>();
  const [contextCTA, setContextCTA] = useState<string | undefined>();
  const pathname = usePathname();

  const openLeadPopup = useCallback(
    (options?: LeadPopupOptions) => {
      setSource(options?.source || "popup");
      setContextTitle(options?.contextTitle);
      setContextCTA(options?.contextCTA);
      setIsOpen(true);
    },
    []
  );

  const closeLeadPopup = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <LeadPopupContext.Provider value={{ openLeadPopup, closeLeadPopup, isOpen }}>
      {children}
      <LeadPopup
        isOpen={isOpen}
        onClose={closeLeadPopup}
        source={source}
        page={pathname}
        contextTitle={contextTitle}
        contextCTA={contextCTA}
      />
    </LeadPopupContext.Provider>
  );
};

export default LeadPopupProvider;
