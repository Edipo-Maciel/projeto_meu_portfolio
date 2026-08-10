import { proofStrip } from '../data/content'
import './ProofStrip.css'

export function ProofStrip() {
  return (
    <section className="proof" aria-label="Destaques">
      <div className="container proof__inner">
        {proofStrip.map((item) => (
          <p key={item} className="proof__item">
            {item}
          </p>
        ))}
      </div>
    </section>
  )
}
