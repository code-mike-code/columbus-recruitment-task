import type { Metadata } from 'next'
import { CartProvider } from '@/context/CartContext'
import { Header } from '@/components/Header/Header'
import type { ReactNode } from 'react'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Columbus',
  description: 'Product listing page',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body>
        <CartProvider>
            <Header />
        {children}
        </CartProvider>
      </body>
    </html>
  )
}