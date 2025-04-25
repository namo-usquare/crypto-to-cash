import type { ReactNode } from "react"
import {DashboardSidebar} from "@/components/DashboardSidebar"
import Header from "@/components/header"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#0f1219] bg-grid-pattern text-white">
      <Header />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
      <div className="fixed bottom-6 right-6">
        <button className="flex items-center justify-center w-14 h-14 bg-[#22c55e] rounded-full text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
        <span className="block text-center mt-1 text-xs">Support</span>
      </div>
    </div>
  )
}
