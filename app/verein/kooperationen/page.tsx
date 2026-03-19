import { PageHero } from "@/components/page-hero"
import { kooperationenData } from "@/data/verein"

export const metadata = {
  title: `${kooperationenData.title} | BiKult e.V.`,
  description: kooperationenData.description,
}

export default function KooperationenPage() {
  return (
    <main>
      <PageHero title={kooperationenData.title} description={kooperationenData.subtitle} />       
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-12">
        <p className="text-xl leading-relaxed text-center text-muted-foreground max-w-3xl mx-auto">
          {kooperationenData.description}
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {kooperationenData.partners.map((partner, index) => (
            <div key={index} className="bg-card border border-border shadow-sm rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
              <h3 className="font-semibold text-lg mb-2 text-foreground">{partner.name}</h3>
              <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                {partner.type}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center border-t border-border pt-12">
          <h2 className="text-2xl font-bold mb-4">Möchten Sie Partner werden?</h2>
          <p className="text-muted-foreground mb-8">
            Wir sind stets an neuen Kooperationen interessiert, die unseren Vereinszweck unterstützen.
          </p>
          <a
            href="mailto:info@bikult-ev.de"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Kontaktieren Sie uns
          </a>
        </div>
      </div>
    </main>
  )
}
