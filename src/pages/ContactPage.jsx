import Contact from "../components/Contact";
import PageWrapper from "../components/PageWrapper";

function ContactPage({ contactData }) {
  return (
    <PageWrapper>
      <Contact
        message={contactData.message}
        links={contactData.links}
        year={contactData.year}
        name={contactData.name}
      />
    </PageWrapper>
  );
}

export default ContactPage;