"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Calendar, Users, Clock, CheckCircle2 } from "lucide-react"

export default function PlanEventPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (isSubmitted) {
    return (
      <>
        <div className="min-h-screen bg-muted py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-maroon mb-4">
                Thank You!
              </h1>
              <p className="text-muted-foreground mb-8">
                We have received your event inquiry. Our events team will contact you within 24 hours to discuss your requirements.
              </p>
              <Button 
                asChild
                className="bg-maroon text-white hover:bg-maroon/90 rounded-full px-8"
              >
                <a href="/">Return to Home</a>
              </Button>
            </div>
          </div>
        </div>
        <WhatsAppButton />
      </>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/corporate-event.jpg')` }}
        >
          <div className="absolute inset-0 bg-maroon/70" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
            Plan Your Event
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Let us help you create an unforgettable celebration
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-muted rounded-lg">
                <Calendar className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="font-serif text-lg font-semibold text-maroon mb-2">Flexible Dates</h3>
                <p className="text-sm text-muted-foreground">Choose from various available dates</p>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg">
                <Users className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="font-serif text-lg font-semibold text-maroon mb-2">Any Size</h3>
                <p className="text-sm text-muted-foreground">From intimate to grand celebrations</p>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg">
                <Clock className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="font-serif text-lg font-semibold text-maroon mb-2">Quick Response</h3>
                <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-border">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-maroon mb-2 text-center">
                Event Inquiry Form
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Fill out the form below and our team will get back to you shortly
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+60 12 345 6789"
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="eventType">Event Type *</Label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm"
                    >
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding Reception</option>
                      <option value="engagement">Engagement Ceremony</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="annual-dinner">Annual Dinner</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="eventDate">Preferred Date *</Label>
                    <Input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guestCount">Expected Guests *</Label>
                    <select
                      id="guestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      required
                      className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm"
                    >
                      <option value="">Select guest count</option>
                      <option value="20-50">20 - 50 guests</option>
                      <option value="50-100">50 - 100 guests</option>
                      <option value="100-200">100 - 200 guests</option>
                      <option value="200-300">200 - 300 guests</option>
                      <option value="300+">300+ guests</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Estimated Budget (Optional)</Label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm"
                  >
                    <option value="">Select budget range</option>
                    <option value="below-10k">Below RM 10,000</option>
                    <option value="10k-30k">RM 10,000 - RM 30,000</option>
                    <option value="30k-50k">RM 30,000 - RM 50,000</option>
                    <option value="50k-100k">RM 50,000 - RM 100,000</option>
                    <option value="above-100k">Above RM 100,000</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your event requirements, themes, special requests..."
                    rows={5}
                    className="rounded-lg resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-maroon text-white hover:bg-maroon/90 rounded-full py-6 text-lg"
                >
                  Submit Inquiry
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Or contact us directly via WhatsApp at{" "}
                  <a 
                    href="https://wa.me/60196547318" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    +60 19-654 7318
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </>
  )
}
