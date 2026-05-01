import styles from './ProductList.module.css'
import { ProductCard } from '@/components/ProductCard/ProductCard'
import type { Product } from '@/types'

type ProductListProps = {
  products: Product[]
}

export function ProductList({ products }: ProductListProps) {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>Product listing</p>
        <h1 className={styles.title}>Discover our products</h1>
      </div>

      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.gtin} product={product} />
        ))}
      </div>
    </section>
  )
}