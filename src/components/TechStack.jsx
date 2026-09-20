import "./TechStack.css";
import Reveal from "./Reveal";

function TechStack({ techs }) {
  return (
    <section className="techstack" id="techstack">
      <Reveal>
        <span className="section-label">What I Use</span>
        <h2>Tech Stack</h2>
      </Reveal>
      <div className="tech-grid">
        {techs.map((tech, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="tech-card">
              <span className="tech-icon">{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default TechStack;