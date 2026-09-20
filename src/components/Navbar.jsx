import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ siteName, links }) {
  return (
    <nav className="navbar">
      <Link to="/"><h2>{siteName}</h2></Link>
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <Link to="/contact" className="navbar-cta">Get in touch</Link>
    </nav>
  );
}

export default Navbar;