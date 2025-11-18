import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    const formData = Object.fromEntries(new FormData(e.currentTarget))

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('Thanks! I will get back to you soon.')
        e.currentTarget.reset()
      } else {
        setStatus('Something went wrong. Please try again later.')
      }
    } catch (err) {
      setStatus('Network error. Please try again later.')
    }
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Contact</h2>
            <p className="mt-3 text-blue-100/80 max-w-xl">Want to collaborate or discuss an idea? Drop a message and I’ll reach out.</p>
            {status && (
              <p className="mt-4 text-blue-200">{status}</p>
            )}
          </div>
          <form onSubmit={handleSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-blue-100 mb-1">Name</label>
                <input name="name" required className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-blue-100 mb-1">Email</label>
                <input name="email" type="email" required className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-blue-100 mb-1">Message</label>
                <textarea name="message" required rows={4} className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="How can I help?" />
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}
