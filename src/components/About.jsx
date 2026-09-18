import "./About.css";

function About() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Tailwind"];

  return (
    <section className="about" id="about">
      <span className="section-label">About Me</span>
      <h2>A bit about who I am</h2>
      <p>
        I’m a BIT student currently building my skills in web development, programming, and modern technologies. I enjoy learning by 
        creating practical projects, and I’m especially interested in frontend development and building clean, user-friendly websites.
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