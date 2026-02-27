import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

const baseUrl = 'https://shambhavimetal.com'
const socialImage = '/images/Gemini_Generated_Image_36suul36suul36su.webp'
const siteTitle = 'Shambhavi Metal Alloys | Premium Aluminium Alloy Ingot Supplier in Delhi-NCR'
const siteDescription =
  'Trusted supplier of aluminium alloy ingots (ADC-12, LM-24, AC4B) for automotive and electrical industries. ISO certified. Delhi-NCR based. Contact us for a quote.'

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-dm-sans'
})

const playfair = Playfair_Display({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: baseUrl
  },
  openGraph: {
    type: 'website',
    url: baseUrl,
    siteName: 'Shambhavi Metal Alloys',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: `${baseUrl}${socialImage}`,
        width: 2626,
        height: 1520,
        alt: 'Shambhavi Metal Alloys'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [`${baseUrl}${socialImage}`]
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }]
  },
  manifest: '/manifest.webmanifest'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: 'Shambhavi Metal Alloys',
        url: baseUrl,
        logo: `${baseUrl}/images/logo/logo.webp`
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: 'Shambhavi Metal Alloys',
        inLanguage: 'en-IN',
        publisher: {
          '@id': `${baseUrl}/#organization`
        }
      }
    ]
  }
  const structuredDataJson = JSON.stringify(structuredData).replace(/</g, '\\u003c')

  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfair.variable}`}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredDataJson }} />
      </body>
    </html>
  )
}
