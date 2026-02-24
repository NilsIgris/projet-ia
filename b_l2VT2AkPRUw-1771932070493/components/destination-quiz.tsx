"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, ArrowLeft, Sparkles, RotateCcw, MapPin, Clock, ChevronRight } from "lucide-react"

type DestinationKey = "paris" | "cretaceous" | "florence"

interface QuizOption {
  label: string
  value: DestinationKey
}

interface QuizQuestion {
  question: string
  options: QuizOption[]
}

const questions: QuizQuestion[] = [
  {
    question: "Quel type d'experience recherchez-vous ?",
    options: [
      { label: "Culturelle et artistique", value: "florence" },
      { label: "Aventure et nature", value: "cretaceous" },
      { label: "Elegance et raffinement", value: "paris" },
    ],
  },
  {
    question: "Votre periode preferee ?",
    options: [
      { label: "Histoire moderne (XIXe-XXe siecle)", value: "paris" },
      { label: "Temps anciens et origines", value: "cretaceous" },
      { label: "Renaissance et classicisme", value: "florence" },
    ],
  },
  {
    question: "Vous preferez :",
    options: [
      { label: "L'effervescence urbaine", value: "paris" },
      { label: "La nature sauvage", value: "cretaceous" },
      { label: "L'art et l'architecture", value: "florence" },
    ],
  },
  {
    question: "Votre activite ideale :",
    options: [
      { label: "Visiter des monuments", value: "paris" },
      { label: "Observer la faune", value: "cretaceous" },
      { label: "Explorer des musees", value: "florence" },
    ],
  },
]

interface DestinationResult {
  key: DestinationKey
  title: string
  era: string
  location: string
  duration: string
  price: string
  image: string
  description: string
  personalMessage: string
}

const results: Record<DestinationKey, DestinationResult> = {
  paris: {
    key: "paris",
    title: "Paris 1889",
    era: "Belle Epoque",
    location: "Paris, France",
    duration: "3 Days",
    price: "48,000",
    image: "/images/paris-1889.png",
    description:
      "Witness the unveiling of the Eiffel Tower at the World's Fair. Dine at the finest Parisian salons and walk the gaslit boulevards of the City of Light.",
    personalMessage:
      "Your taste for elegance, modern history, and the vibrancy of city life makes Paris 1889 your perfect match. You'll thrive in the Belle Epoque's sophisticated atmosphere, where every boulevard tells a story and every salon hosts the greatest minds of the era.",
  },
  cretaceous: {
    key: "cretaceous",
    title: "Cretaceous Era",
    era: "66 Million BCE",
    location: "Western Interior",
    duration: "24 Hours",
    price: "124,000",
    image: "/images/cretaceous.png",
    description:
      "Experience Earth in its most primal form. Observe the magnificent creatures that ruled our planet from the safety of our temporal observation deck.",
    personalMessage:
      "Your adventurous spirit and passion for nature's raw power draw you to the Cretaceous Era. Few travelers have the courage to witness Earth's most magnificent creatures up close. You're one of the rare souls who craves the extraordinary.",
  },
  florence: {
    key: "florence",
    title: "Florence 1504",
    era: "High Renaissance",
    location: "Florence, Italy",
    duration: "5 Days",
    price: "72,000",
    image: "/images/florence-1504.png",
    description:
      "Walk alongside Leonardo and Michelangelo. Witness the creation of David and explore the workshops where the Renaissance was forged.",
    personalMessage:
      "Your deep appreciation for art, culture, and the classical world leads you straight to the heart of the Renaissance. Florence 1504 will envelop you in beauty and genius, where every corner reveals a masterpiece in the making.",
  },
}

function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="relative h-1 flex-1 overflow-hidden rounded-full bg-secondary">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-primary transition-all duration-500 ease-out"
            style={{ width: i < current ? "100%" : i === current ? "50%" : "0%" }}
          />
        </div>
      ))}
    </div>
  )
}

function QuizResult({
  destination,
  onRestart,
}: {
  destination: DestinationResult
  onRestart: () => void
}) {
  const [isVisible, setIsVisible] = useState(false)
  const resultRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      ref={resultRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {/* Result Header */}
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
          <Sparkles className="h-6 w-6 text-primary" />
        </div>
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-primary">
          Your Ideal Destination
        </span>
        <h3 className="mt-3 font-serif text-3xl font-medium text-foreground sm:text-4xl">
          {destination.title}
        </h3>
      </div>

      {/* Result Card */}
      <div className="overflow-hidden rounded-2xl border border-primary/20 bg-card"
        style={{ animation: "glow-pulse 3s ease-in-out infinite" }}
      >
        {/* Image */}
        <div className="relative h-56 sm:h-72">
          <Image
            src={destination.image}
            alt={`${destination.title} time travel destination`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 600px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs text-foreground/80">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3 w-3 text-primary" />
                {destination.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3 w-3 text-primary" />
                {destination.duration}
              </span>
            </div>
            <span className="rounded-full border border-primary/30 bg-background/80 px-3 py-1 text-xs font-medium text-primary backdrop-blur-md">
              {"$"}{destination.price}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1">
            <span className="text-[10px] font-medium uppercase tracking-widest text-primary">
              {destination.era}
            </span>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">
            {destination.description}
          </p>

          {/* Personalized Message */}
          <div className="mt-6 rounded-xl border border-primary/10 bg-primary/5 p-5">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary">
              Why This Is Your Match
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              {destination.personalMessage}
            </p>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              onClick={onRestart}
              className="flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Retake Quiz</span>
            </button>
            <a
              href="#destinations"
              className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-gold-light"
            >
              <span>Reserve Now</span>
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export function DestinationQuiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<DestinationKey[]>([])
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const isComplete = answers.length === questions.length

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSelect = (optionIndex: number, value: DestinationKey) => {
    if (isTransitioning) return
    setSelectedOption(optionIndex)
    setIsTransitioning(true)

    setTimeout(() => {
      setAnswers((prev) => [...prev, value])
      setCurrentStep((prev) => prev + 1)
      setSelectedOption(null)
      setIsTransitioning(false)
    }, 400)
  }

  const handleBack = () => {
    if (currentStep === 0 || isTransitioning) return
    setCurrentStep((prev) => prev - 1)
    setAnswers((prev) => prev.slice(0, -1))
  }

  const handleRestart = () => {
    setCurrentStep(0)
    setAnswers([])
    setSelectedOption(null)
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const getResult = (): DestinationResult => {
    const counts: Record<DestinationKey, number> = { paris: 0, cretaceous: 0, florence: 0 }
    answers.forEach((a) => counts[a]++)
    const winner = (Object.entries(counts) as [DestinationKey, number][]).sort(
      (a, b) => b[1] - a[1]
    )[0][0]
    return results[winner]
  }

  const question = questions[currentStep]

  return (
    <section
      ref={sectionRef}
      id="quiz"
      className="relative py-24 lg:py-32"
    >
      {/* Top accent line */}
      <div className="absolute left-1/2 top-0 h-px w-1/2 max-w-md -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`mb-14 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-primary">
            Discover Your Era
          </span>
          <h2 className="mt-4 font-serif text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl text-balance">
            Find Your Perfect Destination
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Answer four questions and let our temporal algorithm reveal the era
            that matches your soul.
          </p>
        </div>

        {/* Quiz Body */}
        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {!isComplete ? (
            <div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8">
              {/* Progress */}
              <div className="mb-8">
                <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span>
                    Question {currentStep + 1} of {questions.length}
                  </span>
                  <span>{Math.round(((currentStep) / questions.length) * 100)}%</span>
                </div>
                <ProgressBar current={currentStep} total={questions.length} />
              </div>

              {/* Question */}
              <div
                key={currentStep}
                className="animate-in fade-in slide-in-from-right-4 duration-300"
              >
                <h3 className="mb-6 font-serif text-xl font-medium text-foreground sm:text-2xl">
                  {question.question}
                </h3>

                <div className="flex flex-col gap-3">
                  {question.options.map((option, i) => (
                    <button
                      key={option.label}
                      onClick={() => handleSelect(i, option.value)}
                      disabled={isTransitioning}
                      className={`group flex items-center justify-between rounded-xl border px-5 py-4 text-left text-sm transition-all duration-300 sm:text-base ${
                        selectedOption === i
                          ? "border-primary bg-primary/10 text-foreground"
                          : "border-border/50 bg-secondary/30 text-foreground/80 hover:border-primary/30 hover:bg-secondary/60"
                      } ${isTransitioning && selectedOption !== i ? "opacity-40" : ""}`}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-medium transition-colors ${
                            selectedOption === i
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border text-muted-foreground group-hover:border-primary/50 group-hover:text-foreground"
                          }`}
                        >
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span>{option.label}</span>
                      </div>
                      <ArrowRight
                        className={`h-4 w-4 text-primary transition-all ${
                          selectedOption === i ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-50"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Back button */}
              {currentStep > 0 && (
                <button
                  onClick={handleBack}
                  className="mt-6 flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ArrowLeft className="h-3 w-3" />
                  <span>Previous question</span>
                </button>
              )}
            </div>
          ) : (
            <QuizResult destination={getResult()} onRestart={handleRestart} />
          )}
        </div>
      </div>
    </section>
  )
}
