"use server"

import fs from "fs/promises"
import path from "path"
import { verifyAuth } from "./auth-actions"

// In a real application, you would use a database instead of file system
const CONTENT_DIR = path.join(process.cwd(), "content")

// Ensure the content directory exists
async function ensureContentDir() {
  try {
    await fs.access(CONTENT_DIR)
  } catch (error) {
    await fs.mkdir(CONTENT_DIR, { recursive: true })
  }
}

export async function savePageContent(pageId: string, content: Record<string, string>) {
  // Verify authentication before allowing content changes
  await verifyAuth()

  await ensureContentDir()

  const filePath = path.join(CONTENT_DIR, `${pageId}.json`)

  // Add timestamp for tracking changes
  const contentWithMeta = {
    ...content,
    lastUpdated: new Date().toISOString(),
  }

  await fs.writeFile(filePath, JSON.stringify(contentWithMeta, null, 2))

  return { success: true }
}

export async function getPageContent(pageId: string) {
  await ensureContentDir()

  const filePath = path.join(CONTENT_DIR, `${pageId}.json`)

  try {
    const fileContent = await fs.readFile(filePath, "utf-8")
    return JSON.parse(fileContent)
  } catch (error) {
    // If file doesn't exist or can't be parsed, return null
    return null
  }
}

// This function can be used in server components to get content
export async function getContentForPage(pageId: string, defaultContent: Record<string, string>) {
  const savedContent = await getPageContent(pageId)

  if (!savedContent) {
    return defaultContent
  }

  // Remove metadata fields before returning
  const { lastUpdated, ...contentWithoutMeta } = savedContent

  return contentWithoutMeta
}
