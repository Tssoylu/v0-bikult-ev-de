import { PageHero } from "@/components/page-hero"
import { spendenData } from "@/data/verein"
import { ExternalLink, Building2, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: `${spendenData.title} | BiKult e.V.`,
  description: spendenData.description,
}

export default function SpendenPage() {
  return (
    <main>
      <PageHero title={spendenData.title} subtitle={spendenData.subtitle} />       
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xl text-muted-foreground leading-relaxed">
            {spendenData.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Banküberweisung */}
          <div className="bg-card border border-border shadow-sm rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold mb-6">Banküberweisung</h2>
            <div className="space-y-4 w-full text-left bg-muted/50 p-6 rounded-xl">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Empfänger</p>
                <p className="font-medium text-foreground">{spendenData.bankingInfo.recipient}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Bank</p>
                <p className="font-medium text-foreground">{spendenData.bankingInfo.bank}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">IBAN</p>
                <p className="font-medium text-foreground tracking-wide font-mono">{spendenData.bankingInfo.iban}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">BIC</p>
                <p className="font-medium text-foreground tracking-wide font-mono">{spendenData.bankingInfo.bic}</p>
              </div>
            </div>
          </div>

          {/* PayPal */}
          <div className="bg-card border border-border shadow-sm rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#003087]/10 rounded-full flex items-center justify-center mb-6">
              <CreditCard className="w-8 h-8 text-[#003087]" />
            </div>
            <h2 className="text-2xl font-semibold mb-6">PayPal</h2>
            <p className="text-muted-foreground mb-8">
              Unterstützen Sie uns schnell und unkompliziert über unser PayPal-Spendenkonto.
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto bg-[#003087] hover:bg-[#003087]/90 text-white">
              <a href={spendenData.paypalLink} target="_blank" rel="noopener noreferrer">
                Jetzt via PayPal spenden
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>

        {/* Hinweis zur Spendenbescheinigung */}
        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-semibold mb-3 text-primary">Wichtiger Hinweis zur Spendenbescheinigung</h3>
          <p className="text-muted-foreground leading-relaxed">
            {spendenData.taxNotice}
          </p>
        </div>
      </div>
    </main>
  )
}
