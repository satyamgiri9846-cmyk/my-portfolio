import "./About.css";
import Reveal from "./Reveal";

function About({ bio, skills }) {
  return (
    <section className="about" id="about">
      <Reveal>
        <span className="section-label">About Me</span>
        <h2>A bit about who I am</h2>
        <p>{bio}</p>
        <div className="skills">
          {skills.map((skill, i) => (
            <span className="skill-tag" key={i}>{skill}</span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default About;