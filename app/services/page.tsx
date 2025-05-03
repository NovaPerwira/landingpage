import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { getServices } from "@/lib/api"
import HeroSection from "../../components/services/HeroSection";
import OurService from "../../components/OurService"


export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <OurService />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-black to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Innovative Technology Solutions
              </h1>
              <p className="text-gray-400 md:text-xl">
                We provide cutting-edge services across AI, healthcare technology, quantum computing, and more to help
                businesses innovate and grow.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-blue-600 text-white hover:bg-blue-700">Explore Our Services</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[400px]">
              <Image
                src="/images/HeroService.png"
                alt="Technology Services"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-12 md:py-16 bg-black">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter mb-8 text-white text-center">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <Link href={`/services/${service.slug}`}>
                  <Button variant="outline" className="text-blue-400 border-blue-900 hover:bg-blue-900/30">
                    Learn More
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-16 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative h-[300px] lg:h-[400px]">
              <Image src="/images/why-choose-us.png" alt="Why Choose Us" fill className="object-cover rounded-lg" />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter text-white">Why Choose Us</h2>
              <p className="text-gray-400">
                We combine cutting-edge technology with industry expertise to deliver solutions that drive innovation
                and growth.
              </p>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-900 p-1 mt-1">
                      <Check className="h-3 w-3 text-blue-300" />
                    </div>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-16 bg-black">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter mb-8 text-white text-center">What Our Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 bg-blue-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold tracking-tighter text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-blue-100 mb-8">
              Contact us today to discuss how our technology solutions can help you achieve your goals.
            </p>
            <Button className="bg-white text-blue-900 hover:bg-gray-100">Get Started</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

const benefits = [
  "Expert team with deep industry knowledge",
  "Cutting-edge technology and innovative solutions",
  "Customized approach tailored to your specific needs",
  "Proven track record of successful implementations",
  "Ongoing support and maintenance",
  "Commitment to excellence and client satisfaction",
]

const testimonials = [
  {
    quote:
      "Working with Nova Tech transformed our healthcare operations. Their AI solutions improved our diagnostic accuracy by 40%.",
    name: "Dr. Sarah Johnson",
    role: "Medical Director, HealthFirst",
  },
  {
    quote:
      "The quantum computing solutions provided by Nova Tech gave us a competitive edge in data analysis and predictive modeling.",
    name: "Michael Chen",
    role: "CTO, DataSphere",
  },
  {
    quote:
      "Nova Tech's cybersecurity services protected our sensitive data and strengthened our overall security posture.",
    name: "Jennifer Williams",
    role: "CISO, SecureTech",
  },
]
