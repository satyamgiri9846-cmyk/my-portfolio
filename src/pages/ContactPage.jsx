import Contact from "../components/Contact";

function ContactPage({ contactData }) {
  return (
    <Contact
      message={contactData.message}
      links={contactData.links}
      year={contactData.year}
      name={contactData.name}
    />
  );
}

export default ContactPage;