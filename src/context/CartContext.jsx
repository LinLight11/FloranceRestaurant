import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [orderSent, setOrderSent] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  function addToCart(item) {
    setCartItems((prev) => [...prev, item])
  }

  function removeFromCart(index) {
    setCartItems((prev) => prev.filter((_, i) => i !== index))
  }

  function placeOrder() {
    setOrderSent(true)
    setCartItems([])
    setIsCartOpen(false)
    setTimeout(() => setOrderSent(false), 2500)
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        placeOrder,
        orderSent,
        isCartOpen,
        setIsCartOpen,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}