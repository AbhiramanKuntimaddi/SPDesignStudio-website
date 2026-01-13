import { createClient } from "next-sanity";
// 1. Use the modern named export to clear the deprecation warning
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2026-01-13"; // Updated to today's date

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: false, // This ensures we bypass the cache and see fresh data
});

// 2. Use the new builder function
const builder = createImageUrlBuilder(client);

/**
 * Strictly typed helper.
 * Because we use 'SanityImageSource', TS will catch errors if you
 * pass bad data, ensuring zero usage of 'any'.
 */
export function urlFor(source: SanityImageSource) {
	return builder.image(source);
}
