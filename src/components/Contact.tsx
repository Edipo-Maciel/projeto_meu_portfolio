import { contact, site } from '../data/content'
import { Reveal } from './Reveal'
import { WhatsAppButton } from './WhatsAppButton'
import './Contact.css'

export function Contact() {
  return (
    <section id={contact.id} className="section contact" aria-labelledby="contact-title">
      <div className="container contact__panel">
        <Reveal>
          <p className="section__eyebrow">Contato</p>
          <h2 id="contact-title" className="section__title">
            {contact.title}
          </h2>
          <p className="section__lead">{contact.text}</p>
          <div className="contact__actions">
            <WhatsAppButton label={contact.cta} variant="whatsapp" />
            <a className="btn btn--ghost" href={site.emailUrl}>
              Enviar e-mail
            </a>
          </div>
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
        </Reveal>
      </div>
    </section>
  )
}
