"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ConnectWallet } from "./ConnectWallet"

/**
 * Navbar component that handles both desktop and mobile navigation
 * @returns JSX.Element
 */
export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "#how-it-works", label: "How it works" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faqs", label: "FAQs" },
  ]

  return (
    <header className="z-10 fixed w-full bg-black">
      <nav className="mx-auto px-4 sm:px-8 py-4 flex justify-between items-center relative">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-green-400 transition-colors z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-green-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-black/95 md:hidden z-40 pt-20"
              style={{ height: '100vh', width: '100vw' }}
            >
              <div className="flex flex-col gap-6 p-6 h-full">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white text-xl hover:text-green-400 transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4">
                  <ConnectWallet />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Connect Wallet */}
        <div className="hidden md:block">
          <ConnectWallet />
        </div>
      </nav>
    </header>
  )
} 