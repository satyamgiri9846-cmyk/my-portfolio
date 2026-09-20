import Hero from "../components/Hero";

function Home({ heroData }) {
  return <Hero {...heroData} />;
}

export default Home;