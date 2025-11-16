import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('Message sent! I will get back to you soon.')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900">Get in touch</h2>
        <p className="text-center text-gray-600 mt-2">Have a project or just want to say hi? Drop a message.</p>
        <form onSubmit={handleSubmit} className="mt-8 grid md:grid-cols-2 gap-5 bg-white p-6 rounded-2xl shadow">
          <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="border rounded-lg px-4 py-3 w-full" />
          <input name="email" value={form.email} onChange={handleChange} required placeholder="Email address" className="border rounded-lg px-4 py-3 w-full" />
          <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="border rounded-lg px-4 py-3 w-full md:col-span-2" />
          <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Message" rows="5" className="border rounded-lg px-4 py-3 w-full md:col-span-2" />
          <button type="submit" className="md:col-span-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition">Send</button>
          {status && <p className="md:col-span-2 text-center text-sm text-gray-700">{status}</p>}
        </form>
      </div>
    </section>
  )
}
