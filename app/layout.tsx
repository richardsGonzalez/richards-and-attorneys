import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Richard's & Attorneys Law Firm",
  description: 'Premier boutique law firm serving Miami since 1990',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
