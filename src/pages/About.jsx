import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-emerald-50">
      <Navbar />
      <header className="relative h-[70vh] grid place-items-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(16,185,129,0.2),transparent_40%)]" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl sm:text-6xl font-serif">Rooted in Africa, Built for the Future</h1>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative p-6 rounded-xl border border-emerald-500/20 bg-white/5">
            <h3 className="font-serif text-2xl mb-3">African visual heritage</h3>
            <p className="text-emerald-100/80">We draw from adinkra, kente, and indigenous forms to encode identity systems that carry weight.</p>
            <div className="absolute inset-0 -z-10 opacity-10 bg-[radial-gradient(circle,#065f46_1px,transparent_1px)] bg-[length:20px_20px]" />
          </div>
          <div className="relative p-6 rounded-xl border border-emerald-500/20 bg-white/5">
            <h3 className="font-serif text-2xl mb-3">Modern psychological design</h3>
            <p className="text-emerald-100/80">We engineer emotion, salience, and memory to move audiences from attention to action.</p>
            <div className="absolute inset-0 -z-10 opacity-10 bg-[radial-gradient(circle,#991b1b_1px,transparent_1px)] bg-[length:20px_20px]" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-serif mb-8">Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({length:8}).map((_, i) => (
              <motion.div key={i} whileHover={{ y: -4 }} className="relative p-4 rounded-xl border border-amber-400/20 bg-white/5 text-center">
                <div className="mx-auto w-28 h-28 rounded-full overflow-hidden ring-2 ring-amber-400/60">
                  <img src={`https://i.pravatar.cc/150?img=${i+1}`} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="mt-3 font-semibold">Member {i+1}</div>
                <div className="text-red-400 font-mono text-xs">Role • {2020 + (i%4)}</div>
                <div className="mt-3 text-emerald-200/70 text-sm">“We design for cultural truth and measurable impact.”</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-serif mb-4">Values</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 text-emerald-100/80">
            {['Ingenuity','Cultural Integrity','Precision','Intuition','Mastery'].map(v => (
              <li key={v} className="p-4 rounded-lg border border-emerald-500/20 bg-white/5">{v}</li>
            ))}
          </ul>
        </section>

        <div className="mt-16 text-center">
          <a href="/approach" className="inline-flex items-center gap-2 bg-amber-400 text-slate-900 px-6 py-3 rounded-md font-semibold hover:brightness-110">Learn How We Think →</a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
