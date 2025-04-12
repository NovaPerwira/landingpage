import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant: "default" | "outline"
  popular: boolean
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  buttonVariant,
  popular,
}: PricingCardProps) {
  return (
    <Card className={`flex flex-col ${popular ? "bg-blue-600 text-white" : "bg-white"} border-0 shadow-lg`}>
      <CardHeader className="pb-0">
        <div className="mb-2 text-sm font-medium">{title}</div>
        <div className="flex items-baseline text-2xl font-bold">
          {price}
          <span className="ml-1 text-sm font-normal text-gray-400">/month</span>
        </div>
      </CardHeader>
      <CardContent className="pt-4 pb-0">
        <p className={`text-sm ${popular ? "text-blue-100" : "text-gray-500"} mb-6`}>{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className={`mr-2 h-4 w-4 ${popular ? "text-blue-200" : "text-blue-600"}`} />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto pt-6">
        <Button
          className={`w-full ${
            buttonVariant === "default"
              ? "bg-black text-white hover:bg-gray-800"
              : `${popular ? "bg-white text-blue-600 hover:bg-gray-100" : "bg-white border-gray-300 text-gray-900 hover:bg-gray-50"}`
          }`}
          variant={buttonVariant}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  )
}
