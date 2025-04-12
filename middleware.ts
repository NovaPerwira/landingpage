import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Get the pathname
  const path = request.nextUrl.pathname

  // Check if the path is for the admin dashboard
  if (path.startsWith("/admin")) {
    // Get the token from the cookies
    const token = request.cookies.get("admin-token")?.value

    // If there's no token, redirect to the login page
    if (!token) {
      return NextResponse.redirect(new URL("/admin-login", request.url))
    }

    // You could also verify the token here for additional security
    // For a real app, you'd want to validate the token on the server
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin/:path*"],
}
