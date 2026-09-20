import About from "../components/About";

function AboutPage({ aboutData }) {
  return <About bio={aboutData.bio} skills={aboutData.skills} />;
}

export default AboutPage;