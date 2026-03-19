import { PageHero } from "@/components/page-hero"
import { ueberUnsData } from "@/data/verein"

export const metadata = {
  title: `${ueberUnsData.title} | BiKult e.V.`,
  description: ueberUnsData.description,
}

export default function UeberUnsPage() {
  return (
    <main>
      <PageHero title={ueberUnsData.title} subtitle={ueberUnsData.subtitle} />       
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-12">
        <div className="prose prose-lg max-w-none text-muted-foreground prose-headings:font-semibold prose-headings:text-foreground">
          <p className="text-xl leading-relaxed text-foreground border-l-4 border-primary pl-6 mb-12">
            {ueberUnsData.description}
          </p>

          <div className="grid gap-12 mt-12">
            {ueberUnsData.sections.map((section, index) => (
              <section key={index} className="bg-card border border-border shadow-sm rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl mb-4 mt-0">{section.title}</h2>
                <p className="mb-0 text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
