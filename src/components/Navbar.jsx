function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
      <h2>MyPortfolio</h2>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;