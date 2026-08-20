import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import './ReservationModal.css'

function ReservationModal({ isOpen, onClose }) {
  const [selectedDate, setSelectedDate] = useState('')
  const [confirmed, setConfirmed] = useState(false)

  function handleConfirm() {
    if (!selectedDate) return
    setConfirmed(true)
    setTimeout(() => {
      setConfirmed(false)
      setSelectedDate('')
      onClose()
    }, 1800)
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="reservation-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="reservation-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="reservation-close" onClick={onClose}>×</button>

            {confirmed ? (
              <div className="reservation-confirmed">
                <p>Request received</p>
                <span>We'll be in touch to confirm your Chef's Table experience.</span>
              </div>
            ) : (
              <>
                <h3 className="reservation-title">Reserve Your Date</h3>
                <p className="reservation-subtext">
                  Choose a date for the Chef's Table Experience. Limited to 6 guests, Thursday – Saturday.
                </p>

                <input
                  type="date"
                  className="reservation-date-input"
                  min={today}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />

                <button
                  className="reservation-confirm-button"
                  onClick={handleConfirm}
                  disabled={!selectedDate}
                >
                  Confirm Inquiry
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ReservationModal