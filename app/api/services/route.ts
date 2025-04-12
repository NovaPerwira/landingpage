import { NextResponse } from "next/server"
import { getServices } from "@/lib/api"

// This simulates a real API endpoint
export async function GET() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const services = getServices()

  return NextResponse.json({ services })
}
