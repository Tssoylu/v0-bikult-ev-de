"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Play, Phone } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [liked, setLiked] = useState(false)
  const [hearts, setHearts] = useState<number[]>([])

  const handleLike = () => {
    setLiked((v) => !v)
    const id = Date.now()
    setHearts((prev) => [...prev, id])
    setTimeout(() => setHearts((prev) => prev.filter((h) => h !== id)), 1200)
  }

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#FAFAFA] dark:bg-background" />
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
                  <Phone className="mr-2 h-4 w-4" />
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

          {/* Right Content - YouTube Play Button */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative flex flex-col items-center gap-6">
              <a
                href="https://www.youtube.com/watch?v=ODCet76ZeOk"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block"
                aria-label="Jahresrückblick auf YouTube ansehen"
              >
                <span className="absolute inset-0 rounded-full bg-red-500/20 animate-ping [animation-duration:2s]" />
                <span className="flex w-28 h-28 bg-red-600 hover:bg-red-500 rounded-full items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-500">
                  <Play className="h-10 w-10 text-white fill-white ml-1" />
                </span>
              </a>
              <p className="text-sm text-muted-foreground">Jahresrückblick 2021 / 2022</p>

              {/* Heart button */}
              <div className="relative flex items-center">
                {hearts.map((id) => (
                  <span
                    key={id}
                    className="absolute bottom-full right-0 text-xl pointer-events-none"
                    style={{ animation: "floatUp 1.2s ease-out forwards" }}
                  >
                    ❤️
                  </span>
                ))}
                <button
                  onClick={handleLike}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-red-400 transition-all group/like"
                  aria-label="Gefällt mir"
                >
                  <Heart
                    className={`h-5 w-5 transition-all duration-300 ${
                      liked
                        ? "fill-red-500 text-red-500 scale-125"
                        : "text-muted-foreground group-hover/like:text-red-400 group-hover/like:scale-110"
                    }`}
                  />
                  <span className="text-sm text-muted-foreground">
                    {liked ? "Gefällt mir!" : "Gefällt mir"}
                  </span>
                </button>
              </div>

              <style>{`
                @keyframes floatUp {
                  0%   { opacity: 1; transform: translateY(0) scale(1); }
                  100% { opacity: 0; transform: translateY(-60px) scale(1.5); }
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
