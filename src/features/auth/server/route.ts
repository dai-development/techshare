import { Hono } from "hono";
import { eq } from "drizzle-orm";

import { db } from "@/db";
import { users } from "@/db/schema";
import { sessionMiddleware } from "@/lib/session-middleware";

const app = new Hono()
  /**
   * 認証情報取得API
   */
  .get("/current", sessionMiddleware, async (c) => {
    const session = c.get("session");
    return c.json({ data: session.user });
  })
  /**
   * ユーザー取得API
   */
  .get("/:user_id", async (c) => {
    const userId = c.req.param("user_id");
    const [user] = await db.select().from(users).where(eq(users.id, userId));
    return c.json({ data: user });
  });

export default app;
