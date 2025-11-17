import { Music, SlidersHorizontal, Waves, ShieldCheck, Cpu, Headphones } from 'lucide-react'

const features = [
  {
    icon: Music,
    title: 'Recording & Production',
    desc: 'Pristine vocal and instrument capture with world-class front-end and a hybrid analog/digital workflow.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Mixing',
    desc: 'Surgical clarity and depth with transparent processing and tasteful color — translating across every system.',
  },
  { icon: Waves, title: 'Mastering', desc: 'Radio-ready loudness, dynamics, and vibe while preserving musicality and intent.' },
  { icon: Cpu, title: 'Sound Design', desc: 'Bespoke assets for product, film, and interactive media — modern, minimal, and future-facing.' },
  { icon: ShieldCheck, title: 'Acoustic Treatment', desc: 'Purpose-built environment tuned for accurate monitoring and creative flow.' },
  { icon: Headphones, title: 'Artist Services', desc: 'Creative direction, topline, vocal editing, and release-ready delivery packages.' },
]

export default function Features() {
  return (
    <section id="services" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">Services</h2>
          <p className="text-white/60 max-w-md">A focused suite designed for modern artists and brands. Minimal friction, maximum impact.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-6 transition hover:border-white/20">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-white font-medium text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-white/60">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
