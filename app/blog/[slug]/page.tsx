import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { getBlogPost, getRelatedPosts } from "@/lib/api"
import TableOfContents from "@/components/table-of-contents"
import BlogMetadata from "@/components/blog-metadata"
import SocialShareButtons from "@/components/social-share-buttons"

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)
  const relatedPosts = await getRelatedPosts(params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="w-full relative">
        <div className="relative h-[300px] md:h-[400px]">
          <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{post.title}</h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="w-full py-8 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <SocialShareButtons likes={post.likes} views={post.views} comments={post.comments} />
              </div>

              {/* Article Introduction */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Introduction</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.introduction}</p>
                <p className="text-gray-600 leading-relaxed">{post.content.substring(0, 500)}...</p>
              </div>

              {/* Article Sections */}
              {post.sections.map((section, index) => (
                <div key={index} className="mb-8" id={section.id}>
                  <h2 className="text-xl font-bold text-gray-800 mb-4">{section.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </div>
              ))}

              {/* Conclusion */}
              <div className="mb-8" id="conclusion">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Conclusion</h2>
                <p className="text-gray-600 leading-relaxed">{post.conclusion}</p>
              </div>

              {/* Read Full Button */}
              <div className="flex justify-center mb-8">
                <Button className="bg-gray-900 text-white hover:bg-gray-800 flex items-center gap-2 px-6 py-2 rounded">
                  Read Full Blog
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-1">
              {/* Article Metadata */}
              <BlogMetadata
                date={post.date}
                category={post.category}
                readingTime={post.readingTime}
                author={post.author}
              />

              {/* Table of Contents */}
              <TableOfContents sections={post.sections} />
            </div>
          </div>
        </div>
      </section>

      {/* Similar News */}
      <section className="w-full py-12 md:py-16 bg-gray-50 border-t border-gray-200">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 className="text-2xl font-bold tracking-tighter text-gray-800">Similar News</h2>
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 flex items-center mt-4 md:mt-0 font-medium">
              View All News
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost, index) => (
              <Link key={index} href={`/blog/${relatedPost.slug}`} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.coverImage || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">{relatedPost.category}</div>
                    <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-1">
                        <span className="text-orange-500">❤️</span>
                        <span className="text-xs text-gray-500">{relatedPost.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-gray-400">👁️</span>
                        <span className="text-xs text-gray-500">{relatedPost.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
