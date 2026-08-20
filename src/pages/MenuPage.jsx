import { useState } from 'react'
import menuData from '../data/menuItems'
import MenuHero from '../components/MenuHero'
import MenuSection from '../components/MenuSection'
import ChefTable from '../components/ChefTable'
import MenuItemModal from '../components/MenuItemModal'

function MenuPage() {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <div className="page-container">
      <MenuHero />
      <MenuSection title="Starters" items={menuData.starters} onSelectItem={setSelectedItem} />
      <ChefTable />
      <MenuSection title="Main Courses" items={menuData.mains} onSelectItem={setSelectedItem} />
      <MenuSection title="Desserts" items={menuData.desserts} onSelectItem={setSelectedItem} />

      <MenuItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  )
}

export default MenuPage