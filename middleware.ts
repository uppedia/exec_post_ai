// middleware.ts
import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ["/", "/api/webhooks/clerk"],
});

export const config = {
  matcher: ["/((?!.*\\.).*)", "/"],
};
