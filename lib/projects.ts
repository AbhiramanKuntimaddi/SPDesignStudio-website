// lib/projects.ts

export interface StrapiImage {
	url: string;
	alternativeText?: string;
}

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_TUNNEL_URL;
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

/**
 * 1. ACHIEVEMENTS LOGIC
 */
interface Strapi5AchievementResponse {
	id: number;
	documentId: string;
	achievementName: string;
	slug: string;
	achievementYear: string;
	achievementImage: { url: string };
	smallDescription: string;
}

export interface StrapiAchievement {
	id: number;
	name: string;
	slug: string;
	year: string;
	image: string;
	description: string;
}

export async function getAchievements(): Promise<StrapiAchievement[]> {
	if (!STRAPI_URL) return [];

	const query = "populate=*&sort=achievementYear:desc";
	const endpoint = `${STRAPI_URL}/api/achievements?${query}`;

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
			(item: Strapi5AchievementResponse): StrapiAchievement => ({
				id: item.id,
				name: item.achievementName || "Untitled Achievement",
				slug: item.slug,
				year: item.achievementYear || "2024",
				image: item.achievementImage?.url || "",
				description: item.smallDescription || "",
			})
		);
	} catch (err) {
		console.error("Achievement fetch failed:", err);
		return [];
	}
}

/**
 * 2. PROJECTS LOGIC
 */
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

export async function getProjects(): Promise<StrapiProject[]> {
	if (!STRAPI_URL) return [];

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
