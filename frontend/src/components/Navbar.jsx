import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-left">
        <Link to="/" className="logo">
          Meta<span>Forge</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="nav-center">
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>

        {/* ✅ Dashboard entry */}
        <NavLink to="/dashboard/metadata" className="nav-link">
          Metadata
        </NavLink>

        <NavLink to="/projects" className="nav-link">
          Projects
        </NavLink>

        <NavLink to="/pricing" className="nav-link">
          Pricing
        </NavLink>

        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </div>

      {/* Actions */}
      <div className="nav-right">
        <Link to="/dashboard/metadata">
          <button className="btn primary small">
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;


