"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface Service {
  title: string
  description: string
}

export default function ServicesClient() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch("/api/services")

        if (!response.ok) {
          throw new Error("Failed to fetch services")
        }

        const data = await response.json()
        setServices(data.services)
        setLoading(false)
      } catch (err) {
        setError("Error loading services. Please try again later.")
        setLoading(false)
        console.error(err)
      }
    }

    fetchServices()
  }, [])

  if (error) {
    return (
      <div className="text-center p-6 bg-red-50 rounded-lg">
        <p className="text-red-600">{error}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {loading
        ? // Skeleton loading state
          Array.from({ length: 4 }).map((_, index) => <Skeleton key={index} className="h-40 w-full rounded-lg" />)
        : // Actual content
          services.map((service, index) => (
            <Card key={index} className="bg-gray-100 border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
    </div>
  )
}
