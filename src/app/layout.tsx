import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cinemidia",
  description: "Site sobre filmes",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
