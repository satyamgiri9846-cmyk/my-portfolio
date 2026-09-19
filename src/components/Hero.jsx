import "./Hero.css";

function Hero({ greeting, name, tagline, primaryBtn, secondaryBtn }) {
  return (
    <section className="hero">
      <span>{greeting}</span>
      <h1>Hi, I'm <span>{name}</span></h1>
      <p>{tagline}</p>
      <div className="hero-buttons">
        <a href={primaryBtn.href} className="btn btn-primary">{primaryBtn.label}</a>
        <a href={secondaryBtn.href} className="btn btn-secondary">{secondaryBtn.label}</a>
      </div>
    </section>
  );
}

export default Hero;