import { Button } from "@/components/ui/button"
import Link from "next/link"

const experiences = [
  {
    title: "Dining",
    description: "Exquisite culinary creations in an elegant atmosphere",
    image: "/images/fine-dining.jpg",
    href: "/dining",
  },
  {
    title: "Weddings",
    description: "Create your perfect day with our bespoke wedding services",
    image: "/images/hero-wedding.jpg",
    href: "/events",
  },
  {
    title: "Corporate",
    description: "Professional spaces for meetings and corporate events",
    image: "/images/corporate-event.jpg",
    href: "/events",
  },
]

export function ExperiencesSection() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-medium mb-4 tracking-widest uppercase text-sm">Discover</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon">
            Our Experiences
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg"
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/90 via-maroon/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="font-serif text-2xl font-bold mb-2">{exp.title}</h3>
                <p className="text-white/80 mb-4 text-sm">{exp.description}</p>
                <Button
                  asChild
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-white rounded-full"
                >
                  <Link href={exp.href}>Explore</Link>
                </Button>
              </div>

              {/* Gold Border on Hover */}
              <div className="absolute inset-0 border-4 border-gold opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
