"use client";

import { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useInView } from "framer-motion";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ContactHero from "@/components/Contact/ContactHero";
import ContactChannelsSection from "@/components/Contact/ContactChannelsSection";
import StudioInfoSection from "@/components/Contact/StudioInfoSection";

// Custom hook to check a media query for responsive observer logic
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

const ContactPage = () => {
	const pathname = usePathname();
	const heroRef = useRef(null);
	const isMobile = useMediaQuery("(max-width: 640px)");

	// Consistent with AboutPage logic:
	// Header shows/hides based on Hero visibility
	const observerMargin = isMobile ? "-60% 0px -20% 0px" : "-40% 0px -20% 0px";
	const isHeroInView = useInView(heroRef, { margin: observerMargin });

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="bg-[#5b3644] text-[#fffaeb] selection:bg-[#bfa15f]/30">
			{/* Header: uses the same InView logic as AboutPage */}
			<Header showHeader={isHeroInView} currentPath={pathname} />

			<section ref={heroRef}>
				<ContactHero />
			</section>

			<ContactChannelsSection />
			<StudioInfoSection />
			<Footer />
		</div>
	);
};

export default ContactPage;
