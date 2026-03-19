import { PageHero } from "@/components/page-hero"
import { Target, Heart, Lightbulb, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const values = [
  {
    icon: Target,
    title: "Unsere Mission",
    description: "Wir fördern Bildung und kulturellen Austausch, um Menschen aller Hintergründe zu unterstützen und ihre Potenziale zu entfalten.",
  },
  {
    icon: Heart,
    title: "Gemeinschaft",
    description: "Ein Ort der Begegnung, an dem Vielfalt gelebt und kultureller Austausch gefördert wird.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Moderne Lehrmethoden und kreative Ansätze für nachhaltigen Lernerfolg.",
  },
  {
    icon: Users,
    title: "Zusammenhalt",
    description: "Gemeinsam stark — wir bauen Brücken zwischen Kulturen und Generationen.",
  },
]

const subpages = [
  {
    title: "Über Uns",
    description: "Erfahren Sie mehr über Geschichte, Mission und Werte des BiKult e.V.",
    href: "/verein/ueber-uns",
  },
  {
    title: "Aktivitäten",
    description: "Entdecken Sie unsere vielfältigen kulturellen Veranstaltungen und Aktivitäten.",
    href: "/verein/aktivitaten",
  },
  {
    title: "Foto Galerie",
    description: "Eindrücke aus unserem Vereinsleben in Bildern.",
    href: "/verein/foto-galerie",
  },
  {
    title: "Ehrenamt",
    description: "Werden Sie Teil unserer ehrenamtlichen Gemeinschaft und gestalten Sie etwas Gutes.",
    href: "/verein/ehrenamt",
  },
  {
    title: "Kooperationen",
    description: "Unsere Partner und Kooperationen auf lokaler und überregionaler Ebene.",
    href: "/verein/kooperationen",
  },
  {
    title: "Spenden",
    description: "Unterstützen Sie unsere Arbeit mit einer Spende und machen Sie einen Unterschied.",
    href: "/verein/spenden",
  },
]

export const metadata = {
  title: "Verein – BiKult e.V.",
  description: "Erfahren Sie mehr über den Verein BiKult e.V. – unsere Geschichte, Mission und Werte.",
}

export default function VereinPage() {
  return (
    <>
      <PageHero
        title="Unser Verein"
        subtitle="Das Bildungs- und Kulturzentrum e.V. (BiKult) wurde gegründet, um Menschen in Marl und Umgebung bei ihrer persönlichen und beruflichen Entwicklung zu unterstützen."
        breadcrumbs={[{ label: "Verein", href: "/verein" }]}
      />

      {/* About Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Über Uns</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-4 text-balance">
                Bildung verbindet Menschen
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p className="text-lg">
                  Das Bildungs- und Kulturzentrum e.V. (BiKult) wurde gegründet, um Menschen in Marl
                  und Umgebung bei ihrer persönlichen und beruflichen Entwicklung zu unterstützen.
                </p>
                <p>
                  Unser Zentrum bietet ein breites Spektrum an Bildungsangeboten: von Nachhilfe und
                  Lernförderung für Schüler aller Altersgruppen bis hin zu Deutschkursen für Menschen
                  mit Migrationshintergrund. Wir glauben an die Kraft der Bildung als Schlüssel zur
                  gesellschaftlichen Teilhabe.
                </p>
                <p>
                  Durch unsere kulturellen Aktivitäten schaffen wir Räume für Begegnung, Austausch
                  und gegenseitiges Verständnis. Wir arbeiten eng mit Partnern wie dem Deutschen
                  Kinderhilfswerk und dem Programm „AUF!leben – Zukunft ist jetzt" zusammen.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                {subpages.map((p) => (
                  <Button key={p.href} variant="outline" asChild>
                    <Link href={p.href}>
                      {p.title} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      index % 2 === 0 ? "bg-primary/10" : "bg-accent/10"
                    }`}
                  >
                    <value.icon className={`h-6 w-6 ${index % 2 === 0 ? "text-primary" : "text-accent"}`} />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subpages CTA */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8">Mehr aus unserem Verein</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {subpages.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground mt-2">{p.description}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4">
                  Mehr erfahren <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
