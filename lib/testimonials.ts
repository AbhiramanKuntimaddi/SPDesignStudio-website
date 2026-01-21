// lib/testimonials.ts

/**
 * 1. RAW RESPONSE INTERFACE
 */
interface Strapi5TestimonialResponse {
	id: number;
	documentId: string;
	clientName: string;
	projectName: string;
	testimonialDescription: string;
	createdAt: string;
}

/**
 * 2. CLEAN INTERFACE
 */
export interface StrapiTestimonial {
	id: number;
	documentId: string;
	client: string;
	project: string;
	content: string;
}

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_TUNNEL_URL;
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

/**
 * 3. GET TESTIMONIALS
 */
export async function getTestimonials(): Promise<StrapiTestimonial[]> {
	if (!STRAPI_URL) {
		console.error("Missing STRAPI_URL in ENV");
		return [];
	}

	const query = "populate=*&sort=createdAt:desc";
	const endpoint = `${STRAPI_URL}/api/testimonials?${query}`;

	try {
		const response = await fetch(endpoint, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
			},
			next: { revalidate: 60 },
		});

		if (!response.ok) {
			console.error(`Testimonials fetch failed: ${response.status}`);
			return [];
		}

		const json = await response.json();
		if (!json.data) return [];

		return json.data.map(
			(item: Strapi5TestimonialResponse): StrapiTestimonial => ({
				id: item.id,
				documentId: item.documentId,
				client: item.clientName || "Anonymous Client",
				project: item.projectName || "Private Project",
				content: item.testimonialDescription || "",
			})
		);
	} catch (err) {
		console.error("Testimonial fetch error:", err);
		return [];
	}
}
