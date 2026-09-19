import "./Contact.css";

function Contact({ message, links, year, name }) {
  return (
    <>
      <section className="contact" id="contact">
        <span className="section-label">Get In Touch</span>
        <h2>Let's Connect</h2>
        <p>Open to internship/job opportunities and collaborations.
          Please feel free to reach out.</p>
        <div className="contact-links">
          {links.map((link, i) => (
            <a key={i} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </section>
      <p className="footer-note">© 2026 Satyam Giri. All rights reserved.</p>
    </>
  );
}

export default Contact;





 