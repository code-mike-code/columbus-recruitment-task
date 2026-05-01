'use client'

import styles from './ProductCard.module.css'
import type { Product } from '@/types'
import { useCart } from '@/context/CartContext'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  const discountedPrice = product.promotion
    ? product.price - (product.price * product.promotion.percentage) / 100
    : null

    const formatPrice = (price: number) => {
        return `${(price / 100).toFixed(2)} zł`
    }

  return (
    <article className={styles.card}>
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