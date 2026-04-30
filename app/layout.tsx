import type { Metadata } from 'next'
import { CartProvider } from '@/context/CartContext'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Columbus',
  description: 'Product listing page',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body>
        <CartProvider>
        {children}
        </CartProvider>
      </body>
    </html>
  )
}