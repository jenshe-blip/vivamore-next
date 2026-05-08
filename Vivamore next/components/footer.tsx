import Link from "next/link"
import { Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-maroon text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-gold">VIVAMORE</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              A premium dining & event destination in NU Mall, Kuala Lumpur. Where exceptional cuisine meets unforgettable moments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/dining" className="text-white/80 hover:text-gold transition-colors text-sm">
                  Dining
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-white/80 hover:text-gold transition-colors text-sm">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/80 hover:text-gold transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-gold transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-gold">Contact Us</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>NU Mall, Level 6</li>
              <li>Kuala Lumpur, Malaysia</li>
              <li>+6019 654 7318</li>
              <li>reservation@vivamore.com.my</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-gold">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/vivamoredining?igsh=MXcxN3B5OG84M3Yyeg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center text-gold hover:bg-gold hover:text-maroon transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href=" https://www.tiktok.com/@vivamore.dining?_r=1&_t=ZS-965z2Nr7qja"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center text-gold hover:bg-gold hover:text-maroon transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Vivamore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
