"use client"

import { PageHero } from "@/components/page-hero"
import { kooperationenData } from "@/data/verein"
import { ExternalLink } from "lucide-react"

export default function KooperationenPage() {
  return (
    <main>
      <PageHero title={kooperationenData.title} subtitle={kooperationenData.subtitle} />       
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-12">
        <p className="text-xl leading-relaxed text-center text-muted-foreground max-w-3xl mx-auto">
          {kooperationenData.description}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {kooperationenData.partners.map((partner, index) => (
            <a 
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-card border border-border shadow-sm rounded-xl p-6 text-center hover:shadow-md hover:border-primary/50 transition-all duration-300"
            >
              <div className="h-16 flex items-center justify-center mb-4">
                {/* Fallback to simple icon/text if logo fails to load */}
                <div className="relative w-16 h-16 bg-muted/50 rounded-lg flex items-center justify-center overflow-hidden group-hover:bg-primary/5 transition-colors">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} Logo`} 
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <span className="absolute text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary/30 to-primary/10 select-none -z-10 group-hover:from-primary/40 group-hover:to-primary/20">
                    {partner.name.charAt(0)}
                  </span>
                </div>
              </div>
              
              <h3 className="font-semibold text-[15px] mb-2 text-foreground leading-tight group-hover:text-primary transition-colors flex items-center justify-center gap-1.5">
                {partner.name}
                <ExternalLink className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              
              <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                {partner.type}
              </span>
            </a>
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
