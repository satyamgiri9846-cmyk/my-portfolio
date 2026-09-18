import "./About.css";

function About() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Tailwind"];

  return (
    <section className="about" id="about">
      <span className="section-label">About Me</span>
      <h2>A bit about who I am</h2>
      <p>
        [Write 2–3 sentences about yourself here — your background, what
        you're learning, and what kind of work excites you.]
      </p>
      <div className="skills">
        {skills.map((skill, i) => (
          <span className="skill-tag" key={i}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default About;