"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Globe } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Willkommen bei BiKult e.V.
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight text-balance">
              Bildung und Kultur{" "}
              <span className="text-primary">verbinden</span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
              Das Bildungs und Kulturzentrum e.V. in Marl bietet Lernförderung, Sprachkurse und kulturelle Aktivitäten für eine erfolgreiche Integration und persönliche Entwicklung.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild className="group">
                <Link href="/nachhilfe">
                  Unsere Angebote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/kontakt">
                  Kontakt aufnehmen
                </Link>
              </Button>
            </div>

            {/* Key highlights */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              {["Lernförderung & Nachhilfe", "Sprachkurse & Integration", "Kulturelle Aktivitäten"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content - Bento Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4 lg:gap-6">
            <div className="col-span-2 bg-card rounded-2xl p-6 lg:p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-lg text-foreground">Lernförderung & Nachhilfe</h3>
                  <p className="text-muted-foreground mt-1 text-sm">Individuelle Unterstützung für schulischen Erfolg in allen Fächern</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif font-semibold text-foreground">Deutsch als Fremdsprache</h3>
              <p className="text-muted-foreground mt-2 text-sm">Sprachkurse für alle Niveaus</p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-foreground">Kulturelle Aktivitäten</h3>
              <p className="text-muted-foreground mt-2 text-sm">Veranstaltungen und Projekte</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
