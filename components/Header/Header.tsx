'use client'
import { useCart } from '@/context/CartContext'

export function Header () {
    const { itemsCount } = useCart()
    return (
        <header>
            <div>
                <img src="/logo.png" alt="brand logo" />
                <span>Columbus Poland</span>
            </div>
            <div>
                <button>Koszyk ikona<span>{itemsCount}</span></button>
            </div>
        </header>
    )
}