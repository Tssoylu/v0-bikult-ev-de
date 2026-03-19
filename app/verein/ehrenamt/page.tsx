import { PageHero } from "@/components/page-hero"
import { ehrenamtData } from "@/data/verein"
import { CheckCircle2, HeartHandshake } from "lucide-react"

export const metadata = {
  title: `${ehrenamtData.title} | BiKult e.V.`,
  description: ehrenamtData.description,
}

export default function EhrenamtPage() {
  return (
    <main>
      <PageHero title={ehrenamtData.title} subtitle={ehrenamtData.subtitle} />       
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <HeartHandshake className="w-8 h-8 text-primary" />
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {ehrenamtData.description}
          </p>
        </div>

        <div className="bg-card border border-border shadow-sm rounded-2xl p-8 md:p-12 mt-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Was wir bieten</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {ehrenamtData.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 bg-muted/30 rounded-2xl p-8">
          <p className="text-lg font-medium text-foreground mb-6">
            {ehrenamtData.callToAction}
          </p>
          <a
            href="mailto:info@bikult-ev.de"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Jetzt mitmachen
          </a>
        </div>
      </div>
    </main>
  )
}
