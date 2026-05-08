import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Clock, Car } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-maroon/70" />
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white">About Vivamore</h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-gold font-medium mb-4 tracking-widest uppercase text-sm">Our Story</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon mb-6">
                Contemporary Experiences Designed Around Connection
              </h2>
            </div>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="leading-relaxed mb-6">
                Vivamore was created as a modern social and dining destination where convenience, meaningful connection,
                and celebration come together naturally. Strategically located in the heart of Kuala Lumpur at NU Mall,
                Vivamore provides a premium contemporary setting for intimate events, elegant dining experiences,
                and memorable gatherings.

              </p>
              <p className="leading-relaxed mb-6">
                Every detail — from ambiance and hospitality to cuisine and event experiences — is thoughtfully
                curated to create moments that feel personal, comfortable, and unforgettable.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-4 tracking-widest uppercase text-sm">Our Philosophy</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon">
              What Defines Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Convenient",
                description: "Centrally located at NU Mall Kuala Lumpur with seamless accessibility, modern facilities, and a welcoming atmosphere designed for effortless experiences.",
              },
              {
                title: "Connect",
                description: "A thoughtfully designed space where conversations, relationships, business interactions, and meaningful moments come together naturally.",
              },
              {
                title: "Celebrate",
                description: "From intimate gatherings to milestone celebrations, Vivamore creates contemporary experiences that turn every occasion into a memorable one.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-8 bg-white rounded-lg shadow-sm">
                <h3 className="font-serif text-2xl font-bold text-maroon mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Venue */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-medium mb-4 tracking-widest uppercase text-sm">Our Venue</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon mb-6">
                Contemporary Space for Meaningful Gatherings
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Vivamore offers a refined and contemporary venue experience thoughtfully designed for intimate celebrations, corporate gatherings, and private events in the heart of Kuala Lumpur.
                Located at NU Mall, Vivamore combines elegant ambiance, modern comfort, and personalized hospitality to create memorable experiences for every occasion. Whether hosting a corporate function, intimate wedding, private celebration, or social gathering, our venue provides a warm and sophisticated setting tailored to your needs.
                With flexible layouts and curated event arrangements, Vivamore transforms every gathering into a seamless and memorable experience.

              </p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  Contemporary and elegant event space
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  Ideal for corporate events and social gatherings
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  Suitable for intimate weddings and receptions
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  Flexible setup arrangements
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  Premium dining and various buffet options
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  Conveniently located at NU Mall Kuala Lumpur
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  Dedicated hospitality and event support team
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  Comfortable venue capacity for up to 120 guests
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
                alt="Dining hall"
                className="rounded-lg aspect-[3/4] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop"
                alt="Interior"
                className="rounded-lg aspect-[3/4] object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-24 bg-maroon text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gold font-medium mb-4 tracking-widest uppercase text-sm">Our Commitment</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
              Excellence in Every Detail
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2" />
                  <span className="text-white/90">Sourcing only the finest ingredients from trusted suppliers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2" />
                  <span className="text-white/90">Maintaining the highest standards of hygiene and safety</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2" />
                  <span className="text-white/90">Continuous training for our staff in hospitality excellence</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2" />
                  <span className="text-white/90">Sustainable practices in our operations</span>
                </li>
              </ul>
            </div>
            <Button
              asChild
              className="mt-12 bg-gold text-white hover:bg-gold/90 rounded-full px-8"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </>
  )
}
