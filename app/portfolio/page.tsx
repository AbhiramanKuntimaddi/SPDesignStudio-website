"use client";

import { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useInView } from "framer-motion";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import PortfolioHero from "@/components/Portfolio/PortfolioHero";

// Helper for responsive observer logic
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

export default function PortfolioPage() {
	const pathname = usePathname();
	const heroRef = useRef(null);
	const isMobile = useMediaQuery("(max-width: 640px)");

	// Logic to show/hide header based on PortfolioHero visibility
	const observerMargin = isMobile ? "-60% 0px -20% 0px" : "-40% 0px -20% 0px";
	const isHeroInView = useInView(heroRef, { margin: observerMargin });

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="bg-[#5b3644] text-[#fffaeb] selection:bg-[#bfa15f]/30">
			{/* Header reacts to heroRef */}
			<Header showHeader={isHeroInView} currentPath={pathname} />

			<main>
				<section ref={heroRef}>
					<PortfolioHero />
				</section>

				{/* You can add a PortfolioGridSection here later */}
			</main>

			<Footer />
		</div>
	);
}
