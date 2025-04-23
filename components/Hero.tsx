"use client";

import LearnMoreSection from "./LearnMoreSection";
import HeroBackgroundVideo from "./HeroBackgroundVideo";
import BlurText from "./animations/BlurText";

const heroVideoSrc = "https://videos.pexels.com/video-files/6580589/6580589-uhd_4096_2160_25fps.mp4";

const Hero = () => {
	return (
		<section className="relative min-h-screen flex flex-col justify-between bg-[#e3e3e3] px-10 overflow-hidden">
			{/* Background Video */}
			<HeroBackgroundVideo src={heroVideoSrc} />

			{/* Text Content */}
			<div className="absolute bottom-[20%] left-16 z-10 max-w-6xl flex flex-col gap-6">
				<BlurText
					className="text-9xl antialiased font-extralight text-[#fffaeb]"
					text="Your Space, Designed!"
					delay={350}
					animateBy="words"
					direction="top"
					onAnimationComplete={() => console.log("Animation Complete")}
				/>
				<div className="text-3xl antialiased text-[#fffaeb] leading-relaxed max-w-xl text-left mt-10">
					Transform your space into a beautiful reflection of your unique style
					and comfort. Our design studio specializes in creating personalized
					interiors that inspire and elevate your everyday life.
				</div>
			</div>

			{/* Learn More Component */}
			<LearnMoreSection className="absolute bottom-10 left-1/2 transform -translate-x-1/2" />
		</section>
	);
};

export default Hero;
