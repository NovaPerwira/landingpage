import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { verifyAuth } from "@/lib/auth-actions"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Home, ImageIcon } from "lucide-react"
import AdminStats from "@/components/admin/stats"
import RecentActivity from "@/components/admin/recent-activity"

export default async function AdminDashboard() {
  // This will redirect to login if not authenticated
  const user = await verifyAuth()

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button variant="outline">Refresh Data</Button>
      </div>

      <AdminStats />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Content Overview</CardTitle>
            <CardDescription>Summary of your website content</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="pages">
              <TabsList className="mb-4">
                <TabsTrigger value="pages">Pages</TabsTrigger>
                <TabsTrigger value="blog">Blog Posts</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              </TabsList>
              <TabsContent value="pages">
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <div className="flex items-center">
                      <Home className="mr-2 h-4 w-4 text-gray-500" />
                      <span>Home</span>
                    </div>
                    <div className="text-sm text-gray-500">Last updated: 2 days ago</div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <div className="flex items-center">
                      <FileText className="mr-2 h-4 w-4 text-gray-500" />
                      <span>About</span>
                    </div>
                    <div className="text-sm text-gray-500">Last updated: 1 week ago</div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <div className="flex items-center">
                      <ImageIcon className="mr-2 h-4 w-4 text-gray-500" />
                      <span>Portfolio</span>
                    </div>
                    <div className="text-sm text-gray-500">Last updated: 3 days ago</div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="blog">
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <div className="flex items-center">
                      <FileText className="mr-2 h-4 w-4 text-gray-500" />
                      <span>10 Web Design Trends for 2023</span>
                    </div>
                    <div className="text-sm text-gray-500">Published: 1 day ago</div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <div className="flex items-center">
                      <FileText className="mr-2 h-4 w-4 text-gray-500" />
                      <span>How to Choose the Right CMS</span>
                    </div>
                    <div className="text-sm text-gray-500">Published: 1 week ago</div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="portfolio">
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <div className="flex items-center">
                      <ImageIcon className="mr-2 h-4 w-4 text-gray-500" />
                      <span>E-commerce Redesign</span>
                    </div>
                    <div className="text-sm text-gray-500">Added: 2 weeks ago</div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <div className="flex items-center">
                      <ImageIcon className="mr-2 h-4 w-4 text-gray-500" />
                      <span>Corporate Website</span>
                    </div>
                    <div className="text-sm text-gray-500">Added: 1 month ago</div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <RecentActivity />
      </div>
    </div>
  )
}
