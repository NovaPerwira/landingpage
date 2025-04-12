import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter">Our Services</h1>
              <p className="text-gray-500">
                We offer a range of services to help your business succeed. From web design to marketing, we've got you
                covered.
              </p>
              <Button className="bg-black text-white hover:bg-gray-800">Learn More</Button>
            </div>
            <div className="relative h-[300px] lg:h-[400px]">
              <Image src="/images/services-hero.png" alt="Services Hero" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Key Features</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Web Design</h3>
              <p className="text-gray-500">
                We create stunning websites that are optimized for performance and user experience.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Marketing</h3>
              <p className="text-gray-500">
                Our marketing strategies will help you reach your target audience and grow your business.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">SEO Optimization</h3>
              <p className="text-gray-500">
                Improve your search engine ranking and drive more traffic to your website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Pricing Plans</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Basic</h3>
              <p className="text-gray-500 mb-4">Perfect for small businesses.</p>
              <p className="text-2xl font-bold">$99/month</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Standard</h3>
              <p className="text-gray-500 mb-4">Ideal for growing businesses.</p>
              <p className="text-2xl font-bold">$199/month</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Premium</h3>
              <p className="text-gray-500 mb-4">For established businesses.</p>
              <p className="text-2xl font-bold">$299/month</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Let's make things happen</h2>
              <p className="text-gray-500">
                Discover the perfect design solution for your business. Our team of experts is ready to help you create
                stunning visuals that drive results.
              </p>
              <Button className="bg-black text-white hover:bg-gray-800">Get your free proposal</Button>
            </div>
            <div className="relative h-[200px] lg:h-[250px]">
              <Image src="/images/cta-illustration.png" alt="CTA Illustration" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Contact Us</h2>
          <p className="text-gray-500 text-center">
            Have questions? Contact us today to learn more about our services.
          </p>
        </div>
      </section>
    </main>
  )
}
