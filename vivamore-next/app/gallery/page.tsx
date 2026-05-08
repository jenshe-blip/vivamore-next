"use client"

import { useState } from "react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

const categories = ["All", "Dining", "Weddings", "Corporate", "Interior", "Dishes"]

const galleryImages = [
  { src: "/images/IMG_0656 - D.jpg", category: "Dining", alt: "Fine dining setup" },
  { src: "/images/IMG-7759 - W 2.jpeg", category: "Weddings", alt: "Wedding celebration" },
  { src: "/images/IMG_9979 - C 1.jpg", category: "Corporate", alt: "Corporate event" },
  { src: "/images/APC_0177.jpg", category: "Interior", alt: "Restaurant interior" },
  { src: "/images/IMG_7306 F 1.jpg", category: "Dishes", alt: "Signature dish" },
  { src: "/images/IMG_9958.jpg", category: "Dining", alt: "Fine dining setup" },
  { src: "/images/IMG_9962 - W 1.jpg", category: "Weddings", alt: "Wedding celebration" },
  { src: "/images/IMG-4224 - C 2.jpg", category: "Corporate", alt: "Corporate event" },
  { src: "/images/IMG_3825.jpg", category: "Weddings", alt: "Wedding celebration" },
  { src: "/images/IMG_3833.jpg", category: "Dishes", alt: "Signature dish" },
  { src: "/images/IMG_0626.jpg", category: "Corporate", alt: "Corporate event" },
  { src: "/images/IMG_7306 F 1.jpg", category: "Dishes", alt: "Signature dish" },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-maroon/70" />
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white">Gallery</h1>
          <p className="text-gold mt-4 text-lg">Explore our spaces and moments</p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-white border-b sticky top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === category
                    ? "bg-maroon text-white"
                    : "bg-muted text-muted-foreground hover:bg-maroon/10"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-maroon/0 group-hover:bg-maroon/40 transition-colors flex items-center justify-center">
                    <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <WhatsAppButton />
    </>
  )
}
