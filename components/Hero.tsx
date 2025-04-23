"use client";

import LearnMoreSection from "./LearnMoreSection";
import HeroBackgroundVideo from "./HeroBackgroundVideo";
import BlurText from "./animations/BlurText";

const heroVideoSrc = "https://videos.pexels.com/video-files/8835703/8835703-hd_1920_1080_25fps.mp4";

const Hero = () => {
	return (
		<section className="relative min-h-screen flex flex-col justify-between bg-[#e3e3e3] overflow-hidden">
			{/* Background Video */}
			<HeroBackgroundVideo src={heroVideoSrc} />

			{/* Text Content */}
			<div className="absolute z-10 p-10 sm:p-10 w-full flex flex-col gap-10 sm:gap-6 items-start bottom-[15%] sm:bottom-[20%] left-6 sm:left-16">
				{/* Unified Hero Text */}
				<BlurText
					className="text-7xl sm:text-6xl md:text-7xl lg:text-9xl antialiased font-semibold text-[#fffaeb] text-shadow-lg/30 break-words max-w-[90%] sm:max-w-4xl"
					text="Your Space, Designed!"
					delay={350}
					animateBy="words"
					direction="top"
				/>

				{/* Supporting Text */}
				<div className="text-2xl sm:text-xl md:text-2xl lg:text-3xl text-[#fffaeb] leading-relaxed max-w-[90%] sm:max-w-3xl text-shadow-lg break-words">
					Transform your space into a beautiful reflection of your unique style
					and comfort. Our design studio specializes in creating personalized
					interiors that inspire and elevate your everyday life.
				</div>
			</div>

			{/* Learn More Component */}
			<LearnMoreSection className="absolute bottom-6 sm:bottom-10 left-6 sm:left-1/2 sm:transform sm:-translate-x-1/2 text-base sm:text-lg md:text-xl" />
		</section>
	);
};

export default Hero;
