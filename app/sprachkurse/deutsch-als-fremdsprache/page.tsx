import { PageHero } from "@/components/page-hero"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const whyBikult = [
  {
    title: "Professionelle Lehrkräfte",
    description: "Qualifizierte Lehrer begleiten Sie auf Ihrer Reise zur deutschen Sprache und Kultur.",
  },
  {
    title: "Ganzheitlicher Ansatz",
    description:
      "Neben dem Sprachunterricht bieten wir Einblicke in die deutsche Lebensweise und Gesellschaft.",
  },
  {
    title: "Individuelle Betreuung",
    description: "Wir stehen Ihnen zur Seite, um sicherzustellen, dass Sie bestmöglich von Ihrem Kurs profitieren.",
  },
  {
    title: "Praxisnahe Anwendung",
    description: "Lernen Sie die Sprache im Alltag anzuwenden und integrieren Sie sich schneller.",
  },
]

const levels = ["A1 – Grundstufe", "A2 – Grundkenntnisse", "B1 – Schwellenniveau", "B2 – Selbstständige Sprachverwendung"]

export const metadata = {
  title: "Deutsch als Fremdsprache – BiKult e.V.",
  description:
    "Integrationskurse und Deutschkurse für Neuzugewanderte bei BiKult e.V. in Marl. Professionelle Lehrkräfte, ganzheitlicher Ansatz.",
}

export default function DeutschAlsFremdsprachePage() {
  return (
    <>
      <PageHero
        title="Deutsch als Fremdsprache"
        subtitle="Ihre Brücke zur deutschen Sprache und Kultur — herzlich willkommen bei BiKult e.V.!"
        
      />

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-muted-foreground">
              Liebe Neuzugewanderte, wir bei BiKult e.V. heißen Sie herzlich willkommen, unseren
              Integrationskurs für Menschen, die neu nach Deutschland gekommen sind, zu entdecken! Der
              Deutschkurs bietet Ihnen nicht nur die Möglichkeit, die deutsche Sprache zu erlernen,
              sondern auch in die vielfältige Kultur und Gesellschaft Deutschlands einzutauchen.
            </p>
          </div>

          {/* Why BiKult */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">
              Warum BiKult e.V. Deutschkurs?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {whyBikult.map((item, i) => (
                <div
                  key={item.title}
                  className={`rounded-2xl p-6 border ${
                    i % 2 === 0
                      ? "bg-primary/5 border-primary/10"
                      : "bg-accent/5 border-accent/10"
                  }`}
                >
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Levels & CTA */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Kurslevels</h2>
              <ul className="space-y-3">
                {levels.map((level) => (
                  <li key={level} className="flex items-center gap-3 bg-card rounded-xl px-4 py-3 border border-border">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-medium text-foreground">{level}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm mt-4">
                Für Einstufung und Kursstart nehmen Sie bitte Kontakt mit uns auf.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 border border-border">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Jetzt anmelden</h3>
              <p className="text-muted-foreground mb-6">
                Für weitere Informationen zu unserem Integrationskurs und zur Anmeldung nehmen Sie gerne
                Kontakt mit uns auf. Wir sind bereit, Ihnen bei Ihrem Schritt zur Integration und deutschen
                Sprache behilflich zu sein!
              </p>
              <div className="flex flex-col gap-3">
                <Button asChild>
                  <Link href="/kontakt">
                    Kontakt aufnehmen <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:023658878188">02365 8878188</a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/sprachkurse">Alle Sprachkurse</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
