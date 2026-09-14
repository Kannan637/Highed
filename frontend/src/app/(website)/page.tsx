import Hero from "@/components/home/Hero";
import StudyAbroadCards from "@/components/home/StudyAbroadCards";
import Courses from "@/components/home/Courses";
import WhyChooseAs from "@/components/home/WhyChooseAs";
import ServicesSection from "@/components/home/Service";
import CountryService from "@/components/home/CountryService";
import AboutUs from "@/components/home/AboutUs";
import ScholarShip from "@/components/home/Scholarship";
import FAQSection from "@/components/home/FAQ";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <StudyAbroadCards />
      <WhyChooseAs />
      <CountryService />
      <ServicesSection />
      <AboutUs />
      <Courses />
      <ScholarShip />
      <FAQSection />
      <MobileStickyCTA />
    </>
  );
}
