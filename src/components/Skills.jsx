export default function Skills() {
  const skills = [
    { group: "Data & Analytics", items: ["SQL", "Python", "Power BI", "Pandas", "ETL"] },
    { group: "Business & Strategy", items: ["Org Strategy", "Leadership", "Operations", "Problem Solving"] },
    { group: "Tools", items: ["Git", "Notion", "Jira", "Excel", "Slides"] },
  ]

  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Skills</h2>
        <p className="mt-3 text-blue-100/80 max-w-2xl">A blend of technical depth and strategic insight.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {skills.map((s) => (
            <div key={s.group} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">{s.group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span key={i} className="px-3 py-1 rounded-full text-sm bg-white/10 border border-white/10 text-blue-100/90">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
