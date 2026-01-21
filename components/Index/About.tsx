"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import localFont from "next/font/local";
import { getAchievements, type StrapiAchievement } from "@/lib/achievements";

const bdScript = localFont({
	src: "../../public/fonts/BDSans/BDScript-Regular.woff",
	style: "italic",
});

const About = () => {
	const [allHonors, setAllHonors] = useState<StrapiAchievement[]>([]);
	const [visibleIndex, setVisibleIndex] = useState(0);
	const [loading, setLoading] = useState(true);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768);
		checkMobile();
		window.addEventListener("resize", checkMobile);

		const loadHonors = async () => {
			const data = await getAchievements();
			setAllHonors(data);
			setLoading(false);
		};
		loadHonors();

		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	// REFRESH LOGIC: Loops through sets every 8 seconds
	useEffect(() => {
		if (allHonors.length === 0) return;

		const step = isMobile ? 1 : 3;
		const interval = setInterval(() => {
			setVisibleIndex((prev) => {
				const nextIndex = prev + step;
				return nextIndex >= allHonors.length ? 0 : nextIndex;
			});
		}, 8000);

		return () => clearInterval(interval);
	}, [allHonors, isMobile, visibleIndex]); // Added visibleIndex to reset timer on manual click

	if (loading || allHonors.length === 0) return null;

	const step = isMobile ? 1 : 3;
	const currentSet = allHonors.slice(visibleIndex, visibleIndex + step);
	const totalPages = Math.ceil(allHonors.length / step);

	return (
		<section
			id="About"
			className="w-full bg-[#fffaeb] text-[#5b3644] py-20 md:py-32 px-6 flex flex-col items-center overflow-hidden">
			<div className="max-w-6xl w-full">
				<header className="text-center mb-16 md:mb-24">
					<span className="text-[9px] tracking-[1em] uppercase mb-4 block opacity-40">
						Studio
					</span>
					<h2
						className={`${bdScript.className} text-[clamp(3rem,10vw,6rem)] text-[#5b3644] leading-none`}>
						The Honors
					</h2>
				</header>

				<div className="relative min-h-[520px] md:min-h-[480px] flex items-center">
					<AnimatePresence mode="wait">
						<motion.div
							key={visibleIndex + (isMobile ? "-m" : "-d")}
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -20 }}
							transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
							className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 w-full">
							{currentSet.map((honor) => (
								<div
									key={honor.documentId}
									className="flex flex-col group max-w-sm mx-auto w-full">
									<div className="relative aspect-[3/4] w-full overflow-hidden mb-8 bg-[#5b3644]/5 shadow-sm">
										<Image
											src={honor.image}
											alt={honor.name}
											fill
											className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
											sizes="(max-width: 768px) 100vw, 33vw"
										/>
										<div className="absolute top-4 right-4 bg-[#fffaeb] px-3 py-1 text-[10px] font-bold tracking-widest shadow-sm">
											{honor.year}
										</div>
									</div>

									<div className="space-y-3 text-center md:text-left px-4 md:px-0">
										<h3 className="text-xl font-light italic leading-tight">
											{honor.name}
										</h3>
										<div className="h-[1px] w-12 bg-[#5b3644] opacity-20 mx-auto md:mx-0 group-hover:w-full transition-all duration-1000" />
										<p className="text-[9px] uppercase tracking-[0.2em] opacity-50 font-bold leading-relaxed">
											{honor.description}
										</p>
									</div>
								</div>
							))}
						</motion.div>
					</AnimatePresence>
				</div>

				{/* PAGINATION DOTS */}
				<div className="flex justify-center gap-4 mt-20">
					{Array.from({ length: totalPages }).map((_, i) => (
						<button
							key={i}
							onClick={() => setVisibleIndex(i * step)}
							className="group py-4 px-2 focus:outline-none">
							<div
								className={`h-[2px] transition-all duration-700 ease-in-out ${
									Math.floor(visibleIndex / step) === i
										? "w-12 bg-[#5b3644]"
										: "w-4 bg-[#5b3644]/10 group-hover:bg-[#5b3644]/30"
								}`}
							/>
						</button>
					))}
				</div>

				<footer className="mt-16 flex justify-center">
					<motion.a href="/about" className="group flex items-center gap-6">
						<div className="h-[1px] w-6 bg-[#5b3644] opacity-20 group-hover:w-16 group-hover:opacity-100 transition-all duration-700" />
						<span className="text-[10px] uppercase font-bold tracking-[0.4em] opacity-70 group-hover:opacity-100">
							Learn more about our journey
						</span>
						<div className="h-[1px] w-6 bg-[#5b3644] opacity-20 group-hover:w-16 group-hover:opacity-100 transition-all duration-700" />
					</motion.a>
				</footer>
			</div>
		</section>
	);
};

export default About;
