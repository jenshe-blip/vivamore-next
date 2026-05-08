import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Calendar } from "lucide-react"

const promotions = [
  {
    title: "Special Lunch Set",
    description: "Experience our Special Lunch Set featuring local Malaysian and Western cuisine.",
    price: "RM 25+",
    priceNote: "per person",
    validity: "12PM - 3PM",
    image: "/images/lunch set.png",
    tag: "Limited Time",
    features: ["One serving of main course", "Variety of Selection", "Soup of the Day", "Free refill drinks"],
  },
  {
    title: "Tea Break SPECIAL",
    description: "Indulge in our Afternoon Tea Set featuring a delightful selection of sweet and savoury treats, perfect for sharing or enjoying solo.",
    price: "RM 8",
    priceNote: "per person",
    validity: "Available Daily",
    image: "/images/dessert.png",
    tag: "Tea Time",
    features: ["-"],
  },
  {
    title: "Corporate Package",
    description: "Host your corporate events at our rooftop venue with a refined setting, curated menus, and seamless service, curated menus, and a memorable experience for your special day.",
    price: "Special Rates",
    priceNote: "per person",
    validity: "Year-round",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
    tag: "Business",
    features: ["Meeting room", "AV equipment", "Coffee breaks", "Lunch/Dinner options"],
  },
  {
    title: "Wedding Special",
    description: "Host your 2026 wedding at our elegant rooftop dining venue, offering a beautiful setting, curated menus, and a memorable experience for your special day.",
    price: "Special Rates",
    priceNote: "for 2026 bookings",
    validity: "Book by Dec 2026",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    tag: "Wedding",
    features: ["Rooftop dining experience", "Customizable menu packages", "Dedicated event coordination", "Flexible booking options"],
  },
]

export default function PromotionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-maroon/70" />
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white">Promotions</h1>
          <p className="text-gold mt-4 text-lg">Special offers and seasonal menus</p>
        </div>
      </section>

      {/* Promotions Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {promotions.map((promo) => (
              <Card key={promo.title} className="overflow-hidden border-2 border-transparent hover:border-gold transition-colors">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-gold text-white">
                    {promo.tag}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-serif text-2xl text-maroon">{promo.title}</CardTitle>
                      <CardDescription className="mt-2">{promo.description}</CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="font-serif text-2xl font-bold text-gold">{promo.price}</p>
                      <p className="text-xs text-muted-foreground">{promo.priceNote}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{promo.validity}</span>
                  </div>
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {promo.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="w-full bg-maroon text-white hover:bg-maroon/90 rounded-full"
                  >
                    <a href="https://wa.me/60196547318?text=Hi%2C%20I%20would%20like%20to%20book%20a%20promotion" target="_blank" rel="noopener noreferrer">Book Now</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon mb-4">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Subscribe to our newsletter to receive exclusive offers and updates on our latest promotions.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <Button
              type="submit"
              className="bg-maroon text-white hover:bg-maroon/90 rounded-full px-8"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      <WhatsAppButton />
    </>
  )
}
