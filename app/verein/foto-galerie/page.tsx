import { PageHero } from "@/components/page-hero"

const galleries = [
  {
    title: "Weihnachtsstimmung mit ukrainischen Kindern",
    description: "Plätzchen backen und festliche Stimmung mit den Kindern.",
    count: "Mehrere Fotos",
  },
  {
    title: "Ebru-Workshop",
    description: "Kunstvolle Workshops mit der t\u00fcrkischen Marmorierkunst 'Ebru'.",
    count: "Mehrere Fotos",
  },
  {
    title: "Tag der Bibliotheken",
    description: "Kinder erkunden die B\u00fccherei Marl 'T\u00fcrmchen'.",
    count: "Mehrere Fotos",
  },
  {
    title: "Begegnungscafé",
    description: "Kulinarische und kulturelle Begegnungen im BiKult.",
    count: "Mehrere Fotos",
  },
  {
    title: "Neujahrsempfang 2023",
    description: "Festlicher Empfang zum neuen Jahr mit Musik und Spezialitäten.",
    count: "Mehrere Fotos",
  },
  {
    title: "MiA Kurse 2022",
    description: "Einblicke in unsere Sprachkurse für Migrantinnen.",
    count: "Mehrere Fotos",
  },
]

export const metadata = {
  title: "Foto Galerie – BiKult e.V.",
  description: "Bildergalerie des BiKult e.V. — Eindrücke aus Aktivitäten, Workshops und Veranstaltungen.",
}

export default function FotoGaleriePage() {
  return (
    <>
      <PageHero
        title="Foto Galerie"
        subtitle="Eindrücke aus unserem Vereinsleben — Momente, die bleiben."
        breadcrumbs={[
          { label: "Verein", href: "/verein" },
          { label: "Foto Galerie", href: "/verein/foto-galerie" },
        ]}
      />

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery placeholder grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {galleries.map((album, i) => (
              <div
                key={album.title}
                className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Placeholder image area */}
                <div
                  className={`h-48 flex items-center justify-center text-4xl font-bold ${
                    i % 3 === 0
                      ? "bg-gradient-to-br from-primary/20 to-primary/5"
                      : i % 3 === 1
                      ? "bg-gradient-to-br from-accent/20 to-accent/5"
                      : "bg-gradient-to-br from-muted to-background"
                  }`}
                >
                  📷
                </div>
                <div className="p-5">
                  <h3 className="font-serif font-semibold text-foreground mb-1">{album.title}</h3>
                  <p className="text-muted-foreground text-sm">{album.description}</p>
                  <span className="text-xs text-muted-foreground mt-2 inline-block">{album.count}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-muted/50 rounded-3xl p-8 lg:p-12 text-center border border-border">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">Mehr Fotos auf Social Media</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Aktuelle Fotos und Videos finden Sie auf unseren Social-Media-Kanälen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.facebook.com/BiKultev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/bikult_e.v/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/channel/UCFEhVp3Nf0rSPjYYzHYN1sw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white rounded-xl text-sm font-medium hover:bg-red-700 transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
