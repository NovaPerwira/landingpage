import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { getServices } from "@/lib/api"
import HeroSection from "../../components/services/HeroSection";
import OurService from "../../components/OurService"
import Pricing from "@/components/Pricing"
import TestimonialSection from "@/components/testimonial-section"
import { CallToAction } from "@/components/CTA"
export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <OurService />
      < Pricing />
      < CallToAction />
      < TestimonialSection/>
      
    </div>
  )
}