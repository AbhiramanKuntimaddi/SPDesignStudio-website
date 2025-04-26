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
					At SP Design Studio, we believe design is a dialogue — a creative
					collaboration between vision, craftsmanship, and the soul of a space.
				</p>
				<p className="text-lg sm:text-xl font-extralight leading-relaxed mb-8">
					Led by Spandana Puppala, our team of passionate designers brings together
					artistic vision and architectural precision to shape spaces that feel
					deeply authentic.
				</p>
                <motion.a
						href="#About"
						className="mt-4 inline-flex items-center text-sm sm:text-base md:text-xl font-medium text-[#fffaeb] border-b border-transparent hover:border-[#fffaeb]">
						Explore Our Studio
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
