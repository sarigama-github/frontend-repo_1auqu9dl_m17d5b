import { Mail, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative mt-24">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-950 to-emerald-950" />
      {/* Adinkra watermark */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden>
        <div className="w-full h-full bg-[radial-gradient(circle_at_20%_30%,#064e3b_1px,transparent_1px),radial-gradient(circle_at_80%_70%,#064e3b_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-emerald-50">
        <div>
          <div className="text-xl font-serif">Emeno Afriq</div>
          <p className="mt-3 text-emerald-100/70">African futurism meets psychological design.</p>
        </div>
        <div>
          <div className="text-sm uppercase tracking-widest text-emerald-200/60 mb-3">Quick Links</div>
          <ul className="space-y-2 text-emerald-100/80">
            <li><a href="/work" className="hover:text-amber-300">Work</a></li>
            <li><a href="/approach" className="hover:text-amber-300">Approach</a></li>
            <li><a href="/about" className="hover:text-amber-300">About</a></li>
            <li><a href="/insights" className="hover:text-amber-300">Insights</a></li>
            <li><a href="/contact" className="hover:text-amber-300">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm uppercase tracking-widest text-emerald-200/60 mb-3">Stay in the loop</div>
          <form className="flex gap-2">
            <input type="email" placeholder="Email address" className="flex-1 bg-transparent border-b border-amber-400/60 focus:outline-none focus:border-emerald-400 text-emerald-50 placeholder-emerald-200/50 py-2" />
            <button className="inline-flex items-center gap-2 bg-amber-400 text-slate-900 px-4 py-2 rounded-md font-semibold hover:brightness-110">Subscribe</button>
          </form>
          <div className="flex gap-4 mt-4 text-emerald-100/80">
            <a href="#" className="hover:text-amber-300"><Instagram size={20} /></a>
            <a href="#" className="hover:text-amber-300"><Twitter size={20} /></a>
            <a href="#" className="hover:text-amber-300"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-amber-300"><Mail size={20} /></a>
          </div>
        </div>
      </div>
      <div className="relative text-center text-xs text-emerald-100/50 py-4 border-t border-emerald-500/10">© {new Date().getFullYear()} Emeno Afriq. All rights reserved.</div>
    </footer>
  )
}
