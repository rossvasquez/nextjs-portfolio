import './globals.css'
import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'], weight: '600' })

export const metadata: Metadata = {
  title: 'Ross Vasquez',
  description: 'A portfolio of technological literacy.',
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
