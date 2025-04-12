import type React from "react"
import "./globals.css"
import { Inter, Lato } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Navbar"
import Footer from "@/components/footer"
import type { Metadata } from "next"

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const lato = Lato({ 
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Nova Tech | AI in Healthcare",
  description: "Exploring the latest advancements in AI technology for healthcare and medical research.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lato.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}