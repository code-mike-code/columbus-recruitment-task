import type { Product } from '@/types'
import { ProductCard } from '@/components/ProductCard/ProductCard'

type ProductListProps = {
    products: Product[];
}

export function ProductList({ products }: ProductListProps) {
    return (
        <ul>
            {products.map(product => (
                <li key={product.articleNumber}>
                    <ProductCard product={product} />
                </li>
            ))}
        </ul>
    )
}
