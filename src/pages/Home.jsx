import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-emerald-50">
      <Navbar />
      <Hero />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="py-24">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="col-span-2">
              <h2 className="text-2xl font-serif mb-3">Essence</h2>
              <p className="text-emerald-100/80">African futurism meets psychological design.</p>
            </div>
            <div>
              <h2 className="text-2xl font-serif mb-3">Promise</h2>
              <p className="text-emerald-100/80">Crafting digital identities rooted in culture engineered for influence.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
