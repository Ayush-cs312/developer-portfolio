import { useState, useEffect } from 'react'
import { profile, links, about, skills, projects } from './data.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  // Theme is a data attribute on <html>; CSS variables do the rest.
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <Navbar
        links={links}
        name={profile.name}
        github={profile.github}
        theme={theme}
        onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      <main>
        <Hero name={profile.name} tagline={profile.tagline} />
        <About paragraphs={about} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact email={profile.email} github={profile.github} linkedin={profile.linkedin} />
        <footer className="footer">
          <p>Built by {profile.name} — React portfolio.</p>
        </footer>
      </main>
    </>
  )
}
