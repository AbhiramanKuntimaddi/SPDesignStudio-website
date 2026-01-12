"use client";

import { motion } from "framer-motion";
import localFont from "next/font/local";

const bdScript = localFont({
	src: "../../public/fonts/BDSans/BDScript-Regular.woff",
	style: "italic",
});

const ContactHero = () => {
	const scrollToStudio = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const section = document.getElementById("studio-info");
		if (section) {
			section.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<section className="h-[60vh] flex flex-col justify-center bg-[#5b3644] text-[#fffaeb] px-6 lg:px-20">
			<div className="w-full max-w-screen-2xl mx-auto flex flex-col items-center text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="flex flex-col items-center">
					<h1
						className={`${bdScript.className} text-[clamp(4rem,10vw,8rem)] leading-none mb-8`}>
						Let&apos;s Collaborate
					</h1>

					<div className="h-[1px] w-24 bg-[#bfa15f] mb-10" />

					<p className="text-lg md:text-xl max-w-xl text-[#fffaeb]/70 font-light leading-relaxed mb-12">
						Every great space starts with a conversation. <br />
						Reach out to bring your vision to life.
					</p>

					<button
						onClick={scrollToStudio}
						className="px-10 py-4 border border-[#bfa15f] group hover:bg-[#bfa15f] transition-all duration-300 flex items-center gap-4 cursor-pointer">
						<span className="text-[11px] uppercase tracking-[0.5em] text-[#bfa15f] group-hover:text-[#5b3644] font-bold transition-colors pointer-events-none">
							Visit the Studio
						</span>
						<div className="h-[1px] w-8 bg-[#fffaeb] group-hover:bg-[#5b3644] transition-colors pointer-events-none" />
					</button>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactHero;
