import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Ventures from './components/Ventures'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(147,197,253,0.08),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.06),transparent_40%)]" />

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
