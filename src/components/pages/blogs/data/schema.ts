import { z } from "zod";

export const blogSchema = z.object({
  id: z.string(),
  title: z.string(),
  createdAt: z.string(),
  category: z.string(),
  keywords: z.string(),
  imageUrl: z.string(),
});

export type BlogMeta = z.infer<typeof blogSchema>;
