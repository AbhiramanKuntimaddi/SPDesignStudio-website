import { defineType, defineField } from "sanity";

export default defineType({
	name: "project",
	title: "Project Portfolio",
	type: "document",
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Project Title",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "slug",
			type: "slug",
			title: "URL Slug",
			options: { source: "title", maxLength: 96 },
			validation: (Rule) => Rule.required(),
		}),
		defineField({ name: "location", type: "string", title: "Location" }),
		defineField({ name: "area", type: "string", title: "Area (sq ft)" }),
		defineField({ name: "year", type: "string", title: "Year" }),
		defineField({
			name: "category",
			type: "string",
			options: {
				list: ["Residential", "Commercial", "Interior", "Hospitality"],
			},
		}),
		defineField({
			name: "status",
			type: "string",
			title: "Project Status",
			initialValue: "completed",
			options: {
				list: [
					{ title: "Completed", value: "completed" },
					{ title: "In Construction", value: "construction" },
					{ title: "Design Phase", value: "design" },
					{ title: "Concept", value: "concept" },
					{ title: "Archived", value: "archived" },
				],
				layout: "radio",
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({ name: "description", type: "text", title: "Description" }),
		defineField({
			name: "mainImage",
			type: "image",
			title: "Featured Image",
			options: { hotspot: true },
		}),
		defineField({
			name: "renders",
			title: "Renders Gallery",
			type: "array",
			description:
				'Upload multiple images for the "Vision" section. You can drag and drop multiple files here.',
			of: [
				{
					type: "image",
					options: { hotspot: true },
				},
			],
			options: {
				layout: "grid",
			},
		}),
		defineField({
			name: "execution",
			title: "Execution Gallery",
			type: "array",
			description: 'Upload multiple images for the "Reality" section.',
			of: [
				{
					type: "image",
					options: { hotspot: true },
				},
			],
			options: {
				layout: "grid",
			},
		}),
	],
});
