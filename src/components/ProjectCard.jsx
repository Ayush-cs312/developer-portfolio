export default function ProjectCard({ title, category, description, stack }) {
  return (
    <article className="project">
      <div className="project-name">
        <h3>{title}</h3>
        <span className="project-meta">{category}</span>
      </div>
      <p>{description}</p>
      <ul className="stack">
        {stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </article>
  )
}
