import { PageHero } from "@/components/page-hero"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "AUF!leben – Zukunft ist jetzt",
    description:
      "Ein Programm der Deutschen Kinder- und Jugendstiftung (DKJS) zur Unterstützung von Kindern und Jugendlichen bei der Bewältigung der Folgen der Corona-Pandemie. BiKult e.V. als lokaler Träger förderte Aktivitäten und Reisen für Kinder.",
    tags: ["Jugendarbeit", "Integration", "DKJS-Förderung"],
    href: "/projekte/auf-leben",
    status: "Abgeschlossen (Sep 2021 – Aug 2022)",
  },
  {
    title: "Deutsches Kinderhilfswerk – Gemeinsam Stark",
    description:
      "Das Projekt 'Gemeinsam Stark' unterstützte geflüchtete Kinder (7–13 Jahre) und ihre Familien in ihrer emotionalen Entwicklung sowie sprachlichen und sozialen Integration. 24 Angebotstage mit Workshops, Ausflügen und kulturellen Aktivitäten.",
    tags: ["Geflüchtete Kinder", "Integration", "Kinderhilfswerk"],
    href: "/projekte/deutsches-kinderhilfswerk",
    status: "Abgeschlossen",
  },
  {
    title: "MiA – Migrantinnen stark im Alltag",
    description:
      "Ein BAMF-gefördertes Programm zur Stärkung und Integration von Frauen mit Einwanderungsgeschichte. MiA begleitet Migrantinnen mit alltagspraktischem Deutschunterricht, praktischen Workshops und der Anbindung an lokale Integrationsangebote.",
    tags: ["Migrantinnen", "Integration", "BAMF-Förderung", "Sprachförderung"],
    href: "/projekte/mia-frauen",
    status: "Laufendes Programm (2022+)",
  },
]

export const metadata = {
  title: "Projekte – BiKult e.V.",
  description:
    "Aktuelle und vergangene Projekte des BiKult e.V. — AUF!leben, Deutsches Kinderhilfswerk und weitere Initiativen.",
}

export default function ProjektePage() {
  return (
    <>
      <PageHero
        title="Unsere Projekte"
        subtitle="Wir engagieren uns in lokalen und überregionalen Projekten für Bildung, Integration und kulturellen Austausch."
        breadcrumbs={[{ name: "Projekte", href: "/projekte" }]}
      />

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link
                key={project.href}
                href={project.href}
                className="group bg-card rounded-3xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground flex-1">{project.description}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{project.status}</span>
                  <span className="inline-flex items-center gap-1 text-primary font-medium text-sm">
                    Mehr erfahren <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Partner Section */}
          <div className="mt-20 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">Unsere Partner</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              Wir arbeiten mit renommierten Organisationen zusammen, um unsere Projekte bestmöglich umzusetzen.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "Deutsche Kinder- und Jugendstiftung (DKJS)",
                "Deutsches Kinderhilfswerk",
                "BAMF (Bundesamt für Migration und Flüchtlinge)",
                "Verein für Internationale Jugendarbeit e.V. (VIJ)",
              ].map((partner) => (
                <div
                  key={partner}
                  className="bg-card rounded-xl px-5 py-3 border border-border text-sm font-medium text-foreground"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
