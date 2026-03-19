import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "AUF!leben – Zukunft ist jetzt",
    description: "Ein Programm zur Unterstützung junger Menschen bei der Bewältigung der Pandemiefolgen. Gefördert vom Bundesministerium für Familie, Senioren, Frauen und Jugend.",
    image: "/projects/auf-leben.jpg",
    tag: "Jugendförderung",
    href: "/projekte/auf-leben"
  },
  {
    title: "Deutsches Kinderhilfswerk",
    description: "Partnerschaft für Projekte zur Förderung von Kindern und Jugendlichen in Deutschland. Gemeinsam setzen wir uns für Chancengleichheit ein.",
    image: "/projects/kinderhilfswerk.jpg",
    tag: "Partnerschaft",
    href: "/projekte/deutsches-kinderhilfswerk"
  },
  {
    title: "Komm-AN NRW",
    description: "Förderung gesellschaftlicher Teilhabe und zivilgesellschaftlichen Engagements in Nordrhein-Westfalen. Ein Unterstützungsangebot für Neuzugewanderte.",
    image: "/projects/komm-an-nrw.jpg",
    tag: "Integration",
    href: "/projekte/komm-an-nrw"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-[#FAFAFA] text-foreground dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Projekte</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-balance">
            Unsere aktuellen Projekte und Partnerschaften
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            Wir arbeiten mit renommierten Partnern zusammen, um nachhaltige Bildungs- und Kulturprojekte zu realisieren.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group relative overflow-hidden rounded-2xl bg-background shadow-sm border border-border hover:shadow-md transition-colors block"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                  {project.tag}
                </span>
                <h3 className="font-serif text-xl font-semibold mt-4 group-hover:text-primary transition-colors flex items-start gap-2">
                  {project.title}
                  <ArrowUpRight className="h-5 w-5 shrink-0 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-foreground/70 mt-2 text-sm">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/projekte"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/30 text-foreground hover:border-foreground hover:bg-foreground/5 font-medium transition-all"
          >
            Alle Projekte ansehen <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
