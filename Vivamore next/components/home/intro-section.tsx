import { Button } from "@/components/ui/button"
import Link from "next/link"

export function IntroSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="/images/fine-dining.jpg"
                alt="Vivamore interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-12">
            <p className="text-gold font-medium mb-4 tracking-widest uppercase text-sm">Welcome to</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon mb-6">
              About Vivamore
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Located at NU Mall Kuala Lumpur, Vivamore is a contemporary premium dining and intimate
              event destination designed for meaningful experiences and modern celebrations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Built around the philosophy of  Convenient . Connect . Celebrate, Vivamore offers elegant
              spaces where people come together to dine, gather, and create memorable moments
              in a sophisticated and welcoming atmosphere.            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether for private dining, intimate celebrations, corporate gatherings, or social occasions, Vivamore combines refined hospitality, curated culinary experiences, and contemporary ambiance to deliver exceptional experiences tailored to every occasion.
            </p>

            <Button
              asChild
              className="bg-maroon text-white hover:bg-maroon/90 rounded-full px-8"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
