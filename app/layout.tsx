import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

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
  title: 'Shambhavi Metal Alloys | Premium Aluminium Alloy Ingot Supplier in Delhi-NCR',
  description:
    'Trusted supplier of aluminium alloy ingots (ADC-12, LM-24, AC4B) for automotive and electrical industries. ISO certified. Delhi-NCR based. Contact us for a quote.',
  openGraph: {
    title: 'Shambhavi Metal Alloys | Premium Aluminium Alloy Ingot Supplier in Delhi-NCR',
    description:
      'Trusted supplier of aluminium alloy ingots (ADC-12, LM-24, AC4B) for automotive and electrical industries.',
    images: ['/images/hero-1.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shambhavi Metal Alloys | Premium Aluminium Alloy Ingot Supplier in Delhi-NCR',
    description:
      'Trusted supplier of aluminium alloy ingots for automotive and electrical industries.',
    images: ['/images/hero-1.jpg']
  },
  icons: {
    icon: '/favicon.svg'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfair.variable}`}>{children}</body>
    </html>
  )
}
