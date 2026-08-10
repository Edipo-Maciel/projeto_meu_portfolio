import { industries } from '../data/content'
import { Reveal } from './Reveal'
import './Industries.css'

export function Industries() {
  return (
    <section id={industries.id} className="section industries" aria-labelledby="industries-title">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">{industries.eyebrow}</p>
          <h2 id="industries-title" className="section__title">
            {industries.title}
          </h2>
          <p className="section__lead">{industries.lead}</p>
        </Reveal>

        <ul className="industries__grid">
          {industries.items.map((item, index) => (
            <Reveal as="li" key={item.title} className="industries__item" delayMs={index * 80}>
              <figure className="industries__figure">
                <img src={item.image} alt={item.alt} loading="lazy" width={800} height={600} />
              </figure>
              <div className="industries__copy">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delayMs={120}>
          <p className="industries__note">{industries.note}</p>
        </Reveal>
      </div>
    </section>
  )
}
