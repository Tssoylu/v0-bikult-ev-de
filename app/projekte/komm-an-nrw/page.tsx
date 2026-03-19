import { PageHero } from "@/components/page-hero"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const highlights = [
  "Individuelle Beratung und Begleitung von Neuzugewanderten",
  "Brücke zwischen Beratungsstellen und der Gemeinschaft",
  "Alltagsunterstützung (Behördengänge, Schulanmeldung, Arzttermine)",
  "Vernetzung mit lokalen Angeboten und Institutionen",
  "Beschäftigung mit sozialer Gerechtigkeit und Teilhabe",
  "Muttersprachliche Beratung in mehreren Sprachen",
]

export const metadata = {
  title: "Komm-An NRW – BiKult e.V.",
  description: "Das Landesprogramm Komm-An NRW zur Unterstützung von Neuzugewanderten in Marl. BiKult e.V. als lokaler Träger.",
}

export default function KommAnNRWPage() {
  return (
    <main>
      <PageHero
        title="Komm-An NRW"
        subtitle="Ankommen und Teilhabe fördern — Unterstützung für Neuzugewanderte in Marl."
      />

      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Das Landesprogramm <strong>Komm-An NRW</strong> des Ministeriums für Kinder, Jugend, Familie, Gleichstellung, Flucht und Integration unterstützt Kommunen dabei, Neuzugewanderte beim Ankommen und bei der Teilhabe am gesellschaftlichen Leben zu fördern.
            </p>
            <p>
              Das Bildungs- und Kulturzentrum BiKult e.V. ist lokaler Träger dieses Programms in Marl und vernetzt Neuzugewanderte mit den vorhandenen Beratungs- und Unterstützungsangeboten in der Region.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold mb-6">Was wir anbieten</h2>
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
            <h2 className="font-serif text-2xl font-bold mb-4">Unterstützung anfragen</h2>
            <p className="text-muted-foreground mb-6">
              Sie sind neu in Marl und benötigen Unterstützung beim Ankommen? Wir helfen Ihnen gerne weiter.
            </p>
            <Button asChild>
              <Link href="/kontakt">Jetzt Kontakt aufnehmen</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
