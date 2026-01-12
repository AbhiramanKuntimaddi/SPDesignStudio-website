"use client";

import { useParams } from "next/navigation";
import { projects, type Project } from "@/lib/projects";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import localFont from "next/font/local";

// Components
import ProjectHero from "@/components/Project/ProjectHero";
import ProjectGallery from "@/components/Project/ProjectGallery";
import { motion } from "framer-motion";

const bdScript = localFont({
	src: "../../../public/fonts/BDSans/BDScript-Regular.woff",
	style: "italic",
});

export default function ProjectPage() {
	const params = useParams();
	const project = projects.find((p) => p.slug === params.slug) as Project;

	if (!project) return <NotFoundState fontClass={bdScript.className} />;

	return (
		<main className="bg-[#fffaeb] min-h-screen relative">
			<Header showHeader={true} currentPath={`/portfolio/${project.slug}`} />

			{/* Floating Desktop Back Button */}
			<DesktopBackButton />

			<ProjectHero
				title={project.title}
				category={project.category}
				image={project.mainImage}
				fontClass={bdScript.className}
			/>

			{/* Info Bar */}
			<section className="grid grid-cols-2 md:grid-cols-4 gap-12 px-10 md:px-24 py-24 text-[#5b3644] border-b border-[#5b3644]/5">
				<InfoItem label="Location" value={project.location} />
				<InfoItem label="Area" value={project.area} />
				<InfoItem label="Year" value={project.year} />
				<InfoItem label="Status" value="Completed" />
			</section>

			{/* Narrative */}
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

			{/* Galleries */}
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

			{/* Archive Link */}
			<section className="py-40 border-t border-[#5b3644]/5 text-center">
				<span className="text-[10px] uppercase tracking-[0.6em] text-[#bfa15f] font-bold mb-10 block">
					Archive Navigation
				</span>
				<Link href="/portfolio" className="group inline-block">
					<h4
						className={`${bdScript.className} text-5xl md:text-8xl text-[#5b3644] group-hover:text-[#bfa15f] transition-colors duration-500`}>
						Return to Portfolio
					</h4>
					<div className="mt-6 h-[1px] bg-[#bfa15f] w-0 group-hover:w-full transition-all duration-700 mx-auto" />
				</Link>
			</section>

			<Footer />
		</main>
	);
}

/** * Small Helper Components to keep the main file tiny
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

function DesktopBackButton() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="fixed top-32 left-12 z-[60] hidden lg:block">
			<Link
				href="/portfolio"
				className="group flex items-center gap-4 text-[#fffaeb]/60 hover:text-[#bfa15f] transition-all">
				<div className="relative flex items-center group-hover:-translate-x-1 transition-transform">
					<div className="w-12 h-[1px] bg-current" />
					<span className="absolute -left-1 w-2 h-2 border-l border-b border-current rotate-45" />
				</div>
				<span className="text-[10px] uppercase tracking-[0.4em] font-bold">
					Back
				</span>
			</Link>
		</motion.div>
	);
}

function NotFoundState({ fontClass }: { fontClass: string }) {
	return (
		<div className="h-screen flex items-center justify-center bg-[#5b3644] text-[#fffaeb]">
			<div className="text-center space-y-4">
				<h1 className={`${fontClass} text-4xl`}>Project Not Found</h1>
				<Link
					href="/portfolio"
					className="block text-[#bfa15f] underline uppercase text-[10px] tracking-widest">
					Return to Archive
				</Link>
			</div>
		</div>
	);
}
