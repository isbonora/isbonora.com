import './globals.css'
import { Inter } from 'next/font/google'

import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Isaac Bonora',
  description: 'The portfolio of Isaac Bonora, a industrial designer based in Munich, Germany.',
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
      </body>
    </html>
  );
}
