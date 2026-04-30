import type { Product } from '@/types'

type ProductCardProps = {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const discountedPrice = product.promotion 
                ? product.price - (product.price * product.promotion.percentage / 100)
                : null
    return (
        <article>
            <img src={product.image.link} alt={product.image.altText} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div>
                <img src={product.brandLogo} alt={product.brandName} />
                <span>{product.brandName}</span>
            </div>

            {product.promotion && (
                <div>
                    <span>{product.promotion.name}</span>
                    <p><s>{product.price} zł</s></p>
                </div>
            )}
            <p>{discountedPrice ?? product.price} zł</p>
            
            <button>Dodaj do koszyka</button>
        </article>
    )
}