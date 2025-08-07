import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/globals.css";
import "../styles/mona-sans.css";
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Logicwerk - AI-Powered Enterprise Solutions",
  description:
    "Transform your business with LeadIQ, Procufy, and Logicwerk EIP. Comprehensive AI solutions for lead generation, procurement automation, and intelligent workflows.",
  keywords:
    "AI, enterprise software, lead generation, procurement automation, workflow automation, artificial intelligence",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
