import { PageHero } from "@/components/page-hero"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const benefits = [
  "Erfahrene und qualifizierte Lehrkräfte",
  "Kleine Lerngruppen für individuelle Betreuung",
  "Alle Niveaustufen von A1 bis C1",
  "Praxisnaher Unterricht mit Alltagsbezug",
  "Flexible Kurszeiten",
  "Zertifikate nach Abschluss",
]

const levels = ["A1 – Grundstufe", "A2 – Grundkenntnisse", "B1 – Mittelstufe", "B2 – Selbstständige Sprachverwendung", "C1 – Fortgeschritten"]

export const metadata = {
  title: "Englischkurse – BiKult e.V.",
  description: "Englischkurse für alle Niveaus bei BiKult e.V. in Marl. Für Beruf, Reisen oder persönliche Weiterentwicklung.",
}

export default function EnglischPage() {
  return (
    <main>
      <PageHero
        title="Englisch"
        subtitle="Englischkurse für alle Niveaustufen — beruflich und privat weiterkommen."
      />

      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Englisch ist die Sprache der internationalen Kommunikation. Ob für den Beruf, für Reisen oder für
              die persönliche Weiterentwicklung — unsere Englischkurse bereiten Sie optimal vor.
            </p>
            <p>
              Bei BiKult e.V. in Marl bieten wir Englischkurse für alle Niveaustufen an. Unsere erfahrenen
              Lehrkräfte sorgen dafür, dass Sie in kleinen Gruppen zielgerichtet und effektiv lernen.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold mb-6">Verfügbare Niveaus</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {levels.map((level, i) => (
                <div key={i} className="text-center px-4 py-3 rounded-xl bg-primary/10 text-primary font-medium text-sm">
                  {level}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold mb-6">Warum BiKult e.V.?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <h2 className="font-serif text-2xl font-bold mb-4">Jetzt anmelden!</h2>
            <p className="text-muted-foreground mb-6">
              Interesse an einem Englischkurs? Kontaktieren Sie uns für eine Beratung und Anmeldung.
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
