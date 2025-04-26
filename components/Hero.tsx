"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import LearnMoreSection from "./LearnMoreSection";
import HeroBackgroundVideo from "./HeroBackgroundVideo";
import BlurText from "./animations/BlurText";
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
						className="text-[clamp(2rem,5vw,7vh)] antialiased font-semibold text-[#fffaeb] text-shadow-lg/30 break-words max-w-[90%] sm:max-w-4xl"
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
				</div>
			</div>

			{/* Learn More Component */}
			<LearnMoreSection className="absolute bottom-6 sm:bottom-10 left-6 sm:left-1/2 transform sm:-translate-x-1/2 text-sm sm:text-base md:text-xl" />
		</section>
	);
};

export default Hero;
