"use client"

import { useLenis } from "lenis/react"

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
]

export function Navbar() {
  const lenis = useLenis()

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    if (href === "/") {
      // Scroll to top for logo
      if (lenis) {
        lenis.scrollTo(0, {
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        })
      }
    } else {
      // Scroll to section for other links
      const targetId = href.replace("#", "")
      const targetElement = document.getElementById(targetId)
      
      if (targetElement && lenis) {
        lenis.scrollTo(targetElement, {
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          offset: -80,
        })
      }
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-2 sm:p-4">
      <nav className="max-w-5xl mx-auto flex items-center justify-between h-12 px-3 sm:px-6 rounded-full bg-white/80 border border-green-200/50 backdrop-blur-md shadow-sm">
        <a 
          href="/" 
          onClick={(e) => handleSmoothScroll(e, "/")}
          className="font-display text-base sm:text-lg font-semibold text-slate-900 cursor-pointer"
        >
          ExpenseAI
        </a>
        <div className="hidden sm:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="px-4 py-1.5 text-sm rounded-full transition-colors text-slate-600 hover:text-green-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={(e) => handleSmoothScroll(e, "#pricing")}
            className="ml-2 px-4 py-1.5 text-sm rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition-colors"
          >
            Get Started
          </a>
        </div>
        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center gap-2">
          <a
            href="#pricing"
            onClick={(e) => handleSmoothScroll(e, "#pricing")}
            className="px-3 py-1 text-xs rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition-colors"
          >
            Get App
          </a>
        </div>
      </nav>
    </header>
  )
}
