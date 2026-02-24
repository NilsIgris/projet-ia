"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Quiz", href: "#quiz" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-background/60 backdrop-blur-xl border-b border-border/50" />
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 group-hover:border-primary transition-colors duration-300">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1" />
              <line x1="8" y1="2" x2="8" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="8" y1="8" x2="12" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-serif text-lg tracking-wider text-foreground">
            CHRONOS
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm tracking-widest uppercase text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#destinations"
            className="hidden rounded-full border border-primary/40 bg-primary/10 px-6 py-2 text-xs font-medium uppercase tracking-widest text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground md:inline-block"
          >
            Book a Voyage
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="relative border-b border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#destinations"
              onClick={() => setIsOpen(false)}
              className="mt-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-center text-xs font-medium uppercase tracking-widest text-primary"
            >
              Book a Voyage
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
