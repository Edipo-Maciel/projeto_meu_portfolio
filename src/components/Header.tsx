import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks, site } from '../data/content'
import { asset } from '../lib/asset'
import './Header.css'

function resolveHref(href: string, pathname: string) {
  if (href.startsWith('#') && pathname !== '/') {
    return `/${href}`
  }
  return href
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)
  const contactHref = resolveHref('#contato', location.pathname)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`.trim()}>
      <div className="container header__inner">
        <Link className="header__brand" to="/#topo" onClick={close}>
          <img
            src={asset('/brand/logo-header.png')}
            alt={site.brand}
            className="header__logo"
            width={180}
            height={52}
          />
        </Link>

        <nav className="header__nav header__nav--desktop" aria-label="Principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={resolveHref(link.href, location.pathname)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header__actions">
          <Link to={contactHref} className="btn btn--primary header__cta">
            Fale agora →
          </Link>
          <button
            type="button"
            className={`header__menu-btn ${open ? 'is-open' : ''}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`header__drawer ${open ? 'is-open' : ''}`}
        hidden={!open}
      >
        <nav className="header__nav header__nav--mobile" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={resolveHref(link.href, location.pathname)}
              onClick={close}
            >
              {link.label}
            </Link>
          ))}
          <Link to={contactHref} className="btn btn--primary" onClick={close}>
            Fale agora →
          </Link>
        </nav>
      </div>
    </header>
  )
}
