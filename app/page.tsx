import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />

      {/* YouTube Channel */}
      <section className="py-16 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
            Jahresrückblick 2021/2022 auf YouTube
          </h2>
          <p className="text-background/70 mb-8">
            Schauen Sie sich unseren Jahresrückblick an und erfahren Sie mehr über unsere Aktivitäten.
          </p>
          <a
            href="https://www.youtube.com/channel/UCFEhVp3Nf0rSPjYYzHYN1sw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Auf YouTube ansehen
          </a>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Kontakt</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-4">
            Haben Sie Fragen zu unseren Angeboten?
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Wir freuen uns auf Ihre Nachricht. Nehmen Sie jetzt Kontakt mit uns auf — wir beraten Sie gerne.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/kontakt">
                Jetzt Kontakt aufnehmen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:023658878188">02365 8878188</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
