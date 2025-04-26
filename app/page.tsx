"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroductionSection from "@/components/IntroductionSection";
import ContactUs from "@/components/ContactUs";
import TestimonySection from "@/components/TestimonySection";
import Footer from "@/components/Footer";

// Custom hook to check a media query
function useMediaQuery(query: string) {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);
		const listener = () => setMatches(media.matches);

		// Set initial match
		setMatches(media.matches);

		media.addEventListener("change", listener);
		return () => media.removeEventListener("change", listener);
	}, [query]);

	return matches;
}

export default function Home() {
	const heroRef = useRef(null);
	// Detect mobile screen
	const isMobile = useMediaQuery("(max-width: 640px)");
	// Safer observer margin to reduce false triggers
	const observerMargin = isMobile ? "-60% 0px -20% 0px" : "-40% 0px -20% 0px";
	// Watch when Hero is in view
	const isHeroInView = useInView(heroRef, { margin: observerMargin });

	return (
		<div>
			<Header showHeader={isHeroInView} />
			{/* Wrapper with smooth scroll enabled */}
			<div className="scroll-smooth">
				<div ref={heroRef} style={{ minHeight: "100vh" }}>
					<Hero />
				</div>
				<IntroductionSection />
				<TestimonySection />
				<ContactUs />
				<Footer />
			</div>
		</div>
	);
}
