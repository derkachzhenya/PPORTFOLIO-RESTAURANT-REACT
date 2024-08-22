import Dishes from './components/Dishes'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import About from './components/About'

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection />
      <Navbar />
      <Dishes />
      <About />
    </main>

  )
}

export default App