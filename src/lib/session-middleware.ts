import { Session } from "next-auth";
import { createMiddleware } from "hono/factory";

import { auth } from "@/auth";

type AdditionalContext = {
  Variables: {
    session: Session;
  };
};

export const sessionMiddleware = createMiddleware<AdditionalContext>(
  async (c, next) => {
    const session = await auth();
    if (!session) {
      return c.json({ error: "認証されていません" }, 401);
    }
    c.set("session", session);
    return next();
  }
);
