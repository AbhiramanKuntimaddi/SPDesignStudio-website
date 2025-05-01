"use client";

import { motion } from "framer-motion";

const About = () => {
	return (
		<section className="w-full min-h-screen bg-[#5b3644] text-[#fffaeb] flex items-center justify-center p-10 sm:p-20">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				viewport={{ once: true }}
				className="max-w-5xl w-full text-left">
				<h2 className="text-5xl sm:text-6xl font-light mb-10 leading-tight">
					Inside the Studio
				</h2>
				<p className="text-lg sm:text-xl font-extralight leading-relaxed mb-8">
					At SP Design Studio, we believe design is a dialogue, a creative
					collaboration between vision, craftsmanship, and the soul of a space.
				</p>
				<p className="text-lg sm:text-xl font-extralight leading-relaxed mb-8">
					Led by{" "}
					<span className="font-medium italic text-[#fffaeb]">
						Spandana Puppala
					</span>
					, the studio is a sanctuary for thoughtful, innovative design. where
					every project is a unique story waiting to be told. Each project tells
					a unique story, shaped by the vision and personality of those who
					inhabit the space. The studio also belives that design should be a
					harmonious blend of aesthetics and functionality, crafted with
					intention, yet open to inspiration.
				</p>

				{/* CTA */}
				<motion.a
					href="#About"
					className="mt-4 inline-flex items-center text-sm sm:text-base md:text-xl font-medium text-[#fffaeb] border-b border-transparent hover:border-[#fffaeb]">
					Know More About Us
					<svg
						className="ml-2 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</motion.a>
			</motion.div>
		</section>
	);
};

export default About;
