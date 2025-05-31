import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Path that don't require authentication
  const isPublicPath = [
    "/sign-in",
    "/sign-up",
    "/reset-password",
    "/verify-email",
  ].includes(pathname);

  // Define shared paths accessible to everyone, regardless of login status
  const isSharedPath = [
    "/",
    "/about",
    "/contact",
    "/services",
    "/gallery",
    "/booking",
  ].includes(pathname);

  // Define paths accessible only to admin
  const isAdminPath = [
    "/admin",
    "/admin/users",
    "/admin/products",
    "/admin/appointments",
    "/admin/reviews",
    "/admin/settings",
    "/admin/services",
    "/admin/orders",
  ].includes(pathname);

  const token = request.cookies.get("access_token")?.value;
  const userCookie = request.cookies.get("user")?.value;
  const user = userCookie ? JSON.parse(userCookie) : null;
  const userRole = user?.is_customer ?? true;

  //   console.log("User Role:", !userRole);

  // Shared paths are accessible to everyone
  if (isSharedPath) {
    return NextResponse.next();
  }

  // Redirect logged-in users to appropriate dashboards from login/signup
  if (isPublicPath && token) {
    if (userRole) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    if (!userRole) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  // Protect admin-only routes
  if (isAdminPath) {
    if (token && !userRole) {
      // Allow access to the requested route
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// Exclude middleware from being applied to these routes
export const config = {
  matcher: ["/((?!api|_next/static|_next/data|favicon.ico).*)"],
};
