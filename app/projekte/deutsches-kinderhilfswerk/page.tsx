import { PageHero } from "@/components/page-hero"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const highlights = [
  "24 Angebotstage mit vielfältigen Aktivitäten",
  "Frühlingsfest als Kennenlerntag",
  "Regelmäßige Wochenend-Workshops mit künstlerischen Aktivitäten",
  "P\u00e4dagogisches Projekt: 'Gef\u00fchle st\u00e4rken & innere St\u00e4rken entdecken'",
  "Gemeinsamer Ausflug zum Kettelerhof mit 35 Kindern",
  "Feierliche Abschlussrunde mit Urkunden und Geschenken",
  "Beratungsangebote und Austauschgespräche für Eltern",
]

const team = [
  "Ehrenamtliche Helfer:innen",
  "Staatlich anerkannte Pädagogin",
  "Ehrenamtliche Künstlerin",
]

const galleryImages = [
  { src: "/projects/kinderhilfswerk.jpg", alt: "Kinder bei gemeinsamen Aktivitäten" },
  { src: "/projects/kinderhilfswerk-2.jpg", alt: "Gemeinsam Stark – Kinder und Familie" },
  { src: "/projects/kinderhilfswerk-3.jpg", alt: "Pädagogisches Projekt mit Kindern" },
]

export const metadata = {
  title: "Deutsches Kinderhilfswerk – Gemeinsam Stark | Projekte – BiKult e.V.",
  description:
    "Das Projekt 'Gemeinsam Stark' des BiKult e.V. unterstützte geflüchtete Kinder und ihre Familien mit Förderung des Deutschen Kinderhilfswerks.",
}

export default function DeutschesKinderhilfswerkPage() {
  return (
    <>
      <PageHero
        title="Deutsches Kinderhilfswerk"
        subtitle='Das Projekt „Gemeinsam Stark" des Bildungs- und Kulturzentrums BiKult e.V. in Marl — umgesetzt mit Unterstützung des Deutschen Kinderhilfswerks.'
        
      />

      {/* Gallery */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {galleryImages.map((img) => (
              <div key={img.src} className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Gemeinsam Stark
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Das Projekt „Gemeinsam Stark" des Bildungs- und Kulturzentrums BiKult e.V. in Marl wurde
                    mit Unterstützung des Deutschen Kinderhilfswerks umgesetzt. Ziel war es, geflüchtete
                    Kinder im Alter von 7 bis 13 Jahren und ihre Familien in ihrer emotionalen Entwicklung zu
                    stärken, ihre sprachliche und soziale Integration zu fördern und ihnen gesellschaftliche
                    Teilhabe zu ermöglichen.
                  </p>
                  <p>
                    Gleichzeitig erhielten die Eltern durch Beratungsangebote und Austauschgespräche
                    Unterstützung, sodass die gesamte Familie in den Integrationsprozess eingebunden wurde.
                  </p>
                  <p>
                    Eine besondere Rolle nahm die Brückenfunktion des Projekts ein: Es schuf einen leichten
                    Zugang zu Freizeit-, Bildungs- und Unterstützungsangeboten, die für viele Familien sonst
                    schwer erreichbar sind. Niedrigschwellige Veranstaltungen wie das Frühlingsfest, kreative
                    Workshops und gemeinsame Ausflüge halfen dabei, Vertrauen aufzubauen, Barrieren zu
                    überwinden und die Familien nachhaltig in Netzwerke einzubinden.
                  </p>
                  <p>
                    Die Kinder und Eltern wurden aktiv an Planung, Umsetzung und Feedback beteiligt, wodurch
                    ein lebendiges Miteinander entstand, das über die Projektlaufzeit hinaus wirkt.
                  </p>
                  <p>
                    Durch die Verbindung von kreativen, pädagogischen und gemeinschaftlichen Elementen gelang
                    es, sowohl Kinder als auch Eltern zu erreichen, emotionale Stabilität und
                    Selbstwirksamkeit zu fördern und Integration aktiv zu leben. Das Projekt hat damit
                    nachhaltig dazu beigetragen, geflüchteten Familien einen sicheren Raum, neue
                    Perspektiven und echte Teilhabe zu ermöglichen.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Umsetzungsteam</h2>
                <p className="text-muted-foreground mb-4">
                  Das Projekt wurde in enger Zusammenarbeit mit fachkundigen und engagierten Menschen
                  umgesetzt:
                </p>
                <div className="flex flex-wrap gap-3">
                  {team.map((member) => (
                    <span
                      key={member}
                      className="px-4 py-2 bg-card border border-border rounded-xl text-sm font-medium text-foreground"
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Projekthöhepunkte</h3>
                <ul className="space-y-3">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Zielgruppe</h3>
                <p className="text-muted-foreground text-sm">
                  Geflüchtete Kinder im Alter von 7 bis 13 Jahren und ihre Familien in Marl.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Förderer</h3>
                <p className="text-muted-foreground text-sm mb-4">Deutsches Kinderhilfswerk</p>
                <Button variant="outline" size="sm" asChild className="w-full mb-2">
                  <Link href="/projekte">Alle Projekte</Link>
                </Button>
                <Button asChild size="sm" className="w-full">
                  <Link href="/kontakt">
                    Kontakt <ArrowRight className="ml-1 h-4 w-4" />
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
