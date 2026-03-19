"use client"

import { useState, useEffect, useCallback } from "react"
import { PageHero } from "@/components/page-hero"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const galleries = [
  {
    title: "Weihnachtsstimmung mit ukrainischen Kindern",
    description: "Plätzchen backen und festliche Stimmung mit den Kindern.",
    images: ["/gallery/weihnacht-1.jpg", "/gallery/weihnacht-2.jpg", "/gallery/weihnacht-3.jpg"],
  },
  {
    title: "Ebru-Workshop",
    description: "Kunstvolle Workshops mit der türkischen Marmorierkunst 'Ebru'.",
    images: ["/gallery/ebru-1.jpg", "/gallery/ebru-2.jpg", "/gallery/ebru-3.jpg"],
  },
  {
    title: "Tag der Bibliotheken",
    description: "Kinder erkunden die Bücherei Marl 'Türmchen'.",
    images: ["/gallery/bibliothek-1.jpg", "/gallery/bibliothek-2.jpg", "/gallery/bibliothek-3.jpg", "/gallery/bibliothek-4.jpg"],
  },
  {
    title: "Begegnungscafé",
    description: "Kulinarische und kulturelle Begegnungen im BiKult.",
    images: ["/gallery/begegnung-1.jpg", "/gallery/begegnung-2.jpg", "/gallery/begegnung-3.jpg"],
  },
]

const allImages = galleries.flatMap((g) => g.images.map((src) => ({ src, title: g.title })))

export default function FotoGaleriePage() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const close = () => setLightbox(null)
  const prev = useCallback(() => setLightbox((i) => (i === null ? null : (i - 1 + allImages.length) % allImages.length)), [])
  const next = useCallback(() => setLightbox((i) => (i === null ? null : (i + 1) % allImages.length)), [])

  useEffect(() => {
    if (lightbox === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [lightbox, prev, next])

  let globalIndex = 0
  const albumsWithIndex = galleries.map((g) => ({
    ...g,
    imagesWithIndex: g.images.map((src) => ({ src, index: globalIndex++ })),
  }))

  return (
    <>
      <PageHero
        title="Foto Galerie"
        subtitle="Eindrücke aus unserem Vereinsleben — Momente, die bleiben."
        breadcrumbs={[
          { label: "Verein", href: "/verein" },
          { label: "Foto Galerie", href: "/verein/foto-galerie" },
        ]}
      />

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 mb-16">
            {albumsWithIndex.map((album) => (
              <div key={album.title}>
                <h2 className="font-serif text-xl font-bold text-primary mb-4">{album.title}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {album.imagesWithIndex.map(({ src, index }) => (
                    <button
                      key={index}
                      onClick={() => setLightbox(index)}
                      className="overflow-hidden rounded-xl aspect-square bg-muted cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <img
                        src={src}
                        alt={`${album.title} – Foto ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-muted/50 rounded-3xl p-8 lg:p-12 text-center border border-border">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">Mehr Fotos auf Social Media</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Aktuelle Fotos und Videos finden Sie auf unseren Social-Media-Kanälen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.facebook.com/BiKultev" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors">
                Facebook
              </a>
              <a href="https://www.instagram.com/bikult_e.v/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
                Instagram
              </a>
              <a href="https://www.youtube.com/channel/UCFEhVp3Nf0rSPjYYzHYN1sw" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white rounded-xl text-sm font-medium hover:bg-red-700 transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            aria-label="Schließen"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <img
            src={allImages[lightbox].src}
            alt={allImages[lightbox].title}
            className="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            aria-label="Nächstes Bild"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          <div className="absolute bottom-4 left-0 right-0 text-center text-white/70 text-sm">
            {allImages[lightbox].title} — {lightbox + 1} / {allImages.length}
          </div>
        </div>
      )}
    </>
  )
}
