import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  caseCategories,
  caseStudy,
  site,
  type ShotCategory,
} from '../data/content'
import { BrowserFrame } from '../components/BrowserFrame'
import { WhatsAppButton } from '../components/WhatsAppButton'
import './CaseDetailPage.css'

type Shot = (typeof caseStudy.shots)[number]

export function CaseDetailPage() {
  const [active, setActive] = useState<ShotCategory | 'all'>('all')
  const [lightbox, setLightbox] = useState<Shot | null>(null)
  const tablistId = useId()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filtered = useMemo(() => {
    if (active === 'all' || active === 'geral') {
      return caseStudy.shots
    }
    return caseStudy.shots.filter((shot) => shot.category === active)
  }, [active])

  return (
    <div className="case-detail">
      <header className="case-detail__top">
        <div className="container case-detail__top-inner">
          <Link to="/" className="case-detail__brand">
            <img
              src="/brand/logo-header-light.png"
              alt={site.brand}
              width={160}
              height={48}
            />
          </Link>
          <Link to="/#case" className="case-detail__back">
            ← Voltar ao site
          </Link>
        </div>
      </header>

      <main className="case-detail__main">
        <div className="container">
          <p className="section__eyebrow case-detail__eyebrow">{caseStudy.eyebrow}</p>
          <h1 className="case-detail__title">{caseStudy.title}</h1>

          <div className="case-detail__grid">
            <div className="case-detail__block">
              <h2>{caseStudy.challenge.title}</h2>
              <p>{caseStudy.challenge.text}</p>
            </div>
            <div className="case-detail__block">
              <h2>{caseStudy.solution.title}</h2>
              <p>{caseStudy.solution.text}</p>
            </div>
          </div>

          <div className="case-detail__results">
            <h2>{caseStudy.results.title}</h2>
            <ul>
              {caseStudy.results.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="case-detail__gallery-wrap">
            <h2 className="case-detail__gallery-title">Telas do sistema</h2>
            <div
              className="case-detail__tabs"
              role="tablist"
              aria-label="Filtrar telas do sistema"
              id={tablistId}
            >
              <TabButton
                selected={active === 'all'}
                onClick={() => setActive('all')}
                controls="case-detail-gallery"
              >
                Todas
              </TabButton>
              {caseCategories
                .filter((cat) => cat.id !== 'geral')
                .map((cat) => (
                  <TabButton
                    key={cat.id}
                    selected={active === cat.id}
                    onClick={() => setActive(cat.id)}
                    controls="case-detail-gallery"
                  >
                    {cat.label}
                  </TabButton>
                ))}
            </div>

            <div id="case-detail-gallery" className="case-detail__gallery" role="tabpanel">
              {filtered.map((shot) => (
                <button
                  key={shot.src}
                  type="button"
                  className="case-detail__shot"
                  onClick={() => setLightbox(shot)}
                  aria-label={`Ampliar: ${shot.label}`}
                >
                  <BrowserFrame url="app.macielsistemas.com.br">
                    <img src={shot.src} alt={shot.alt} loading="lazy" width={960} height={600} />
                  </BrowserFrame>
                  <span className="case-detail__shot-label">{shot.label}</span>
                </button>
              ))}
            </div>
          </div>

          <p className="case-detail__tech">Tecnologias: {caseStudy.tech.join(' + ')}</p>

          <div className="case-detail__cta">
            <p>Quer um sistema sob medida para a sua operação?</p>
            <WhatsAppButton label="Chamar no WhatsApp" variant="whatsapp" />
          </div>
        </div>
      </main>

      {lightbox ? <Lightbox shot={lightbox} onClose={() => setLightbox(null)} /> : null}
    </div>
  )
}

function TabButton({
  selected,
  onClick,
  controls,
  children,
}: {
  selected: boolean
  onClick: () => void
  controls: string
  children: string
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      aria-controls={controls}
      className={`case-detail__tab ${selected ? 'is-active' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

function Lightbox({ shot, onClose }: { shot: Shot; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previous?.focus()
    }
  }, [onClose])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={shot.label}>
      <button type="button" className="lightbox__backdrop" aria-label="Fechar" onClick={onClose} />
      <div className="lightbox__panel">
        <div className="lightbox__bar">
          <p>{shot.label}</p>
          <button ref={closeRef} type="button" className="lightbox__close" onClick={onClose}>
            Fechar
          </button>
        </div>
        <img src={shot.src} alt={shot.alt} />
      </div>
    </div>
  )
}
