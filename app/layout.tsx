import type { Metadata } from 'next'
import { Lexend_Deca } from 'next/font/google'
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
      <body className={`${lexendDeca.className} antialiased`}>{children}</body>
    </html>
  )
}
