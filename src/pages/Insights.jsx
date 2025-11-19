import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion, AnimatePresence } from 'framer-motion'

const posts = Array.from({length:8}).map((_,i)=>({
  id: i+1,
  title: `Design Insight ${i+1}`,
  excerpt: 'On cultural psychology, systems thinking, and digital influence.',
  img: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop',
}))

export default function Insights(){
  return (
    <div className="min-h-screen bg-slate-950 text-emerald-50">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {posts.map(p=> (
              <motion.article key={p.id} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="overflow-hidden rounded-xl border border-emerald-500/10 bg-white/5">
                <div className="relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[linear-gradient(90deg,#991b1b,transparent,#10b981)]" />
                  <img src={p.img} alt="" className="w-full h-40 object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl group hover:translate-x-0.5 transition">{p.title}</h3>
                  <p className="text-emerald-200/70 mt-2">{p.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
        <div className="mt-10 text-center">
          <a href="#" className="inline-flex items-center gap-2 bg-amber-400 text-slate-900 px-6 py-3 rounded-md font-semibold hover:brightness-110">Get The Latest Insights</a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
