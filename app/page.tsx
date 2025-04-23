"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroductionSection from "@/components/IntroductionSection";

export default function Home() {
	const heroRef = useRef(null);
	const isHeroInView = useInView(heroRef, {
		margin: "-50% 0px -30% 0px", // trigger when Hero is prominently visible
	});
	return (
		<div>
			<Header showHeader={isHeroInView} />
			<div ref={heroRef}>
				<Hero />
			</div>
			<IntroductionSection />
		</div>
	);
}
