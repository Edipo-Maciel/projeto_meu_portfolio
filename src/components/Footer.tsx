import { site } from '../data/content'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <img
            src="/brand/logo-header-light.png"
            alt={site.brand}
            className="footer__logo"
            width={160}
            height={48}
          />
          <p className="footer__meta">
            {site.owner} · {site.location}
          </p>
          <p className="footer__cnpj">CNPJ {site.cnpj}</p>
        </div>
        <div className="footer__right">
          <p className="footer__stack">{site.stack.join(' · ')}</p>
          <p className="footer__links">
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <span aria-hidden="true">·</span>
            <a href={site.emailUrl}>E-mail</a>
          </p>
          <p className="footer__copy">
            © {year} {site.brand}
          </p>
        </div>
      </div>
    </footer>
  )
}
