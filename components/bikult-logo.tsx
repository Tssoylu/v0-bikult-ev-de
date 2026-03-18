/**
 * BiKult Logo Component
 * Place the actual logo file at /public/logo.png to show the image logo.
 * Falls back to the branded text mark if the file is not found.
 */
export function BiKultLogo({ className = "", showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* SVG Icon approximating the BiKult logo mark */}
      <svg
        width="48"
        height="40"
        viewBox="0 0 48 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Left book page - red */}
        <path d="M24 8 L6 20 L10 34 L24 28 Z" fill="#D43228" />
        <path d="M24 8 L6 20 L10 34 L24 28 Z" fill="#D43228" opacity="0.85" />
        {/* Right book page - red */}
        <path d="M24 8 L42 20 L38 34 L24 28 Z" fill="#D43228" />
        {/* Book spine / road - dark */}
        <path d="M24 8 L24 34" stroke="#1a1a1a" strokeWidth="1.5" />
        {/* Road stripe - blue */}
        <path d="M20 18 L24 34 L28 18" stroke="#1E5CA8" strokeWidth="2" fill="none" strokeLinejoin="round" />
        {/* Person figure - blue */}
        <circle cx="24" cy="5" r="3" fill="#1E5CA8" />
        <path d="M24 8 L21 14 L27 14 Z" fill="#1E5CA8" />
        {/* Book base */}
        <path d="M8 33 L40 33" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className="font-serif font-extrabold text-xl leading-none tracking-tight text-foreground">
            BiKult
          </span>
          <span className="text-xs text-muted-foreground font-medium leading-tight mt-0.5">
            Bildungs- und Kulturzentrum e.V.
          </span>
        </div>
      )}
    </div>
  )
}

/** Dark version for use on dark backgrounds */
export function BiKultLogoDark({ className = "", showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="48"
        height="40"
        viewBox="0 0 48 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d="M24 8 L6 20 L10 34 L24 28 Z" fill="#E8473C" />
        <path d="M24 8 L42 20 L38 34 L24 28 Z" fill="#E8473C" />
        <path d="M24 8 L24 34" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
        <path d="M20 18 L24 34 L28 18" stroke="#4D9EE8" strokeWidth="2" fill="none" strokeLinejoin="round" />
        <circle cx="24" cy="5" r="3" fill="#4D9EE8" />
        <path d="M24 8 L21 14 L27 14 Z" fill="#4D9EE8" />
        <path d="M8 33 L40 33" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className="font-serif font-extrabold text-xl leading-none tracking-tight text-white">
            BiKult
          </span>
          <span className="text-xs text-white/60 font-medium leading-tight mt-0.5">
            Bildungs- und Kulturzentrum e.V.
          </span>
        </div>
      )}
    </div>
  )
}
