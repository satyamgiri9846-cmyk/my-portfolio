import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import TechStackPage from "./pages/TechStackPage";
import pageBg from "./assets/page-bg.jpg";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Tech Stack", to: "/techstack" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const heroData = {
  badge: "Frontend Developer",
  headline1: "Building clean web",
  headline2: "experiences that work.",
  tagline: "I'm Satyam Giri, an aspiring frontend developer creating modern, functional websites with React and JavaScript.",
  primaryBtn: { label: "View Projects", href: "/projects" },
  secondaryBtn: { label: "Contact Me", href: "/contact" },
};

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

const projects = [
  {
    title: "This Portfolio",
    description: "The site you're looking at right now — built with React, deployed via Cloudflare Pages.",
    link: "#",
  },
];

const contactData = {
  message: "Open to internship/job opportunities and collaborations. Please feel free to reach out.",
  links: [
    { label: "Email", href: "mailto:satyamgiri9846@gmail.com" },
    { label: "GitHub", href: "https://github.com/satyamgiri9846-cmyk" },
    { label: "LinkedIn", href: "https://linkedin.com/in/satyam-giri-899856207" },
    { label: "Discord", href: "https://discord.com/users/739362086651559956" },
  ],
  year: new Date().getFullYear(),
  name: "Satyam Giri",
};

function App() {
  return (
    <div className="page-outer" style={{ backgroundImage: `url(${pageBg})` }}>
      <div className="page-frame">
        <Navbar siteName="Portfolio" links={navLinks} />
        <Routes>
  <Route path="/" element={<Home heroData={heroData} />} />
  <Route path="/about" element={<AboutPage aboutData={aboutData} />} />
  <Route path="/techstack" element={<TechStackPage techs={techs} />} />
  <Route path="/projects" element={<ProjectsPage projects={projects} />} />
  <Route path="/contact" element={<ContactPage contactData={contactData} />} />
</Routes>
      </div>
    </div>
  );
}

export default App;