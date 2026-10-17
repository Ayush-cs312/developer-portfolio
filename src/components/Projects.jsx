import { useState } from 'react'
import Section from './Section.jsx'
import ProjectCard from './ProjectCard.jsx'

export default function Projects({ projects }) {
  const [filter, setFilter] = useState('All')

  // Filter buttons come from the data, so a new category appears automatically.
  const categories = ['All', ...new Set(projects.map((p) => p.category))]
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <Section id="projects" title="Projects">
      <div className="filters" role="group" aria-label="Filter projects">
        {categories.map((c) => (
          <button
            key={c}
            className={filter === c ? 'active' : ''}
            aria-pressed={filter === c}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="project-list">
        {shown.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </Section>
  )
}
