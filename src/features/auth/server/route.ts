import { Hono } from "hono";

import { sessionMiddleware } from "@/lib/session-middleware";

const app = new Hono()
  /**
   * 認証情報取得API
   */
  .get("/current", sessionMiddleware, async (c) => {
    const session = c.get("session");
    return c.json({ data: session.user });
  });

export default app;
