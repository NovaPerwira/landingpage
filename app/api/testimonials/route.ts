import { NextResponse } from "next/server"
import { getTestimonials } from "@/lib/api"

// This simulates a real API endpoint
export async function GET() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const testimonials = getTestimonials()

  return NextResponse.json({ testimonials })
}
