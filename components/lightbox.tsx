"use client"

import { useState, useEffect, useCallback } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface LightboxImage {
  src: string
  alt: string
}

interface LightboxProps {
  images: LightboxImage[]
  initialIndex?: number
  onClose: () => void
}

function Lightbox({ images, initialIndex = 0, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(initialIndex)

  const prev = useCallback(
    () => setCurrent((i) => (i - 1 + images.length) % images.length),
    [images.length]
  )
  const next = useCallback(
    () => setCurrent((i) => (i + 1) % images.length),
    [images.length]
  )

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev()
      else if (e.key === "ArrowRight") next()
      else if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handle)
    return () => window.removeEventListener("keydown", handle)
  }, [prev, next, onClose])

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
        aria-label="Schließen"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); prev() }}
          className="absolute left-3 sm:left-6 text-white/80 hover:text-white transition-colors bg-black/30 rounded-full p-2"
          aria-label="Vorheriges Bild"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      )}

      {/* Image */}
      <img
        src={images[current].src}
        alt={images[current].alt}
        className="max-h-[88vh] max-w-[88vw] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); next() }}
          className="absolute right-3 sm:right-6 text-white/80 hover:text-white transition-colors bg-black/30 rounded-full p-2"
          aria-label="Nächstes Bild"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      )}

      {/* Dot navigation */}
      {images.length > 1 && (
        <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? "bg-white" : "bg-white/35"
              }`}
              aria-label={`Bild ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

interface LightboxGalleryProps {
  images: LightboxImage[]
  className?: string
  itemClassName?: string
}

export function LightboxGallery({ images, className, itemClassName }: LightboxGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <div className={className}>
        {images.map((img, i) => (
          <div
            key={i}
            className={`cursor-zoom-in overflow-hidden ${itemClassName ?? ""}`}
            onClick={() => setOpenIndex(i)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
      {openIndex !== null && (
        <Lightbox
          images={images}
          initialIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  )
}

interface SingleLightboxImageProps {
  src: string
  alt: string
  className?: string
  imgClassName?: string
}

export function SingleLightboxImage({ src, alt, className, imgClassName }: SingleLightboxImageProps) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className={`cursor-zoom-in ${className ?? ""}`} onClick={() => setOpen(true)}>
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${imgClassName ?? ""}`}
        />
      </div>
      {open && (
        <Lightbox images={[{ src, alt }]} onClose={() => setOpen(false)} />
      )}
    </>
  )
}
