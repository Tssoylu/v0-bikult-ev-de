"use client";
export function BiKultLogo({ className = "", showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/logo.png"
        alt="BiKult e.V. Logo"
        className="h-12 w-auto object-contain"
      />
    </div>
  )
}

export function BiKultLogoDark({ className = "", showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/logo.png"
        alt="BiKult e.V. Logo"
        className="h-12 w-auto object-contain brightness-[0] invert-[1]"
      />
    </div>
  )
}
