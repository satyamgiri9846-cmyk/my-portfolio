import TechStack from "../components/TechStack";
import PageWrapper from "../components/PageWrapper";

function TechStackPage({ techs }) {
  return (
    <PageWrapper>
      <TechStack techs={techs} />
    </PageWrapper>
  );
}

export default TechStackPage;