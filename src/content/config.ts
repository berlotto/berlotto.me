import { SITE } from "@config";
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      date: z.date(),
      title: z.string(),
      postSlug: z.string().optional(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      category: z.string(),
      featuredImage: image().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image()
        .refine(img => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      description: z.string().optional(),
      canonicalURL: z.string().optional(),
    }),
});

export const collections = { posts };
