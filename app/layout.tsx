import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { CookieConsent } from '@/components/cookie-consent'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'BiKult e.V. - Bildungs und Kulturzentrum',
  description: 'Bildungs und Kulturzentrum e.V. in Marl - Lernförderung, Nachhilfe, Deutsch als Fremdsprache und kulturelle Aktivitäten',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
