import { motion } from 'framer-motion'

const works = [
  { title: 'Ambient Systems Vol. 1', tag: 'Sound Design', cover: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Neon Drive OST', tag: 'Mix & Master', cover: 'https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Aether — Single', tag: 'Production', cover: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop' },
]

export default function Showcase() {
  return (
    <section id="work" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">Selected Work</h2>
          <p className="text-white/60">A snapshot from recent projects.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w, i) => (
            <motion.a
              key={w.title}
              href="#"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img src={w.cover} alt="cover" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs text-white/70">{w.tag}</p>
                <h3 className="mt-1 text-lg font-medium text-white">{w.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
