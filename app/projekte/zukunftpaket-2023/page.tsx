import { PageHero } from "@/components/page-hero"
import { CheckCircle2, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const highlights = [
  "Aktivitäten und Freizeitangebote für Kinder und Jugendliche",
  "Stärkung von Partizipation und Eigenverantwortung",
  "Förderung von Kreativität und kulturellem Ausdruck",
  "Sport- und Bewegungsangebote",
  "Inklusive Projekte für alle gesellschaftlichen Gruppen",
  "Lokale Umsetzung in Marl und Umgebung",
]

export const metadata = {
  title: "Zukunftpaket 2023 – BiKult e.V.",
  description: "Das Zukunftpaket – Engagiert für Kinder und Jugendliche. BiKult e.V. als lokaler Träger in Marl.",
}

export default function ZukunftpaketPage() {
  return (
    <main>
      <PageHero
        title="Zukunftpaket 2023"
        subtitle="Engagiert für Kinder und Jugendliche — Chancen eröffnen, Potenziale entfalten."
      />

      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Das <strong>Zukunftpaket für Bewegung, Kultur und Gesundheit</strong> ist ein Bundesprogramm, das
              Kinder und Jugendliche dabei unterstützt, neue Erfahrungen zu sammeln, ihre Stärken zu entdecken
              und aktiv am gesellschaftlichen Leben teilzuhaben.
            </p>
            <p>
              BiKult e.V. hat das Zukunftpaket als lokaler Träger in Marl umgesetzt und Kindern und Jugendlichen
              Zugang zu vielfältigen Angeboten ermöglicht, die sie sonst möglicherweise nicht hätten.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-primary/5 border border-primary/20 rounded-xl p-5">
            <Sparkles className="h-10 w-10 text-primary shrink-0" />
            <div>
              <p className="font-semibold">Bundesprogramm</p>
              <p className="text-sm text-muted-foreground">Gefördert durch das Bundesministerium für Familie, Senioren, Frauen und Jugend</p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold mb-6">Projektschwerpunkte</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <h2 className="font-serif text-2xl font-bold mb-4">Mehr erfahren</h2>
            <p className="text-muted-foreground mb-6">
              Möchten Sie mehr über unsere Projekte erfahren oder an zukünftigen Programmen teilnehmen?
            </p>
            <Button asChild>
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
