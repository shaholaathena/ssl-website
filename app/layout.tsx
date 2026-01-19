import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SSL Wireless - Empowering Industries & Communities through Digital Innovation',
  description: 'We deliver innovative ideas to elevate your digital footprint & sharpen your brand',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://api.fonts.coollabs.io" />
        <link href="https://api.fonts.coollabs.io/css2?family=Mona+Sans:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
