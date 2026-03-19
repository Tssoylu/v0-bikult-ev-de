import { PageHero } from "@/components/page-hero"
import { satzungData } from "@/data/satzung"

export const metadata = {
  title: `${satzungData.title} | BiKult e.V.`,
  description: 'Satzung des Bildungs und Kulturzentrum e.V. – BiKult e.V.',
}

export default function Page() {
  return (
    <main>
      <PageHero title={satzungData.title} description={satzungData.subtitle} />       
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-8">
        <div className="bg-card border border-border shadow-sm rounded-2xl p-6 md:p-10 mb-8">
          <div className="space-y-12">
            {satzungData.sections.map((section, index) => (
              <section key={index} className="scroll-mt-24" id={`section-${index}`}>
                <h2 className="text-2xl font-semibold mb-6 text-foreground border-b border-border pb-3">
                  {section.title}
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="whitespace-pre-wrap">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <div className="text-right text-sm text-muted-foreground mt-8">
          <p>Stand: {satzungData.lastUpdated}</p>
        </div>
      </div>
    </main>
  )
}
