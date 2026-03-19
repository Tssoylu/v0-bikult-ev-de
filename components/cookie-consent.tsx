"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent")
    if (!stored) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-background/10 bg-foreground text-background shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-background/80 flex-1 leading-relaxed">
          Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
          Mehr dazu in unserer{" "}
          <Link href="/datenschutz" className="underline underline-offset-2 hover:text-primary transition-colors">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={reject}
            className="px-4 py-2 text-sm rounded-md border border-background/30 text-background/70 hover:border-background/60 hover:text-background transition-colors"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  )
}
