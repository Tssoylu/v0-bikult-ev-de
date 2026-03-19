import { PageHero } from "@/components/page-hero"

export const metadata = {
  title: "Datenschutzerklärung – BiKult e.V.",
  description: "Datenschutzerklärung des BiKult e.V. gemäß DSGVO.",
}

export default function DatenschutzPage() {
  return (
    <main>
      <PageHero
        title="Datenschutzerklärung"
        subtitle="Informationen zum Schutz Ihrer persönlichen Daten gemäß DSGVO"
        breadcrumbs={[{ label: "Datenschutz", href: "/datenschutz" }]}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-10 text-sm leading-relaxed">

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-foreground">1. Verantwortlicher</h2>
          <p className="text-muted-foreground">
            Verantwortlicher im Sinne der Datenschutzgesetze ist:<br />
            <strong className="text-foreground">BiKult e.V.</strong><br />
            Victoriastraße 24, 45772 Marl<br />
            E-Mail:{" "}
            <a href="mailto:info@bikult-ev.de" className="text-primary hover:underline">
              info@bikult-ev.de
            </a>
            <br />
            Tel: 02365 8878188
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-foreground">2. Arten der verarbeiteten Daten</h2>
          <ul className="text-muted-foreground list-disc list-inside space-y-1">
            <li>Bestandsdaten (z. B. Namen, Anschriften)</li>
            <li>Kontaktdaten (z. B. E-Mail-Adressen, Telefonnummern)</li>
            <li>Nutzungsdaten (z. B. besuchte Webseiten, Zugriffszeiten)</li>
            <li>Meta- und Kommunikationsdaten (z. B. IP-Adressen)</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-foreground">3. Zweck der Verarbeitung</h2>
          <p className="text-muted-foreground">
            Wir verarbeiten personenbezogene Daten nur zu folgenden Zwecken:
          </p>
          <ul className="text-muted-foreground list-disc list-inside space-y-1">
            <li>Bereitstellung und Betrieb der Website</li>
            <li>Beantwortung von Kontaktanfragen</li>
            <li>Statistische Auswertung des Nutzerverhaltens (anonymisiert über Vercel Analytics)</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-foreground">4. Rechtsgrundlagen</h2>
          <p className="text-muted-foreground">
            Die Verarbeitung Ihrer Daten erfolgt auf Basis folgender Rechtsgrundlagen gemäß DSGVO:
          </p>
          <ul className="text-muted-foreground list-disc list-inside space-y-1">
            <li>Art. 6 Abs. 1 lit. a DSGVO – Einwilligung (z. B. Cookies)</li>
            <li>Art. 6 Abs. 1 lit. b DSGVO – Vertragserfüllung oder vorvertragliche Maßnahmen</li>
            <li>Art. 6 Abs. 1 lit. f DSGVO – Berechtigte Interessen (z. B. Website-Betrieb)</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-foreground">5. Cookies</h2>
          <p className="text-muted-foreground">
            Wir setzen Cookies ein, um die Funktionalität unserer Website zu gewährleisten und die Nutzererfahrung
            zu verbessern. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie können
            Ihre Cookie-Einstellungen jederzeit über den Cookie-Banner am unteren Bildschirmrand anpassen oder
            Cookies in den Einstellungen Ihres Browsers deaktivieren.
          </p>
          <p className="text-muted-foreground">
            Wir verwenden ausschließlich technisch notwendige Cookies und — sofern Sie eingewilligt haben —
            Analyse-Cookies über Vercel Analytics (datenschutzkonform, ohne IP-Speicherung).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-foreground">6. Vercel Analytics</h2>
          <p className="text-muted-foreground">
            Wir nutzen Vercel Analytics, einen Webanalysedienst der Vercel Inc., 340 S Lemon Ave #4133,
            Walnut, CA 91789, USA. Vercel Analytics erfasst anonymisierte Nutzungsdaten (z. B. Seitenaufrufe,
            geografische Region) ohne Speicherung von IP-Adressen oder personenbeziehbaren Daten. Eine
            Weitergabe an Dritte findet nicht statt. Weitere Informationen:{" "}
            <a
              href="https://vercel.com/docs/analytics/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Vercel Privacy Policy
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-foreground">7. Kontaktformular</h2>
          <p className="text-muted-foreground">
            Wenn Sie uns über das Kontaktformular auf unserer Website kontaktieren, werden die von Ihnen
            angegebenen Daten (Name, E-Mail-Adresse, Nachricht) zur Bearbeitung Ihrer Anfrage verarbeitet.
            Diese Daten werden ohne Ihre ausdrückliche Einwilligung nicht an Dritte weitergegeben.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-foreground">8. Externe Links & Social Media</h2>
          <p className="text-muted-foreground">
            Unsere Website enthält Links zu externen Plattformen wie Facebook, Instagram und YouTube.
            Wenn Sie diese Links nutzen, unterliegen Ihre Daten den Datenschutzbestimmungen des jeweiligen
            Anbieters. Wir haben keinen Einfluss auf die Datenverarbeitung durch Drittanbieter.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-foreground">9. Ihre Rechte</h2>
          <p className="text-muted-foreground">Sie haben gegenüber uns folgende Rechte:</p>
          <ul className="text-muted-foreground list-disc list-inside space-y-1">
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
          </ul>
          <p className="text-muted-foreground">
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
            <a href="mailto:info@bikult-ev.de" className="text-primary hover:underline">
              info@bikult-ev.de
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-foreground">10. Beschwerderecht</h2>
          <p className="text-muted-foreground">
            Sie haben das Recht, sich bei der zuständigen Datenschutz-Aufsichtsbehörde zu beschweren.
            Die zuständige Aufsichtsbehörde für Nordrhein-Westfalen ist:{" "}
            <strong className="text-foreground">Landesbeauftragte für Datenschutz und Informationsfreiheit NRW</strong>,
            Postfach 20 04 44, 40102 Düsseldorf,{" "}
            <a
              href="https://www.ldi.nrw.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              www.ldi.nrw.de
            </a>
            .
          </p>
        </section>

        <p className="text-muted-foreground/60 text-xs border-t border-border pt-6">
          Stand: März 2026
        </p>

      </div>
    </main>
  )
}
