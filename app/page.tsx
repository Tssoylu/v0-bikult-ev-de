import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />

      {/* YouTube Video */}
      <section className="py-16 lg:py-24 bg-[#FAFAFA] text-foreground dark:bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">
              Jahresrückblick 2021/2022
            </h2>
            <p className="text-muted-foreground mt-3">
              Ein Blick auf unsere Aktivitäten und Projekte des vergangenen Jahres.
            </p>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/ODCet76ZeOk?rel=0&modestbranding=1"
              title="BiKult e.V. – Jahresrückblick 2021/2022"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 lg:py-28 bg-[#F3F4F6] dark:bg-muted/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Kontakt</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-4">
            Haben Sie Fragen zu unseren Angeboten?
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Wir freuen uns auf Ihre Nachricht. Nehmen Sie jetzt Kontakt mit uns auf — wir beraten Sie gerne.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/kontakt">
                Jetzt Kontakt aufnehmen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:023658878188">02365 8878188</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
