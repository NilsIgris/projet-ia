"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Calendar, MapPin, Clock } from "lucide-react"

interface Destination {
  title: string
  era: string
  location: string
  duration: string
  description: string
  image: string
  price: string
  highlights: string[]
}

const destinations: Destination[] = [
  {
    title: "Paris 1889",
    era: "Belle Epoque",
    location: "Paris, France",
    duration: "3 Days",
    description:
      "Witness the unveiling of the Eiffel Tower at the World's Fair. Dine at the finest Parisian salons and walk the gaslit boulevards of the City of Light.",
    image: "/images/paris-1889.png",
    price: "48,000",
    highlights: ["Eiffel Tower Inauguration", "Moulin Rouge Opening", "Impressionist Studios"],
  },
  {
    title: "Cretaceous",
    era: "66 Million BCE",
    location: "Western Interior",
    duration: "24 Hours",
    description:
      "Experience Earth in its most primal form. Observe the magnificent creatures that ruled our planet from the safety of our temporal observation deck.",
    image: "/images/cretaceous.png",
    price: "124,000",
    highlights: ["T-Rex Encounter", "Volcanic Landscapes", "Primordial Forests"],
  },
  {
    title: "Florence 1504",
    era: "High Renaissance",
    location: "Florence, Italy",
    duration: "5 Days",
    description:
      "Walk alongside Leonardo and Michelangelo. Witness the creation of David and explore the workshops where the Renaissance was forged.",
    image: "/images/florence-1504.png",
    price: "72,000",
    highlights: ["Michelangelo's Studio", "Medici Court", "Da Vinci Workshop"],
  },
]

function DestinationCard({ destination, index }: { destination: Destination; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 200)
        }
      },
      { threshold: 0.2 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [index])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-700 ease-out cursor-pointer ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      } ${isHovered ? "border-primary/50" : ""}`}
      style={{
        animation: isHovered ? "glow-pulse 3s ease-in-out infinite" : "none",
      }}
    >
      {/* Hover glow follows cursor */}
      {isHovered && (
        <div
          className="pointer-events-none absolute z-10 h-64 w-64 rounded-full opacity-20 transition-opacity duration-300"
          style={{
            left: mousePos.x - 128,
            top: mousePos.y - 128,
            background: "radial-gradient(circle, rgba(201,168,76,0.3) 0%, transparent 70%)",
          }}
        />
      )}

      {/* Image */}
      <div className="relative h-56 overflow-hidden sm:h-64">
        <Image
          src={destination.image}
          alt={`${destination.title} - ${destination.era} time travel destination`}
          fill
          className={`object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />

        {/* Price Badge */}
        <div className="absolute right-4 top-4 z-10 rounded-full border border-primary/30 bg-background/80 px-4 py-1.5 backdrop-blur-md">
          <span className="text-xs font-medium tracking-wider text-primary">
            {"$"}{destination.price}
          </span>
        </div>

        {/* Era Badge */}
        <div className="absolute left-4 top-4 z-10 rounded-full bg-primary/10 px-3 py-1 backdrop-blur-md">
          <span className="text-[10px] font-medium uppercase tracking-widest text-primary">
            {destination.era}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col p-6">
        <h3 className="font-serif text-2xl font-medium text-foreground">
          {destination.title}
        </h3>

        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3 w-3 text-primary/70" />
            {destination.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3 w-3 text-primary/70" />
            {destination.duration}
          </span>
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {destination.description}
        </p>

        {/* Highlights */}
        <div className="mt-5 flex flex-wrap gap-2">
          {destination.highlights.map((h) => (
            <span
              key={h}
              className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-[10px] uppercase tracking-wider text-muted-foreground"
            >
              {h}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-5">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            <span>Next departure: Mar 2094</span>
          </div>
          <button className="flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3">
            <span>Reserve</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Shimmer border on hover */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `linear-gradient(90deg, transparent, rgba(201,168,76,0.1), transparent)`,
          backgroundSize: "200% 100%",
          animation: isHovered ? "shimmer 3s linear infinite" : "none",
        }}
      />
    </div>
  )
}

export function DestinationCards() {
  return (
    <section id="destinations" className="relative py-24 lg:py-32">
      {/* Background accent */}
      <div className="absolute left-1/2 top-0 h-px w-1/2 max-w-md -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center lg:mb-20">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-primary">
            Curated Journeys
          </span>
          <h2 className="mt-4 font-serif text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl text-balance">
            Choose Your Era
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Each destination is meticulously curated by our temporal historians
            to ensure an authentic, safe, and unforgettable experience.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {destinations.map((dest, i) => (
            <DestinationCard key={dest.title} destination={dest} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
