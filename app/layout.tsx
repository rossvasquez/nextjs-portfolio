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
    <>
    <head>
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>🧙🏼</text></svg>"></link>
    </head>
    <html lang="en">
      <body>{children}</body>
    </html>
    </>
  )
}
