export default function CTA() {
  return (
    <section id="contact" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 sm:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">Let’s craft your next record.</h3>
              <p className="mt-3 text-white/70">Tell us about your project — we’ll reply within 24 hours with availability and rates.</p>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="grid w-full max-w-md grid-cols-1 gap-3">
              <input className="rounded-xl bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 ring-1 ring-white/15 focus:outline-none focus:ring-white/30" placeholder="Your email" />
              <input className="rounded-xl bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 ring-1 ring-white/15 focus:outline-none focus:ring-white/30" placeholder="Project type (mix, master, production)" />
              <button className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black hover:opacity-90">Request Availability</button>
              <p className="text-xs text-white/50">By clicking, you agree to be contacted by our team.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
