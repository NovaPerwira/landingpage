import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, ImageIcon, MessageSquare, User } from "lucide-react"

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: "post",
      action: "New blog post published",
      time: "10 minutes ago",
      icon: FileText,
    },
    {
      id: 2,
      type: "media",
      action: "New image uploaded",
      time: "1 hour ago",
      icon: ImageIcon,
    },
    {
      id: 3,
      type: "comment",
      action: "New comment received",
      time: "3 hours ago",
      icon: MessageSquare,
    },
    {
      id: 4,
      type: "user",
      action: "New user registered",
      time: "5 hours ago",
      icon: User,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions on your website</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon
            return (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className="bg-gray-100 p-2 rounded-full">
                  <Icon className="h-4 w-4 text-gray-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
