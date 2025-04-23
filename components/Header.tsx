"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			{/* Header */}
			<header className="fixed top-1 sm:top-3 w-full flex justify-between items-center p-6 sm:p-28 bg-transparent z-50">
				<h1
					className={`text-3xl font-light text-shadow-lg/30 ${
						isMenuOpen ? "text-black md:text-[#fffaeb]" : "text-[#fffaeb]"
					}`}>
					SP Design Studio
				</h1>
				<button
					className={`text-lg uppercase tracking-widest rotate-90 ${
						isMenuOpen ? "text-black" : "text-[#fffaeb]"
					}`}
					onClick={() => setIsMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? "Close" : "Menu"}
				</button>
			</header>

			{/* Pop-up Menu */}
			<AnimatePresence>
				{isMenuOpen && (
					<div
						className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-start justify-end text-shadow-lg/30"
						onClick={() => setIsMenuOpen(false)}>
						<motion.nav
							className="bg-[#fffaeb] shadow-lg p-6 w-full md:w-1/3 h-full"
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ duration: 0.4, ease: "easeInOut" }}
							onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
						>
							<div className="flex flex-col text-5xl text-left font-light gap-6 text-black mt-28 p-10">
								<button className="text-left bg-transparent hover:text-gray-500">
									Home
								</button>
								<button className="text-left bg-transparent hover:text-gray-500">
									About
								</button>
								<button className="text-left bg-transparent hover:text-gray-500">
									Services
								</button>
								<button className="text-left bg-transparent hover:text-gray-500">
									Portfolio
								</button>
								<button className="text-left bg-transparent hover:text-gray-500">
									Contact
								</button>
							</div>
						</motion.nav>
					</div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Header;
