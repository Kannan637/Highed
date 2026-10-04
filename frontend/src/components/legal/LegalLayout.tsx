import React from "react";

interface LegalLayoutProps {
  children: React.ReactNode;
}

export function LegalLayout({ children }: LegalLayoutProps) {
  return (
    <div className="w-full bg-[#F8F9FC] min-h-[calc(100vh-250px)]">
      <div className="max-w-[820px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
}

export default LegalLayout;
