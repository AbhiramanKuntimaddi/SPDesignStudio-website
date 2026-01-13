import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

// 1. Extract variables with fallbacks to prevent Build Crashes
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2026-01-12";

// 2. Defensive check: If variables are missing during build, warn but don't crash
if (!projectId) {
	console.warn(
		"Missing NEXT_PUBLIC_SANITY_PROJECT_ID. Check your Vercel/Env settings."
	);
}

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: false, // Recommended: false for server-side fetching in Next.js
});

// 3. Initialize the image builder
const builder = imageUrlBuilder(client);

// 4. Strictly typed helper for images
export function urlFor(source: SanityImageSource) {
	return builder.image(source);
}
