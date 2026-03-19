import { PageHero } from "@/components/page-hero"
import Link from "next/link"
import { Users, BookOpen, Bike, Heart, Building2, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const sections = [
  {
    icon: Heart,
    title: "Mut zum An- und Weiterkommen",
    text: "MiA begleitet Migrantinnen dabei, selbstbewusst ihren Weg in Deutschland zu gehen. Unsere erfahrenen Kursleiterinnen schaffen einen vertrauensvollen Rahmen, in dem jede Frau in ihrem eigenen Tempo lernen und wachsen kann.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: BookOpen,
    title: "Deutsch lernen",
    text: "Sanft und alltagsnah führen wir Frauen an die deutsche Sprache heran. Themen wie Einkaufen, Arztbesuche, Schule der Kinder und Behördengänge stehen im Vordergrund – Sprache, die im realen Leben gebraucht wird.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Bike,
    title: "Integration jenseits des Klassenzimmers",
    text: "Integration findet nicht nur in Unterrichtsräumen statt. MiA-Kurse bieten praktische Workshops: Fahrradkurse, Orientierung im öffentlichen Nahverkehr, gemeinsame Ausflüge und vieles mehr – damit Frauen Marl wirklich kennenlernen.",
    color: "bg-green-500/10 text-green-700",
  },
  {
    icon: Building2,
    title: "Leichter Zugang",
    text: "Kurse finden bewusst in vertrauten Räumen statt – zum Beispiel in Kindertagesstätten. So können Mütter lernen, während ihre Kinder betreut werden. Niedrigschwelliger Zugang ist der Schlüssel zur Teilhabe.",
    color: "bg-yellow-500/10 text-yellow-700",
  },
  {
    icon: Users,
    title: "Brückenfunktion",
    text: "Unsere Kursleiterinnen fungieren als Brücke zwischen den Teilnehmerinnen und dem breiten Netzwerk lokaler Integrationsangebote. Sie vermitteln Kontakte zu Beratungsstellen, Vereinen und Bildungseinrichtungen.",
    color: "bg-purple-500/10 text-purple-700",
  },
]

const highlights = [
  "BAMF-geförderte Integrationskurse",
  "Niedrigschwelliger Zugang in vertrauter Umgebung",
  "Praktische Alltagsthemen im Vordergrund",
  "Begleitung durch erfahrene Kursleiterinnen",
  "Anbindung an lokale Integrationsangebote",
  "Partnerschaftlich mit VIJ umgesetzt",
]

export default function MiaFrauenPage() {
  return (
    <>
      <PageHero
        title="MiA – Migrantinnen stark im Alltag"
        subtitle="Migrantinnen einfach stark im Alltag — ein BAMF-gefördertes Programm zur Stärkung und Integration von Frauen mit Einwanderungsgeschichte"
        
      />

      {/* Intro banner */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-extrabold mb-2">BAMF</div>
              <div className="text-primary-foreground/80 text-sm">Bundesamt für Migration und Flüchtlinge — Fördergeber</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold mb-2">VIJ</div>
              <div className="text-primary-foreground/80 text-sm">Verein für Integration und Jugend — Projektpartner</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold mb-2">2022+</div>
              <div className="text-primary-foreground/80 text-sm">Laufendes Programm mit wachsender Teilnehmerinnenzahl</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is MiA */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3">
                Was ist MiA?
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold font-serif text-foreground mb-6">
                Empowering migrant women in everyday German life
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                MiA — <em>Migrantinnen einfach stark im Alltag</em> — ist ein Programm, das Frauen mit
                Einwanderungsgeschichte dabei unterstützt, selbstbewusst und eigenständig am gesellschaftlichen
                Leben in Deutschland teilzuhaben.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Im Mittelpunkt stehen alltagspraktische Deutschkenntnisse, gegenseitige Stärkung und der
                Aufbau von Netzwerken. Das Programm wird vom Bundesamt für Migration und Flüchtlinge (BAMF)
                gefördert und in Partnerschaft mit dem VIJ durchgeführt.
              </p>
              <ul className="space-y-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Visual block */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-2xl font-extrabold text-foreground font-serif">Migrantinnen stark im Alltag</p>
                  <p className="text-muted-foreground mt-2">Gemeinsam. Selbstbewusst. Integriert.</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-accent/10 -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-primary/10 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Program pillars */}
      <section className="py-16 lg:py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Programmbausteine
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold font-serif text-foreground">
              So wirkt MiA
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((s) => (
              <div key={s.title} className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${s.color}`}>
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Teaser – MiA Kurse 2022 */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Rückblick
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold font-serif text-foreground mb-4">
              Einblick in die MiA Kurse 2022
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Unsere MiA-Kurse bringen Frauen zusammen und schaffen Raum für gemeinsames Lernen, Lachen und Wachsen.
              Hier ein kleiner Einblick in unsere Kursaktivitäten.
            </p>
          </div>

          {/* Placeholder photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Deutschkurs", bg: "from-primary/30 to-primary/10" },
              { label: "Fahrradworkshop", bg: "from-accent/30 to-accent/10" },
              { label: "Ausflug", bg: "from-green-400/30 to-green-400/10" },
              { label: "Gemeinschaft", bg: "from-yellow-400/30 to-yellow-400/10" },
            ].map((item) => (
              <div
                key={item.label}
                className={`aspect-square rounded-xl bg-gradient-to-br ${item.bg} flex items-center justify-center`}
              >
                <span className="text-foreground/50 text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold font-serif mb-4">
            Interesse am MiA-Programm?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Nehmen Sie Kontakt auf — wir informieren Sie gerne über aktuelle Kurse, Zeiten und Anmeldemöglichkeiten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/kontakt">
                Jetzt Kontakt aufnehmen <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/projekte">
                Alle Projekte ansehen
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
