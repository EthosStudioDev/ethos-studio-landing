import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Orbitron } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" })

export const metadata: Metadata = {
  title: "Ethos Studio | AI Solutions Architect & Full-stack Developer",
  description: "Delivering Business Value at AI Speed",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/EthosLogo.png",
        type: "image/png",
      },
    ],
    apple: "/EthosLogo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased ${_orbitron.variable}`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
