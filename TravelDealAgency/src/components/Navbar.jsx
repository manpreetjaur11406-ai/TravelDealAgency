import "./Navbar.css";

import {
  FaHouse,
  FaLocationDot,
  FaHotel,
  FaStar,
  FaCircleQuestion,
  FaPhone,
  FaBars,
  FaXmark,
} from "react-icons/fa6";

import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <a href="#home" className="navbar-logo">
          TravelDealBookings
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>

        {/* NAVIGATION */}
        <div className={`nav-links ${menuOpen ? "menu-open" : ""}`}>

          <a href="#home" onClick={closeMenu}>
            <FaHouse />
            <span>Home</span>
          </a>

          <a href="#destinations" onClick={closeMenu}>
            <FaLocationDot />
            <span>Destinations</span>
          </a>

          <a href="#hotels" onClick={closeMenu}>
            <FaHotel />
            <span>Hotels</span>
          </a>

          <a href="#reviews" onClick={closeMenu}>
            <FaStar />
            <span>Reviews</span>
          </a>

          <a href="#faq" onClick={closeMenu}>
            <FaCircleQuestion />
            <span>FAQ</span>
          </a>

          <a
            href="#contact"
            className="contact-nav-link"
            onClick={closeMenu}
          >
            <FaPhone />
            <span>Contact</span>
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;