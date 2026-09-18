import "./Contact.css";

function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <span className="section-label">Get In Touch</span>
        <h2>Let's Connect</h2>
        <p>
          [Open to internship/job opportunities and collaborations — feel free to reach out.]
        </p>
        <div className="contact-links">
          <a href="mailto:youremail@example.com">Email</a>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>
      <p className="footer-note">© {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
    </>
  );
}

export default Contact;