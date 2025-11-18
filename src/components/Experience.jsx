import { motion } from 'framer-motion'

export default function Experience() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  }
  const item = {
    hidden: { y: 16, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(59,130,246,0.10),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
        >
          Experience
        </motion.h2>
        <p className="mt-3 text-blue-100/80 max-w-2xl">A snapshot of roles where strategy and analytics created measurable outcomes.</p>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-10 grid md:grid-cols-2 gap-6">
          {[
            { c: 'Rupali Bank', r: 'Operations Optimization', d: 'Optimized operational workflows and assisted data-driven decision-making to enhance efficiency in banking operations.' },
            { c: 'Edulife', r: 'IT Team Leadership', d: 'Led cross-functional technology initiatives and reduced manual reporting through automation and better data pipelines.' },
            { c: 'Kajkori', r: 'Cross-functional Collaboration', d: 'Facilitated collaboration across product and operations to drive insights and measurable outcomes.' },
          ].map((x, i) => (
            <motion.div key={x.c} variants={item} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-semibold text-white">{x.c}</h3>
              <p className="text-blue-200/80">{x.r}</p>
              <p className="mt-3 text-blue-100/80">{x.d}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
