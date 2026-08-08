import "./Navbar.css";
import {
  FaHouse,
  FaLocationDot,
  FaHotel,
  FaStar,
  FaCircleQuestion,
  FaPhone,
} from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          TravelDealBookings
        </a>

        <div className="nav-links">
          <a href="#home">
            <FaHouse />
            <span>Home</span>
          </a>

          <a href="#destinations">
            <FaLocationDot />
            <span>Destinations</span>
          </a>

          <a href="#hotels">
            <FaHotel />
            <span>Hotels</span>
          </a>

          <a href="#reviews">
            <FaStar />
            <span>Reviews</span>
          </a>

          <a href="#faq">
            <FaCircleQuestion />
            <span>FAQ</span>
          </a>

          <a href="#contact" className="contact-nav-link">
            <FaPhone />
            <span>Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;