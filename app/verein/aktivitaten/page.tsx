import { PageHero } from "@/components/page-hero"

const events = [
  {
    title: "Neujahrsempfang 2023",
    description:
      "Der BiKult e.V. organisierte ein Programm zum Neujahrsempfang 2023. Mit unseren G\u00e4sten und Mitgliedern waren wir 40 Personen. Der Verein und seine Aktivit\u00e4ten wurden vorgestellt. Es war ein harmonischer und sch\u00f6ner Abend mit k\u00f6stlichen Spezialit\u00e4ten aus der t\u00fcrkischen K\u00fcche. Anschlie\u00dfend berichteten drei unserer ehrenamtlichen Mitglieder, wie sie sich integriert haben. Dazu wurde live Musik mit der Instrument 'Saz' vorgespielt.",
    category: "Vereinsfeier",
  },
  {
    title: "Weihnachtsstimmung mit ukrainischen Kindern",
    description:
      "Eine Aktivit\u00e4t 'Pl\u00e4tzchen backen' mit ca. 12 ukrainischen Kindern in unserem Verein. Die Kinder rollten den Teig aus und stachen kreativ ihre Pl\u00e4tzchen aus. Anschlie\u00dfend wurde gemeinsam gegessen. Die Kinder hatten viel Spa\u00df und bekamen Geschenkt\u00fcten.",
    category: "Kinderaktivität",
  },
  {
    title: "Einblick in die MiA Kurse 2022",
    description:
      "MiA (Migrantinnen stark im Alltag) ist ein Angebot für Migrantinnen und geflüchtete Frauen. Die Kurse orientieren sich an den Lebenssituationen der Frauen und enthalten ein niedrigschwelliges Sprachförderangebot. Kinder wurden betreut, während ihre Mütter mehr über die deutsche Sprache lernten. Das Programm wurde vom Bundesamt für Migration und Flüchtlinge ermöglicht.",
    category: "Sprachkurs",
  },
  {
    title: "Begegnungscafé",
    description:
      "Das Interesse zum Begegnungscaf\u00e9 war sehr gro\u00df. Aus der t\u00fcrkischen K\u00fcche wurde 'Lahmacun' vorgestellt. Zum Essen kamen alle zusammen und konnten ausprobieren, wie es schmeckt. Es war eine harmonische und sch\u00f6ne Unterhaltung.",
    category: "Interkulturelles Treffen",
  },
  {
    title: "Tag der Bibliotheken",
    description:
      "Am 'Tag der Bibliotheken' besuchten die Kinder die Bücherei Marl 'Türmchen'. Sie schauten sich um und suchten Bücher aus, die sie interessierten und neugierig machten.",
    category: "Bildungsausflug",
  },
  {
    title: "Ebru-Workshop",
    description:
      "Zum Begegnungscafé empfingen wir unsere Gäste in der Feather College e.V. Das Thema war die 'Ebru Kunst' und wurde als Workshop durchgeführt. Die Teilnehmerinnen probierten selbst aus, wie die Farben auf dem Wasser tanzen, und konnten ihre Kreativität weiterentwickeln. Danach kamen alle zu 'Ci\u011f Köfte' zusammen und erlebten eine gemütliche Gesprächsrunde.",
    category: "Kreativworkshop",
  },
]

const categoryColors: Record<string, string> = {
  Vereinsfeier: "bg-primary/10 text-primary",
  Kinderaktivität: "bg-green-100 text-green-700",
  Sprachkurs: "bg-accent/10 text-accent",
  "Interkulturelles Treffen": "bg-purple-100 text-purple-700",
  Bildungsausflug: "bg-blue-100 text-blue-700",
  Kreativworkshop: "bg-orange-100 text-orange-700",
}

export const metadata = {
  title: "Aktivitäten – BiKult e.V.",
  description: "Einblicke in die Aktivitäten und Veranstaltungen des BiKult e.V. in Marl.",
}

export default function AktivitaetenPage() {
  return (
    <>
      <PageHero
        title="Aktivitäten"
        subtitle="Einblicke in unser Vereinsleben — Veranstaltungen, Workshops und kulturelle Begegnungen."
        breadcrumbs={[
          { label: "Verein", href: "/verein" },
          { label: "Aktivitäten", href: "/verein/aktivitaten" },
        ]}
      />

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <article
                key={event.title}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <span
                  className={`inline-block self-start px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                    categoryColors[event.category] ?? "bg-muted text-muted-foreground"
                  }`}
                >
                  {event.category}
                </span>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3">{event.title}</h3>
                <p className="text-muted-foreground text-sm flex-1">{event.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
