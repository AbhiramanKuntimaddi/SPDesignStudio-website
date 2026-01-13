"use client";

import { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useInView } from "framer-motion";
import Header from "@/components/Header/Header";
import { PortfolioHero } from "@/components/Portfolio/PortfolioHero";
import { SanityProject } from "@/lib/queries";

interface PortfolioClientWrapperProps {
	initialProjects: SanityProject[];
}

function useMediaQuery(query: string): boolean {
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

export default function PortfolioClientWrapper({
	initialProjects,
}: PortfolioClientWrapperProps) {
	const pathname = usePathname();
	const topZoneRef = useRef<HTMLDivElement>(null);
	const isMobile = useMediaQuery("(max-width: 640px)");

	const observerMargin = isMobile ? "-10% 0px 0px 0px" : "-20% 0px 0px 0px";
	const isAtTop = useInView(topZoneRef, {
		margin: observerMargin,
		amount: 0.1,
	});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Header showHeader={isAtTop} currentPath={pathname} />
			<main>
				<div
					ref={topZoneRef}
					className="absolute top-0 left-0 w-full h-[40vh] pointer-events-none"
				/>
				<section>
					{/* Pass the Sanity data into the Hero */}
					<PortfolioHero initialProjects={initialProjects} />
				</section>
			</main>
		</>
	);
}
