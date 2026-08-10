import { capabilities } from '../data/content'
import { Reveal } from './Reveal'
import './Capabilities.css'

export function Capabilities() {
  return (
    <section
      id={capabilities.id}
      className="section capabilities"
      aria-labelledby="capabilities-title"
    >
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">Capacidades</p>
          <h2 id="capabilities-title" className="section__title">
            {capabilities.title}
          </h2>
          <p className="section__lead">{capabilities.lead}</p>
        </Reveal>

        <ul className="capabilities__list">
          {capabilities.items.map((item, index) => (
            <Reveal as="li" key={item.title} className="capabilities__item" delayMs={index * 70}>
              <span className="capabilities__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="capabilities__title">{item.title}</h3>
                <p className="capabilities__text">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
