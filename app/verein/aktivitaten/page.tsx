import { PageHero } from "@/components/page-hero"

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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

          {/* Neujahrsempfang 2023 */}
          <article>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl mb-8">
              <iframe
                src="https://www.youtube.com/embed/lzIBbcArAqc?rel=0&modestbranding=1"
                title="Neujahrsempfang 2023 – BiKult e.V."
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">Neujahrsempfang 2023</h2>
            <p className="text-muted-foreground leading-relaxed">
              Der BiKult e.V. hatte gestern ein Programm zum Neujahrsempfang 2023 organisiert. Mit unseren Gästen und
              Mitgliedern waren wir 40 Personen. Der Verein und ihre Aktivitäten wurden vorgestellt. Es war ein harmonischer und
              schöner Abend. Mit köstlichen Spezialitäten aus der türkischen Küche konnten wir uns mit unseren Gästen
              austauschen. Anschließend haben 3 unsere ehrenamtlichen Mitglieder erzählt, wie sie sich integriert haben und
              jetzt mit einem Beruf angefangen haben zu arbeiten. Dazu wurde noch live Musik mit der Instrument "Saz"
              vorgespielt. Die Lieder waren Herz berührend. Hiermit bedanken wir uns an allen und für das tolle Engagement.
            </p>
          </article>

          {/* Weihnachtsstimmung */}
          <article>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="font-serif text-3xl font-bold text-primary mb-4">Weihnachtsstimmung mit ukrainischen Kindern</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Heute fand eine Aktivität "Plätzchen backen" mit ca. 12 ukrainischen Kindern in unserem Verein statt.
                  Die Kinder haben den Teig ausgerollt und kreativ ihre Plätzchen ausgestochen. Anschließend haben wir
                  es zusammen gegessen mit anderen Knabberzeugen. Es war eine weihnachtliche Stimmung. Zum Schluß haben
                  die Kinder Geschenktüten bekommen. Sie hatten sehr viel Spaß und Freude an der Aktivität.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {["/aktivitaten/weihnacht-a.jpg", "/aktivitaten/weihnacht-b.jpg", "/aktivitaten/weihnacht-c.jpg", "/aktivitaten/weihnacht-d.jpg"].map((src, i) => (
                  <div key={i} className="overflow-hidden rounded-xl aspect-square bg-muted">
                    <img src={src} alt={`Weihnachtsaktivität ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* MiA Kurse */}
          <article>
            <div className="overflow-hidden rounded-2xl shadow-lg mb-8">
              <img src="/aktivitaten/mia-kurs.jpg" alt="MiA Kurse 2022" className="w-full object-cover" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">Einblick in die MiA Kurse 2022</h2>
            <p className="text-muted-foreground leading-relaxed">
              MiA (Migrantinnen stark im Alltag) ist ein Angebot für Migrantinnen und geflüchtete Frauen. Die Kurse
              orientieren sich in besonderem Maße an die Lebenssituationen der Frauen und enthalten ein
              niederschwelliges Sprachförderangebot. Ziel ist es, Frauen zu unterstützen, Potenziale zu entdecken,
              die deutsche Sprache zu entfalten und Selbstbewusstsein der Frauen zu stärken. Dabei werden neue
              Bekanntschaften und Zugänge den Angeboten ermöglicht. Kinder wurden betreut, während ihre Mütter mehr
              über die deutsche Sprache lernten. Wir durften tolle Frauen kennenlernen. Vielen Dank an die einzelnen
              Teilnehmer! Das Programm wurde vom Bundesamt für Migration und Flüchtlinge ermöglicht. Ein großes
              Dankeschön an @bamf_bund und dem Verein für Internationale Jugendarbeit e.V. (VIJ)!
            </p>
          </article>

          {/* Begegnungscafé */}
          <article>
            <div className="overflow-hidden rounded-2xl shadow-lg mb-8">
              <img src="/aktivitaten/begegnung-dinner.jpg" alt="Begegnungscafé" className="w-full object-cover" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">Begegnungscafé</h2>
            <p className="text-muted-foreground leading-relaxed">
              Die Interesse zum Begegnungscafe war heute sehr groß. Aus der türkischen Küche wurde das "Lahmacun"
              vorgestellt. Zum Essen sind wir alle zusammen gekommen uns sie konnten es ausprobieren wie es schmeckt.
              Es war eine harmonische und schöne Unterhaltung.
            </p>
          </article>

          {/* Tag der Bibliotheken */}
          <article>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img src="/aktivitaten/bibliothek-main.jpg" alt="Tag der Bibliotheken" className="w-full object-cover" />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold text-primary mb-4">Tag der Bibliotheken</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Am "Tag der Bibliotheken" waren die Kinder in der Bücherei Marl "Türmchen". Sie haben sich umgeschaut
                  und ihre Bücher ausgesucht, für sie interessant und neugierig waren.
                </p>
              </div>
            </div>
          </article>

          {/* Ebru-Workshop */}
          <article>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="font-serif text-3xl font-bold text-primary mb-4">Ebru-Workshop</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Zum Begegnungscafe haben wir unsere Gäste in der feather college e.V. empfangen. Das Thema war die
                  "Ebru Kunst" und haben es als Workshop durchgeführt. Die Teilnehmerinnen haben es selbst ausprobiert
                  wie die Farben auf dem Wasser tanzen und sie könnten ihre Kreativität weiter entwickeln. Danach sind
                  wir zum "Çiğ Köfte" essen zusammen gekommen und haben eine gemütliche Gesprächsrunde erlebt.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img src="/aktivitaten/ebru-main.jpg" alt="Ebru-Workshop Hauptbild" className="w-full object-cover" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4">
              {["/aktivitaten/ebru-2.jpg", "/aktivitaten/ebru-3.jpg", "/aktivitaten/ebru-extra.jpg"].map((src, i) => (
                <div key={i} className="overflow-hidden rounded-xl aspect-video bg-muted">
                  <img src={src} alt={`Ebru-Workshop ${i + 2}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </article>

        </div>
      </section>
    </>
  )
}
