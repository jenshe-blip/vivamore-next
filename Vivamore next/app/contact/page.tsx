import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MapPin, Phone, Mail, Clock, Car } from "lucide-react"

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

            <form className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
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
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-gold bg-white"
                >
                  <option value="">Select a subject</option>
                  <option value="reservation">Reservation Inquiry</option>
                  <option value="event">Event Planning</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                  placeholder="Your message..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-maroon text-white hover:bg-maroon/90 rounded-full py-6"
              >
                Send Message
              </Button>
            </form>
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
