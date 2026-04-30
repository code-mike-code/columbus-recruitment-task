import { getProducts } from '@/services/api'
import { ProductList } from '@/components/ProductList/ProductList'

export default async function HomePage() {
    const data = await getProducts()
    return (
        <main>
            <ProductList products={data.products}/>
        </main>
    )
}