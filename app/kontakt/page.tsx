import { PageHero } from "@/components/page-hero"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "Kontakt – BiKult e.V.",
  description:
    "Nehmen Sie Kontakt mit dem Bildungs und Kulturzentrum e.V. in Marl auf. Wir freuen uns auf Ihre Nachricht.",
}

export default function KontaktPage() {
  return (
    <>
      <PageHero
        title="Kontakt"
        subtitle="Haben Sie Fragen zu unseren Angeboten? Wir freuen uns auf Ihre Nachricht."
        breadcrumbs={[{ name: "Kontakt", href: "/kontakt" }]}
      />
      {/* Re-use the contact section but without the header */}
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Info cards + Form side by side */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">Adresse</h3>
                <p className="text-muted-foreground">Victoriastraße 24<br />45772 Marl</p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">Telefon</h3>
                <a href="tel:023658878188" className="text-muted-foreground hover:text-primary transition-colors">
                  02365 8878188
                </a>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">E-Mail</h3>
                <a href="mailto:info@bikult-ev.de" className="text-muted-foreground hover:text-primary transition-colors">
                  info@bikult-ev.de
                </a>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">Öffnungszeiten</h3>
                <p className="text-muted-foreground">Mo – Fr: 9:00 – 17:00 Uhr<br />Sa: Nach Vereinbarung</p>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>

          {/* Map — full width, tall rectangle */}
          <div className="rounded-2xl overflow-hidden border border-border h-80 lg:h-[480px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.8!2d7.0889!3d51.6567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8e9b0!2sVictoriastra%C3%9Fe%2024%2C%2045772%20Marl!5e0!3m2!1sde!2sde!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BiKult e.V. Standort"
            />
          </div>
        </div>
      </div>
    </>
  )
}
