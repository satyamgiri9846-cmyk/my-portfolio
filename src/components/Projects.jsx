import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "This Portfolio",
      description: "The site you're looking at right now — built with React, deployed via Cloudflare Pages.",
      link: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <span className="section-label">My Work</span>
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <a href={p.link} target="_blank" rel="noreferrer">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;