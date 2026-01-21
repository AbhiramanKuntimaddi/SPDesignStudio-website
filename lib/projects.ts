// lib/projects.ts

export interface StrapiImage {
	url: string;
	alternativeText?: string;
}

interface Strapi5ProjectResponse {
	id: number;
	documentId: string;
	title: string;
	slug: string;
	location: string;
	area: string;
	year: string;
	projectStatus?: string;
	category?: string;
	description: string;
	mainImage: StrapiImage;
	renders?: StrapiImage[];
	execution?: StrapiImage[];
}

export interface StrapiProject {
	id: number;
	documentId: string;
	title: string;
	slug: string;
	location: string;
	area: string;
	year: string;
	status: string;
	description: string;
	category: string;
	mainImage: StrapiImage;
	gallery: {
		renders: StrapiImage[];
		execution: StrapiImage[];
	};
}

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_TUNNEL_URL;
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

export async function getProjects(): Promise<StrapiProject[]> {
	if (!STRAPI_URL) {
		console.error("Missing STRAPI_URL in ENV");
		return [];
	}

	const query = "populate=*&sort=year:desc";
	const endpoint = `${STRAPI_URL}/api/projects?${query}`;

	try {
		const response = await fetch(endpoint, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
			},
			next: { revalidate: 10 },
		});

		if (!response.ok) return [];

		const json = await response.json();
		if (!json.data) return [];

		return json.data.map(
			(item: Strapi5ProjectResponse): StrapiProject => ({
				id: item.id,
				documentId: item.documentId,
				title: item.title || "Untitled Project",
				slug: item.slug,
				location: item.location || "Location TBD",
				area: item.area || "0",
				year: item.year || "2024",
				status: item.projectStatus || "design",
				category: item.category || "Residential",
				description: item.description || "",
				mainImage: item.mainImage,
				gallery: {
					renders: item.renders || [],
					execution: item.execution || [],
				},
			})
		);
	} catch (err) {
		console.error("Fetch failed:", err);
		return [];
	}
}
