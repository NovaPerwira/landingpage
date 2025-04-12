import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <Card className="bg-gray-100 border-0">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}
