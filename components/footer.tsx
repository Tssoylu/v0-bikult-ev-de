import Link from "next/link"
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"
import { BiKultLogoDark } from "@/components/bikult-logo"

const navigation = {
  verein: [
    { name: "Verein Übersicht", href: "/verein" },
    { name: "Über Uns", href: "/verein/ueber-uns" },
    { name: "Aktivitäten", href: "/verein/aktivitaten" },
    { name: "Foto Galerie", href: "/verein/foto-galerie" },
    { name: "Ehrenamt", href: "/verein/ehrenamt" },
    { name: "Spenden", href: "/verein/spenden" },
  ],
  angebote: [
    { name: "Lernförderung & Nachhilfe", href: "/nachhilfe" },
    { name: "Sprachkurse", href: "/sprachkurse" },
    { name: "Deutsch als Fremdsprache", href: "/sprachkurse/deutsch-als-fremdsprache" },
  ],
  legal: [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
  ],
  social: [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/BiKultev" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/bikult_e.v/" },
    { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/channel/UCFEhVp3Nf0rSPjYYzHYN1sw" },
  ],
}

const contactItems = [
  {
    label: "Victoriastraße 24, 45772 Marl",
    href: "https://maps.google.com/?q=Victoriastraße+24,+45772+Marl",
    icon: MapPin,
    external: true,
  },
  {
    label: "02365 8878188",
    href: "tel:023658878188",
    icon: Phone,
  },
  {
    label: "info@bikult-ev.de",
    href: "mailto:info@bikult-ev.de",
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 lg:gap-16 md:grid-cols-[minmax(0,1.3fr)_repeat(3,minmax(0,1fr))]">
          {/* Brand & contact */}
          <div className="space-y-6">
            <Link href="/" className="inline-flex">
              <BiKultLogoDark />
            </Link>
            <p className="text-sm text-background/70 leading-relaxed max-w-md">
              Das Bildungs- und Kulturzentrum e.V. in Marl fördert Bildung, Integration und kulturellen Austausch
              für Menschen aller Hintergründe.
            </p>

            <div className="flex gap-3">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          <FooterColumn title="Verein" items={navigation.verein} />
          <FooterColumn title="Angebote" items={navigation.angebote} />
          <FooterContactColumn />
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-background/50">© {new Date().getFullYear()} BiKult e.V. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            {navigation.legal.map((item) => (
              <Link key={item.name} href={item.href} className="text-background/60 hover:text-background">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, items }: { title: string; items: { name: string; href: string }[] }) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-background">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className="text-sm text-background/70 hover:text-primary transition-colors">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function FooterContactColumn() {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-background">Kontakt</h3>
      <ul className="space-y-3">
        {contactItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 text-sm text-background/70 hover:text-primary transition-colors"
            >
              <item.icon className="h-4 w-4 text-accent" />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
