import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { DestinationCards } from "@/components/destination-cards"
import { DestinationQuiz } from "@/components/destination-quiz"
import { ExperienceSection } from "@/components/experience-section"
import { Footer } from "@/components/footer"
import { ChatbotBubble } from "@/components/chatbot-bubble"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DestinationCards />
      <DestinationQuiz />
      <ExperienceSection />
      <Footer />
      <ChatbotBubble />
    </main>
  )
}
