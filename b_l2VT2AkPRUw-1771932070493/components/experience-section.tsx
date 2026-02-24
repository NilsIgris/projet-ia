"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Compass, Clock, Gem } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Temporal Safety",
    description:
      "Our proprietary chrono-shielding technology ensures you remain completely protected while experiencing history firsthand.",
  },
  {
    icon: Compass,
    title: "Expert Historians",
    description:
      "Each journey is guided by PhD-level temporal historians who have devoted their lives to understanding their chosen era.",
  },
  {
    icon: Clock,
    title: "Precision Travel",
    description:
      "Arrive at the exact moment in time you desire. Our quantum-locked coordinates guarantee arrival accuracy to the second.",
  },
  {
    icon: Gem,
    title: "Luxury Throughout",
    description:
      "From era-appropriate haute couture to period-authentic fine dining, every detail is crafted for the discerning traveler.",
  },
]

export function ExperienceSection() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setVisibleItems((prev) => new Set(prev).add(index))
          }
        })
      },
      { threshold: 0.3 }
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="relative py-24 lg:py-32">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,168,76,0.03)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center lg:mb-20">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-primary">
            The Chronos Difference
          </span>
          <h2 className="mt-4 font-serif text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl text-balance">
            Travel Beyond Time
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We don&apos;t just transport you through time. We craft an experience
            worthy of the moments you&apos;ll witness.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            const isVisible = visibleItems.has(i)
            return (
              <div
                key={feature.title}
                ref={(el) => { itemRefs.current[i] = el }}
                data-index={i}
                className={`group relative rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-700 ease-out hover:border-primary/30 lg:p-10 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Glassmorphism hover overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
