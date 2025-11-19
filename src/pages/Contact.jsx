import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact(){
  return (
    <div className="min-h-screen bg-slate-950 text-emerald-50">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 grid lg:grid-cols-3 gap-12">
        <section className="lg:col-span-2">
          <div>
            <h1 className="text-4xl font-serif">Let’s Create Something Timeless</h1>
            <p className="mt-3 text-emerald-100/80">Tell us your vision and we’ll engineer the identity behind it.</p>
          </div>
          <form className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="sm:col-span-1">
              <label className="text-sm text-emerald-200/80">Name</label>
              <input className="w-full bg-transparent border-b border-amber-400/60 focus:border-emerald-400 outline-none py-2" />
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm text-emerald-200/80">Brand / Organisation</label>
              <input className="w-full bg-transparent border-b border-amber-400/60 focus:border-emerald-400 outline-none py-2" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-emerald-200/80">Email</label>
              <input type="email" className="w-full bg-transparent border-b border-amber-400/60 focus:border-emerald-400 outline-none py-2" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-emerald-200/80">Project Budget</label>
              <select className="w-full bg-transparent border-b border-amber-400/60 focus:border-emerald-400 outline-none py-2">
                <option className="bg-slate-900">$10k - $25k</option>
                <option className="bg-slate-900">$25k - $50k</option>
                <option className="bg-slate-900">$50k - $100k</option>
                <option className="bg-slate-900">$100k+</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-emerald-200/80">Project Goals</label>
              <textarea rows={5} className="w-full bg-transparent border-b border-amber-400/60 focus:border-emerald-400 outline-none py-2" />
            </div>
            <div className="sm:col-span-2 flex gap-4">
              <button className="bg-red-700 hover:bg-red-600 px-6 py-3 rounded-md font-semibold">Submit</button>
              <a href="#" className="border border-emerald-400/30 px-6 py-3 rounded-md">Schedule a Strategy Call →</a>
            </div>
          </form>
        </section>
        <aside>
          <div className="p-6 rounded-xl border border-emerald-500/20 bg-white/5">
            <div className="text-amber-300 text-sm">Accepting 2 clients</div>
            <div className="mt-3 text-emerald-100/80">Office hours: Mon–Fri / 9am–6pm GMT</div>
            <div className="mt-6 h-48 rounded-lg bg-[radial-gradient(circle_at_30%_30%,#22c55e_2px,transparent_2px)] bg-[length:20px_20px] grid place-items-center text-emerald-200/70 text-sm">Afro-futuristic grid map</div>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  )
}
