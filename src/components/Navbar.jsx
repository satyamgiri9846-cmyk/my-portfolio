import "./Navbar.css";

function Navbar({ siteName, links }) {
  return (
    <nav className="navbar">
      <h2>{siteName}</h2>
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;