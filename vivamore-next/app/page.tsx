import { HeroSection } from "@/components/home/hero-section"
import { IntroSection } from "@/components/home/intro-section"
import { ExperiencesSection } from "@/components/home/experiences-section"
import { DishesSection } from "@/components/home/dishes-section"
import { EventHighlights } from "@/components/home/event-highlights"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { FinalCTA } from "@/components/home/final-cta"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ExperiencesSection />
      <DishesSection />
      <EventHighlights />
      <TestimonialsSection />
      <FinalCTA />
      <WhatsAppButton />
    </>
  )
}
