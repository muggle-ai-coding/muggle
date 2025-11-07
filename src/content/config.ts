import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['cloud', 'desktop', 'web', 'core-concepts', 'more-cases']),
    lang: z.enum(['en', 'zh']).default('en'),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };

