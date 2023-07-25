import './globals.css'
import { Inter } from 'next/font/google'

import { Analytics } from '@vercel/analytics/react';

import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Isaac Bonora',
  description: 'Webstite of Isaac Bonora, a industrial designer based in Munich, Germany.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
