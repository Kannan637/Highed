import React from "react";

export const SkipToContent: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100000] focus:rounded-lg focus:bg-[#253A7B] focus:px-4 focus:py-2.5 focus:font-dmsans focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg focus:outline-hidden focus:ring-2 focus:ring-[#E93F61]"
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;
