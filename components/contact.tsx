"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    details: ["Victoriastraße 24", "45772 Marl"]
  },
  {
    icon: Phone,
    title: "Telefon",
    details: ["02365 8878188"]
  },
  {
    icon: Mail,
    title: "E-Mail",
    details: ["info@bikult-ev.de"]
  },
  {
    icon: Clock,
    title: "Öffnungszeiten",
    details: ["Mo - Fr: 9:00 - 17:00 Uhr", "Sa: Nach Vereinbarung"]
  }
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Kontakt</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 text-balance">
            Nehmen Sie Kontakt mit uns auf
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            Haben Sie Fragen zu unseren Angeboten? Wir freuen uns auf Ihre Nachricht.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => (
                <div 
                  key={item.title}
                  className="bg-card rounded-xl p-6 border border-border"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  {item.details.map((detail, index) => (
                    <p key={index} className="text-muted-foreground text-sm mt-1">{detail}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-border h-[400px]">
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

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">Nachricht senden</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    placeholder="Ihr Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-Mail *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="ihre@email.de"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefon
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Ihre Telefonnummer"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Betreff *
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    required
                    placeholder="z.B. Anmeldung Deutschkurs"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Nachricht *
                </label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Wie können wir Ihnen helfen?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button type="submit" size="lg" className="w-full group">
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Nachricht senden
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
