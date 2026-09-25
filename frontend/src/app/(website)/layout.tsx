import React from "react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import LeadPopupProvider from "@/components/forms/LeadPopupProvider";
import MobileBottomNav from "@/components/layout/MobileBottomNav";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LeadPopupProvider>
      <div className="flex min-h-screen flex-col font-body tracking-tight-5">
        <TopBar />
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 outline-hidden">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
        <MobileBottomNav />
      </div>
    </LeadPopupProvider>
  );
}
