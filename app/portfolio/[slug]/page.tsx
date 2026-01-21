// src/app/portfolio/[slug]/page.tsx
import localFont from "next/font/local";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {
	getProjects,
	type StrapiProject,
	type StrapiImage,
} from "@/lib/projects";
import ProjectHero from "@/components/Project/ProjectHero";
import ProjectGallery from "@/components/Project/ProjectGallery";
import {
	BackButton,
	ProjectNavLink,
	InfoItem,
	NotFoundState,
} from "@/components/Project/ProjectClientElements";

const bdScript = localFont({
	src: "../../../public/fonts/BDSans/BDScript-Regular.woff",
	style: "italic",
});

/**
 * Image URL Helper
 */
const getStrapiURL = (path: string | undefined): string => {
	if (!path) return "";
	if (path.startsWith("http")) return path;

	const baseUrl = process.env.NEXT_PUBLIC_STRAPI_TUNNEL_URL;
	if (!baseUrl) {
		console.warn("NEXT_PUBLIC_STRAPI_TUNNEL_URL is not set");
		return path;
	}

	const cleanPath = path.startsWith("/") ? path : `/${path}`;
	return `${baseUrl}${cleanPath}`;
};

interface PageProps {
	params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
	const { slug } = await params;

	// 1. Strictly type the array coming from the query
	const projects: StrapiProject[] = await getProjects();

	// 2. Strictly type the found project
	const currentIndex = projects.findIndex((p) => p.slug === slug);
	const project: StrapiProject | undefined = projects[currentIndex];

	// Debugging
	console.log(`[Project Page] Slug: ${slug} | Found: ${!!project}`);

	if (!project) {
		return <NotFoundState fontClass={bdScript.className} />;
	}

	// 3. Strictly type the navigation objects
	const prevProject: StrapiProject =
		projects[(currentIndex - 1 + projects.length) % projects.length];
	const nextProject: StrapiProject =
		projects[(currentIndex + 1) % projects.length];

	return (
		<main className="bg-[#fffaeb] min-h-screen relative overflow-x-hidden">
			<Header showHeader={true} currentPath={`/portfolio/${project.slug}`} />
			<BackButton />

			<ProjectHero
				title={project.title}
				category={project.category}
				image={getStrapiURL(project.mainImage?.url)}
				fontClass={bdScript.className}
			/>

			{/* Info Bar */}
			<section className="grid grid-cols-2 md:grid-cols-4 gap-12 px-10 md:px-24 py-24 text-[#5b3644]">
				<InfoItem label="Location" value={project.location} />
				<InfoItem label="Area" value={`${project.area} sqm`} />
				<InfoItem label="Year" value={project.year} />
				<InfoItem label="Status" value={project.status} />
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
				{/* Vision Gallery - Using StrapiImage type in map */}
				{project.gallery.renders.length > 0 && (
					<ProjectGallery
						number="01"
						title="The Vision"
						images={project.gallery.renders.map((img: StrapiImage) =>
							getStrapiURL(img.url)
						)}
						isGrayscale
					/>
				)}

				{/* Reality Gallery - Using StrapiImage type in map */}
				{project.gallery.execution.length > 0 && (
					<ProjectGallery
						number="02"
						title="The Reality"
						images={project.gallery.execution.map((img: StrapiImage) =>
							getStrapiURL(img.url)
						)}
					/>
				)}
			</section>

			{/* Archive Navigation Footer */}
			<section className="py-32 md:py-40 px-6 md:px-24 border-t border-[#5b3644]/5 text-center">
				<span className="text-[10px] uppercase tracking-[0.6em] text-[#bfa15f] font-bold mb-20 block">
					Archive Navigation
				</span>
				<div className="flex items-center justify-between gap-8 max-w-7xl mx-auto">
					<ProjectNavLink
						project={prevProject}
						direction="prev"
						fontClass={bdScript.className}
					/>
					<Link href="/portfolio" className="group">
						<h4
							className={`${bdScript.className} text-3xl md:text-7xl text-[#5b3644]/30 group-hover:text-[#bfa15f] transition-all duration-500`}>
							Return to Archive
						</h4>
					</Link>
					<ProjectNavLink
						project={nextProject}
						direction="next"
						fontClass={bdScript.className}
					/>
				</div>
			</section>
			<Footer />
		</main>
	);
}
