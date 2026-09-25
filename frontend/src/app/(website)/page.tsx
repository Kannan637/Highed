import Hero from "@/components/home/Hero";
import StudyAbroadCards from "@/components/home/StudyAbroadCards";
import Courses from "@/components/home/Courses";
import WhyChooseAs from "@/components/home/WhyChooseAs";
import ServicesSection from "@/components/home/Service";
import CountryService from "@/components/home/CountryService";
import AboutUs from "@/components/home/AboutUs";
import ScholarShip from "@/components/home/Scholarship";
import FAQSection from "@/components/home/FAQ";
import RealStory from "@/components/home/RealStory"
import LogoMarquee from "@/components/home/LogoMarquee";
import Testimonials from "@/components/home/testimonial";

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
