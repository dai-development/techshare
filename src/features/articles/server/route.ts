import { Hono } from "hono";

import { db } from "@/db";
import { articles } from "@/db/schema";
import { sessionMiddleware } from "@/lib/session-middleware";

const app = new Hono()
  /**
   * 記事作成API
   */
  .post("/", sessionMiddleware, async (c) => {
    const session = c.get("session");

    const [article] = await db
      .insert(articles)
      .values({
        authorId: session.user?.id!,
      })
      .returning();

    return c.json({ data: article });
  });

export default app;
