import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Heart, Users, Utensils, Camera, Monitor, Wifi } from "lucide-react"

const weddingPackages = [
  {
    title: "Malay Wedding",
    description: "Traditional ceremonies with modern elegance",
    features: ["Pelamin setup", "200-400 guests", "Full catering", "Decoration"],
    image: "/images/hero-wedding.jpg",
    id: "malay",
  },
  {
    title: "Engagement",
    description: "Intimate celebrations for your special moment",
    features: ["Customizable setup", "50-150 guests", "Catering options", "Photography"],
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    id: "engagement",
  },
  {
    title: "Private Events",
    description: "Bespoke celebrations tailored to you",
    features: ["Flexible arrangements", "Any size", "Custom menus", "Full support"],
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop",
    id: "private",
  },
]

const corporateEvents = [
  {
    title: "Meetings",
    description: "Professional meeting spaces with full AV support",
    features: ["Private rooms", "10-50 pax", "AV equipment", "Catering available"],
    image: "/images/corporate-event.jpg",
    id: "meetings",
  },
  {
    title: "Annual Dinner",
    description: "Elegant venue for corporate celebrations",
    features: ["Grand hall", "100-400 pax", "Stage setup", "Full banquet"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    id: "dinner",
  },
  {
    title: "Networking Events",
    description: "Connect and collaborate in style",
    features: ["Flexible layout", "50-200 pax", "Cocktail service", "Registration desk"],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
    id: "networking",
  },
]

const weddingFeatures = [
  {
    icon: Heart,
    title: "Pelamin Setup",
    description: "Elegant bridal dais with traditional or modern designs",
  },
  {
    icon: Users,
    title: "Seating Layout",
    description: "Flexible arrangements for up to 400 guests",
  },
  {
    icon: Utensils,
    title: "Catering",
    description: "Exquisite menu options for every palate",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Beautiful backdrops and photo opportunities",
  },
]

const corporateFacilities = [
  {
    icon: Monitor,
    title: "AV System",
    description: "State-of-the-art sound and projection",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Reliable connectivity for all guests",
  },
  {
    icon: Users,
    title: "Flexible Seating",
    description: "Multiple layout configurations",
  },
  {
    icon: Utensils,
    title: "Full Catering",
    description: "Customizable menu options",
  },
]

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/hero-wedding.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-maroon/70" />
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white">Events</h1>
          <p className="text-gold mt-4 text-lg">Weddings, Corporate Events & Private Celebrations</p>
        </div>
      </section>

      {/* Events Tabs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-4 tracking-widest uppercase text-sm">Our Services</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon">
              Event Solutions
            </h2>
          </div>

          <Tabs defaultValue="weddings" className="w-full">
            <TabsList className="w-full max-w-md mx-auto mb-12 bg-muted p-1 rounded-full">
              <TabsTrigger 
                value="weddings" 
                className="flex-1 rounded-full data-[state=active]:bg-maroon data-[state=active]:text-white"
              >
                Weddings & Celebrations
              </TabsTrigger>
              <TabsTrigger 
                value="corporate" 
                className="flex-1 rounded-full data-[state=active]:bg-maroon data-[state=active]:text-white"
              >
                Corporate Events
              </TabsTrigger>
            </TabsList>

            {/* Weddings Tab */}
            <TabsContent value="weddings">
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {weddingPackages.map((pkg) => (
                  <Card 
                    key={pkg.title} 
                    id={pkg.id}
                    className="overflow-hidden border-2 border-transparent hover:border-gold transition-colors group"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="font-serif text-2xl text-maroon">{pkg.title}</CardTitle>
                      <CardDescription>{pkg.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {pkg.features.map((feature) => (
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
                        <Link href="/plan-event">Inquire Now</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Wedding Features */}
              <div className="bg-muted rounded-2xl p-12">
                <h3 className="font-serif text-2xl font-bold text-maroon text-center mb-10">
                  Complete Wedding Services
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {weddingFeatures.map((feature) => (
                    <div key={feature.title} className="text-center p-6 bg-white rounded-lg">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                        <feature.icon className="w-8 h-8 text-gold" />
                      </div>
                      <h4 className="font-serif text-xl font-semibold text-maroon mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Corporate Tab */}
            <TabsContent value="corporate">
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {corporateEvents.map((event) => (
                  <Card 
                    key={event.title}
                    id={event.id}
                    className="overflow-hidden border-2 border-transparent hover:border-gold transition-colors group"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="font-serif text-2xl text-maroon">{event.title}</CardTitle>
                      <CardDescription>{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {event.features.map((feature) => (
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
                        <Link href="/plan-event">Request Quote</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Corporate Facilities */}
              <div className="bg-muted rounded-2xl p-12">
                <h3 className="font-serif text-2xl font-bold text-maroon text-center mb-10">
                  World-Class Amenities
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {corporateFacilities.map((facility) => (
                    <div key={facility.title} className="text-center p-8 bg-white rounded-lg shadow-sm">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-maroon/10 flex items-center justify-center">
                        <facility.icon className="w-8 h-8 text-maroon" />
                      </div>
                      <h4 className="font-serif text-xl font-semibold text-maroon mb-2">{facility.title}</h4>
                      <p className="text-muted-foreground text-sm">{facility.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Vivamore */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-medium mb-4 tracking-widest uppercase text-sm">Why Vivamore</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon mb-6">
                The Perfect Event Venue
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Located in the heart of Kuala Lumpur, Vivamore offers the ideal setting for 
                events of any scale. Our experienced team ensures seamless execution of your 
                special occasions, whether it&apos;s a dream wedding or a corporate gathering.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2" />
                  <span className="text-muted-foreground">Central location with ample parking</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2" />
                  <span className="text-muted-foreground">Dedicated event coordinator</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2" />
                  <span className="text-muted-foreground">Customizable packages to suit your needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2" />
                  <span className="text-muted-foreground">Premium catering with diverse menu options</span>
                </li>
              </ul>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="/images/restaurant-interior.jpg"
                alt="Event venue"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-maroon">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Plan Your Event With Us
          </h2>
          <p className="text-gold mb-10 max-w-2xl mx-auto">
            Let us help you create an unforgettable experience. Contact our events team to discuss your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-gold text-white hover:bg-gold/90 rounded-full px-8"
            >
              <Link href="/plan-event">Request Package</Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-maroon rounded-full px-8 bg-transparent"
            >
              <Link href="/contact">Schedule Viewing</Link>
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </>
  )
}
