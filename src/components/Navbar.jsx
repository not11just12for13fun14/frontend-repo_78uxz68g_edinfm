import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#ventures', label: 'Ventures' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  const closeAndScroll = (e) => {
    setOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${scrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-slate-900/70 bg-slate-900/70 border-b border-white/10' : 'backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/40 border-b border-transparent'}`}>
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-tight text-lg">
          Muhammad A. Islam
        </a>
        <div className="hidden sm:flex items-center gap-6 text-sm text-blue-100">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <button
          className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-blue-100 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
          onClick={() => setOpen(v => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            className="sm:hidden overflow-hidden border-t border-white/10 bg-slate-900/80 backdrop-blur"
          >
            <div className="mx-auto max-w-6xl px-4 py-3 grid gap-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={closeAndScroll}
                  className="block w-full rounded-md px-3 py-2 text-blue-100 hover:text-white hover:bg-white/5"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.03 * i }}
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
