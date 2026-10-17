import { useState, useEffect } from 'react'

export default function Navbar({ links, name, github, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(links[0].id)

  // Highlight the link of the section currently in view.
  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + window.innerHeight * 0.3
      let current = links[0].id
      links.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= pos) current = id
      })
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [links])

  return (
    <nav className={`rail${open ? ' open' : ''}`} aria-label="Section navigation">
      <div className="rail-top">
        <div className="rail-brand">
          {name}
          <span className="cursor" aria-hidden="true">_</span>
        </div>
        <div className="rail-actions">
          <button
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <button
            className="icon-btn nav-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <ul className="rail-list">
        {links.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`rail-link${active === id ? ' active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="rail-foot">
        <a href={github} target="_blank" rel="noopener noreferrer">
          {github.replace('https://', '')}
        </a>
      </div>
    </nav>
  )
}
