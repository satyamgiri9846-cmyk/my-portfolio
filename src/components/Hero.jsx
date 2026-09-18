import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <span>Welcome to my portfolio</span>
      <h1>Hi, I'm <span>Satyam Giri</span></h1>
      <p>
        Frontend Developer Intern building clean, modern web experiences
        with React and JavaScript.
      </p>
      <div className="hero-buttons">
        <a href="#projects" className="btn btn-primary">View Projects</a>
        <a href="#contact" className="btn btn-secondary">Contact Me</a>
      </div>
    </section>
  );
}

export default Hero;