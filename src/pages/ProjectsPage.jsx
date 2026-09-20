import { Helmet } from "react-helmet-async";
import Projects from "../components/Projects";
import PageWrapper from "../components/PageWrapper";

function ProjectsPage({ projects }) {
  return (
    <PageWrapper>
      <Helmet>
        <title>Projects | Satyam Giri</title>
      </Helmet>
      <Projects projects={projects} />
    </PageWrapper>
  );
}

export default ProjectsPage;