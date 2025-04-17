import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import LatestProjects from "@/components/LatestProjects";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <VideoSection />
      <HeroSection />
      <Features />
      <LatestProjects />
      <About />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}
