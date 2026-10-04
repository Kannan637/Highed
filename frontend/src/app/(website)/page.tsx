import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";
import StudyAbroadCards from "@/components/home/StudyAbroadCards";
import LogoMarquee from "@/components/home/LogoMarquee";
import Form from "@/components/forms/LeadForm";

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
      <AboutUs />
      <CountryService id="top-countries" />
      <ServicesSection id="services" />

      <Courses id="courses" />
      <ScholarShip id="scholarships" />
      <RealStory />
      <Testimonials />
      <WhyChooseAs />
      <FAQSection />
      <section className="bg-surface-neutral py-16 sm:py-20 lg:py-24">
        <div className="site-container max-w-6xl mx-auto px-4 sm:px-6">
          <Form />
        </div>
      </section>
    </div>
  );
}


