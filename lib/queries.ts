import { defineQuery } from "next-sanity";
import { client } from "./sanity.client";
import type { SanityImageSource } from "@sanity/image-url";

// 1. Strict Type Definition - No 'any' allowed
export interface SanityProject {
	_id: string;
	title: string;
	slug: string;
	location: string;
	area: string;
	year: string;
	status: "completed" | "construction" | "design" | "concept" | "archived";
	description: string;
	mainImage: SanityImageSource;
	category: "Residential" | "Commercial" | "Interior";
	gallery?: {
		renders: SanityImageSource[];
		execution: SanityImageSource[];
	};
}

// 2. The GROQ Query
// We include the new 'status' field and ensure the gallery arrays are pulled correctly
const PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(year desc) {
    _id,
    title,
    "slug": slug.current,
    location,
    area,
    year,
    status,
    description,
    category,
    mainImage,
    "gallery": {
      "renders": renders[] {
        ...,
        asset->
      },
      "execution": execution[] {
        ...,
        asset->
      }
    }
  }
`);

// 3. The Fetch Function
export async function getProjects(): Promise<SanityProject[]> {
	// Ensuring the fetch is strictly typed to our interface
	const data = await client.fetch<SanityProject[]>(PROJECTS_QUERY);
	return data || [];
}
