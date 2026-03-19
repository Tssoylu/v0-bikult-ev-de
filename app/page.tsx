import { homeData } from "@/data/home"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <>
      <Hero title={homeData.hero.title} image={homeData.hero.image} />
      <Services items={homeData.services} />
      
      {/* Video Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {homeData.video.title}
            </h2>
            <div className="mt-4 w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          <div className="aspect-video bg-card border border-border rounded-xl shadow-sm flex items-center justify-center overflow-hidden relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-black/80 z-10 flex flex-col items-center justify-center text-white p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-white">Wir benötigen Ihre Zustimmung, um dieses Video zu laden</h3>
              <p className="max-w-2xl text-sm text-gray-300 mb-6">
                Wir verwenden einen Drittanbieterdienst, um Videoinhalte einzubetten, die möglicherweise Daten über Ihre Aktivitäten sammeln. Bitte überprüfen Sie die Details in der Datenschutzerklärung und akzeptieren Sie den Dienst, um das Video anzusehen.
              </p>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-md font-medium transition-colors">
                Akzeptieren
              </button>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Projects />
      <Contact />
    </>
  )
}
