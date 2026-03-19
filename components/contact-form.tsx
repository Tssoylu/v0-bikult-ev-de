"use client"

import { useState } from "react"
import { Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Kontaktanfrage: ${formData.subject}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "—",
          message: formData.message,
          botcheck: "",
        }),
      })

      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      } else {
        setError("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an info@bikult-ev.de.")
      }
    } catch {
      setError("Es ist ein Fehler aufgetreten. Bitte prüfen Sie Ihre Internetverbindung.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border h-full flex flex-col">
      <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">Nachricht senden</h3>
      {submitted ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Send className="h-8 w-8 text-primary" />
          </div>
          <h4 className="font-serif text-xl font-semibold text-foreground mb-2">Nachricht gesendet!</h4>
          <p className="text-muted-foreground mb-4">Vielen Dank. Wir melden uns so schnell wie möglich bei Ihnen.</p>
          <Button variant="outline" onClick={() => setSubmitted(false)}>
            Neue Nachricht
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col h-full">
          <div className="space-y-5 flex-1 flex flex-col">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="cf-name" className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <Input
                  id="cf-name"
                  type="text"
                  required
                  placeholder="Ihr Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="cf-email" className="block text-sm font-medium text-foreground mb-2">
                  E-Mail *
                </label>
                <Input
                  id="cf-email"
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
                <label htmlFor="cf-phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefon
                </label>
                <Input
                  id="cf-phone"
                  type="tel"
                  placeholder="Ihre Telefonnummer"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="cf-subject" className="block text-sm font-medium text-foreground mb-2">
                  Betreff *
                </label>
                <Input
                  id="cf-subject"
                  type="text"
                  required
                  placeholder="z.B. Anmeldung Deutschkurs"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <label htmlFor="cf-message" className="block text-sm font-medium text-foreground mb-2">
                Nachricht *
              </label>
              <Textarea
                id="cf-message"
                required
                placeholder="Wie können wir Ihnen helfen?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="flex-1 resize-none min-h-[200px]"
              />
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full group mt-6" disabled={loading}>
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            )}
            {loading ? "Wird gesendet…" : "Nachricht senden"}
          </Button>
          {error && (
            <p className="text-sm text-destructive mt-3 text-center">{error}</p>
          )}
        </form>
      )}
    </div>
  )
}
