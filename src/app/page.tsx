import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import LatestProjects from "@/components/LatestProjects";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <LatestProjects />
      <About />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}
