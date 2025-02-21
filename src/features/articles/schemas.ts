import { z } from "zod";

export const updateArticleSchema = z.object({
  title: z.string(),
  content: z.string(),
  icon: z.string(),
});
