import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(500px_160px_at_50%_0%,rgba(59,130,246,0.10),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6 text-blue-100/90 leading-relaxed backdrop-blur-sm"
        >
          <p>
            I am Muhammad Ashraful Islam, a purpose-driven professional bridging the gap between organizational strategy and technical data analytics. Currently pursuing my MBA in Organization Strategy and Leadership at the University of Dhaka, I combine business acumen with advanced technical skills in SQL, Python, and Power BI.
          </p>
          <p className="mt-4">
            My experience spans from optimizing banking operations at Rupali Bank to leading cross-functional IT teams at Edulife and Kajkori, where I significantly reduced manual reporting efforts.
          </p>
          <p className="mt-4">
            Beyond corporate roles, I am an entrepreneur at heart—founding Strategy Lab to decode business success and launching the hyperlocal startup Bazar Theke. I am passionate about using data-driven insights to drive systemic change and solve complex organizational challenges.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
