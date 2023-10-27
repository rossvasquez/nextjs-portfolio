import './globals.css'
import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'

import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'], weight: '600' })

export const metadata: Metadata = {
  title: 'Ross Vasquez',
  description: 'A portfolio of technological literacy.',
  openGraph: {
    title: "Ross Vasquez",
    description: "A collection of work.",
    url: "https://rossvasquez.me",
    images: "https://evoumvdxqcveaclexrxv.supabase.co/storage/v1/object/public/Images/this_site.png"
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
