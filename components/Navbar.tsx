"use client"

import Link from "next/link"
import { ConnectWallet } from "./ConnectWallet"
import { usePathname } from "next/navigation"
import { Home, Info, MessageSquare, HelpCircle, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

/**
 * Navbar component that handles both desktop and mobile navigation with hamburger menu
 * @returns JSX.Element
 */
export const Navbar = () => {
  const pathname = usePathname()
  const [currentHash, setCurrentHash] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
          // Close mobile menu after clicking a link
          setIsMobileMenuOpen(false)
        }
      }
    }

    // Update current hash when it changes
    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
    }

    // Set initial hash
    setCurrentHash(window.location.hash)

    document.addEventListener('click', handleAnchorClick)
    window.addEventListener('hashchange', handleHashChange)
    
    return () => {
      document.removeEventListener('click', handleAnchorClick)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    if (href.startsWith('#')) {
      return currentHash === href
    }
    return pathname === href
  }

  return (
    <>
      {/* Desktop Navigation */}
      <header className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
        <nav className=" flex items-center justify-between">
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
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

          {/* Mobile Hamburger Menu Button */}
          <button
            className="md:hidden text-white hover:text-green-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ConnectWallet />
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40 pt-16">
          <div className="flex flex-col items-center gap-6 p-6">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 text-lg ${
                    isActive(link.href) ? "text-green-400" : "text-white"
                  } hover:text-green-400 transition-colors`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon size={20} />
                  <span>{link.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
} 