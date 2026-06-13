import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
	schema: z.object({
		title: z.string(),
		titlePt: z.string().optional(),
		summary: z.string(),
		summaryPt: z.string().optional(),
		role: z.string(),
		rolePt: z.string().optional(),
		year: z.string(),
		stack: z.array(z.string()),
		image: z.string().optional(),
		images: z.array(z.string()).default([]),
		link: z.string().url().optional(),
		repo: z.string().url().optional(),
		npm: z.string().url().optional(),
		featured: z.boolean().default(false),
		order: z.number().default(99),
		scenes: z
			.array(
				z.object({
					label: z.string(),
					title: z.string(),
					titlePt: z.string().optional(),
					body: z.string(),
					bodyPt: z.string().optional(),
				}),
			)
			.default([]),
	}),
});

export const collections = { projects };
