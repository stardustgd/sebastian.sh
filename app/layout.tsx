import type { Metadata } from 'next'
import { Lexend_Deca } from 'next/font/google'
import { ReactLenis } from 'lenis/react'
import './globals.css'

const lexendDeca = Lexend_Deca({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sebastian Ala Torre',
  description: 'My portfolio website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={`${lexendDeca.className} antialiased`}>{children}</body>
      </ReactLenis>
    </html>
  )
}
