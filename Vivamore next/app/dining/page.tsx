import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { Download, FileText } from "lucide-react"

const menuCategories = {
  starters: [
    { name: "Chicken Aglio Olio", price: "RM 23", description: "Spaghetti with garlic, olive oil, chili flakes, Cajun chicken, peppers & cherry tomatoes. Served with parmesan & garlic toast." },
    { name: "Marinara Meatball Spaghetti", price: "RM 23", description: "Spaghetti with braised meatballs in tomato sauce, bell peppers. Served with parmesan & garlic toast." },
    { name: "Carbonara Chicken Spaghetti", price: "RM 23", description: "Creamy spaghetti with chicken slices. Served with parmesan & garlic toast." },
    { name: "Seafood Arrabbiata Spaghetti", price: "RM 24", description: "Spicy tomato spaghetti with shrimp & squid. Served with parmesan & garlic toast." },
  ],
  western: [
    { name: "Wild West Chicken Burger", price: "RM 23", description: "BBQ chicken patty with caramelized onion, salad, cucumber, tomato, gherkin & cheddar in a toasted bun. Served with coleslaw & fries." },
    { name: "Wild West Beef Burger", price: "RM 28", description: "BBQ beef patty with caramelized onion, salad, cucumber, tomato, gherkin & cheddar in a toasted bun. Served with coleslaw & fries." },

  ],
  asian: [
    { name: "Vegetarian Mutton Curry", price: "RM 22", description: "Plant-based mutton curry served with rice & vegetables of the day." },
    { name: "Ikan Bakar Portuguese", price: "RM 22", description: "Grilled fish marinated in signature paste. Served with vegetables of the day." },
    { name: "Vegetarian Aglio Olio", price: "RM 22", description: "Spaghetti with garlic, olive oil, chili flakes & cherry tomatoes. Served with parmesan & garlic toast." },

  ],
  desserts: [
    { name: "Curry Puff", price: "RM 8", description: " Curry Puff with your choice of Tea or Coffee" },
    { name: "Waffle", price: "RM 8", description: "Waffle with your choice of Tea or Coffee" },
  ],
}



export default function DiningPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-maroon/70" />
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white">Dining at Vivamore</h1>
          <p className="text-gold mt-4 text-lg">Experience culinary excellence</p>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-medium mb-4 tracking-widest uppercase text-sm">Our Menu</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon mb-6">
              Culinary Creations
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                asChild
                variant="outline"
                className="rounded-full border-maroon text-maroon hover:bg-maroon hover:text-white"
              >
                <a href="/menu.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  View Menu PDF
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-gold text-gold hover:bg-gold hover:text-white"
              >
                <a href="/menu.pdf" download="Vivamore-Menu.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download Menu
                </a>
              </Button>
            </div>
          </div>

          <Tabs defaultValue="starters" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-4 w-full mb-8 bg-muted">
              <TabsTrigger value="starters" className="data-[state=active]:bg-maroon data-[state=active]:text-white">Pasta</TabsTrigger>
              <TabsTrigger value="western" className="data-[state=active]:bg-maroon data-[state=active]:text-white">Burger</TabsTrigger>
              <TabsTrigger value="asian" className="data-[state=active]:bg-maroon data-[state=active]:text-white">Vegetarian</TabsTrigger>
              <TabsTrigger value="desserts" className="data-[state=active]:bg-maroon data-[state=active]:text-white">Desserts</TabsTrigger>
            </TabsList>

            {Object.entries(menuCategories).map(([category, items]) => (
              <TabsContent key={category} value={category} className="space-y-6">
                {items.map((item) => (
                  <div key={item.name} className="flex justify-between items-start border-b border-border pb-4">
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-foreground">{item.name}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                    <span className="text-gold font-semibold whitespace-nowrap ml-4">{item.price}</span>
                  </div>
                ))}
              </TabsContent>
            ))}
          </Tabs>

          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-maroon text-white hover:bg-maroon/90 rounded-full px-8"
            >
              <a href="https://wa.me/60196547318?text=Hi%2C%20I%20would%20like%20to%20make%20a%20reservation" target="_blank" rel="noopener noreferrer">Make a Reservation</a>
            </Button>
          </div>
        </div>
      </section>



      {/* Private Dining */}
      <section id="private" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
                alt="Private dining room"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-gold font-medium mb-4 tracking-widest uppercase text-sm">Exclusive</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon mb-6">
                Private Dining
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                For those seeking exclusivity, our private dining rooms offer an intimate
                setting for special occasions. Each room features elegant decor, dedicated
                service, and customizable menus.
              </p>
              <ul className="space-y-3 text-muted-foreground mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  Capacity: 10-20 guests per room
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  Customizable set menus available
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  AV equipment for presentations
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  Dedicated service team
                </li>
              </ul>
              <Button
                asChild
                className="bg-gold text-white hover:bg-gold/90 rounded-full px-8"
              >
                <Link href="/plan-event">Inquire Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </>
  )
}
