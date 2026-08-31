import type { Metadata } from "next"

import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"

import "../styles/globals.sass"
import "../styles/pages/catalog.sass"
import "../styles/components/catalogList.sass"

export const metadata: Metadata = {
  title: "Cinemidia",
  description: "Site sobre filmes",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  )
}
