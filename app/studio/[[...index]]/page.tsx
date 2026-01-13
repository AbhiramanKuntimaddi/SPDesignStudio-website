"use client";

/**
 * This route responsible for rendering the Sanity Studio.
 * It is a Client Component because the Studio is an interactive SPA.
 */

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export default function StudioPage() {
	return <NextStudio config={config} />;
}