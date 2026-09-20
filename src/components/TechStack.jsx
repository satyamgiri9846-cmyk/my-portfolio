import "./TechStack.css";

function TechStack({ techs }) {
  return (
    <section className="techstack" id="techstack">
      <span className="section-label">What I Use</span>
      <h2>Tech Stack</h2>
      <div className="tech-grid">
        {techs.map((tech, i) => (
          <div className="tech-card" key={i}>
            <span className="tech-icon">{tech.icon}</span>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;