"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// import LearnMoreSection from "./LearnMoreSection";
import BlurText from "./animations/BlurText";
import HeroBackgroundVideo from "./HeroBackgroundVideo";
import { FadeSlideReveal } from "./animations/FadeSlideReveal";

const heroVideoSrc =
	"https://videos.pexels.com/video-files/8835703/8835703-hd_1920_1080_25fps.mp4";

const Hero = () => {
	const [blurDone, setBlurDone] = useState(false);

	return (
		<section className="relative min-h-screen bg-[#e3e3e3] overflow-hidden pt-[100px]">
			{/* Background Video */}
			<HeroBackgroundVideo src={heroVideoSrc} />

			{/* Full-size overlay container using flex to push text to the bottom */}
			<div className="absolute inset-0 z-10 p-14 sm:p-20 flex flex-col justify-end">
				{/* Inner wrapper with a bottom margin for breathing room */}
				<div className="mb-10 sm:mb-[15%]">
					{/* Main Hero Text */}
					<BlurText
						className="text-[clamp(2rem,8vw,7vh)] antialiased font-semibold text-[#fffaeb] text-shadow-lg/30 break-words max-w-[90%] sm:max-w-4xl"
						text="Your Space, Designed!"
						delay={350}
						animateBy="words"
						direction="top"
						onAnimationComplete={() => setBlurDone(true)}
					/>

					{/* Supporting Text */}
					<AnimatePresence>
						{blurDone && (
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 30 }}
								transition={{
									duration: 0.9,
									ease: "easeOut",
									delay: 1.4,
								}}
								className="text-base sm:text-xl md:text-2xl lg:text-3xl text-[#fffaeb] leading-relaxed max-w-[90%] sm:max-w-3xl text-shadow-lg mt-8 sm:mt-10">
								<FadeSlideReveal
									text="Every space tells a story, we help you shape yours with purpose, elegance, and authenticity."
									animate={blurDone}
								/>
							</motion.div>
						)}
					</AnimatePresence>

					{/* CTA Link */}
					<AnimatePresence>
						{blurDone && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 1.2, delay: 2 }}
								className="mt-10">
								<motion.a
									href="/portfolio"
									className="mt-4 inline-flex items-center text-sm sm:text-base md:text-xl font-medium text-[#fffaeb] border-b border-transparent hover:border-[#fffaeb]">
									<span className="mr-2">Discover Our Creations</span>{" "}
									{/* Added margin for space */}
									<svg
										className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 transform transition-transform duration-300 group-hover:translate-x-2"
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
						)}
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
};

export default Hero;
