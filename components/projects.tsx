import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "AUF!leben - Zukunft ist jetzt",
    description: "Ein Programm zur Unterstützung junger Menschen bei der Bewältigung der Pandemiefolgen. Gefördert vom Bundesministerium für Familie, Senioren, Frauen und Jugend.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop",
    tag: "Jugendförderung"
  },
  {
    title: "Deutsches Kinderhilfswerk",
    description: "Partnerschaft für Projekte zur Förderung von Kindern und Jugendlichen in Deutschland. Gemeinsam setzen wir uns für Chancengleichheit ein.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
    tag: "Partnerschaft"
  },
  {
    title: "Jahresrückblick 2021/2022",
    description: "Ein Blick auf unsere erfolgreichen Projekte und Aktivitäten. Über 500 Teilnehmer haben von unseren Programmen profitiert.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
    tag: "Rückblick"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Projekte</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-balance">
            Unsere aktuellen Projekte und Partnerschaften
          </h2>
          <p className="text-background/70 mt-6 text-lg">
            Wir arbeiten mit renommierten Partnern zusammen, um nachhaltige Bildungs- und Kulturprojekte zu realisieren.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <article 
              key={project.title}
              className="group relative overflow-hidden rounded-2xl bg-background/5 hover:bg-background/10 transition-colors"
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
                <p className="text-background/70 mt-2 text-sm">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
