import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function App() {
  return (
    <div>
      <Navbar siteName="Portfolio" links={navLinks} />
      <Hero
        greeting="Welcome to my portfolio"
        name="Satyam Giri"
        tagline="Frontend Developer Intern building clean, modern web experiences with React and JavaScript."
        primaryBtn={{ label: "View Projects", href: "#projects" }}
        secondaryBtn={{ label: "Contact Me", href: "#contact" }}
      />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;