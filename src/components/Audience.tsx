import { audience } from '../data/content'
import { Reveal } from './Reveal'
import './Audience.css'

export function Audience() {
  return (
    <section id={audience.id} className="section audience" aria-labelledby="audience-title">
      <div className="container audience__layout">
        <Reveal>
          <p className="section__eyebrow">Para quem é</p>
          <h2 id="audience-title" className="section__title">
            {audience.title}
          </h2>
        </Reveal>
        <Reveal delayMs={80}>
          <p className="audience__text">{audience.text}</p>
        </Reveal>
      </div>
    </section>
  )
}
