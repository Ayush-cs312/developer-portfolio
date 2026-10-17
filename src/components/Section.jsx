// Shared wrapper so every section gets the same id, heading and spacing.
export default function Section({ id, title, children }) {
  return (
    <section className="block" id={id}>
      <header className="block-head">
        <h2>{title}</h2>
      </header>
      {children}
    </section>
  )
}
