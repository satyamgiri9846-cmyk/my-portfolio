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

const aboutData = {
  bio: "I'm an aspiring web developer currently interning at an IT company, where I'm learning React and building real-world projects. I enjoy turning designs into working, interactive websites and I'm especially interested in frontend development.",
  skills: ["HTML", "CSS", "JavaScript", "React", "Git", "Tailwind"],
};

const techs = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Git & GitHub", icon: "🔧" },
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
      <About bio={aboutData.bio} skills={aboutData.skills} />
      <TechStack techs={techs} />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;