"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote: "Beautiful venue and amazing food. Our wedding at Vivamore was absolutely magical. The team went above and beyond to make our special day perfect.",
    author: "Sarah & Ahmad",
    role: "Wedding Clients",
  },
  {
    quote: "Seamless corporate event experience. The facilities are top-notch and the catering exceeded our expectations. Will definitely return for future events.",
    author: "James Wong",
    role: "Corporate Client",
  },
  {
    quote: "The attention to detail is remarkable. From the elegant decor to the exquisite cuisine, every aspect of our anniversary dinner was flawless.",
    author: "The Lim Family",
    role: "Private Dining",
  },
  {
    quote: "Professional service and stunning ambiance. Our engagement ceremony was everything we dreamed of and more.",
    author: "Nurul & Farhan",
    role: "Engagement Ceremony",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote Icon */}
          <Quote className="w-12 h-12 text-gold mx-auto mb-8 fill-gold/20" />

          {/* Testimonial Content */}
          <div className="relative min-h-[200px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-all duration-500",
                  index === current
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                )}
              >
                <blockquote className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-semibold text-maroon">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              variant="ghost"
              size="icon"
              onClick={prev}
              className="rounded-full text-maroon hover:bg-maroon/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    index === current
                      ? "bg-gold w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={next}
              className="rounded-full text-maroon hover:bg-maroon/10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
