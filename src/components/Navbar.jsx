import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { to: '/work', label: 'Work' },
  { to: '/approach', label: 'Approach' },
  { to: '/about', label: 'About' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
      scrolled ? 'bg-slate-950/90 backdrop-blur border-b border-emerald-500/10' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold tracking-wide text-ivory flex items-center gap-2">
          <span className="text-[18px] md:text-[20px] font-serif text-emerald-100">Emeno Afriq</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative text-sm uppercase tracking-wider text-emerald-100/80 hover:text-emerald-100 transition-colors`
              }
            >
              <span className="relative">
                {item.label}
                <span className="block absolute -bottom-1 left-0 h-[2px] bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </span>
              <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 bg-amber-400 transition-all duration-300 hover:w-full"></span>
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-emerald-100 hover:bg-white/5"
        >
          <Menu size={22} />
        </button>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-slate-950/95">
          {/* Kente-inspired weave animation */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="w-full h-full bg-[linear-gradient(45deg,#064e3b_12px,transparent_12px),linear-gradient(-45deg,#dc2626_12px,transparent_12px)] bg-[size:24px_24px] animate-[weave_6s_linear_infinite]" />
          </div>
          <div className="relative h-full flex flex-col">
            <div className="h-16 flex items-center justify-between px-4">
              <Link to="/" onClick={() => setOpen(false)} className="text-emerald-100 font-semibold">Emeno Afriq</Link>
              <button onClick={() => setOpen(false)} className="text-emerald-100 w-10 h-10 inline-flex items-center justify-center">
                <X />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-serif text-emerald-50 hover:text-amber-300 transition-colors"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
      <style>{`
        @keyframes weave { to { background-position: 24px 24px, -24px -24px; } }
      `}</style>
    </header>
  )
}
