"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import localFont from "next/font/local";

const bdScript = localFont({
	src: "../../public/fonts/BDSans/BDScript-Regular.woff",
	style: "italic",
});

const About = () => {
	const honors = [
		{
			year: "2024",
			title: "Excellence in Residential Design",
			org: "Design Guild",
			image: "/honors/award-1.jpg",
		},
		{
			year: "2023",
			title: "Sustainable Space Innovator",
			org: "Architects Collective",
			image: "/honors/award-2.jpg",
		},
		{
			year: "2022",
			title: "Top 50 Emerging Studios",
			org: "Interior Digest",
			image: "/honors/award-3.jpg",
		},
	];

	return (
		<section
			id="About"
			className="w-full min-h-screen bg-[#fffaeb] text-[#5b3644] py-32 px-6 flex flex-col items-center justify-center overflow-hidden">
			<div className="max-w-6xl w-full">
				{/* Top Centered Header */}
				<header className="text-center mb-24">
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 0.6 }}
						className="text-[10px] tracking-[1em] uppercase mb-6 block">
						Studio
					</motion.span>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
						className={`${bdScript.className} text-[clamp(4rem,9vw,8rem)] leading-none mb-8`}>
						The Honors
					</motion.h2>

					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 0.5 }}
						className="text-[11px] md:text-xs uppercase tracking-[0.3em] max-w-2xl mx-auto font-medium leading-relaxed">
						A collective of meticulous minds translating Spandana Puppala’s
						vision into tactile, living realities.
					</motion.p>
				</header>

				{/* Honors Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
					{honors.map((honor, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.2 }}
							viewport={{ once: true }}
							className="group flex flex-col">
							<div className="relative aspect-[4/5] w-full overflow-hidden bg-[#5b3644]/5 mb-6 rounded-sm">
								<Image
									src={honor.image}
									alt={honor.title}
									fill
									className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
								/>
								<div className="absolute top-4 right-4 bg-[#fffaeb] px-3 py-1">
									<span className="text-[10px] font-bold tracking-widest text-[#5b3644]">
										{honor.year}
									</span>
								</div>
							</div>

							<div className="text-left space-y-1">
								<h3 className="text-lg font-light tracking-tight leading-tight italic group-hover:not-italic transition-all">
									{honor.title}
								</h3>
								<p className="text-[9px] uppercase tracking-[0.2em] opacity-50 font-bold">
									{honor.org}
								</p>
							</div>
						</motion.div>
					))}
				</div>

				{/* Minimalist Architectural CTA */}
				<footer className="flex justify-center border-t border-[#5b3644]/10 pt-16 w-full">
					<motion.a
						href="/about-us"
						initial="initial"
						whileHover="hover"
						className="group relative flex items-center justify-center w-full py-8 gap-12 transition-all duration-700 ease-in-out">
						{/* Left Line */}
						<motion.div
							variants={{
								initial: { width: "2rem", opacity: 0.2 },
								hover: { width: "6rem", opacity: 1 },
							}}
							transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
							className="h-[1px] bg-[#5b3644]"
						/>

						{/* CTA Text */}
						<motion.span
							variants={{
								initial: { letterSpacing: "0.5em", opacity: 0.6 },
								hover: { letterSpacing: "0.8em", opacity: 1 },
							}}
							transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
							className="text-[10px] md:text-[11px] uppercase font-bold text-[#5b3644] whitespace-nowrap">
							Learn More About Our Journey
						</motion.span>

						{/* Right Line */}
						<motion.div
							variants={{
								initial: { width: "2rem", opacity: 0.2 },
								hover: { width: "6rem", opacity: 1 },
							}}
							transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
							className="h-[1px] bg-[#5b3644]"
						/>
					</motion.a>
				</footer>
			</div>
		</section>
	);
};

export default About;
