import { Helmet } from "react-helmet-async";
import About from "../components/About";
import PageWrapper from "../components/PageWrapper";

function AboutPage({ aboutData }) {
  return (
    <PageWrapper>
      <Helmet>
        <title>About | Satyam Giri</title>
      </Helmet>
      <About bio={aboutData.bio} skills={aboutData.skills} />
    </PageWrapper>
  );
}

export default AboutPage;