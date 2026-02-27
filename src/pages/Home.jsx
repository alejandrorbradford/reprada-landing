import { useEffect } from "react";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import LogoMarquee from "../components/LogoMarquee";
import Pricing from "../components/Pricing";
import BottomCTA from "../components/BottomCTA";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <LogoMarquee />
      <Pricing />
      <BottomCTA />
    </>
  );
}
