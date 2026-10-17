import Section from './Section.jsx'

export default function Skills({ skills }) {
  return (
    <Section id="skills" title="Skills">
      <div className="skills-grid">
        {skills.map(({ group, items }) => (
          <div className="skill-group" key={group}>
            <h3>{group}</h3>
            <ul className="chip-list">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
