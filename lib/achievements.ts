// lib/achievements.ts

/**
 * 1. RAW RESPONSE INTERFACE
 * This matches the exact structure coming from Strapi 5.
 */
interface Strapi5AchievementResponse {
	id: number;
	documentId: string;
	achievementName: string;
	slug: string;
	achievementYear: string;
	achievementImage: {
		url: string;
		alternativeText?: string;
	};
	smallDescription: string;
}

/**
 * 2. CLEAN INTERFACE
 * This is the simplified version your UI components will use.
 */
export interface StrapiAchievement {
	id: number;
	documentId: string;
	name: string;
	slug: string;
	year: string;
	image: string; // Flattened for easier use in <Image />
	description: string;
}

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_TUNNEL_URL;
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

/**
 * 3. EXPLICIT FETCH FUNCTION
 */
export async function getAchievements(): Promise<StrapiAchievement[]> {
	if (!STRAPI_URL) {
		console.error("Missing STRAPI_URL in ENV");
		return [];
	}

	// Explicit query with population and sorting
	const query = "populate=*&sort=achievementYear:desc";
	const endpoint = `${STRAPI_URL}/api/achievements?${query}`;

	try {
		const response = await fetch(endpoint, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
			},
			next: { revalidate: 10 }, // Consistent 10s cache
		});

		if (!response.ok) {
			console.error(`Achievement fetch failed: ${response.status}`);
			return [];
		}

		const json = await response.json();
		if (!json.data) return [];

		// Mapping logic to clean the data
		return json.data.map(
			(item: Strapi5AchievementResponse): StrapiAchievement => ({
				id: item.id,
				documentId: item.documentId,
				name: item.achievementName || "Untitled Achievement",
				slug: item.slug,
				year: item.achievementYear || "2024",
				image: item.achievementImage?.url || "",
				description: item.smallDescription || "",
			})
		);
	} catch (err) {
		console.error("Achievement fetch error:", err);
		return [];
	}
}
