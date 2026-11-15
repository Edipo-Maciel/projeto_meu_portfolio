import { audience } from '../data/content'
import { Reveal } from './Reveal'
import './Audience.css'

export function Audience() {
  const accent = audience.titleAccent
  const base = audience.title.replace(accent, '').trimEnd()

  return (
    <section id={audience.id} className="section audience" aria-labelledby="audience-title">
      <div className="container audience__layout">
        <Reveal>
          <p className="section__eyebrow">{audience.eyebrow}</p>
          <h2 id="audience-title" className="section__title">
            {base}{' '}
            <span className="section__title-accent">{accent}</span>
          </h2>
        </Reveal>
        <Reveal delayMs={80}>
          <p className="audience__text">{audience.text}</p>
        </Reveal>
      </div>
    </section>
  )
}
