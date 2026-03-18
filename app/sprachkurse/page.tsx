import { PageHero } from "@/components/page-hero"
import { Globe, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const courses = [
  {
    level: "A1 / A2",
    title: "Grundkurs Deutsch",
    description: "Für absolute Anfänger. Sie lernen die Grundlagen der deutschen Sprache für den Alltag.",
    duration: "Kursstart nach Vereinbarung",
  },
  {
    level: "B1 / B2",
    title: "Aufbaukurs Deutsch",
    description: "Vertiefen Sie Ihre Kenntnisse und bereiten Sie sich auf Prüfungen und den Beruf vor.",
    duration: "Kursstart nach Vereinbarung",
  },
  {
    level: "Alle Niveaus",
    title: "MiA – Migrantinnen stark im Alltag",
    description:
      "Ein niedrigschwelliges Sprachförderangebot für Migrantinnen und geflüchtete Frauen. Kinderbetreuung wird angeboten.",
    duration: "Laufendes Programm",
  },
  {
    level: "Integrationskurs",
    title: "Integrationskurs mit Orientierungskurs",
    description:
      "Offizieller Integrationskurs des BAMF. Sprachkompetenz und Orientierung im deutschen Gesellschaftsleben.",
    duration: "Nach Absprache",
  },
]

const benefits = [
  "Professionelle, qualifizierte Lehrkräfte",
  "Ganzheitlicher Ansatz: Sprache & Kultur",
  "Individuelle Betreuung und Unterstützung",
  "Praxisnahe Anwendung im Alltag",
  "Alle Niveaustufen (A1–C1)",
  "Zertifikate und offizielle Kursnachweise",
]

export const metadata = {
  title: "Sprachkurse – BiKult e.V.",
  description:
    "Deutschkurse und Sprachförderung für alle Niveaus. Integrationskurse, MiA-Kurse und Deutschunterricht bei BiKult e.V. in Marl.",
}

export default function SprachkursePage() {
  return (
    <>
      <PageHero
        title="Sprachkurse"
        subtitle="Ihre Brücke zur deutschen Sprache und Kultur — professionelle Kurse für alle Niveaustufen in Marl."
        breadcrumbs={[{ label: "Sprachkurse", href: "/sprachkurse" }]}
      />

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Courses Grid */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Unsere Kurse</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-4">
                Kursangebote im Überblick
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course, i) => (
                <div
                  key={course.title}
                  className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                      i % 2 === 0
                        ? "bg-primary/10 text-primary"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    {course.level}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-foreground">{course.title}</h3>
                  <p className="text-muted-foreground mt-3">{course.description}</p>
                  <p className="text-sm text-muted-foreground mt-4 font-medium">{course.duration}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why BiKult */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-10 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground">Warum BiKult e.V.?</h2>
              </div>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Anmeldung</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4">
                Kurs buchen
              </h2>
              <p className="text-muted-foreground mb-4">
                Liebe Neuzugewanderte, wir bei BiKult e.V. heißen Sie herzlich willkommen! Unser Deutschkurs
                bietet Ihnen nicht nur die Möglichkeit, die deutsche Sprache zu erlernen, sondern auch in die
                vielfältige Kultur Deutschlands einzutauchen.
              </p>
              <p className="text-muted-foreground mb-8">
                Für weitere Informationen und zur Anmeldung nehmen Sie gerne Kontakt mit uns auf.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild>
                  <Link href="/kontakt">
                    Jetzt anmelden <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/sprachkurse/deutsch-als-fremdsprache">Deutsch als Fremdsprache</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
