"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, BarChart2, Shield, Users, CreditCard, Settings, LogOut } from "lucide-react"

const navItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />,
    beta: false,
  },
  {
    name: "Campaigns",
    href: "/dashboard/campaigns",
    icon: <BarChart2 className="h-5 w-5" />,
    beta: true,
  },
  {
    name: "AI Validation",
    href: "/dashboard/validation",
    icon: <Shield className="h-5 w-5" />,
    beta: false,
  },
  {
    name: "Community",
    href: "/dashboard/community",
    icon: <Users className="h-5 w-5" />,
    beta: false,
  },
  {
    name: "Payments",
    href: "/dashboard/payments",
    icon: <CreditCard className="h-5 w-5" />,
    beta: false,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: <Settings className="h-5 w-5" />,
    beta: false,
  },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-gray-900 border-r border-gray-800 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <Link href="/" className="flex flex-col">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Acho.AI
          </h1>
          <span className="text-xs text-gray-400">Dashboard</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-white"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  <span className={isActive ? "text-purple-400" : ""}>{item.icon}</span>
                  <span>{item.name}</span>
                  {item.beta && (
                    <span className="text-xs px-1.5 py-0.5 bg-blue-500/20 text-blue-400 rounded-full ml-1">Beta</span>
                  )}
                  {isActive && (
                    <div className="ml-auto h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-600" />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-800">
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 w-full transition-colors">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}

