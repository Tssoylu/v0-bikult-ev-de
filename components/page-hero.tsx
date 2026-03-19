"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

interface Breadcrumb {
  name?: string
  label?: string
  href: string
}

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumbs?: Breadcrumb[]
  badge?: string
  className?: string
}

function generateBreadcrumbs(pathname: string): Breadcrumb[] {
  if (!pathname || pathname === "/") return []
  
  const segments = pathname.split("/").filter(Boolean)
  let currentPath = ""
  
  return segments.map((segment) => {
    currentPath += "/" + segment
    const label = segment
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
      
    return {
      name: label,
      href: currentPath
    }
  })
}

export function PageHero({ title, subtitle, breadcrumbs: explicitBreadcrumbs, badge, className }: PageHeroProps) {
  const pathname = usePathname()
  const breadcrumbs = explicitBreadcrumbs || generateBreadcrumbs(pathname || "")

  return (
    <section
      className={cn(
        "pt-36 pb-12 md:pt-40 md:pb-16 bg-primary text-primary-foreground relative overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.15)_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 text-sm text-primary-foreground/70 mb-5 flex-wrap">
            <Link
              href="/"
              className="hover:text-primary-foreground transition-colors flex items-center gap-2 font-medium"
            >
              <Home className="h-4 w-4" />
              <span>Startseite</span>
            </Link>
            {breadcrumbs.map((crumb, i) => {
              const text = crumb.name ?? crumb.label ?? ""
              const isLast = i === breadcrumbs.length - 1
              if (text === "Startseite") return null
              
              return (
                <span key={crumb.href} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5 shrink-0" />
                  {isLast ? (
                    <span className="text-primary-foreground font-semibold">{text}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-primary-foreground transition-colors">
                      {text}
                    </Link>
                  )}
                </span>
              )
            })}
          </nav>
        )}

        {badge && (
          <div className="inline-block mb-3">
            <span className="bg-accent text-accent-foreground text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              {badge}
            </span>
          </div>
        )}

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-balance leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-primary-foreground/75 max-w-2xl text-pretty leading-relaxed">
            {subtitle}
          </p>
        )}

        <div className="mt-8 h-1 w-20 rounded-full bg-red-600" />
      </div>
    </section>
  )
}