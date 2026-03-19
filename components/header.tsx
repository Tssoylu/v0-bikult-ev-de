"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { BiKultLogo } from "@/components/bikult-logo"

type NavItem = {
  name: string
  href: string
  children?: { name: string; href: string }[]
}

function DropdownItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const hideTimeout = useRef<NodeJS.Timeout | null>(null)
  const pathname = usePathname()
  const isActive = pathname === item.href || pathname.startsWith(item.href + "/")

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    return () => {
      document.removeEventListener("mousedown", handleClick)
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current)
        hideTimeout.current = null
      }
    }
  }, [])

  const handleOpen = () => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current)
      hideTimeout.current = null
    }
    setOpen(true)
  }

  const handleClose = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current)
    hideTimeout.current = setTimeout(() => setOpen(false), 150)
  }

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className={cn(
          "text-sm font-medium transition-colors",
          isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
        )}
      >
        {item.name}
      </Link>
    )
  }

  return (
    <div ref={ref} className="relative" onMouseEnter={handleOpen} onMouseLeave={handleClose}>
      <button
        className={cn(
          "flex items-center gap-1 text-sm font-medium transition-colors",
          isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
        )}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {item.name}
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>
      <div
        className={cn(
          "absolute top-full left-0 mt-2 w-56 rounded-xl border border-border bg-card shadow-lg overflow-hidden transition-all duration-200",
          open ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-2"
        )}
      >
        <div className="py-2">
          {item.children!.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className={cn(
                "block px-4 py-2 text-sm transition-colors",
                pathname === child.href
                  ? "text-primary font-medium bg-primary/5"
                  : "text-foreground/80 hover:bg-muted hover:text-primary"
              )}
              onClick={() => setOpen(false)}
            >
              {child.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

const navigation = [
  { name: "Startseite", href: "/" },
  {
    name: "Verein",
    href: "/verein",
    children: [
      { name: "Über Uns", href: "/verein/ueber-uns" },
      { name: "Satzung", href: "/verein/satzung" },
      { name: "Aktivitäten", href: "/verein/aktivitaten" },
      { name: "Kooperationen", href: "/verein/kooperationen" },
      { name: "Foto Galerie", href: "/verein/foto-galerie" },
      { name: "Ehrenamt", href: "/verein/ehrenamt" },
      { name: "Spenden", href: "/verein/spenden" },
    ],
  },
  {
    name: "Projekte",
    href: "/projekte",
    children: [
      { name: "Deutsches Kinderhilfswerk", href: "/projekte/deutsches-kinderhilfswerk" },
      { name: "AUF!leben", href: "/projekte/auf-leben" },
      { name: "MiA-Frauen", href: "/projekte/mia-frauen" },
      { name: "MiA-Männer", href: "/projekte/mia-maenner" },
      { name: "Komm-An NRW", href: "/projekte/komm-an-nrw" },
      { name: "Zukunftpaket 2023", href: "/projekte/zukunftpaket-2023" },
    ],
  },
  {
    name: "Sprachkurse",
    href: "/sprachkurse",
    children: [
      { name: "Deutsch als Fremdsprache", href: "/sprachkurse/deutsch-als-fremdsprache" },
      { name: "Türkisch", href: "/sprachkurse/tuerkisch" },
      { name: "Englisch", href: "/sprachkurse/englisch" },
    ],
  },
  { name: "Nachhilfe", href: "/nachhilfe" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    setMobileMenuOpen(false)
    setMobileExpanded(null)
  }, [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:023658878188" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">02365 8878188</span>
            </a>
            <a href="mailto:info@bikult-ev.de" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">info@bikult-ev.de</span>
            </a>
          </div>
          <div className="text-xs sm:text-sm">
            Victoriastraße 24, 45772 Marl
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/">
            <BiKultLogo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navigation.map((item) => (
              <DropdownItem key={item.href} item={item} />
            ))}
            <Button asChild size="sm">
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            mobileMenuOpen ? "max-h-[500px] pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-border">
            {navigation.map((item) => (
              <div key={item.href}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex-1 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors",
                      pathname === item.href || pathname.startsWith(item.href + "/")
                        ? "text-primary bg-primary/5"
                        : "text-foreground/80 hover:text-primary hover:bg-muted"
                    )}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <button
                      className="px-3 py-2.5 text-foreground/60 hover:text-primary"
                      onClick={() => setMobileExpanded(mobileExpanded === item.href ? null : item.href)}
                    >
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          mobileExpanded === item.href && "rotate-180"
                        )}
                      />
                    </button>
                  )}
                </div>
                {item.children && mobileExpanded === item.href && (
                  <div className="ml-4 flex flex-col gap-1 mt-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "px-4 py-2 text-sm rounded-lg transition-colors",
                          pathname === child.href
                            ? "text-primary bg-primary/5 font-medium"
                            : "text-foreground/70 hover:text-primary hover:bg-muted"
                        )}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 pt-3">
              <Button asChild className="w-full" size="sm">
                <Link href="/kontakt">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
