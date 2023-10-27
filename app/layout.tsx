import './globals.css'

import Head from 'next/head'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>Ross Vasquez Portfolio</title>
        <meta name="description" content="A collection of work." key="desc" />
        <meta property="og:title" content="Ross' Portfolio" />
        <meta
          property="og:description"
          content="A collection of work."
        />
        <meta
          property="og:image"
          content="https://evoumvdxqcveaclexrxv.supabase.co/storage/v1/object/public/Images/this_site.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
