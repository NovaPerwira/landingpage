import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { verifyAuth } from "@/lib/auth-actions"
import ContentEditor from "@/components/admin/content-editor"

export default async function ContentManagement() {
  // This will redirect to login if not authenticated
  await verifyAuth()

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Content Management</h1>
        <Button className="bg-black text-white">Add New Content</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Edit Website Content</CardTitle>
          <CardDescription>Update content across your website</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="home">
            <TabsList className="mb-4">
              <TabsTrigger value="home">Home Page</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>

            <TabsContent value="home">
              <ContentEditor
                pageId="home"
                initialContent={{
                  heroTitle: "Professional Web Design Services",
                  heroDescription:
                    "Creative solutions for your business needs. From concept to launch, we deliver stunning websites that drive results.",
                  servicesTitle: "Our Services",
                  servicesDescription:
                    "We offer a comprehensive range of web design and development services to help your business succeed online.",
                }}
              />
            </TabsContent>

            <TabsContent value="about">
              <ContentEditor
                pageId="about"
                initialContent={{
                  pageTitle: "About Us",
                  pageDescription: "Learn more about our company and our mission.",
                  companyHistory:
                    "Founded in 2010, we have been providing exceptional web design services for over a decade.",
                  teamDescription:
                    "Our team of experienced designers and developers are dedicated to creating beautiful, functional websites.",
                }}
              />
            </TabsContent>

            <TabsContent value="services">
              <ContentEditor
                pageId="services"
                initialContent={{
                  pageTitle: "Our Services",
                  pageDescription: "Explore our range of web design and development services.",
                  servicesList: JSON.stringify(
                    [
                      {
                        title: "Web Design",
                        description: "Custom website design tailored to your brand and business goals.",
                      },
                      {
                        title: "E-Commerce",
                        description: "Online stores with secure payment processing and inventory management.",
                      },
                      {
                        title: "SEO",
                        description: "Search engine optimization to improve your website's visibility.",
                      },
                    ],
                    null,
                    2,
                  ),
                }}
              />
            </TabsContent>

            <TabsContent value="portfolio">
              <ContentEditor
                pageId="portfolio"
                initialContent={{
                  pageTitle: "Our Portfolio",
                  pageDescription: "View our recent projects and see what we can do for you.",
                  portfolioItems: JSON.stringify(
                    [
                      {
                        title: "E-Commerce Website",
                        description: "A fully-featured online store for a fashion retailer.",
                        image: "/images/portfolio/portfolio-1.jpg",
                      },
                      {
                        title: "Corporate Website",
                        description: "A professional website for a financial services company.",
                        image: "/images/portfolio/portfolio-2.jpg",
                      },
                    ],
                    null,
                    2,
                  ),
                }}
              />
            </TabsContent>

            <TabsContent value="contact">
              <ContentEditor
                pageId="contact"
                initialContent={{
                  pageTitle: "Contact Us",
                  pageDescription: "Get in touch with our team to discuss your project.",
                  address: "123 Web Design St, Digital City, 10001",
                  email: "info@example.com",
                  phone: "(123) 456-7890",
                }}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
