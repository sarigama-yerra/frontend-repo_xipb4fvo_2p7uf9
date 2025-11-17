import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import BackgroundDecor from './components/BackgroundDecor'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-amber-50 text-amber-900">
      <BackgroundDecor />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="py-8 text-center text-sm text-amber-700">
        Crafted with care for young readers • Safe • Wholesome • Inspiring
      </footer>
    </div>
  )
}

export default App
