import About from "../components/About";
import PageWrapper from "../components/PageWrapper";

function AboutPage({ aboutData }) {
  return (
    <PageWrapper>
      <About bio={aboutData.bio} skills={aboutData.skills} />
    </PageWrapper>
  );
}

export default AboutPage;