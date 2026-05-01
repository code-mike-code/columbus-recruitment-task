import type { Metadata } from 'next'
import { CartProvider } from '@/context/CartContext'
import { Header } from '@/components/Header/Header'
import { getProducts } from '@/services/api'
import type { ReactNode } from 'react'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Columbus',
  description: 'Product listing page',
}

export default async function RootLayout({ children }: { children: ReactNode }) {
    const data = await getProducts()

  return (
    <html lang="pl" suppressHydrationWarning>
      <body>
        <CartProvider>
            <Header logo={data.logo} title={data.title} />
        {children}
        </CartProvider>
      </body>
    </html>
  )
}