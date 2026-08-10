import { useEffect, useRef, useState, type TouchEvent } from 'react'
import { storyBanner } from '../data/content'
import { WhatsAppButton } from './WhatsAppButton'
import './StoryBanner.css'

const AUTOPLAY_MS = 7000

export function StoryBanner() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const slides = storyBanner.slides
  const slide = slides[index]

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || paused) return

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, AUTOPLAY_MS)

    return () => window.clearInterval(timer)
  }, [paused, slides.length])

  const goTo = (next: number) => {
    const total = slides.length
    setIndex(((next % total) + total) % total)
  }

  const onTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null
  }

  const onTouchEnd = (event: TouchEvent) => {
    if (touchStartX.current == null) return
    const delta = (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current
    touchStartX.current = null
    if (Math.abs(delta) < 40) return
    goTo(index + (delta < 0 ? 1 : -1))
  }

  return (
    <section
      id={storyBanner.id}
      className="section story-banner"
      aria-roledescription="carrossel"
      aria-label="Histórias antes e depois"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false)
        }
      }}
    >
      <div className="container">
        <div className="story-banner__intro">
          <p className="section__eyebrow">{storyBanner.eyebrow}</p>
          <h2 className="section__title">{storyBanner.title}</h2>
        </div>

        <div
          className="story-banner__panel"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="story-banner__copy">
            <h3 className="story-banner__headline">{slide.headline}</h3>
            <p className="story-banner__support">{slide.support}</p>
          </div>

          <div className="story-banner__compare" key={slide.id}>
            <figure className="story-banner__shot">
              <span className="story-banner__badge story-banner__badge--before">
                {slide.before.label}
              </span>
              <img
                src={slide.before.src}
                alt={slide.before.alt}
                width={900}
                height={675}
                loading="lazy"
              />
              <figcaption>{slide.before.caption}</figcaption>
            </figure>

            <figure className="story-banner__shot">
              <span className="story-banner__badge story-banner__badge--after">
                {slide.after.label}
              </span>
              <img
                src={slide.after.src}
                alt={slide.after.alt}
                width={900}
                height={675}
                loading="lazy"
              />
              <figcaption>{slide.after.caption}</figcaption>
            </figure>
          </div>

          <div className="story-banner__controls">
            <button
              type="button"
              className="story-banner__arrow"
              aria-label="Slide anterior"
              onClick={() => goTo(index - 1)}
            >
              ‹
            </button>

            <div className="story-banner__dots" role="tablist" aria-label="Slides">
              {slides.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Ir para slide ${i + 1}`}
                  className={`story-banner__dot ${i === index ? 'is-active' : ''}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>

            <button
              type="button"
              className="story-banner__arrow"
              aria-label="Próximo slide"
              onClick={() => goTo(index + 1)}
            >
              ›
            </button>
          </div>
        </div>

        <div className="story-banner__footer">
          <p>{storyBanner.footer}</p>
          <WhatsAppButton label={storyBanner.cta} variant="primary" />
        </div>
      </div>
    </section>
  )
}
