"use client"

import React, { useEffect, useRef, useState } from "react"

const steps = [
  {
    title: "Consultation & Planning",
    description:
      "We discuss your goals, needs, and vision to create a tailored strategy for your website. We ensure clear communication and understanding before development begins.",
  },
  {
    title: "Design & Prototyping",
    description:
      "We create wireframes and prototypes that align with your branding and user experience goals. Feedback is integrated early to avoid costly changes later.",
  },
  {
    title: "Development & Implementation",
    description:
      "Our developers bring your vision to life using clean code and scalable architecture, with a focus on performance, accessibility, and modern tech stacks.",
  },
  {
    title: "Testing & Optimization",
    description:
      "We rigorously test functionality, performance, and responsiveness. Our QA ensures your site works seamlessly across devices and browsers.",
  },
  {
    title: "Launch & Support",
    description:
      "We deploy your site with best practices and provide ongoing maintenance, performance monitoring, and support so you can scale with confidence.",
  },
]

const Timeline = () => {
  const containerRef = useRef(null)
  const [lineHeight, setLineHeight] = useState(0)
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([])

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current as HTMLElement | null
      if (!container) return
    
      const scrollTop = window.scrollY
      const containerTop = container.offsetTop
      const distanceScrolled = scrollTop + window.innerHeight / 2 - containerTop
    
      // Limit sampai titik tengah step terakhir
      const stepElements = container.querySelectorAll(".timeline-step")
      const lastStep = stepElements[stepElements.length - 1] as HTMLElement
      const lastStepMiddle = lastStep.offsetTop + lastStep.offsetHeight / 2
    
      const clampedHeight = Math.min(Math.max(distanceScrolled, 0), lastStepMiddle)
      setLineHeight(clampedHeight)
    
      const newVisibleIndexes: number[] = []
      stepElements.forEach((step, index) => {
        const stepRect = step.getBoundingClientRect()
        const isVisible = stepRect.top < window.innerHeight - 100 && stepRect.bottom > 100
        if (isVisible) newVisibleIndexes.push(index)
      })
      setVisibleIndexes(newVisibleIndexes)
    }
    

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32"
    >
      <div className="relative grid grid-cols-[30px_1fr] gap-6">
        {/* Vertical Timeline Line */}
        <div className="relative">
          <div
            className="absolute left-1/2  top-0 w-1 bg-black rounded-full transition-all duration-300"
            style={{ height: `${lineHeight}px`, transform: "translateX(-50%)" }}
          />
        </div>

        {/* Timeline Content */}
        <div className="flex flex-col space-y-20">
          {steps.map((step, index) => {
            const isVisible = visibleIndexes.includes(index)
            return (
              <div
                key={index}
                className={`timeline-step relative flex items-start space-x-4 transition-all duration-500 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >

                {/* Step Content */}
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3">
                    {step.title}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Timeline
