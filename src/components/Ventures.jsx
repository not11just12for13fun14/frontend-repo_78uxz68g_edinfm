export default function Ventures() {
  return (
    <section id="ventures" className="relative py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Ventures</h2>
        <p className="mt-3 text-blue-100/80 max-w-2xl">Entrepreneurial initiatives focused on solving real-world problems with data and strategy.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">Strategy Lab</h3>
            <p className="text-blue-200/80">Decoding business success</p>
            <p className="mt-3 text-blue-100/80">A platform focused on applying analytical frameworks and research to understand what drives sustainable business performance.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">Bazar Theke</h3>
            <p className="text-blue-200/80">Hyperlocal commerce</p>
            <p className="mt-3 text-blue-100/80">Community-first, hyperlocal startup enabling accessible and efficient local commerce.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
