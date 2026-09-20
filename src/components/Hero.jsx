import "./Hero.css";

function Hero({ badge, headline1, headline2, tagline, primaryBtn, secondaryBtn }) {
  return (
    <section className="hero">
      <span className="hero-badge">{badge}</span>
      <h1>
        {headline1}<br />
        <span>{headline2}</span>
      </h1>
      <p>{tagline}</p>
      <div className="hero-buttons">
        <a href={primaryBtn.href} className="btn btn-primary">{primaryBtn.label}</a>
        <a href={secondaryBtn.href} className="btn btn-secondary">{secondaryBtn.label}</a>
      </div>
    </section>
  );
}

export default Hero;