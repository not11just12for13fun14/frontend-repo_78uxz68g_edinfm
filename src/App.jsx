import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Ventures from './components/Ventures'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(147,197,253,0.08),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.06),transparent_40%)]" />

      {/* Floating sparkles background */}
      <motion.div
        className="pointer-events-none fixed inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {[...Array(18)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-blue-400/60"
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, -20 - (i % 5) * 8, 0],
            }}
            transition={{
              duration: 6 + (i % 5),
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
            style={{ left: `${(i * 7) % 100}%`, top: `${(i * 11) % 100}%` }}
          />
        ))}
      </motion.div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Ventures />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-blue-300/70">
        © {new Date().getFullYear()} Muhammad Ashraful Islam • Strategy × Analytics
      </footer>
    </div>
  )
}

export default App
