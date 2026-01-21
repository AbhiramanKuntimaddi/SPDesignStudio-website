"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import localFont from "next/font/local";
import { getTestimonials, type StrapiTestimonial } from "@/lib/testimonials";

const bdScript = localFont({
	src: "../../public/fonts/BDSans/BDScript-Regular.woff",
	style: "italic",
});

const TestimonySection = () => {
	const [allTestimonials, setAllTestimonials] = useState<StrapiTestimonial[]>(
		[]
	);
	const [visibleIndex, setVisibleIndex] = useState(0);
	const [loading, setLoading] = useState(true);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768);
		checkMobile();
		window.addEventListener("resize", checkMobile);
		const loadData = async () => {
			const data = await getTestimonials();
			setAllTestimonials(data);
			setLoading(false);
		};
		loadData();
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	useEffect(() => {
		if (allTestimonials.length === 0) return;
		const step = isMobile ? 1 : 3;
		const interval = setInterval(() => {
			setVisibleIndex((prev) =>
				prev + step >= allTestimonials.length ? 0 : prev + step
			);
		}, 8000);
		return () => clearInterval(interval);
	}, [allTestimonials, isMobile]);

	if (loading || allTestimonials.length === 0) return null;

	const step = isMobile ? 1 : 3;
	const currentSet = allTestimonials.slice(visibleIndex, visibleIndex + step);
	const totalPages = Math.ceil(allTestimonials.length / step);

	return (
		<section className="w-full bg-[#5b3644] text-[#fffaeb] py-20 md:py-32 px-6 flex flex-col items-center overflow-hidden">
			<div className="max-w-6xl w-full">
				<header className="text-center mb-16 md:mb-24">
					<span className="text-[9px] tracking-[1em] uppercase mb-4 block opacity-40">
						Kind Words
					</span>
					<h2
						className={`${bdScript.className} text-[clamp(3rem,10vw,6rem)] text-[#bfa15f] leading-none`}>
						Testimonials
					</h2>
				</header>

				<div className="relative min-h-[400px] md:min-h-[300px] flex items-center">
					<AnimatePresence mode="wait">
						<motion.div
							key={visibleIndex + (isMobile ? "m" : "d")}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
							className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 w-full">
							{currentSet.map((item) => (
								<div
									key={item.documentId}
									className="flex flex-col items-center text-center max-w-sm mx-auto">
									<span
										className={`${bdScript.className} text-4xl text-[#bfa15f]/20 mb-4`}>
										&ldquo;
									</span>
									<p className="text-[14px] md:text-[15px] font-light leading-[1.8] italic opacity-80 mb-8">
										{item.content}
									</p>
									<div className="w-full pt-6 border-t border-[#fffaeb]/10">
										<h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#bfa15f] mb-1">
											{item.client}
										</h4>
										<p className="text-[8px] uppercase tracking-[0.2em] opacity-30">
											{item.project}
										</p>
									</div>
								</div>
							))}
						</motion.div>
					</AnimatePresence>
				</div>

				<div className="flex justify-center gap-3 mt-16">
					{Array.from({ length: totalPages }).map((_, i) => (
						<button
							key={i}
							onClick={() => setVisibleIndex(i * step)}
							className={`h-[2px] transition-all duration-700 ${
								Math.floor(visibleIndex / step) === i
									? "w-10 bg-[#bfa15f]"
									: "w-4 bg-[#fffaeb]/20"
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default TestimonySection;
