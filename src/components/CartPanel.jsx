import { motion, AnimatePresence } from 'motion/react'
import { useCart } from '../context/CartContext'
import './CartPanel.css'

function CartPanel() {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, placeOrder, totalPrice } = useCart()

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          className="cart-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCartOpen(false)}
        >
          <motion.div
            className="cart-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="cart-panel-title">Your Order</h3>

            {cartItems.length === 0 ? (
              <p className="cart-panel-empty">Your cart is empty.</p>
            ) : (
              <div className="cart-panel-list">
                {cartItems.map((item, index) => (
                  <div className="cart-panel-item" key={index}>
                    <span className="cart-panel-item-name">{item.name}</span>
                    <span className="cart-panel-item-price">${item.price}</span>
                    <button
                      className="cart-panel-remove"
                      onClick={() => removeFromCart(index)}
                      aria-label="Remove item"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            {cartItems.length > 0 && (
              <>
                <div className="cart-panel-total">
                  <span>Total</span>
                  <span>${totalPrice}</span>
                </div>
                <button className="cart-panel-button" onClick={placeOrder}>
                  Send to Kitchen
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CartPanel