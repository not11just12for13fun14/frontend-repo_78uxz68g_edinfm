import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4])

  return (
    <section id="home" ref={ref} className="relative pt-28 pb-20 sm:pt-32 sm:pb-28 overflow-hidden">
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.20),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(147,197,253,0.15),transparent_35%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div className="lg:col-span-7" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
            <motion.p className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10 text-blue-100 mb-5" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 }}>
              Strategy × Analytics × Leadership
            </motion.p>
            <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 }}>
              Muhammad Ashraful Islam
            </motion.h1>
            <motion.p className="mt-5 text-lg sm:text-xl leading-relaxed text-blue-100/90" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.22 }}>
              Purpose-driven professional bridging organizational strategy and technical data analytics. MBA candidate in Strategy & Leadership at the University of Dhaka with hands-on expertise in SQL, Python, and Power BI.
            </motion.p>
            <motion.p className="mt-4 text-blue-100/80" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.28 }}>
              From optimizing banking operations at Rupali Bank to leading cross-functional IT teams at Edulife and Kajkori, I focus on reducing manual reporting and enabling better decisions.
            </motion.p>
            <motion.div className="mt-8 flex flex-wrap gap-3" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.35 }}>
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors">
                Get in touch
              </a>
              <a href="#experience" className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-white/10 hover:bg-white/15 text-white font-medium transition-colors border border-white/10">
                View experience
              </a>
            </motion.div>
          </motion.div>
          <motion.div className="lg:col-span-5" style={{ y: y2 }}>
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6 overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"
              />
              <div className="grid grid-cols-2 gap-4 text-sm relative">
                <Card title="Technical" desc="SQL, Python, Power BI" delay={0.1} />
                <Card title="Business" desc="Strategy, Leadership" delay={0.18} />
                <Card title="Entrepreneur" desc="Strategy Lab, Bazar Theke" delay={0.26} />
                <Card title="Impact" desc="Reduced manual reporting" delay={0.34} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Card({ title, desc, delay }) {
  return (
    <motion.div
      initial={{ y: 12, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration: 0.5 }}
      className="rounded-lg bg-white/5 border border-white/10 p-4"
    >
      <p className="text-blue-200/80">{title}</p>
      <p className="mt-1 text-white font-semibold">{desc}</p>
    </motion.div>
  )
}
