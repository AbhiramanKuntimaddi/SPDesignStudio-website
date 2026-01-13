// src/app/portfolio/page.tsx
import { getProjects } from "@/lib/queries";
import PortfolioClientWrapper from "@/components/Portfolio/PortfolioClientWrapper";
import Footer from "@/components/Footer/Footer";

export const dynamic = "force-dynamic";

export default async function PortfolioPage() {
    const initialProjects = await getProjects();

    return (
        <div className="bg-[#5b3644] text-[#fffaeb] selection:bg-[#bfa15f]/30">
            <PortfolioClientWrapper initialProjects={initialProjects} />
            <Footer />
        </div>
    );
}