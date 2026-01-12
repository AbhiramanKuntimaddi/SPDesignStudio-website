"use client";

import { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useInView } from "framer-motion";
import Header from "@/components/Header/Header";
import AboutHero from "@/components/About/AboutHero";
import LeadershipSection from "@/components/About/LeadershipSection";
import CollectiveSection from "@/components/About/CollectiveSection";
import TimelineSection from "@/components/About/TimelineSection";
import Footer from "@/components/Footer/Footer";
import ApproachAndProcessSection from "@/components/About/ApproachAndProcessSection";

// Custom hook to check a media query
function useMediaQuery(query: string) {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);
		const listener = () => setMatches(media.matches);
		setMatches(media.matches);
		media.addEventListener("change", listener);
		return () => media.removeEventListener("change", listener);
	}, [query]);

	return matches;
}

const AboutPage = () => {
	const pathname = usePathname();
	const heroRef = useRef(null);
	const isMobile = useMediaQuery("(max-width: 640px)");

	const observerMargin = isMobile ? "-60% 0px -20% 0px" : "-40% 0px -20% 0px";
	const isHeroInView = useInView(heroRef, { margin: observerMargin });

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="bg-[#5b3644] text-[#fffaeb]">
			{/* Header */}
			<Header showHeader={isHeroInView} currentPath={pathname} />

			{/* Hero Section */}
			<section ref={heroRef}>
				<AboutHero />
			</section>

			{/* Leadership Section */}
			<LeadershipSection />

			{/* Team / Collective Section */}
			<CollectiveSection />

			{/* Approach & Process Combined Section */}
			<ApproachAndProcessSection />

			{/* Timeline Section */}
			<TimelineSection />

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default AboutPage;
