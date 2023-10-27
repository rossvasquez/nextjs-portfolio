import './globals.css'

import Head from 'next/head'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
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
    </Head>
    <html lang="en">
      <body>{children}</body>
    </html>
    </>
  )
}
