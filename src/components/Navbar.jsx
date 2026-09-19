import { useState, useEffect } from "react";
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
      <h2>{siteName}</h2>
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
        <li>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;