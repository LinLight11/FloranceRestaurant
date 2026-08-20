import Hero from '../components/Hero'
import FeatureCards from '../components/FeatureCards'
import WineBanner from '../components/WineBanner'
import Reviews from '../components/Reviews'

function MainPage() {
  return (
    <div className="page-container">
      <Hero />
      <FeatureCards />
      <WineBanner />
      <Reviews />
    </div>
  )
}

export default MainPage