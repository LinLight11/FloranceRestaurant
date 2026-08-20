import { motion, AnimatePresence } from 'motion/react'
import { useCart } from '../context/CartContext'
import './FloatingCartButton.css'

function FloatingCartButton() {
  const { cartItems, setIsCartOpen } = useCart()

  return (
    <AnimatePresence>
      {cartItems.length > 0 && (
        <motion.button
          className="floating-cart-button"
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsCartOpen(true)}
        >
          Order ({cartItems.length})
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default FloatingCartButton