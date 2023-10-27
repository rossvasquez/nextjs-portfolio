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
    images: [{url: "https://evoumvdxqcveaclexrxv.supabase.co/storage/v1/object/public/Images/this_site.png",}]
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
