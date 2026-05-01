'use client'

import { useCart } from '@/context/CartContext'
import styles from './Header.module.css'

export function Header () {
    const { itemsCount } = useCart()
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <a href="/" className={styles.brand}>
                    <img 
                    src="/logo.png" 
                    alt="Columbus Poland Logo"
                    className={styles.logo} 
                    />
                    <span className={styles.brandName}>Columbus Poland</span>
                </a>

                <button
                type='button'
                className={styles.cartButton}
                aria-label={'Koszyk, lista produktów: ${itemsCount}'}
                >
                    <span className={styles.cartIcon} aria-hidden="true">
                        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8'>
                            <path d="M3 4h2l2.4 10.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 7H7" />
                            <circle cx="10" cy="19" r="1.5" />
                            <circle cx="17" cy="19" r="1.5" />
                        </svg>
                    </span>
                    {itemsCount > 0 && (
                        <span className={styles.badge}>{itemsCount}</span>
                    )}
                </button>
            </div>
        </header>
    )
}