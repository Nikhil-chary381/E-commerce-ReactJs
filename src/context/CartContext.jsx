import { createContext, useContext, useState } from "react";

const CartContext = createContext()
export const CartProvider = ({ children }) => {

    const [Cartitems, setCartitems] = useState([])

    const addtoCart = (item) => {
        setCartitems([...Cartitems, item])

    }

    const removefromCart = (item) => {
        setCartitems(Cartitems.filter((product) => product !== item))
    }

    const handleTotal = () => {
        const totalAmount = Cartitems.reduce((sum, item) => sum + item.price, 0);
        return totalAmount;
    }
    const clearCart = () => {
        setCartitems([]);
    }

    return (
        <CartContext.Provider value={{ Cartitems, addtoCart, removefromCart, handleTotal, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => {
    return useContext(CartContext)
}