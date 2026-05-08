import { Button } from "@/components/ui/button"
import Link from "next/link"

const images = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
]

export function EventHighlights() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {/* Large Image */}
          <div className="col-span-2 row-span-2 overflow-hidden rounded-lg">
            <img
              src={images[0]}
              alt="Wedding celebration"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Smaller Images */}
          {images.slice(1).map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg aspect-square">
              <img
                src={img}
                alt={`Event ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Text Content */}
        <div className="text-center">
          <p className="font-serif text-xl md:text-2xl text-maroon mb-6">
            Elegant Weddings • Corporate Events • Private Celebrations
          </p>
          <Button
            asChild
            className="bg-maroon text-white hover:bg-maroon/90 rounded-full px-8"
          >
            <Link href="/gallery">View Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
