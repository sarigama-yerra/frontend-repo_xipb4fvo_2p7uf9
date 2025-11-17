import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-sky-50 to-blue-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="py-8 text-center text-sm text-gray-600">
        Crafted with care for young readers • Safe • Wholesome • Inspiring
      </footer>
    </div>
  )
}

export default App
