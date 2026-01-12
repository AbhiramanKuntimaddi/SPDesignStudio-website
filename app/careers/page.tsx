"use client";

import { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useInView } from "framer-motion";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CareerHero from "@/components/Career/CareerHero";
import JobListing from "@/components/Career/JobListing";
import ApplicationModal from "@/components/Career/ApplicationModal";

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

	// CHANGED: Instead of just true/false, we store the job title string
	const [selectedJob, setSelectedJob] = useState<string | null>(null);

	const isMobile = useMediaQuery("(max-width: 640px)");
	const observerMargin = isMobile ? "-60% 0px -20% 0px" : "-40% 0px -20% 0px";
	const isHeroInView = useInView(heroRef, { margin: observerMargin });

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="bg-[#5b3644] text-[#fffaeb] min-h-screen flex flex-col">
			<Header showHeader={isHeroInView} currentPath={pathname} />

			<div className="flex-grow">
				<section ref={heroRef}>
					<CareerHero />
				</section>

				{/* UPDATED: Pass the job title into the state setter */}
				<JobListing onApply={(title) => setSelectedJob(title)} />
			</div>

			{/* UPDATED: Pass the jobTitle and use boolean logic for isOpen */}
			<ApplicationModal
				isOpen={!!selectedJob}
				onClose={() => setSelectedJob(null)}
				jobTitle={selectedJob || ""}
			/>

			<Footer />
		</div>
	);
};

export default CareersPage;
