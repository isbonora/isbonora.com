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
        <div className="sticky top-0 left-0 w-full h-16 lg:h-36">
          <div className="w-full h-full" style={{
            background: 'linear-gradient(white , transparent)'
          }}></div>
        </div>


        {children}
        <Analytics />
      </body>
    </html>
  );
}
