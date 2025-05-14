import type { ReactNode } from "react"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { Inter, Lato, Source_Sans_3 } from 'next/font/google'

import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Navbar"
import Footer from "@/components/footer"

import "./globals.css"

// Font config
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
})

// Static Params
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "id" }, { locale: "jp" }]
}

// Metadata
export const metadata = {
  title: "Nova Tech | AI in Healthcare",
  description: "Exploring the latest advancements in AI technology for healthcare and medical research.",
}

// Layout Function
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode
  params: { locale: string }
}) {
  let messages
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale} className={`${inter.variable} ${lato.variable} ${sourceSans.variable}`}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
