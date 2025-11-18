import { motion } from 'framer-motion'

export default function Ventures() {
  const cards = [
    { t: 'Strategy Lab', s: 'Decoding business success', d: 'A platform focused on applying analytical frameworks and research to understand what drives sustainable business performance.' },
    { t: 'Bazar Theke', s: 'Hyperlocal commerce', d: 'Community-first, hyperlocal startup enabling accessible and efficient local commerce.' },
  ]

  return (
    <section id="ventures" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(59,130,246,0.10),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
        >
          Ventures
        </motion.h2>
        <p className="mt-3 text-blue-100/80 max-w-2xl">Entrepreneurial initiatives focused on solving real-world problems with data and strategy.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <TiltCard key={c.t} i={i} title={c.t} subtitle={c.s} desc={c.d} />)
          )}
        </div>
      </div>
    </section>
  )
}

function TiltCard({ title, subtitle, desc, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: 0.08 * i }}
      whileHover={{ y: -4 }}
      className="group relative rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-1 opacity-0 transition-opacity group-hover:opacity-100"
        initial={false}
        animate={{}}
      >
        <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-blue-500/15 blur-3xl" />
      </motion.div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-blue-200/80">{subtitle}</p>
      <p className="mt-3 text-blue-100/80">{desc}</p>
    </motion.div>
  )
}
