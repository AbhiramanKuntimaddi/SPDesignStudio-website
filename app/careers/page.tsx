"use client";

import { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useInView } from "framer-motion";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CareerHero from "@/components/Career/CareerHero";
import JobListing from "@/components/Career/JobListing";
import ApplicationModal from "@/components/Career/ApplicationModal";

// Custom hook to check a media query (matching your AboutPage pattern)
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

const CareersPage = () => {
	const pathname = usePathname();
	const heroRef = useRef(null);
	const [showForm, setShowForm] = useState(false);
	const isMobile = useMediaQuery("(max-width: 640px)");

	// Logic for Header visibility consistent with AboutPage
	const observerMargin = isMobile ? "-60% 0px -20% 0px" : "-40% 0px -20% 0px";
	const isHeroInView = useInView(heroRef, { margin: observerMargin });

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="bg-[#5b3644] text-[#fffaeb] min-h-screen flex flex-col">
			{/* Header - Using the scroll observer logic */}
			<Header showHeader={isHeroInView} currentPath={pathname} />

			<div className="flex-grow">
				{/* Hero Section */}
				<section ref={heroRef}>
					<CareerHero />
				</section>

				{/* Job Openings Section */}
				<JobListing onApply={() => setShowForm(true)} />
			</div>

			{/* Application Modal Overlay */}
			<ApplicationModal isOpen={showForm} onClose={() => setShowForm(false)} />

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default CareersPage;
