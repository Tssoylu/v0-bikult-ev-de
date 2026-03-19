import { PageHero } from "@/components/page-hero"

export default function Page() {
  return (
    <main>
      <PageHero title="Kooperationen" description="Informationen zu Kooperationen" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-8">
        <div className="prose prose-lg max-w-none text-muted-foreground prose-headings:font-serif prose-headings:text-foreground">
          <p className="mb-4 text-balance">Inhalte für die Seite Kooperationen werden hier angezeigt. Bitte prüfen und bei Bedarf anpassen.</p>
        </div>
      </div>
    </main>
  )
}
