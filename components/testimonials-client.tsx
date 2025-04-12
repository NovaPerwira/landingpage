"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import TestimonialCard from "@/components/testimonial-card"
import { Skeleton } from "@/components/ui/skeleton"

interface Testimonial {
  quote: string
  author: string
  role: string
  rating: number
}

export default function TestimonialsClient() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 4

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const response = await fetch("/api/testimonials")

        if (!response.ok) {
          throw new Error("Failed to fetch testimonials")
        }

        const data = await response.json()
        setTestimonials(data.testimonials)
        setLoading(false)
      } catch (err) {
        setError("Error loading testimonials. Please try again later.")
        setLoading(false)
        console.error(err)
      }
    }

    fetchTestimonials()
  }, [])

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => {
      const maxPage = Math.ceil(testimonials.length / itemsPerPage) - 1
      return Math.min(maxPage, prev + 1)
    })
  }

  const displayedTestimonials = testimonials.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  if (error) {
    return (
      <div className="text-center p-6 bg-red-50 rounded-lg">
        <p className="text-red-600">{error}</p>
      </div>
    )
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h2 className="text-3xl font-bold tracking-tighter">Testimonial</h2>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={handlePrevious}
            disabled={currentPage === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={handleNext}
            disabled={currentPage >= Math.ceil(testimonials.length / itemsPerPage) - 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <p className="text-gray-500 mb-8">
        Don't just take our word for it—see what actual users of our product have to say about their experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading
          ? // Skeleton loading state
            Array.from({ length: 4 }).map((_, index) => <Skeleton key={index} className="h-48 w-full rounded-lg" />)
          : // Actual content
            displayedTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                rating={testimonial.rating}
              />
            ))}
      </div>
    </div>
  )
}
