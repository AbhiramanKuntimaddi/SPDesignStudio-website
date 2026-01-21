// lib/jobs.ts

/**
 * 1. RAW RESPONSE INTERFACE
 */
interface Strapi5JobResponse {
	id: number;
	documentId: string;
	jobTitle: string;
	slug: string;
	jobLocation: string;
	jobStatus?: string;
	jobDescription: string;
	requirements: string;
	isActive: boolean;
}

/**
 * 2. CLEAN INTERFACE
 */
export interface StrapiJob {
	id: number;
	documentId: string;
	title: string;
	slug: string;
	location: string;
	status: string;
	description: string;
	requirements: string;
	active: boolean;
}

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_TUNNEL_URL;
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

/**
 * 3. GET JOBS
 */
export async function getJobs(): Promise<StrapiJob[]> {
	if (!STRAPI_URL) {
		console.error("Missing STRAPI_URL in ENV");
		return [];
	}

	const query = "populate=*&sort=createdAt:desc";
	const endpoint = `${STRAPI_URL}/api/job-listings?${query}`;

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
			(item: Strapi5JobResponse): StrapiJob => ({
				id: item.id,
				documentId: item.documentId,
				title: item.jobTitle || "Open Position",
				slug: item.slug,
				location: item.jobLocation || "Remote",
				status: item.jobStatus || "Full-time",
				description: item.jobDescription || "",
				requirements: item.requirements || "",
				active: item.isActive ?? true,
			})
		);
	} catch (err) {
		console.error("Jobs fetch failed:", err);
		return [];
	}
}
