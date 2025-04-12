import Image from "next/image"

interface TimelineItemProps {
  title: string
  description: string
  imageSrc?: string
  imageAlt?: string
  imagePosition: "left" | "right" | "none"
}

export default function TimelineItem({ title, description, imageSrc, imageAlt, imagePosition }: TimelineItemProps) {
  return (
    <div className="relative">
      {/* Timeline connector */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

      {/* Timeline dot */}
      <div className="absolute left-4 top-0 w-2 h-2 rounded-full bg-black transform -translate-x-[3px]"></div>

      <div className={`grid gap-6 pl-12 ${imagePosition !== "none" ? "md:grid-cols-2" : "md:grid-cols-1"}`}>
        <div className={`space-y-4 ${imagePosition === "right" ? "md:order-1" : ""}`}>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-gray-500">{description}</p>
        </div>

        {imagePosition !== "none" && imageSrc && (
          <div className="relative h-48 md:h-64 overflow-hidden rounded-lg">
            <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt || title} fill className="object-cover" />
          </div>
        )}
      </div>
    </div>
  )
}
