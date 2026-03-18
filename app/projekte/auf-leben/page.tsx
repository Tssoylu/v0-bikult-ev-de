import { PageHero } from "@/components/page-hero"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const goals = [
  "Unterstützung von Kindern und Jugendlichen nach der Corona-Pandemie",
  "Förderung sozialer Teilhabe und gemeinschaftlicher Erlebnisse",
  "Stärkung des Integrationsprozesses für geflüchtete Kinder",
  "Finanzielle Förderung lokaler Träger durch den Zukunftsfonds der DKJS",
  "Vernetzung von lok alen und überregionalen Trägern",
]

const timeline = [
  {
    period: "September 2021",
    title: "Projektstart",
    description: "Start der Förderperiode durch den Zukunftsfonds der Deutschen Kinder- und Jugendstiftung.",
  },
  {
    period: "2021 / 2022",
    title: "Aktivitäten & Ausflüge",
    description:
      "BiKult e.V. organisierte Freizeitaktivitäten und einen Ausflug nach Berlin für geflüchtete Kinder und Jugendliche.",
  },
  {
    period: "August 2022",
    title: "Projektabschluss",
    description: "Erfolgreicher Abschluss der Förderperiode. Nachhaltige Wirkung in der Gemeinschaft.",
  },
]

export const metadata = {
  title: "AUF!leben – Zukunft ist jetzt | Projekte – BiKult e.V.",
  description:
    "Das Programm AUF!leben der DKJS unterstützte Kinder und Jugendliche nach der Corona-Pandemie. BiKult e.V. als lokaler Träger.",
}

export default function AufLebenPage() {
  return (
    <>
      <PageHero
        title="AUF!leben – Zukunft ist jetzt"
        subtitle="Ein Programm der Deutschen Kinder- und Jugendstiftung zur Unterstützung von Kindern und Jugendlichen nach der Corona-Pandemie."
        breadcrumbs={[
          { label: "Projekte", href: "/projekte" },
          { label: "AUF!leben", href: "/projekte/auf-leben" },
        ]}
      />

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Welches Ziel hat das Programm?
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Das Programm AUF!leben – Zukunft ist jetzt richtet sich an Kinder und Jugendliche, die
                    durch die Corona-Pandemie besonders belastet wurden. Für viele bedeutete die Pandemie
                    zwei Jahre starker Einschränkungen — zusätzlich zu den Herausforderungen eines
                    Fluchthintergrunds.
                  </p>
                  <p>
                    BiKult e.V. organisierte als lokaler Träger Ausflüge und Aktivitäten, darunter eine
                    Reise in die Hauptstadt Berlin, um den Kindern eine Auszeit zu bieten und gleichzeitig
                    ihren Integrationsprozess zu unterstützen.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Für wen und mit wem?</h2>
                <p className="text-muted-foreground mb-4">
                  Das Programm wendet sich an lokale und regionale Träger, die wirksame Projekte im Bereich
                  der Kinder- und Jugendarbeit durchführen. Darüber hinaus werden überregionale gemeinnützige
                  Organisationen und Verbände als Umsetzungspartner gefördert.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Wie und wann?</h2>
                <p className="text-muted-foreground">
                  Im Mittelpunkt stand der von der DKJS aufgesetzte Zukunftsfonds, über den lokale Träger
                  Fördermittel für Angebote zwischen September 2021 und August 2022 erhalten konnten. Neben
                  der finanziellen Förderung profitieren Teilnehmende davon, Teil einer starken Gemeinschaft
                  mit einem gemeinsamen Ziel zu sein.
                </p>
              </div>

              {/* Timeline */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Projektverlauf</h2>
                <div className="space-y-6">
                  {timeline.map((item, i) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 bg-primary rounded-full mt-1.5 shrink-0" />
                        {i < timeline.length - 1 && <div className="w-0.5 bg-border flex-1 mt-2" />}
                      </div>
                      <div className="pb-6">
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">
                          {item.period}
                        </span>
                        <h3 className="font-semibold text-foreground mt-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Projektziele</h3>
                <ul className="space-y-3">
                  {goals.map((goal) => (
                    <li key={goal} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Förderer</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Deutsche Kinder- und Jugendstiftung (DKJS) im Rahmen des Programms „AUF!leben – Zukunft
                  ist jetzt"
                </p>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href="/projekte">Alle Projekte</Link>
                </Button>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Interesse?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Möchten Sie mehr über unsere Projekte erfahren oder mitarbeiten?
                </p>
                <Button asChild size="sm" className="w-full">
                  <Link href="/kontakt">
                    Kontakt aufnehmen <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
