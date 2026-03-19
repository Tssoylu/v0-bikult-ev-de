import { Target, Heart, Lightbulb, Users } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Unsere Mission",
    description: "Wir fördern Bildung und kulturellen Austausch, um Menschen aller Hintergründe zu unterstützen und ihre Potenziale zu entfalten."
  },
  {
    icon: Heart,
    title: "Gemeinschaft",
    description: "Ein Ort der Begegnung, an dem Vielfalt gelebt und kultureller Austausch gefördert wird."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Moderne Lehrmethoden und kreative Ansätze für nachhaltigen Lernerfolg."
  },
  {
    icon: Users,
    title: "Zusammenhalt",
    description: "Gemeinsam stark - wir bauen Brücken zwischen Kulturen und Generationen."
  }
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-[#F3F4F6] dark:bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Über Uns</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 text-balance">
              Bildungs und Kulturzentrum e.V.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p className="text-lg">
                Das Bildungs und Kulturzentrum e.V. (BiKult) wurde gegründet, um Menschen in Marl und Umgebung 
                bei ihrer persönlichen und beruflichen Entwicklung zu unterstützen.
              </p>
              <p>
                Unser Zentrum bietet ein breites Spektrum an Bildungsangeboten: von Nachhilfe und Lernförderung 
                für Schüler aller Altersgruppen bis hin zu Deutschkursen für Menschen mit Migrationshintergrund. 
                Wir glauben an die Kraft der Bildung als Schlüssel zur gesellschaftlichen Teilhabe.
              </p>
              <p>
                Durch unsere kulturellen Aktivitäten schaffen wir Räume für Begegnung, Austausch und 
                gegenseitiges Verständnis. Wir arbeiten eng mit Partnern wie dem Deutschen Kinderhilfswerk 
                und dem Programm {"\""}AUF!leben - Zukunft ist jetzt{"\""} zusammen.
              </p>
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  index % 2 === 0 ? "bg-primary/10" : "bg-accent/10"
                }`}>
                  <value.icon className={`h-6 w-6 ${
                    index % 2 === 0 ? "text-primary" : "text-accent"
                  }`} />
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground">{value.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
