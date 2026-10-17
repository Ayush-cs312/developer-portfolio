import { useState } from 'react'
import Section from './Section.jsx'

const empty = { name: '', email: '', message: '' }

export default function Contact({ email, github, linkedin }) {
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState('')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('Please fill in every field.')
      return
    }
    // ponytail: no backend, so the form opens the visitor's email app, prefilled.
    // Swap for Formspree/EmailJS if you want in-page sending.
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
    setStatus('Opening your email app…')
    setForm(empty)
  }

  const channels = [
    { label: 'email', href: `mailto:${email}`, text: email },
    { label: 'github', href: github, text: github.replace('https://', '') },
    { label: 'linkedin', href: linkedin, text: linkedin.replace('https://', '') },
  ]

  return (
    <Section id="contact" title="Get in touch">
      <div className="contact-wrap">
        <div className="prose">
          <p>
            Have a project, an internship lead, or just want to talk about something I built?
            Use the form or reach me directly below.
          </p>
          <ul className="contact-links">
            {channels.map(({ label, href, text }) => (
              <li key={label}>
                <span>{label}</span>
                <a href={href} target={label === 'email' ? undefined : '_blank'} rel="noopener noreferrer">
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" value={form.name} onChange={onChange} autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={onChange} autoComplete="email" required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" value={form.message} onChange={onChange} required />
          </div>
          <button type="submit">Send message</button>
          <p className="form-status" role="status" aria-live="polite">{status}</p>
        </form>
      </div>
    </Section>
  )
}
