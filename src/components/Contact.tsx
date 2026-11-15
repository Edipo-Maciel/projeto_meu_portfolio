import { useState, type FormEvent } from 'react'
import { contact, site } from '../data/content'
import { buildContactWhatsAppMessage, buildWhatsAppUrl } from '../lib/whatsapp'
import { Reveal } from './Reveal'
import './Contact.css'

type FormState = {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
}

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const message = buildContactWhatsAppMessage(form)
    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id={contact.id} className="section contact" aria-labelledby="contact-title">
      <div className="container contact__intro">
        <Reveal>
          <p className="section__eyebrow">{contact.eyebrow}</p>
          <h2 id="contact-title" className="section__title contact__title">
            {contact.title}{' '}
            <span className="section__title-accent">{contact.titleAccent}</span>
          </h2>
          <p className="section__lead contact__lead">{contact.text}</p>
        </Reveal>
      </div>

      <div className="container">
        <Reveal delayMs={80}>
          <form className="contact__form" onSubmit={onSubmit} noValidate={false}>
            <div className="contact__grid">
              <label className="contact__field">
                <span>Nome completo *</span>
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                />
              </label>

              <label className="contact__field">
                <span>E-mail *</span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                />
              </label>

              <label className="contact__field">
                <span>WhatsApp</span>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="(92) 99999-9999"
                  value={form.phone}
                  onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                />
              </label>

              <label className="contact__field">
                <span>Empresa</span>
                <input
                  type="text"
                  name="company"
                  autoComplete="organization"
                  placeholder="Nome da empresa"
                  value={form.company}
                  onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
                />
              </label>
            </div>

            <label className="contact__field contact__field--full">
              <span>Como posso ajudar? *</span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Conte sobre a operação e o que você quer automatizar..."
                value={form.message}
                onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
              />
            </label>

            <div className="contact__submit-row">
              <button type="submit" className="btn btn--primary">
                {contact.cta}
              </button>
              <p className="contact__microcopy">{contact.microcopy}</p>
            </div>
          </form>
        </Reveal>

        <ul className="contact__details">
          <li>
            <span>WhatsApp</span>
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
              {site.phoneDisplay}
            </a>
          </li>
          <li>
            <span>E-mail</span>
            <a href={site.emailUrl}>{site.email}</a>
          </li>
          <li>
            <span>Atendimento</span>
            <p>{site.location}</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
