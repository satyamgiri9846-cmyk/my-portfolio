function Projects() {
  const projects = [
    { title: "Project One", description: "Short description of what this project does." },
    { title: "Project Two", description: "Short description of what this project does." },
  ];

  return (
    <section style={{ padding: "2rem 1rem" }}>
      <h2>Projects</h2>
      {projects.map((p, i) => (
        <div key={i} style={{ marginBottom: "1rem" }}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
