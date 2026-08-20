import { useState } from 'react'
import ReservationModal from './ReservationModal'
import './ChefTable.css'

function ChefTable() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="chef-table">
      <div className="chef-table-image-wrapper">
        <img src="/img/poster.jpg" alt="Chef's Table" className="chef-table-image" />
      </div>
      <div className="chef-table-info">
        <span className="chef-table-label">Exclusive Experience</span>
        <h3 className="chef-table-title">Chef's Table Experience</h3>
        <p className="chef-table-description">
          Gather around the private kitchen counter for an intimate culinary
          journey led by our Executive Chef. Every course of the seven seasonal
          courses is inspired with modern creativity, each dish beautifully
          narrated and paired with our finest reserve wines.
        </p>
        <div className="chef-table-meta">
          <div>
            <span className="chef-table-meta-label">Capacity</span>
            <span className="chef-table-meta-value">Limited to 6 Guests</span>
          </div>
          <div>
            <span className="chef-table-meta-label">Availability</span>
            <span className="chef-table-meta-value">Thursday – Saturday</span>
          </div>
        </div>
        <button className="chef-table-button" onClick={() => setIsModalOpen(true)}>
          Inquire for Reservations
        </button>
      </div>

      <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

export default ChefTable