"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FieldError } from "@/components/ui/field"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MapPin, Phone, Mail, Clock, Car, CheckCircle2, Loader2 } from "lucide-react"
import { EMAIL_RE } from "@/lib/validate"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["Nu Sentral, Level 6", "Jalan Tun Razak", "50470 Kuala Lumpur, Malaysia"],

  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+6019 654 7318"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["reservation@vivamore.com.my"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Sat: 11:00 AM - 07:00 PM", "Sun: Closed"],
  },
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState<Partial<typeof formData>>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const validateForm = (): boolean => {
    const errors: Partial<typeof formData> = {}
    const name = formData.name.trim()
    if (!name || name.length < 2) errors.name = "Please enter your name (at least 2 characters)"
    if (!formData.email.trim()) errors.email = "Email is required"
    else if (!EMAIL_RE.test(formData.email)) errors.email = "Enter a valid email address"
    const message = formData.message.trim()
    if (!message || message.length < 10) errors.message = "Message must be at least 10 characters"
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsLoading(true)
    setError("")

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "contact", ...formData }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Failed to send")
      }
      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again or contact us directly.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Map Section */}
      <section className="h-[50vh] relative">
        <iframe
          src="https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sNU+Sentral,+Kuala++Lumpur"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Vivamore Location"
        />
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-4 tracking-widest uppercase text-sm">Get in Touch</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon">
              Contact Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info) => (
              <div key={info.title} className="text-center p-6 bg-muted rounded-lg">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-maroon/10 flex items-center justify-center">
                  <info.icon className="w-7 h-7 text-maroon" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-maroon mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Parking Info */}
          <div className="bg-muted rounded-lg p-8 max-w-2xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Car className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-maroon mb-2">Parking Information</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Parking is available at nearby buildings with covered walkway access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon mb-4">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground">
                Have a question or inquiry? Fill out the form below and we&apos;ll get back to you shortly.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-white p-10 rounded-lg shadow-sm text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-maroon mb-3">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-gold ${formErrors.name ? "border-red-500" : "border-border"}`}
                      placeholder="Your name"
                    />
                    <FieldError>{formErrors.name}</FieldError>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-gold ${formErrors.email ? "border-red-500" : "border-border"}`}
                      placeholder="your@email.com"
                    />
                    <FieldError>{formErrors.email}</FieldError>
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="+60 12-345 6789"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-gold bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="Reservation Inquiry">Reservation Inquiry</option>
                    <option value="Event Planning">Event Planning</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-gold resize-none ${formErrors.message ? "border-red-500" : "border-border"}`}
                    placeholder="Your message..."
                  />
                  <FieldError>{formErrors.message}</FieldError>
                </div>

                {error && (
                  <p className="text-red-600 text-sm text-center">{error}</p>
                )}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-maroon text-white hover:bg-maroon/90 rounded-full py-6"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-maroon">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl font-bold text-white mb-4">
            Ready to make a reservation?
          </h3>
          <Button
            asChild
            size="lg"
            className="bg-gold text-white hover:bg-gold/90 rounded-full px-8"
          >
            <a href="https://wa.me/60196547318?text=Hi%2C%20I%20would%20like%20to%20make%20a%20reservation" target="_blank" rel="noopener noreferrer">Reserve Now</a>
          </Button>
        </div>
      </section>

      <WhatsAppButton />
    </>
  )
}
