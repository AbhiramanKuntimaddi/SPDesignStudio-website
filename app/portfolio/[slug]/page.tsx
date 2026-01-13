// src/app/portfolio/[slug]/page.tsx
import { getProjects, type SanityProject } from "@/lib/queries";
import { urlFor } from "@/lib/sanity.client";
import localFont from "next/font/local";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// Components
import ProjectHero from "@/components/Project/ProjectHero";
import ProjectGallery from "@/components/Project/ProjectGallery";

// Client-side interactive elements (Framer Motion / Hooks)
import { 
    BackButton, 
    ProjectNavLink, 
    InfoItem, 
    NotFoundState 
} from "@/components/Project/ProjectClientElements";

const bdScript = localFont({
    src: "../../../public/fonts/BDSans/BDScript-Regular.woff",
    style: "italic",
});

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
    // 1. Await params (Required in modern Next.js versions)
    const { slug } = await params;

    // 2. Fetch from Sanity with explicit typing
    const projects: SanityProject[] = await getProjects();
    
    // 3. Find current project using the slug
    const currentIndex = projects.findIndex((p) => p.slug === slug);
    const project: SanityProject | undefined = projects[currentIndex];

    // 4. Handle 404
    if (!project) return <NotFoundState fontClass={bdScript.className} />;

    // 5. Navigation logic (Strictly typed looping)
    const prevProject: SanityProject = projects[(currentIndex - 1 + projects.length) % projects.length];
    const nextProject: SanityProject = projects[(currentIndex + 1) % projects.length];

    return (
        <main className="bg-[#fffaeb] min-h-screen relative overflow-x-hidden">
            <Header showHeader={true} currentPath={`/portfolio/${project.slug}`} />

            {/* Existing Elegant Back Button - Fades on scroll */}
            <BackButton />

            {/* Hero Section - Image optimized via Sanity URL API */}
            <ProjectHero
                title={project.title}
                category={project.category}
                image={urlFor(project.mainImage).width(2000).quality(90).url()}
                fontClass={bdScript.className}
            />

            {/* Info Bar */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-12 px-10 md:px-24 py-24 text-[#5b3644]">
                <InfoItem label="Location" value={project.location} />
                <InfoItem label="Area" value={`${project.area} sqm`} />
                <InfoItem label="Year" value={project.year} />
                <InfoItem label="Status" value="Completed" />
            </section>

            {/* Narrative Section */}
            <section className="px-10 md:px-24 py-32">
                <div className="max-w-5xl">
                    <h2 className={`${bdScript.className} text-5xl md:text-6xl text-[#5b3644] mb-12`}>
                        The Narrative
                    </h2>
                    <p className="text-xl md:text-3xl font-light leading-relaxed text-[#5b3644]/70 italic">
                        {project.description}
                    </p>
                </div>
            </section>

            {/* Image Galleries - Mapping Sanity Arrays */}
            <section className="px-10 md:px-24 pb-48 space-y-48">
                {project.gallery?.renders && project.gallery.renders.length > 0 && (
                    <ProjectGallery
                        number="01"
                        title="The Vision"
                        images={project.gallery.renders.map(img => urlFor(img).width(1600).url())}
                        isGrayscale
                    />
                )}
                {project.gallery?.execution && project.gallery.execution.length > 0 && (
                    <ProjectGallery
                        number="02"
                        title="The Reality"
                        images={project.gallery.execution.map(img => urlFor(img).width(1600).url())}
                    />
                )}
            </section>

            {/* Unified Archive Navigation */}
            <section className="py-32 md:py-40 px-6 md:px-24 border-t border-[#5b3644]/5">
                <div className="max-w-7xl mx-auto">
                    <span className="text-[10px] uppercase tracking-[0.6em] text-[#bfa15f] font-bold mb-16 md:mb-20 block text-center">
                        Archive Navigation
                    </span>

                    <div className="grid grid-cols-3 md:flex md:flex-row items-center justify-between gap-4 md:gap-8">
                        {/* PREVIOUS */}
                        <div className="flex justify-start">
                            <ProjectNavLink 
                                project={prevProject} 
                                direction="prev" 
                                fontClass={bdScript.className} 
                            />
                        </div>

                        {/* CENTER: RETURN TO GALLERY */}
                        <Link
                            href="/portfolio"
                            className="group text-center flex flex-col items-center justify-center"
                        >
                            <h4 className={`${bdScript.className} text-3xl md:text-7xl text-[#5b3644]/30 group-hover:text-[#bfa15f] transition-colors duration-500 leading-none`}>
                                <span className="md:hidden text-4xl">Archive</span>
                                <span className="hidden md:block">Return to Archive</span>
                            </h4>
                            <div className="mt-2 md:mt-4 h-[1px] bg-[#bfa15f] w-0 group-hover:w-8 md:group-hover:w-16 transition-all duration-700 mx-auto" />
                        </Link>

                        {/* NEXT */}
                        <div className="flex justify-end">
                            <ProjectNavLink 
                                project={nextProject} 
                                direction="next" 
                                fontClass={bdScript.className} 
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
