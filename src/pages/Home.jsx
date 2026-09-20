import Hero from "../components/Hero";
import TechStack from "../components/TechStack";

function Home({ heroData, techs }) {
  return (
    <>
      <Hero {...heroData} />
      <TechStack techs={techs} />
    </>
  );
}

export default Home;