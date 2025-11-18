import { Menu } from "lucide-react"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/60 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-tight text-lg">
          Muhammad A. Islam
        </a>
        <div className="hidden sm:flex items-center gap-6 text-sm text-blue-100">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#ventures" className="hover:text-white transition-colors">Ventures</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <button className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-blue-100 hover:text-white hover:bg-white/5 transition-colors" aria-label="Open menu">
          <Menu size={20} />
        </button>
      </nav>
    </header>
  )
}
