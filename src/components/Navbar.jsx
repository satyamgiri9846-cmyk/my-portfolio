import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ siteName, links }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="navbar">
      <Link to="/"><h2>{siteName}</h2></Link>
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
        <li>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </li>
      </ul>
      <Link to="/contact" className="navbar-cta">Get in touch</Link>
    </nav>
  );
}

export default Navbar;