export default function Hero({ name, tagline }) {
  return (
    <section className="hero">
      <h1>Hi, I'm {name}.</h1>
      <p className="hero-sub">{tagline}</p>
    </section>
  )
}
