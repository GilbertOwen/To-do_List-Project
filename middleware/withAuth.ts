import { getToken } from "next-auth/jwt";
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

export default function withAuth(
  middleware: NextMiddleware,
  requireCheck: string[] = []
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;

    if (requireCheck.includes(pathname)) {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });
      if (pathname !== "/auth-to-do" && !token) {
        const url = new URL("/auth-to-do", req.url);
        url.searchParams.set("callbackUrl", encodeURI(req.url));
        return NextResponse.redirect(url);
      } else if (token && pathname.includes("auth-to-do")) {
        const url = new URL("/application/dashboard", req.url); // Redirect to '/dashboard' or any other page
        return NextResponse.redirect(url);
      }
    }
    return middleware(req, next);
  };
}
