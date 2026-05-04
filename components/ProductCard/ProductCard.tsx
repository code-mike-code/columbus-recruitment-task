'use client'

import { useEffect, useRef, useState } from 'react'
import type { Product } from '@/types'
import { useCart } from '@/context/CartContext'
import styles from './ProductCard.module.css'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const cardRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = cardRef.current

    if (!element) return 

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true)
                observer.unobserve(element)
            }
        },
        {
            threshold: 0.15,
        }
    )

    observer.observe(element)

    return () => {
        observer.disconnect()
    }
})

  const discountedPrice = product.promotion
    ? product.price - (product.price * product.promotion.percentage) / 100
    : null

    const formatPrice = (price: number) => {
        return `${(price / 100).toFixed(2)} zł`
    }

  return (
    <article 
        ref={cardRef}
        className={`${styles.card} reveal ${isVisible ? 'revealVisible' : ''}`}
    >
      <div className={styles.imageWrap}>
        <img
          src={product.image.url}
          alt={product.image.altText}
          className={styles.image}
        />

        {product.promotion && (
          <span className={styles.promoBadge}>
            {product.promotion.name}
          </span>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.brandRow}>
          <img
            src={product.brandLogo}
            alt={product.brandName}
            className={styles.brandLogo}
          />
          <span className={styles.brandName}>{product.brandName}</span>
        </div>

        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.description}>{product.description}</p>

        <div className={styles.footer}>
          <div className={styles.priceBlock}>
            {product.promotion && (
              <p className={styles.oldPrice}>
                <s>{formatPrice(product.price)}</s>
              </p>
            )}

            <p className={styles.price}>
              {formatPrice(discountedPrice ?? product.price)}
            </p>
          </div>

          <button className={styles.button} onClick={addItem}>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}