"use server"

import { cookies } from "next/headers"
import { SignJWT, jwtVerify } from "jose"
import { redirect } from "next/navigation"

// In a real app, you would store these in environment variables
// and use a more secure method for storing and comparing passwords
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin"
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "securepassword123"
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-should-be-at-least-32-characters"

export async function authenticate(username: string, password: string) {
  // Simple authentication check
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    // Create a JWT token
    const token = await new SignJWT({ username })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("2h") // Token expires in 2 hours
      .sign(new TextEncoder().encode(JWT_SECRET))

    // Set the token in a cookie
    cookies().set({
      name: "admin-token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 2, // 2 hours
      path: "/",
    })

    return { success: true }
  }

  return { success: false, error: "Invalid username or password" }
}

export async function verifyAuth() {
  const token = cookies().get("admin-token")?.value

  if (!token) {
    redirect("/admin-login")
  }

  try {
    const verified = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET))
    return verified.payload
  } catch (error) {
    cookies().delete("admin-token")
    redirect("/admin-login")
  }
}

export async function logout() {
  cookies().delete("admin-token")
  redirect("/admin-login")
}
