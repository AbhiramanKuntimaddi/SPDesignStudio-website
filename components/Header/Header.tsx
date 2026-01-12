"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import localFont from "next/font/local";

const bdScript = localFont({
	src: "../../public/fonts/BDSans/BDScript-Regular.woff",
	style: "italic",
});

interface HeaderProps {
	showHeader: boolean;
	currentPath: string;
}

// Animation Variants
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.3,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, x: 20 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.5, ease: "easeOut" },
	},
};

const Header = ({ showHeader, currentPath }: HeaderProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Updated Navigation Items
	const navItems = ["Home", "About", "Portfolio", "Contact", "Careers"];

	const isActive = (item: string) => {
		if (item === "Home") return currentPath === "/";
		return currentPath.toLowerCase().includes(item.toLowerCase());
	};

	return (
		<>
			<AnimatePresence>
				{showHeader && (
					<motion.header
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -20, opacity: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="fixed top-0 left-0 right-0 flex justify-between items-start px-10 pt-10 z-50 bg-transparent pointer-events-none">
						<Link
							href="/"
							className="pointer-events-auto transition-opacity hover:opacity-70 active:scale-95">
							<span
								className={`${bdScript.className} text-4xl md:text-5xl text-[#fffaeb] antialiased tracking-wide`}>
								SP Design Studio
							</span>
						</Link>

						<button
							className={`pointer-events-auto text-[10px] uppercase tracking-[0.4em] transition-all duration-500 origin-center ${
								isMenuOpen
									? "text-[#714d59] rotate-0"
									: "text-[#fffaeb] rotate-90"
							}`}
							onClick={() => setIsMenuOpen(!isMenuOpen)}>
							{isMenuOpen ? "Close" : "Menu"}
						</button>
					</motion.header>
				)}
			</AnimatePresence>

			<AnimatePresence>
				{isMenuOpen && (
					<div
						className="fixed inset-0 bg-black/50 z-40 flex items-start justify-end"
						onClick={() => setIsMenuOpen(false)}>
						<motion.nav
							className="bg-[#fffaeb] shadow-lg w-full md:w-1/3 h-full overflow-hidden"
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
							onClick={(e) => e.stopPropagation()}>
							<motion.div
								variants={containerVariants}
								initial="hidden"
								animate="visible"
								className="flex flex-col text-4xl md:text-5xl text-left font-light gap-8 text-[#5b3644] mt-[25vh] p-12">
								{navItems.map((item) => {
									const active = isActive(item);
									return (
										<motion.button
											key={item}
											variants={itemVariants}
											className="relative text-left w-fit transition-all duration-500 group"
											onClick={() => {
												// Using standard routing or Next Link behavior
												window.location.href =
													item === "Home" ? "/" : `/${item.toLowerCase()}`;
												setIsMenuOpen(false);
											}}>
											<span
												className={`relative z-10 transition-colors duration-500 ${
													active
														? "text-black"
														: "text-[#714d59] group-hover:text-black"
												}`}>
												{item}
											</span>

											{active && (
												<motion.div
													layoutId="navLine"
													className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#bfa15f]"
													transition={{
														type: "spring",
														stiffness: 300,
														damping: 30,
													}}
												/>
											)}

											{!active && (
												<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black/20 transition-all duration-500 group-hover:w-full" />
											)}
										</motion.button>
									);
								})}
							</motion.div>
						</motion.nav>
					</div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Header;
