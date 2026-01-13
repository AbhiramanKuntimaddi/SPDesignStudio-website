import { createClient } from "next-sanity";
// 1. Use the named export instead of the default export
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

export const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	apiVersion: "2026-01-12",
	useCdn: false,
});

// 2. Initialize the builder with the client
const builder = createImageUrlBuilder(client);

// 3. Add strict typing to the source parameter
export function urlFor(source: SanityImageSource) {
	return builder.image(source);
}
