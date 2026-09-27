import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";
import StudyAbroadCards from "@/components/home/StudyAbroadCards";
import LogoMarquee from "@/components/home/LogoMarquee";

// Below-the-fold components dynamically imported to minimize initial bundle size and TBT
const CountryService = dynamic(() => import("@/components/home/CountryService"));
const ServicesSection = dynamic(() => import("@/components/home/Service"));
const AboutUs = dynamic(() => import("@/components/home/AboutUs"));
const Courses = dynamic(() => import("@/components/home/Courses"));
const ScholarShip = dynamic(() => import("@/components/home/Scholarship"));
const RealStory = dynamic(() => import("@/components/home/RealStory"));
const Testimonials = dynamic(() => import("@/components/home/testimonial"));
const WhyChooseAs = dynamic(() => import("@/components/home/WhyChooseAs"));
const FAQSection = dynamic(() => import("@/components/home/FAQ"));

export default function Home() {
  return (
    <div className="w-full tracking-tight-5 [letter-spacing:var(--tracking-tight-5)] [&_*]:[letter-spacing:var(--tracking-tight-5)]">
      <Hero />
      <StudyAbroadCards />
      <LogoMarquee />
      <CountryService />
      <ServicesSection />
      <AboutUs />
      <Courses />
      <ScholarShip />
      <RealStory />
      <Testimonials />
      <WhyChooseAs />
      <FAQSection />
    </div>
  );
}


