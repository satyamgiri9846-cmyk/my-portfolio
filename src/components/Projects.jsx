import "./Projects.css";
import Reveal from "./Reveal";

function Projects({ projects }) {
  return (
    <section className="projects" id="projects">
      <Reveal>
        <span className="section-label">My Work</span>
        <h2>Projects</h2>
      </Reveal>
      <div className="project-grid">
        {projects.map((p, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="project-card">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <a href={p.link} target="_blank" rel="noreferrer">View Project →</a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Projects;