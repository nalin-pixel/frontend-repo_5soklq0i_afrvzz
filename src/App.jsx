import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <CTA />
      <footer className="bg-black/95 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} AURALAB Studio. All rights reserved.</p>
          <div className="flex items-center gap-4 text-white/60">
            <a href="#" className="hover:text-white">Privacy</a>
            <span className="opacity-30">•</span>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
