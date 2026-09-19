import "./Contact.css";

function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <span className="section-label">Get In Touch</span>
        <h2>Let's Connect</h2>
        <p>
          Open to internship/job opportunities and collaborations.
          Please feel free to reach out.
        </p>
        <div className="contact-links">
          <a href="mailto:satyamgiri9846@gmail.com">Email</a>
          <a href="https://github.com/satyamgiri9846-cmyk" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/satyam-giri-899856207" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://discord.com/users/739362086651559956" target="_blank" rel="noreferrer">Discord</a>
        </div>
      </section>
      <p className="footer-note">© {new Date().getFullYear()} Satyam Giri. All rights reserved.</p>
    </>
  );
}

export default Contact;