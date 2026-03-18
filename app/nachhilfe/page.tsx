import { PageHero } from "@/components/page-hero"
import { BookOpen, GraduationCap, Users, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    icon: BookOpen,
    title: "Lernförderung",
    description:
      "Schulische, soziale und weitere Kernkompetenzen sind wichtige Bausteine für Kinder und Jugendliche. Wir unterstützen Schülerinnen und Schüler dabei, noch besser zu werden oder Lernrückstände aufzuholen.",
  },
  {
    icon: GraduationCap,
    title: "Nachhilfe",
    description:
      "Individuelle Unterstützung in allen Schulfächern. Von der Grundschule bis zum Abitur — wir helfen bei Hausaufgaben, Prüfungsvorbereitung und dem Aufarbeiten von Lernrückständen.",
  },
  {
    icon: Users,
    title: "Lerncoaching",
    description:
      "Unsere Schülerinnen und Schüler werden je nach Bedarf durch einen Lerncoach beraten, damit sie selbstbewusster, informierter und mit mehr Teilhabe an der Gesellschaft voranschreiten.",
  },
]

const highlights = [
  "Einzelunterricht und Gruppenlernen",
  "Alle Schulstufen und Schulfächer",
  "Prüfungsvorbereitung",
  "Hausaufgabenbetreuung",
  "Förderung durch Bildungs- und Teilhabepaket (BuT)",
  "Individuelle Lernpläne",
]

export const metadata = {
  title: "Lernförderung & Nachhilfe – BiKult e.V.",
  description:
    "Lernförderung, Nachhilfe und Lerncoaching für Kinder und Jugendliche in Marl. Unterstützung in allen Schulfächern.",
}

export default function NachhilfePage() {
  return (
    <>
      <PageHero
        title="Lernförderung & Nachhilfe"
        subtitle="Wir unterstützen Kinder und Jugendliche auf ihrem Bildungsweg — durch individuelle Förderung, Lernbegleitung und Coaching."
        breadcrumbs={[{ label: "Lernförderung & Nachhilfe", href: "/nachhilfe" }]}
      />

      {/* Main Content */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    i % 2 === 0 ? "bg-primary/10" : "bg-accent/10"
                  }`}
                >
                  <feature.icon className={`h-7 w-7 ${i % 2 === 0 ? "text-primary" : "text-accent"}`} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground mt-3">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Unser Angebot</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6">
                In unserer lernWerkstatt
              </h2>
              <p className="text-muted-foreground mb-4">
                Um heutzutage den Anschluss nicht zu verlieren, ist es wichtig, die eigenen Fähigkeiten
                auszubauen. Chancengleichheit und Chancengerechtigkeit sind für alle da.
              </p>
              <p className="text-muted-foreground mb-8">
                Sie können einfach vorbeikommen und einen privaten, individuellen Vertrag abgestimmt auf
                Ihren Bedarf schließen. Kinder und Jugendliche, die finanzielle Unterstützung benötigen,
                können durch das Bildungs- und Teilhabepaket (BuT) gefördert werden.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 border border-border">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Jetzt anmelden</h3>
              <p className="text-muted-foreground mb-6">
                Nehmen Sie Kontakt mit uns auf oder kommen Sie direkt vorbei. Wir beraten Sie gerne zu
                den passenden Fördermöglichkeiten.
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
