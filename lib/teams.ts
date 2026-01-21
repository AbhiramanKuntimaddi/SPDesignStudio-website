// lib/teams.ts

export interface StrapiImage {
	url: string;
	alternativeText?: string;
}

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_TUNNEL_URL;
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

/**
 * 1. RAW RESPONSE INTERFACE (Matching your working JSON)
 */
interface Strapi5TeamResponse {
	id: number;
	documentId: string;
	memberName: string;
	memberRole: string;
	roleDescription: string;
	memberImage: StrapiImage | null;
}

/**
 * 2. CLEAN INTERFACE
 */
export interface TeamMember {
	id: number;
	documentId: string;
	name: string;
	role: string;
	description: string;
	avatar: string;
}

/**
 * 3. GET TEAM MEMBERS
 */
export async function getTeam(): Promise<TeamMember[]> {
	if (!STRAPI_URL) return [];

	// FIXED: Changed 'team-members' to 'teams' to match your working link
	const query = "populate=*";
	const endpoint = `${STRAPI_URL}/api/teams?${query}`;

	try {
		const response = await fetch(endpoint, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
			},
			next: { revalidate: 10 },
		});

		if (!response.ok) {
			console.error(`Team fetch failed: ${response.status} at ${endpoint}`);
			return [];
		}

		const json = await response.json();
		if (!json.data) return [];

		return json.data.map(
			(item: Strapi5TeamResponse): TeamMember => ({
				id: item.id,
				documentId: item.documentId,
				name: item.memberName || "Anonymous Member",
				role: item.memberRole || "Team Member",
				description: item.roleDescription || "",
				// Prefixing the URL for Cloudflare tunnel support
				avatar: item.memberImage?.url
					? item.memberImage.url.startsWith("http")
						? item.memberImage.url
						: `${STRAPI_URL}${item.memberImage.url}`
					: "/placeholder-avatar.jpg", // Fallback for members like Nanda with null images
			})
		);
	} catch (err) {
		console.error("Team fetch error:", err);
		return [];
	}
}
