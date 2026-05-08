import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="py-24 bg-maroon">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to experience Vivamore?
        </h2>
        <p className="text-gold text-lg mb-10 max-w-2xl mx-auto">
          Create unforgettable moments with us. Whether it&apos;s an intimate dinner or a grand celebration, 
          we&apos;re here to make it extraordinary.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            size="lg"
            className="bg-gold text-white hover:bg-gold/90 rounded-full px-10 py-6 text-lg"
          >
            <a href="https://wa.me/60196547318?text=Hi%2C%20I%20would%20like%20to%20make%20a%20reservation" target="_blank" rel="noopener noreferrer">Reserve A Table</a>
          </Button>
          <Button 
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-10 py-6 text-lg border-2 border-white text-white hover:bg-white hover:text-maroon bg-transparent"
          >
            <Link href="/plan-event">Plan Your Event</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
