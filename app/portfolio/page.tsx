"use client";
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getPortfolioProjects } from "@/lib/api"
import PortfolioSection from "@/components/portfolio-section"
import Pricing from "../../components/pricing"
import TestimonialSection from "@/components/testimonial-section"
import { CallToAction } from "@/components/CTA"
import { ContactSection } from "@/components/ContactSection"

export default async function PortfolioPage() {
 
  
const projects = [
  { title: "Project title", role: "UI, Art direction", img: "/services/image.png" },
  { title: "Project title", role: "B. Art direction", img: "/services/image.png" },
  { title: "Project title", role: "UI, Art direction", img: "/services/image.png" },
  { title: "Project title", role: "UI, Art direction", img: "/services/image.png" },
  { title: "Project title", role: "UI, Art direction", img: "/services/image.png" },
  { title: "Project title", role: "B. Art direction", img: "/services/image.png" },
];

  return (
    <div className="flex flex-col min-h-screen">
      <PortfolioSection />
      {/* Latest Work */}
      

    <section className="py-16 w-full md:px-12 lg:px-20 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Latest work</h2>
      <div className="grid grid-cols-1 mx-auto max-w-7xl  sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="space-y-2">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-64 object-cover rounded-xl shadow-md"
            />
            <div className="text-sm font-semibold">{project.title}</div>
            <div className="text-xs text-gray-500">{project.role}</div>
          </div>
        ))}
      </div>
    </section>



      <Pricing />
      <TestimonialSection />
      <CallToAction />
      <ContactSection />


      
    </div>
  )
}
