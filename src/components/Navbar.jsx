import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ siteName, links }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="navbar">
      <Link to="/" onClick={() => setMenuOpen(false)}><h2>{siteName}</h2></Link>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        {links.map((link, i) => (
          <li key={i}>
            <Link to={link.to} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </li>
        <li className="mobile-cta">
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Get in touch
          </Link>
        </li>
      </ul>

      <Link to="/contact" className="navbar-cta desktop-only">Get in touch</Link>
    </nav>
  );
}

export default Navbar;