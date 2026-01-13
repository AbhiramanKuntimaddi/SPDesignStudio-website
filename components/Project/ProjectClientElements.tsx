"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { SanityProject } from "@/lib/queries";

/**
 * 1. BACK BUTTON
 * Fades out smoothly as the user scrolls down the project page.
 */
export function BackButton() {
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(true);

    const opacity = useTransform(scrollY, [0, 100], [1, 0]);
    const y = useTransform(scrollY, [0, 100], [0, -10]);

    useMotionValueEvent(opacity, "change", (latest) => {
        if (latest <= 0 && isVisible) setIsVisible(false);
        if (latest > 0 && !isVisible) setIsVisible(true);
    });

    return (
        <motion.div
            style={{
                opacity,
                y,
                pointerEvents: isVisible ? "auto" : "none",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="fixed top-28 left-6 md:top-32 md:left-12 z-[60]"
        >
            <Link
                href="/portfolio"
                className="group flex items-center gap-3 md:gap-4 text-[#fffaeb] hover:text-[#bfa15f] transition-all"
            >
                <div className="relative flex items-center group-hover:-translate-x-1 transition-transform">
                    <div className="w-8 md:w-12 h-[1px] bg-current" />
                    <span className="absolute -left-1 w-2 h-2 border-l border-b border-current rotate-45" />
                </div>
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold">
                    Back
                </span>
            </Link>
        </motion.div>
    );
}

/**
 * 2. PROJECT NAV LINK
 * Handles the "Prev" and "Next" logic at the bottom of the page.
 */
interface NavProps {
    project: SanityProject;
    direction: "prev" | "next";
    fontClass: string;
}

export function ProjectNavLink({ project, direction, fontClass }: NavProps) {
    return (
        <Link
            href={`/portfolio/${project.slug}`}
            className={`group flex flex-col ${
                direction === "next" ? "items-end text-right" : "items-start text-left"
            } md:max-w-[300px] transition-transform active:scale-95`}
        >
            <div className="hidden md:flex flex-col">
                <span className="text-[9px] uppercase tracking-[0.4em] text-[#bfa15f] mb-4 opacity-60">
                    {direction === "next" ? "Next Project" : "Previous Project"}
                </span>
                <h5
                    className={`${fontClass} text-5xl text-[#5b3644] group-hover:text-[#bfa15f] transition-all duration-500 leading-tight`}
                >
                    {project.title}
                </h5>
                <div className="mt-4 w-8 h-[1px] bg-[#5b3644]/20 group-hover:bg-[#bfa15f] group-hover:w-16 transition-all duration-700" />
            </div>

            <div className="md:hidden flex items-center justify-center w-12 h-12 border border-[#5b3644]/10 rounded-full group-active:border-[#bfa15f] transition-colors">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    className={`${direction === "prev" ? "" : "rotate-180"} text-[#5b3644] group-active:text-[#bfa15f]`}
                >
                    <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </Link>
    );
}

/**
 * 3. INFO ITEM
 * Static layout for Location, Area, etc.
 */
export function InfoItem({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <p className="text-[10px] uppercase tracking-widest text-[#bfa15f] font-bold mb-3">
                {label}
            </p>
            <p className="text-sm md:text-base uppercase tracking-wider font-medium">
                {value}
            </p>
        </div>
    );
}

/**
 * 4. NOT FOUND STATE
 */
export function NotFoundState({ fontClass }: { fontClass: string }) {
    return (
        <div className="h-screen flex items-center justify-center bg-[#5b3644] text-[#fffaeb]">
            <div className="text-center space-y-6">
                <h1 className={`${fontClass} text-5xl`}>Project Not Found</h1>
                <Link
                    href="/portfolio"
                    className="inline-block text-[#bfa15f] border-b border-[#bfa15f] pb-1 uppercase text-[10px] tracking-[0.4em]"
                >
                    Return to Archive
                </Link>
            </div>
        </div>
    );
}
