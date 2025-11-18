export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Experience</h2>
        <p className="mt-3 text-blue-100/80 max-w-2xl">A snapshot of roles where strategy and analytics created measurable outcomes.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">Rupali Bank</h3>
            <p className="text-blue-200/80">Operations Optimization</p>
            <p className="mt-3 text-blue-100/80">Optimized operational workflows and assisted data-driven decision-making to enhance efficiency in banking operations.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">Edulife</h3>
            <p className="text-blue-200/80">IT Team Leadership</p>
            <p className="mt-3 text-blue-100/80">Led cross-functional technology initiatives and reduced manual reporting through automation and better data pipelines.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">Kajkori</h3>
            <p className="text-blue-200/80">Cross-functional Collaboration</p>
            <p className="mt-3 text-blue-100/80">Facilitated collaboration across product and operations to drive insights and measurable outcomes.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
