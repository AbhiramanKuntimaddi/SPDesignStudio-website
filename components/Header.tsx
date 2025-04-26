"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
	showHeader: boolean;
}

const navVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

const Header = ({ showHeader }: HeaderProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Navigation items array for easy menu updates
	const navItems = ["Home", "About", "Services", "Portfolio", "Contact"];

	// Optional scroll nudge to fix layout glitches on iOS
	useEffect(() => {
		window.scrollTo(window.scrollX, window.scrollY + 1);
		setTimeout(() => window.scrollTo(window.scrollX, window.scrollY - 1), 0);
	}, []);

	return (
		<>
			<AnimatePresence>
				{showHeader && (
					<motion.header
						style={{
							paddingTop: "env(safe-area-inset-top)",
							willChange: "transform",
							WebkitTransform: "translateZ(0)",
							backgroundColor: "transparent",
						}}
						initial={{ y: -100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -100, opacity: 0 }}
						transition={{ duration: 0.5, ease: "easeOut" }}
						// Header now positioned 3% from the top
						className="fixed top-[3%] w-full flex justify-between items-center p-10 sm:p-20 bg-transparent z-50">
						<Image
							src="/images/logo.svg"
							alt="SP Design Studio Logo"
							width={215}
							height={40}
							className={`object-contain ${
								isMenuOpen ? "brightness-0 md:brightness-100" : "brightness-100"
							}`}
						/>
						{/* Mobile Menu Overlay */}
						<button
							className={`text-lg uppercase tracking-widest rotate-90 ${
								isMenuOpen ? "text-black" : "text-[#fffaeb]"
							}`}
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
							{isMenuOpen ? "Close" : "Menu"}
						</button>
					</motion.header>
				)}
			</AnimatePresence>

			<AnimatePresence>
				{isMenuOpen && (
					<div
						className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-start justify-end"
						onClick={() => setIsMenuOpen(false)}>
						<motion.nav
							className="bg-[#fffaeb] shadow-lg p-6 w-full md:w-1/3 h-full"
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ duration: 0.4, ease: "easeInOut" }}
							onClick={(e) => e.stopPropagation()}>
							<motion.div
								className="flex flex-col text-5xl text-left font-light gap-6 text-black mt-[35%] p-10"
								initial="hidden"
								animate="visible"
								exit="hidden"
								variants={{
									visible: {
										transition: {
											staggerChildren: 0.2,
										},
									},
								}}>
								{navItems.map((item) => (
									<motion.button
										key={item}
										variants={navVariants}
										transition={{ duration: 0.4, ease: "easeOut" }}
										className="text-left hover:text-gray-500 transition-colors text-5xl font-extralight">
										{item}
									</motion.button>
								))}
							</motion.div>
						</motion.nav>
					</div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Header;
