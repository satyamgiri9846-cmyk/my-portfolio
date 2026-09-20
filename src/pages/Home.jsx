import Hero from "../components/Hero";
import PageWrapper from "../components/PageWrapper";

function Home({ heroData }) {
  return (
    <PageWrapper>
      <Hero {...heroData} />
    </PageWrapper>
  );
}

export default Home;