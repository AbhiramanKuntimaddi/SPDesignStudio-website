"use client";

import { useParams } from "next/navigation";
import { projects, type Project } from "@/lib/projects";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import localFont from "next/font/local";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

// Components
import ProjectHero from "@/components/Project/ProjectHero";
import ProjectGallery from "@/components/Project/ProjectGallery";

const bdScript = localFont({
	src: "../../../public/fonts/BDSans/BDScript-Regular.woff",
	style: "italic",
});

export default function ProjectPage() {
	const params = useParams();

	// 1. Find the current project index for pagination logic
	const currentIndex = projects.findIndex((p) => p.slug === params.slug);
	const project = projects[currentIndex] as Project;

	// 2. Handle 404
	if (!project) return <NotFoundState fontClass={bdScript.className} />;

	// 3. Navigation logic (Looping: last links to first, first links to last)
	const prevProject =
		projects[(currentIndex - 1 + projects.length) % projects.length];
	const nextProject = projects[(currentIndex + 1) % projects.length];

	return (
		<main className="bg-[#fffaeb] min-h-screen relative overflow-x-hidden">
			<Header showHeader={true} currentPath={`/portfolio/${project.slug}`} />

			{/* Unified Back Button (iOS & Desktop optimized) */}
			<BackButton />

			{/* Hero Section */}
			<ProjectHero
				title={project.title}
				category={project.category}
				image={project.mainImage}
				fontClass={bdScript.className}
			/>

			{/* Info Bar */}
			<section className="grid grid-cols-2 md:grid-cols-4 gap-12 px-10 md:px-24 py-24 text-[#5b3644]">
				<InfoItem label="Location" value={project.location} />
				<InfoItem label="Area" value={project.area} />
				<InfoItem label="Year" value={project.year} />
				<InfoItem label="Status" value="Completed" />
			</section>

			{/* Narrative Section */}
			<section className="px-10 md:px-24 py-32">
				<div className="max-w-5xl">
					<h2
						className={`${bdScript.className} text-5xl md:text-6xl text-[#5b3644] mb-12`}>
						The Narrative
					</h2>
					<p className="text-xl md:text-3xl font-light leading-relaxed text-[#5b3644]/70 italic">
						{project.description}
					</p>
				</div>
			</section>

			{/* Image Galleries */}
			<section className="px-10 md:px-24 pb-48 space-y-48">
				<ProjectGallery
					number="01"
					title="The Vision"
					images={project.gallery.renders}
					isGrayscale
				/>
				<ProjectGallery
					number="02"
					title="The Reality"
					images={project.gallery.execution}
				/>
			</section>

			{/* Unified Archive Navigation (Prev / Return / Next) */}
			<section className="py-32 md:py-40 px-6 md:px-24 border-t border-[#5b3644]/5">
				<div className="max-w-7xl mx-auto">
					<span className="text-[10px] uppercase tracking-[0.6em] text-[#bfa15f] font-bold mb-16 md:mb-20 block text-center">
						Archive Navigation
					</span>

					{/* On Mobile: A tight 3-column grid for the buttons
            On Desktop: A spread-out flex row
        */}
					<div className="grid grid-cols-3 md:flex md:flex-row items-center justify-between gap-4 md:gap-8">
						{/* PREVIOUS */}
						<div className="flex justify-start">
							<ProjectNavLink project={prevProject} direction="prev" />
						</div>

						{/* CENTER: RETURN TO GALLERY */}
						<Link
							href="/portfolio"
							className="group text-center flex flex-col items-center justify-center">
							<h4
								className={`${bdScript.className} text-3xl md:text-7xl text-[#5b3644]/30 group-hover:text-[#bfa15f] transition-colors duration-500 leading-none`}>
								<span className="md:hidden text-4xl">Archive</span>{" "}
								{/* Shorter text for mobile */}
								<span className="hidden md:block">Return to Archive</span>
							</h4>
							<div className="mt-2 md:mt-4 h-[1px] bg-[#bfa15f] w-0 group-hover:w-8 md:group-hover:w-16 transition-all duration-700 mx-auto" />
						</Link>

						{/* NEXT */}
						<div className="flex justify-end">
							<ProjectNavLink project={nextProject} direction="next" />
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}

/** * HELPER COMPONENTS
 */

function InfoItem({ label, value }: { label: string; value: string }) {
	return (
		<div>
			<p className="text-[10px] uppercase tracking-widest text-[#bfa15f] font-bold mb-3">
				{label}
			</p>
			<p className="text-sm md:text-base uppercase tracking-wider font-medium">
				{value}
			</p>
		</div>
	);
}

function BackButton() {
	const { scrollY } = useScroll();
	const [isVisible, setIsVisible] = useState(true);

	// Smoothly fade out between 0px and 100px of scroll
	const opacity = useTransform(scrollY, [0, 100], [1, 0]);
	const y = useTransform(scrollY, [0, 100], [0, -10]);

	// Update visibility state to disable pointer events completely when hidden
	useMotionValueEvent(opacity, "change", (latest) => {
		if (latest <= 0 && isVisible) setIsVisible(false);
		if (latest > 0 && !isVisible) setIsVisible(true);
	});

	return (
		<motion.div
			style={{
				opacity,
				y,
				pointerEvents: isVisible ? "auto" : "none",
			}}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.8 }}
			className="fixed top-28 left-6 md:top-32 md:left-12 z-[60]">
			<Link
				href="/portfolio"
				className="group flex items-center gap-3 md:gap-4 text-[#fffaeb] hover:text-[#bfa15f] transition-all">
				<div className="relative flex items-center group-hover:-translate-x-1 transition-transform">
					<div className="w-8 md:w-12 h-[1px] bg-current" />
					<span className="absolute -left-1 w-2 h-2 border-l border-b border-current rotate-45" />
				</div>
				<span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold">
					Back
				</span>
			</Link>
		</motion.div>
	);
}

function ProjectNavLink({
	project,
	direction,
}: {
	project: Project;
	direction: "prev" | "next";
}) {
	return (
		<Link
			href={`/portfolio/${project.slug}`}
			className={`group flex flex-col ${
				direction === "next" ? "items-end text-right" : "items-start text-left"
			} md:max-w-[300px] transition-transform active:scale-90`}>
			{/* DESKTOP CONTENT: Label + Title + Line */}
			<div className="hidden md:flex flex-col">
				<span className="text-[9px] uppercase tracking-[0.4em] text-[#bfa15f] mb-4 opacity-60">
					{direction === "next" ? "Next Project" : "Previous Project"}
				</span>
				<h5
					className={`${bdScript.className} text-5xl text-[#5b3644] group-hover:text-[#bfa15f] transition-all duration-500 leading-tight`}>
					{project.title}
				</h5>
				<div className="mt-4 w-8 h-[1px] bg-[#5b3644]/20 group-hover:bg-[#bfa15f] group-hover:w-16 transition-all duration-700" />
			</div>

			{/* MOBILE CONTENT: Simple Arrow Icon */}
			<div className="md:hidden flex items-center justify-center w-12 h-12 border border-[#5b3644]/10 rounded-full group-active:border-[#bfa15f] transition-colors">
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.2"
					className={`${direction === "prev" ? "" : "rotate-180"} text-[#5b3644] group-active:text-[#bfa15f]`}>
					<path
						d="M15 19l-7-7 7-7"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
		</Link>
	);
}

function NotFoundState({ fontClass }: { fontClass: string }) {
	return (
		<div className="h-screen flex items-center justify-center bg-[#5b3644] text-[#fffaeb]">
			<div className="text-center space-y-6">
				<h1 className={`${fontClass} text-5xl`}>Project Not Found</h1>
				<Link
					href="/portfolio"
					className="inline-block text-[#bfa15f] border-b border-[#bfa15f] pb-1 uppercase text-[10px] tracking-[0.4em]">
					Return to Archive
				</Link>
			</div>
		</div>
	);
}
