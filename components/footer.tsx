import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

const navigation = {
  main: [
    { name: "Startseite", href: "#" },
    { name: "Über Uns", href: "#about" },
    { name: "Angebote", href: "#services" },
    { name: "Projekte", href: "#projects" },
    { name: "Kontakt", href: "#contact" },
  ],
  legal: [
    { name: "Impressum", href: "#" },
    { name: "Datenschutz", href: "#" },
  ],
  social: [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ]
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">B</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg text-background">BiKult</span>
                <span className="text-xs text-background/60 -mt-1">Bildungs und Kulturzentrum e.V.</span>
              </div>
            </Link>
            <p className="mt-4 text-background/70 max-w-md">
              Das Bildungs und Kulturzentrum e.V. in Marl fördert Bildung, Integration und kulturellen Austausch 
              für Menschen aller Hintergründe.
            </p>
            <div className="flex gap-4 mt-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-background mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-background mb-4">Kontakt</h3>
            <ul className="space-y-3 text-background/70">
              <li>Victoriastraße 24</li>
              <li>45772 Marl</li>
              <li>
                <a href="tel:023658878188" className="hover:text-primary transition-colors">
                  02365 8878188
                </a>
              </li>
              <li>
                <a href="mailto:info@bikult-ev.de" className="hover:text-primary transition-colors">
                  info@bikult-ev.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} BiKult e.V. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-background/50 hover:text-background text-sm transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
