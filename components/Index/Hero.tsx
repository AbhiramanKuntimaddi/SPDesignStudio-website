"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import localFont from "next/font/local";
import BlurText from "../animations/BlurText";
import HeroBackgroundVideo from "@/components/Index/HeroBackgroundVideo";

const bdScript = localFont({
	src: "../../public/fonts/BDSans/BDScript-Regular.woff",
	style: "italic",
});

const heroVideoSrc =
	"https://videos.pexels.com/video-files/8835703/8835703-hd_1920_1080_25fps.mp4";

const Hero = () => {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<section className="relative h-screen min-h-[700px] bg-[#1a1a1a] overflow-hidden">
			{/* Background Video */}
			<div className="absolute inset-0 z-0 opacity-60">
				<HeroBackgroundVideo src={heroVideoSrc} />
				<div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
			</div>

			{/* Content Container */}
			<div className="relative z-10 h-full flex flex-col items-center justify-end px-6 md:px-12 pb-20 md:pb-28">
				{/* 1. Logo - Locked Position */}
				<motion.div
					initial={{ opacity: 0, filter: "blur(12px)" }}
					animate={{ opacity: 0.9, filter: "blur(0px)" }}
					transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
					className="mb-6">
					<Image
						src="/images/logo.svg"
						alt="SP Design Studio"
						width={596}
						height={358}
						priority
						className="max-w-[180vw] w-[350px] md:w-[280px] lg:w-[596px] h-auto brightness-100"
					/>
				</motion.div>

				{/* 2. Headline - Locked Position */}
				<div className="text-center">
					<BlurText
						className={`${bdScript.className} text-[clamp(3.5rem,12vw,9.5rem)] leading-[0.7] text-[#fffaeb] antialiased px-4`}
						text="Your Space, Designed."
						delay={800}
						animateBy="words"
						direction="top"
						onAnimationComplete={() => setIsLoaded(true)}
					/>
				</div>

				{/* 3. The "Static" Divider Container 
            This div has a fixed height of 60px + margin (mb-8). 
            Because it is fixed, the headline above it will NOT move when the line grows.
        */}
				<div className="flex flex-col items-center mt-10 md:mt-14 h-[60px] mb-8">
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: isLoaded ? 60 : 0, opacity: isLoaded ? 1 : 0 }}
						transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
						className="w-[1px] bg-[#bfa15f]/60"
					/>
				</div>

				{/* 4. Narrative - Fades in below the fixed line space */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: isLoaded ? 1 : 0 }}
					transition={{ duration: 1.5, delay: 0.6 }}
					className="flex flex-col items-center gap-6">
					<p className="text-xl md:text-2xl font-light text-[#fffaeb]/90 text-center max-w-2xl leading-relaxed italic">
						Every space tells a story; we help you shape yours.
					</p>

					<p className="text-[10px] md:text-xs uppercase tracking-[0.6em] font-bold text-[#fffaeb]/60 text-center">
						Authenticity — Purpose — Elegance
					</p>

					<div className="mt-4">
						<a
							href="/portfolio"
							className="group relative py-2 text-xs md:text-sm uppercase tracking-[0.3em] text-[#bfa15f] font-medium">
							Explore the Portfolio
							<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#bfa15f] transition-all duration-700 ease-in-out group-hover:w-full" />
						</a>
					</div>
				</motion.div>
			</div>

			{/* 5. Scroll Indicator */}
			<motion.div
				className="absolute bottom-12 right-10 hidden md:flex items-center gap-4 rotate-90 origin-right"
				initial={{ opacity: 0 }}
				animate={{ opacity: isLoaded ? 0.4 : 0 }}
				transition={{ delay: 2.5 }}>
				<span className="text-[10px] uppercase tracking-[0.4em] text-[#fffaeb]">
					Scroll to Begin
				</span>

				{/* Arrow */}
				<div className="relative flex items-center">
					{/* Shaft */}
					<div className="w-12 h-[1px] bg-[#fffaeb]" />

					{/* Arrow Head */}
					<span className="absolute right-0 w-2 h-2 border-t border-r border-[#fffaeb] rotate-45" />
				</div>
			</motion.div>
		</section>
	);
};

export default Hero;
