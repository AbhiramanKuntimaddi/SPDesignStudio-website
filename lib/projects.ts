export interface Project {
	id: string;
	slug: string;
	title: string;
	location: string;
	area: string;
	year: string;
	category: string;
	description: string;
	mainImage: string;
	gallery: {
		renders: string[];
		execution: string[];
	};
}

export const projects: Project[] = [
	{
		id: "01",
		slug: "minimalist-sanctuary",
		title: "Minimalist Sanctuary",
		location: "Jubilee Hills, Hyderabad",
		area: "4,500 Sq. Ft.",
		year: "2024",
		category: "Residential",
		description:
			"A study in light and shadow. This project focused on natural textures and a monochromatic palette to create a sense of eternal calm and understated luxury.",
		mainImage:
			"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1920",
		gallery: {
			renders: [
				"https://images.unsplash.com/photo-1600607687940-c52af0b439f3?auto=format&fit=crop&q=80&w=800",
				"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=800",
			],
			execution: [
				"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
				"https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1200",
			],
		},
	},
	{
		id: "02",
		slug: "the-monolith-office",
		title: "The Monolith Office",
		location: "Financial District, Hyderabad",
		area: "12,000 Sq. Ft.",
		year: "2023",
		category: "Commercial",
		description:
			"Designed for a high-tech venture firm, the space features brutalist concrete forms softened by warm oak acoustics and lush indoor greenery.",
		mainImage:
			"https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920",
		gallery: {
			renders: [
				"https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800",
				"https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=800",
			],
			execution: [
				"https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200",
				"https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80&w=1200",
			],
		},
	},
	{
		id: "03",
		slug: "amber-atrium-cafe",
		title: "Amber Atrium Cafe",
		location: "Banjara Hills, Hyderabad",
		area: "1,800 Sq. Ft.",
		year: "2024",
		category: "Hospitality",
		description:
			"A vibrant culinary space utilizing terracotta tiles and brass accents to create a warm, inviting atmosphere inspired by Mediterranean afternoons.",
		mainImage:
			"https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1920",
		gallery: {
			renders: [
				"https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
				"https://images.unsplash.com/photo-1534433880541-144249305046?auto=format&fit=crop&q=80&w=800",
			],
			execution: [
				"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
				"https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200",
			],
		},
	},
	{
		id: "04",
		slug: "skyline-penthouse",
		title: "Skyline Penthouse",
		location: "Gachibowli, Hyderabad",
		area: "6,200 Sq. Ft.",
		year: "2023",
		category: "Residential",
		description:
			"An ultra-modern residence featuring floor-to-ceiling glass and smart-home integration, where every furniture piece was custom-curated for the skyline views.",
		mainImage:
			"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1920",
		gallery: {
			renders: [
				"https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
				"https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=800",
			],
			execution: [
				"https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=80&w=1200",
				"https://images.unsplash.com/photo-1600607687946-29a471397028?auto=format&fit=crop&q=80&w=1200",
			],
		},
	},
];
