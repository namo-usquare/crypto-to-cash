"use client"

import Link from "next/link"
import { ConnectWallet } from "./ConnectWallet"
import { usePathname } from "next/navigation"
import { Home, Info, MessageSquare, HelpCircle } from "lucide-react"
import { useEffect } from "react"

/**
 * Navbar component that handles both desktop and mobile navigation
 * @returns JSX.Element
 */
export const Navbar = () => {
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "#how-it-works", label: "How it works", icon: Info },
    { href: "#testimonials", label: "Testimonials", icon: MessageSquare },
    { href: "#faqs", label: "FAQs", icon: HelpCircle },
  ]

  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      
      if (link && link.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const targetId = link.getAttribute('href')?.substring(1)
        const targetElement = document.getElementById(targetId || '')
        
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    if (href.startsWith('#')) {
      return window.location.hash === href
    }
    return pathname === href
  }

  return (
    <>
      {/* Desktop Navigation */}
      <header className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
        <nav className="mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-white hover:text-green-400 transition-colors ${
                  isActive(link.href) ? 'text-green-400' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <ConnectWallet />
        </nav>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-t border-gray-800 z-50">
        <div className="flex justify-around items-center py-2">
          {navLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-col items-center p-2 ${
                  isActive(link.href) ? "text-green-400" : "text-white"
                } hover:text-green-400 transition-colors`}
              >
                <Icon size={20} />
                <span className="text-xs mt-1">{link.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Mobile Connect Wallet Button - Fixed at top */}
      <div className="md:hidden fixed top-0 right-0 p-4 z-50">
        <ConnectWallet />
      </div>
    </>
  )
} 