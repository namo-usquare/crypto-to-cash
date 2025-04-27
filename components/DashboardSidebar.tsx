"use client"

import * as React from "react"
import { LayoutDashboard, RefreshCcw, Truck, Clock, User, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar"

interface NavItem {
  icon: React.ElementType
  label: string
  href: string
}

const navItems: NavItem[] = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: RefreshCcw,
    label: "Exchange",
    href: "/exchange",
  },
  {
    icon: Truck,
    label: "Delivery",
    href: "/delivery",
  },
  {
    icon: Clock,
    label: "History",
    href: "/history",
  },
  {
    icon: User,
    label: "Profile",
    href: "/profile",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/settings",
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <SidebarProvider>
      <Sidebar className="fixed left-28 top-[60%] -translate-y-1/2 h-fit w-20 rounded-full border-0 shadow-none bg-transparent">
        <div className="absolute inset-0 rounded-full bg-[#0f1114] border-0 shadow-[0_0_15px_rgba(72,255,130,0.5)] overflow-hidden">
          <div className="absolute inset-0 rounded-full border border-[#48ff82]/30"></div>
        </div>
        <SidebarContent className="relative z-10 flex flex-col items-center justify-center h-full py-0 gap-2">
          <SidebarMenu className="flex flex-col items-center gap-4 w-full">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
              return (
                <SidebarMenuItem key={item.label} className="flex justify-center">
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      "flex flex-col items-center justify-center gap-1 w-16 m-0 p-0 h-16 rounded-full hover:bg-transparent",
                      isActive ? "text-black" : "text-white hover:text-[#48ff82]",
                    )}
                  >
                    <a href={item.href} className="relative flex flex-col items-center">
                      {isActive && (
                        <div className="absolute inset-0 rounded-lg bg-[#48ff82] shadow-[0_0_10px_rgba(72,255,130,0.7)]"></div>
                      )}
                      <div
                        className={cn(
                          "relative z-10 flex flex-col items-center justify-center gap-1",
                          isActive ? "text-black" : "text-white",
                        )}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="text-[8px] font-medium">{item.label}</span>
                      </div>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}
