import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import PageWrapper from "../components/PageWrapper";

function Home({ heroData, statsData }) {
  return (
    <PageWrapper>
      <Helmet>
        <title>Satyam Giri | Frontend Developer</title>
      </Helmet>
      <Hero {...heroData} />
      <Stats stats={statsData} />
    </PageWrapper>
  );
}

export default Home;