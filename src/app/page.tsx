import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import LatestProjects from "@/components/LatestProjects";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import VideoSection from "@/components/VideoSection";
import HomeHero from "@/components/HomeHero";

export default function Home() {
  return (
    <>
      <HomeHero />
      {/* <VideoSection /> */}
      <HeroSection />
      <Features />
      {/* <LatestProjects /> */}
      {/* <Testimonials /> */}
    </>
  );
}
