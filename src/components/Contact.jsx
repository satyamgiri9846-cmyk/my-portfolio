import "./Contact.css";
import Reveal from "./Reveal";

function Contact({ message, links, year, name }) {
  return (
    <>
      <section className="contact" id="contact">
        <Reveal>
          <span className="section-label">Get In Touch</span>
          <h2>Let's Connect</h2>
          <p>{message}</p>
          <div className="contact-links">
            {links.map((link, i) => (
              <a key={i} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>
      </section>
      <p className="footer-note">© {year} {name}. All rights reserved.</p>
    </>
  );
}

export default Contact;