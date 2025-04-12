"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { logout } from "@/lib/auth-actions"
import {
  BarChart,
  FileText,
  ImageIcon,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Settings,
  Users,
  Menu,
  X,
} from "lucide-react"
import { motion } from "framer-motion"

export default function AdminSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Content", href: "/admin/content", icon: FileText },
    { name: "Media", href: "/admin/media", icon: ImageIcon },
    { name: "Comments", href: "/admin/comments", icon: MessageSquare },
    { name: "Analytics", href: "/admin/analytics", icon: BarChart },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ]

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  return (
    <>
      <button onClick={toggleSidebar} className="fixed top-4 left-4 z-50 md:hidden bg-white p-2 rounded-md shadow-md">
        {collapsed ? <Menu size={20} /> : <X size={20} />}
      </button>

      <motion.aside
        initial={{ width: "250px" }}
        animate={{ width: collapsed ? "0px" : "250px" }}
        transition={{ duration: 0.3 }}
        className={`bg-black text-white h-screen fixed md:relative z-40 ${collapsed ? "-ml-[250px] md:ml-0" : "ml-0"}`}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                    isActive ? "bg-white/10 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>
        </div>
        <div className="absolute bottom-0 w-full p-6">
          <form action={logout}>
            <Button
              type="submit"
              variant="outline"
              className="w-full border-gray-700 text-gray-300 hover:text-white hover:bg-white/5 flex items-center justify-center"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </form>
        </div>
      </motion.aside>
    </>
  )
}
