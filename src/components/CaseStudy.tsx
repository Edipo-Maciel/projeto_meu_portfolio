import { Link } from 'react-router-dom'
import { caseStudy } from '../data/content'
import { BrowserFrame } from './BrowserFrame'
import { Reveal } from './Reveal'
import './CaseStudy.css'

export function CaseStudy() {
  return (
    <section id={caseStudy.id} className="section case" aria-labelledby="case-title">
      <div className="container case__teaser">
        <div className="case__teaser-copy">
          <Reveal>
            <p className="section__eyebrow case__eyebrow">{caseStudy.eyebrow}</p>
            <h2 id="case-title" className="section__title case__title">
              {caseStudy.title}
            </h2>
            <p className="case__teaser-text">{caseStudy.teaser}</p>
            <Link to="/case" className="btn btn--primary case__teaser-cta">
              {caseStudy.ctaDetail}
            </Link>
          </Reveal>
        </div>

        <Reveal className="case__teaser-visual" delayMs={80}>
          <BrowserFrame url="app.macielsistemas.com.br">
            <img
              src={caseStudy.coverSrc}
              alt={caseStudy.coverAlt}
              width={1280}
              height={800}
              loading="lazy"
            />
          </BrowserFrame>
        </Reveal>
      </div>
    </section>
  )
}
