"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { savePageContent } from "@/lib/content-actions"
import { toast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

interface ContentEditorProps {
  pageId: string
  initialContent: Record<string, string>
}

export default function ContentEditor({ pageId, initialContent }: ContentEditorProps) {
  const [content, setContent] = useState(initialContent)
  const [saving, setSaving] = useState(false)

  const handleChange = (key: string, value: string) => {
    setContent((prev) => ({ ...prev, [key]: value }))
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      await savePageContent(pageId, content)
      toast({
        title: "Content saved",
        description: "Your changes have been saved successfully.",
      })
    } catch (error) {
      console.error("Error saving content:", error)
      toast({
        title: "Error",
        description: "There was a problem saving your changes.",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="space-y-6">
      {Object.entries(content).map(([key, value]) => {
        // Determine if this is a JSON field that should use a textarea
        const isJsonField = value.startsWith("[") || value.startsWith("{")
        const isLongText = value.length > 100

        return (
          <div key={key} className="space-y-2">
            <label htmlFor={key} className="text-sm font-medium capitalize">
              {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
            </label>

            {isJsonField || isLongText ? (
              <Textarea
                id={key}
                value={value}
                onChange={(e) => handleChange(key, e.target.value)}
                rows={isJsonField ? 10 : 4}
                className="font-mono text-sm"
              />
            ) : (
              <Input id={key} value={value} onChange={(e) => handleChange(key, e.target.value)} />
            )}
          </div>
        )
      })}

      <Button onClick={handleSave} disabled={saving} className="bg-black text-white">
        {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {saving ? "Saving..." : "Save Changes"}
      </Button>
    </div>
  )
}
