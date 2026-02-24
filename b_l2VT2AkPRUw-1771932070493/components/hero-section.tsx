"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Video / Cinematic Background */}
      <div className="absolute inset-0">
        {/* Dark cinematic gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.08)_0%,_rgba(5,5,5,0.95)_70%,_rgba(5,5,5,1)_100%)] z-10" />
        <div className="absolute inset-0 bg-background/70 z-10" />

        {/* Animated particles / star field effect */}
        <div className="absolute inset-0 z-5">
          <div
            className="absolute h-[1px] w-[1px] rounded-full bg-primary/60"
            style={{ top: "20%", left: "30%", animation: "float 6s ease-in-out infinite", boxShadow: "0 0 6px rgba(201,168,76,0.4)" }}
          />
          <div
            className="absolute h-[1px] w-[1px] rounded-full bg-primary/40"
            style={{ top: "60%", left: "70%", animation: "float 8s ease-in-out infinite 1s", boxShadow: "0 0 6px rgba(201,168,76,0.3)" }}
          />
          <div
            className="absolute h-[1px] w-[1px] rounded-full bg-primary/50"
            style={{ top: "40%", left: "50%", animation: "float 7s ease-in-out infinite 2s", boxShadow: "0 0 6px rgba(201,168,76,0.35)" }}
          />
          <div
            className="absolute h-[2px] w-[2px] rounded-full bg-primary/30"
            style={{ top: "80%", left: "20%", animation: "float 9s ease-in-out infinite 0.5s", boxShadow: "0 0 8px rgba(201,168,76,0.2)" }}
          />
          <div
            className="absolute h-[1px] w-[1px] rounded-full bg-primary/50"
            style={{ top: "15%", left: "80%", animation: "float 5s ease-in-out infinite 3s", boxShadow: "0 0 6px rgba(201,168,76,0.3)" }}
          />
        </div>

        {/* Video upload notice */}
        <div className="absolute inset-0 z-6 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 rounded-lg border border-border/30 bg-card/40 px-6 py-4 backdrop-blur-sm">
            <svg className="h-8 w-8 text-muted-foreground/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="23 7 16 12 23 17 23 7" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
            <p className="text-center text-xs text-muted-foreground/60">
              Cinematic background video could not be uploaded due to file size limitations
            </p>
          </div>
        </div>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 z-5 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-5xl px-6 text-center">
        {/* Overline */}
        <div
          className={`mb-8 transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/5 px-5 py-2 text-[10px] font-medium uppercase tracking-[0.3em] text-primary">
            Temporal Luxury Since 2094
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className={`font-serif text-5xl font-medium leading-[1.1] tracking-tight text-foreground transition-all duration-1000 delay-200 ease-out sm:text-6xl md:text-7xl lg:text-8xl ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <span className="block text-balance">History is your</span>
          <span className="block text-balance">
            next{" "}
            <span className="relative inline-block text-primary">
              destination
              <span
                className="absolute -bottom-2 left-0 h-[1px] w-full"
                style={{
                  background: "linear-gradient(90deg, transparent, #c9a84c, transparent)",
                }}
              />
            </span>
          </span>
        </h1>

        {/* Subheading */}
        <p
          className={`mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground transition-all duration-1000 delay-500 ease-out md:text-lg ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Step beyond the boundaries of time. Immerse yourself in civilization&apos;s
          most extraordinary moments with unparalleled luxury and precision.
        </p>

        {/* CTA Buttons */}
        <div
          className={`mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-1000 delay-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <a
            href="#destinations"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-3.5 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
          >
            <span className="relative z-10">Explore Destinations</span>
            <span
              className="absolute inset-0 -translate-x-full bg-gold-light/20 transition-transform duration-500 group-hover:translate-x-0"
            />
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-medium uppercase tracking-widest text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-foreground"
          >
            How It Works
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <a
          href="#destinations"
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          aria-label="Scroll to destinations"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="h-4 w-4" style={{ animation: "float 2s ease-in-out infinite" }} />
        </a>
      </div>
    </section>
  )
}
