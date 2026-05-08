"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const dishes = [
  {
    name: "Ikan Bakar Portuguese",
    description: "Grilled Nori soy fish marinated with Signature Paste.",
    image: "/images/asian.png",
  },
  {
    name: "Wild West Chicken Burger",
    description: "Juicy chicken patty with smoky BBQ sauce, crispy onions, and fresh lettuce",
    image: "/images/burger.png",
  },
  {
    name: "Roasted Chicken Rice",
    description: "Fragrant rice simmered in chicken broth, served with tender roasted chicken and flavourful chili sauce.",
    image: "/images/lunch.png",
  },
  {
    name: "Vegetarian Aglio Olio",
    description: "Classic garlic and olive oil pasta with fresh herbs and seasonal vegetables.",
    image: "/images/western.png",
  },
  {
    name: "Dessert Selection",
    description: "A delightful afternoon treat of crispy waffle or savoury curry puff, served with your choice of tea or coffee.",
    image: "/images/dessert.png",
  },
]

export function DishesSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-gold font-medium mb-4 tracking-widest uppercase text-sm">Culinary Excellence</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon">
              Signature Dishes
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="rounded-full border-maroon text-maroon hover:bg-maroon hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="rounded-full border-maroon text-maroon hover:bg-maroon hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {dishes.map((dish, index) => (
            <div
              key={dish.name}
              className="flex-shrink-0 w-[300px] md:w-[350px] snap-start group"
            >
              <div className="aspect-square overflow-hidden rounded-lg mb-4">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold text-maroon mb-2">
                {dish.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {dish.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
