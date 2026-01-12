"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import localFont from "next/font/local";

const bdScript = localFont({
	src: "../../public/fonts/BDSans/BDScript-Regular.woff",
	style: "italic",
});

interface HeaderProps {
	showHeader: boolean;
	currentPath: string;
}

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.1, delayChildren: 0.3 },
	},
};

const itemVariants = {
	hidden: { opacity: 0, x: 20 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] },
	},
};

const Header = ({ showHeader, currentPath }: HeaderProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const router = useRouter();

	// FIX: Prevent background scroll on iOS when menu is open
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
			document.body.style.touchAction = "none"; // iOS specific
		} else {
			document.body.style.overflow = "unset";
			document.body.style.touchAction = "auto";
		}
		return () => {
			document.body.style.overflow = "unset";
			document.body.style.touchAction = "auto";
		};
	}, [isMenuOpen]);

	const navItems = ["Home", "About", "Portfolio", "Contact", "Careers"];

	const isActive = (item: string) => {
		if (item === "Home") return currentPath === "/";
		return currentPath.toLowerCase().includes(item.toLowerCase());
	};

	// FIX: Smooth navigation for iOS/Next.js to avoid page refresh flash
	const handleNav = (item: string) => {
		const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
		setIsMenuOpen(false);
		// Timeout allows the menu exit animation to start before the route changes
		setTimeout(() => {
			router.push(path);
		}, 100);
	};

	return (
		<>
			<AnimatePresence>
				{showHeader && (
					<motion.header
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -20, opacity: 0 }}
						transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
						className="fixed top-0 left-0 right-0 flex justify-between items-start px-6 md:px-10 pt-8 md:pt-10 z-[60] bg-transparent pointer-events-none">
						<Link
							href="/"
							className="pointer-events-auto transition-opacity hover:opacity-70 active:scale-95">
							<span
								className={`${bdScript.className} text-3xl md:text-5xl text-[#fffaeb] antialiased tracking-wide`}>
								SP Design Studio
							</span>
						</Link>

						<button
							className={`pointer-events-auto text-[10px] uppercase tracking-[0.4em] transition-all duration-500 origin-center py-2 px-4 ${
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
					<div className="fixed inset-0 z-[50] flex justify-end">
						{/* Overlay */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="absolute inset-0 bg-black/40 backdrop-blur-sm"
							onClick={() => setIsMenuOpen(false)}
						/>

						<motion.nav
							className="relative bg-[#fffaeb] w-full md:w-[40%] lg:w-[30%] h-[100dvh] shadow-2xl overflow-hidden" // FIX: 100dvh for iOS
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
							onClick={(e) => e.stopPropagation()}>
							<motion.div
								variants={containerVariants}
								initial="hidden"
								animate="visible"
								className="flex flex-col text-4xl md:text-5xl text-left font-light gap-8 text-[#5b3644] mt-[20vh] p-8 md:p-12">
								{navItems.map((item) => {
									const active = isActive(item);
									return (
										<motion.button
											key={item}
											variants={itemVariants}
											className="relative text-left w-fit transition-all duration-500 group"
											onClick={() => handleNav(item)}>
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
