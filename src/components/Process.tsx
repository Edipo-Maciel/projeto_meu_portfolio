import { process } from '../data/content'
import { Reveal } from './Reveal'
import './Process.css'

export function Process() {
  return (
    <section id={process.id} className="section process" aria-labelledby="process-title">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">Método</p>
          <h2 id="process-title" className="section__title">
            {process.title}
          </h2>
          <p className="section__lead">{process.intro}</p>
        </Reveal>

        <ol className="process__steps">
          {process.steps.map((step, index) => (
            <Reveal as="li" key={step.number} className="process__step" delayMs={index * 80}>
              <span className="process__number" aria-hidden="true">
                {step.number}
              </span>
              <div>
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-text">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
