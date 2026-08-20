import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useCart } from '../context/CartContext'
import './MenuItemModal.css'

function MenuItemModal({ item, onClose }) {
  const { addToCart } = useCart()
  const [justAdded, setJustAdded] = useState(false)

  function handleAddToCart() {
    addToCart(item)
    setJustAdded(true)
    setTimeout(() => {
      setJustAdded(false)
      onClose()
    }, 900)
  }

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose}>×</button>
            <h3 className="modal-title">{item.name}</h3>
            <div className="modal-image-wrapper">
              <img src={item.image} alt={item.name} className="modal-image" />
            </div>
            <p className="modal-description">{item.description}</p>
            <button className="modal-add-button" onClick={handleAddToCart}>
              {justAdded ? 'Added ✓' : 'Add to Cart'}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MenuItemModal