"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    quote:
      "Working with Nova Tech was a game-changer for our business. Their team delivered a website that exceeded our expectations and has significantly improved our online presence.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    avatar: "/images/avatar1.jpg",
  },
  {
    quote:
      "The attention to detail and creativity that Nova Tech brought to our project was impressive. They understood our vision and translated it into a beautiful, functional website.",
    author: "Michael Chen",
    role: "Marketing Director, Global Solutions",
    avatar: "/images/avatar2.jpg",
  },
  {
    quote:
      "I've worked with many web design agencies, but Nova Tech stands out for their professionalism, expertise, and commitment to delivering high-quality results.",
    author: "Emily Rodriguez",
    role: "Founder, Design Collective",
    avatar: "/images/avatar3.jpg",
  },
  {
    quote:
      "Nova Tech transformed our outdated website into a modern, user-friendly platform that has helped us attract new customers and grow our business.",
    author: "David Wilson",
    role: "Operations Manager, Retail Innovations",
    avatar: "/images/avatar4.jpg",
  },
]

const TestimonialSection = () => {
  const scrollRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (inView) {
        nextTestimonial()
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [inView])

  useEffect(() => {
    // Dynamic import of Locomotive Scroll
    const initLocomotiveScroll = async () => {
      const locomotiveModule = await import('locomotive-scroll')
      const LocomotiveScroll = locomotiveModule.default

      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 0.5,
        lerp: 0.1,
        class: 'is-inview',
      })

      return () => {
        if (scroll) scroll.destroy()
      }
    }

    initLocomotiveScroll()
  }, [])

  return (
    <div ref={scrollRef} data-scroll-container>
      <section ref={containerRef} className="w-full py-16 bg-gray-50 overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Testimonial</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Hear what our clients have to say about their experience working with us.
            </p>
          </div>

          <div className="flex justify-end mb-6">
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div ref={ref} className="relative h-[400px] md:h-[300px]">
            <motion.div style={{ y, opacity }} className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
                {testimonials.map((testimonial, index) => {
                  // Calculate the visible index based on the current index
                  const visibleIndex = (currentIndex + index) % testimonials.length

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x: index === 0 ? 0 : index === 1 ? 0 : index === 2 ? 0 : 0,
                      }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-lg shadow-md"
                    >
                      <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                      <div className="flex items-center">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg?height=40&width=40"}
                            alt={testimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.author}</p>
                          <p className="text-gray-500 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TestimonialSection
