import Projects from "../components/Projects";
import PageWrapper from "../components/PageWrapper";

function ProjectsPage({ projects }) {
  return (
    <PageWrapper>
      <Projects projects={projects} />
    </PageWrapper>
  );
}

export default ProjectsPage;