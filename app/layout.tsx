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

  // Canonical URL
  metadataBase: new URL("https://www.aeplo.com"),
  alternates: {
    canonical: "/",
  },

  // Open Graph (for Facebook and others)
  openGraph: {
    title: "Aeplo - Free VPS & Affordable Dedicated Servers",
    description:
      "Get free VPS hosting and affordable dedicated servers. Reliable cloud infrastructure made simple and accessible for everyone.",
    url: "https://www.aeplo.com",
    siteName: "Aeplo",
    images: [
      {
        url: "https://www.aeplo.com/og-image.jpg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Aeplo - Free VPS & Affordable Dedicated Servers",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Aeplo - Free VPS & Affordable Dedicated Servers",
    description:
      "Get free VPS hosting and affordable dedicated servers. Reliable cloud infrastructure made simple and accessible for everyone.",
    images: ["https://www.aeplo.com/og-image.jpg"], // Same as OG image
    site: "@AeploHosting", // Replace with your Twitter handle
    creator: "@AeploHosting", // Optional
  },

  // Robots directives
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons (Favicons)
  icons: {
    icon: "/favicon.ico", // Standard favicon
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // For iOS
  },

  // Theme color (helps with browser UI theming)
  themeColor: "#ffffff",

  // Additional optional SEO fields
  category: "technology",
  generator: "Next.js",
  keywords: [
    "free VPS",
    "cheap dedicated servers",
    "affordable VPS hosting",
    "cloud infrastructure",
    "Aeplo",
    "VPS hosting",
    "dedicated hosting",
  ],
};


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
