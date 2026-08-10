import { hero, site } from '../data/content'
import { BrowserFrame } from './BrowserFrame'
import { WhatsAppButton } from './WhatsAppButton'
import './Hero.css'

export function Hero() {
  return (
    <section id="topo" className="hero" aria-labelledby="hero-brand">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__layout">
        <div className="hero__copy">
          <p id="hero-brand" className="hero__brand">
            <img
              src="/brand/logo-header-light.png"
              alt={hero.brand}
              className="hero__logo"
              width={280}
              height={84}
            />
          </p>
          <h1 className="hero__headline">{hero.headline}</h1>
          <p className="hero__support">{hero.support}</p>
          <div className="hero__cta">
            <WhatsAppButton label={hero.ctaPrimary} variant="primary" />
            <a className="btn btn--ghost" href={site.emailUrl}>
              {hero.ctaSecondary}
            </a>
          </div>
          <p className="hero__location">{hero.location}</p>
        </div>

        <div className="hero__visual">
          <BrowserFrame className="hero__frame" url="app.macielsistemas.com.br">
            <img
              src={hero.mockupSrc}
              alt={hero.mockupAlt}
              width={1280}
              height={800}
              fetchPriority="high"
            />
          </BrowserFrame>
        </div>
      </div>
    </section>
  )
}
