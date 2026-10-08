import Hero from "@/components/home/Hero";
import StudyAbroadCards from "@/components/home/StudyAbroadCards";
import LogoMarquee from "@/components/home/LogoMarquee";
import AboutUs from "@/components/home/AboutUs";
import CountryService from "@/components/home/CountryService";
import ServicesSection from "@/components/home/Service";
import Courses from "@/components/home/Courses";
import ScholarShip from "@/components/home/Scholarship";
import RealStory from "@/components/home/RealStory";
import Testimonials from "@/components/home/testimonial";
import WhyChooseAs from "@/components/home/WhyChooseAs";
import FAQSection from "@/components/home/FAQ";
import Form from "@/components/forms/LeadForm";

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


