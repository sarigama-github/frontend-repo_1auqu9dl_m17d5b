import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const filters = ['All', 'Branding', 'Web Experience', '3D & Motion', 'Identity Systems']

const projects = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  tag: filters[(i % (filters.length - 1)) + 1],
  sub: 'Cultural Identity • 2025',
  img: `https://images.unsplash.com/photo-1517817748492-b9d0893aaa2f?q=80&w=1600&auto=format&fit=crop`
}))

export default function Work() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.tag === active)

  return (
    <div className="min-h-screen bg-slate-950 text-emerald-50">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="flex items-center gap-3 flex-wrap">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`relative px-4 py-2 text-sm rounded-full border border-emerald-500/20 text-emerald-100/80 hover:text-emerald-100 transition`}
            >
              {f}
              <span className={`absolute inset-0 -z-10 ${active === f ? 'bg-[linear-gradient(90deg,transparent,rgba(220,38,38,0.15),transparent)]' : ''}`}></span>
              <span className={`pointer-events-none absolute left-0 bottom-0 h-[2px] bg-red-600 transition-all ${active === f ? 'w-full' : 'w-0'}`}></span>
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          <AnimatePresence>
            {filtered.map((p) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="mb-6 break-inside-avoid overflow-hidden rounded-xl border border-emerald-500/10 bg-white/5"
              >
                <div className="relative group">
                  <img src={p.img} alt="" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-y-0 left-0 w-[3px] bg-amber-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl">{p.title}</h3>
                  <p className="text-amber-300 font-mono text-xs mt-1">{p.sub}</p>
                  <button className="mt-4 text-amber-300 hover:text-amber-200">View Case Study →</button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  )
}
