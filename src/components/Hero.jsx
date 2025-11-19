import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to match Afro-luxury aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-amber-300/90 tracking-[0.25em] text-xs uppercase mb-4">African futurism • Psychological design</p>
          <h1 className="text-4xl sm:text-6xl font-serif text-emerald-50 leading-tight">
            Crafting digital identities rooted in culture, engineered for influence
          </h1>
          <p className="mt-6 text-emerald-100/80 max-w-2xl">
            A dark, Afro-luxury lab where kente-inspired energy meets rigorous brand psychology.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 bg-amber-400 text-slate-900 font-semibold px-6 py-3 rounded-md hover:brightness-110 transition shadow-[0_0_20px_rgba(251,191,36,0.25)]"
            >
              Explore Work →
            </Link>
            <Link
              to="/approach"
              className="inline-flex items-center gap-2 border border-emerald-400/30 text-emerald-100 px-6 py-3 rounded-md hover:bg-white/5 transition"
            >
              Our Approach
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
