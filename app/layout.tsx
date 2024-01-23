import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ross Vasquez',
  description: 'A portfolio of technological literacy.',
  openGraph: {
    type: "website",
    url: "https://rossvasquez.me",
    title: "Ross' Portfolio",
    description: "A collection of work.",
    siteName: "Ross' Portfolio",
    images: [{url: "https://rossvasquez.me/static/media/portfolio_v3.be0529e2.png",}]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
