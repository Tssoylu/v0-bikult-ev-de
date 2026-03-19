import { BookOpen, Globe, Palette, Users, GraduationCap, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: BookOpen,
    title: "Lernförderung & Nachhilfe",
    description: "Individuelle Unterstützung für Schüler aller Klassenstufen. Wir helfen bei Hausaufgaben, Prüfungsvorbereitung und dem Aufarbeiten von Lernrückständen.",
    features: ["Einzelunterricht", "Gruppenlernen", "Alle Schulfächer", "Prüfungsvorbereitung"]
  },
  {
    icon: Globe,
    title: "Deutsch als Fremdsprache",
    description: "Sprachkurse für Menschen mit Migrationshintergrund. Von Anfänger bis Fortgeschrittene - wir bereiten Sie auf den Alltag und Beruf vor.",
    features: ["Alle Niveaustufen", "Integrationskurse", "Konversation", "Zertifikate"]
  },
  {
    icon: Palette,
    title: "Kulturelle Aktivitäten",
    description: "Veranstaltungen und Workshops, die den kulturellen Austausch fördern und neue Perspektiven eröffnen.",
    features: ["Workshops", "Kulturveranstaltungen", "Kreativangebote", "Ausflüge"]
  },
  {
    icon: Users,
    title: "AUF!leben - Zukunft ist jetzt",
    description: "Ein Programm zur Unterstützung von Kindern und Jugendlichen bei der Bewältigung der Folgen der Corona-Pandemie.",
    features: ["Freizeitaktivitäten", "Soziales Lernen", "Persönlichkeitsentwicklung", "Gruppenerlebnisse"]
  },
  {
    icon: GraduationCap,
    title: "Bildungsberatung",
    description: "Beratung zu Bildungswegen, Berufsausbildung und Weiterbildungsmöglichkeiten für alle Altersgruppen.",
    features: ["Schulberatung", "Berufsberatung", "Weiterbildung", "Fördermöglichkeiten"]
  },
  {
    icon: Calendar,
    title: "Ferienangebote",
    description: "Spannende Programme während der Schulferien mit Lernzeit und Freizeitaktivitäten kombiniert.",
    features: ["Ferienbetreuung", "Lernprogramme", "Ausflüge", "Kreativworkshops"]
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Unsere Angebote</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 text-balance">
            Vielfältige Bildungs- und Kulturangebote
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            Wir bieten ein breites Spektrum an Programmen für Menschen aller Altersgruppen und Hintergründe.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                index % 2 === 0 
                  ? "bg-primary/10 group-hover:bg-primary/20" 
                  : "bg-accent/10 group-hover:bg-accent/20"
              }`}>
                <service.icon className={`h-7 w-7 ${
                  index % 2 === 0 ? "text-primary" : "text-accent"
                }`} />
              </div>
              
              <h3 className="font-serif text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mt-3">{service.description}</p>
              

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="#contact">Jetzt anfragen</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
