import { PageHero } from "@/components/page-hero"

export const metadata = {
  title: "Impressum – BiKult e.V.",
  description: "Impressum des Bildungs- und Kultzentrums BiKult e.V. in Marl.",
}

export default function ImpressumPage() {
  return (
    <main>
      <PageHero
        title="Impressum"
        subtitle="Angaben gemäß § 5 TMG"
        breadcrumbs={[{ label: "Impressum", href: "/impressum" }]}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-10">

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-foreground">Verantwortlich</h2>
          <address className="not-italic text-muted-foreground leading-relaxed">
            <strong className="text-foreground">BiKult e.V.</strong><br />
            Victoriastraße 24<br />
            45772 Marl<br />
            Deutschland
          </address>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-foreground">Vorstand</h2>
          <p className="text-muted-foreground">Herr Balli</p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-foreground">Kontakt</h2>
          <ul className="text-muted-foreground space-y-1">
            <li>
              Telefon:{" "}
              <a href="tel:023658878188" className="text-primary hover:underline">
                02365 8878188
              </a>
            </li>
            <li>
              E-Mail:{" "}
              <a href="mailto:info@bikult-ev.de" className="text-primary hover:underline">
                info@bikult-ev.de
              </a>
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-foreground">Bankverbindung</h2>
          <dl className="text-muted-foreground space-y-1">
            <div className="flex gap-2 flex-wrap">
              <dt className="font-medium text-foreground">Institut:</dt>
              <dd>Sparkasse Vest Recklinghausen</dd>
            </div>
            <div className="flex gap-2 flex-wrap">
              <dt className="font-medium text-foreground">IBAN:</dt>
              <dd>DE52 4265 0150 1001 0325 21</dd>
            </div>
          </dl>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-foreground">Registereintrag</h2>
          <p className="text-muted-foreground">
            Eingetragener Verein (e.V.) im Vereinsregister des Amtsgerichts Recklinghausen.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-foreground">Haftungsausschluss</h2>
          <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Haftung für Inhalte</h3>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
                haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
                der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
                außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
                Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
