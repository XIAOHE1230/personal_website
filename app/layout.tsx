import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { LocaleProvider } from '@/lib/i18n/LocaleProvider'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Xiao He — Architecture × Robotics × AI',
  description:
    'Portfolio of Xiao He (何骁), MSD-RAS candidate at University of Pennsylvania, Weitzman School of Design. Cross-disciplinary designer at the intersection of Architecture, Robotics, and AI.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  )
}
