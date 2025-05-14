import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"
import { getBlogPosts, getBlogCategories } from "@/lib/api"

export default async function BlogPage() {
  const posts = await getBlogPosts()
  const categories = await getBlogCategories()

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-gray-900 to-black">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white mb-6">Our Blog</h1>
            <p className="text-gray-300 md:text-xl mb-8">
              Explore the latest insights, research, and breakthroughs in technology and healthcare.
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-3 pl-12 rounded-full bg-white text-gray-800 border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="w-full py-6 bg-white border-b border-gray-200">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button variant="outline" className="text-gray-800 border-gray-800 hover:bg-gray-100 rounded-full">
              All
            </Button>
            {categories.map((category, index) => (
              <Button
                key={index}
                variant="outline"
                className="text-gray-600 border-gray-300 hover:bg-gray-100 hover:text-gray-800 rounded-full"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter mb-8 text-gray-800">Featured Post</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="relative h-[300px] md:h-full">
              <Image
                src="/images/blog/ai-healthcare.jpg"
                alt="The Rise of Artificial Intelligence in Healthcare"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-medium px-2 py-1 rounded bg-blue-100 text-blue-800">Healthcare</span>
                <span className="text-xs text-gray-500">8 min read</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                The Rise of Artificial Intelligence in Healthcare
              </h3>
              <p className="text-gray-600 mb-6">
                Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping
                patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in
                healthcare, from revolutionizing diagnostic accuracy to enhancing patient outcomes.
              </p>
              <div className="flex items-center gap-4">
                <Link href="/blog/the-rise-of-artificial-intelligence-in-healthcare">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">Read Article</Button>
                </Link>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <span className="text-orange-500">❤️</span>
                    <span className="text-sm text-gray-500">24.5k</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-400">👁️</span>
                    <span className="text-sm text-gray-500">52k</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-400">💬</span>
                    <span className="text-sm text-gray-500">20k</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 className="text-2xl font-bold tracking-tighter text-gray-800">Latest Articles</h2>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full text-gray-800 border-gray-300 hover:bg-gray-100"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full text-gray-800 border-gray-300 hover:bg-gray-100"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`} className="group">
                <div className="bg-white rounded-lg overflow-hidden transition-transform duration-300 group-hover:translate-y-[-5px] border border-gray-200 shadow-sm">
                  <div className="relative h-48">
                    <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium px-2 py-1 rounded bg-blue-100 text-blue-800">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.readingTime} min read</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-2 mt-4">
                      <div className="flex items-center gap-1">
                        <span className="text-orange-500">❤️</span>
                        <span className="text-xs text-gray-500">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-gray-400">👁️</span>
                        <span className="text-xs text-gray-500">{post.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline" className="text-gray-800 border-gray-300 hover:bg-gray-100">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
