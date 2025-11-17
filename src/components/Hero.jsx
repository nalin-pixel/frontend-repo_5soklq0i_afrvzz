import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_60%_-10%,rgba(99,102,241,0.25),transparent),radial-gradient(800px_400px_at_20%_110%,rgba(56,189,248,0.2),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Open for bookings — Summer 2025
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-white">
            Futuristic Audio & Music Production Studio
          </h1>
          <p className="mt-6 text-white/70 max-w-prose">
            We craft immersive sound for artists, brands, and products. High-fidelity recording, mixing, mastering, and bespoke sound design with a minimalist, technology-first approach.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]">
              Book a Session
            </a>
            <a href="#work" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur transition-colors hover:bg-white/15">
              Explore Our Work
            </a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
