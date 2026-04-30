//  global state of cart
import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type CartContextType = {
    itemsCount: number;
    addItem: () => void;
}

const CartContext = createContext<CartContextType>({
    itemsCount: 0,
    addItem: () => {},
})

export function CartProvider({ children }: { children: ReactNode }) {
    const [itemsCount, setItemsCount] = useState(0)

    const addItem = () => {
        setItemsCount(itemsCount + 1)
    }

    return (
        <CartContext.Provider value={{ itemsCount, addItem }}>
            {children}
        </CartContext.Provider>
    )    
}

export function useCart() {
    return useContext(CartContext)
}