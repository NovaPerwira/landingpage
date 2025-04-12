import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getPortfolioProjects } from "@/lib/api"

export default async function PortfolioPage() {
  const projects = await getPortfolioProjects()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-black to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white mb-6">Our Portfolio</h1>
            <p className="text-gray-400 md:text-xl mb-8">
              Explore our innovative projects and solutions across various technology domains.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filters */}
      <section className="w-full py-6 bg-gray-950 border-y border-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button variant="outline" className="text-white border-white hover:bg-white/10 rounded-full">
              All Projects
            </Button>
            <Button
              variant="outline"
              className="text-gray-400 border-gray-700 hover:bg-gray-800 hover:text-white rounded-full"
            >
              AI & Machine Learning
            </Button>
            <Button
              variant="outline"
              className="text-gray-400 border-gray-700 hover:bg-gray-800 hover:text-white rounded-full"
            >
              Healthcare
            </Button>
            <Button
              variant="outline"
              className="text-gray-400 border-gray-700 hover:bg-gray-800 hover:text-white rounded-full"
            >
              Quantum Computing
            </Button>
            <Button
              variant="outline"
              className="text-gray-400 border-gray-700 hover:bg-gray-800 hover:text-white rounded-full"
            >
              Robotics
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="w-full py-12 md:py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Link key={index} href={`/portfolio/${project.slug}`} className="group">
                <div className="bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 group-hover:translate-y-[-5px]">
                  <div className="relative h-64">
                    <Image
                      src={project.coverImage || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-6">
                        <Button className="bg-blue-600 text-white hover:bg-blue-700">View Project</Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium px-2 py-1 rounded bg-blue-900 text-blue-300">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 bg-blue-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold tracking-tighter text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-blue-100 mb-8">
              Let's collaborate to bring your innovative ideas to life with our cutting-edge technology solutions.
            </p>
            <Button className="bg-white text-blue-900 hover:bg-gray-100">Contact Us Today</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
