import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartPanel from './components/CartPanel'
import FloatingCartButton from './components/FloatingCartButton'
import MainPage from './pages/MainPage'
import ArticlePage from './pages/ArticlePage'
import MenuPage from './pages/MenuPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <CartProvider>
      <BrowserRouter basename="/FloranceRestaurant/">
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
        <Footer />
        <CartPanel />
        <FloatingCartButton />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App