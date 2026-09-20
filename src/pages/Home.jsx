import Hero from "../components/Hero";
import Stats from "../components/Stats";
import PageWrapper from "../components/PageWrapper";

function Home({ heroData, statsData }) {
  return (
    <PageWrapper>
      <Hero {...heroData} />
      <Stats stats={statsData} />
    </PageWrapper>
  );
}

export default Home;