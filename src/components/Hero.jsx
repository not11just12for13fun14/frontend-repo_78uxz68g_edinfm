export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(147,197,253,0.12),transparent_35%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10 text-blue-100 mb-5">
              Strategy × Analytics × Leadership
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Muhammad Ashraful Islam
            </h1>
            <p className="mt-5 text-lg sm:text-xl leading-relaxed text-blue-100/90">
              Purpose-driven professional bridging organizational strategy and technical data analytics. MBA candidate in Strategy & Leadership at the University of Dhaka with hands-on expertise in SQL, Python, and Power BI.
            </p>
            <p className="mt-4 text-blue-100/80">
              From optimizing banking operations at Rupali Bank to leading cross-functional IT teams at Edulife and Kajkori, I focus on reducing manual reporting and enabling better decisions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors">
                Get in touch
              </a>
              <a href="#experience" className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-white/10 hover:bg-white/15 text-white font-medium transition-colors border border-white/10">
                View experience
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-lg bg-white/5 border border-white/10 p-4">
                  <p className="text-blue-200/80">Technical</p>
                  <p className="mt-1 text-white font-semibold">SQL, Python, Power BI</p>
                </div>
                <div className="rounded-lg bg-white/5 border border-white/10 p-4">
                  <p className="text-blue-200/80">Business</p>
                  <p className="mt-1 text-white font-semibold">Strategy, Leadership</p>
                </div>
                <div className="rounded-lg bg-white/5 border border-white/10 p-4">
                  <p className="text-blue-200/80">Entrepreneur</p>
                  <p className="mt-1 text-white font-semibold">Strategy Lab, Bazar Theke</p>
                </div>
                <div className="rounded-lg bg-white/5 border border-white/10 p-4">
                  <p className="text-blue-200/80">Impact</p>
                  <p className="mt-1 text-white font-semibold">Reduced manual reporting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
