"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroductionSection from "@/components/IntroductionSection";
import ContactUs from "@/components/ContactUs";

// Custom hook to check a media query.
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);
  return matches;
}

export default function Home() {
  const heroRef = useRef(null);
  // Adjust based on a mobile breakpoint (e.g. 640px)
  const isMobile = useMediaQuery("(max-width: 640px)");
  // When on mobile, hide the header earlier by increasing the negative top offset.
  const observerMargin = isMobile ? "-80% 0px -30% 0px" : "-50% 0px -30% 0px";
  const isHeroInView = useInView(heroRef, { margin: observerMargin });

  return (
    <div>
      <Header showHeader={isHeroInView} />
      <div ref={heroRef}>
        <Hero />
      </div>
      <IntroductionSection />
      <ContactUs />
    </div>
  );
}