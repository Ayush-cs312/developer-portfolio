import Section from './Section.jsx'

export default function About({ paragraphs }) {
  return (
    <Section id="about" title="About me">
      <div className="prose">
        {paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </Section>
  )
}
