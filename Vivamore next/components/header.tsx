"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

const diningLinks = [
  { title: "Our Menu", href: "/dining#menu", description: "Explore our exquisite culinary offerings" },
  { title: "Signature Dishes", href: "/dining#signature", description: "Chef's special creations" },
  { title: "Private Dining", href: "/dining#private", description: "Exclusive dining experiences" },
]

const eventLinks = [
  { title: "Weddings", href: "/events#malay", description: "Traditional and modern wedding ceremonies" },
  { title: "Engagements", href: "/events#engagement", description: "Intimate engagement celebrations" },
  { title: "Corporate Meetings", href: "/events#meetings", description: "Professional meeting spaces" },
  { title: "Annual Dinners", href: "/events#dinner", description: "Elegant corporate celebrations" },
  { title: "Private Events", href: "/events#private", description: "Bespoke private celebrations" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-gold/80 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/vivamore-logo.png"
              alt="Vivamore Dining"
              className={cn(
                "h-30 w-auto transition-all",
                isScrolled ? "brightness-100" : "brightness-0 invert"
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <Link
                  href="/about"
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors hover:text-white",
                    isScrolled ? "text-foreground" : "text-white"
                  )}
                >
                  About
                </Link>
              </NavigationMenuItem>


              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent",
                  isScrolled ? "text-foreground" : "text-white"
                )}>
                  <Link href="/dining" className="hover:text-white">
                    Dining
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {diningLinks.map((link) => (
                      <li key={link.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={link.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{link.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {link.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent",
                  isScrolled ? "text-foreground" : "text-white"
                )}>
                  <Link href="/events" className="hover:text-white">
                    Events
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {eventLinks.map((link) => (
                      <li key={link.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={link.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{link.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {link.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/gallery"
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors hover:text-white",
                    isScrolled ? "text-foreground" : "text-white"
                  )}
                >
                  Gallery
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/promotions"
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors hover:text-white",
                    isScrolled ? "text-foreground" : "text-white"
                  )}
                >
                  Promotions
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/contact"
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors hover:text-white",
                    isScrolled ? "text-foreground" : "text-white"
                  )}
                >
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              className="bg-gold text-white hover:bg-gold/90 rounded-full px-6"
            >
              <a href="https://wa.me/60196547318?text=Hi%2C%20I%20would%20like%20to%20make%20a%20reservation" target="_blank" rel="noopener noreferrer">Reserve Table</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className={cn(
                "rounded-full px-6 border-gold text-gold hover:bg-gold hover:text-white",
                !isScrolled && "border-white text-gold hover:bg-white hover:text-maroon"
              )}
            >
              <Link href="/plan-event">Plan Event</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className={isScrolled ? "text-foreground" : "text-white"}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-6 mt-8">
                <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-gold transition-colors">
                  About
                </Link>
                <Link href="/dining" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-gold transition-colors">
                  Dining
                </Link>
                <Link href="/events" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-gold transition-colors">
                  Events
                </Link>
                <Link href="/gallery" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-gold transition-colors">
                  Gallery
                </Link>
                <Link href="/promotions" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-gold transition-colors">
                  Promotions
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-gold transition-colors">
                  Contact
                </Link>
                <div className="flex flex-col gap-3 mt-4">
                  <Button asChild className="bg-gold text-white hover:bg-gold/90 rounded-full">
                    <a href="https://wa.me/60196547318?text=Hi%2C%20I%20would%20like%20to%20make%20a%20reservation" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>Reserve Table</a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full border-gold text-gold hover:bg-gold hover:text-white">
                    <Link href="/plan-event" onClick={() => setIsOpen(false)}>Plan Event</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
