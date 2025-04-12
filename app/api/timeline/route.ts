import { NextResponse } from "next/server"
import { getTimelineItems } from "@/lib/api"

// This simulates a real API endpoint
export async function GET() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const items = getTimelineItems()

  return NextResponse.json({ items })
}
