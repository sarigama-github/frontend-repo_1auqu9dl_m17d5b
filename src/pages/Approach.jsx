import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function Approach() {
  return (
    <div className="min-h-screen bg-slate-950 text-emerald-50">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <section>
          <h1 className="text-4xl font-serif">Our Framework of Cultural Influence</h1>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {["Identity Engineering","Emotional Architecture","Behavioural Conversion"].map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 rounded-xl border border-emerald-500/20 bg-white/5 overflow-hidden"
              >
                <div className="absolute inset-0 pointer-events-none opacity-20 bg-[repeating-linear-gradient(90deg,#10b981_0px,#10b981_1px,transparent_1px,transparent_8px)]" />
                <h3 className="relative font-serif text-2xl">{t}</h3>
                <div className="relative mt-4 h-10 w-full rounded-full bg-gradient-to-r from-amber-400/0 via-amber-400/30 to-amber-400/0 blur-md" />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-serif">A Clearly Engineered Journey</h2>
          <div className="relative mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {["Discovery","Cultural Intelligence Mapping","Design Engineering","Influence Deployment","Growth Tracking"].map((step, i) => (
              <motion.div key={step} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="relative p-5 rounded-lg border border-emerald-500/20 bg-white/5">
                <div className="absolute -top-3 left-5 text-xs text-emerald-300/80">{i+1}</div>
                <div className="absolute inset-x-0 -z-10 top-1/2 h-[2px] bg-emerald-500/30" />
                <div className="relative font-semibold">{step}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-serif">Visual Methodology</h2>
          <div className="mt-8 grid place-items-center">
            <div className="w-72 h-72 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-emerald-500/20 grid place-items-center">
              <div className="w-40 h-40 animate-spin-slow bg-[conic-gradient(from_45deg,rgba(16,185,129,0.6),rgba(251,191,36,0.6),rgba(16,185,129,0.6))] rounded-xl" />
            </div>
          </div>
          <div className="text-center mt-6 text-emerald-200/70 text-sm">Drag to rotate: conceptual representation</div>
        </section>

        <div className="mt-16 text-center">
          <a href="/work" className="inline-flex items-center gap-2 bg-amber-400 text-slate-900 px-6 py-3 rounded-md font-semibold hover:brightness-110">See This Framework Applied →</a>
        </div>
      </main>
      <Footer />
      <style>{`.animate-spin-slow{animation:spin 8s linear infinite}`}</style>
    </div>
  )
}
