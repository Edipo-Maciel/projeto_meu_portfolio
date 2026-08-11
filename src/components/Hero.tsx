import { useEffect, useRef, useState, type TouchEvent, type TransitionEvent } from 'react'
import { hero, heroCarousel, site } from '../data/content'
import { BrowserFrame } from './BrowserFrame'
import { WhatsAppButton } from './WhatsAppButton'
import './Hero.css'

const AUTOPLAY_MS = 8000
const TRANSITION_MS = 1100

type StorySlide = Extract<(typeof heroCarousel.slides)[number], { type: 'story' }>
type Slide = (typeof heroCarousel.slides)[number]

export function Hero() {
  const slides = heroCarousel.slides
  const total = slides.length
  // Track: [clone último] + slides reais + [clone primeiro] → posição inicia em 1
  const [position, setPosition] = useState(1)
  const [viewportWidth, setViewportWidth] = useState(0)
  const [animate, setAnimate] = useState(true)
  const viewportRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)
  const positionRef = useRef(1)

  const trackSlides: Slide[] = [slides[total - 1], ...slides, slides[0]]
  const realIndex = ((position - 1) % total + total) % total

  positionRef.current = position

  // #region agent log
  useEffect(() => {
    const slidesEls = Array.from(document.querySelectorAll('.hero__slide')) as HTMLElement[]
    const slide = document.querySelector('.hero__slide.is-active') as HTMLElement | null
    const layout = document.querySelector('.hero__slide.is-active .hero__layout') as HTMLElement | null
    const visual = document.querySelector('.hero__slide.is-active .hero__visual') as HTMLElement | null
    const frameImg = document.querySelector('.hero__slide.is-active .hero__frame img') as HTMLImageElement | null
    const storyImgs = Array.from(
      document.querySelectorAll('.hero__slide.is-active .hero__shot img'),
    ) as HTMLImageElement[]
    const payload = {
      sessionId: 'd7aba3',
      runId: 'post-fix-3',
      hypothesisId: 'unequal-slide-heights',
      location: 'Hero.tsx:measure',
      message: 'compare all slide heights',
      data: {
        href: window.location.href,
        viewportW: window.innerWidth,
        position,
        realIndex,
        activeSlideH: slide?.clientHeight ?? null,
        activeLayoutH: layout?.clientHeight ?? null,
        activeVisualH: visual?.clientHeight ?? null,
        visualCssH: visual ? getComputedStyle(visual).height : null,
        allSlideHeights: slidesEls.map((el, i) => ({
          i,
          h: el.clientHeight,
          layoutH: el.querySelector('.hero__layout')?.clientHeight ?? null,
          visualH: el.querySelector('.hero__visual')?.clientHeight ?? null,
        })),
        heightSpread: (() => {
          const hs = slidesEls.map((el) => el.clientHeight)
          return hs.length ? Math.max(...hs) - Math.min(...hs) : null
        })(),
        frameImgH: frameImg?.clientHeight ?? null,
        storyImgHs: storyImgs.map((img) => img.clientHeight),
      },
      timestamp: Date.now(),
    }
    fetch('http://127.0.0.1:7857/ingest/36abb7c0-a11a-496e-a893-76467676721f', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': 'd7aba3' },
      body: JSON.stringify(payload),
    }).catch(() => {})
  }, [position, viewportWidth, realIndex])
  // #endregion

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const measure = () => setViewportWidth(viewport.clientWidth)
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(viewport)
    return () => observer.disconnect()
  }, [])

  const jumpTo = (next: number) => {
    setAnimate(false)
    setPosition(next)
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setAnimate(true))
    })
  }

  const goNext = () => {
    setAnimate(true)
    setPosition((current) => current + 1)
  }

  const goPrev = () => {
    setAnimate(true)
    setPosition((current) => current - 1)
  }

  const goToReal = (target: number) => {
    const normalized = ((target % total) + total) % total
    setAnimate(true)
    setPosition(normalized + 1)
  }

  useEffect(() => {
    if (viewportWidth <= 0) return

    const timer = window.setInterval(() => {
      if (document.hidden) return
      const current = positionRef.current
      // Não avançar no meio do loop (clones)
      if (current <= 0 || current >= total + 1) return
      goNext()
    }, AUTOPLAY_MS)

    return () => window.clearInterval(timer)
  }, [viewportWidth, total])

  const onTrackTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.propertyName !== 'transform') return
    const current = positionRef.current
    if (current === total + 1) {
      jumpTo(1)
      return
    }
    if (current === 0) {
      jumpTo(total)
    }
  }

  const onTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null
  }

  const onTouchEnd = (event: TouchEvent) => {
    if (touchStartX.current == null) return
    const delta = (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current
    touchStartX.current = null
    if (Math.abs(delta) < 40) return
    if (delta < 0) goNext()
    else goPrev()
  }

  return (
    <section
      id="topo"
      className="hero"
      aria-roledescription="carrossel"
      aria-label="Apresentação e histórias de ramos"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="hero__bg" aria-hidden="true" />

      <div className="container hero__carousel">
        <div className="hero__viewport" ref={viewportRef}>
          <div
            className={`hero__track ${animate ? '' : 'is-instant'}`.trim()}
            style={{
              transform: `translate3d(-${viewportWidth * position}px, 0, 0)`,
              transitionDuration: animate ? `${TRANSITION_MS}ms` : '0ms',
            }}
            onTransitionEnd={onTrackTransitionEnd}
          >
            {trackSlides.map((item, i) => (
              <div
                key={`${item.id}-${i}`}
                className={`hero__slide ${i === position ? 'is-active' : ''}`}
                aria-hidden={i !== position}
              >
                {item.type === 'product' ? (
                  <ProductSlide />
                ) : (
                  <StorySlideView slide={item} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="hero__controls">
          <button
            type="button"
            className="hero__arrow"
            aria-label="Slide anterior"
            onClick={goPrev}
          >
            ‹
          </button>

          <div className="hero__dots" role="tablist" aria-label="Slides do hero">
            {slides.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={i === realIndex}
                aria-label={`Ir para slide ${i + 1}`}
                className={`hero__dot ${i === realIndex ? 'is-active' : ''}`}
                onClick={() => goToReal(i)}
              />
            ))}
          </div>

          <button
            type="button"
            className="hero__arrow"
            aria-label="Próximo slide"
            onClick={goNext}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}

function ProductSlide() {
  return (
    <div className="hero__layout">
      <div className="hero__copy">
        <h1 className="hero__headline">{hero.headline}</h1>
        <p className="hero__support">
          Você não precisa de um software pronto e que não resolve seu problema,
          você precisa de um sistema para resolver o{' '}
          <strong className="hero__emphasis">SEU PROBLEMA REAL!</strong>
        </p>
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
  )
}

function StorySlideView({ slide }: { slide: StorySlide }) {
  return (
    <div className="hero__layout">
      <div className="hero__copy">
        <h2 className="hero__headline hero__headline--story">{slide.headline}</h2>
        <p className="hero__support">{slide.support}</p>
        <div className="hero__cta">
          <WhatsAppButton label={hero.ctaPrimary} variant="primary" />
          <a className="btn btn--ghost" href={site.emailUrl}>
            {hero.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero__compare">
          <figure className="hero__shot">
            <span className="hero__badge hero__badge--before">{slide.before.label}</span>
            <img
              src={slide.before.src}
              alt={slide.before.alt}
              width={900}
              height={675}
              decoding="async"
            />
            <figcaption>{slide.before.caption}</figcaption>
          </figure>

          <figure className="hero__shot">
            <span className="hero__badge hero__badge--after">{slide.after.label}</span>
            <img
              src={slide.after.src}
              alt={slide.after.alt}
              width={900}
              height={675}
              decoding="async"
            />
            <figcaption>{slide.after.caption}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  )
}
