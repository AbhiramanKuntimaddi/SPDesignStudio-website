"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  showHeader: boolean;
}

const Header = ({ showHeader }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Home", "About", "Services", "Portfolio", "Contact"];

  return (
    <>
      <AnimatePresence>
        {showHeader && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-1 sm:top-3 w-full flex justify-between items-center p-4 sm:p-10 bg-transparent z-50"
          >
            <Image
              src="/images/logo.svg"
              alt="SP Design Studio Logo"
              width={180} // slightly smaller for mobile by default
              height={35}
              className={`object-contain ${isMenuOpen ? "brightness-0 md:brightness-100" : "brightness-100"}`}
            />

            {/* Rotated Menu Button */}
            <button
              className={`uppercase tracking-widest rotate-90 text-xs sm:text-lg ${
                isMenuOpen ? "text-black" : "text-[#fffaeb]"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-start justify-end"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.nav
              className="bg-[#fffaeb] shadow-lg p-6 w-full md:w-1/3 h-full"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-6 text-black mt-[35%] p-10">
                {navItems.map((item) => (
                  <button key={item} className="text-left hover:text-gray-500 transition-colors text-5xl font-extralight">
                    {item}
                  </button>
                ))}
              </div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;