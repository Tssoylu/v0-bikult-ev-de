"use client";
﻿export function BiKultLogo({ className = "", showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="https://www.bikult-ev.de/wp-content/uploads/2021/04/bikult-logo-neu-e1619623098522.png"
        alt="BiKult e.V. Logo"
        className="h-12 w-auto object-contain"
        onError={(e) => {
          e.currentTarget.src = "https://www.bikult-ev.de/wp-content/uploads/2021/04/bikult-logo-neu.png"
        }}
      />
    </div>
  )
}

export function BiKultLogoDark({ className = "", showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="https://www.bikult-ev.de/wp-content/uploads/2021/04/bikult-logo-neu-e1619623098522.png"
        alt="BiKult e.V. Logo"
        className="h-12 w-auto object-contain brightness-[0] invert-[1]"
        onError={(e) => {
          e.currentTarget.src = "https://www.bikult-ev.de/wp-content/uploads/2021/04/bikult-logo-neu.png"
        }}
      />
    </div>
  )
}
