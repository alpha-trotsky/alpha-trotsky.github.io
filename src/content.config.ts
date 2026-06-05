import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// This tells Astro: "every .md file in src/content/blog is a blog post."
// The `schema` defines the front-matter each post must have (title, date, etc.)
// so you get a helpful error instead of a silently broken page if you forget one.
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
  }),
});

export const collections = { writing };
