import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Aeplo - Free VPS & Affordable Dedicated Servers",
  description:
    "Get free VPS hosting and affordable dedicated servers. Reliable cloud infrastructure made simple and accessible for everyone.",

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Suspense fallback={<div>Loading...</div>}>
              <Navigation />
            </Suspense>
            <main id="main-content" className="flex-1 pt-16" role="main">
              {children}
            </main>
            <Suspense fallback={<div>Loading...</div>}>
              <Footer />
            </Suspense>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
