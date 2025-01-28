import { useState } from "react";
import "./../css/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Hamburger Menu Icon */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
        </div>
        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="menu">
            {/* Features Row inside Hamburger */}
            <div className="features-row">
              <button className="feature-item">
                <img
                  src="https://img.icons8.com/?size=100&id=f6f4NTIAYAPC&format=png&color=FFFFFF"
                  alt="Credit Card Icon"
                />
                <span>Credit Card</span>
              </button>

              <button className="feature-item">
                <img
                  src="https://img.icons8.com/?size=100&id=cEmouZNE9ycx&format=png&color=FFFFFF"
                  alt="Bank Icon"
                />
                <span>Bank</span>
              </button>

              <button className="feature-item">
                <img
                  src="https://img.icons8.com/?size=100&id=7993&format=png&color=FFFFFF"
                  alt="FD Icon"
                />
                <span>Fixed Deposit</span>
              </button>

              <button className="feature-item">
                <img
                  src="https://img.icons8.com/?size=100&id=21448&format=png&color=FFFFFF"
                  alt="Mutual Fund Icon"
                />
                <span>Mutual Funds</span>
              </button>

              <button className="feature-item">
                <img
                  src="https://img.icons8.com/?size=100&id=45817&format=png&color=FFFFFF"
                  alt="Loan Icon"
                />
                <span>Loans</span>
              </button>

              <button className="feature-item">
                <img
                  src="https://img.icons8.com/?size=100&id=10483&format=png&color=FFFFFF"
                  alt="Insurance Icon"
                />
                <span>Insurance</span>
              </button>

              <button className="feature-item">
                <img
                  src="https://img.icons8.com/?size=100&id=b7GqOaaDLAH9&format=png&color=FFFFFF"
                  alt="General Icon"
                />
                <span>General</span>
              </button>
            </div>
          </div>
        )}

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="extra-buttons">
          <button
            className="nav-btn "
            onClick={() => scrollToSection("services")}
          >
            Services
          </button>
          <button className="nav-btn " onClick={() => scrollToSection("about")}>
            About Us
          </button>
          <button className="login-btn btn">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
