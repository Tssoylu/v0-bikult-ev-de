import { PageHero } from "@/components/page-hero"
import { CheckCircle2, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const offers = [
  "Alltagspraktischer Deutschunterricht für Männer",
  "Begleitung bei Behördengängen und Bewerbungsprozessen",
  "Berufsberatung und Informationen zum deutschen Arbeitsmarkt",
  "Workshops zu Erziehung, Familie und gesellschaftlicher Teilhabe",
  "Freizeitangebote und Sportprojekte zur sozialen Integration",
  "Vernetzung mit anderen Integrationsangeboten in Marl",
]

export const metadata = {
  title: "MiA Männer – BiKult e.V.",
  description: "MiA-Männer: BAMF-gefördertes Integrationsprogramm für Männer mit Einwanderungsgeschichte bei BiKult e.V. in Marl.",
}

export default function MiaMaennerPage() {
  return (
    <main>
      <PageHero
        title="MiA – Männer im Alltag"
        subtitle="Stärkung und Integration von Männern mit Einwanderungsgeschichte in Marl."
      />

      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Das Programm <strong>MiA – Männer im Alltag</strong> richtet sich an Männer mit Einwanderungsgeschichte und unterstützt sie dabei, sich erfolgreich in Deutschland zurechtzufinden.
            </p>
            <p>
              Gefördert vom <strong>Bundesamt für Migration und Flüchtlinge (BAMF)</strong> bietet BiKult e.V. alltagspraktischen Sprachunterricht, Beratung und konkrete Unterstützung bei der Integration in den deutschen Alltag und Arbeitsmarkt.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-xl p-4">
            <Users className="h-10 w-10 text-primary shrink-0" />
            <div>
              <p className="font-semibold">Gefördert durch das BAMF</p>
              <p className="text-sm text-muted-foreground">Bundesamt für Migration und Flüchtlinge</p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold mb-6">Unser Angebot</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {offers.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <h2 className="font-serif text-2xl font-bold mb-4">Interesse? Kontaktieren Sie uns!</h2>
            <p className="text-muted-foreground mb-6">
              Erfahren Sie mehr über das MiA-Programm für Männer oder melden Sie sich direkt an.
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
