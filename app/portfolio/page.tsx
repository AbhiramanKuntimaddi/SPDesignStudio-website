import { getProjects } from "@/lib/queries"; // Your fetch function
import PortfolioClientWrapper from "@/components/Portfolio/PortfolioClientWrapper";
import Footer from "@/components/Footer/Footer";

// This is now a Server Component (no "use client" here)
export default async function PortfolioPage() {
    // 1. Fetch data on the server
    const initialProjects = await getProjects();

    return (
        <div className="bg-[#5b3644] text-[#fffaeb] selection:bg-[#bfa15f]/30">
            {/* We move the scroll/view logic into a Client Wrapper 
               to keep the metadata and data fetching on the server.
            */}
            <PortfolioClientWrapper initialProjects={initialProjects} />
            <Footer />
        </div>
    );
}