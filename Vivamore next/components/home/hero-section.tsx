import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-slow-zoom"
        style={{
          backgroundImage: `url('/images/hero-wedding.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-wide">
          VIVAMORE
        </h1>
        <p className="font-serif text-xl md:text-2xl text-gold mb-4 italic">
          Elegant Dining & Thoughtful Celebrations
        </p>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Beautiful experiences, within reach
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gold text-white hover:bg-gold/90 rounded-full px-8 py-6 text-lg font-medium"
          >
            <a href="https://wa.me/60196547318?text=Hi%2C%20I%20would%20like%20to%20make%20a%20reservation" target="_blank" rel="noopener noreferrer">Reserve A Table</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-8 py-6 text-lg font-medium border-2 border-white text-white hover:bg-white hover:text-maroon bg-transparent"
          >
            <Link href="/plan-event">Plan Your Event</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  )
}
