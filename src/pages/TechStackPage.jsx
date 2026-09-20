import { Helmet } from "react-helmet-async";
import TechStack from "../components/TechStack";
import PageWrapper from "../components/PageWrapper";

function TechStackPage({ techs }) {
  return (
    <PageWrapper>
      <Helmet>
        <title>Tech Stack | Satyam Giri</title>
      </Helmet>
      <TechStack techs={techs} />
    </PageWrapper>
  );
}

export default TechStackPage;