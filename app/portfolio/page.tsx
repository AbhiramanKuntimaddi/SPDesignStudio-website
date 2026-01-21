import { getProjects, type StrapiProject } from "@/lib/projects";
import PortfolioClientWrapper from "@/components/Portfolio/PortfolioClientWrapper";
import Footer from "@/components/Footer/Footer";

export const dynamic = "force-dynamic";

export default async function PortfolioPage() {
	// 1. Strictly type the fetched projects
	const initialProjects: StrapiProject[] = await getProjects();

	return (
		<div className="bg-[#5b3644] text-[#fffaeb] selection:bg-[#bfa15f]/30">
			{/* 2. Pass the typed projects to the Client Wrapper */}
			<PortfolioClientWrapper initialProjects={initialProjects} />
			<Footer />
		</div>
	);
}
