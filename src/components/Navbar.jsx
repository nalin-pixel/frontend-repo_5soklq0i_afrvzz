import { useState } from 'react'
import { Menu, X, Headphones, Instagram, Music2, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#work', label: 'Work' },
    { href: '#services', label: 'Services' },
    { href: '#studio', label: 'Studio' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl/0">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-white/15 to-white/5 ring-1 ring-white/20">
              <Headphones className="h-5 w-5 text-white" />
            </span>
            <span className="text-white/90 tracking-wide font-medium">AURALAB</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-white/70 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://instagram.com" target="_blank" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 ring-1 ring-white/20 hover:bg-white/15 transition-colors">
              <Phone className="h-4 w-4" />
              Book a Session
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <nav className="flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white/80 hover:text-white">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 ring-1 ring-white/20 w-max">
                <Music2 className="h-4 w-4" /> Book a Session
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
